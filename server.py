from flask import Flask, request, jsonify, send_from_directory
import subprocess
import tempfile
import os

app = Flask(__name__, static_folder='.', static_url_path='')

@app.route('/')
def index():
    return send_from_directory('.', 'index.html')

@app.route('/api/run', methods=['POST'])
def run_code():
    data = request.json
    code = data.get('code', '')
    
    if not code:
        return jsonify({'output': 'No code provided', 'error': True})
    
    # Create a temporary directory to compile and run Java code
    with tempfile.TemporaryDirectory() as tmpdir:
        # Assuming the class name is Main for simplicity
        java_file_path = os.path.join(tmpdir, 'Main.java')
        with open(java_file_path, 'w', encoding='utf-8') as f:
            f.write(code)
            
        # Compile
        compile_process = subprocess.run(
            ['javac', 'Main.java'],
            cwd=tmpdir,
            capture_output=True,
            text=True
        )
        
        if compile_process.returncode != 0:
            return jsonify({
                'output': compile_process.stderr,
                'error': True
            })
            
        # Run
        run_process = subprocess.run(
            ['java', 'Main'],
            cwd=tmpdir,
            capture_output=True,
            text=True,
            timeout=5 # Prevent infinite loops
        )
        
        output = run_process.stdout
        if run_process.stderr:
            output += '\n' + run_process.stderr
            
        return jsonify({
            'output': output,
            'error': run_process.returncode != 0
        })

if __name__ == '__main__':
    import os
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)

    #if __name__ == '__main__':
    #import os
    #port = int(os.environ.get('PORT', 5000))
    #app.run(host='0.0.0.0', port=port)

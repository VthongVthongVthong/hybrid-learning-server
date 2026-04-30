# 1. Dùng Python làm nền
FROM python:3.9-slim

# 2. Cài đặt Java (JDK) vào hệ thống
RUN apt-get update && apt-get install -y default-jdk && apt-get clean

# 3. Tạo thư mục làm việc
WORKDIR /app

# 4. Copy toàn bộ code vào trong Docker
COPY . .

# 5. Cài đặt các thư viện Python
RUN pip install --no-cache-dir -r requirements.txt

# 6. Lệnh chạy server
CMD ["gunicorn", "-w", "2", "-b", "0.0.0.0:5000", "server:app"]
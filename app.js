document.addEventListener('DOMContentLoaded', () => {
    // 1. Tab Switching Logic
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all
            tabBtns.forEach(b => b.classList.remove('active'));
            tabPanes.forEach(p => p.classList.remove('active'));

            // Add active class to clicked
            btn.classList.add('active');
            const targetTab = document.getElementById(btn.dataset.tab + '-tab');
            if (targetTab) {
                targetTab.classList.add('active');
            }
        });
    });

    // 2. Enforce "Sandbox" Rules (No Copy/Paste in raw code to force muscle memory)
    const codeEditor = document.getElementById('code-editor');
    const rewriteEditor = document.getElementById('rewrite-editor');

    const preventPaste = (e) => {
        e.preventDefault();
        alert('Hybrid Learning: Không được phép dán (Paste) code. Hãy tự gõ để rèn luyện ký ức cơ bắp (Muscle Memory)!');
    };

    if (codeEditor) {
        codeEditor.addEventListener('paste', preventPaste);
        // Ngăn chặn Drop code vào
        codeEditor.addEventListener('drop', (e) => e.preventDefault());

        // Hỗ trợ phím Tab cho Code Editor
        codeEditor.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                e.preventDefault();
                const start = codeEditor.selectionStart;
                const end = codeEditor.selectionEnd;
                codeEditor.value = codeEditor.value.substring(0, start) + "    " + codeEditor.value.substring(end);
                codeEditor.selectionStart = codeEditor.selectionEnd = start + 4;
            }
        });
    }

    if (rewriteEditor) {
        rewriteEditor.addEventListener('paste', preventPaste);
        rewriteEditor.addEventListener('drop', (e) => e.preventDefault());

        // Hỗ trợ phím Tab cho Rewrite Editor
        rewriteEditor.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                e.preventDefault();
                const start = rewriteEditor.selectionStart;
                const end = rewriteEditor.selectionEnd;
                rewriteEditor.value = rewriteEditor.value.substring(0, start) + "    " + rewriteEditor.value.substring(end);
                rewriteEditor.selectionStart = rewriteEditor.selectionEnd = start + 4;
            }
        });
    }

    // 3. AI Tutor & OpenAI API Logic
    const promptContent = document.getElementById('prompt-content');
    const aiLoading = document.getElementById('ai-loading');
    
    // Xoá OPENAI_API_KEY vì chúng ta đã chuyển sang dùng Puter API miễn phí
    // qua puter.js client-side!

    const promptTemplates = {
        error: `Tôi đang làm bài tập "{{TITLE}}" bằng Java nhưng code bị lỗi.
Tuyệt đối KHÔNG ĐƯỢC đưa ra code hoàn chỉnh.
Chỉ đóng vai trò là một người hướng dẫn (Gia sư). Hãy chỉ ra tôi đang hiểu sai ở dòng nào hoặc logic nào, và cho tôi 1 gợi ý nhỏ.

Đây là code hiện tại của tôi:
\`\`\`java
{{CODE}}
\`\`\`
`,
        hint: `Tôi đang bị bí ý tưởng ở phần vòng lặp/điều kiện trong bài "{{TITLE}}" bằng Java.
Xin ĐỪNG viết code thay tôi.
Hãy hỏi tôi 1 câu hỏi gợi mở để tôi tự nhận ra cách xử lý bước tiếp theo, hoặc giải thích cơ chế logic để tôi tự áp dụng.

Code tôi đang viết dở:
\`\`\`java
{{CODE}}
\`\`\`
`,
        review: `Tôi đã viết xong hàm cho bài "{{TITLE}}" bằng Java.
Hãy đóng vai một Senior Developer, review code của tôi:
1. Độ phức tạp Big O (Thời gian và Không gian) hiện tại là bao nhiêu?
2. Có cách nào viết theo chuẩn Clean Code hơn không? (Chỉ gợi ý hướng tối ưu, không viết lại toàn bộ hàm).

Code của tôi:
\`\`\`java
{{CODE}}
\`\`\`
`
    };

    const generatePrompt = async (type) => {
        if (!codeEditor || !promptContent || !aiLoading) return;

        const userCode = codeEditor.value.trim();
        if (!userCode || userCode.startsWith('// Hãy tự tay')) {
            promptContent.innerHTML = '<span style="color: var(--danger)">Vui lòng gõ code của bạn vào khung "Gõ Code Chay" trước khi nhờ Gia sư!</span>';
            return;
        }

        const title = problemTitle ? problemTitle.textContent : "Lập trình Java";
        const promptText = promptTemplates[type]
            .replace(/{{TITLE}}/g, title)
            .replace('{{CODE}}', userCode);
        
        // Show loading
        promptContent.innerHTML = '<em>Đang suy nghĩ...</em>';
        aiLoading.classList.remove('hidden');

        try {
            // Sử dụng Puter.js thay cho OpenAI API trực tiếp
            const response = await puter.ai.chat([
                { role: 'system', content: 'Bạn là một Gia sư lập trình, bạn sẽ hướng dẫn học sinh bằng phương pháp gợi mở (Socratic method). Bạn KHÔNG BAO GIỜ viết sẵn code giải hoàn chỉnh cho học sinh. Trả lời ngắn gọn, format bằng markdown.' },
                { role: 'user', content: promptText }
            ], { model: 'gpt-4o' });

            const aiMessage = response?.message?.content;
            
            if (aiMessage) {
                // Đã sửa lại lỗi dư backslash (\) trong Regex
                const formattedHtml = aiMessage
                    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                    .replace(/`(.*?)`/g, '<code style="background:rgba(255,255,255,0.1);padding:2px 4px;border-radius:4px;">$1</code>')
                    .replace(/\n/g, '<br>');
                
                promptContent.innerHTML = formattedHtml;
            } else {
                promptContent.innerHTML = `<span style="color: var(--danger)">Lỗi: Không nhận được phản hồi từ AI.</span>`;
            }
        } catch (error) {
            console.error('Puter API Error:', error);
            promptContent.innerHTML = '<span style="color: var(--danger)">Lỗi khi gọi Puter AI. Hãy thử lại sau.</span>';
        } finally {
            aiLoading.classList.add('hidden');
        }
    };

    // Thêm Optional Chaining (?.) để tránh crash ứng dụng nếu giao diện không có nút bấm
    document.getElementById('btn-find-error')?.addEventListener('click', () => generatePrompt('error'));
    document.getElementById('btn-hint')?.addEventListener('click', () => generatePrompt('hint'));
    document.getElementById('btn-review')?.addEventListener('click', () => generatePrompt('review'));

    // 4. Run Code in Terminal
    const runBtn = document.getElementById('btn-run-code');
    const terminalOutput = document.getElementById('terminal-output');

    if (runBtn && terminalOutput && codeEditor) {
        runBtn.addEventListener('click', async () => {
            const code = codeEditor.value;
            if (!code) return;

            terminalOutput.innerHTML = '<span style="color: var(--text-muted)">> Compiling and running Java code...</span>';
            runBtn.disabled = true;
            
            try {
                const res = await fetch('/api/run', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ code })
                });
                
                const data = await res.json();
                if (data.error) {
                    terminalOutput.innerHTML = `<span style="color: var(--danger)">${data.output.replace(/\n/g, '<br>')}</span>`;
                } else {
                    const actualOutput = data.output.trim();
                    terminalOutput.innerHTML = `<span style="color: var(--text-main)">${actualOutput.replace(/\n/g, '<br>')}</span>`;
                    
                    // Check output against tests.js
                    if (typeof exerciseTests !== 'undefined' && exerciseTests[currentExerciseId]) {
                        const expected = exerciseTests[currentExerciseId];
                        if (actualOutput.includes(expected)) {
                            terminalOutput.innerHTML += `<br><br><span style="color: var(--success); font-weight: bold;">🎉 Chúc mừng! Output khớp với đề bài.</span>`;
                        } else {
                            terminalOutput.innerHTML += `<br><br><span style="color: var(--warning);">⚠️ Output chưa khớp với mong đợi (Cần: ${expected}). Hãy kiểm tra lại logic!</span>`;
                        }
                    }

                    if (!actualOutput) {
                        terminalOutput.innerHTML = '<span style="color: var(--text-muted)">[Chương trình kết thúc nhưng không in ra màn hình]</span>';
                    }
                }
            } catch (e) {
                console.error("Chi tiết lỗi:", e);
                terminalOutput.innerHTML = `<span style="color: var(--danger)">Lỗi kết nối hoặc Server đang bận: ${e.message}.<br>Hãy đợi vài giây và thử lại!</span>`;
            } finally {
                runBtn.disabled = false;
            }
        });
    }

    // 5. Exercise Selection Logic
    const exerciseItems = document.querySelectorAll('.exercise-item');
    const problemTitle = document.getElementById('problem-title');
    const problemDesc = document.getElementById('problem-desc');
    const aiReferenceCode = document.getElementById('ai-reference-code');
    let currentExerciseId = 'basic-1'; // Default selected

    exerciseItems.forEach(item => {
        item.addEventListener('click', () => {
            exerciseItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            
            currentExerciseId = item.getAttribute('data-id');
            const exerciseId = currentExerciseId;

            if (problemTitle) {
                const title = item.querySelector('span')?.textContent || 'Untitled Problem';
                problemTitle.textContent = title;
            }
            
            // Cập nhật Mô tả
            if (problemDesc && typeof exerciseDescriptions !== 'undefined') {
                const desc = exerciseDescriptions[exerciseId];
                if (desc) {
                    problemDesc.innerHTML = desc;
                } else {
                    problemDesc.innerHTML = "Đang cập nhật mô tả cho bài tập này...";
                }
            }

            // Cập nhật Code Chuẩn
            if (aiReferenceCode && typeof referenceSolutions !== 'undefined') {
                const solution = referenceSolutions[exerciseId];
                if (solution) {
                    aiReferenceCode.textContent = solution;
                } else {
                    aiReferenceCode.textContent = "// Đang cập nhật code chuẩn cho bài tập này...";
                }
            }
            
            // Đã bổ sung null checks để tránh lỗi
            if (codeEditor) codeEditor.value = '';
            if (rewriteEditor) rewriteEditor.value = '';
            
            const pseudoEditor = document.getElementById('pseudocode-editor');
            if (pseudoEditor) pseudoEditor.value = '';

            // Đã bổ sung reset Terminal Output
            if (terminalOutput) terminalOutput.innerHTML = '';
            
            if (promptContent) {
                promptContent.innerHTML = 'Hãy dán code của bạn vào khung Editor trước, sau đó click một nút gợi ý bên trên để sinh Prompt!';
            }
        });
    });

    // 6. Modal Logic
    const infoBtn = document.getElementById('info-btn');
    const closeModalBtn = document.getElementById('close-modal-btn');
    const infoModal = document.getElementById('info-modal');

    if (infoBtn && closeModalBtn && infoModal) {
        infoBtn.addEventListener('click', () => {
            infoModal.classList.remove('hidden');
        });

        closeModalBtn.addEventListener('click', () => {
            infoModal.classList.add('hidden');
        });

        infoModal.addEventListener('click', (e) => {
            if (e.target === infoModal) {
                infoModal.classList.add('hidden');
            }
        });
    }
});
# HybCode – Nền tảng Học tập Lai (Hybrid Learning) 🚀

> *"Ở năm 2026, một lập trình viên giỏi không phải là người code nhanh hơn AI, mà là người nắm vững nền tảng kiến trúc để có thể kiểm định và định hướng AI một cách chuẩn xác."*
<img width="2561" height="1199" alt="tải xuống (37)" src="https://github.com/user-attachments/assets/c42ff28d-3fca-45d6-9243-190e61addf4c" />

---

## 📌 Vấn đề

Từ giai đoạn bùng nổ AI năm 2023, rất nhiều sinh viên và lập trình viên đã rơi vào **cái bẫy phụ thuộc AI**: sử dụng ChatGPT, Copilot... để giải bài tập lập trình cơ bản (Cơ sở lập trình, DSA, OOP) thay vì tự tay tư duy và viết code. Hệ quả là:

- ✅ Có khả năng sử dụng AI tạm ổn
- ❌ Nền tảng lý thuyết rất yếu
- ❌ Không thể tự tay gõ code mà không có gợi ý
- ❌ Thiếu "muscle memory" (ký ức cơ bắp) khi viết code

**HybCode** ra đời để giải quyết vấn đề này.

---

## 💡 Giải pháp: Mô hình Học tập Lai (Hybrid Learning)

HybCode áp dụng phương pháp **Hybrid Learning** – giúp bạn vừa lấy lại gốc lập trình, vừa nâng cấp kỹ năng điều khiển AI một cách có chủ đích.

### 1. Nguyên tắc "Hộp cát" (Sandbox Rule) 🏗️

Vạch ra ranh giới rõ ràng giữa việc **tự tư duy** và việc **nhờ AI hỗ trợ**.

- **Tư duy không màn hình:** Khi gặp một bài toán, hãy dùng giấy bút để vẽ sơ đồ khối (flowchart) hoặc viết mã giả (pseudo-code) trước khi mở máy tính.
- **Gõ code "chay":** Tắt auto-complete, tự tay gõ từng dòng code để xây dựng lại ký ức cơ bắp và sự nhạy bén với cú pháp.

### 2. Chuyển AI từ "Người làm thuê" thành "Gia sư" 🧠

Thay đổi hoàn toàn cách đặt câu hỏi cho AI.

| ❌ Tránh | ✅ Nên dùng |
|---|---|
| *"Viết cho tôi thuật toán đảo ngược danh sách liên kết."* | *"Tôi đang bị kẹt ở vòng lặp while. Đừng đưa ra code hoàn chỉnh, hãy chỉ ra tôi đang hiểu sai ở dòng nào."* |
| Yêu cầu AI viết toàn bộ code | Gửi code đã tự viết xong và nhờ AI review Big O, Clean Code |

### 3. Phương pháp "Đọc - Phá - Sửa" (Reverse Engineering) 🔍

1. Tự viết một tính năng cốt lõi bằng kiến thức của mình.
2. Yêu cầu AI đưa ra một phiên bản nâng cao hoặc sử dụng design pattern tốt hơn.
3. Đọc từng dòng code của AI, so sánh với code của bạn và **tự tay gõ lại** theo cách hiểu mới.

---

## ✨ Tính năng chính

| Tính năng | Mô tả |
|---|---|
| **Sandbox Code Editor** | Khung gõ code chặn Copy/Paste/Autocomplete, buộc bạn phải tự tay gõ |
| **Terminal tích hợp** | Biên dịch và chạy Java code trực tiếp trên trình duyệt |
| **Auto-grading** | Tự động so khớp output với kết quả mong đợi của đề bài |
| **Gia sư AI (Socratic)** | AI gợi mở bằng câu hỏi, không bao giờ đưa ra code hoàn chỉnh |
| **Reverse Engineering** | So sánh code chuẩn của Senior với code tự viết, rèn luyện tư duy |
| **40+ bài tập** | Từ cơ bản (Số nguyên tố, Fibonacci) đến nâng cao (BST, BFS/DFS, OOP) |

---

## 🛠️ Công nghệ sử dụng

- **Frontend:** HTML5, CSS3 (Premium Dark Mode, Glassmorphism), Vanilla JavaScript
- **Backend:** Python Flask – biên dịch và thực thi Java code qua `subprocess`
- **AI Integration:** [Puter.js](https://docs.puter.com/) – gọi AI miễn phí, không cần API Key
- **Containerization:** Docker (Python + JDK)

---

## 📁 Cấu trúc dự án

```
tuhoc/
├── index.html          # Giao diện chính
├── styles.css          # Dark mode premium styling
├── app.js              # Logic tương tác, AI chat, Tab handling
├── solutions.js        # Code chuẩn (reference) cho từng bài tập
├── descriptions.js     # Mô tả, ví dụ Input/Output cho từng bài
├── tests.js            # Expected output cho auto-grading
├── server.py           # Flask server biên dịch/chạy Java
├── requirements.txt    # Python dependencies
├── Dockerfile          # Container config (Python + JDK)
└── icon/               # Favicon
```

---

## 🚀 Cách chạy

### Chạy cục bộ (Local)

**Yêu cầu:** Python 3.x, Java JDK (javac, java)

```bash
# 1. Cài dependencies
pip install -r requirements.txt

# 2. Khởi động server
python server.py

# 3. Mở trình duyệt
# http://localhost:5000
```

### Chạy bằng Docker

```bash
# Build image
docker build -t hybcode .

# Run container
docker run -p 5000:5000 hybcode
```

---

## 📚 Danh mục bài tập

### Kỹ thuật lập trình cơ bản
Kiểm tra số nguyên tố • Số hoàn hảo • Số đối xứng • Giai thừa • Fibonacci • Chuyển đổi cơ số • Đảo ngược chuỗi • Palindrome • Đếm tần suất ký tự • Chuẩn hóa chuỗi • Tìm Max/Second Max • Cộng ma trận • Nhân ma trận

### Cấu trúc dữ liệu
Single Linked List • Double Linked List • Đảo ngược Linked List • Stack • Queue • Kiểm tra dấu ngoặc hợp lệ • Hash Table • Binary Search Tree • Duyệt cây nhị phân

### Thuật toán
Bubble Sort • Selection Sort • Insertion Sort • Merge Sort • Quick Sort • Linear Search • Binary Search • Tháp Hà Nội • N-Queens • Sinh tập con • BFS • DFS • Tìm đường ngắn nhất

### Lập trình OOP & Thiết kế
Quản lý sinh viên • Quản lý thư viện • Đặt vé xem phim • Quản lý tài khoản ngân hàng

---

## 🎯 Đối tượng hướng đến

- Sinh viên CNTT muốn **lấy lại nền tảng** lập trình sau thời gian phụ thuộc AI
- Lập trình viên muốn chuyển đổi từ "dùng AI thụ động" sang "**làm chủ AI**"
- Bất kỳ ai muốn rèn luyện tư duy thuật toán và kỹ năng code thực chiến

---

<p align="center">
  <strong>Idea by Vthong w ❤️</strong><br>
  <em>Lấy lại nền tảng, Làm chủ AI</em>
</p>

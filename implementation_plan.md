# Nền tảng Học lập trình "Hybrid Learning"

Ứng dụng web (HTML, CSS, JS) được thiết kế đặc biệt để giúp bạn lấy lại nền tảng lập trình và học cách sử dụng AI như một người hướng dẫn (Tutor) thay vì người làm hộ, dựa trên 3 nguyên tắc bạn đã đề cập: Sandbox, Gia sư AI, và Reverse Engineering.

## User Review Required

> [!IMPORTANT]
> **Tích hợp AI:** Đối với phiên bản đầu tiên này, chúng ta sẽ xây dựng dưới dạng Frontend thuần (HTML/CSS/JS). Phần "Gia sư AI" có 2 hướng giải quyết, bạn muốn chọn hướng nào?
> 1. **Tạo Prompt Thông Minh (Đề xuất):** Hệ thống sẽ không gọi API AI trực tiếp. Thay vào đó, khi bạn nhấn nút xin gợi ý, hệ thống sẽ tự động ghép code của bạn với một "System Prompt" chuẩn xác (vd: "Tôi đang kẹt, chỉ cho tôi dòng lỗi, đừng cho code hoàn chỉnh") để bạn **copy và paste** sang ChatGPT/Claude của riêng bạn. Cách này miễn phí và dễ dùng ngay.
> 2. **Tích hợp API thực tế:** Nếu bạn có sẵn API Key của OpenAI hoặc Gemini, chúng ta có thể gọi thẳng từ trình duyệt để AI trả lời ngay trên trang web.

## Open Questions

> [!NOTE]
> 1. Bạn có muốn sử dụng các bài tập ví dụ về mảng, chuỗi, danh sách liên kết (Linked List) có sẵn trong app để thực hành luôn không?
> 2. Bạn thích giao diện (UI) theo phong cách Dark Mode (tối) hay Light Mode (sáng)? Tôi dự định làm Dark Mode kết hợp Glassmorphism (hiệu ứng kính mờ) nhìn cho "ngầu" và premium.

## Proposed Changes

Chúng ta sẽ tạo các file cốt lõi trong thư mục `c:\Users\VIEN THONG\Desktop\tuhoc` như sau:

### Core Files

#### [NEW] [index.html](file:///c:/Users/VIEN%20THONG/Desktop/tuhoc/index.html)
Trang giao diện chính, chia làm 2 phần:
- **Sidebar:** Danh sách bài tập cơ bản (Đảo ngược chuỗi, Tìm kiếm nhị phân, v.v.).
- **Workspace:** Gồm 3 tab (Flowchart/Pseudocode, Code Chay, và Reverse Engineering).
- **AI Tutor Panel:** Bảng điều khiển công cụ AI (nơi tạo prompt hoặc hiển thị gợi ý).

#### [NEW] [styles.css](file:///c:/Users/VIEN%20THONG/Desktop/tuhoc/styles.css)
File CSS thuần mang phong cách thiết kế hiện đại, animation mượt mà, sử dụng biến CSS để quản lý màu sắc, tạo cảm giác chuyên nghiệp (Premium UI) để khơi gợi hứng thú học tập.

#### [NEW] [app.js](file:///c:/Users/VIEN%20THONG/Desktop/tuhoc/app.js)
Quản lý luồng tương tác của người dùng:
- Chuyển đổi giữa các chế độ (viết Pseudocode -> Code).
- Xử lý việc vô hiệu hóa copy/paste/autocomplete trong khung Code để luyện "muscle memory".
- Logic tạo Prompt thông minh để biến AI thành "Gia sư".

## Verification Plan

### Manual Verification
1. Mở file `index.html` trên trình duyệt.
2. Kiểm tra xem giao diện có hiển thị xuất sắc và mượt mà không.
3. Thử gõ code vào "Hộp cát" để xem việc chặn autocomplete có hoạt động tốt giúp bạn tập trung không.
4. Thử chức năng sinh Prompt (hoặc gọi API) để đảm bảo câu lệnh yêu cầu AI đi đúng chuẩn "Gia sư" chứ không phải "Làm thuê".

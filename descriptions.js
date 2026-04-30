const exerciseDescriptions = {
    "basic-1": `Kiểm tra xem một số nguyên dương <code>n</code> có phải là số nguyên tố hay không.<br><br><strong>Ví dụ:</strong><br>Input: <code>n = 7</code><br>Output: <code>true</code><br>Giải thích: 7 chỉ chia hết cho 1 và 7.<br><br>Input: <code>n = 10</code><br>Output: <code>false</code>`,
    "basic-2": `Số hoàn hảo là số nguyên dương mà tổng các ước số thực sự của nó (không bao gồm chính nó) bằng chính nó.<br><br><strong>Ví dụ:</strong><br>Input: <code>num = 28</code><br>Output: <code>true</code><br>Giải thích: 28 = 1 + 2 + 4 + 7 + 14.`,
    "basic-3": `Kiểm tra xem một số nguyên <code>x</code> có phải là số đối xứng (đọc từ trái sang phải giống từ phải sang trái) không. Không dùng chuỗi.<br><br><strong>Ví dụ:</strong><br>Input: <code>x = 121</code><br>Output: <code>true</code>`,
    "basic-4": `Viết hàm đệ quy tính giai thừa của một số nguyên không âm <code>n</code> (n!).<br><br><strong>Ví dụ:</strong><br>Input: <code>n = 5</code><br>Output: <code>120</code> (Vì 5 * 4 * 3 * 2 * 1 = 120)`,
    "basic-5": `Tìm số Fibonacci thứ n. F(0) = 0, F(1) = 1, F(n) = F(n-1) + F(n-2).<br><br><strong>Ví dụ:</strong><br>Input: <code>n = 4</code><br>Output: <code>3</code><br>Giải thích: Dãy là 0, 1, 1, 2, 3... Số thứ 4 là 3.`,
    "basic-6": `Chuyển đổi một số thập phân sang chuỗi nhị phân.<br><br><strong>Ví dụ:</strong><br>Input: <code>n = 10</code><br>Output: <code>"1010"</code>`,
    "basic-7": `Đảo ngược một chuỗi mà không dùng các hàm có sẵn.<br><br><strong>Ví dụ:</strong><br>Input: <code>s = ['h','e','l','l','o']</code><br>Output: <code>['o','l','l','e','h']</code>`,
    "basic-8": `Kiểm tra một chuỗi có phải là Palindrome không. Chỉ xét chữ cái và số, bỏ qua khoảng trắng và dấu câu, không phân biệt hoa thường.<br><br><strong>Ví dụ:</strong><br>Input: <code>"A man, a plan, a canal: Panama"</code><br>Output: <code>true</code>`,
    "basic-9": `Đếm tần suất xuất hiện của các ký tự trong một chuỗi.<br><br><strong>Ví dụ:</strong><br>Input: <code>"hello"</code><br>Output: <code>h: 1, e: 1, l: 2, o: 1</code>`,
    "basic-10": `Xóa khoảng trắng thừa ở đầu/cuối và giữa các từ. Viết hoa chữ cái đầu tiên của mỗi từ.<br><br><strong>Ví dụ:</strong><br>Input: <code>"  hello   world  "</code><br>Output: <code>"Hello World"</code>`,
    "basic-11": `Tìm phần tử lớn nhất và lớn thứ hai trong một mảng số nguyên. Chỉ duyệt mảng 1 lần (O(N)).<br><br><strong>Ví dụ:</strong><br>Input: <code>[12, 35, 1, 10, 34, 1]</code><br>Output: <code>Max: 35, Second Max: 34</code>`,
    "basic-12": `Cộng hai ma trận 2 chiều có cùng kích thước.<br><br><strong>Ví dụ:</strong><br>Input: <code>A = [[1, 2], [3, 4]]</code>, <code>B = [[5, 6], [7, 8]]</code><br>Output: <code>[[6, 8], [10, 12]]</code>`,
    "basic-13": `Nhân hai ma trận A (m x n) và B (n x p).<br><br><strong>Ví dụ:</strong><br>Quy tắc nhân ma trận: Phần tử C[i][j] là tích vô hướng của hàng i của A và cột j của B.`,
    
    // DATA STRUCTURES
    "ds-1": `Triển khai một danh sách liên kết đơn giản với các thao tác cơ bản: <code>addAtHead</code>, <code>addAtTail</code>, <code>deleteAtIndex</code>.`,
    "ds-2": `Triển khai danh sách liên kết đôi (mỗi node có con trỏ <code>prev</code> và <code>next</code>).`,
    "ds-3": `Cho một danh sách liên kết đơn. Hãy viết hàm đảo ngược danh sách đó.<br><br><strong>Ví dụ:</strong><br>Input: <code>1 -> 2 -> 3 -> 4 -> 5 -> NULL</code><br>Output: <code>5 -> 4 -> 3 -> 2 -> 1 -> NULL</code>`,
    "ds-4": `Tự triển khai cấu trúc dữ liệu Stack bằng mảng với các hàm <code>push()</code>, <code>pop()</code>, <code>peek()</code>.`,
    "ds-5": `Tự triển khai cấu trúc dữ liệu Queue bằng mảng hoặc Linked List với <code>enqueue()</code> và <code>dequeue()</code>.`,
    "ds-6": `Cho chuỗi chỉ chứa các ký tự <code>()[]{}</code>. Kiểm tra xem các dấu ngoặc có đóng mở hợp lệ không.<br><br><strong>Ví dụ:</strong><br>Input: <code>"()[]{}"</code> -> Output: <code>true</code><br>Input: <code>"(]"</code> -> Output: <code>false</code>`,
    "ds-7": `Tự viết một Hash Table đơn giản hỗ trợ <code>put(key, value)</code> và <code>get(key)</code>. Xử lý xung đột bằng chaining hoặc linear probing.`,
    "ds-8": `Triển khai Cây tìm kiếm nhị phân (BST) với hàm thêm một node (<code>insert</code>). Node bên trái phải nhỏ hơn root, node bên phải lớn hơn root.`,
    "ds-9": `Viết hàm duyệt một cây nhị phân theo thứ tự In-order (Trái - Gốc - Phải) và in ra các giá trị.`,

    // ALGORITHMS
    "algo-1": `Cài đặt thuật toán sắp xếp nổi bọt (Bubble Sort) trên mảng số nguyên.`,
    "algo-2": `Cài đặt thuật toán sắp xếp chọn (Selection Sort). Mức độ phức tạp O(N^2).`,
    "algo-3": `Cài đặt thuật toán sắp xếp chèn (Insertion Sort).`,
    "algo-4": `Cài đặt thuật toán sắp xếp trộn (Merge Sort). Sử dụng phương pháp chia để trị. O(N log N).`,
    "algo-5": `Cài đặt thuật toán sắp xếp nhanh (Quick Sort) với phân hoạch (partition). O(N log N).`,
    "algo-6": `Viết hàm tìm kiếm tuyến tính (Linear Search). Duyệt mảng từ đầu đến cuối để tìm x.`,
    "algo-7": `Cho một mảng đã được sắp xếp tăng dần. Cài đặt Binary Search để tìm vị trí của <code>x</code> với độ phức tạp O(log N).<br><br><strong>Ví dụ:</strong><br>Input: <code>nums = [-1,0,3,5,9,12], target = 9</code><br>Output: <code>4</code>`,
    "algo-8": `Giải bài toán Tháp Hà Nội bằng đệ quy. Chuyển n đĩa từ cột A sang cột C, dùng cột B làm trung gian.<br>Luật: Đĩa lớn không được đặt trên đĩa nhỏ.`,
    "algo-9": `Sử dụng thuật toán Quay lui (Backtracking) để giải bài toán đặt 8 quân hậu trên bàn cờ vua sao cho không quân nào tấn công quân nào.`,
    "algo-10": `Cho mảng các số nguyên không trùng lặp, trả về tất cả các tập con có thể có (Power set).<br><br><strong>Ví dụ:</strong><br>Input: <code>[1,2,3]</code><br>Output: <code>[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]</code>`,
    "algo-11": `Duyệt đồ thị vô hướng theo chiều rộng (Breadth-First Search) từ một đỉnh cho trước. Sử dụng cấu trúc Queue.`,
    "algo-12": `Duyệt đồ thị vô hướng theo chiều sâu (Depth-First Search) từ một đỉnh cho trước. Sử dụng Stack hoặc Đệ quy.`,
    "algo-13": `Cho một ma trận lưới n x n với 0 (đường đi) và 1 (tường). Tìm đường đi ngắn nhất từ góc trên cùng bên trái đến góc dưới cùng bên phải bằng BFS.`,

    // OOP
    "oop-1": `Thiết kế class <code>Student</code> (id, name, gpa) và <code>StudentManager</code> để quản lý thêm, sửa, xóa, và tìm kiếm sinh viên.`,
    "oop-2": `Thiết kế class <code>Book</code> và <code>Library</code>. Hỗ trợ mượn sách, trả sách và hiển thị sách đang có sẵn.`,
    "oop-3": `Thiết kế các class cho Rạp phim. Quản lý trạng thái ghế (đã đặt, trống) và chức năng đặt ghế.`,
    "oop-4": `Thiết kế class <code>BankAccount</code> với các chức năng nạp tiền, rút tiền an toàn, đảm bảo tính đóng gói (encapsulation).`
};

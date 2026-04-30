const referenceSolutions = {
    // KỸ THUẬT LẬP TRÌNH CƠ BẢN
    "basic-1": `/**
 * Kiểm tra số nguyên tố
 * Time Complexity: O(√N)
 * Space Complexity: O(1)
 */
class Solution {
    public boolean isPrime(int n) {
        if (n <= 1) return false;
        if (n <= 3) return true;
        if (n % 2 == 0 || n % 3 == 0) return false;
        for (int i = 5; i * i <= n; i += 6) {
            if (n % i == 0 || n % (i + 2) == 0) return false;
        }
        return true;
    }
}`,
    "basic-2": `/**
 * Kiểm tra số hoàn hảo
 * Time Complexity: O(√N)
 * Space Complexity: O(1)
 */
class Solution {
    public boolean isPerfectNumber(int num) {
        if (num <= 1) return false;
        int sum = 1;
        for (int i = 2; i * i <= num; i++) {
            if (num % i == 0) {
                sum += i;
                if (i * i != num) sum += num / i;
            }
        }
        return sum == num;
    }
}`,
    "basic-3": `/**
 * Kiểm tra số đối xứng
 * Time Complexity: O(log10(N))
 * Space Complexity: O(1)
 */
class Solution {
    public boolean isPalindrome(int x) {
        if (x < 0 || (x % 10 == 0 && x != 0)) return false;
        int revertedNumber = 0;
        while (x > revertedNumber) {
            revertedNumber = revertedNumber * 10 + x % 10;
            x /= 10;
        }
        return x == revertedNumber || x == revertedNumber / 10;
    }
}`,
    "basic-4": `/**
 * Tính giai thừa (Đệ quy)
 * Time Complexity: O(N)
 * Space Complexity: O(N)
 */
class Solution {
    public long factorial(int n) {
        if (n <= 1) return 1;
        return n * factorial(n - 1);
    }
}`,
    "basic-5": `/**
 * Tìm số Fibonacci thứ n (Quy hoạch động tối ưu không gian)
 * Time Complexity: O(N)
 * Space Complexity: O(1)
 */
class Solution {
    public int fib(int n) {
        if (n <= 1) return n;
        int a = 0, b = 1;
        for (int i = 2; i <= n; i++) {
            int temp = a + b;
            a = b;
            b = temp;
        }
        return b;
    }
}`,
    "basic-6": `/**
 * Chuyển đổi cơ số (Thập phân sang Nhị phân)
 */
class Solution {
    public String toBinary(int n) {
        if (n == 0) return "0";
        StringBuilder sb = new StringBuilder();
        while (n > 0) {
            sb.append(n % 2);
            n /= 2;
        }
        return sb.reverse().toString();
    }
}`,
    "basic-7": `/**
 * Đảo ngược chuỗi (In-place với mảng char)
 * Time Complexity: O(N)
 * Space Complexity: O(N) (String in Java is immutable)
 */
class Solution {
    public void reverseString(char[] s) {
        int left = 0, right = s.length - 1;
        while (left < right) {
            char temp = s[left];
            s[left++] = s[right];
            s[right--] = temp;
        }
    }
}`,
    "basic-8": `/**
 * Kiểm tra chuỗi Palindrome (Chỉ xét chữ và số)
 * Time Complexity: O(N)
 */
class Solution {
    public boolean isPalindrome(String s) {
        int i = 0, j = s.length() - 1;
        while (i < j) {
            while (i < j && !Character.isLetterOrDigit(s.charAt(i))) i++;
            while (i < j && !Character.isLetterOrDigit(s.charAt(j))) j--;
            if (Character.toLowerCase(s.charAt(i)) != Character.toLowerCase(s.charAt(j))) {
                return false;
            }
            i++; j--;
        }
        return true;
    }
}`,
    "basic-9": `/**
 * Đếm tần suất xuất hiện ký tự
 */
class Solution {
    public int[] getFrequencies(String s) {
        int[] freq = new int[256];
        for (char c : s.toCharArray()) {
            freq[c]++;
        }
        return freq;
    }
}`,
    "basic-10": `/**
 * Chuẩn hóa chuỗi (Viết hoa chữ cái đầu)
 */
class Solution {
    public String capitalize(String title) {
        String[] words = title.split(" ");
        StringBuilder sb = new StringBuilder();
        for (String w : words) {
            if (w.isEmpty()) continue;
            sb.append(Character.toUpperCase(w.charAt(0)))
              .append(w.substring(1).toLowerCase())
              .append(" ");
        }
        return sb.toString().trim();
    }
}`,
    "basic-11": `/**
 * Tìm phần tử lớn nhất và lớn thứ 2 trong mảng
 */
class Solution {
    public int[] findTopTwo(int[] nums) {
        int max1 = Integer.MIN_VALUE, max2 = Integer.MIN_VALUE;
        for (int n : nums) {
            if (n > max1) {
                max2 = max1;
                max1 = n;
            } else if (n > max2 && n != max1) {
                max2 = n;
            }
        }
        return new int[]{max1, max2};
    }
}`,
    "basic-12": `/**
 * Cộng hai ma trận
 */
class Solution {
    public int[][] addMatrices(int[][] a, int[][] b) {
        int r = a.length, c = a[0].length;
        int[][] res = new int[r][c];
        for (int i = 0; i < r; i++) {
            for (int j = 0; j < c; j++) {
                res[i][j] = a[i][j] + b[i][j];
            }
        }
        return res;
    }
}`,
    "basic-13": `/**
 * Nhân hai ma trận
 */
class Solution {
    public int[][] multiplyMatrices(int[][] A, int[][] B) {
        int r1 = A.length, c1 = A[0].length, c2 = B[0].length;
        int[][] res = new int[r1][c2];
        for (int i = 0; i < r1; i++) {
            for (int j = 0; j < c2; j++) {
                for (int k = 0; k < c1; k++) {
                    res[i][j] += A[i][k] * B[k][j];
                }
            }
        }
        return res;
    }
}`,

    // CẤU TRÚC DỮ LIỆU
    "ds-1": `/**
 * Triển khai Single Linked List
 */
class ListNode {
    int val;
    ListNode next;
    ListNode(int x) { val = x; }
}
class MyLinkedList {
    ListNode head;
    public void addAtHead(int val) {
        ListNode node = new ListNode(val);
        node.next = head;
        head = node;
    }
}`,
    "ds-2": `/**
 * Triển khai Double Linked List
 */
class DoubleNode {
    int val;
    DoubleNode prev, next;
    DoubleNode(int x) { val = x; }
}`,
    "ds-3": `/**
 * Đảo ngược Linked List (Chuẩn Clean Code)
 * Time Complexity: O(N)
 * Space Complexity: O(1)
 */
class ListNode {
    int val;
    ListNode next;
    ListNode(int x) { val = x; }
}

class Solution {
    public ListNode reverseList(ListNode head) {
        ListNode prev = null;
        ListNode curr = head;
        
        while (curr != null) {
            ListNode nextTemp = curr.next; // Lưu trữ node tiếp theo
            curr.next = prev;              // Đảo ngược con trỏ
            prev = curr;                   // Tiến prev lên 1 bước
            curr = nextTemp;               // Tiến curr lên 1 bước
        }
        
        return prev; // prev sẽ là head mới
    }
}`,
    "ds-4": `/**
 * Triển khai Stack (bằng mảng)
 */
class MyStack {
    private int[] arr;
    private int top;
    
    public MyStack(int capacity) {
        arr = new int[capacity];
        top = -1;
    }
    
    public void push(int x) {
        arr[++top] = x;
    }
    
    public int pop() {
        return arr[top--];
    }
}`,
    "ds-5": `/**
 * Triển khai Queue (bằng LinkedList)
 */
class MyQueue {
    ListNode front, rear;
    
    public void enqueue(int x) {
        ListNode node = new ListNode(x);
        if (rear == null) {
            front = rear = node;
            return;
        }
        rear.next = node;
        rear = node;
    }
}`,
    "ds-6": `/**
 * Kiểm tra tính hợp lệ dấu ngoặc
 */
class Solution {
    public boolean isValid(String s) {
        Stack<Character> stack = new Stack<>();
        for (char c : s.toCharArray()) {
            if (c == '(') stack.push(')');
            else if (c == '{') stack.push('}');
            else if (c == '[') stack.push(']');
            else if (stack.isEmpty() || stack.pop() != c) return false;
        }
        return stack.isEmpty();
    }
}`,
    "ds-7": `/**
 * Triển khai Hash Table cơ bản
 */
class MyHashMap {
    int[] map;
    public MyHashMap() {
        map = new int[1000001];
        Arrays.fill(map, -1);
    }
    public void put(int key, int value) {
        map[key] = value;
    }
    public int get(int key) {
        return map[key];
    }
}`,
    "ds-8": `/**
 * Triển khai BST (Thêm node)
 */
class TreeNode {
    int val;
    TreeNode left, right;
    TreeNode(int x) { val = x; }
}
class BST {
    public TreeNode insert(TreeNode root, int val) {
        if (root == null) return new TreeNode(val);
        if (val < root.val) root.left = insert(root.left, val);
        else if (val > root.val) root.right = insert(root.right, val);
        return root;
    }
}`,
    "ds-9": `/**
 * Duyệt cây nhị phân (In-order)
 */
class Solution {
    public void inorder(TreeNode root) {
        if (root != null) {
            inorder(root.left);
            System.out.print(root.val + " ");
            inorder(root.right);
        }
    }
}`,

    // THUẬT TOÁN
    "algo-1": `/** Bubble Sort */
class Solution {
    public void bubbleSort(int[] arr) {
        int n = arr.length;
        for (int i = 0; i < n-1; i++)
            for (int j = 0; j < n-i-1; j++)
                if (arr[j] > arr[j+1]) {
                    int temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                }
    }
}`,
    "algo-2": `/** Selection Sort */
class Solution {
    public void selectionSort(int[] arr) {
        for (int i = 0; i < arr.length - 1; i++) {
            int minIdx = i;
            for (int j = i + 1; j < arr.length; j++)
                if (arr[j] < arr[minIdx]) minIdx = j;
            int temp = arr[minIdx];
            arr[minIdx] = arr[i];
            arr[i] = temp;
        }
    }
}`,
    "algo-3": `/** Insertion Sort */
class Solution {
    public void insertionSort(int[] arr) {
        for (int i = 1; i < arr.length; i++) {
            int key = arr[i];
            int j = i - 1;
            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j = j - 1;
            }
            arr[j + 1] = key;
        }
    }
}`,
    "algo-4": `/** Merge Sort */
class Solution {
    public void mergeSort(int[] a, int n) {
        if (n < 2) return;
        int mid = n / 2;
        int[] l = new int[mid];
        int[] r = new int[n - mid];
        for (int i = 0; i < mid; i++) l[i] = a[i];
        for (int i = mid; i < n; i++) r[i - mid] = a[i];
        mergeSort(l, mid);
        mergeSort(r, n - mid);
        merge(a, l, r, mid, n - mid);
    }
    // merge helper omitted for brevity
}`,
    "algo-5": `/** Quick Sort */
class Solution {
    public void quickSort(int[] arr, int begin, int end) {
        if (begin < end) {
            int partitionIndex = partition(arr, begin, end);
            quickSort(arr, begin, partitionIndex-1);
            quickSort(arr, partitionIndex+1, end);
        }
    }
    private int partition(int arr[], int begin, int end) {
        int pivot = arr[end];
        int i = (begin-1);
        for (int j = begin; j < end; j++) {
            if (arr[j] <= pivot) {
                i++;
                int swapTemp = arr[i];
                arr[i] = arr[j];
                arr[j] = swapTemp;
            }
        }
        int swapTemp = arr[i+1];
        arr[i+1] = arr[end];
        arr[end] = swapTemp;
        return i+1;
    }
}`,
    "algo-6": `/** Linear Search */
class Solution {
    public int search(int arr[], int x) {
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == x) return i;
        }
        return -1;
    }
}`,
    "algo-7": `/** Binary Search */
class Solution {
    public int binarySearch(int arr[], int x) {
        int l = 0, r = arr.length - 1;
        while (l <= r) {
            int m = l + (r - l) / 2;
            if (arr[m] == x) return m;
            if (arr[m] < x) l = m + 1;
            else r = m - 1;
        }
        return -1;
    }
}`,
    "algo-8": `/** Bài toán Tháp Hà Nội */
class Solution {
    static void towerOfHanoi(int n, char from_rod, char to_rod, char aux_rod) {
        if (n == 1) {
            System.out.println("Move disk 1 from " + from_rod + " to " + to_rod);
            return;
        }
        towerOfHanoi(n - 1, from_rod, aux_rod, to_rod);
        System.out.println("Move disk " + n + " from " + from_rod + " to " + to_rod);
        towerOfHanoi(n - 1, aux_rod, to_rod, from_rod);
    }
}`,
    "algo-9": `/** N-Queens (Quay lui) */
class Solution {
    public void solveNQueens(int n) {
        // Thuật toán quay lui đặt từng quân hậu
        // Đang cập nhật chi tiết...
    }
}`,
    "algo-10": `/** Sinh tất cả tập con (Backtracking) */
class Solution {
    public List<List<Integer>> subsets(int[] nums) {
        List<List<Integer>> list = new ArrayList<>();
        backtrack(list, new ArrayList<>(), nums, 0);
        return list;
    }
    private void backtrack(List<List<Integer>> list, List<Integer> tempList, int[] nums, int start){
        list.add(new ArrayList<>(tempList));
        for(int i = start; i < nums.length; i++){
            tempList.add(nums[i]);
            backtrack(list, tempList, nums, i + 1);
            tempList.remove(tempList.size() - 1);
        }
    }
}`,
    "algo-11": `/** Duyệt đồ thị BFS */
class Graph {
    void BFS(int s) {
        // Đang cập nhật chi tiết...
    }
}`,
    "algo-12": `/** Duyệt đồ thị DFS */
class Graph {
    void DFS(int v) {
        // Đang cập nhật chi tiết...
    }
}`,
    "algo-13": `/** Đường đi ngắn nhất trong mê cung (BFS) */
class Solution {
    public int shortestPathBinaryMatrix(int[][] grid) {
        // Sử dụng Queue và mảng visits
        // Đang cập nhật chi tiết...
        return -1;
    }
}`,

    // OOP
    "oop-1": `/** Hệ thống quản lý sinh viên */
class Student {
    private String id;
    private String name;
    private double gpa;

    public Student(String id, String name, double gpa) {
        this.id = id;
        this.name = name;
        this.gpa = gpa;
    }
    // Getters and Setters
}
class StudentManager {
    private List<Student> students = new ArrayList<>();
    
    public void addStudent(Student s) {
        students.add(s);
    }
}`,
    "oop-2": `/** Quản lý thư viện */
class Book {
    String isbn;
    boolean isAvailable = true;
}
class Library {
    List<Book> inventory = new ArrayList<>();
    
    public void borrowBook(String isbn) {
        // Logic mượn sách
    }
}`,
    "oop-3": `/** Hệ thống đặt vé xem phim */
class Seat {
    int row, col;
    boolean isBooked;
}
class Cinema {
    Seat[][] seats;
    public boolean bookSeat(int r, int c) {
        if (!seats[r][c].isBooked) {
            seats[r][c].isBooked = true;
            return true;
        }
        return false;
    }
}`,
    "oop-4": `/** Quản lý tài khoản ngân hàng */
class BankAccount {
    private double balance;

    public synchronized void deposit(double amount) {
        balance += amount;
    }

    public synchronized boolean withdraw(double amount) {
        if (balance >= amount) {
            balance -= amount;
            return true;
        }
        return false;
    }
}`
};

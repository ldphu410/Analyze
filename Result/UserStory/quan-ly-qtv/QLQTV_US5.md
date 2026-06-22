# User Story: QLQTV_US5

| Trường | Giá trị |
|--------|---------|
| **Module** | Quản lý QTV |
| **Epic** | 3 — Thêm quản trị viên |
| **Pages** | 2 |
| **REQ IDs** | REQ-QTV-004 |
| **Điểm ước lượng** | M (≈2–3 ngày) |

## Câu chuyện

**Với vai trò** Quản trị Web Admin  
**Tôi muốn** mở form thêm quản trị viên mới  
**Để** tạo tài khoản mà không cần rời khỏi trang danh sách

## Tiêu chí chấp nhận

- **Cho trước** admin đang ở trang Danh sách quản trị viên  
- **Khi** nhấn "Thêm quản trị viên"  
- **Thì** mở modal với các trường: tên, email, vai trò (role), trạng thái  
- **Và** có nút Lưu / Hủy  
- **Và** hiển thị lỗi validation nếu thiếu trường bắt buộc hoặc email không hợp lệ

## Phạm vi giao diện

- Nút Thêm quản trị viên
- Modal form
- Các trường nhập liệu
- Nút Lưu / Hủy

## Lưu ý triển khai

- Tái sử dụng modal và form từ thư viện UI hiện có  
- Kiểm tra email trùng lặp `[GIẢ ĐỊNH]`  
- Cảnh báo khi đóng modal còn dữ liệu chưa lưu

## Phụ thuộc

- API: `GET /api/roles`, `POST /api/admin-users` `[CHƯA RÕ]`
- Quyền: tạo quản trị viên

## Ngoài phạm vi

- Gửi email mời kích hoạt tài khoản

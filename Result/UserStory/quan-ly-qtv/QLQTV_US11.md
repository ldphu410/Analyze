# User Story: QLQTV_US11

| Trường | Giá trị |
|--------|---------|
| **Module** | Quản lý QTV |
| **Epic** | 5 — Thao tác chung |
| **Pages** | 1–3 |
| **REQ IDs** | — |
| **Điểm ước lượng** | M (≈2–3 ngày) |

## Câu chuyện

**Với vai trò** Quản trị Web Admin  
**Tôi muốn** chỉ thấy các thao tác mà tôi được phép thực hiện  
**Để** giao diện gọn và tránh thao tác không hợp lệ

## Tiêu chí chấp nhận

- **Cho trước** admin đăng nhập với quyền hạn giới hạn  
- **Khi** xem module Quản lý QTV  
- **Thì** các thao tác không được phép sẽ bị ẩn hoặc vô hiệu hóa  
- **Và** không hiển thị thông báo lỗi quyền gây khó hiểu cho người dùng

## Phạm vi giao diện

- Menu thao tác (ẩn / disable theo quyền)
- Nút Thêm, Sửa, Xóa

## Lưu ý triển khai

- Kiểm tra quyền trước khi hiển thị thao tác `[GIẢ ĐỊNH]`  
- Cần dữ liệu quyền từ session hoặc API metadata `[CHƯA RÕ]`

## Phụ thuộc

- Hệ thống phân quyền (role-based access control)
- API metadata quyền người dùng `[CHƯA RÕ]`

## Ngoài phạm vi

- Quản lý ma trận quyền chi tiết (permission matrix editor)

# User Story: QLQTV_US1

| Trường | Giá trị |
|--------|---------|
| **Module** | Quản lý QTV |
| **Epic** | 1 — Danh sách quản trị viên |
| **Pages** | 1, 2 |
| **REQ IDs** | REQ-QTV-001, REQ-QTV-002 |
| **Điểm ước lượng** | M (≈2–3 ngày) |

## Câu chuyện

**Với vai trò** Quản trị Web Admin  
**Tôi muốn** xem danh sách tài khoản quản trị viên dạng bảng có phân trang  
**Để** tìm kiếm và quản lý nhanh mà không cần tải toàn bộ dữ liệu một lần

## Tiêu chí chấp nhận

- **Cho trước** admin mở trang Danh sách quản trị viên  
- **Khi** trang được tải  
- **Thì** hiển thị bảng với các cột: tên, email, vai trò (role), trạng thái, ngày tạo, thao tác  
- **Và** hiển thị trang đầu tiên của kết quả  
- **Và** hiển thị trạng thái trống khi chưa có quản trị viên  
- **Và** hiển thị loading khi đang tải dữ liệu

## Phạm vi giao diện

- Bảng danh sách (table)
- Phân trang (pagination)
- Menu thao tác trên từng dòng

## Lưu ý triển khai

- Tái sử dụng component bảng từ Web Chuyên Gia  
- Hỗ trợ sắp xếp theo ít nhất một cột `[GIẢ ĐỊNH]`  
- Hiển thị thông báo lỗi kèm nút thử lại nếu tải dữ liệu thất bại

## Phụ thuộc

- API: `GET /api/admin-users?page=&limit=` `[CHƯA RÕ]`
- Quyền: quản lý tài khoản quản trị viên

## Ngoài phạm vi

- Thao tác hàng loạt (bulk action)

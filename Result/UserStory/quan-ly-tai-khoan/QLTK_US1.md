# User Story: QLTK_US1

| Trường | Giá trị |
|--------|---------|
| **Module** | Quản lý Tài khoản |
| **Epic** | 1 — Danh sách tài khoản |
| **Pages** | 6, 7 |
| **REQ IDs** | REQ-ACC-001, REQ-ACC-002 |
| **Điểm ước lượng** | M (≈2–3 ngày) |

## Câu chuyện

**Với vai trò** Quản trị Web Admin  
**Tôi muốn** xem danh sách tài khoản người dùng kèm trạng thái duyệt  
**Để** xác định tài khoản nào cần xử lý hoặc rà soát

## Tiêu chí chấp nhận

- **Cho trước** admin mở trang Danh sách tài khoản  
- **Khi** trang được tải  
- **Thì** hiển thị bảng với: tên, email, trạng thái duyệt, trạng thái khóa, thao tác  
- **Và** hiển thị trạng thái trống khi chưa có tài khoản  
- **Và** hiển thị loading khi đang tải dữ liệu

## Phạm vi giao diện

- Bảng danh sách kèm badge trạng thái
- Menu thao tác trên từng dòng
- Thanh tìm kiếm / lọc `[GIẢ ĐỊNH]`

## Lưu ý triển khai

- Tái sử dụng component bảng từ Web Chuyên Gia  
- Phân trang phía server `[GIẢ ĐỊNH]`  
- Thông báo lỗi kèm nút thử lại khi tải thất bại

## Phụ thuộc

- API: `GET /api/user-accounts` `[CHƯA RÕ]`
- Quyền: xem danh sách tài khoản

## Ngoài phạm vi

- Khóa / mở khóa hàng loạt

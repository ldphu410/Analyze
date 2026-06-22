# User Story: QLQTV_US4

| Trường | Giá trị |
|--------|---------|
| **Module** | Quản lý QTV |
| **Epic** | 2 — Chi tiết quản trị viên |
| **Pages** | 2 |
| **REQ IDs** | REQ-QTV-002 |
| **Điểm ước lượng** | S (≈0,5–1,5 ngày) |

## Câu chuyện

**Với vai trò** Quản trị Web Admin  
**Tôi muốn** mở chi tiết quản trị viên từ danh sách  
**Để** xem đầy đủ thông tin trước khi chỉnh sửa hoặc xóa

## Tiêu chí chấp nhận

- **Cho trước** admin đang ở trang Danh sách quản trị viên  
- **Khi** chọn "Xem chi tiết" từ menu thao tác  
- **Thì** mở panel hoặc màn hình chi tiết với đầy đủ thông tin quản trị viên  
- **Và** các trường hiển thị ở chế độ chỉ xem (read-only)

## Phạm vi giao diện

- Menu thao tác
- Panel / màn hình chi tiết
- Các trường thông tin chỉ xem

## Lưu ý triển khai

- Tái sử dụng panel chi tiết từ Web Chuyên Gia  
- Hiển thị loading và thông báo lỗi kèm thử lại khi tải thất bại

## Phụ thuộc

- API: `GET /api/admin-users/{adminId}` `[CHƯA RÕ]`
- QLQTV_US1 (danh sách cơ bản)

## Ngoài phạm vi

- Chỉnh sửa trực tiếp trên màn hình chi tiết (dùng modal chỉnh sửa — QLQTV_US6)

# User Story: QLQTV_US9

| Trường | Giá trị |
|--------|---------|
| **Module** | Quản lý QTV |
| **Epic** | 5 — Thao tác chung |
| **Pages** | 2 |
| **REQ IDs** | BR-QTV-001 |
| **Điểm ước lượng** | S (≈0,5–1,5 ngày) |

## Câu chuyện

**Với vai trò** Quản trị Web Admin  
**Tôi muốn** xác nhận trước khi xóa quản trị viên  
**Để** tránh xóa nhầm tài khoản

## Tiêu chí chấp nhận

- **Cho trước** admin chọn "Xóa" từ menu thao tác  
- **Khi** thao tác xóa được kích hoạt  
- **Thì** hiển thị popup xác nhận kèm tên quản trị viên  
- **Và** chỉ thực hiện xóa sau khi admin xác nhận `[ĐÃ XÁC NHẬN]`

## Phạm vi giao diện

- Menu thao tác → Xóa
- Popup xác nhận

## Lưu ý triển khai

- Tái sử dụng popup xác nhận từ Web Chuyên Gia `[ĐÃ XÁC NHẬN]`  
- Hiển thị thông báo lỗi nếu xóa thất bại

## Phụ thuộc

- API: `DELETE /api/admin-users/{adminId}` `[CHƯA RÕ]`
- Quyền: xóa quản trị viên

## Ngoài phạm vi

- Xóa hàng loạt (bulk delete)

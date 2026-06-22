# User Story: QLQTV_US3

| Trường | Giá trị |
|--------|---------|
| **Module** | Quản lý QTV |
| **Epic** | 1 — Danh sách quản trị viên |
| **Pages** | 1, 2 |
| **REQ IDs** | REQ-QTV-007 |
| **Điểm ước lượng** | S (≈0,5–1,5 ngày) |

## Câu chuyện

**Với vai trò** Quản trị Web Admin  
**Tôi muốn** lọc danh sách quản trị viên theo trạng thái và vai trò (role)  
**Để** tập trung vào nhóm tài khoản cần xử lý

## Tiêu chí chấp nhận

- **Cho trước** admin đang ở trang Danh sách quản trị viên  
- **Khi** chọn bộ lọc trạng thái hoặc vai trò  
- **Thì** bảng chỉ hiển thị các quản trị viên phù hợp  
- **Và** yêu cầu lọc được gửi lên server kèm tham số filter

## Phạm vi giao diện

- Bộ lọc trạng thái và vai trò (dropdown hoặc chip)
- Làm mới bảng sau khi lọc

## Lưu ý triển khai

- Lọc phía server (server-side filter) `[GIẢ ĐỊNH]`  
- Có thể hỗ trợ chọn nhiều giá trị `[GIẢ ĐỊNH]`

## Phụ thuộc

- API: `GET /api/admin-users?status=&roles=` `[CHƯA RÕ]`
- QLQTV_US1 (danh sách cơ bản)

## Ngoài phạm vi

- Lưu bộ lọc yêu thích

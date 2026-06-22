# User Story: QLQTV_US7

| Trường | Giá trị |
|--------|---------|
| **Module** | Quản lý QTV |
| **Epic** | 4 — Phân quyền |
| **Pages** | 3 |
| **REQ IDs** | REQ-QTV-005 |
| **Điểm ước lượng** | S (≈0,5–1,5 ngày) |

## Câu chuyện

**Với vai trò** Quản trị Web Admin  
**Tôi muốn** gán nhiều vai trò (role) cho một quản trị viên  
**Để** quyền truy cập phản ánh đúng trách nhiệm công việc

## Tiêu chí chấp nhận

- **Cho trước** admin đang ở form thêm mới hoặc chỉnh sửa quản trị viên  
- **Khi** mở bộ chọn vai trò  
- **Thì** có thể chọn một hoặc nhiều vai trò từ danh sách  
- **Và** các vai trò đã chọn hiển thị rõ ràng trước khi lưu

## Phạm vi giao diện

- Bộ chọn vai trò (multi-select)
- Hiển thị tag/chip vai trò đã chọn

## Lưu ý triển khai

- Tái sử dụng component multi-select hiện có  
- Có thể yêu cầu chọn ít nhất một vai trò `[GIẢ ĐỊNH]`  
- Hỗ trợ tìm trong danh sách vai trò dài `[GIẢ ĐỊNH]`

## Phụ thuộc

- API: `GET /api/roles` `[CHƯA RÕ]`
- QLQTV_US5, QLQTV_US6 (form modal)

## Ngoài phạm vi

- Tạo vai trò mới từ màn hình này

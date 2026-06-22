# User Story: QLDM_US3

| Trường | Giá trị |
|--------|---------|
| **Module** | Quản lý Danh mục |
| **Epic** | 2 — Thao tác danh mục |
| **Pages** | 35 |
| **REQ IDs** | REQ-CAT-002 |
| **Điểm ước lượng** | M (≈2–3 ngày) |

## Câu chuyện

**Với vai trò** Quản trị Web Admin  
**Tôi muốn** tạo danh mục mới từ trang quản lý  
**Để** mở rộng danh mục mà không cần rời module

## Tiêu chí chấp nhận

- **Cho trước** admin nhấn "Thêm danh mục"  
- **Khi** modal tạo mới mở ra  
- **Thì** hiển thị form trống để nhập thông tin  
- **Và** lưu thành công tạo danh mục mới  
- **Và** hiển thị lỗi nếu tên trùng hoặc thiếu trường bắt buộc

## Phạm vi giao diện

- Nút Thêm danh mục
- Modal form tạo mới

## Lưu ý triển khai

- Dùng chung modal với luồng chỉnh sửa (QLDM_US2)  
- Giá trị trạng thái mặc định khi tạo `[CHƯA RÕ]`

## Phụ thuộc

- API: `POST /api/categories` `[CHƯA RÕ]`
- QLDM_US2 (modal form)

## Ngoài phạm vi

- Tạo danh mục con (phân cấp)

# User Story: QLDM_US2

| Trường | Giá trị |
|--------|---------|
| **Module** | Quản lý Danh mục |
| **Epic** | 2 — Thao tác danh mục |
| **Pages** | 35 |
| **REQ IDs** | REQ-CAT-002 |
| **Điểm ước lượng** | M (≈2–3 ngày) |

## Câu chuyện

**Với vai trò** Quản trị Web Admin  
**Tôi muốn** mở modal chỉnh sửa danh mục  
**Để** cập nhật thông tin nhanh mà không rời trang danh sách

## Tiêu chí chấp nhận

- **Cho trước** admin nhấn Chỉnh sửa trên một danh mục  
- **Khi** modal mở ra  
- **Thì** form được điền sẵn dữ liệu hiện tại  
- **Và** admin có thể Lưu hoặc Hủy  
- **Và** cảnh báo nếu đóng modal còn thay đổi chưa lưu

## Phạm vi giao diện

- Nút Chỉnh sửa
- Modal form: tên, mô tả, trạng thái
- Nút Lưu / Hủy

## Lưu ý triển khai

- Kiểm tra tên trùng lặp khi lưu `[GIẢ ĐỊNH]`  
- Tái sử dụng modal/form hiện có

## Phụ thuộc

- API: `GET /api/categories/{id}`, `PUT /api/categories/{id}` `[CHƯA RÕ]`
- QLDM_US1 (danh sách)

## Ngoài phạm vi

- Import/export danh mục

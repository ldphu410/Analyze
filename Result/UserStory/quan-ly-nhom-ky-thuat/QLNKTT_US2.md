# User Story: QLNKTT_US2

| Trường | Giá trị |
|--------|---------|
| **Module** | Quản lý Nhóm kỹ thuật |
| **Epic** | 2 — Thao tác nhóm |
| **Pages** | 37 |
| **REQ IDs** | REQ-TG-002 |
| **Điểm ước lượng** | M (≈2–3 ngày) |

## Câu chuyện

**Với vai trò** Quản trị Web Admin  
**Tôi muốn** tạo hoặc chỉnh sửa nhóm kỹ thuật qua modal  
**Để** cập nhật thông tin nhóm mà không rời module

## Tiêu chí chấp nhận

- **Cho trước** admin nhấn "Thêm nhóm" hoặc "Chỉnh sửa"  
- **Khi** modal mở ra  
- **Thì** hiển thị form: tên, mô tả, trạng thái  
- **Và** lưu thành công cập nhật dữ liệu nhóm  
- **Và** cảnh báo nếu đóng modal còn thay đổi chưa lưu

## Phạm vi giao diện

- Nút Thêm nhóm / Chỉnh sửa
- Modal form
- Nút Lưu / Hủy

## Lưu ý triển khai

- Tái sử dụng modal từ Quản lý Danh mục  
- Kiểm tra tên trùng lặp `[GIẢ ĐỊNH]`

## Phụ thuộc

- API: `POST /api/technical-groups`, `PUT /api/technical-groups/{id}` `[CHƯA RÕ]`
- QLNKTT_US1 (danh sách)

## Ngoài phạm vi

- Import nhóm kỹ thuật từ file

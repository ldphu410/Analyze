# User Story: QLQTV_US6

| Trường | Giá trị |
|--------|---------|
| **Module** | Quản lý QTV |
| **Epic** | 3 — Chỉnh sửa quản trị viên |
| **Pages** | 2 |
| **REQ IDs** | REQ-QTV-004 |
| **Điểm ước lượng** | M (≈2–3 ngày) |

## Câu chuyện

**Với vai trò** Quản trị Web Admin  
**Tôi muốn** chỉnh sửa thông tin quản trị viên qua cùng một form modal  
**Để** cập nhật vai trò hoặc trạng thái nhanh chóng

## Tiêu chí chấp nhận

- **Cho trước** admin chọn "Chỉnh sửa" trên một quản trị viên  
- **Khi** modal mở ra  
- **Thì** form được điền sẵn dữ liệu hiện tại  
- **Và** admin có thể cập nhật và lưu thay đổi  
- **Và** cảnh báo nếu đóng modal khi còn thay đổi chưa lưu

## Phạm vi giao diện

- Menu thao tác → Chỉnh sửa
- Modal form (dùng chung với thêm mới)
- Các trường đã điền sẵn

## Lưu ý triển khai

- Dùng chung modal với luồng thêm mới (QLQTV_US5)  
- Phân biệt rõ chế độ tạo mới và chỉnh sửa  
- Hiển thị lỗi từ server theo từng trường

## Phụ thuộc

- API: `GET /api/admin-users/{adminId}`, `PUT /api/admin-users/{adminId}` `[CHƯA RÕ]`
- QLQTV_US5 (form modal cơ bản)

## Ngoài phạm vi

- Lịch sử thay đổi thông tin

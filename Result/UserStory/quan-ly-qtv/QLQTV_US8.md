# User Story: QLQTV_US8

| Trường | Giá trị |
|--------|---------|
| **Module** | Quản lý QTV |
| **Epic** | 4 — Phân quyền |
| **Pages** | 3 |
| **REQ IDs** | REQ-QTV-005 |
| **Điểm ước lượng** | S (≈0,5–1,5 ngày) |

## Câu chuyện

**Với vai trò** Quản trị Web Admin  
**Tôi muốn** xem trước tổng hợp quyền (permission) sau khi chọn vai trò  
**Để** tránh gán sai bộ quyền trước khi lưu

## Tiêu chí chấp nhận

- **Cho trước** admin đang chọn vai trò trong form  
- **Khi** danh sách vai trò thay đổi  
- **Thì** giao diện cập nhật hiển thị tổng hợp quyền tương ứng

## Phạm vi giao diện

- Bộ chọn vai trò
- Khu vực xem trước quyền hiệu lực (effective permissions)

## Lưu ý triển khai

- Dữ liệu quyền có thể lấy từ API hoặc mapping phía client `[GIẢ ĐỊNH]`  
- Hiển thị thông báo nếu không tải được dữ liệu quyền

## Phụ thuộc

- API: `GET /api/roles` hoặc `GET /api/role-matrix` `[CHƯA RÕ]`
- QLQTV_US7 (chọn vai trò)

## Ngoài phạm vi

- Chỉnh sửa quyền chi tiết từng dòng (permission-level)

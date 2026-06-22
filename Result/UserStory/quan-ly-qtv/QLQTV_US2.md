# User Story: QLQTV_US2

| Trường | Giá trị |
|--------|---------|
| **Module** | Quản lý QTV |
| **Epic** | 1 — Danh sách quản trị viên |
| **Pages** | 1, 2 |
| **REQ IDs** | REQ-QTV-007 |
| **Điểm ước lượng** | S (≈0,5–1,5 ngày) |

## Câu chuyện

**Với vai trò** Quản trị Web Admin  
**Tôi muốn** tìm kiếm quản trị viên theo tên hoặc email  
**Để** thu hẹp kết quả nhanh và giảm tải hệ thống

## Tiêu chí chấp nhận

- **Cho trước** admin đang ở trang Danh sách quản trị viên  
- **Khi** nhập từ khóa vào ô tìm kiếm  
- **Thì** danh sách được lọc sau khoảng chờ ngắn (debounce)  
- **Và** hệ thống gửi yêu cầu tìm kiếm lên server  
- **Và** hiển thị trạng thái trống khi không có kết quả phù hợp

## Phạm vi giao diện

- Ô tìm kiếm
- Làm mới bảng sau khi tìm
- Indicator loading khi đang tìm

## Lưu ý triển khai

- Tái sử dụng component tìm kiếm hiện có  
- Có nút xóa nội dung tìm kiếm

## Phụ thuộc

- API: `GET /api/admin-users?search=` `[CHƯA RÕ]`
- QLQTV_US1 (danh sách cơ bản)

## Ngoài phạm vi

- Tìm kiếm nâng cao (nhiều điều kiện kết hợp)

# User Story: QLTK_US4

| Trường | Giá trị |
|--------|---------|
| **Module** | Quản lý Tài khoản |
| **Epic** | 4 — Khóa tài khoản |
| **Pages** | 8 |
| **REQ IDs** | REQ-ACC-004 |
| **Điểm ước lượng** | S (≈0,5–1,5 ngày) |

## Câu chuyện

**Với vai trò** Quản trị Web Admin  
**Tôi muốn** xác nhận trước khi khóa hoặc tạm khóa tài khoản  
**Để** tránh thao tác nhầm ảnh hưởng người dùng

## Tiêu chí chấp nhận

- **Cho trước** admin chọn "Khóa" hoặc "Tạm khóa" từ menu thao tác  
- **Khi** nhấn xác nhận trong popup  
- **Thì** thực hiện thao tác khóa và refresh danh sách  
- **Và** hủy đóng popup mà không thực hiện gì  
- **Và** popup xác nhận hiển thị trước khi thực hiện `[ĐÃ XÁC NHẬN]`

## Phạm vi giao diện

- Mục Khóa / Tạm khóa trên menu
- Popup xác nhận

## Lưu ý triển khai

- Phân biệt rõ nội dung popup Khóa vs Tạm khóa `[CHƯA RÕ]`  
- Tái sử dụng popup xác nhận hiện có

## Phụ thuộc

- API: `POST /api/user-accounts/{userId}/lock` `[CHƯA RÕ]`
- Quyền: khóa tài khoản

## Ngoài phạm vi

- Tự động mở khóa theo thời gian
- Lịch sử thao tác khóa

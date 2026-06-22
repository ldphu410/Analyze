# User Story: QLNKTT_US1

| Trường | Giá trị |
|--------|---------|
| **Module** | Quản lý Nhóm kỹ thuật |
| **Epic** | 1 — Danh sách nhóm |
| **Pages** | 36 |
| **REQ IDs** | REQ-TG-001 |
| **Điểm ước lượng** | S (≈0,5–1,5 ngày) |

## Câu chuyện

**Với vai trò** Quản trị Web Admin  
**Tôi muốn** xem danh sách nhóm kỹ thuật dạng bảng  
**Để** kiểm tra dữ liệu và thực hiện thao tác nhanh

## Tiêu chí chấp nhận

- **Cho trước** admin mở trang Quản lý nhóm kỹ thuật  
- **Khi** trang được tải  
- **Thì** hiển thị bảng với: mã nhóm, tên, mô tả, trạng thái, thao tác  
- **Và** tái sử dụng giao diện tương tự Quản lý danh mục `[ĐÃ XÁC NHẬN]`

## Phạm vi giao diện

- Bảng danh sách
- Cột thao tác
- Hiển thị trạng thái

## Lưu ý triển khai

- Clone cấu hình từ module Quản lý Danh mục  
- Hiển thị trạng thái trống và loading

## Phụ thuộc

- API: `GET /api/technical-groups` `[CHƯA RÕ]`
- Quản lý Danh mục (template UI)

## Ngoài phạm vi

- Liên kết chi tiết với từng danh mục kỹ thuật `[CHƯA RÕ]`

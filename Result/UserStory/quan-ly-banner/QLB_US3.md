# User Story: QLB_US3

| Trường | Giá trị |
|--------|---------|
| **Module** | Quản lý Banner |
| **Epic** | 2 — Cập nhật banner |
| **Pages** | 5 |
| **REQ IDs** | REQ-BN-002 |
| **Điểm ước lượng** | S (≈0,5–1,5 ngày) |

## Câu chuyện

**Với vai trò** Quản trị Web Admin  
**Tôi muốn** nhận phản hồi khi file ảnh banner không hợp lệ  
**Để** tránh upload file sai trước khi lưu

## Tiêu chí chấp nhận

- **Cho trước** admin chọn ảnh banner mới  
- **Khi** hệ thống kiểm tra file  
- **Thì** hiển thị lỗi về dung lượng hoặc tỷ lệ ảnh (nếu có) trước khi upload  
- **Và** hiển thị preview ảnh hợp lệ

## Phạm vi giao diện

- Upload ảnh
- Khu vực thông báo lỗi
- Preview ảnh

## Lưu ý triển khai

- Kiểm tra loại file, dung lượng tối đa `[GIẢ ĐỊNH]`  
- Quy tắc tỷ lệ ảnh cần khách xác nhận `[CHƯA RÕ]`

## Phụ thuộc

- QLB_US2 (form chỉnh sửa banner)

## Ngoài phạm vi

- Tự động resize ảnh

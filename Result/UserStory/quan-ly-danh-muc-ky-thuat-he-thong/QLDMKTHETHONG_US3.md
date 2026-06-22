# User Story: QLDMKTHETHONG_US3

| Trường | Giá trị |
|--------|---------|
| **Module** | Quản lý DMKT Hệ thống |
| **Epic** | 2 — Upload Excel và preview |
| **Pages** | 40 |
| **REQ IDs** | REQ-DMKT-004 |
| **Điểm ước lượng** | S (≈0,5–1,5 ngày) |

## Câu chuyện

**Với vai trò** Quản trị Web Admin  
**Tôi muốn** được xác nhận trước khi đóng panel preview khi còn dữ liệu chưa lưu  
**Để** tránh mất dữ liệu đã kiểm tra

## Tiêu chí chấp nhận

- **Cho trước** side panel preview đang mở và có dữ liệu chưa lưu  
- **Khi** admin cố đóng panel  
- **Thì** hiển thị popup xác nhận `[ĐÃ XÁC NHẬN]`  
- **Và** chỉ đóng panel sau khi admin xác nhận  
- **Và** giữ nguyên panel nếu admin chọn Hủy

## Phạm vi giao diện

- Side panel preview upload
- Popup xác nhận đóng

## Lưu ý triển khai

- Áp dụng nhất quán khi đóng bằng nút X hoặc click ra ngoài `[GIẢ ĐỊNH]`

## Phụ thuộc

- QLDMKTHETHONG_US2 (upload và preview)

## Ngoài phạm vi

- Tự động lưu nháp (auto-save)

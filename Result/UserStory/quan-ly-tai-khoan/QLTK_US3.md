# User Story: QLTK_US3

| Trường | Giá trị |
|--------|---------|
| **Module** | Quản lý Tài khoản |
| **Epic** | 3 — Xem chi tiết tài khoản |
| **Pages** | 9 |
| **REQ IDs** | REQ-ACC-005, REQ-ACC-006 |
| **Điểm ước lượng** | S (≈0,5–1,5 ngày) |

## Câu chuyện

**Với vai trò** Quản trị Web Admin  
**Tôi muốn** mở side panel xem chi tiết tài khoản ở chế độ chỉ xem  
**Để** tra cứu thông tin mà không chỉnh sửa

## Tiêu chí chấp nhận

- **Cho trước** admin chọn "Xem chi tiết" trên một tài khoản  
- **Khi** side panel mở qua Shared Detail Panel (`mode: view-only`)  
- **Thì** tất cả trường hiển thị ở chế độ read-only  
- **Và** ẩn nút thao tác và icon xóa trên ảnh `[ĐÃ XÁC NHẬN]`  
- **Và** ẩn các section không cần thiết trong tab Bảo mật `[ĐÃ XÁC NHẬN]`

## Phạm vi giao diện

- Side panel (tích hợp Shared Detail Panel)
- Trường chỉ xem
- Ẩn control chỉnh sửa

## Lưu ý triển khai

- Không build panel mới — tích hợp `DetailPanelShell` với `mode: view-only`  
- Tái sử dụng component từ Web Chuyên Gia

## Phụ thuộc

- Shared Detail Panel
- API: `GET /api/user-accounts/{userId}` `[CHƯA RÕ]`

## Ngoài phạm vi

- Xây dựng layout từng loại panel (xem QLTK_US5)

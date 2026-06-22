# User Story: QLDMKTHETHONG_US2

| Trường | Giá trị |
|--------|---------|
| **Module** | Quản lý DMKT Hệ thống |
| **Epic** | 2 — Upload Excel và preview |
| **Pages** | 38, 40, 41 |
| **REQ IDs** | REQ-DMKT-002, REQ-DMKT-003, REQ-DMKT-005 |
| **Điểm ước lượng** | L (≈4–6 ngày) |

## Câu chuyện

**Với vai trò** Quản trị Web Admin  
**Tôi muốn** upload file Excel và xem kết quả kiểm tra dữ liệu  
**Để** phát hiện lỗi và sửa trước khi lưu

## Tiêu chí chấp nhận

- **Cho trước** admin đã chọn nhóm kỹ thuật  
- **Khi** upload file Excel và hệ thống kiểm tra xong  
- **Thì** mở side panel preview hiển thị dữ liệu đã kiểm tra  
- **Và** hiển thị lỗi theo từng dòng — hover để xem lý do `[ĐÃ XÁC NHẬN]`  
- **Và** chỉ cho phép preview khi kiểm tra thành công `[ĐÃ XÁC NHẬN]`

## Phạm vi giao diện

- Nút upload file
- Chọn file Excel
- Side panel preview
- Tooltip lỗi trên từng dòng

## Lưu ý triển khai

- Luồng: Chọn nhóm → Upload → Validate → Preview → Lưu → Refresh bảng `[ĐÃ XÁC NHẬN]`  
- Hiển thị tiến trình upload với file lớn `[GIẢ ĐỊNH]`

## Phụ thuộc

- API: `POST /api/technical-categories/upload` `[CHƯA RÕ]`
- QLDMKTHETHONG_US1 (chọn nhóm)

## Câu hỏi cần khách xác nhận

1. Cấu trúc cột file Excel mẫu?
2. Giới hạn dung lượng file?
3. Quy tắc phát hiện lỗi từng trường?
4. Lưu ghi đè toàn bộ hay merge từng dòng?

## Ngoài phạm vi

- Tự tạo file Excel mẫu từ hệ thống

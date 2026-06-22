# User Story: QLB_US2

| Trường | Giá trị |
|--------|---------|
| **Module** | Quản lý Banner |
| **Epic** | 2 — Cập nhật banner |
| **Pages** | 5 |
| **REQ IDs** | REQ-BN-002 |
| **Điểm ước lượng** | M (≈2–3 ngày) |

## Câu chuyện

**Với vai trò** Quản trị Web Admin  
**Tôi muốn** chỉnh sửa nội dung banner qua form/modal  
**Để** cập nhật ảnh, tiêu đề, link và trạng thái nhanh chóng

## Tiêu chí chấp nhận

- **Cho trước** admin nhấn Chỉnh sửa trên một banner  
- **Khi** màn hình chỉnh sửa mở ra  
- **Thì** hiển thị form với các trường: ảnh, tiêu đề, link, nền tảng, trạng thái  
- **Và** lưu thành công cập nhật dữ liệu banner  
- **Và** hiển thị thông báo thành công sau khi lưu

## Phạm vi giao diện

- Nút Chỉnh sửa
- Modal / form chỉnh sửa
- Upload ảnh
- Các trường tiêu đề, link
- Nút Lưu / Hủy

## Lưu ý triển khai

- Tái sử dụng component upload ảnh  
- Hỗ trợ preview theo từng nền tảng `[GIẢ ĐỊNH]`  
- Hiển thị lỗi validation theo từng trường

## Phụ thuộc

- API: `PUT /api/banners/{bannerId}` `[CHƯA RÕ]`
- QLB_US1 (danh sách banner)

## Ngoài phạm vi

- Lên lịch hiển thị banner theo thời gian

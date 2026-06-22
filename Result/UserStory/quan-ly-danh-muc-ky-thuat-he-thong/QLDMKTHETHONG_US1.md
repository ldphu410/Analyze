# User Story: QLDMKTHETHONG_US1

| Trường | Giá trị |
|--------|---------|
| **Module** | Quản lý DMKT Hệ thống |
| **Epic** | 1 — Chọn nhóm và hiển thị bảng |
| **Pages** | 38, 39 |
| **REQ IDs** | REQ-DMKT-001, REQ-DMKT-009 |
| **Điểm ước lượng** | M (≈2–3 ngày) |

## Câu chuyện

**Với vai trò** Quản trị Web Admin  
**Tôi muốn** chọn nhóm kỹ thuật và xem dữ liệu DMKT tương ứng trên bảng  
**Để** quản lý đúng bộ dữ liệu của từng nhóm

## Tiêu chí chấp nhận

- **Cho trước** admin mở module Danh mục kỹ thuật hệ thống  
- **Khi** chọn một nhóm kỹ thuật từ dropdown  
- **Thì** bảng bên dưới hiển thị dữ liệu của nhóm đó `[ĐÃ XÁC NHẬN]`  
- **Và** nhóm đang chọn được đánh dấu rõ ràng  
- **Và** hiển thị cột checkbox "Nhóm thêm nhanh" — chỉ DMKT được tick mới xuất hiện khi thêm nhanh trên Web Chuyên gia `[ĐÃ XÁC NHẬN]`

## Phạm vi giao diện

- Dropdown chọn nhóm kỹ thuật
- Bảng dữ liệu DMKT
- Cột thao tác
- Checkbox "Nhóm thêm nhanh"

## Lưu ý triển khai

- Dropdown là nguồn dữ liệu duy nhất của trang `[ĐÃ XÁC NHẬN]`  
- Hiển thị trạng thái trống khi nhóm không có dữ liệu

## Phụ thuộc

- API: `GET /api/technical-groups`, `GET /api/technical-categories?groupId=` `[CHƯA RÕ]`
- Quản lý Nhóm kỹ thuật (danh sách nhóm)

## Ngoài phạm vi

- Quản lý nhóm kỹ thuật trên cùng màn hình

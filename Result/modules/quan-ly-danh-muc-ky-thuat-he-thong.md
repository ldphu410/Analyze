# Module: Quản lý DMKT Hệ thống

| Trường | Giá trị |
|--------|---------|
| **Pages** | 38–43 |
| **Ước lượng FE** | ~12,0 ngày |
| **User Story** | QLDMKTHETHONG_US1 – QLDMKTHETHONG_US4 |
| **Phụ thuộc** | [Quản lý Nhóm kỹ thuật](quan-ly-nhom-ky-thuat.md) — dropdown nguồn dữ liệu |

## Tổng quan

Module phức tạp nhất Phase 1: chọn nhóm kỹ thuật → upload Excel → validate → preview → lưu → chỉnh sửa trên bảng chính.

## Page liên quan

| Page | Nội dung |
|------|----------|
| 38 | Tổng quan luồng DMKT |
| 39 | Bảng chi tiết đầy đủ + checkbox "Nhóm thêm nhanh" |
| 40 | Side panel upload + popup xác nhận khi đóng |
| 41 | Bảng preview trong side panel + tooltip lỗi |
| 42 | Chỉnh sửa DMKT trên bảng chính |
| 43 | Thao tác và modal bảng chính |

## Yêu cầu chức năng

| ID | Mô tả | Loại | Mức độ |
|---|---|---|---|
| REQ-DMKT-001 | Chọn nhóm kỹ thuật và hiển thị dữ liệu tương ứng | Chức năng | Rõ |
| REQ-DMKT-002 | Upload file Excel cập nhật DMKT | Chức năng | Rõ |
| REQ-DMKT-003 | Validate file trước khi preview | Chức năng | Rõ |
| REQ-DMKT-004 | Đóng side panel upload → popup xác nhận | Quy tắc | Rõ |
| REQ-DMKT-005 | Tooltip lỗi khi hover dòng lỗi | Chức năng | Rõ |
| REQ-DMKT-006 | Lưu cập nhật → refresh bảng chính | Chức năng | Rõ |
| REQ-DMKT-007 | Chỉnh sửa DMKT trên bảng chính | Chức năng | Rõ |
| REQ-DMKT-008 | Thao tác và modal trên bảng chính | Chức năng | Rõ |
| REQ-DMKT-009 | Chỉ DMKT tick "Nhóm thêm nhanh" mới hiện trên Web Chuyên gia | Quy tắc | Rõ |

## Quy tắc nghiệp vụ

- BR-DMKT-001 `[ĐÃ XÁC NHẬN]`: Dropdown nhóm kỹ thuật là nguồn dữ liệu duy nhất của trang.
- BR-DMKT-002 `[ĐÃ XÁC NHẬN]`: Bảng hiển thị dữ liệu của nhóm đang chọn.
- BR-DMKT-003 `[ĐÃ XÁC NHẬN]`: Chỉ preview khi validate thành công.
- BR-DMKT-004 `[ĐÃ XÁC NHẬN]`: Đóng side panel upload phải popup xác nhận.
- BR-DMKT-005 `[ĐÃ XÁC NHẬN]`: Tooltip hiển thị lý do lỗi khi hover.
- BR-DMKT-006 `[ĐÃ XÁC NHẬN]`: Chỉ DMKT tick "Nhóm thêm nhanh" mới xuất hiện khi thêm nhanh trên Web Chuyên gia.

## Dữ liệu liên quan `[GIẢ ĐỊNH]`

| Đối tượng | Trường | Mô tả | Bắt buộc |
|---|---|---|---|
| TechnicalCategory | categoryId | ID DMKT | Có |
| TechnicalCategory | groupId | Nhóm kỹ thuật | Có |
| TechnicalCategory | name | Tên DMKT | Có |
| TechnicalCategory | quickAddFlag | Nhóm thêm nhanh | Không |
| ExcelUpload | fileName | Tên file | Có |
| ExcelUpload | validationStatus | Trạng thái validate | Có |
| ValidationError | row | Dòng lỗi | Có |
| ValidationError | message | Lý do lỗi | Có |

## Vai trò sử dụng

- **Người dùng:** Admin Web Admin
- **Thao tác:** Chọn nhóm, upload Excel, xem preview, lưu, chỉnh sửa bảng

## Giả định

- File Excel theo định dạng chuẩn (chưa có template từ khách).
- Không lưu nếu validate chưa thành công.
- Preview là bước bắt buộc trước khi lưu.

## Câu hỏi cần khách xác nhận

1. Template Excel: cấu trúc cột và rule validate?
2. Upload ghi đè toàn bộ hay merge từng dòng?
3. Có cần rollback khi lưu thất bại?
4. Trường nào được phép sửa trên bảng chính?

## Luồng nghiệp vụ

```mermaid
flowchart LR
  SelectGroup[Chọn nhóm] --> Table[Bảng dữ liệu]
  Table --> Upload[Upload Excel]
  Upload --> Validate[Validate]
  Validate --> Preview[Preview]
  Preview --> Save[Lưu]
  Save --> Refresh[Refresh bảng]
```

## Phân tích khoảng trống

- Chưa có template Excel và cấu trúc cột.
- Chưa xác định ghi đè hay merge khi lưu.
- Chưa có yêu cầu rollback hoặc lịch sử thay đổi.

## Hạng mục triển khai (giao diện)

| Hạng mục | Quy mô | Ước lượng |
|----------|--------|-----------|
| Dropdown nhóm + bảng DMKT + chỉnh sửa inline | M | 2–3 ngày |
| Upload Excel + validate + progress | L | 4–6 ngày |
| Side panel preview + tooltip lỗi + xác nhận đóng | M | 2–3 ngày |

## Yêu cầu bổ sung `[GIẢ ĐỊNH]`

- Hiển thị tiến trình upload với file lớn.
- Ánh xạ lỗi validate theo từng dòng.

## Ước lượng FE (1 Senior)

| Hạng mục | Ngày |
|----------|------|
| Tổng (mid) | 10,0 |
| Dự phòng 20% | 2,0 |
| **Tổng cộng** | **~12,0** |

## User Story

| ID | Tên | Điểm |
|----|-----|------|
| QLDMKTHETHONG_US1 | Chọn nhóm và hiển thị bảng DMKT | M |
| QLDMKTHETHONG_US2 | Upload Excel và preview | L |
| QLDMKTHETHONG_US3 | Xác nhận trước khi đóng panel preview | S |
| QLDMKTHETHONG_US4 | Chỉnh sửa trên bảng chính | M |

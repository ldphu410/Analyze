# Backlog — Quản lý DMKT Hệ thống

**Module:** Quản lý Danh mục Kỹ thuật Hệ thống  
**Pages:** 38–43  
**Phụ thuộc:** Quản lý Nhóm kỹ thuật (dropdown nguồn dữ liệu)

## Danh mục User Story

| ID | Epic | Tên | Điểm | File |
|----|------|-----|-------|------|
| QLDMKTHETHONG_US1 | 1 | Chọn nhóm và hiển thị bảng DMKT | M | [QLDMKTHETHONG_US1.md](QLDMKTHETHONG_US1.md) |
| QLDMKTHETHONG_US2 | 2 | Upload Excel và preview | L | [QLDMKTHETHONG_US2.md](QLDMKTHETHONG_US2.md) |
| QLDMKTHETHONG_US3 | 2 | Xác nhận trước khi đóng panel preview | S | [QLDMKTHETHONG_US3.md](QLDMKTHETHONG_US3.md) |
| QLDMKTHETHONG_US4 | 3 | Chỉnh sửa trên bảng chính | M | [QLDMKTHETHONG_US4.md](QLDMKTHETHONG_US4.md) |

**Tổng điểm ước lượng:** 2M + 1L + 1S ≈ 10–14 ngày

---

## Epic 1: Chọn nhóm và hiển thị bảng

**Mục tiêu:** Admin chọn nhóm kỹ thuật và xem đúng dữ liệu DMKT trên bảng, bao gồm cấu hình "Nhóm thêm nhanh".

→ Xem [QLDMKTHETHONG_US1.md](QLDMKTHETHONG_US1.md)

## Epic 2: Upload Excel và preview

**Mục tiêu:** Upload file Excel, kiểm tra dữ liệu, xem preview trước khi lưu; xác nhận khi đóng panel chưa lưu.

→ Xem [QLDMKTHETHONG_US2.md](QLDMKTHETHONG_US2.md), [QLDMKTHETHONG_US3.md](QLDMKTHETHONG_US3.md)

## Epic 3: Chỉnh sửa trên bảng chính

**Mục tiêu:** Điều chỉnh dữ liệu DMKT trực tiếp trên bảng sau khi load hoặc sau khi lưu upload.

→ Xem [QLDMKTHETHONG_US4.md](QLDMKTHETHONG_US4.md)

---

## Câu hỏi cần khách hàng xác nhận

1. Template Excel: cấu trúc cột và rule validate?
2. Upload ghi đè toàn bộ hay merge từng dòng?
3. Trường nào được phép sửa trên bảng chính?
4. Có cần rollback khi lưu thất bại không?

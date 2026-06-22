# Backlog — Phê duyệt Hồ sơ & Gói dịch vụ

**Module:** Phê duyệt Hồ sơ & Gói DV  
**Pages:** 20–33  
**Phụ thuộc:** [Shared Detail Panel](../../modules/shared-detail-panel.md)

## Danh mục User Story

| ID | Epic | Tên | Điểm | File |
|----|------|-----|-------|------|
| PDHS_US1 | 1 | Danh sách 2 luồng phê duyệt | M | [PDHS_US1.md](PDHS_US1.md) |
| PDHS_US2 | 1 | Lọc theo loại và trạng thái | S | [PDHS_US2.md](PDHS_US2.md) |
| PDHS_US3 | 2 | Chi tiết — chế độ phê duyệt | M | [PDHS_US3.md](PDHS_US3.md) |
| PDHS_US4 | 3 | Duyệt / Từ chối + lý do bắt buộc | M | [PDHS_US4.md](PDHS_US4.md) |
| PDHS_US5 | 2 | Panel theo loại đối tượng | M | [PDHS_US5.md](PDHS_US5.md) |
| PDHS_US6 | 3 | Đồng bộ trạng thái admin / user | S | [PDHS_US6.md](PDHS_US6.md) |

**Tổng điểm ước lượng:** 4M + 2S ≈ 10–14 ngày (chưa gồm Shared Detail Panel ~4 ngày)

---

## Epic 1: Danh sách yêu cầu phê duyệt

**Mục tiêu:** Admin xem, lọc và truy cập nhanh danh sách yêu cầu (hồ sơ cơ sở + gói dịch vụ).

→ Xem [PDHS_US1.md](PDHS_US1.md), [PDHS_US2.md](PDHS_US2.md)

## Epic 2: Chi tiết yêu cầu

**Mục tiêu:** Xem chi tiết ở chế độ phê duyệt; đúng layout theo loại đối tượng; hỗ trợ chỉnh sửa dữ liệu `[CHƯA RÕ]`.

→ Xem [PDHS_US3.md](PDHS_US3.md), [PDHS_US5.md](PDHS_US5.md)

## Epic 3: Quyết định phê duyệt

**Mục tiêu:** Duyệt / từ chối có ghi nhận lý do; đồng bộ trạng thái hai phía.

→ Xem [PDHS_US4.md](PDHS_US4.md), [PDHS_US6.md](PDHS_US6.md)

---

## Câu hỏi cần khách hàng xác nhận

1. Data correction: trường nào được phép sửa khi phê duyệt?
2. Khác biệt hiển thị hồ sơ cơ sở vs gói dịch vụ ngoài cột "Đối tượng xét duyệt"?
3. Phân quyền admin trong module phê duyệt?

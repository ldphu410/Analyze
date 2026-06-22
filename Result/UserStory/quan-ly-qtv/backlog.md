# Backlog — Quản lý QTV

**Module:** Quản lý QTV  
**Pages:** 1–3

## Danh mục User Story

| ID | Epic | Tên | Điểm | File |
|----|------|-----|-------|------|
| QLQTV_US1 | 1 | Danh sách quản trị viên (phân trang) | M | [QLQTV_US1.md](QLQTV_US1.md) |
| QLQTV_US2 | 1 | Tìm kiếm theo tên/email | S | [QLQTV_US2.md](QLQTV_US2.md) |
| QLQTV_US3 | 1 | Lọc theo trạng thái và vai trò | S | [QLQTV_US3.md](QLQTV_US3.md) |
| QLQTV_US4 | 2 | Xem chi tiết quản trị viên | S | [QLQTV_US4.md](QLQTV_US4.md) |
| QLQTV_US5 | 3 | Thêm quản trị viên mới | M | [QLQTV_US5.md](QLQTV_US5.md) |
| QLQTV_US6 | 3 | Chỉnh sửa quản trị viên | M | [QLQTV_US6.md](QLQTV_US6.md) |
| QLQTV_US7 | 4 | Gán vai trò (multi-select) | S | [QLQTV_US7.md](QLQTV_US7.md) |
| QLQTV_US8 | 4 | Xem trước quyền sau khi chọn vai trò | S | [QLQTV_US8.md](QLQTV_US8.md) |
| QLQTV_US9 | 5 | Xác nhận trước khi xóa | S | [QLQTV_US9.md](QLQTV_US9.md) |
| QLQTV_US10 | 5 | Trạng thái loading và lỗi | S | [QLQTV_US10.md](QLQTV_US10.md) |
| QLQTV_US11 | 5 | Ẩn thao tác theo quyền | M | [QLQTV_US11.md](QLQTV_US11.md) |

**Tổng điểm ước lượng:** 4M + 7S ≈ 12–16 ngày

---

## Epic 1: Danh sách quản trị viên

**Mục tiêu:** Giảm thời gian quản lý tài khoản QTV bằng giao diện danh sách rõ ràng, có tìm kiếm/lọc và thao tác nhanh.

→ Xem QLQTV_US1, QLQTV_US2, QLQTV_US3

## Epic 2: Chi tiết quản trị viên

**Mục tiêu:** Xem đầy đủ thông tin trước khi chỉnh sửa hoặc xóa.

→ Xem QLQTV_US4

## Epic 3: Thêm / Chỉnh sửa

**Mục tiêu:** Quản lý tài khoản QTV qua form modal thống nhất.

→ Xem QLQTV_US5, QLQTV_US6

## Epic 4: Phân quyền

**Mục tiêu:** Gán vai trò chính xác và xem trước quyền trước khi lưu.

→ Xem QLQTV_US7, QLQTV_US8

## Epic 5: Trải nghiệm chung

**Mục tiêu:** Xác nhận xóa, trạng thái loading/lỗi, kiểm soát hiển thị theo quyền.

→ Xem QLQTV_US9, QLQTV_US10, QLQTV_US11

---

## Câu hỏi cần khách hàng xác nhận

1. Phân quyền QTV theo role hay permission chi tiết?
2. Trường bắt buộc khi tạo QTV mới?
3. Có cần lịch sử thay đổi quyền không?

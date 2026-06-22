# User Story: QLTK_US2

| Trường | Giá trị |
|--------|---------|
| **Module** | Quản lý Tài khoản |
| **Epic** | 2 — Thao tác theo trạng thái duyệt |
| **Pages** | 7, 8 |
| **REQ IDs** | REQ-ACC-002, REQ-ACC-003 |
| **Điểm ước lượng** | S (≈0,5–1,5 ngày) |

## Câu chuyện

**Với vai trò** Quản trị Web Admin  
**Tôi muốn** menu thao tác thay đổi theo trạng thái duyệt của tài khoản  
**Để** chỉ thấy các thao tác phù hợp với từng trường hợp

## Tiêu chí chấp nhận

- **Cho trước** admin xem một dòng tài khoản  
- **Khi** trạng thái duyệt là "Từ chối duyệt"  
- **Thì** menu thao tác có thêm "Xem lý do từ chối" `[ĐÃ XÁC NHẬN]`  
- **Và** chọn mục này mở modal hiển thị lý do từ chối  
- **Và** các trạng thái khác chỉ hiển thị thao tác tương ứng `[CHƯA RÕ — cần ma trận trạng thái]`

## Phạm vi giao diện

- Menu thao tác theo trạng thái
- Modal xem lý do từ chối

## Lưu ý triển khai

- Cấu hình mapping trạng thái → thao tác, dễ mở rộng khi khách xác nhận danh sách trạng thái

## Phụ thuộc

- API: `GET /api/user-accounts/{userId}` `[CHƯA RÕ]`
- QLTK_US1 (danh sách cơ bản)

## Ngoài phạm vi

- Chỉnh sửa lý do từ chối

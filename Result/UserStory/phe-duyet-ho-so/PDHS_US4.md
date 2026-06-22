# User Story: PDHS_US4

| Trường | Giá trị |
|--------|---------|
| **Module** | Phê duyệt Hồ sơ & Gói DV |
| **Epic** | 3 — Quyết định phê duyệt |
| **Pages** | 33 |
| **REQ IDs** | REQ-PHE-007 |
| **Điểm ước lượng** | M (≈2–3 ngày) |

## Câu chuyện

**Với vai trò** Quản trị Web Admin  
**Tôi muốn** duyệt hoặc từ chối yêu cầu, bắt buộc nhập lý do khi từ chối  
**Để** quy trình phê duyệt có căn cứ và minh bạch

## Tiêu chí chấp nhận

- **Cho trước** admin đang xem chi tiết yêu cầu ở chế độ phê duyệt  
- **Khi** nhấn Duyệt và xác nhận  
- **Thì** gửi quyết định và cập nhật trạng thái thành "Đã xét duyệt"

- **Cho trước** admin nhấn Từ chối  
- **Khi** modal từ chối mở ra  
- **Thì** bắt buộc nhập lý do trước khi gửi `[ĐÃ XÁC NHẬN]`  
- **Và** hiển thị lỗi validation nếu chưa nhập lý do  
- **Và** sau khi thành công, trạng thái cập nhật thành "Từ chối duyệt"

## Phạm vi giao diện

- Nút Duyệt (kèm xác nhận)
- Modal Từ chối với ô nhập lý do bắt buộc
- Thông báo thành công / lỗi

## Lưu ý triển khai

- Kiểm tra phía client: bắt buộc có lý do khi từ chối  
- Refresh trạng thái trên panel và danh sách sau khi quyết định

## Phụ thuộc

- API: `POST /api/approval-requests/{requestId}/decision` `[CHƯA RÕ]`
- PDHS_US3 (panel chi tiết)
- PDHS_US6 (đồng bộ trạng thái)

## Ngoài phạm vi

- Gửi email/push thông báo cho người dùng

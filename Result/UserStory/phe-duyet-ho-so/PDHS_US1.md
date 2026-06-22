# User Story: PDHS_US1

| Trường | Giá trị |
|--------|---------|
| **Module** | Phê duyệt Hồ sơ & Gói DV |
| **Epic** | 1 — Danh sách yêu cầu phê duyệt |
| **Pages** | 20–23 |
| **REQ IDs** | REQ-PHE-001, REQ-PHE-002, REQ-PHE-003, REQ-PHE-004 |
| **Điểm ước lượng** | M (≈2–3 ngày) |

## Câu chuyện

**Với vai trò** Quản trị Web Admin  
**Tôi muốn** xem danh sách yêu cầu phê duyệt hồ sơ cơ sở và gói dịch vụ có phân trang  
**Để** quản lý các yêu cầu chờ duyệt mà không tải toàn bộ dữ liệu một lần

## Tiêu chí chấp nhận

- **Cho trước** admin mở danh sách phê duyệt hồ sơ cơ sở (Page 20–21)  
- **Khi** trang được tải  
- **Thì** hiển thị bảng phân trang với các cột: mã yêu cầu, loại đối tượng, trạng thái, thời gian cập nhật, thao tác

- **Cho trước** admin mở danh sách phê duyệt gói dịch vụ (Page 22–23)  
- **Khi** trang được tải  
- **Thì** dùng cùng giao diện bảng, chỉ khác dữ liệu cột "Đối tượng xét duyệt" `[ĐÃ XÁC NHẬN]`

- **Và** hiển thị trạng thái trống và loading phù hợp

## Phạm vi giao diện

- Component danh sách dùng chung (`ApprovalList`) với tham số `requestType`
- Phân trang, badge trạng thái, menu thao tác
- Bảng chi tiết (Page 21, 23)

## Lưu ý triển khai

- Một component danh sách, hai cấu hình — không duplicate code  
- Phân trang phía server `[GIẢ ĐỊNH]`

## Phụ thuộc

- API: `GET /api/approval-requests?requestType=` `[CHƯA RÕ]`
- Quyền: xem yêu cầu phê duyệt

## Ngoài phạm vi

- Xuất danh sách ra Excel

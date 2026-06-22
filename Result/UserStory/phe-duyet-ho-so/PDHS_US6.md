# User Story: PDHS_US6

| Trường | Giá trị |
|--------|---------|
| **Module** | Phê duyệt Hồ sơ & Gói DV |
| **Epic** | 3 — Quyết định phê duyệt |
| **Pages** | 33 |
| **REQ IDs** | REQ-PHE-008 |
| **Điểm ước lượng** | S (≈0,5–1,5 ngày) |

## Câu chuyện

**Với vai trò** Quản trị Web Admin  
**Tôi muốn** trạng thái phê duyệt đồng bộ giữa trang admin và Web Chuyên gia của người dùng  
**Để** hai bên luôn thấy cùng một trạng thái sau khi duyệt hoặc từ chối

## Tiêu chí chấp nhận

- **Cho trước** admin thực hiện duyệt hoặc từ chối thành công  
- **Khi** hệ thống xử lý xong  
- **Thì** badge trạng thái trên panel admin cập nhật ngay  
- **Và** trạng thái trên từng tab của trang admin phản ánh "Đã xét duyệt" hoặc "Từ chối duyệt"  
- **Và** trạng thái tương ứng trên Web Chuyên gia của user được cập nhật qua backend `[ĐÃ XÁC NHẬN — Page 33]`

## Phạm vi giao diện

- Refresh badge trạng thái trên panel và danh sách
- Hiển thị trạng thái theo tab trên trang chi tiết

## Lưu ý triển khai

- Cập nhật giao diện admin từ response API sau khi quyết định  
- Không giả định WebSocket — cập nhật qua response hoặc refresh `[GIẢ ĐỊNH]`  
- Đồng bộ sang phía user là trách nhiệm backend

## Phụ thuộc

- API decision trả về trạng thái mới `[CHƯA RÕ]`
- PDHS_US4 (thao tác duyệt/từ chối)

## Ngoài phạm vi

- Thông báo real-time (WebSocket / push)

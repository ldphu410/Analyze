# User Story: PDHS_US2

| Trường | Giá trị |
|--------|---------|
| **Module** | Phê duyệt Hồ sơ & Gói DV |
| **Epic** | 1 — Danh sách yêu cầu phê duyệt |
| **Pages** | 20–23 |
| **REQ IDs** | REQ-PHE-001, REQ-PHE-003 |
| **Điểm ước lượng** | S (≈0,5–1,5 ngày) |

## Câu chuyện

**Với vai trò** Quản trị Web Admin  
**Tôi muốn** lọc danh sách yêu cầu theo loại và trạng thái  
**Để** tập trung xử lý các yêu cầu ưu tiên trước

## Tiêu chí chấp nhận

- **Cho trước** admin đang ở trang danh sách phê duyệt  
- **Khi** chọn bộ lọc loại yêu cầu hoặc trạng thái  
- **Thì** bảng chỉ hiển thị các yêu cầu phù hợp  
- **Và** có nút xóa bộ lọc để trở về mặc định  
- **Và** hiển thị trạng thái trống khi không có kết quả

## Phạm vi giao diện

- Dropdown lọc theo loại yêu cầu và trạng thái
- Nút xóa bộ lọc

## Lưu ý triển khai

- Lọc phía server với tham số query  
- Tái sử dụng component lọc hiện có

## Phụ thuộc

- API: `GET /api/approval-requests?requestType=&status=` `[CHƯA RÕ]`
- PDHS_US1 (danh sách cơ bản)

## Ngoài phạm vi

- Lưu bộ lọc yêu thích

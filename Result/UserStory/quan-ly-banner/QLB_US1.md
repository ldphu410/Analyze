# User Story: QLB_US1

| Trường | Giá trị |
|--------|---------|
| **Module** | Quản lý Banner |
| **Epic** | 1 — Danh sách banner |
| **Pages** | 4 |
| **REQ IDs** | REQ-BN-001 |
| **Điểm ước lượng** | S (≈0,5–1,5 ngày) |

## Câu chuyện

**Với vai trò** Quản trị Web Admin  
**Tôi muốn** xem danh sách banner theo từng nền tảng  
**Để** nhanh chóng tìm banner cần cập nhật

## Tiêu chí chấp nhận

- **Cho trước** admin mở trang Quản lý banner  
- **Khi** trang được tải  
- **Thì** hiển thị danh sách/bảng banner nhóm theo nền tảng (4 nền tảng) `[ĐÃ XÁC NHẬN]`  
- **Và** mỗi dòng hiển thị: ảnh preview, tiêu đề, link, nền tảng, trạng thái  
- **Và** hiển thị trạng thái trống khi chưa có banner

## Phạm vi giao diện

- Bảng hoặc danh sách card
- Nhóm/lọc theo nền tảng
- Preview ảnh banner
- Nút chỉnh sửa

## Lưu ý triển khai

- Tái sử dụng component danh sách hiện có  
- Hiển thị loading khi đang tải dữ liệu

## Phụ thuộc

- API: `GET /api/banners` `[CHƯA RÕ]`
- Quyền: quản lý banner

## Ngoài phạm vi

- Tạo banner mới, xóa banner `[GIẢ ĐỊNH — chưa thấy trên UI]`

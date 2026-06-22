# User Story: QLDM_US1

| Trường | Giá trị |
|--------|---------|
| **Module** | Quản lý Danh mục |
| **Epic** | 1 — Danh sách danh mục |
| **Pages** | 34 |
| **REQ IDs** | REQ-CAT-001 |
| **Điểm ước lượng** | S (≈0,5–1,5 ngày) |

## Câu chuyện

**Với vai trò** Quản trị Web Admin  
**Tôi muốn** xem danh sách danh mục lớn dạng bảng  
**Để** kiểm tra dữ liệu trước khi chỉnh sửa

## Tiêu chí chấp nhận

- **Cho trước** admin mở trang Quản lý danh mục  
- **Khi** trang được tải  
- **Thì** hiển thị bảng với: mã danh mục, tên, mô tả, trạng thái, thao tác  
- **Và** hiển thị trạng thái trống khi chưa có danh mục

## Phạm vi giao diện

- Bảng danh sách
- Menu thao tác
- Badge trạng thái

## Lưu ý triển khai

- Tái sử dụng component bảng hiện có  
- Hiển thị loading khi đang tải

## Phụ thuộc

- API: `GET /api/categories` `[CHƯA RÕ]`
- Quyền: quản lý danh mục

## Ngoài phạm vi

- Cây danh mục nhiều cấp `[GIẢ ĐỊNH]`

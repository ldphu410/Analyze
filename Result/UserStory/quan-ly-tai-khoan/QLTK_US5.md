# User Story: QLTK_US5

| Trường | Giá trị |
|--------|---------|
| **Module** | Quản lý Tài khoản |
| **Epic** | 3 — Xem chi tiết tài khoản |
| **Pages** | 9–19 (mục 3.5, a→k) |
| **REQ IDs** | REQ-ACC-005, REQ-ACC-006, REQ-SDP-005 |
| **Điểm ước lượng** | M (≈2–3 ngày) |

## Câu chuyện

**Với vai trò** Quản trị Web Admin  
**Tôi muốn** side panel hiển thị đúng nội dung theo loại đối tượng của tài khoản  
**Để** xem đúng cấu trúc thông tin khi rà soát từng loại hồ sơ

## Tiêu chí chấp nhận

- **Cho trước** admin mở chi tiết tài khoản với một `panelType` cụ thể  
- **Khi** panel tải ở chế độ `view-only`  
- **Thì** hiển thị đúng section và trường tương ứng:

| panelType | Page | Nhãn hiển thị |
|-----------|------|---------------|
| `security` | 9a | Bảo mật |
| `account` | 10b | Tài khoản |
| `online-consulting` | 11c | Tư vấn online |
| `home-care` | 12d | Chăm sóc tại nhà |
| `clinic` | 13e | Phòng mạch |
| `medical-facility` | 15g | Cơ sở y khoa |
| `lab-center` | 16h | Trung tâm xét nghiệm |
| `pharmacy` | 17i | Nhà thuốc |
| `store` | 18j | Cửa hàng |
| `service-package-list` | 19k | Danh sách gói dịch vụ |
| `service-package-detail` | 19k | Chi tiết gói dịch vụ |

- **Và** ẩn các section không liên quan  
- **Và** hiển thị thông báo fallback nếu `panelType` chưa hỗ trợ

## Phạm vi giao diện

- PanelTypeRegistry (Shared Detail Panel)
- Render section theo loại đối tượng
- UI fallback

## Lưu ý triển khai

- Mỗi loại là cấu hình/wrapper trên component Web Chuyên Gia — không build lại từ đầu  
- `expert-profile` chỉ có ở luồng phê duyệt, không có ở module tài khoản

## Phụ thuộc

- Shared Detail Panel — `PanelTypeRegistry`
- API chi tiết theo từng loại `[CHƯA RÕ]`

## Ngoài phạm vi

- Chỉnh sửa bất kỳ trường nào trong chế độ xem

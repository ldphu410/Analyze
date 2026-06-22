# User Story: PDHS_US5

| Trường | Giá trị |
|--------|---------|
| **Module** | Phê duyệt Hồ sơ & Gói DV |
| **Epic** | 2 — Chi tiết yêu cầu phê duyệt |
| **Pages** | 24–32 |
| **REQ IDs** | REQ-PHE-005, REQ-SDP-005 |
| **Điểm ước lượng** | M (≈2–3 ngày) |

## Câu chuyện

**Với vai trò** Quản trị Web Admin  
**Tôi muốn** panel chi tiết hiển thị đúng nội dung theo loại đối tượng xét duyệt  
**Để** rà soát đúng hồ sơ khi phê duyệt từng loại dịch vụ / cơ sở

## Tiêu chí chấp nhận

- **Cho trước** admin mở chi tiết yêu cầu với một `subjectType` cụ thể  
- **Khi** panel tải ở chế độ `approval`  
- **Thì** hiển thị đúng section và trường tương ứng:

| subjectType | Page |
|-------------|------|
| `home-care` | 24 — Chăm sóc tại nhà |
| `online-consulting` | 25 — Tư vấn online |
| `clinic` | 26 — Phòng mạch |
| `expert-profile` | 27 — Profile chuyên gia |
| `medical-facility` | 28 — Cơ sở y khoa |
| `lab-center` | 29 — Trung tâm xét nghiệm |
| `pharmacy` | 30 — Nhà thuốc |
| `store` | 31 — Cửa hàng |
| `service-package` | 32 — Gói dịch vụ |

- **Và** phân biệt hiển thị giữa yêu cầu hồ sơ cơ sở và gói dịch vụ theo `requestType`  
- **Và** hiển thị fallback nếu `subjectType` chưa hỗ trợ

## Phạm vi giao diện

- PanelTypeRegistry (Shared Detail Panel) + overlay chế độ phê duyệt
- Section động theo loại đối tượng

## Lưu ý triển khai

- Dùng chung registry với QLTK_US5 ở các loại trùng nhau  
- `expert-profile` chỉ có ở luồng phê duyệt  
- Cấu hình-driven — không build 9 panel riêng biệt

## Phụ thuộc

- Shared Detail Panel — `PanelTypeRegistry`
- PDHS_US3 (shell chế độ approval)

## Ngoài phạm vi

- Tạo mới giao diện panel — phải reuse Web Chuyên Gia

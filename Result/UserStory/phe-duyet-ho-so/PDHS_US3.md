# User Story: PDHS_US3

| Trường | Giá trị |
|--------|---------|
| **Module** | Phê duyệt Hồ sơ & Gói DV |
| **Epic** | 2 — Chi tiết yêu cầu phê duyệt |
| **Pages** | 24 |
| **REQ IDs** | REQ-PHE-005, REQ-PHE-006 |
| **Điểm ước lượng** | M (≈2–3 ngày) |

## Câu chuyện

**Với vai trò** Quản trị Web Admin  
**Tôi muốn** xem chi tiết yêu cầu ở chế độ phê duyệt, có thể chỉnh sửa dữ liệu khi cần  
**Để** rà soát và điều chỉnh thông tin trước khi quyết định duyệt

## Tiêu chí chấp nhận

- **Cho trước** admin chọn "Xem chi tiết" trên một yêu cầu  
- **Khi** side panel mở qua Shared Detail Panel (`mode: approval`)  
- **Thì** hiển thị dữ liệu theo loại đối tượng và trạng thái hiện tại  
- **Và** hiển thị nút Duyệt và Từ chối  
- **Và** các trường cho phép chỉnh sửa (data correction) theo cấu hình `[CHƯA RÕ — danh sách field chờ khách xác nhận]`  
- **Và** các trường read-only giữ nguyên không cho sửa

## Phạm vi giao diện

- Side panel chế độ `approval`
- Nút Duyệt / Từ chối (chi tiết thao tác ở PDHS_US4)
- Trường editable / read-only theo cấu hình

## Lưu ý triển khai

- Tích hợp `DetailPanelShell` với `mode: approval`  
- Mặc định read-only cho đến khi khách xác nhận phạm vi data correction  
- Tái sử dụng panel từ Web Chuyên Gia `[ĐÃ XÁC NHẬN]`

## Phụ thuộc

- Shared Detail Panel
- API: `GET /api/approval-requests/{requestId}` `[CHƯA RÕ]`
- PDHS_US1 (danh sách cơ bản)

## Ngoài phạm vi

- Build lại form chi tiết từ đầu

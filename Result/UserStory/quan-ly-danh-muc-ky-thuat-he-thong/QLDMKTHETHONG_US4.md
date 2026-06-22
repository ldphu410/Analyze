# User Story: QLDMKTHETHONG_US4

| Trường | Giá trị |
|--------|---------|
| **Module** | Quản lý DMKT Hệ thống |
| **Epic** | 3 — Chỉnh sửa trên bảng chính |
| **Pages** | 42, 43 |
| **REQ IDs** | REQ-DMKT-006, REQ-DMKT-007, REQ-DMKT-008 |
| **Điểm ước lượng** | M (≈2–3 ngày) |

## Câu chuyện

**Với vai trò** Quản trị Web Admin  
**Tôi muốn** chỉnh sửa dòng DMKT trực tiếp trên bảng chính  
**Để** điều chỉnh dữ liệu nhanh sau khi đã xem xét

## Tiêu chí chấp nhận

- **Cho trước** admin đang xem bảng DMKT của một nhóm  
- **Khi** chỉnh sửa một dòng (inline hoặc qua modal)  
- **Thì** có thể cập nhật và lưu thay đổi  
- **Và** bảng refresh sau khi lưu thành công `[ĐÃ XÁC NHẬN]`  
- **Và** hiển thị lỗi nếu lưu thất bại

## Phạm vi giao diện

- Chỉnh sửa trên bảng (inline hoặc modal)
- Cột thao tác
- Nút Lưu cập nhật (sau upload)

## Lưu ý triển khai

- Trường nào được phép sửa cần khách xác nhận `[CHƯA RÕ]`  
- Tái sử dụng control chỉnh sửa từ thư viện bảng hiện có

## Phụ thuộc

- API: `PUT /api/technical-categories/{id}` `[CHƯA RÕ]`
- QLDMKTHETHONG_US1 (bảng cơ bản)

## Ngoài phạm vi

- Lịch sử thay đổi từng dòng

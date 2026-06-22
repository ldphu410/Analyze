# Bản trình bày sơ bộ — Web Admin Y VIET Phase 1

| | |
|---|---|
| **Phiên bản** | 1.1 |
| **Ngày cập nhật** | Tháng 6, 2026 |
| **Trạng thái** | Draft estimate — chờ khách hàng review |
| **Đầu vào** | UI mockup (43 pages), chưa có business details đầy đủ |

> Tài liệu chi tiết: [Result/README.md](./Result/README.md) · [Ước lượng](./Result/estimate-summary.md) · [Ánh xạ Page → Module](./Result/module-groups.md)

---

## Mục tiêu hệ thống

Web Admin là nền tảng quản lý dành cho quản trị viên, hỗ trợ:

- Phê duyệt hồ sơ cơ sở và gói dịch vụ
- Quản lý tài khoản người dùng (trạng thái duyệt, khóa/tạm khóa)
- Quản lý quản trị viên (QTV) và phân quyền
- Quản lý danh mục, nhóm kỹ thuật, DMKT hệ thống
- Cập nhật banner trên 4 nền tảng

Giao diện tái sử dụng component từ **Web Chuyên Gia** `[ĐÃ XÁC NHẬN]`.

---

## Tóm tắt phạm vi

| Chỉ tiêu | Con số |
|----------|--------|
| Số page UI | 43 |
| Module (gồm 1 lớp dùng chung) | 8 |
| Epic | 21 |
| User Story | 34 |
| Yêu cầu chức năng (REQ) | 46 |
| Ước lượng FE (1 Senior) | **~55 ngày** |

---

## Danh sách module

👉 [Đặc tả module](./Result/modules/) · [User Story](./Result/UserStory/)

| # | Module | Pages | Mô tả | Story |
|---|--------|-------|-------|-------|
| 0 | **Side Panel dùng chung** | 9–19, 24–32 | Thư viện panel tái sử dụng — chế độ xem & phê duyệt | — |
| 1 | **Quản lý QTV** | 1–3 | Danh sách, thêm/sửa/xóa, phân quyền QTV | 11 |
| 2 | **Quản lý Banner** | 4–5 | Banner trên 4 nền tảng | 3 |
| 3 | **Quản lý Tài khoản** | 6–19 | Danh sách user, khóa/tạm khóa, side panel read-only (a→k) | 5 |
| 4 | **Phê duyệt Hồ sơ & Gói DV** | 20–33 | Duyệt/từ chối, đồng bộ trạng thái admin/user | 6 |
| 5 | **Quản lý Danh mục** | 34–35 | Danh mục lớn — bảng và modal CRUD | 3 |
| 6 | **Quản lý Nhóm kỹ thuật** | 36–37 | Nhóm kỹ thuật — reuse UI Danh mục | 2 |
| 7 | **Quản lý DMKT Hệ thống** | 38–43 | Upload Excel, validate, preview, chỉnh sửa bảng | 4 |

**Lưu ý:** Page 10–19 (side panel a→k) thuộc **Quản lý Tài khoản**, không phải module riêng. Estimate panel nằm ở module **Side Panel dùng chung** (~4 ngày), tránh tính trùng.

---

## Tóm tắt từng module

### Phê duyệt Hồ sơ & Gói DV

- Danh sách 2 luồng: hồ sơ cơ sở và gói dịch vụ (UI giống nhau)
- Lọc theo loại và trạng thái
- Side panel chi tiết theo loại đối tượng + chỉnh sửa dữ liệu `[CHƯA RÕ]`
- Duyệt / từ chối — lý do bắt buộc khi từ chối `[ĐÃ XÁC NHẬN]`
- Đồng bộ trạng thái giữa Web Admin và Web Chuyên gia của user `[ĐÃ XÁC NHẬN]`

### Quản lý QTV

- Danh sách có phân trang, tìm kiếm, lọc
- Thêm / sửa / xóa (popup xác nhận khi xóa)
- Gán vai trò (multi-select), xem trước quyền

### Quản lý Tài khoản

- Danh sách tài khoản, menu thao tác theo trạng thái duyệt
- Xem lý do từ chối, popup khóa/tạm khóa
- 11 loại side panel read-only (Bảo mật → Chi tiết gói DV)

### Quản lý Danh mục · Nhóm kỹ thuật · Banner · DMKT

- **Danh mục / Nhóm KT:** CRUD qua bảng + modal
- **Banner:** danh sách theo nền tảng, cập nhật ảnh/nội dung
- **DMKT:** chọn nhóm → upload Excel → validate → preview → lưu → sửa bảng (module phức tạp nhất)

---

## Ước lượng effort (draft)

| Hạng mục | Ngày (tham khảo) |
|----------|------------------|
| Giao diện (FE, 1 Senior) | ~55 |
| Backend `[GIẢ ĐỊNH]` | ~38–52 |
| Dự phòng khi có business spec | +15–20% |

Chi tiết từng module: [estimate-summary.md](./Result/estimate-summary.md)

---

## Ngoài phạm vi (Phase 1)

- Audit trail / lịch sử thay đổi quyền
- Thao tác hàng loạt (bulk)
- Lên lịch hiển thị banner
- Gửi thông báo push/email khi duyệt/từ chối
- Import/export CSV danh mục

---

## Câu hỏi cần khách hàng xác nhận

1. Chỉnh sửa dữ liệu khi phê duyệt: trường nào được sửa?
2. Có cần lưu lịch sử phê duyệt (audit trail)?
3. Ma trận phân quyền QTV: theo role hay permission chi tiết?
4. Khóa vs tạm khóa: khác nhau thế nào? Có tự mở khóa?
5. Danh sách trạng thái duyệt tài khoản và quy tắc chuyển trạng thái?
6. 4 nền tảng banner là gì? Kích thước/định dạng ảnh?
7. Template Excel DMKT: cấu trúc cột và rule validate?
8. Upload DMKT: ghi đè toàn bộ hay merge từng dòng?
9. Giới hạn dung lượng file upload?
10. Có cần gửi thông báo cho user khi trạng thái thay đổi?

---

## Bước tiếp theo

1. **Workshop với khách** — xác nhận câu hỏi trên và business rules
2. **Chốt phạm vi** — sign-off requirement draft
3. **Estimation chi tiết** — sau khi có business spec
4. **Phát triển & kiểm thử** — theo sprint plan

---

## Cấu trúc repository

```
Analyze/
├── Requirement/          # UI mockup từ khách (Page 1–43)
├── Result/
│   ├── modules/          # Đặc tả từng module
│   ├── UserStory/        # User story + backlog
│   ├── module-groups.md
│   └── estimate-summary.md
└── README.md             # Tài liệu này
```

# Result — Web Admin Y VIET Phase 1

Tài liệu phân tích requirement và user story phục vụ **draft estimate**. Khách hàng hiện chỉ cung cấp UI mockup, chưa có business details đầy đủ.

## Cấu trúc thư mục

```
Result/
├── README.md                 # Tài liệu này
├── module-groups.md          # Mapping Page → Module
├── estimate-summary.md       # Tổng hợp estimate (đã khử trùng)
├── modules/                  # Đặc tả từng module
└── UserStory/                # User story theo module
    └── <module>/backlog.md   # Epic + story index
```

## Module

| # | Module | Pages | FE Estimate |
|---|--------|-------|-------------|
| 0 | [Side Panel dùng chung](modules/shared-detail-panel.md) | Cross-cutting (9–19, 24–32) | ~4,0 ngày |
| 1 | [Quản lý QTV](modules/quan-ly-qtv.md) | 1–3 | ~9,6 ngày |
| 2 | [Quản lý Banner](modules/quan-ly-banner.md) | 4–5 | ~5,4 ngày |
| 3 | [Quản lý Tài khoản](modules/quan-ly-tai-khoan.md) | 6–19 | ~6,0 ngày |
| 4 | [Phê duyệt Hồ sơ & Gói DV](modules/phe-duyet-ho-so.md) | 20–33 | ~11,0 ngày |
| 5 | [Quản lý Danh mục](modules/quan-ly-danh-muc.md) | 34–35 | ~4,5 ngày |
| 6 | [Quản lý Nhóm kỹ thuật](modules/quan-ly-nhom-ky-thuat.md) | 36–37 | ~2,5 ngày |
| 7 | [Quản lý DMKT Hệ thống](modules/quan-ly-danh-muc-ky-thuat-he-thong.md) | 38–43 | ~12,0 ngày |
| | **Tổng FE (1 Senior)** | | **~55,0 ngày** |

> Chi tiết assumption và contingency: xem [estimate-summary.md](estimate-summary.md).

## Thang điểm ước lượng

| Điểm | Ý nghĩa | Effort giao diện |
|------|---------|------------------|
| **S** | UI đơn giản, tái sử dụng component sẵn có | 0,5–1,5 ngày |
| **M** | Form/bảng có logic vừa phải | 2–3 ngày |
| **L** | Luồng phức tạp (upload, validate, nhiều bước) | 4–6 ngày |

## Quy ước đánh dấu

| Nhãn | Ý nghĩa |
|------|---------|
| `[ĐÃ XÁC NHẬN]` | Có trong requirement hoặc UI note từ khách |
| `[GIẢ ĐỊNH]` | Suy luận từ UI — cần khách confirm |
| `[CHƯA RÕ]` | Chưa có thông tin — chưa estimate chi tiết |

## Ngoài phạm vi (Phase 1 — draft estimate)

- Lịch sử thay đổi quyền (audit trail)
- Idempotency key, optimistic UI, xử lý đồng thời HTTP 409
- Thao tác hàng loạt (bulk delete, bulk gán role)
- Lên lịch hiển thị banner
- Import/export CSV danh mục
- Gửi thông báo push/email khi duyệt/từ chối

## Câu hỏi cần workshop với khách

1. Ma trận phân quyền QTV: theo role hay permission chi tiết?
2. Danh sách trạng thái duyệt tài khoản và quy tắc chuyển trạng thái?
3. Khóa vs Tạm khóa: khác nhau thế nào? Có tự mở khóa?
4. Chỉnh sửa dữ liệu khi phê duyệt: trường nào được sửa?
5. 4 nền tảng banner là gì? Kích thước/định dạng ảnh?
6. Template Excel DMKT: cấu trúc cột và rule validate?
7. Upload DMKT: ghi đè toàn bộ hay merge từng dòng?

# Quy ước User Story

Tài liệu user story dùng cho **bản kế hoạch gửi khách hàng review** — ngôn ngữ tiếng Việt, giữ nguyên thuật ngữ kỹ thuật phổ biến khi dịch sang tiếng Việt khó hiểu.

## Cấu trúc mẫu

```markdown
# User Story: <ID>

| Trường | Giá trị |
|--------|---------|
| **Module** | ... |
| **Epic** | ... |
| **Pages** | ... |
| **REQ IDs** | ... |
| **Điểm ước lượng** | S / M / L |

## Câu chuyện
**Với vai trò** ... **Tôi muốn** ... **Để** ...

## Tiêu chí chấp nhận
- **Cho trước** ... **Khi** ... **Thì** ...

## Phạm vi giao diện
## Lưu ý triển khai
## Phụ thuộc
## Ngoài phạm vi
```

## Thang điểm ước lượng

| Điểm | Effort giao diện (tham khảo) |
|------|----------------------------|
| S | 0,5–1,5 ngày |
| M | 2–3 ngày |
| L | 4–6 ngày |

## Nhãn

| Nhãn | Ý nghĩa |
|------|---------|
| `[ĐÃ XÁC NHẬN]` | Có trong requirement / UI note từ khách |
| `[GIẢ ĐỊNH]` | Suy luận từ UI — cần khách confirm |
| `[CHƯA RÕ]` | Chưa có thông tin — chưa estimate chi tiết |

## Danh mục theo module

| Thư mục | Module | User Story |
|---------|--------|------------|
| quan-ly-qtv | Quản lý QTV | QLQTV_US1–11 |
| quan-ly-banner | Quản lý Banner | QLB_US1–3 |
| quan-ly-tai-khoan | Quản lý Tài khoản | QLTK_US1–5 |
| phe-duyet-ho-so | Phê duyệt Hồ sơ & Gói DV | PDHS_US1–6 |
| quan-ly-danh-muc | Quản lý Danh mục | QLDM_US1–3 |
| quan-ly-nhom-ky-thuat | Quản lý Nhóm kỹ thuật | QLNKTT_US1–2 |
| quan-ly-danh-muc-ky-thuat-he-thong | Quản lý DMKT Hệ thống | QLDMKTHETHONG_US1–4 |

> Side panel dùng chung: xem [modules/shared-detail-panel.md](../modules/shared-detail-panel.md) — không có user story riêng; được sử dụng bởi QLTK_US3/5 và PDHS_US3/5.

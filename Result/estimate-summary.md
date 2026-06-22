# Tổng hợp ước lượng — Web Admin Phase 1

**Loại ước lượng:** Draft (chỉ có UI mockup)  
**Giả định:** Tái sử dụng component từ Web Chuyên Gia (~30–40% giảm effort giao diện)  
**Đối tượng:** 1 Senior Frontend Developer

## Tổng hợp theo module

| Module | Mid (d) | Contingency 20% | Total (d) | Ghi chú |
|--------|---------|-----------------|-----------|---------|
| Side Panel dùng chung | 3,3 | 0,7 | **4,0** | Estimate 1 lần, dùng chung 3 ngữ cảnh |
| Quản lý QTV | 8.0 | 1.6 | **9.6** | |
| Quản lý Banner | 4.5 | 0.9 | **5.4** | |
| Quản lý Tài khoản | 5,0 | 1,0 | **6,0** | Không bao gồm build panel (dùng chung) |
| Phê duyệt Hồ sơ & Gói DV | 9,2 | 1,8 | **11,0** | Overlay chế độ phê duyệt trên Side Panel |
| Quản lý Danh mục | 3.75 | 0.75 | **4.5** | |
| Quản lý Nhóm kỹ thuật | 2.1 | 0.4 | **2.5** | Reuse UI Danh mục (-40%) |
| Quản lý DMKT Hệ thống | 10.0 | 2.0 | **12.0** | Module phức tạp nhất |
| **Tổng** | **45.9** | **9.1** | **~55.0** | |

## Điều chỉnh so với bản trước

| Vấn đề | Hành động | Impact |
|--------|-----------|--------|
| Module "Loại hình DV" tách sai Page 10–19 | Gộp vào Quản lý Tài khoản | −7.5d trùng lặp |
| Side panel estimate 3 lần | Tách Shared Detail Panel | −8–10d trùng lặp |
| Yêu cầu ẩn quá sâu | Chuyển sang Ngoài phạm vi | Tránh phình scope |
| Nhóm kỹ thuật reuse Danh mục | Giảm estimate | −1,1 ngày |

## Phân bổ effort theo loại

```
Shared components (panel, table, modal)  ████████████░░░░  ~35%
CRUD modules (QTV, Danh mục, Banner)     ████████░░░░░░░░  ~25%
Phê duyệt (list + decision + sync)       ████████░░░░░░░░  ~20%
DMKT (upload/validate/preview)           ████████░░░░░░░░  ~22%
Tài khoản (list + lock + panel consume)  ████░░░░░░░░░░░░  ~11%
```

## Ước lượng Backend `[GIẢ ĐỊNH]`

Chưa có API spec từ khách. Tham khảo:

| Hạng mục | Range (d) |
|----------|-----------|
| CRUD APIs (QTV, Banner, Danh mục, Nhóm KT) | 12–15 |
| Tài khoản + lock/status | 5–7 |
| Phê duyệt + sync status | 8–12 |
| DMKT upload/validate | 8–10 |
| Auth/permission middleware | 5–8 |
| **Tổng BE** | **~38–52** |

## Rủi ro estimate

| Rủi ro | Mức | Buffer đề xuất |
|--------|-----|----------------|
| Business rules chưa rõ (phê duyệt, lock) | High | +15–20% khi có spec |
| Phạm vi chỉnh sửa dữ liệu phê duyệt chưa rõ | Cao | +5–10 ngày nếu sửa nhiều trường |
| Excel template DMKT chưa có | Medium | Đã có contingency 20% |
| BE chưa sẵn sàng, FE mock API | Medium | +30% integration time |

## Điều kiện báo giá

1. Estimate valid khi assumption tái sử dụng UI Web Chuyên Gia đúng.
2. Mọi `[GIẢ ĐỊNH]` chuyển thành change request khi khách xác nhận khác.
3. Hạng mục Ngoài phạm vi không nằm trong báo giá trừ khi khách yêu cầu bổ sung.

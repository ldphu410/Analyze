# User Story: QLQTV_US10

| Trường | Giá trị |
|--------|---------|
| **Module** | Quản lý QTV |
| **Epic** | 5 — Thao tác chung |
| **Pages** | 1–3 |
| **REQ IDs** | — |
| **Điểm ước lượng** | S (≈0,5–1,5 ngày) |

## Câu chuyện

**Với vai trò** Quản trị Web Admin  
**Tôi muốn** thấy rõ trạng thái đang tải dữ liệu và khi có lỗi  
**Để** biết hệ thống đang xử lý hay đã gặp sự cố

## Tiêu chí chấp nhận

- **Cho trước** danh sách hoặc chi tiết đang tải dữ liệu  
- **Khi** yêu cầu chưa hoàn tất  
- **Thì** hiển thị loading (skeleton hoặc spinner)  
- **Và** nếu thất bại, hiển thị thông báo lỗi kèm nút thử lại

## Phạm vi giao diện

- Loading indicator
- Thông báo lỗi
- Nút Thử lại

## Lưu ý triển khai

- Tái sử dụng component loading/error dùng chung  
- Phân biệt trạng thái: tải danh sách, tải chi tiết, gửi form

## Phụ thuộc

- Các API danh sách và chi tiết quản trị viên

## Ngoài phạm vi

- Retry tự động không giới hạn

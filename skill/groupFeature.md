# Skill: Group Feature

## Mục tiêu
Là một Business Analyst, nhiệm vụ của bạn là xác định và nhóm các Page trong thư mục `Requirement` thành các module nghiệp vụ. Mỗi module sẽ chứa các page thể hiện cùng chức năng hoặc cùng một luồng nghiệp vụ.

## Yêu cầu
- Đọc toàn bộ page trong thư mục `/Users/ledinhphu/Desktop/Project/Analyze/Requirement`.
- Mỗi page tương ứng với folder `Page [n]` và có file `content.text`/`content.tsx` và các hình ảnh tham chiếu.
- Xác định các module nghiệp vụ dựa trên nội dung và luồng của page.
- Mỗi module phải bao gồm:
  - Tên module (ví dụ: `Quản lý QTV`, `Báo cáo thống kê`, `Cấu hình phân quyền`).
  - Mô tả ngắn gọn mục đích của module.
  - Danh sách các page thuộc module.
  - Tại sao các page đó thuộc cùng module (chức năng chung / luồng nghiệp vụ chung).

## Output mong muốn
- Một danh sách module với từng page nằm trong module tương ứng.
- Mỗi module phải rõ ra:
  - Module name
  - Description
  - Pages: Page [n], Page [m], ...
  - Function / flow tập trung của module
- Kết quả mỗi module phải được lưu thành từng file Markdown riêng trong thư mục `/Users/ledinhphu/Desktop/Project/Analyze/Result/modules`.
- Tên file tương ứng theo định dạng: `[module].md` (ví dụ: `quan-ly-qtv.md`, `bao-cao-thong-ke.md`).

## Nguyên tắc grouping
- Các page có cùng tính năng chính hoặc thuộc cùng flow nghiệp vụ nên vào cùng module.
- Các page phụ trợ (ví dụ: popup, modal, confirm) nếu thuộc cùng flow thì nên ghép vào module của flow chính.
- Nếu một page chứa nhiều chức năng khác nhau, hãy xác định module chính và ghi chú page đó có vai trò hỗ trợ module nào.
- Nếu cần, tạo module `Miscellaneous` hoặc `Common UI` cho các page không thuộc module chức năng rõ ràng nhưng vẫn quan trọng.

## Example structure
```
Module: Quản lý QTV
- Description: Quản lý danh sách và quyền của tài khoản quản trị viên.
- Pages: Page 1, Page 2, Page 3
- Reason: Các page này đều liên quan đến functions list, search, filter, add, delete và permission settings.
```

## Lưu ý
- Đây là bước phân tích trước khi truy xuất chi tiết nội dung page.
- Không cần viết requirement chi tiết trong file này, chỉ cần group module và giải thích logic.

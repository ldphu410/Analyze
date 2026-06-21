# 📋 Bản Trình Bày Sơ Bộ Dự Án Web Admin

**Phiên bản:** 1.0  
**Ngày cập nhật:** Tháng 6, 2026  
**Trạng thái:** ✅ Sẵn sàng Review  

---

## 🎯 Mục Tiêu Của Hệ Thống

Hệ thống **Web Admin** là một nền tảng quản lý toàn diện dành cho các quản trị viên, cho phép họ:

- ✅ **Phê duyệt hồ sơ và gói dịch vụ** từ người dùng với quy trình kiểm soát chất lượng đầy đủ
- ✅ **Quản lý danh mục và cấu hình** hệ thống (danh mục, nhóm kỹ thuật, banner)
- ✅ **Quản lý tài khoản người dùng** và phân quyền cho các operator
- ✅ **Quản lý quản trị viên** với phân quyền chi tiết
- ✅ **Cập nhật nội dung động** như banner trên nhiều nền tảng

---

## 📦 Tóm Tắt Phạm Vi

| Chỉ Tiêu | Con Số |
|---------|-------|
| **Tổng Số Module** | **8 modules** |
| **Tổng Số Epic** | **21 epics** |
| **Tổng Số User Stories** | **36 stories** |
| **Tổng Số Requirements** | **48 requirements** |

---

## 📂 Danh Sách Các Module
👉 **[Xem Tài Liệu Đầy Đủ Về Overview Requirement](./Result/modules)**

👉 **[Xem Tài Liệu Đầy Đủ Về User Stories](./Result/UserStory)**

| # | Module | Mô Tả | Epic | Story |
|---|--------|-------|------|-------|
| 1 | **Phê Duyệt Hồ Sơ & Gói Dịch Vụ** | Xử lý luồng duyệt/từ chối hồ sơ cơ sở và gói dịch vụ | 2 | 5 |
| 2 | **Quản Lý QTV** | Tạo, sửa, xóa, gán quyền cho quản trị viên | 5 | 11 |
| 3 | **Quản Lý Danh Sách Tài Khoản** | Hiển thị tài khoản user, khóa/tạm khóa, xem lý do từ chối | 3 | 4 |
| 4 | **Quản Lý Loại Hình Dịch Vụ** | Hiển thị panel read-only cho nhiều loại đối tượng dịch vụ | 2 | 4 |
| 5 | **Quản Lý Danh Mục** | Hiển thị, tạo, sửa danh mục lớn | 2 | 3 |
| 6 | **Quản Lý Nhóm Kỹ Thuật** | Tạo, sửa nhóm kỹ thuật, tái sử dụng UI danh mục | 2 | 2 |
| 7 | **Quản Lý Banner** | Hiển thị, cập nhật banner trên 4 nền tảng | 2 | 3 |
| 8 | **Quản Lý Danh Mục Kỹ Thuật** | Upload Excel, validate, preview, chỉnh sửa dữ liệu | 3 | 4 |

---

## 📑 Nội Dung Chính

### 1️⃣ Phê Duyệt Hồ Sơ & Gói Dịch Vụ (Module 1)

**Mục tiêu:** Cung cấp giao diện quản lý yêu cầu phê duyệt với quy trình duyệt/từ chối rõ ràng

**Chức năng chính:**
- Xem danh sách yêu cầu (bảng, pagination)
- Lọc theo loại yêu cầu và trạng thái
- Xem chi tiết yêu cầu (hỗ trợ hồ sơ cơ sở & gói dịch vụ)
- Duyệt hoặc từ chối với lý do bắt buộc
- Cập nhật trạng thái đồng bộ admin/user

**User Stories:** 5 stories  
**Priority:** High

---

### 2️⃣ Quản Lý QTV (Module 2)

**Mục tiêu:** Quản lý toàn bộ tài khoản quản trị viên với phân quyền chi tiết

**Chức năng chính:**
- Danh sách, tìm kiếm, lọc QTV
- Xem chi tiết, thêm, sửa, xóa QTV
- Gán multi-select roles
- Xem effective permissions

**User Stories:** 11 stories  
**Priority:** High

---

### 3️⃣ Quản Lý Danh Sách Tài Khoản (Module 3)

**Mục tiêu:** Quản lý trạng thái tài khoản user

**Chức năng chính:**
- Danh sách tài khoản với lọc
- Xem chi tiết (read-only)
- Xem lý do từ chối
- Khóa/tạm khóa tài khoản

**User Stories:** 4 stories  
**Priority:** High

---

### 4️⃣ Quản Lý Loại Hình Dịch Vụ (Module 4)

**Mục tiêu:** Xem chi tiết dịch vụ ở chế độ read-only trong Web Admin

**Chức năng chính:**
- Hiển thị 10+ loại panel chi tiết
- Ẩn button hành động
- Ẩn section không cần thiết
- Bỏ icon xóa trên ảnh

**User Stories:** 4 stories  
**Priority:** Medium

---

### 5️⃣ Quản Lý Danh Mục (Module 5)

**Mục tiêu:** Quản lý danh mục lớn hệ thống

**Chức năng chính:**
- Danh sách danh mục
- Tạo, sửa danh mục
- Xóa danh mục (xác nhận)

**User Stories:** 3 stories  
**Priority:** Medium

---

### 6️⃣ Quản Lý Nhóm Kỹ Thuật (Module 6)

**Mục tiêu:** Cấu hình nhóm kỹ thuật

**Chức năng chính:**
- Danh sách nhóm kỹ thuật
- Tạo, sửa nhóm
- Tái sử dụng UI từ Module 5

**User Stories:** 2 stories  
**Priority:** Medium

---

### 7️⃣ Quản Lý Banner (Module 7)

**Mục tiêu:** Cập nhật banner không cần dev

**Chức năng chính:**
- Danh sách banner (4 nền tảng)
- Cập nhật nội dung banner
- Preview trước lưu

**User Stories:** 3 stories  
**Priority:** Medium

---

### 8️⃣ Quản Lý Danh Mục Kỹ Thuật (Module 8)

**Mục tiêu:** Import hàng loạt danh mục kỹ thuật

**Chức năng chính:**
- Chọn nhóm kỹ thuật, hiển thị bảng
- Upload file Excel
- Validate dữ liệu, hiển thị lỗi
- Preview trước lưu
- Chỉnh sửa trực tiếp bảng

**User Stories:** 4 stories  
**Priority:** High

---

## 🔍 10 Câu Hỏi Cần Khách Hàng Xác Nhận

1. ❓ **Phê Duyệt Data Correction:** Được phép sửa dữ liệu trước khi approve lại?
2. ❓ **Lịch Sử Phê Duyệt:** Cần lưu audit trail?
3. ❓ **Phân Quyền Chi Tiết:** Cấu trúc role/permission?
4. ❓ **Khóa vs Tạm Khóa:** Khác biệt chi tiết?
5. ❓ **Tìm Kiếm Toàn Text:** Tìm ngoài tên/email?
6. ❓ **4 Nền Tảng Banner:** Là gì?
7. ❓ **Upload Excel Strategy:** Overwrite hay merge?
8. ❓ **Effective Permissions:** Backend hay client-side?
9. ❓ **Bulk Operations:** Hỗ trợ bulk actions?
10. ❓ **Notification:** User nhận thông báo khi status thay đổi?
11. ❓ **Upload files:** Max size là bao nhiêu?

---

## 🚀 Bước Tiếp Theo

1. ✅ **Xác Nhận Phạm Vi** (sign-off requirements)
2. 📋 **Estimation & Planning** (dev team)
3. 💻 **Phát Triển & Testing** (dev/QA team)
4. 🚢 **Release & Training** (deployment)

---

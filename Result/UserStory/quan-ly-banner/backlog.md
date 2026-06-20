# Backlog for Quản lý Banner

## Epic 1: Banner List and Selection

### Business Goal

Hiển thị danh sách banner theo từng nền tảng để admin có thể chọn và cập nhật nội dung phù hợp.

### User Stories

#### Story 1.1

As a Web Admin
I want to view banners grouped by platform
So that I can quickly find the banner I need to update

#### Acceptance Criteria

Given the admin opens the banner management page
When the page loads
Then a list or table of banners appears grouped by platform
And each banner row shows image preview, title, link, platform, và status

#### UI Scope

- Table or card list
- Platform filter/grouping
- Image preview
- Action button to edit

#### Frontend Considerations

- State management: selected platform, list data
- Validation: none beyond display
- Error handling: show banner if load fails
- Reusability: use existing list component
- Accessibility: image alt text and keyboard focus

#### Hidden Requirements

- Need empty state khi không có banner
- Need loading state cho danh sách

#### Dependency

- Backend API: GET /api/banners
- Permission system: banner management permission

#### Story Point

S

## Epic 2: Update Banner Content

### Business Goal

Cho phép admin cập nhật nội dung banner và nhìn thấy kết quả trước khi lưu.

### User Stories

#### Story 2.1

As a Web Admin
I want to edit banner content in a modal or form
So that I can update image, title, link, và trạng thái nhanh chóng

#### Acceptance Criteria

Given the admin clicks Edit on a banner
When the edit screen appears
Then form fields are shown for image, title, link, platform, và status
And saving submits the updated banner data

#### UI Scope

- Edit button
- Edit modal/form
- Image uploader
- Input fields for title và link
- Save/Cancel buttons

#### Frontend Considerations

- State management: form state, upload state
- Validation: required image/url format nếu cần
- Error handling: field-level errors và server error message
- Reusability: image upload component
- Accessibility: labels, focus management

#### Hidden Requirements

- Need preview support for multiple platforms
- Need success notification khi cập nhật thành công

#### Dependency

- Backend API: PUT /api/banners/{bannerId}
- Permission system: update banner permission

#### Story Point

M

---

#### Story 2.2

As a Web Admin
I want to see upload validation feedback before saving a banner image
So that I avoid uploading invalid files

#### Acceptance Criteria

Given the admin selects a new banner image
When the image is validated
Then the UI shows file size or aspect ratio errors before upload

#### UI Scope

- Image uploader
- Validation message area
- Preview panel

#### Frontend Considerations

- State management: upload file selection, validation state
- Validation: file type, max size, aspect ratio
- Error handling: inline validation messages
- Reusability: use shared uploader with validation
- Accessibility: error message association with the upload field

#### Hidden Requirements

- Image upload implies client-side validation and preview
- Need fallback when upload fails

#### Dependency

- Backend API: POST /api/banners/{bannerId}/upload or PUT banner payload

#### Story Point

S

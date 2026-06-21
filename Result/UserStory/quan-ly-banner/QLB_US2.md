# User Story: QLB_US2

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

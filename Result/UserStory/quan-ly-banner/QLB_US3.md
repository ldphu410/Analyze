# User Story: QLB_US3

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

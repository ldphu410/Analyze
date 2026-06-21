# User Story: QLDMKTHETHONG_US2

As a Web Admin
I want to upload an Excel file and see validation results
So that I can fix data issues before saving

#### Acceptance Criteria

Given the admin uploads an Excel file
When validation completes
Then the UI shows preview rows và error messages per row

#### UI Scope

- Upload button
- File chooser
- Preview panel
- Error tooltip per row

#### Frontend Considerations

- State management: upload file, validation status, preview rows
- Validation: display row-level errors and file-level errors
- Error handling: show upload/validation failure alerts
- Reusability: shared file upload component
- Accessibility: file input label and error announcements

#### Hidden Requirements

- Upload implies client/server validation and row-level error mapping
- Need confirm before closing preview if upload is unsaved

#### Dependency

- Backend API: POST /api/technical-categories/upload

#### Story Point

L

---

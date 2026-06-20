# Backlog for Quản lý Danh mục Kỹ thuật Hệ thống

## Epic 1: Group Selector and Data Table

### Business Goal

Cho phép admin chọn nhóm kỹ thuật và xem dữ liệu tương ứng để quản lý chính xác hơn.

### User Stories

#### Story 1.1

As a Web Admin
I want to select a technical group and display its data in a table
So that I can manage the correct group dataset

#### Acceptance Criteria

Given the admin opens the technical category module
When they select a group
Then the table refreshes with data for that group
And the selected group is highlighted

#### UI Scope

- Group selector dropdown
- Data table
- Table action column

#### Frontend Considerations

- State management: selected group, table rows
- Validation: valid group selection
- Error handling: show group load error
- Reusability: shared select and table components
- Accessibility: dropdown labels and keyboard navigation

#### Hidden Requirements

- Group selector implies source data load for options
- Need empty state if group has no rows

#### Dependency

- Backend API: GET /api/technical-groups, GET /api/technical-categories?groupId=
- Permission system: technical category view permission

#### Story Point

M

## Epic 2: Excel Upload and Preview

### Business Goal

Hỗ trợ admin upload file Excel, validate và preview trước khi lưu để tránh sai sót.

### User Stories

#### Story 2.1

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

#### Story 2.2

As a Web Admin
I want to confirm before closing the upload preview panel if there are unsaved changes
So that I do not lose my validated data accidentally

#### Acceptance Criteria

Given the upload preview panel is open with validated data
When the admin attempts to close it without saving
Then a confirmation dialog appears
And closing proceeds only after confirmation

#### UI Scope

- Upload preview side panel
- Confirm close modal

#### Frontend Considerations

- State management: unsaved upload state
- Validation: detect whether preview has unsaved changes
- Error handling: keep panel open if user cancels
- Reusability: confirmation modal component
- Accessibility: focus trap trong modal

#### Hidden Requirements

- Side panel with upload preview implies dirty-state warning
- Need consistent behavior across modal/panel close actions

#### Dependency

- Frontend only behavior with upload state

#### Story Point

S

## Epic 3: Table Edit for Technical Categories

### Business Goal

Cho phép admin chỉnh sửa dữ liệu danh mục kỹ thuật trực tiếp trên bảng chính sau khi load.

### User Stories

#### Story 3.1

As a Web Admin
I want to edit technical category rows in the main table
So that I can correct data quickly after review

#### Acceptance Criteria

Given the admin opens a technical group table
When they edit a row
Then inline or modal editing becomes available and saving updates the row

#### UI Scope

- Table edit controls
- Inline edit fields or modal

#### Frontend Considerations

- State management: edit row state, save state
- Validation: required fields and data types
- Error handling: show save error per row
- Reusability: edit controls from shared table library
- Accessibility: editable row keyboard support

#### Hidden Requirements

- Table edit implies validation rules per field and safe save rollback

#### Dependency

- Backend API: PUT /api/technical-categories/{id}
- Other FE stories: group selector and table load

#### Story Point

M

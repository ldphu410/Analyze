# Backlog for Quản lý Nhóm Kỹ thuật

## Epic 1: Technical Group Management

### Business Goal

Cung cấp giao diện quản lý nhóm kỹ thuật để admin có thể xem, chỉnh sửa và duy trì nhóm cấu hình.

### User Stories

#### Story 1.1

As a Web Admin
I want to view a table of technical groups
So that I can inspect group data and take action quickly

#### Acceptance Criteria

Given the admin opens the technical group management page
When the page loads
Then a table appears with groupId, name, description, status, và actions

#### UI Scope

- Table
- Action column
- Status indicator

#### Frontend Considerations

- State management: table data, selected row
- Validation: render values safely
- Error handling: display load failure
- Reusability: shared table component
- Accessibility: semantic table and focus support

#### Hidden Requirements

- Need empty state when no technical groups exist
- Need loading state during fetch

#### Dependency

- Backend API: GET /api/technical-groups
- Permission system: technical group management permission

#### Story Point

S

## Epic 2: Group CRUD Actions

### Business Goal

Cho phép admin tạo và chỉnh sửa nhóm kỹ thuật từ cùng một giao diện quản lý.

### User Stories

#### Story 2.1

As a Web Admin
I want to open a modal to create or edit a technical group
So that I can update group details without leaving the module

#### Acceptance Criteria

Given the admin clicks Add Group or Edit on a row
When the modal opens
Then form fields appear for name, description và status
And submitting the form saves the group

#### UI Scope

- Add Group button
- Edit action button
- Modal form
- Save/Cancel controls

#### Frontend Considerations

- State management: modal visibility, form state
- Validation: required name, max length
- Error handling: field errors and save failure messages
- Reusability: reuse modal and form patterns
- Accessibility: form labels and focus trap

#### Hidden Requirements

- Need dirty-state warning if closing modal with unsaved changes
- Need duplicate name validation before submit

#### Dependency

- Backend API: POST /api/technical-groups, PUT /api/technical-groups/{groupId}
- Permission system: create/edit technical group permission

#### Story Point

M

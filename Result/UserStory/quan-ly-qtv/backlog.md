# Backlog for Quản lý QTV

## Epic 1: Admin List

### Business Goal

Giảm thời gian quản lý tài khoản quản trị viên bằng giao diện danh sách rõ ràng, có search/filter và thao tác nhanh.

### User Stories

#### Story 1.1

As a Web Admin
I want to view the list of admin users in a paginated table
So that I can quickly find and manage admins without loading all records at once

#### Acceptance Criteria

Given the admin opens the Admin User List page
When the page loads
Then a table of admin users is displayed with columns for name, email, roles, status, createdAt, and actions
And the first page of results is shown

#### UI Scope

- Table
- Columns: Name, Email, Roles, Status, Created At, Action menu
- Pagination controls

#### Frontend Considerations

- State management: list pagination state, current page, row data cache
- Validation: none beyond list render
- Error handling: show error banner if load fails
- Reusability: use existing table component from Web Chuyên Gia
- Accessibility: keyboard navigation for table rows and pagination

#### Hidden Requirements

- Table implies sorting by at least one column
- Need empty state when no admins exist
- Need loading state while data is fetched

#### Dependency

- Backend API: GET /api/admin-users?page=&limit=
- Permission system: user must have admin management permission

#### Story Point

M

---

#### Story 1.2

As a Web Admin
I want to search admin users by name or email with debounce
So that I can quickly narrow down results without overwhelming the backend

#### Acceptance Criteria

Given the admin is on the Admin User List page
When they type into the search box
Then the list is filtered after a short debounce interval
And the request is sent to the backend with a search query

#### UI Scope

- Search box
- Table refresh
- Loading indicator for search

#### Frontend Considerations

- State management: search query, debounce timer, filter state
- Validation: sanitize query before sending
- Error handling: show inline message if search fails
- Reusability: use existing search input component
- Accessibility: label and clear button

#### Hidden Requirements

- Search implies debounce or throttling
- Need empty state for no match results

#### Dependency

- Backend API: GET /api/admin-users?search=
- Permission system: read access to admin list

#### Story Point

S

---

#### Story 1.3

As a Web Admin
I want to filter admin users by status and role
So that I can segment the list and focus on the relevant operators

#### Acceptance Criteria

Given the admin is on the Admin User List page
When they select status or role filters
Then the list updates to show only matching admin users
And the backend is queried with filter parameters

#### UI Scope

- Filter chips/dropdowns for Status and Role
- Table refresh

#### Frontend Considerations

- State management: filter values, selected roles/status
- Validation: check filter values are valid enums
- Error handling: fallback to previous results if filter load fails
- Reusability: filter components aligned with existing UI
- Accessibility: filter controls are keyboard accessible

#### Hidden Requirements

- Filter implies server-side query parameters and possible multi-select behavior

#### Dependency

- Backend API: GET /api/admin-users?status=&roles=
- Permission system: read access to admin list

#### Story Point

S

---

## Epic 2: Admin Detail

### Business Goal

Giúp admin xem chi tiết thông tin tài khoản quản trị viên và chuẩn bị cho các hành động tiếp theo.

### User Stories

#### Story 2.1

As a Web Admin
I want to open admin user details from the list
So that I can review a user before editing or deleting them

#### Acceptance Criteria

Given the admin is on the Admin User List page
When they choose View Details from an action menu
Then the Admin Detail view or side panel opens with full admin information

#### UI Scope

- Action menu
- Detail panel/view
- Read-only fields for user info

#### Frontend Considerations

- State management: selected admin user, detail fetch state
- Validation: none beyond render
- Error handling: show detail load error and retry option
- Reusability: use existing detail panel from Web Chuyên Gia
- Accessibility: focus trap in detail panel if modal

#### Hidden Requirements

- Action menu implies additional actions such as edit/delete
- Need loading and empty states for detail panel

#### Dependency

- Backend API: GET /api/admin-users/{adminId}
- Other FE stories: Admin List base data

#### Story Point

S

---

## Epic 3: Create/Edit Admin

### Business Goal

Cho phép quản lý tài khoản quản trị viên với form tạo mới và chỉnh sửa dữ liệu.

### User Stories

#### Story 3.1

As a Web Admin
I want to open a create admin modal
So that I can add a new administrator without leaving the list page

#### Acceptance Criteria

Given the admin is on the Admin User List page
When they click Add Admin
Then a modal opens with input fields for name, email, roles, and status

#### UI Scope

- Add Admin button
- Modal
- Input fields: Name, Email, Roles, Status
- Save/Cancel buttons

#### Frontend Considerations

- State management: form state, modal visibility, submission state
- Validation: required fields, email format, unique email/name client-side hints
- Error handling: show field-level validation errors and server error messages
- Reusability: modal and form controls from existing library
- Accessibility: focus management, labels, keyboard support

#### Hidden Requirements

- Edit form implies dirty-state detection and unsaved changes warning
- Role assignment implies role loading API
- Need server-validated uniqueness and API error mapping

#### Dependency

- Backend API: GET /api/roles, POST /api/admin-users
- Permission system: create admin permission

#### Story Point

M

---

#### Story 3.2

As a Web Admin
I want to edit an existing admin user in the same modal pattern
So that I can update their roles or status quickly

#### Acceptance Criteria

Given the admin opens the Edit action for an admin user
When the edit modal appears
Then it pre-fills current user values and allows updates
And saving submits changes to the backend

#### UI Scope

- Action menu
- Edit modal
- Pre-filled form fields

#### Frontend Considerations

- State management: selected admin details, dirty state, form validation
- Validation: required fields, uniqueness check, status/roles consistency
- Error handling: map backend update errors to fields
- Reusability: same modal/form as create flow
- Accessibility: clear error announcements

#### Hidden Requirements

- Need dirty-state warning if the admin closes without saving
- Must distinguish create vs edit modal state

#### Dependency

- Backend API: GET /api/admin-users/{adminId}, PUT /api/admin-users/{adminId}
- Other FE stories: Role list loader

#### Story Point

M

---

## Epic 4: Role & Permission

### Business Goal

Đảm bảo quản trị viên có thể gán roles và permissions chính xác cho admin user.

### User Stories

#### Story 4.1

As a Web Admin
I want to assign multiple roles to an admin user via multi-select
So that their effective permissions reflect the correct responsibilities

#### Acceptance Criteria

Given the admin is in the create or edit modal
When they open the roles selector
Then they can select one or more roles from the available list
And the selection is shown clearly before save

#### UI Scope

- Role multi-select control
- Role tags/chips display

#### Frontend Considerations

- State management: selected roles, available roles list
- Validation: at least one role may be required
- Error handling: fallback if roles cannot be loaded
- Reusability: existing multi-select component
- Accessibility: multi-select keyboard support

#### Hidden Requirements

- Permission assignment implies a separate roles API and mapping display of effective permissions
- Need to handle large role lists and search within roles

#### Dependency

- Backend API: GET /api/roles

#### Story Point

S

---

#### Story 4.2

As a Web Admin
I want to preview effective permissions for selected roles before saving
So that I can avoid assigning an incorrect permission set

#### Acceptance Criteria

Given the admin selects roles in the modal
When role selection changes
Then the UI updates to show effective permissions summary

#### UI Scope

- Role selection control
- Effective permissions preview panel

#### Frontend Considerations

- State management: selected roles, computed permissions
- Validation: none beyond display
- Error handling: show message if permission mapping fails
- Reusability: permission preview component if available
- Accessibility: screen-reader friendly summary

#### Hidden Requirements

- Effective permissions view may require backend or client-side role matrix data

#### Dependency

- Backend API: GET /api/roles or GET /api/role-matrix

#### Story Point

S

---

## Epic 5: Common UX States

### Business Goal

Giữ trải nghiệm liền mạch cho các trạng thái nền tảng chung của module.

### User Stories

#### Story 5.1

As a Web Admin
I want to see a confirmation modal before deleting an admin user
So that I avoid accidental deletions

#### Acceptance Criteria

Given the admin selects Delete from an action menu
When they confirm the delete action
Then a confirmation modal appears with the admin name
And delete proceeds only after confirmation

#### UI Scope

- Action menu
- Confirmation modal

#### Frontend Considerations

- State management: delete candidate, modal visibility, delete state
- Validation: confirm button only active after explicit action
- Error handling: show delete failure message
- Reusability: confirmation modal component
- Accessibility: modal focus trap and button labels

#### Hidden Requirements

- Delete action implies confirmation modal and possibly permission gating

#### Dependency

- Backend API: DELETE /api/admin-users/{adminId}
- Permission system: delete admin permission

#### Story Point

S

---

#### Story 5.2

As a Web Admin
I want clear loading and error states on list and detail views
So that I understand when data is being fetched or has failed

#### Acceptance Criteria

Given the list or detail view is fetching data
When the request is pending
Then a loading skeleton or spinner is shown
And if the request fails, an inline error message with retry option displays

#### UI Scope

- Loading indicator
- Error banner/message
- Retry button

#### Frontend Considerations

- State management: loading and error states for list/detail/modal
- Validation: none beyond request state
- Error handling: centralized error display strategy
- Reusability: use shared loading/error components
- Accessibility: announce loading and error states

#### Hidden Requirements

- Need retry patterns for failed requests
- Need distinct states for list load, detail load, and form submission

#### Dependency

- Backend API endpoints for user list/detail

#### Story Point

S

---

#### Story 5.3

As a Web Admin
I want the list and forms to respect permission gating
So that I only see actions I am allowed to perform

#### Acceptance Criteria

Given the admin has limited permissions
When they view the module
Then unavailable actions are hidden or disabled
And a permission error is not exposed in the UI

#### UI Scope

- Action menu
- Disabled buttons
- Hidden actions

#### Frontend Considerations

- State management: permission state, UI gating
- Validation: enforce UI gating consistently
- Error handling: prevent unauthorized requests proactively
- Reusability: permission utils/service
- Accessibility: communicate disabled actions clearly

#### Hidden Requirements

- Permission gating may require separate permission metadata API

#### Dependency

- Backend API: permission metadata, user session info
- Permission system: role-based access control

#### Story Point

M

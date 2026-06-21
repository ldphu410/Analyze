# User Story: QLQTV_US5

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

# User Story: QLQTV_US4

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

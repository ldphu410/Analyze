# User Story: QLQTV_US3

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

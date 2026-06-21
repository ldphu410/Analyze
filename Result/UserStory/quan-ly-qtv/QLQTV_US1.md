# User Story: QLQTV_US1

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

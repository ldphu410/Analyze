# User Story: QLNKTT_US1

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


# User Story: QLQTV_US8

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

# User Story: QLQTV_US7

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

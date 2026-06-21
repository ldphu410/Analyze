# User Story: QLTK_US3

As a Web Admin
I want to open a read-only detail panel for account information
So that I can inspect account details without editing them

#### Acceptance Criteria

Given the admin selects View Details
When the side panel opens
Then it shows read-only account fields and hides edit/delete controls

#### UI Scope

- Detail side panel
- Read-only fields
- Hidden action buttons/icons

#### Frontend Considerations

- State management: selected account details
- Validation: none beyond display
- Error handling: detail load failure and retry
- Reusability: reuse read-only panel logic
- Accessibility: focus trap if modal/panel

#### Hidden Requirements

- Need hide non-essential controls from the shared panel
- Need support for info sections and status display

#### Dependency

- Backend API: GET /api/user-accounts/{userId}

#### Story Point

S


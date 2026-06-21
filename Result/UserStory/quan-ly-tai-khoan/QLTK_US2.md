# User Story: QLTK_US2

As a Web Admin
I want action menu options to adapt based on review status
So that I only see relevant operations for each account

#### Acceptance Criteria

Given the admin views a user row
When the reviewStatus is Từ chối duyệt
Then the action menu includes View Rejection Reason
And other statuses show only applicable actions

#### UI Scope

- Action menu
- Conditional menu items
- View Rejection Reason modal

#### Frontend Considerations

- State management: selected account, menu state
- Validation: status-driven menu rendering
- Error handling: show message if data missing
- Reusability: shared action menu component
- Accessibility: menu keyboard navigation

#### Hidden Requirements

- Need mapping between reviewStatus and allowed actions
- Need modal or inline view for rejection note

#### Dependency

- Backend API: GET /api/user-accounts/{userId}
- Permission system: view rejection reason

#### Story Point

S

---

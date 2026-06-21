# User Story: QLQTV_US9

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

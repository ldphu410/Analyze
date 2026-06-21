# User Story: QLDMKTHETHONG_US3

As a Web Admin
I want to confirm before closing the upload preview panel if there are unsaved changes
So that I do not lose my validated data accidentally

#### Acceptance Criteria

Given the upload preview panel is open with validated data
When the admin attempts to close it without saving
Then a confirmation dialog appears
And closing proceeds only after confirmation

#### UI Scope

- Upload preview side panel
- Confirm close modal

#### Frontend Considerations

- State management: unsaved upload state
- Validation: detect whether preview has unsaved changes
- Error handling: keep panel open if user cancels
- Reusability: confirmation modal component
- Accessibility: focus trap trong modal

#### Hidden Requirements

- Side panel with upload preview implies dirty-state warning
- Need consistent behavior across modal/panel close actions

#### Dependency

- Frontend only behavior with upload state

#### Story Point

S


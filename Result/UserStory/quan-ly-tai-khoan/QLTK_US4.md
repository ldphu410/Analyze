# User Story: QLTK_US4

As a Web Admin
I want to confirm before locking or temporarily locking an account
So that I avoid unintended account restrictions

#### Acceptance Criteria

Given the admin chooses Lock or Temporary Lock
When they confirm the action
Then a confirmation modal appears and the action executes only after confirm

#### UI Scope

- Lock/Temporary Lock action buttons
- Confirmation modal
- Confirmation/cancel buttons

#### Frontend Considerations

- State management: action candidate, modal visibility
- Validation: require explicit confirm
- Error handling: show action failure
- Reusability: confirmation modal component
- Accessibility: focus trap and clear button labels

#### Hidden Requirements

- Need clear semantics between lock and temporary lock
- Need action confirmation to prevent accidental execution

#### Dependency

- Backend API: POST /api/user-accounts/{userId}/lock
- Permission system: lock account permission

#### Story Point

S

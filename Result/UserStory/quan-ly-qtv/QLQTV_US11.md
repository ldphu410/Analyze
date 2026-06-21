# User Story: QLQTV_US11

As a Web Admin
I want the list and forms to respect permission gating
So that I only see actions I am allowed to perform

#### Acceptance Criteria

Given the admin has limited permissions
When they view the module
Then unavailable actions are hidden or disabled
And a permission error is not exposed in the UI

#### UI Scope

- Action menu
- Disabled buttons
- Hidden actions

#### Frontend Considerations

- State management: permission state, UI gating
- Validation: enforce UI gating consistently
- Error handling: prevent unauthorized requests proactively
- Reusability: permission utils/service
- Accessibility: communicate disabled actions clearly

#### Hidden Requirements

- Permission gating may require separate permission metadata API

#### Dependency

- Backend API: permission metadata, user session info
- Permission system: role-based access control

#### Story Point

M

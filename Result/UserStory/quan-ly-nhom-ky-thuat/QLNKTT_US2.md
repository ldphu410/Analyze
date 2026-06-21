# User Story: QLNKTT_US2

As a Web Admin
I want to open a modal to create or edit a technical group
So that I can update group details without leaving the module

#### Acceptance Criteria

Given the admin clicks Add Group or Edit on a row
When the modal opens
Then form fields appear for name, description và status
And submitting the form saves the group

#### UI Scope

- Add Group button
- Edit action button
- Modal form
- Save/Cancel controls

#### Frontend Considerations

- State management: modal visibility, form state
- Validation: required name, max length
- Error handling: field errors and save failure messages
- Reusability: reuse modal and form patterns
- Accessibility: form labels and focus trap

#### Hidden Requirements

- Need dirty-state warning if closing modal with unsaved changes
- Need duplicate name validation before submit

#### Dependency

- Backend API: POST /api/technical-groups, PUT /api/technical-groups/{groupId}
- Permission system: create/edit technical group permission

#### Story Point

M

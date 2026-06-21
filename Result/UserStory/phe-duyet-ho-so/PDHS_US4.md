# User Story: PDHS_US4

As a Web Admin
I want to approve or reject a request with a mandatory rejection note when rejecting
So that the decision process is documented and transparent

#### Acceptance Criteria

Given the admin opens a request detail
When they choose Reject
Then a confirmation modal appears with a required note field
And rejection submits only when the note is provided

#### UI Scope

- Approve/Reject buttons
- Confirmation modal
- Required note textarea
- Success/error toast

#### Frontend Considerations

- State management: action state, modal visibility, form values
- Validation: required rejectionReason when rejecting
- Error handling: show server error message if action fails
- Reusability: modal and form controls
- Accessibility: announce validation errors

#### Hidden Requirements

- Reject action implies mandatory note and confirmation dialog
- Approve action may need optimistic update or status refresh

#### Dependency

- Backend API: POST /api/approval-requests/{requestId}/decision
- Permission system: approval decision permission

#### Story Point

M

# User Story: PDHS_US3

As a Web Admin
I want to open approval request details from the list
So that I can review related data before making a decision

#### Acceptance Criteria

Given the admin selects View Details on a request
When the detail panel opens
Then it shows related data according to requestType and current status
And if the request is a facility approval request, the facility-specific fields are displayed
And if the request is a service package approval request, the package-specific fields are displayed
And the admin can see requestId, subjectType, requester info, and history

#### UI Scope

- Action menu
- Detail side panel or view
- Read-only data sections

#### Frontend Considerations

- State management: selected request, detail fetch state
- Validation: none beyond display
- Error handling: detail load error with retry
- Reusability: reuse existing detail panel templates
- Accessibility: focus trap if using modal/panel

#### Hidden Requirements

- Need loading and error states for detail panel
- Different subjectType may require dynamic content rendering
- Need requestType-driven field mapping for facility vs package approval details

#### Dependency

- Backend API: GET /api/approval-requests/{requestId}
- Other FE stories: list base data

#### Story Point

S

---

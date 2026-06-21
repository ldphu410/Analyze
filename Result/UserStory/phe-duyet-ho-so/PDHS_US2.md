# User Story: PDHS_US2

As a Web Admin
I want to filter the approval request list by type and status
So that I can focus on the requests I need to process first

#### Acceptance Criteria

Given the admin is on the approval request list
When they select requestType or status filters
Then the table updates to show only matching requests
And the backend query contains the filter parameters

#### UI Scope

- Filter dropdowns for Request Type and Status
- Table refresh
- Clear filters action

#### Frontend Considerations

- State management: selected filters, filter state
- Validation: validate enum values before query
- Error handling: fallback to previous result if filter applies fail
- Reusability: filter controls from shared library
- Accessibility: labels and keyboard support for filter controls

#### Hidden Requirements

- Filter implies server-side query and possible multi-select
- Need clear filter and empty result state

#### Dependency

- Backend API: GET /api/approval-requests?requestType=&status=
- Permission system: read access to approval requests

#### Story Point

S


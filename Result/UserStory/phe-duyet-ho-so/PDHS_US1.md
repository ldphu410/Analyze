# User Story: PDHS_US1

As a Web Admin
I want to view a paginated list of approval requests
So that I can manage pending approvals without loading all requests at once

#### Acceptance Criteria

Given the admin opens the approval request list page
When the page loads
Then a paginated table appears with columns cho requestId, requestType, subjectType, status, lastUpdated, and actions
And the first page of results is displayed

#### UI Scope

- Table
- Pagination controls
- Status badge
- Action menu
- Filter bar

#### Frontend Considerations

- State management: pagination, current page, list data
- Validation: none beyond render and enum mapping
- Error handling: show error banner with retry
- Reusability: use existing table component
- Accessibility: keyboard support for table rows and pagination

#### Hidden Requirements

- Table implies sorting by at least one column
- Need empty state when no requests exist
- Need loading state during fetch

#### Dependency

- Backend API: GET /api/approval-requests?page=&limit=
- Permission system: admin approval permission

#### Story Point

M

---

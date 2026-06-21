# Backlog for Phê duyệt hồ sơ & gói dịch vụ

## Epic 1: Approval Request List

### Business Goal

Tạo giao diện quản lý danh sách yêu cầu phê duyệt để admin có thể xem, lọc và truy cập nhanh chi tiết yêu cầu.

### User Stories

#### Story 1.1

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

#### Story 1.2

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

## Epic 2: Approval Detail & Decision

### Business Goal

Đảm bảo admin có thể xem chi tiết từng yêu cầu và đưa ra quyết định duyệt hoặc từ chối với lý do đầy đủ.

### User Stories

#### Story 2.1

As a Web Admin
I want to open approval request details from the list
So that I can review related data before making a decision

#### Acceptance Criteria

Given the admin selects View Details on a request
When the detail panel opens
Then it shows relatedData theo subjectType và trạng thái hiện tại
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

#### Dependency

- Backend API: GET /api/approval-requests/{requestId}
- Other FE stories: list base data

#### Story Point

S

---

#### Story 2.2

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

---

#### Story 2.3

As a Web Admin
I want to view details for both facility and service package approval requests in the same panel
So that I can inspect the correct object-specific fields for each approval type

#### Acceptance Criteria

Given the admin opens a facility approval request detail
When the detail panel loads
Then it shows hồ sơ cơ sở-specific fields and metadata

Given the admin opens a service package approval request detail
When the detail panel loads
Then it shows gói dịch vụ-specific fields and package-related data

#### UI Scope

- Detail side panel or panel view
- Dynamic field groups per approval type
- Read-only object-specific sections

#### Frontend Considerations

- State management: selected request, requestType, detail mapping
- Validation: none beyond display and field mapping
- Error handling: detail load error with retry
- Reusability: same panel structure with requestType-driven content
- Accessibility: clear labels for object-specific sections

#### Hidden Requirements

- Detail panel must map requestType to the correct field layout
- Package approval and facility approval use the same panel but different section sets

#### Dependency

- Backend API: GET /api/approval-requests/{requestId}
- Other FE stories: list base data

#### Story Point

S

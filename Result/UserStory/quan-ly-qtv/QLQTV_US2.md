# User Story: QLQTV_US2

As a Web Admin
I want to search admin users by name or email with debounce
So that I can quickly narrow down results without overwhelming the backend

#### Acceptance Criteria

Given the admin is on the Admin User List page
When they type into the search box
Then the list is filtered after a short debounce interval
And the request is sent to the backend with a search query

#### UI Scope

- Search box
- Table refresh
- Loading indicator for search

#### Frontend Considerations

- State management: search query, debounce timer, filter state
- Validation: sanitize query before sending
- Error handling: show inline message if search fails
- Reusability: use existing search input component
- Accessibility: label and clear button

#### Hidden Requirements

- Search implies debounce or throttling
- Need empty state for no match results

#### Dependency

- Backend API: GET /api/admin-users?search=
- Permission system: read access to admin list

#### Story Point

S

---

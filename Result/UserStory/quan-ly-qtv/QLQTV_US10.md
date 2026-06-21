# User Story: QLQTV_US10

As a Web Admin
I want clear loading and error states on list and detail views
So that I understand when data is being fetched or has failed

#### Acceptance Criteria

Given the list or detail view is fetching data
When the request is pending
Then a loading skeleton or spinner is shown
And if the request fails, an inline error message with retry option displays

#### UI Scope

- Loading indicator
- Error banner/message
- Retry button

#### Frontend Considerations

- State management: loading and error states for list/detail/modal
- Validation: none beyond request state
- Error handling: centralized error display strategy
- Reusability: use shared loading/error components
- Accessibility: announce loading and error states

#### Hidden Requirements

- Need retry patterns for failed requests
- Need distinct states for list load, detail load, and form submission

#### Dependency

- Backend API endpoints for user list/detail

#### Story Point

S

---

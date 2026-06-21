# User Story: QLTK_US1

As a Web Admin
I want to view the user account list with review status
So that I can identify which accounts need action or review

#### Acceptance Criteria

Given the admin opens the account list page
When the page loads
Then a table appears with name, email, reviewStatus, lockStatus, và actions

#### UI Scope

- Table
- Status badges
- Action menu
- Search/filter bar

#### Frontend Considerations

- State management: list data, selected filters
- Validation: none beyond render
- Error handling: show load failure
- Reusability: shared table and status badge components
- Accessibility: table keyboard support

#### Hidden Requirements

- Need empty state if no accounts available
- Need loading skeleton while fetching accounts

#### Dependency

- Backend API: GET /api/user-accounts
- Permission system: account management permission

#### Story Point

M


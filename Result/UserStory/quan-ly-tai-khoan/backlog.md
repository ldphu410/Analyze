# Backlog for Quản lý Danh sách Tài khoản

## Epic 1: User Account List and Status Actions

### Business Goal

Hiển thị danh sách tài khoản user và các hành động phù hợp theo trạng thái duyệt.

### User Stories

#### Story 1.1

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

## Epic 2: Review Status Menu and View Rejection Reason

### Business Goal

Cho phép admin xử lý trạng thái duyệt và xem lý do từ chối khi cần.

### User Stories

#### Story 2.1

As a Web Admin
I want action menu options to adapt based on review status
So that I only see relevant operations for each account

#### Acceptance Criteria

Given the admin views a user row
When the reviewStatus is Từ chối duyệt
Then the action menu includes View Rejection Reason
And other statuses show only applicable actions

#### UI Scope

- Action menu
- Conditional menu items
- View Rejection Reason modal

#### Frontend Considerations

- State management: selected account, menu state
- Validation: status-driven menu rendering
- Error handling: show message if data missing
- Reusability: shared action menu component
- Accessibility: menu keyboard navigation

#### Hidden Requirements

- Need mapping between reviewStatus and allowed actions
- Need modal or inline view for rejection note

#### Dependency

- Backend API: GET /api/user-accounts/{userId}
- Permission system: view rejection reason

#### Story Point

S

---

#### Story 2.2

As a Web Admin
I want to open a read-only detail panel for account information
So that I can inspect account details without editing them

#### Acceptance Criteria

Given the admin selects View Details
When the side panel opens
Then it shows read-only account fields and hides edit/delete controls

#### UI Scope

- Detail side panel
- Read-only fields
- Hidden action buttons/icons

#### Frontend Considerations

- State management: selected account details
- Validation: none beyond display
- Error handling: detail load failure and retry
- Reusability: reuse read-only panel logic
- Accessibility: focus trap if modal/panel

#### Hidden Requirements

- Need hide non-essential controls from the shared panel
- Need support for info sections and status display

#### Dependency

- Backend API: GET /api/user-accounts/{userId}

#### Story Point

S

## Epic 3: Lock and Temporary Lock Actions

### Business Goal

Cho phép admin khóa hoặc tạm khóa tài khoản với xác nhận rõ ràng.

### User Stories

#### Story 3.1

As a Web Admin
I want to confirm before locking or temporarily locking an account
So that I avoid unintended account restrictions

#### Acceptance Criteria

Given the admin chooses Lock or Temporary Lock
When they confirm the action
Then a confirmation modal appears and the action executes only after confirm

#### UI Scope

- Lock/Temporary Lock action buttons
- Confirmation modal
- Confirmation/cancel buttons

#### Frontend Considerations

- State management: action candidate, modal visibility
- Validation: require explicit confirm
- Error handling: show action failure
- Reusability: confirmation modal component
- Accessibility: focus trap and clear button labels

#### Hidden Requirements

- Need clear semantics between lock and temporary lock
- Need action confirmation to prevent accidental execution

#### Dependency

- Backend API: POST /api/user-accounts/{userId}/lock
- Permission system: lock account permission

#### Story Point

S

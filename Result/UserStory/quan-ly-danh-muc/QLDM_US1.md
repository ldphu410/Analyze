# User Story: QLDM_US1

As a Web Admin
I want to view the category list in a table
So that I can inspect category data before editing

#### Acceptance Criteria

Given the admin opens the category management page
When the page loads
Then a table with categoryId, name, description, status, và actions appears

#### UI Scope

- Table
- Action menu
- Status badge

#### Frontend Considerations

- State management: list data, selected row
- Validation: render category fields safely
- Error handling: show load error message
- Reusability: existing table component
- Accessibility: semantic table markup

#### Hidden Requirements

- Need empty state when no categories present
- Need loading skeleton khi truy vấn dữ liệu

#### Dependency

- Backend API: GET /api/categories
- Permission system: category management permission

#### Story Point

S


# Backlog for Quản lý Danh mục

## Epic 1: Category Management

### Business Goal

Cung cấp giao diện quản lý danh mục để admin có thể xem và thao tác nhanh với mỗi mục.

### User Stories

#### Story 1.1

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

## Epic 2: Category CRUD Modal

### Business Goal

Cho phép admin tạo mới hoặc chỉnh sửa danh mục mà không rời trang chính.

### User Stories

#### Story 2.1

As a Web Admin
I want to open a modal to edit a category
So that I can update category details quickly

#### Acceptance Criteria

Given the admin clicks Edit on a category
When the modal opens
Then form fields pre-fill the current values và allow save or cancel

#### UI Scope

- Edit action button
- Modal
- Form fields: name, description, status
- Save/Cancel buttons

#### Frontend Considerations

- State management: form state, modal visibility
- Validation: required name, max length
- Error handling: field-level validation và server error mapping
- Reusability: shared modal/form controls
- Accessibility: focus management và labels

#### Hidden Requirements

- Need dirty state warning nếu đóng modal khi có thay đổi chưa lưu
- Need unique name validation khi lưu

#### Dependency

- Backend API: GET /api/categories/{categoryId}, PUT /api/categories/{categoryId}
- Permission system: edit category permission

#### Story Point

M

---

#### Story 2.2

As a Web Admin
I want to create a new category from the management page
So that I can expand the category catalogue without leaving the module

#### Acceptance Criteria

Given the admin clicks Add Category
When the create modal opens
Then blank inputs appear và the admin can submit a new category

#### UI Scope

- Add Category button
- Create modal
- Form fields

#### Frontend Considerations

- State management: create form state
- Validation: required fields và duplicate name check
- Error handling: show creation errors
- Reusability: reuse edit modal component

#### Hidden Requirements

- Create action implies validation for duplicate names and consistent status default

#### Dependency

- Backend API: POST /api/categories
- Permission system: create category permission

#### Story Point

M

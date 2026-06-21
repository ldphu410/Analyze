# User Story: QLDM_US3

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

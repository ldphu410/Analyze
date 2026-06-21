# User Story: QLDM_US2

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

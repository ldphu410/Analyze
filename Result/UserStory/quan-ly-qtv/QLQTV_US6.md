# User Story: QLQTV_US6

As a Web Admin
I want to edit an existing admin user in the same modal pattern
So that I can update their roles or status quickly

#### Acceptance Criteria

Given the admin opens the Edit action for an admin user
When the edit modal appears
Then it pre-fills current user values and allows updates
And saving submits changes to the backend

#### UI Scope

- Action menu
- Edit modal
- Pre-filled form fields

#### Frontend Considerations

- State management: selected admin details, dirty state, form validation
- Validation: required fields, uniqueness check, status/roles consistency
- Error handling: map backend update errors to fields
- Reusability: same modal/form as create flow
- Accessibility: clear error announcements

#### Hidden Requirements

- Need dirty-state warning if the admin closes without saving
- Must distinguish create vs edit modal state

#### Dependency

- Backend API: GET /api/admin-users/{adminId}, PUT /api/admin-users/{adminId}
- Other FE stories: Role list loader

#### Story Point

M

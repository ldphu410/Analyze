# User Story: QLDMKTHETHONG_US4

As a Web Admin
I want to edit technical category rows in the main table
So that I can correct data quickly after review

#### Acceptance Criteria

Given the admin opens a technical group table
When they edit a row
Then inline or modal editing becomes available and saving updates the row

#### UI Scope

- Table edit controls
- Inline edit fields or modal

#### Frontend Considerations

- State management: edit row state, save state
- Validation: required fields and data types
- Error handling: show save error per row
- Reusability: edit controls from shared table library
- Accessibility: editable row keyboard support

#### Hidden Requirements

- Table edit implies validation rules per field and safe save rollback

#### Dependency

- Backend API: PUT /api/technical-categories/{id}
- Other FE stories: group selector and table load

#### Story Point

M

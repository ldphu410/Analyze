# User Story: QLDMKTHETHONG_US1

As a Web Admin
I want to select a technical group and display its data in a table
So that I can manage the correct group dataset

#### Acceptance Criteria

Given the admin opens the technical category module
When they select a group
Then the table refreshes with data for that group
And the selected group is highlighted

#### UI Scope

- Group selector dropdown
- Data table
- Table action column

#### Frontend Considerations

- State management: selected group, table rows
- Validation: valid group selection
- Error handling: show group load error
- Reusability: shared select and table components
- Accessibility: dropdown labels and keyboard navigation

#### Hidden Requirements

- Group selector implies source data load for options
- Need empty state if group has no rows

#### Dependency

- Backend API: GET /api/technical-groups, GET /api/technical-categories?groupId=
- Permission system: technical category view permission

#### Story Point

M


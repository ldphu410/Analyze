# User Story: QLLHDV_US2

As a Web Admin
I want the side panel to render the correct layout for each panel type
So that I can review the right data structure for that object

#### Acceptance Criteria

Given the admin opens a panel for a specific object type
When the panel loads
Then it shows the appropriate fields and sections for that type
And irrelevant sections are hidden

#### UI Scope

- Panel type renderer
- Conditional sections
- Read-only content

#### Frontend Considerations

- State management: panel type, conditional render
- Validation: none beyond mapping logic
- Error handling: show fallback if type unsupported
- Reusability: generic detail renderer with type mappings
- Accessibility: clear headings and section labels

#### Hidden Requirements

- Need mapping logic for each panelType
- Need consistent styling for hidden/visible sections

#### Dependency

- Backend API: GET /api/service-categories/{id}

#### Story Point

M

---

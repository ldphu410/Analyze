# User Story: QLLHDV_US3

As a Web Admin
I want the security tab to hide unnecessary sections
So that I only see relevant security information

#### Acceptance Criteria

Given the detail panel is a security-type panel
When it renders
Then non-essential sections are hidden and only relevant read-only data remains

#### UI Scope

- Security tab view
- Hidden sections

#### Frontend Considerations

- State management: tab state
- Validation: none beyond render
- Error handling: none beyond detail load
- Reusability: tab component with variant config
- Accessibility: tab labels and hidden content semantics

#### Hidden Requirements

- Security panels must use read-only variants of existing fields
- Need clearly labeled hidden sections for maintainability

#### Dependency

- Backend API: GET /api/service-categories/{id}

#### Story Point

S

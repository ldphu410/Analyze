# User Story: QLLHDV_US4

As a Web Admin
I want the panel renderer to support service package detail views
So that I can review package-specific information in the same read-only interface

#### Acceptance Criteria

Given the admin opens a service package detail panel
When the panel renders
Then it displays package-specific fields and hides non-package sections
And the panel remains read-only with no edit/delete controls

#### UI Scope

- Service package detail panel
- Conditional fields for package-specific data
- Read-only layout

#### Frontend Considerations

- State management: panelType, selected package detail, content mapping
- Validation: none beyond render mapping
- Error handling: show fallback if package detail type unsupported
- Reusability: same read-only panel wrapper across panel types
- Accessibility: clear headings and section labels

#### Hidden Requirements

- Package detail pages should not expose edit/delete actions
- Panel mapping must support the service package data schema

#### Dependency

- Backend API: GET /api/service-categories/{id}

#### Story Point

S

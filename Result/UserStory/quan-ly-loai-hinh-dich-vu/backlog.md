# Backlog for Quản lý Loại hình / Danh mục Dịch vụ

## Epic 1: Read-only Detail Panels

### Business Goal

Tái sử dụng side panel chi tiết hiện có và chuyển sang chế độ read-only cho Web Admin.

### User Stories

#### Story 1.1

As a Web Admin
I want to open a read-only detail panel for each service category
So that I can review category information without editing it

#### Acceptance Criteria

Given the admin clicks View Detail on a service item
When the detail panel opens
Then all fields display as read-only values and edit controls are hidden

#### UI Scope

- Detail panel
- Read-only fields
- Hidden action buttons

#### Frontend Considerations

- State management: selected panelType, detail data
- Validation: none beyond display
- Error handling: detail load failure with retry
- Reusability: reuse shared detail panel components
- Accessibility: read-only form labels

#### Hidden Requirements

- Need fallback for unknown panelType
- Need hide delete icon and edit buttons

#### Dependency

- Backend API: GET /api/service-categories/{id}
- Permission system: view-only access

#### Story Point

S

## Epic 2: Panel Variants for Multiple Object Types

### Business Goal

Hỗ trợ nhiều loại panel tương ứng với các đối tượng dịch vụ khác nhau, giữ UI nhất quán.

### User Stories

#### Story 2.1

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

#### Story 2.3

As a Web Admin
I want the panel renderer to support service package detail views
So that I can review package-specific information in the same read-only interface

#### Acceptance Criteria

Given the admin opens a service package detail panel
When the panel renders
Then it displays package detail fields and hides non-package sections
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

---

#### Story 2.2

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

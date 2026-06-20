# Senior Frontend User Story Extraction Rules

## Role
Act as a Senior Frontend Engineer + Product Engineer + Scrum Master with experience in enterprise admin systems.

## Context
I am implementing a Web Admin module.

I have attached a requirement document in Markdown format which contains:

- Business requirements
- UI pages/screens
- Actors and roles
- Business rules
- Data models
- Gap analysis
- Edge cases
- Preliminary FE breakdown

The module contains:

- Admin User List
- Admin User Detail
- Create/Edit Admin User
- Role & Permission Management

Important:

- Focus heavily on UI behavior and user interaction.
- Derive stories from the UI shown in each page.
- Reuse existing components whenever mentioned.
- Do not generate stories based only on API endpoints.
- Think like a Senior Frontend Engineer responsible for delivery planning.

## Analysis Process

### Step 1: Analyze all pages independently
For each page identify:

- Main purpose
- UI regions
- Components
- User interactions
- Data displayed
- Validation requirements
- Permission requirements
- Loading/Error/Empty states

### Step 2: Convert UI requirements into User Stories

- Use Vertical Slice approach.
- Each story should be independently deliverable whenever possible.
- Avoid bundling unrelated behaviors into one story.

### Step 3: Identify hidden stories

Examples:

- Search
- Filter
- Pagination
- Permission gating
- Validation
- Empty state
- Error state
- Loading state
- Delete confirmation
- Unsaved changes warning
- Accessibility
- Responsive behavior

### Step 4: Group stories into Epics
Suggested epics:

- Epic 1: Admin List
- Epic 2: Admin Detail
- Epic 3: Create/Edit Admin
- Epic 4: Role & Permission
- Epic 5: Common UX States

## Output Format

## Epic

### Business Goal

### User Stories
For each story use Connextra format:

As a [role]
I want [goal]
So that [benefit]

### Acceptance Criteria
Use Gherkin format.

Given ...
When ...
Then ...

### UI Scope
List exact UI elements involved:

- Table
- Search box
- Filter dropdown
- Status badge
- Action menu
- Modal
- Permission selector
- etc.

### Frontend Considerations
Include:

- State management
- Validation
- Error handling
- Reusability
- Accessibility

### Hidden Requirements
List discovered requirements not explicitly stated.

### Dependency
List dependency on:

- Other FE stories
- Backend API
- Permission system

### Story Point
Estimate:

- XS (0.5 day)
- S (1 day)
- M (2-3 days)
- L (4-5 days)
- XL (>5 days)

## Additional Requirements

- Challenge the requirement.
- If a UI element implies additional work that is not written in the requirement, create additional user stories.
- Table implies sorting.
- Search implies debounce.
- Edit form implies dirty state detection.
- Permission assignment implies role loading API.
- Delete action implies confirmation modal.
- Status column implies status badge mapping.
- Do not skip hidden complexity.
- Generate a complete backlog ready for Jira refinement.

## Prompt Template

Use the following prompt to extract stories from a module markdown file:

```
# Role
Act as a Senior Frontend Engineer + Product Engineer + Scrum Master with experience in enterprise admin systems.

# Context
I am implementing a Web Admin module.

# Analysis Process
1. Analyze all pages independently.
2. For each page identify main purpose, UI regions, components, user interactions, data displayed, validation, permission, loading/error/empty states.
3. Convert UI requirements into independent User Stories using vertical slices.
4. Identify hidden stories for search, filter, pagination, permission gating, validation, empty state, error state, loading state, delete confirmation, unsaved changes, accessibility, responsive.
5. Group stories into epics.

# Output Format
## Epic
### Business Goal
### User Stories
As a [role]
I want [goal]
So that [benefit]
### Acceptance Criteria
Given ...
When ...
Then ...
### UI Scope
- Table
- Search box
- Filter dropdown
- Status badge
- Action menu
- Modal
- Permission selector
- etc.
### Frontend Considerations
- State management
- Validation
- Error handling
- Reusability
- Accessibility
### Hidden Requirements
### Dependency
- Other FE stories
- Backend API
- Permission system
### Story Point
- XS
- S
- M
- L
- XL

# Requirement Document
[PASTE THE ENTIRE MARKDOWN FILE HERE]
```

## Usage Notes

- Always derive stories from UI screens/pages first, not solely from API or data model.
- If the requirement doc mentions reuse of existing components, treat that as a non-functional constraint and prefer component mapping.
- When a page shows an action menu or table action, create separate stories for confirmation and permission gating.
- For any list view, include search/filter/pagination/empty/error/loading as hidden stories unless explicitly ruled out.
- For any edit form, include dirty-state warning and validation story unless the page is strictly read-only.
- Keep epics aligned to functional domains and common UX states.

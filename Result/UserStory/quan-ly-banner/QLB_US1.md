# User Story: QLB_US1

As a Web Admin
I want to view banners grouped by platform
So that I can quickly find the banner I need to update

#### Acceptance Criteria

Given the admin opens the banner management page
When the page loads
Then a list or table of banners appears grouped by platform
And each banner row shows image preview, title, link, platform, và status

#### UI Scope

- Table or card list
- Platform filter/grouping
- Image preview
- Action button to edit

#### Frontend Considerations

- State management: selected platform, list data
- Validation: none beyond display
- Error handling: show banner if load fails
- Reusability: use existing list component
- Accessibility: image alt text and keyboard focus

#### Hidden Requirements

- Need empty state khi không có banner
- Need loading state cho danh sách

#### Dependency

- Backend API: GET /api/banners
- Permission system: banner management permission

#### Story Point

S


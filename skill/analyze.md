# Hướng dẫn phân tích requirement từ thư mục `Requirement` (Frontend-focused)

## Mục tiêu file này
- Cung cấp một quy trình chuẩn để làm phân tích requirement với vai trò **Frontend Architect + Tech Lead**.
- Tập trung phân tích dựa trên **nội dung text** nhưng **ưu tiên suy diễn nghiệp vụ từ hình ảnh** (screenshots / UI mockups) kèm theo.
- Loại trừ effort phát triển backend — chỉ nêu các API contract tối thiểu làm assumption để FE có thể tiến hành thiết kế.

## Quy định chung (rút gọn và Frontend-oriented)
- Không đọc file PDF trực tiếp.
- Dữ liệu phân tích lấy từ thư mục `/Users/ledinhphu/Desktop/Project/Analyze/Requirement`.
- Mỗi trang tương ứng folder `Page [n]` chứa `content.text` hoặc `content.tsx` và ảnh tham chiếu `N.M.png`.
- Khi gặp markdown `<<[name]>>` trong nội dung, mở file ảnh cùng thư mục và coi đó là nguồn chính để suy diễn UI/UX/flow.

## Phương pháp làm việc (Frontend Architect)
1. Đọc toàn bộ pages để nắm bức tranh tổng thể.
2. Group pages thành module theo chức năng hoặc luồng nghiệp vụ.
3. Với mỗi module: phân tích theo mẫu chi tiết bên dưới, ưu tiên thông tin thu được từ ảnh (annotations, element positions, labels, trạng thái UI).
4. Khi thiếu dữ liệu, **ghi rõ assumption** và list các Open Questions để hand-off với PO/BA/Designer.
5. Không ước lượng effort BE; nếu cần API, mô tả contract minimal (method, path, params, response shape) để FE xây mock và tiến hành.

## Mẫu phân tích module (Frontend-first, bắt buộc)
Tạo file `Result/modules/{module-slug}.md` với các mục sau.

### Module: {Tên module}

#### 1) Nội dung chính (1-3 câu)
- Tóm tắt nghiệp vụ bằng ngôn ngữ FE (ví dụ: "Hiển thị danh sách yêu cầu phê duyệt, cho phép filter, mở side panel xem chi tiết và thực hiện action duyệt/từ chối").

#### 2) Image Analysis (BẮT BUỘC)
- Liệt kê tất cả ảnh liên quan (tên file và đường dẫn relative).
- Mỗi ảnh: mô tả chi tiết các element nhận diện (buttons, table columns, badges, icons, form fields, pagination, trạng thái disabled/enabled, modal/side-panel).
- Ghi chú visual cues quan trọng: màu sắc cảnh báo, badges trạng thái, confirmation flows, tooltips, truncation, placeholders.
- Nếu ảnh cho thấy interaction (hover, tooltip, dropdown), nêu rõ hành vi mong đợi.

#### 3) Page liên quan (mapping)
- Page [n]: Mô tả vai trò page trong module, tham chiếu ảnh cụ thể.

#### 4) Scope FE thực tế (what FE must deliver)
- UI components: liệt kê các component cần implement / reuse (Table, PaginatedList, FilterBar, SidePanel, ModalConfirm, FileUploader, PreviewTable, Badge, Toast).
- State & Data flow: nguồn dữ liệu (API endpoints giả định), caching, optimistic updates, UI states (loading/empty/error/success).
- Accessibility: keyboard navigation, aria labels, focus management for modals/sidepanels.
- I18n: identify visible strings to externalize.

#### 5) Requirement được phát hiện (Functional / UI / Data)
| ID | Requirement | Loại | Actor liên quan | Mức độ rõ ràng |
|---|---|---|---|---|
| REQ-{MODULE}-001 | ... | Functional / UI | Admin | Clear / Ambiguous |

#### 6) Business Rules (FE-enforced where applicable)
- BR-{MODULE}-001: ... (ví dụ: nếu click "Reject" phải show modal yêu cầu nhập lý do trước khi gửi).

#### 7) Hidden requirements & Edge cases (CRITICAL)
- Input validation and UX for malformed data in previews.
- Network failure handling and idempotency of actions (retry, dedupe UI actions).
- Concurrency: what happens if two admins act on same item.
- Large data sets: virtualized list, server-side pagination, incremental loading.
- File upload edge cases: invalid format, large files, partial validation, rollback preview.

#### 8) Dữ liệu liên quan (tối thiểu để FE hoạt động)
| Data Object | Field | Mô tả | Bắt buộc? |
|---|---|---|---|
| ... | ... | ... | Yes / No |

#### 9) Minimal API contracts (assumptions only)
- `GET /api/{module}/list?page=&limit=&q=` -> returns { items:[], total }
- `GET /api/{module}/{id}` -> details
- `POST /api/{module}/{id}/action` -> body { action: 'approve'|'reject', note?:string }
- `POST /api/{module}/upload` -> file multipart -> returns validation preview

> Ghi chú: đừng estimate BE; chỉ mô tả contract để FE có mock.

#### 10) Implementation breakdown (tasks for frontend team)
Nhóm tasks theo mức độ: UI, Integration, State, Tests, QA.
- UI: implement components (list each with complexity tag: small/medium/large).
- Integration: API client + mock layer.
- State: store design (local component state / Context / Redux / SWR/React Query) and cache invalidation strategy.
- Validation & UX: client-side checks, form validation messages, file preview validation.
- Tests: unit for components, integration tests for flows, E2E for critical paths.

Ví dụ task format:
- [UI][Medium] `ApprovalList` component: table with columns A,B,C, filter, sort, pagination. Est: 3–5d
- [UI][Small] `StatusBadge` component: reusable badge for states. Est: 0.5–1d
- [Integration][Medium] `useApprovalList` hook with React Query and error handling. Est: 2–3d
- [E2E][Large] Full approve/reject path including side panel and toast confirmations. Est: 2–3d

#### 11) Effort estimation guidance (Frontend-only)
- Use days (d) per single senior FE developer as baseline.
- Complexity bands:
  - Small: 0.5–1.5d
  - Medium: 2–5d
  - Large: 6–15d (may include integration + E2E + accessibility)
- Provide estimates per task (range) and total per module with contingency 20%.

#### 12) Acceptance criteria / Definition of Done (DoD)
- UI matches screenshots (pixel-approx) and responsive.
- Component tests >= 80% coverage for critical components.
- Accessibility: basic WCAG checks (keyboard navigation, aria roles).
- Error states handled and documented.
- Mocked API available for QA and demo.

#### 13) Open Questions
- Liệt kê câu hỏi cần trả lời bởi PO/Designer/BE.

## Tổng hợp sau khi phân tích toàn bộ page
- Tạo bảng `Module | Page range | Priority | Estimated FE effort (days)`.
- Tập trung deliver theo module theo thứ tự priority cao -> thấp.

## Ghi chú quan trọng (tóm tắt)
- Luôn bắt đầu phân tích bằng `Image Analysis` — ảnh là nguồn chính cho UI/UX.
- Mọi giả định về API phải được ghi rõ trong phần `Minimal API contracts`.
- Đánh giá effort chỉ bao gồm phần Frontend (coding + tests + QA). BE effort bị loại trừ.

---


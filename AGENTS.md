# Knowledge base corpus — agent guardrails

When answering from this repository:

## Where to start

- Open **`docs/index.md`** first for navigation and scope.
- For **routine answers**, prefer pages under **`docs/`** outside **`docs/archive/`**. Do **not** treat **`docs/archive/`** as default truth; use it only when the user asks for **history, deliberation, or superseded** material. See **`docs/archive/index.md`**.

## API and OpenAPI

- **Do not invent** path, method, payload, or schema detail, and **do not duplicate** OpenAPI or generated API catalogs in this repo. Follow **`docs/index.md`** — **What belongs elsewhere** (`#what-belongs-elsewhere`). For Algorea, read the curated pages under **`docs/algorea/`**; for HTTP contracts use the published **Backend API (generated)** page in that section. Link out to **application repositories** for authoritative code and OpenAPI sources; **open** those sources instead of recreating spec text in answers.

## Consistency

- Do **not** contradict **`docs/meta/index.md`** or **`docs/index.md`** on default vs archive or what belongs elsewhere.

## Editing documentation

When you create or change Markdown under **`docs/`** (outside **`docs/algorea/`**), **`README.md`**, or **`CONTRIBUTING.md`**:

- Follow **`docs/meta/index.md`** (Markdown, front matter, and file placement).
- By default, a new page under existing content goes in a **subdirectory of that parent** (see **`docs/meta/index.md`** — File placement). Do not drop child pages as siblings of unrelated pages in the same folder.
- Before finishing, run **`npm run docs:lint`** and fix any reported issues.


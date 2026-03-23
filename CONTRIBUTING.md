# Contributing to the France-IOI knowledge base

This file is the **single canonical guide** for adding or changing documentation in this repository. Follow it so curated material stays consistent and discoverable.

## What belongs here (in scope)

Put material in **`docs/`** when it is **governed curated documentation** for France-IOI software:

- **Business rules** and domain behavior written for cross-project use.
- **Cross-boundary behavior** (for example how frontend, backend, and operations interact at the edges).
- **Operations essentials** when they belong in this corpus’s governed docs—not a second home for full operational depth already owned elsewhere.

That matches the hub’s **[What belongs here vs elsewhere](docs/index.md#what-belongs-here-vs-elsewhere)**; this guide is the **normative** wording for contributors.

## What does not belong here (out of scope)

- **Per-application implementation detail** (folder layouts, framework specifics, local runbooks): use the **relevant application repositories**.
- **Authoritative HTTP/OpenAPI contracts** and generated API reference: use **[algorea-devdoc](https://france-ioi.github.io/algorea-devdoc/)**, published OpenAPI-sourced surfaces, and sibling engineer-facing docs. **Do not** paste schemas, OpenAPI fragments, or path/method catalogs into this repo—**link** to those sources instead.
- **Duplicate hosting** of generated API reference or contract dumps: this knowledge base describes behavior and cross-boundary rules **by reference** only.
- **`_bmad-output/`**: planning artifacts and BMAD workflow output—not curated product documentation. See [Planning and workflow output vs curated product docs](#planning-and-workflow-output-vs-curated-product-docs) for the distinction.

For default-path versus optional archive material, see **[Default path vs archive](docs/default-vs-archive-split.md)**.

Teachable detail, good vs bad examples, and the **normative** boundary for API reference live in **[API documentation and OpenAPI boundary](#api-documentation-and-openapi-boundary)** below—read that section when you touch HTTP/API material.

## API documentation and OpenAPI boundary

This knowledge base **must not** host a **second authoritative copy** of generated HTTP contracts (FR11, NFR-I2). The hub’s **[Where API and backend depth live](docs/index.md#where-api-and-backend-depth-live)** is the **reader-facing map** for the same conventions (Story 1.3, NFR-I1): use it to point to **[algorea-devdoc](https://france-ioi.github.io/algorea-devdoc/)** and the published **[Backend API (generated)](https://france-ioi.github.io/algorea-devdoc/api/)**—**do not** invent different URLs for those entry points.

**Forbidden as contract of record in this repo**

- Pasting **OpenAPI/Swagger YAML or JSON** (whole specs or large fragments) as if this repository were the **source of truth** for HTTP APIs.
- Pasting **generated path/method catalogs** or wide **endpoint tables** meant to **replace** DevDoc or published OpenAPI-sourced docs.
- Embedding large **request/response schema** blocks (nested properties, full component trees) as the **authoritative** reference readers should trust for API shape.

**Allowed when it is not the contract of record**

- **Short illustrative mentions** in prose (for example a **single field name** or status code) when you explain **intent** or **cross-boundary behavior**, and the **authoritative** contract remains **outbound**—see **[Where API and backend depth live](docs/index.md#where-api-and-backend-depth-live)** and your page’s **References and outbound links**.

**Good pattern** — descriptive link plus one or two sentences of **intent** or **cross-boundary behavior** owned by this KB:

```markdown
Authoritative path/method and payload definitions: [Backend API (generated)](https://france-ioi.github.io/algorea-devdoc/api/).
Here we only state that the SPA treats the server’s returned `progressState` as canonical for the learner dashboard—no duplicate schema.
```

**Anti-pattern** — spec-style dump presented as the contract of record (illustrative fake names; **do not** copy this style into curated pages):

~~~text
<!-- ANTI-PATTERN: path catalog + schema excerpt as “the API doc” in this repo -->

| Method | Path              |
|--------|-------------------|
| GET    | /api/v1/fakeItems |
| POST   | /api/v1/fakeItems |

FakeItem:
  type: object
  properties:
    id: { type: string }
    label: { type: string }
~~~

When a PR changes **HTTP/API meaning** or **cross-boundary** API claims, reviewers also apply **[Substantive documentation PRs](#substantive-documentation-prs)** under **[Reviewing new and revised doc pages](#reviewing-new-and-revised-doc-pages)**. This section stays scoped to **where API truth lives** and **what not to paste**; it does not replace that checklist.

## Planning and workflow output vs curated product docs

**`_bmad-output/`** holds **planning artifacts, BMAD workflow output, and sprint or research files**. It is **not** the default-path **curated product narrative** for readers or agents.

**Curated** rules and topic pages that should ground day-to-day consultation live under **`docs/`** (with **[docs/index.md](docs/index.md)** as the primary entry). Optional **`docs/archive/`** may appear later for superseded or non-default material; until then, follow the index and structure contract for what counts as default path.

This separation matches the architecture intent documented in [_bmad-output/planning-artifacts/architecture.md](_bmad-output/planning-artifacts/architecture.md) (see **Structure Patterns** and **Project Structure & Boundaries**).

## Structure and front matter

Curated Markdown under **`docs/`** **must** follow **[docs/structure-contract.md](docs/structure-contract.md)**. That file is **normative** for how new and substantially revised pages are written so the corpus stays **machine-reliable** and consistent.

**You must apply the contract to:**

- **Titles and headings:** **One** logical title per page and a **heading ladder** that does not skip levels—use `#` then `##` then `###` then `####` in order (see **[One logical title per page](docs/structure-contract.md#one-logical-title-per-page)** and **[Heading ladder](docs/structure-contract.md#heading-ladder)** under **[Markdown syntax](docs/structure-contract.md#markdown-syntax)**).
- **YAML front matter:** required and recommended keys, types, and examples for pages in the curated knowledge base—see **[YAML front matter](docs/structure-contract.md#yaml-front-matter)**. **New** and **substantially revised** `docs/*.md` pages **must** include front matter that matches the contract.
- **Link style:** use standard Markdown links with **descriptive** link text for **intra-repo** destinations (avoid bare URLs or vague phrases like “click here” when a short label can name the destination). CommonMark-aligned lists and fenced code blocks with **language tags** are part of the same expectations—still **[Markdown syntax](docs/structure-contract.md#markdown-syntax)**.
- **Default vs archive:** how default-path pages relate to optional archive material and audience—see **[Default vs archive](docs/structure-contract.md#default-vs-archive)** and, for narrative context, **[Default path vs archive](docs/default-vs-archive-split.md)**.

Until automated checks exist, the contract’s **Linting and CI** section still expects **human review** in PRs; this guide and the contract are what reviewers use.

**Section naming for new pages:** When you start from the default scaffold, the first topical `##` after the single `#` title is **`## Purpose`** (not a separate “Overview-only” heading). That keeps new pages aligned with the template and avoids synonym drift (“Purpose” vs “Overview”).

### Provenance and ownership (front matter)

**Normative detail:** **[Provenance and ownership](docs/structure-contract.md#provenance-and-ownership)** and **[Applicable curated pages](docs/structure-contract.md#applicable-curated-pages)** in **`docs/structure-contract.md`**. **Summary:** default-path pages **listed** in **[Curated pages](docs/index.md#curated-pages)** that carry **cross-boundary** or **governed** narrative **must** include **`owner`** and **`last_updated`** (plus the always-required keys). The hub (**`docs/index.md`**), **meta** shells (**`docs/structure-contract.md`**, **`docs/default-vs-archive-split.md`**), and **`docs/templates/`** scaffolds are **exempt** from that pair—see the contract. On substantive edits, advance **`date`** and **`last_updated`** together; use **`last_reviewed`** for verification against code or canonical docs without implying a synonym for **`last_updated`**.

### Front matter and schema drift

The architecture’s **Naming Patterns** state that **front matter keys** are defined in **`docs/structure-contract.md`** and that **synonym keys** for the same concept (for example mixing `owner` and `maintainer`) are **not** allowed without updating the contract. **Enforcement Guidelines** add that **drift** is handled in lockstep: if you **introduce a new key**, **rename** the meaning of an existing key, or **split** one concept across multiple keys, you **must** update **`docs/structure-contract.md`** in the **same pull request** (or the same merged change set). Do not land new normative conventions in prose or YAML alone while the contract still describes an older schema.

## Starting from a template

**Net-new** curated pages under **`docs/*.md`** (standard topic layout) **must** start from the default scaffold in **`docs/templates/topic-page.md`**, unless an exception applies—see **[When not to use the default scaffold](#when-not-to-use-the-default-scaffold)**.

1. Copy **`docs/templates/topic-page.md`**.
2. Save as a new file under **`docs/`** using a **lowercase-hyphenated** filename (for example `my-topic.md`).
3. Replace placeholders and remove HTML comments in the copy; fill **`## Purpose`**, **`## Rules and intent`**, and **`## References and outbound links`** per **[docs/structure-contract.md](docs/structure-contract.md)**.
4. If the page is **default-path** curated content, update **`docs/index.md`** in the **same PR**—see **[Keeping the hub complete](#keeping-the-hub-complete)**.

Templates and folder overview: **[docs/templates/README.md](docs/templates/README.md)**.

### When not to use the default scaffold

Use the default scaffold **except** when:

- You are **not** adding a net-new topic file (for example **tiny errata** or a **one-line** fix to an existing page).
- The page is **non-standard** by **explicit reviewer agreement** before merge (for example an experimental layout or a page type that will later get its own template). In that case, state the exception in the **PR description** (and optionally a short note in YAML or a comment at the top of the file) so reviewers know the deviation was intentional.

Keep this escape hatch **narrow**—prefer extending **`docs/templates/`** and the structure contract if a new page type becomes common.

## Keeping the hub complete

When you add a **new topical page** under `docs/` that should be part of the discoverable corpus, update **`docs/index.md`** in the **same pull request** (usually a new row under **Curated pages**), as described in that file’s **Keeping this index current** section. If the index update cannot ship in the same PR, open a follow-up issue immediately and do not merge the page without a tracking reference.

## Reviewing new and revised doc pages

**For reviewers**—when a PR adds or changes **curated documentation** (pages under **`docs/`**, files under **`docs/templates/`**, or this repository’s **`CONTRIBUTING.md`**), use the subsections below. **Every** such PR should pass **[Structure and contract (every doc PR)](#structure-and-contract-every-doc-pr)** where it applies (for example front matter and heading rules apply to Markdown under **`docs/`**; use judgment for guide-only edits). When the change is **substantive**, also apply **[Substantive documentation PRs](#substantive-documentation-prs)** so reviewers can accept or request changes **without undocumented taste**—each substantive item points at published rules in this repository.

### Structure and contract (every doc PR)

Fast path for **any** doc PR: verify **structure**, **front matter**, and **link style** against **[docs/structure-contract.md](docs/structure-contract.md)**.

- **Front matter:** **[Required keys](docs/structure-contract.md#yaml-front-matter)** (`title`, `description`, `date`) present; YAML valid; optional keys consistent with the **Recommended keys** table when used. For pages under **[Applicable curated pages](docs/structure-contract.md#applicable-curated-pages)**, also **`owner`** and **`last_updated`**—**[Provenance and ownership](docs/structure-contract.md#provenance-and-ownership)**.
- **Heading ladder:** no skipped levels between `#` / `##` / `###` / `####`—**[Heading ladder](docs/structure-contract.md#heading-ladder)**.
- **Title:** a single logical top-level title pattern—**[One logical title per page](docs/structure-contract.md#one-logical-title-per-page)**.
- **Links:** meaningful **intra-repo** link text; code fences have **language tags** where applicable—**[Markdown syntax](docs/structure-contract.md#markdown-syntax)** (CommonMark expectations above those subsections).
- **Index:** new **default-path** topical pages update **`docs/index.md`** in the same PR—see **[Keeping the hub complete](#keeping-the-hub-complete)** and **[Keeping this index current](docs/index.md#keeping-this-index-current)** in the hub.

### Substantive documentation PRs

Use this **in addition to** **[Structure and contract (every doc PR)](#structure-and-contract-every-doc-pr)** when the PR is **substantive** (definition next).

**What counts as substantive**

A change is **substantive** when it alters **meaning**, **scope**, or **cross-boundary rules**—not only spelling, formatting, or presentation.

- **Substantive examples:** new or revised **business rules**; new **cross-boundary** claims (for example frontend ↔ backend, HTTP surfaces, operations edges); **scope** changes (what the page owns versus what it defers to outbound links); **new normative** guidance readers or agents would act on; promoting **draft** or **archive-leaning** material to **default-path** truth; any edit that materially changes the **takeaway** of a curated page.
- **Usually not substantive:** typos; **pure** formatting (whitespace, list punctuation); fixing a broken link **without** changing the **intended** destination; tightening prose **without** changing rules, scope, or claims; adjusting link **wording** when the **destination and meaning** stay the same.

If you are unsure, treat the PR as **substantive** and apply this checklist.

**Substantive reviewer checklist** — work **yes / no / n/a** against the cited authority (same pull request unless called out):

- **Placement (default vs archive)** — Path, **`status`**, and **`audience`** align with **[Default vs archive](docs/structure-contract.md#default-vs-archive)** and the narrative in **[Default path vs archive](docs/default-vs-archive-split.md)**. No **default-path** page presents **`draft`** (or otherwise non-canonical) material as **current truth** without clear rationale in the PR.
- **Index / hub** — New or **promoted** default-path topical pages update **[docs/index.md](docs/index.md)** in the **same PR**—**[Keeping the hub complete](#keeping-the-hub-complete)** and **[Keeping this index current](docs/index.md#keeping-this-index-current)**.
- **Outbound link hygiene** — **[Descriptive link text](docs/structure-contract.md#descriptive-link-text)** for intra-repo and external links (NFR-A1). Stable DevDoc / OpenAPI entry points match **[Where API and backend depth live](docs/index.md#where-api-and-backend-depth-live)** and **[API documentation and OpenAPI boundary](#api-documentation-and-openapi-boundary)**—no ad-hoc substitutes for those hubs.
- **OpenAPI boundary** — No new **authoritative** spec dumps, path/method catalogs, or schema-as-truth blocks in this repo; **link-out** only—**[API documentation and OpenAPI boundary](#api-documentation-and-openapi-boundary)** and **[What belongs in this corpus](docs/structure-contract.md#what-belongs-in-this-corpus)**.
- **Provenance** — **`date`** reflects the **last substantive** update; **`owner`** and **`last_updated`** are **required** on pages that fall under **[Applicable curated pages](docs/structure-contract.md#applicable-curated-pages)**—see **[Provenance and ownership](docs/structure-contract.md#provenance-and-ownership)** for semantics, examples, and exemptions. The **PR description** or review thread should call out **material meaning** changes. **Change logs, supersession, and ADR-style provenance** for substantive rewrites are **Story 3.3**—do not block this checklist on 3.3 unless the PR triggers that story’s scope.
- **Privacy / sensitivity** (when examples or narratives touch people-like data) — Use **synthetic** or clearly **non-production** examples—**no** casual real names, learner identifiers, or PII-adjacent payloads (NFR-A2). Escalate if content could identify individuals or sensitive deployments without an approved pattern.

---

**Primary documentation hub:** [docs/index.md](docs/index.md)

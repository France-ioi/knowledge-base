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

**Curated** rules and topic pages that should ground day-to-day consultation live under **`docs/`** (with **[docs/index.md](docs/index.md)** as the primary entry). **`docs/archive/`** is the **opt-in** location for superseded narratives, deliberation, and deep history—see **[docs/archive/README.md](docs/archive/README.md)** and the **[Archive section](#archive-docsarchive)** in this guide. It is **not** part of the default consultation path; follow the hub and structure contract for what counts as default path versus archive.

**IDE agent guardrails** for this repository live under **`.cursor/rules/`** (Cursor project rules). They **point at** curated docs and this guide; they are **not** a second documentation tree or a substitute for **`docs/`**.

This separation matches the architecture intent documented in [_bmad-output/planning-artifacts/architecture.md](_bmad-output/planning-artifacts/architecture.md) (see **Structure Patterns** and **Project Structure & Boundaries**).

<a id="archive-docsarchive"></a>

## Archive (`docs/archive/`)

**Normative rules** for classifying and placing **historical or deliberative** material so archive content stays consistent (FR14).

### Default path versus `docs/archive/`

| | Default path | `docs/archive/` |
|---|--------------|-----------------|
| **Location** | **`docs/*.md`** outside **`archive/`**, typically listed under **[Curated pages](docs/index.md#curated-pages)** | **`docs/archive/`** tree — entry **[docs/archive/README.md](docs/archive/README.md)** |
| **Role** | **Current** governed guidance for routine use | **History**, deliberation, superseded narratives, traceability |
| **Typical front matter** | **`status: current`**, **`audience: agent-default`** for default-path topical pages | **`audience: archive`** and often **`status: archived`** — see **[Default vs archive](docs/structure-contract.md#default-vs-archive)** |

### What belongs in the archive

Examples (not exhaustive):

- **Superseded** long explanations kept after a shorter default-path page **replaces** them.
- **Deliberation** captured as Markdown (options considered, meeting notes, long “why” threads) that would add noise on the default path.
- **Deprecated policies** kept so readers can see what **used to be** true.
- **ADR-style** history **if** it is stored here—creating ADRs is **not** mandatory; this bullet applies only when that content **lands** under **`docs/archive/`**.

### Naming and placement

- Use **lowercase-hyphenated** filenames under **`docs/archive/`** (for example `auth-options-deprecated.md`).
- Optional **topic subfolders** are allowed (for example **`docs/archive/algorea/topic-name.md`**) when they improve organization—**document** the pattern you use in **[docs/archive/README.md](docs/archive/README.md)** when introducing a new convention.
- Archive pages **must** set **`audience: archive`** (required) and **should** also set **`status: archived`** when the page is no longer evolving — per **[Default vs archive](docs/structure-contract.md#default-vs-archive)** so labeling makes non-default use obvious. The archive **`README.md`** itself is exempt (it uses **`audience: agent-default`** as a navigation aid).

**Example front matter** (archive page):

```yaml
---
title: "Auth options — deprecated deliberation"
description: "Rejected authentication approaches kept for traceability."
date: 2026-03-23
doc_type: explanation
status: archived
audience: archive
---
```

### Related links

- **[docs/archive/README.md](docs/archive/README.md)** — purpose and browsing norms for readers.
- **[Default path vs archive](docs/default-vs-archive-split.md)** — default-path policy summary.
- **[Default vs archive](docs/structure-contract.md#default-vs-archive)** — structure contract rules.

## Supersession on the default path

When **default-path** meaning **replaces** bookmarkable guidance, or when a **summary** page **subsumes** longer deliberative docs, use this **standard pattern** so readers do not treat outdated material as current (FR15):

1. Add a **leading blockquote** immediately after the **`#` title** (or the first short intro paragraph). Start the first line with **`> **Note on prior guidance:**`** or **`> **Superseded material:**`** (bold label inside the blockquote).
2. Keep the blockquote to **one or two sentences**, name what moved or what is now canonical, and link **[docs/archive/README.md](docs/archive/README.md)** or a **specific** path under **`docs/archive/`** when applicable.

**Minimal example:**

```markdown
# My topic

> **Note on prior guidance:** Longer deliberation and superseded drafts live under [docs/archive/](docs/archive/README.md). This page is the **current** default-path summary.

## Purpose
...
```

Always cross-check **[Provenance for substantive meaning changes](#provenance-for-substantive-meaning-changes)** for substantive rewrites. For the split between default path and archive, link **[Default path vs archive](docs/default-vs-archive-split.md)**.

## Structure and front matter

Curated Markdown under **`docs/`** **must** follow **[docs/structure-contract.md](docs/structure-contract.md)**. That file is **normative** for how new and substantially revised pages are written so the corpus stays **machine-reliable** and consistent.

**You must apply the contract to:**

- **Titles and headings:** **One** logical title per page and a **heading ladder** that does not skip levels—use `#` then `##` then `###` then `####` in order (see **[One logical title per page](docs/structure-contract.md#one-logical-title-per-page)** and **[Heading ladder](docs/structure-contract.md#heading-ladder)** under **[Markdown syntax](docs/structure-contract.md#markdown-syntax)**).
- **YAML front matter:** required and recommended keys, types, and examples for pages in the curated knowledge base—see **[YAML front matter](docs/structure-contract.md#yaml-front-matter)**. **New** and **substantially revised** `docs/*.md` pages **must** include front matter that matches the contract.
- **Link style:** use standard Markdown links with **descriptive** link text for **intra-repo** destinations (avoid bare URLs or vague phrases like “click here” when a short label can name the destination). CommonMark-aligned lists and fenced code blocks with **language tags** are part of the same expectations—still **[Markdown syntax](docs/structure-contract.md#markdown-syntax)**.
- **Default vs archive:** how default-path pages relate to **`docs/archive/`** and audience—see **[Default vs archive](docs/structure-contract.md#default-vs-archive)**, the **[Archive section](#archive-docsarchive)** in this file, and **[Default path vs archive](docs/default-vs-archive-split.md)**.

**Automated checks** in **[CI and local documentation checks](#ci-and-local-documentation-checks)** complement the contract’s **[Linting and CI](docs/structure-contract.md#linting-and-ci)** section; substantive judgment and anything outside the scripted scope still rely on **human review** in PRs—this guide and the contract remain authoritative for reviewers.

**Section naming for new pages:** When you start from the default scaffold, the first topical `##` after the single `#` title is **`## Purpose`** (not a separate “Overview-only” heading). That keeps new pages aligned with the template and avoids synonym drift (“Purpose” vs “Overview”).

### Provenance and ownership (front matter)

**Normative detail:** **[Provenance and ownership](docs/structure-contract.md#provenance-and-ownership)** and **[Applicable curated pages](docs/structure-contract.md#applicable-curated-pages)** in **`docs/structure-contract.md`**. **Summary:** default-path pages **listed** in **[Curated pages](docs/index.md#curated-pages)** that carry **cross-boundary** or **governed** narrative **must** include **`owner`** and **`last_updated`** (plus the always-required keys). The hub (**`docs/index.md`**), **meta** shells (**`docs/structure-contract.md`**, **`docs/default-vs-archive-split.md`**), and **`docs/templates/`** scaffolds are **exempt** from that pair—see the contract. On substantive edits, advance **`date`** and **`last_updated`** together; use **`last_reviewed`** for verification against code or canonical docs without implying a synonym for **`last_updated`**.

### Provenance for substantive meaning changes

When you change **substantive** curated meaning (same definition as **[Substantive documentation PRs](#substantive-documentation-prs)**), **at least one** visible audit trail **must** exist so **truth does not change silently** (FR9). **Default-path** curated pages **must not** merge substantive edits that alter **rules**, **scope**, or **cross-boundary claims** **without** a trail reviewers and readers can follow from the **same pull request** or a **linked** artifact.

**`date`** and **`last_updated`** (and **`owner`** where required) are **necessary** but **not sufficient** for **change** provenance: they record **freshness** and **curation contact**, not **why** guidance changed—see **[Provenance and ownership](docs/structure-contract.md#provenance-and-ownership)**.

**Allowed audit mechanisms** (the team convention is **one or more** of these; see **minimum bar** below):

1. **Archive note** — In the PR or on the page when moving or demoting material into **`docs/archive/`** or toward **archive-aligned** placement (explicit **`status`** / **`audience`** in front matter per the **[Archive section](#archive-docsarchive)**).
2. **Changelog entry** — Repo-level **`CHANGELOG.md`**, a doc-level changelog section, or a fragment under **`docs/`**, **if** the project adopts one. **This repository does not have a root `CHANGELOG.md` today**; until one is added, **do not** treat “changelog” as a separate file—use the **pointer** convention below. If a changelog is introduced later, update this subsection to **reference** it and add a **one-line** scope rule (what belongs there versus **PR-only** narrative).
3. **Supersession note** — Short text on the page or in the PR stating **what replaced what**, for readers who may have bookmarked older default-path guidance. On default-path pages, prefer the **blockquote** pattern in **[Supersession on the default path](#supersession-on-the-default-path)**.
4. **Pointer to a decision** — Link from the **PR description** or the page to an **ADR**, **issue**, or **PR** that records the decision. **Pull request description** and/or **linked issue or PR** count as this mechanism when they **state what meaning changed** (and **why**, or where the decision is recorded).

**Minimum bar for this repository**

- **Every** substantive curated change **must** satisfy **(4)** via the **same PR**: the **PR description** or a **linked issue/PR** must make **what** changed visible (and point to an ADR or follow-up when decisions live there).
- When a change **replaces** or **contradicts** prior **default-path** guidance that could still be bookmarked or cited, that minimum is **insufficient** **unless** you also use **(3)**, **(1)** when material is demoted or moved, **(2)** when a changelog exists, or another **(4)** artifact that makes **old vs new** discoverable (for example a supersession paragraph on the page).

**Forbidden:** **silent rewrites**—no substantive meaning change on the default path **without** any of the signals above.

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

<a id="ci-and-local-documentation-checks"></a>

## CI and local documentation checks

**Circle CI** runs the **`docs-quality`** workflow (see **`.circleci/config.yml`**) using **Node 22** (Active LTS line). **Duration budget (NFR-P2):** aim for **under about three minutes** for these documentation jobs on typical PRs; raise the limit only if the corpus grows enough to justify it.

From the repository root, after **`npm ci`**:

| Command | What it checks |
|--------|----------------|
| **`npm run docs:linkcheck`** | **Repo-relative** links in **`docs/**/*.md`**, **`README.md`**, and **`CONTRIBUTING.md`** (`markdown-link-check`). **External** `http(s)://` URLs are **skipped** in CI via **`.markdown-link-check.json`** (`ignorePatterns`) so jobs stay stable—**do not** use that file to mask **broken internal** links. **`.markdown-link-check.json`** cannot contain comments; document any **narrow** `ignorePatterns` change with **reviewer-approved** rationale **here** or in **`scripts/README.md`**. |
| **`npm run docs:lint`** | **`markdownlint-cli2`** with **`.markdownlint-cli2.jsonc`** on the **same paths** as link check. **Waivers:** prefer fixing markdown over exceptions; **no** silent disables. **Per-file** or **inline** overrides need **PR justification** (and config comments with **owner approval** or **ticket** when the waiver lives in repo config). |
| **`npm run docs:rules`** | **Structure** of **`.cursor/rules/*.mdc`** (front matter, non-empty body, `description`, `alwaysApply` / `globs`)—FR22. This is **separate** from link check; **`.mdc`** files are **not** in link-check scope unless you expand it deliberately. |
| **`npm run docs:check`** | Runs **link check**, **lint**, and **rules** in one go (same sequence as CI). |

Script overview: **[scripts/README.md](scripts/README.md)**.

## Migrating legacy documentation

When you bring **Algorea-relevant** or other **in-scope** material from **legacy** sources (wikis, other repositories, exports, long deliberation threads), use the **[Legacy migration playbook](docs/migration.md)** as the **canonical** procedure. It walks through **slice selection**, **path and hub mapping**, **rewrite or move** against the structure contract, **relative link repair**, and **same-PR** updates to **`docs/index.md`** and any hub sections—plus **default vs archive** placement with pointers to **[Default path vs archive](docs/default-vs-archive-split.md)** and the **[Archive (`docs/archive/`)](#archive-docsarchive)** rules in this guide. Substantive migrations still follow **[Substantive documentation PRs](#substantive-documentation-prs)** and the **[API documentation and OpenAPI boundary](#api-documentation-and-openapi-boundary)**.

## Corpus provenance (optional)

This section is **normative** only when the team **opts in** to tracking **how** a page entered the corpus. Until then, **omit** the field below on **all** pages—**no** backfill is required.

### Optional YAML key: `origin`

You may add an **`origin`** key to YAML front matter on curated pages under **`docs/`** (YAML is **strongly preferred** over a prose-only footer so tools and agents can read it reliably).

**Prose-only equivalent (discouraged):** If a page truly **cannot** carry YAML front matter but the team still wants this signal, add **one** line at the **end** of the Markdown body (after the main content, before any long reference blocks), using exactly:

`**Corpus origin:** migrated` or `**Corpus origin:** net-new`

Use the **same two values** and **same semantics** as in the table below. **[Optional corpus keys](docs/structure-contract.md#optional-corpus-keys)** remains the authoritative enum—do not introduce other spellings or labels in the footer. If the page already has front matter, use **`origin:`** there instead.

| Value | When to use |
|-------|-------------|
| **`migrated`** | The page’s **first publication in this repository** came from a **legacy** source and followed the lineage described in the **[Legacy migration playbook](docs/migration.md)** (wikis, other repos, exports, etc.—not authored originally for this corpus). |
| **`net-new`** | The page was **authored for this corpus** without that legacy lineage (new topic, greenfield rewrite that is not a straight migration batch). |

**Default:** **Omitting `origin` is allowed** and is the **default**. Treat unset `origin` as “team has not applied this optional practice to this page.”

**Additive only:** `origin` does **not** replace **`date`**, **`owner`**, **`last_updated`**, or any other required or recommended keys—see **[YAML front matter](docs/structure-contract.md#yaml-front-matter)** and **[Optional corpus keys](docs/structure-contract.md#optional-corpus-keys)**.

**Archive (`docs/archive/`):** Using **`migrated`** on archive-path pages is **optional** and often **less critical** than on default-path truth; it can still help when archive material clearly came from a legacy import. **`net-new`** archive pages are rare but valid when deliberative content was written for this repo. If unsure, **omit** `origin`.

**Single definition:** Allowed values and semantics match **[Optional corpus keys](docs/structure-contract.md#optional-corpus-keys)**—do not introduce alternate spellings or extra enum values in prose elsewhere.

## Reviewing new and revised doc pages

**For reviewers**—when a PR adds or changes **curated documentation** (pages under **`docs/`**, files under **`docs/templates/`**, or this repository’s **`CONTRIBUTING.md`**), use the subsections below. **Every** such PR should pass **[Structure and contract (every doc PR)](#structure-and-contract-every-doc-pr)** where it applies (for example front matter and heading rules apply to Markdown under **`docs/`**; use judgment for guide-only edits). When the change is **substantive**, also apply **[Substantive documentation PRs](#substantive-documentation-prs)** so reviewers can accept or request changes **without undocumented taste**—each substantive item points at published rules in this repository.

### Structure and contract (every doc PR)

Fast path for **any** doc PR: verify **structure**, **front matter**, and **link style** against **[docs/structure-contract.md](docs/structure-contract.md)**.

- **Front matter:** **[Required keys](docs/structure-contract.md#yaml-front-matter)** (`title`, `description`, `date`) present; YAML valid; optional keys consistent with the **Recommended keys** and **[Optional corpus keys](docs/structure-contract.md#optional-corpus-keys)** sections when used. If the optional **`origin`** practice is used (**`origin:`** in YAML **or** the **`Corpus origin:`** footer form in **[Corpus provenance (optional)](#corpus-provenance-optional)**), the value must be exactly **`migrated`** or **`net-new`**. For pages under **[Applicable curated pages](docs/structure-contract.md#applicable-curated-pages)**, also **`owner`** and **`last_updated`**—**[Provenance and ownership](docs/structure-contract.md#provenance-and-ownership)**.
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

- **Placement (default vs archive)** — Path, **`status`**, and **`audience`** align with **[Default vs archive](docs/structure-contract.md#default-vs-archive)** and the narrative in **[Default path vs archive](docs/default-vs-archive-split.md)**. No **default-path** page presents **`draft`** (or otherwise non-canonical) material as **current truth** without clear rationale in the PR. **New `docs/archive/`** pages are **not** presented as default-path truth and meet **naming** and **YAML** rules in the **[Archive section](#archive-docsarchive)**.
- **Supersession (when replacing guidance)** — If the PR **replaces** prior default-path guidance, the **living** page (and/or PR trail) follows **[Supersession on the default path](#supersession-on-the-default-path)** so stale bookmarks are not silently wrong.
- **Index / hub** — New or **promoted** default-path topical pages update **[docs/index.md](docs/index.md)** in the **same PR**—**[Keeping the hub complete](#keeping-the-hub-complete)** and **[Keeping this index current](docs/index.md#keeping-this-index-current)**.
- **Outbound link hygiene** — **[Descriptive link text](docs/structure-contract.md#descriptive-link-text)** for intra-repo and external links (NFR-A1). Stable DevDoc / OpenAPI entry points match **[Where API and backend depth live](docs/index.md#where-api-and-backend-depth-live)** and **[API documentation and OpenAPI boundary](#api-documentation-and-openapi-boundary)**—no ad-hoc substitutes for those hubs.
- **OpenAPI boundary** — No new **authoritative** spec dumps, path/method catalogs, or schema-as-truth blocks in this repo; **link-out** only—**[API documentation and OpenAPI boundary](#api-documentation-and-openapi-boundary)** and **[What belongs in this corpus](docs/structure-contract.md#what-belongs-in-this-corpus)**.
- **Provenance**
  - **Front matter** — **`date`** reflects the **last substantive** update; **`owner`** and **`last_updated`** are **required** on pages that fall under **[Applicable curated pages](docs/structure-contract.md#applicable-curated-pages)**—see **[Provenance and ownership](docs/structure-contract.md#provenance-and-ownership)** for semantics, examples, and exemptions. **`date`** / **`last_updated`** are **not** a substitute for a **change narrative**—see **[Provenance for substantive meaning changes](#provenance-for-substantive-meaning-changes)**.
  - **Change trail (substantive meaning)** — Work **yes / no / n/a** against **[Provenance for substantive meaning changes](#provenance-for-substantive-meaning-changes)** (**n/a** only when the PR is **not** substantive per **[What counts as substantive](#substantive-documentation-prs)**).
    - **Pointer (substantive PRs → yes)** — Does the **PR description** or a **linked issue/PR** state **what** meaning changed (and point to an ADR/issue when that is where the decision lives)?
    - **Stronger trail (when applicable → yes / n/a)** — If the edit **replaces** or **contradicts** prior default-path guidance, **demotes** or **moves** material toward archive, or otherwise risks **stale bookmarks**: is there a **supersession note**, **archive note**, **changelog entry** (when the repo has one), or **ADR / issue** pointer that makes **old vs new** discoverable?
- **Privacy / sensitivity** (when examples or narratives touch people-like data) — Use **synthetic** or clearly **non-production** examples—**no** casual real names, learner identifiers, or PII-adjacent payloads (NFR-A2). Escalate if content could identify individuals or sensitive deployments without an approved pattern.

---

**Primary documentation hub:** [docs/index.md](docs/index.md)

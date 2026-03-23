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

## Planning and workflow output vs curated product docs

**`_bmad-output/`** holds **planning artifacts, BMAD workflow output, and sprint or research files**. It is **not** the default-path **curated product narrative** for readers or agents.

**Curated** rules and topic pages that should ground day-to-day consultation live under **`docs/`** (with **[docs/index.md](docs/index.md)** as the primary entry). Optional **`docs/archive/`** may appear later for superseded or non-default material; until then, follow the index and structure contract for what counts as default path.

This separation matches the architecture intent: **[Structure Patterns](/_bmad-output/planning-artifacts/architecture.md)** and **[Project Structure & Boundaries](/_bmad-output/planning-artifacts/architecture.md)** keep the governed corpus under `docs/` while planning outputs stay in `_bmad-output/`.

## Structure and front matter

Technical rules for YAML front matter, heading ladders, and Markdown conventions for pages under `docs/` are defined in **[docs/structure-contract.md](docs/structure-contract.md)**. **Follow that contract** when you add or substantially revise curated pages (deeper workflow wiring is covered in later authoring stories).

## Keeping the hub complete

When you add a **new topical page** under `docs/` that should be part of the discoverable corpus, update **`docs/index.md`** in the **same pull request** (usually a new row under **Curated pages**), as described in that file’s **Keeping this index current** section. If the index update cannot ship in the same PR, open a follow-up issue immediately and do not merge the page without a tracking reference.

---

**Primary documentation hub:** [docs/index.md](docs/index.md)

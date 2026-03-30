---
title: "Operations essentials"
description: "MVP-scoped hub for Algorea operations and deployment pointers; topic index and boundaries to DevDoc, app repos, and external systems."
date: 2026-03-25
last_updated: 2026-03-25
last_reviewed: 2026-03-25
owner: "#algorea-platform-docs"
doc_type: reference
status: current
audience: agent-default
parent: "Algorea"
nav_order: 3
---

# Operations essentials

This repository is the **France-IOI** governed knowledge base; **Algorea** is the **MVP project slice** for which this page collects **in-corpus** operations orientation. It is **not** a claim that all France-IOI operations are documented here.

## Purpose and audience

**Purpose:** A **single discoverable hub** for Algorea **MVP-scoped** operations essentials: where runbook-style topics will live in `docs/`, what is **already** covered elsewhere, and **honest** scope when content is still thin.

**Audience:** People who **run, deploy, or support** the Algorea platform and need **governed** cross-cutting orientation without hunting ad-hoc notes. **Implementers** needing **backend, Lambda, database, or HTTP contract** detail should follow outbound links—this page does **not** duplicate that depth.

## Topic index

Use this table as the **canonical map** for Algorea ops topics in this corpus. When you add a **new** default-path ops topic page under `docs/`, add a row and link **in the same pull request** as the new file (see **[Keeping this index current](./index.md#keeping-this-index-current)** on the hub).

| Topic | Where to read | Notes |
|------|---------------|--------|
| Repository layout next to this knowledge base | [Linked repositories](./algorea-linked-repositories.md) | Workspace map; not a substitute for each repo’s README. |
| Frontend app source, UI↔API expectations | [Frontend](./algorea-frontend.md) | **Deploy pipelines and build scripts** for the SPA live in **[AlgoreaFrontend](https://github.com/France-ioi/AlgoreaFrontend)**—not summarized here. |
| Backend, Lambda, database, platform depth | **[algorea-devdoc](https://france-ioi.github.io/algorea-devdoc/)** (e.g. [Lambda notes](https://france-ioi.github.io/algorea-devdoc/backend/lambda/)) | **Authoritative** engineer-facing ops/deployment detail for the backend stack. |
| HTTP API contracts (OpenAPI-sourced) | [Where API and backend depth live](./index.md#where-api-and-backend-depth-live) on the hub | This KB **links only**—no spec dumps (see **[Structure contract — what belongs in this corpus](./structure-contract.md#what-belongs-in-this-corpus)**). |
| Moving legacy material into `docs/` | [Migration playbook](./migration.md) | Maintainer steps; same provenance rules as other curated pages. |
| **Planned:** Algorea MVP deployment checklist (governed) | *Not written yet* | Intended as a short **corpus** checklist when the team defines MVP-wide steps that are **not** owned by a single app repo. |
| **Planned:** Incident / escalation handoff | *Not written yet* | **Live** paging, on-call rosters, and **customer-facing** comms usually live in **internal** tooling or wikis—see below. |

## Out of scope / where else to look

This knowledge base **does not replace**:

- **Secret stores and credentials** — API keys, database passwords, signing secrets, and private endpoints belong in your organization’s **approved secret managers** and **access-controlled** stores. **Do not** paste tokens, passwords, or private URLs into `docs/`; use **placeholders** in examples (for example `YOUR_ENV_VAR`, `https://example-internal/` only if it is clearly non-production documentation—prefer referring readers to the secret store pattern your team uses).
- **Cloud provider consoles and infra-as-code repos** — AWS/GCP/Azure consoles, Terraform state, and account-specific ARNs are **not** duplicated here; link to **team-standard** runbooks in the **owning** systems when needed.
- **Engineer-facing backend and Lambda depth** — **[algorea-devdoc](https://france-ioi.github.io/algorea-devdoc/)** remains the place for implementation-level deployment and platform documentation.
- **Per-application CI/CD and release runbooks** — Pipelines, branch policies, and release checklists **owned by an application repository** stay **in that repository** (and its docs), unless promoted into a **short** cross-cutting page here with clear ownership.
- **Internal wikis and chat** — Ad hoc procedures, draft incident notes, and **non-governed** knowledge may live in **internal wikis** or team channels; this corpus holds **curated** defaults for the **default path**, not every informal artifact.

**Synthetic examples:** Names like `prod-cluster-example`, `lambda-alias-demo`, or `ops-placeholder-0001` are **documentation-only**—not real resource names or secrets.

## References and outbound links

- **Hub — API and backend depth:** [France-IOI knowledge base — documentation hub](./index.md#where-api-and-backend-depth-live)
- **Contribution and provenance:** [CONTRIBUTING.md](../CONTRIBUTING.md) — substantive changes need reviewer-visible provenance per **Substantive documentation PRs** and **Provenance for substantive meaning changes**.
- **OpenAPI / contract boundary:** normative rules in [CONTRIBUTING.md](../CONTRIBUTING.md#api-documentation-and-openapi-boundary); this page **links** to DevDoc for contracts rather than duplicating OpenAPI or path/method catalogs.

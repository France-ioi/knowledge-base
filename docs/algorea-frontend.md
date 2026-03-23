---
title: "Algorea frontend — AlgoreaFrontend overview"
description: "Canonical repo link, UI↔API expectations for implementers, and pointers to DevDoc—not a copy of frontend internals."
date: 2026-03-23
last_reviewed: 2026-03-23
doc_type: reference
status: current
audience: agent-default
---

# Algorea frontend (`AlgoreaFrontend`)

**Source code:** **[France-ioi/AlgoreaFrontend](https://github.com/France-ioi/AlgoreaFrontend)** on GitHub — that is the canonical place to clone, read the README, and inspect routing, `package.json`, and `src/`.

If you keep several Algorea repos side by side on disk, see [Algorea — linked repositories](./algorea-linked-repositories.md) for how they relate as sibling folders next to `knowledge-base`.

**What this knowledge-base page is for:** orientation and **cross-boundary** expectations between the SPA and the HTTP APIs. **Not** a mirror of Angular layout, scripts, or folder-by-folder implementation detail—those belong in the GitHub repo.

Official backend documentation remains in **algorea-devdoc**; the app calls HTTP APIs configured per environment in the frontend repository.

**Front matter** uses `audience: agent-default` because this page stays on the default consultation path. **Human** FE/BE implementers: the **UI ↔ API** section below is written for you. **Agents:** use this page for outbound links and boundary rules; Angular layout and scripts are not summarized here—see the GitHub repository.

## UI ↔ API: who owns what (for implementers)

**Audience:** Anyone implementing or reviewing a change that touches **both** the Angular app and backend behavior (items, groups, permissions, errors).

**Why this exists:** OpenAPI and DevDoc describe **contracts** (paths, payloads, status codes). They do not always spell out **product assumptions**—for example, that the UI should treat server-returned state as canonical for progress and access. This section records those **assumptions** so FE and BE work stays aligned without inferring intent only from the schema list.

**Limits:** This is not a full product spec and not authoritative for HTTP detail. For methods, fields, status codes, and error shapes, use the links in [Relationship to other repos](#relationship-to-other-repos) below—those are the authoritative entry points.

### Items (activities and skills)

- **Canonical state:** After a successful API round-trip, **item trees, progress, and visibility** should match what the server returned. The UI may cache or show optimistic UI, but **ordering, whether something can be opened or edited, and completion meaning** should follow the server—not ad hoc rules invented only on the client.
- **Gaps:** If behavior differs by environment or version, **the AlgoreaFrontend repository’s** code (under `items/` in that repo) plus **DevDoc** decide; this page does not lock undocumented guarantees.

### Groups and access

- **Enforcement:** The backend is assumed to enforce **who may see or change** group settings, members, managers, and history. The SPA reflects API results (success, validation errors, denials); authorization policy is not fully restated here.
- **What users see:** **Actions and data** visible in the UI should match **effective permissions** as returned by the API for the session—not a separate rule set documented only in this knowledge base.

### Errors and concurrent updates

- **Messaging:** User-visible explanations for failed saves, stale views, or denials should align with **what the API returns** (messages, error shapes, status semantics) as wired through the app—not made-up client-only wording.
- **Ordering:** When several writes overlap, **ordering and retries** follow patterns in the app’s data layer; see the **AlgoreaFrontend** repository for implementation.

### Synthetic examples in documentation

- Identifiers such as `learner-0001`, `item-demo-42`, or `demo-group-alpha` are **placeholders** for docs only—not real users, production IDs, or secrets.

## Relationship to other repos

- **API contracts and server behavior:** use **[algorea-devdoc](https://france-ioi.github.io/algorea-devdoc/)** and the published **[Backend API (generated)](https://france-ioi.github.io/algorea-devdoc/api/)** for authoritative HTTP documentation. OpenAPI/Swagger sources and generated client types live in **[AlgoreaFrontend](https://github.com/France-ioi/AlgoreaFrontend)** alongside the app code—not re-derived in this knowledge base.
- **AlgoreaServerless / AlgoreaBackend:** deep implementation detail is in DevDoc `backend/`; this file does not duplicate it.

---
title: "Algorea frontend — AlgoreaFrontend overview"
description: "Angular workspace, routing, feature areas, and pointers to authoritative API docs and sibling repos."
date: 2026-03-23
last_reviewed: 2026-03-23
doc_type: reference
status: current
audience: agent-default
---

# Algorea frontend (`AlgoreaFrontend`)

**Repository path (sibling):** `../AlgoreaFrontend`  
**Package name:** `algorea` (see `package.json`)  
**Framework:** Angular **20** with **NgRx** (store, effects, router-store), **RxJS**, **Zod**, **Sentry**, **Phosphor** icons.  
**E2E:** Playwright (`npm run e2e`).  
**Local dev:** `npm start` runs a **mock API** (`mocks/`) together with `ng serve` (see `package.json` scripts).

Official backend/Lambda documentation remains in **algorea-devdoc**; the frontend talks to HTTP APIs configured per environment (`src/environments/`).

## Angular workspace

- Single application project **`algorea`** in `angular.json` (root `""`, `sourceRoot`: `src`, component prefix `alg`).
- **i18n:** source locale `en` with `baseHref` `/en/`; locales `fr`, `de`, `it` with XLF under `src/locale/`. Build configurations such as `production-en`, `production-fr`, etc.
- **Styles:** global `src/styles.scss` plus font stylesheets under `src/assets/fonts/`.

## Top-level routing (`src/app/app.routes.ts`)

| Path / matcher | Lazy area | Notes |
|----------------|-----------|--------|
| `''` | — | `homeRedirectGuard`; home resolution, not a content page. |
| `community` | `./community/community.routes` | Community UI. |
| `groups` | `./groups/group.routes` | Groups management; uses `PendingChangesGuard`, `GroupDeleteService`. |
| `a` (prefix) | `./items/item.routes` | **Activities** — `activityPrefix` from `models/routing/item-route-serialization.ts`. |
| `s` (prefix) | `./items/item.routes` | **Skills** — `skillPrefix`. |
| `lti/:contentId` | `./lti/lti.routes` | LTI integration. |
| `ui-demo` | `UiPageComponent` | UI demo page. |
| Matcher `r/**` | `RedirectToIdComponent` | Short links / redirects into item routes. |
| `**` | `PageNotFoundComponent` | 404. |

Many routes use `DefaultLayoutInitService` as `canActivate` to set layout (`ContentDisplayType` where applicable).

## Feature areas under `src/app/`

High-signal folders (non-exhaustive):

| Folder | Typical responsibility |
|--------|-------------------------|
| `items/` | Item (activity/skill) navigation, editing, progress, forum tab, etc. (`item.routes.ts`). |
| `groups/` | Group settings, members, managers, access, history (`group.routes.ts`). |
| `community/` | Community feature routes. |
| `forum/` | Forum-related UI. |
| `lti/` | LTI flows. |
| `store/` | NgRx state, effects, selectors. |
| `data-access/` | API-facing services and data loading patterns. |
| `services/` | Cross-cutting app services (e.g. `layout.service.ts`). |
| `interceptors/` | HTTP interceptors. |
| `guards/` | Route guards (pending changes, auth-related, home redirect, etc.). |
| `models/` | Domain and routing models. |
| `ui-components/` | Shared UI building blocks. |
| `containers/` | Page-level / shell components (`RedirectToIdComponent`, `PageNotFoundComponent`, …). |
| `pipes/`, `directives/`, `utils/` | Shared presentation and helpers. |
| `config/` | App configuration helpers (e.g. locale tags). |

## Mocks and API typing

- **`mocks/`:** Express-based mock server for local development; `npm run mock` / `npm run start`.
- **Swagger → types:** `npm run generate-types-from-swagger` (see `mocks/generate-types.js`).

## Commands (from `package.json`)

- **Install:** `npm install`
- **Dev (mock + serve):** `npm start`
- **Serve only:** `npm run serve`
- **Build:** `npm run build` (verify any Windows-specific `xcopy` steps if building on Linux)
- **Unit tests:** `npm test`
- **Lint:** `npm run lint`
- **E2E:** `npm run e2e`

## Relationship to other repos

- **API contracts and server behavior:** use **[algorea-devdoc](https://france-ioi.github.io/algorea-devdoc/)** and the published **[Backend API (generated)](https://france-ioi.github.io/algorea-devdoc/api/)** for authoritative HTTP contract documentation. **Source** OpenAPI/Swagger and generated types live with application code (see [Mocks and API typing](#mocks-and-api-typing) above)—not re-derived or duplicated in this knowledge base.
- **AlgoreaServerless / AlgoreaBackend:** implementation details belong in DevDoc `backend/`; this file only helps you find **where** the UI implements flows that call those APIs.

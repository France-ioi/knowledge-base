---
title: "Linked repositories"
description: "Map of Algorea-related sibling repositories and pointers to algorea-devdoc; not a second home for API depth."
date: 2026-03-23
last_updated: 2026-03-23
last_reviewed: 2026-03-23
owner: "#algorea-platform-docs"
doc_type: reference
status: current
audience: agent-default
parent: "Algorea"
nav_order: 1
---

# Linked repositories

Repositories under the same parent directory as `knowledge-base` that relate to the **Algorea** platform. Paths are **siblings** of `knowledge-base` (use `../<name>` from this repo).

## Application and UI

| Repository | Role |
|------------|------|
| **AlgoreaFrontend** | Main **Angular** SPA for the learning platform (NgRx, i18n, Playwright e2e). **Primary focus of the docs in this folder.** |
| **AlgoreaPortal** | Separate portal codebase (not documented here). |
| **AlgoreaFrontend1224wip** | WIP / alternate frontend tree (legacy or experiment; confirm with team before relying on it). |

## Backend and APIs

| Repository | Role |
|------------|------|
| **AlgoreaServerless** | **Serverless** / Lambda-oriented backend code and tooling. Detailed behavior and deployment: **algorea-devdoc** (`backend/`, especially `lambda.md`). |
| **AlgoreaBackend** | Non-serverless backend service (Go). Architecture and decisions: **algorea-devdoc** `backend/`. |

## Platform, search, config, ops

| Repository | Role |
|------------|------|
| **AlgoreaSearch** | Search-related services or indexing (confirm scope in repo README). |
| **AlgoreaConfigs** | Configuration artifacts for environments or deployments. |
| **AlgoreaOps** | Operational configs (e.g. Lambda / static hosting JSON under `environments/configs/`). |
| **AlgBugsink** | Error tracking / Bugsink integration (supporting). |

## Documentation

| Repository | Role |
|------------|------|
| **algorea-devdoc** | **Authoritative technical documentation** for engineers (Jekyll). Covers API surface, auth, DB, backend decisions, **Lambda**, tests, ops links. For **generated HTTP API reference** (OpenAPI-sourced), use the published **[Backend API (generated)](https://france-ioi.github.io/algorea-devdoc/api/)** section. **Do not duplicate serverless/backend deep dives or API contracts here**—link to DevDoc. |

## This repo

| Repository | Role |
|------------|------|
| **knowledge-base** | Cursor/BMAD skills and **this** Algorea-oriented index for AI-assisted work; not the production app. |

---

When extending this map, prefer adding a one-line description and a pointer to DevDoc or the repo’s own README rather than copying long explanations.

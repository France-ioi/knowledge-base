# knowledge-base

This repository is the **governed markdown knowledge base** for **France-IOI**. It holds curated documentation for **business rules**, **cross-boundary behavior**, and **operations essentials** across France-IOI software.

**Algorea** is the largest curated topic area today; other France-IOI initiatives can grow as additional hubs under `docs/` as the corpus expands.

## Where to start

Open the **[curated documentation entry](docs/index.md)** or the **[published site](https://france-ioi.github.io/knowledge-base/)**—the primary hub for human readers and automated agents.

## What belongs here vs elsewhere

- **Here:** Governed Markdown for how France-IOI software fits together: business rules, cross-boundary behavior, and operations essentials.
- **API contracts and backend depth:** Use the **[published engineer-facing documentation](https://france-ioi.github.io/algorea-devdoc/)** and official OpenAPI sources; those details are not duplicated here.
- **Per-application architecture:** Use the relevant application repositories for code-level structure and implementation detail.

## Curated page structure

Pages under `docs/` follow shared rules. See **[docs/structure-contract.md](docs/structure-contract.md)** for YAML front matter and heading conventions.

## Preview the site locally

The documentation site is built with [Jekyll](https://jekyllrb.com/) and the [Just the Docs](https://just-the-docs.com/) theme. GitHub Pages publishes it automatically on push, but you can preview locally:

1. Install Ruby
2. Install bundler if needed: `gem install bundler`
3. Install dependencies: `bundle install`
4. Serve the site: `bundle exec jekyll serve`
5. Open `http://localhost:4000/knowledge-base/` in your browser.

On WSL you may need `bundle exec jekyll serve --force_polling` for live-reload on file changes.

## Contributing

See the **[contribution guide](CONTRIBUTING.md)** for scope, what belongs in `docs/` versus other repositories, and pointers to the **[structure contract](docs/structure-contract.md)** for Markdown and front matter rules.

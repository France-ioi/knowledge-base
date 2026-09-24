# France-IOI knowledge base

This repository holds curated documentation for **business rules**, **cross-boundary behavior**, and **operations essentials** across France-IOI software.

It is auto-published on <https://france-ioi.github.io/knowledge-base/> after each merge to the `master` branch. You can also run it [locally](#run-locally).

## Contributing

See the **[contributing notes](CONTRIBUTING.md)** (Meta section) for collaboration and public scope. Pages under `docs/` follow shared rules in the **[structure contract](docs/meta/structure-contract.md)** (YAML front matter and heading conventions).

## Run locally

The site uses [Jekyll](https://jekyllrb.com/) with [Just the Docs](https://just-the-docs.com/). To preview on your machine:

1. Install Ruby, then Bundler if needed (`gem install bundler`)
2. `bundle install`
3. `bundle exec jekyll serve`
4. Open `http://localhost:4000/knowledge-base/`

On WSL, use `bundle exec jekyll serve --force_polling` if live-reload misses file changes.

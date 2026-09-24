# France-IOI knowledge base

This repository holds curated documentation for **business rules**, **cross-boundary behavior**, and **operations essentials** across France-IOI software.

It is auto-published on <https://france-ioi.github.io/knowledge-base/> after each merge to the `master` branch. You can also run it [locally](#run-locally).

## Contributing

See the **[contributing notes](CONTRIBUTING.md)** (Meta section) for collaboration, public scope, and page conventions.

## Run locally

The site uses [Jekyll](https://jekyllrb.com/) with [Just the Docs](https://just-the-docs.com/). To preview on your machine:

1. Install Ruby, then Bundler if needed (`gem install bundler`)
2. `bundle install`
3. `bundle exec jekyll serve --config docs/_config.yml --source docs`
4. Open `http://localhost:4000/knowledge-base/`

On WSL, add `--force_polling` to that serve command if live-reload misses file changes.

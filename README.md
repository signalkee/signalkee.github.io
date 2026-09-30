# signalkee.github.io

Personal academic website for **Robin Inho Kee**, Ph.D. student in Robotics at the University of Michigan.

## Site structure

- **Home** — research identity, recent news, and selected work
- **Research** — current and selected robotics projects
- **Publications** — manuscripts, journal papers, and conference papers
- **CV** — web summary and downloadable academic CV

## Content organization

- `_data/news.yml` — homepage Recent News entries, newest first
- `_data/publications.yml` — publication metadata
- `_pages/` — top-level site pages
- `_projects/` — research and project pages
- `assets/img/` — static figures and project images
- `assets/media/` — project videos and their poster images
- `assets/pdf/` — CV and paper PDFs
- `_layouts/`, `_includes/`, and `_sass/` — shared presentation code

Keep project media grouped by project and update the data files instead of hard-coding repeated publication or news content into layouts.

## Local development

```bash
bundle install
bundle exec jekyll serve
```

Then open `http://localhost:4000`.

## Checks

```bash
npm ci
npx prettier . --check
JEKYLL_ENV=production bundle exec jekyll build
```

GitHub Actions also runs formatting, production-build, and broken-link checks for changes targeting `master`.

## Deployment

`master` is the source branch. GitHub Actions builds the site and publishes generated output to `gh-pages`. Do not edit `gh-pages` manually.

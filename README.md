# signalkee.github.io

Personal academic website for **Robin Inho Kee**, Ph.D. student in Robotics at the University of Michigan.

## Site structure

- **Home** — research identity and selected work
- **Research** — current and selected robotics projects
- **Publications** — manuscripts, journal papers, and conference papers
- **CV** — web summary and downloadable academic CV

## Stack

Jekyll with a customized al-folio base, plus a site-specific V2 design layer.

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

GitHub Actions also runs the production build, formatting check, and broken-link check for changes targeting `master`.

## Deployment

`master` is the source branch. GitHub Actions builds the site and publishes the generated output to `gh-pages`.

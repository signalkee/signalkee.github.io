# signalkee.github.io

Personal academic website for **Robin Inho Kee**, Ph.D. student in Robotics at the University of Michigan.

## Site structure

- **Home** — research identity and selected work
- **Research** — current and selected robotics projects
- **Publications** — manuscripts, conference papers, and journal papers
- **CV** — web summary and downloadable academic CV

## Stack

This site is built with Jekyll and is based on the al-folio academic website theme, with a custom V2 design layer.

## Local development

```bash
bundle install
bundle exec jekyll serve
```

Then open `http://localhost:4000`.

## Deployment

GitHub Actions builds and deploys the site from the default branch. The repository also runs formatting and broken-link checks on updates.

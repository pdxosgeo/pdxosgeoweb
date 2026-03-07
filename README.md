# PDXOSGeo Website (GitHub Pages)

This repository hosts the **PDX OSGeo website hosted on GitHub Pages**.

## Where the site lives / entrypoint

- **Branch:** `gh-pages`
- **Entrypoint:** `index.html` at the repository root
- **Custom domain:** `pdxosgeo.org` (configured via `CNAME`)

Browse the published branch contents here:
- https://github.com/pdxosgeo/pdxosgeoweb/tree/gh-pages

## Editing workflow (how to publish changes)

This is a static site (HTML/CSS/assets). To publish updates:

1. **Edit the site files**
   - Update `index.html` for page content/layout.
   - Update CSS and other static assets (images, etc.) as needed (see `assets/`).
2. **Create a new branch from `gh-pages` branch**
   - use the convention `username/feature-name`.
   - Example: `geografa/october-2025-post`
3. **Create a Pull Request (PR)**
   - create a PR against `gh-pages` branch and someone will follow up to review.
   - Once changes are committed/merged to `gh-pages`, GitHub Pages will pick them up.
4. **Changes go live automatically**
   - GitHub Pages serves the latest committed content from `gh-pages` (may take a short time to refresh).

## Conventions / structure

- `index.html` — main homepage HTML. Add posts and Map of the Month (MoTM) here.
- `assets/` — static site assets (CSS, images, etc.).
  - CSS is referenced from: `./assets/css/pdxosgeo.css`
  - Images are referenced from: `./assets/img/...`

## Useful links (optional)

- GitHub Pages settings for this repo (UI):  
  Repository → **Settings** → **Pages**
- Public site URL:
  - https://pdxosgeo.org (if DNS / Pages settings are configured for it)

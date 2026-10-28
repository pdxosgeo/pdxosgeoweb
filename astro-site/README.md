# PDXOSGeo website (Astro)

The pdxosgeo.org site, built with [Astro](https://astro.build/) and React. Meetings and Maps of the Month are plain Markdown files, so most updates never touch code.

## Editing content

You have two options:

- **In the browser (no setup):** sign in at [app.pagescms.org](https://app.pagescms.org) with GitHub and open `pdxosgeo/pdxosgeoweb`. You get forms for meetings, Maps of the Month, and site settings, with image uploads. The editor is configured in [`../.pages.yml`](../.pages.yml).
- **In a text editor:** edit the files described below and open a pull request, same as before.

### Add a meeting

Create a file in `src/content/meetings/` named `YYYY-MM-DD-short-title.md`:

```markdown
---
title: MapLibre + Maputnik
date: 2026-04-22
image: /images/posts/2026/2026-april-maputnik.png
imageAlt: Screenshot of the Maputnik style editor
---

Write the post here. **Bold**, [links](https://maplibre.org), lists, and
![inline images](/images/posts/2026/another-image.png) all work.
```

| Field | Required | Notes |
| --- | --- | --- |
| `title` | yes | |
| `date` | yes | `YYYY-MM-DD` |
| `time` | no | Defaults to `6:30pm` |
| `location` | no | Defaults to Hot Lips Pizza @ the Natural Capital Center |
| `image`, `imageAlt` | no | `/images/...` path or a full URL |
| `summary` | no | Card blurb; defaults to the start of the post |
| `youtube` | no | Video ID, e.g. `X-fewMkogAc` |
| `draft` | no | `true` hides the post from the live site |

The homepage features the next upcoming meeting, or the most recent one if nothing is scheduled. Every meeting gets its own page and shows up in the searchable archive at `/meetings/`.

### Update the Map of the Month

Add a file to `src/content/maps/` named `YYYY-MM-short-title.md`. The newest `month` appears in the sidebar; older ones move to `/map-of-the-month/`.

```markdown
---
title: Shakespeare’s World
month: 2026-05-01
image: /images/motm/2026-05-shakesperes-world.png
imageAlt: Shakespeare’s World map
link: https://knowwhereconsulting.co.uk/blog/shakespeares-world/
credit: Stephen Feldman
creditUrl: https://knowwhereconsulting.co.uk/
---

Optional description.
```

### Images

Put images in `public/images/` (meeting images in `public/images/posts/<year>/`, maps in `public/images/motm/`) and reference them starting with `/images/`.

### Site settings

The title, tagline, Google Calendar embed, default time and location, Join links, and About text live in `src/data/site.json`.

## Running locally

Requires Node 22.12 or newer (`nvm use` picks it up from `.nvmrc`).

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # type-checks content, then builds to dist/
```

The build fails with a clear message if a post is missing a required field or has a malformed date.

## Deploying

`.github/workflows/deploy-astro-site.yml` builds this folder and publishes it to GitHub Pages. It runs manually for now; see the comments in that file for switching the live site over.

## Code layout

- `src/content.config.ts`: content schemas (the fields above)
- `src/pages/`: routes (`/`, `/meetings/`, `/meetings/<slug>/`, `/map-of-the-month/`)
- `src/components/`: Astro components plus the React `MeetingArchive` search and filter
- `src/styles/global.css`: all styles

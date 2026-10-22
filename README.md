# Aurel

Marketing site for Aurel — Next.js App Router, Tailwind CSS only, pnpm, Vercel-ready.

## Stack

- **Next.js 16** (App Router, Turbopack)
- **React 19**
- **Tailwind CSS v4** (no custom CSS modules)
- **pnpm**
- Scroll-film frames: `public/frames/{expand,close,release,rotate}/*.webp`

## Setup

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command        | Description              |
| -------------- | ------------------------ |
| `pnpm dev`     | Dev server (Turbopack)   |
| `pnpm build`   | Production build         |
| `pnpm start`   | Serve production build   |
| `pnpm lint`    | ESLint                   |

## Structure

Home page is composed of section components:

```
src/
  app/                  # layout + page
  components/
    layout/             # Header, Footer
    home/               # HeroFilm, Products, About, Materials, Listening, Notes, Contact
  lib/film.ts           # frame path helpers
public/frames/          # WebP scroll sequences (~48MB)
```

## Deploy (Vercel)

1. Push the repo to GitHub / GitLab / Bitbucket.
2. Import in Vercel — framework preset: **Next.js**.
3. Build command: `pnpm build` (auto-detected via `packageManager`).
4. Node **≥ 20**.

Frames are static assets under `public/frames`. For large binary history, consider Git LFS.

## Next work

- Scroll-scrubbed canvas film (bidirectional), full-bleed, no side letterboxing
- Frame edge fill (black / outpaint) so the headphone stays fully visible on mobile
- Flesh out Products → Contact content + mobile polish

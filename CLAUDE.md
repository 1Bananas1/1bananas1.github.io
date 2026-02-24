# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server with HMR
npm run build     # Production build to dist/
npm run preview   # Preview the production build
npm run lint      # Run ESLint
```

There are no tests in this project.

## Architecture

Personal portfolio website built with **React 19 + Vite + Tailwind CSS v4**.

**Routing** (`src/App.jsx`): Two routes via `react-router-dom`:
- `/` → `Home` page (intro, Projects, Contact sections)
- `/classes` → `Classes` page (searchable course list)

**Layout**: `Navbar` and `Footer` are persistent across all routes. A `.gradient` div (a 2px horizontal gradient line) is used as a visual section divider throughout pages.

**Data layer** (`src/data/classDict.jsx`): Single source of truth for all course data. Each entry has `id`, `school`, `classTakenName`, `bgColor`, `date`, `description`, `tags[]`, and optional `githubURL`. Several filter helpers are exported (`getClassesBySchool`, `getClassesByTag`, etc.) though filtering currently happens inline in the `Classes` page via `useState`.

**Styling**: Tailwind v4 configured via `@import 'tailwindcss'` in `src/index.css`. Custom theme tokens defined in `@theme {}`:
- Colors: `swash-2` (#0a0b26), `swash-3` (#031ca6), `swash-4` (#0d2d8c), `swash-5` (#0d2673), `dark-blue` (#0c0f40)
- Fonts: `font-manrope` (body/headings), `font-inter` (navbar)
- Custom component classes: `.gradient`, `.intro-section`, `.button`

**Icons**: Font Awesome via `@fortawesome/react-fontawesome`.

**Images**: Stored in `public/img/` as `.webp` files, referenced with `img\filename.webp` paths in JSX.

## Adding a New Course

Add an entry to the `classesData` array in [src/data/classDict.jsx](src/data/classDict.jsx). The `Classes` page filters by `classTakenName` and `tags[]` automatically.

## Adding a New Route/Page

1. Create the page component in `src/pages/`
2. Import and add a `<Route>` in `src/App.jsx`
3. Add a nav link in `src/components/Navbar.jsx`

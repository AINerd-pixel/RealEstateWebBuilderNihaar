# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Dev server on http://localhost:3000
npm run build     # Production build to dist/
npm run preview   # Preview production build
npm run lint      # Type-check only (tsc --noEmit) — no ESLint configured
npm run clean     # Remove dist/
```

No test framework is configured.

## Environment

Copy `.env.example` to `.env.local` and set `GEMINI_API_KEY`. Vite injects it at build time via `process.env.GEMINI_API_KEY` (see `vite.config.ts` — loaded from the root `.` directory, not `./`).

## Architecture

Single-page React app with no routing. `App.tsx` composes all sections in order: `Navbar → Hero → Stats → Services → Portfolio → Contact → Footer`. There is no shared state management — components are fully self-contained.

**Styling system:** Tailwind CSS v4 (`@tailwindcss/vite` plugin — no `tailwind.config.js`). Design tokens are defined in `src/index.css` under `@theme`: `--color-primary` (gold `#C5A059`), `--color-background` (near-black `#050505`), `--color-on-surface`, `--color-on-surface-variant`. Custom utility classes `.tracking-widest-luxury`, `.tracking-ultra-luxury`, and `.gold-shadow` are defined there as well.

**Fonts:** Inter (sans) and Noto Serif (serif) loaded from Google Fonts in `src/index.css`. Use `font-serif` for display/headline text, `font-sans` for body.

**Animations:** `motion/react` (not `framer-motion`) is used for entrance animations. Import from `"motion/react"`.

**AI integration:** `@google/genai` SDK is available but not yet wired into any component — the API key is injected via Vite's `define` block in `vite.config.ts`.

**Express backend:** `express` and `dotenv` are listed as dependencies but no server file exists yet — the backend is unimplemented.

**`@` alias** resolves to the project root (`/`), not `src/`.

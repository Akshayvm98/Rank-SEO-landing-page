# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Next.js 16 app with TypeScript, Tailwind CSS v4, and ESLint. Uses the App Router with a `src/` directory structure.

## Commands

- `npm run dev` — Start dev server (Turbopack)
- `npm run build` — Production build
- `npm run start` — Serve production build
- `npm run lint` — Run ESLint

## Architecture

- `src/app/` — App Router pages and layouts. `layout.tsx` is the root layout, `page.tsx` is the home page.
- `public/` — Static assets
- Styling: Tailwind CSS v4 via `@tailwindcss/postcss`. Global styles in `src/app/globals.css`.
- Path alias: `@/*` maps to `src/*`

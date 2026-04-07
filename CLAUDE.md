# tombee.io

Personal portfolio and blog built with Next.js (App Router) and shadcn/ui.

## Stack

- Next.js 16 (App Router, TypeScript)
- Tailwind CSS v4
- shadcn/ui components (Base UI, not Radix)
- pnpm

## Rules

- **Git**: Feature branches only. No direct commits to main. No merges or pushes without explicit permission.
- **No `any` types**: Try proper types, generics, type guards first. Ask before using `any`.
- **Verify changes**: After non-trivial changes, run lint, type-check, and tests. All must pass before considering work done.
- **shadcn/ui**: Always use the shadcn CLI to add/update components. Never hand-write them.
- **Routing**: Use the typed route helper (`src/lib/navigation/routes.ts`) — never hardcode route paths in components.
- **Testing**: E2E tests live in `e2e/`. Import `test` and `expect` from `e2e/fixtures/base` (not directly from `@playwright/test`). New pages must have entries in the route manifest (`e2e/helpers/routes.ts`).

## Commands

- `pnpm dev` — start dev server
- `pnpm build` — production build
- `pnpm lint` — run linter
- `pnpm format` — format all files with Prettier
- `pnpm format:check` — check formatting without writing
- `pnpm test:e2e` — run E2E tests (starts dev server automatically)
- `pnpm test:e2e:ui` — run E2E tests in interactive UI mode

## PRDs

Feature PRDs live in `temp/prds/<feature>/`. Read the PRD and any decisions.md before starting work on a feature.

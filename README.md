# tombee.io

Personal portfolio and blog built with Next.js 16 (App Router), Tailwind CSS v4, and shadcn/ui.

## Prerequisites

- Node.js 24+ (see `.nvmrc`)
- pnpm
- Docker (optional, for containerised dev or local email testing)

## Getting started

```bash
# Install dependencies
pnpm install

# Copy environment config (defaults work with local MailHog)
cp .env.example .env.local

# Start MailHog for local email capture
docker compose up -d tombee-mailhog

# Start the dev server
pnpm dev
```

Open http://localhost:3000 for the site and http://localhost:8025 for the MailHog UI to view captured contact form emails.

## Scripts

| Command              | Description                          |
| -------------------- | ------------------------------------ |
| `pnpm dev`           | Start dev server                     |
| `pnpm build`         | Production build (standalone output) |
| `pnpm lint`          | Run ESLint                           |
| `pnpm format`        | Format with Prettier                 |
| `pnpm format:check`  | Check formatting without writing     |
| `pnpm test:e2e`      | Run Playwright E2E tests             |
| `pnpm test:e2e:ui`   | Run E2E tests in interactive UI mode |

## Docker

### Run everything locally with Docker

```bash
cp .env.docker.example .env.docker
docker compose up -d
```

This builds the Next.js app and starts it alongside MailHog. The site is available at http://localhost:3000 and MailHog at http://localhost:8025.

### Run only MailHog (for use with `pnpm dev`)

```bash
docker compose up -d tombee-mailhog
```

### Production

The production compose file (`docker-compose.prod.yml`) pulls a pre-built image from GHCR. It is designed for deployment via Dokploy. See the environment variables section below for required configuration.

## Environment variables

See `.env.example` for all available options. The defaults point at the local MailHog instance so the contact form works out of the box.

For Docker Compose development, copy `.env.docker.example` to `.env.docker` instead (uses Docker internal DNS to reach MailHog).

For production, configure your SMTP provider by setting the `SMTP_*` variables in the Dokploy UI.

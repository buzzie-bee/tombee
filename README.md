# tombee.io

Personal portfolio and blog built with Next.js 16 (App Router), Tailwind CSS v4, and shadcn/ui.

## Prerequisites

- Node.js 20+
- pnpm
- Docker (for local email testing)

## Getting started

```bash
# Install dependencies
pnpm install

# Copy environment config (defaults work with local MailHog)
cp .env.example .env

# Start MailHog for local email capture
docker compose up -d

# Start the dev server
pnpm dev
```

Open http://localhost:3000 for the site and http://localhost:8025 for the MailHog UI to view captured contact form emails.

## Scripts

| Command             | Description                          |
| ------------------- | ------------------------------------ |
| `pnpm dev`          | Start dev server                     |
| `pnpm build`        | Production build (standalone output) |
| `pnpm lint`         | Run ESLint                           |
| `pnpm format`       | Format with Prettier                 |
| `pnpm format:check` | Check formatting without writing     |

## Environment variables

See `.env.example` for all available options. The defaults point at the local MailHog instance so the contact form works out of the box after `cp .env.example .env`.

For production, configure your SMTP provider by updating the `SMTP_*` variables.

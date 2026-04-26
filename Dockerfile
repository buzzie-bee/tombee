ARG NODE_VERSION=24-slim

# ---
FROM node:${NODE_VERSION} AS deps

RUN corepack enable pnpm

WORKDIR /app

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml .npmrc ./

RUN --mount=type=cache,target=/root/.local/share/pnpm/store \
  pnpm install --frozen-lockfile

# ---
FROM node:${NODE_VERSION} AS builder

RUN corepack enable pnpm

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# rehype-mermaid renders diagrams to SVG at build time using Playwright.
# Install Chromium and its system deps so `pnpm build` can prerender pages
# that contain mermaid blocks. The browser stays in this builder stage and
# is not copied into the runner image.
RUN pnpm exec playwright install --with-deps chromium

RUN pnpm build

# ---
FROM node:${NODE_VERSION} AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"
ENV NEXT_SHARP_PATH=/app/node_modules/sharp

COPY --from=builder --chown=node:node /app/public ./public

RUN mkdir .next
RUN chown node:node .next

COPY --from=builder --chown=node:node /app/.next/standalone ./
COPY --from=builder --chown=node:node /app/.next/static ./.next/static

# sharp's native @img/* platform bindings aren't traced by Next.js standalone
# https://github.com/vercel/next.js/issues/65679
COPY --from=builder /app/node_modules/@img ./node_modules/@img


USER node

EXPOSE 3000

CMD ["node", "server.js"]

ARG NODE_VERSION=24-slim

# ---
FROM node:${NODE_VERSION} AS deps

RUN corepack enable pnpm

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

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

RUN pnpm build

# ---
FROM node:${NODE_VERSION} AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

COPY --from=builder --chown=node:node /app/public ./public

RUN mkdir .next
RUN chown node:node .next

COPY --from=builder --chown=node:node /app/.next/standalone ./
COPY --from=builder --chown=node:node /app/.next/static ./.next/static

RUN cd /tmp && npm init -y && npm install sharp && cp -r node_modules/sharp /app/node_modules/sharp && rm -rf /tmp/node_modules /tmp/package.json /tmp/package-lock.json
ENV NEXT_SHARP_PATH=/app/node_modules/sharp

USER node

EXPOSE 3000

CMD ["node", "server.js"]

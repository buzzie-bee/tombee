ARG NODE_VERSION=24-slim

FROM node:${NODE_VERSION}

RUN corepack enable pnpm

WORKDIR /app

# Install project dependencies first
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN pnpm install --frozen-lockfile

# Install Playwright browsers and system deps
# Set PLAYWRIGHT_BROWSERS_PATH so browsers are in a shared location
# regardless of which user runs the container
ENV PLAYWRIGHT_BROWSERS_PATH=/ms-playwright
RUN pnpm exec playwright install --with-deps chromium firefox && \
  chmod -R 777 /ms-playwright

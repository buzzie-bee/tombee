import { test, expect } from './fixtures/base';
import { ALL_ROUTES, EXTERNAL_LINKS } from './helpers/routes';

// Sites that block automated requests (e.g. LinkedIn returns 999)
const BOT_BLOCKED_HOSTS = ['linkedin.com'];

function isBotBlocked(url: string): boolean {
  return BOT_BLOCKED_HOSTS.some((host) => url.includes(host));
}

test.describe('Internal link integrity', () => {
  for (const route of ALL_ROUTES) {
    test(`all links on ${route.name} (${route.path}) resolve`, async ({ page, request }) => {
      await page.goto(route.path);

      const anchors = page.locator('a[href^="/"]');
      const count = await anchors.count();
      const checked = new Set<string>();

      for (let i = 0; i < count; i++) {
        const href = await anchors.nth(i).getAttribute('href');
        if (!href || checked.has(href)) continue;
        checked.add(href);

        const response = await request.get(href);
        expect(
          response.status(),
          `Link ${href} on ${route.path} returned ${response.status()}`,
        ).toBeLessThan(400);
      }
    });
  }
});

test.describe('External link integrity', () => {
  test.describe.configure({ retries: 2 });

  for (const link of EXTERNAL_LINKS) {
    test(`${link.label} (${link.url}) is reachable`, async ({ request }) => {
      test.skip(!!process.env.CI && link.url.startsWith('http'), 'External links skipped in CI');
      test.skip(isBotBlocked(link.url), `${link.label} blocks automated requests`);

      const response = await request.get(link.url);
      expect(response.status(), `${link.label} returned ${response.status()}`).toBeLessThan(500);
    });
  }

  test('external links on all pages are reachable', async ({ page, request }) => {
    test.skip(!!process.env.CI, 'External links skipped in CI');
    test.slow();

    const checked = new Set<string>();
    const serverErrors: string[] = [];
    const unreachable: string[] = [];

    for (const route of ALL_ROUTES) {
      await page.goto(route.path, { waitUntil: 'domcontentloaded' });

      const anchors = page.locator('a[href^="http"]');
      const count = await anchors.count();

      for (let i = 0; i < count; i++) {
        const href = await anchors.nth(i).getAttribute('href');
        if (!href || checked.has(href) || isBotBlocked(href)) continue;
        checked.add(href);

        try {
          const response = await request.get(href, { timeout: 10_000 });
          if (response.status() >= 500) {
            serverErrors.push(`${href} on ${route.path} returned ${response.status()}`);
          }
        } catch {
          // Connection failures are logged but don't fail the test --
          // external sites may be temporarily down
          unreachable.push(`${href} on ${route.path}`);
        }
      }
    }

    if (unreachable.length > 0) {
      console.warn(`Unreachable external links (may be temporary):\n${unreachable.join('\n')}`);
    }

    expect(
      serverErrors,
      `External links returning server errors:\n${serverErrors.join('\n')}`,
    ).toHaveLength(0);
  });
});

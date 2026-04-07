import { test, expect } from './fixtures/base';
import { ALL_ROUTES } from './helpers/routes';

test.describe('Page rendering', () => {
  for (const route of ALL_ROUTES) {
    test(`${route.name} (${route.path}) loads successfully`, async ({ page, consoleCollector }) => {
      const response = await page.goto(route.path);

      expect(response?.status()).toBe(200);
      await expect(page.locator('h1').first()).toBeVisible();
      await expect(page.locator('#main-content')).toBeAttached();
      await expect(page).toHaveTitle(/Tom Bee/);

      expect(
        consoleCollector.errors,
        `Console errors on ${route.path}:\n${consoleCollector.errors.join('\n')}`,
      ).toHaveLength(0);
    });
  }
});

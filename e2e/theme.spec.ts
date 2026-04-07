import { test, expect } from './fixtures/base';

// Theme functionality is viewport-independent; use desktop viewport for consistent toggle access
test.use({ viewport: { width: 1280, height: 720 } });

test.describe('Theme toggle', () => {
  test('toggles between light and dark mode', async ({ page }) => {
    await page.emulateMedia({ colorScheme: 'light' });
    await page.goto('/');

    const html = page.locator('html');
    const toggle = page.locator('button[aria-label="Toggle theme"]').first();

    await expect(html).toHaveClass(/light/);

    await toggle.click();
    await expect(html).toHaveClass(/dark/);

    await toggle.click();
    await expect(html).toHaveClass(/light/);
  });

  test('theme persists across page reload', async ({ page }) => {
    await page.emulateMedia({ colorScheme: 'light' });
    await page.goto('/');

    const toggle = page.locator('button[aria-label="Toggle theme"]').first();

    await toggle.click();
    await expect(page.locator('html')).toHaveClass(/dark/);

    await page.reload();
    await expect(page.locator('html')).toHaveClass(/dark/);
  });
});

test.describe('System preference respect', () => {
  test('respects prefers-color-scheme: dark', async ({ page }) => {
    await page.emulateMedia({ colorScheme: 'dark' });
    await page.goto('/');

    await expect(page.locator('html')).toHaveClass(/dark/);
  });

  test('respects prefers-color-scheme: light', async ({ page }) => {
    await page.emulateMedia({ colorScheme: 'light' });
    await page.goto('/');

    await expect(page.locator('html')).toHaveClass(/light/);
  });

  test('manual toggle overrides system preference', async ({ page }) => {
    await page.emulateMedia({ colorScheme: 'light' });
    await page.goto('/');

    await expect(page.locator('html')).toHaveClass(/light/);

    // Toggle to dark despite system preferring light
    await page.locator('button[aria-label="Toggle theme"]').first().click();
    await expect(page.locator('html')).toHaveClass(/dark/);

    // Reload -- manual choice should persist over system preference
    await page.reload();
    await expect(page.locator('html')).toHaveClass(/dark/);
  });
});

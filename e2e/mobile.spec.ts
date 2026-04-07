import { test, expect } from './fixtures/base';
import { ALL_ROUTES } from './helpers/routes';

// Use Pixel 5 viewport (393px wide) -- below the sm (640px) breakpoint
test.use({ viewport: { width: 393, height: 851 }, isMobile: true });

// The mobile menu is a direct child div of <header> (not inside <nav>)
const mobileMenuLink = (page: import('@playwright/test').Page, text: string) =>
  page.locator('header > div').locator(`a:has-text("${text}")`);

test.describe('Mobile navigation', () => {
  test('hamburger menu is visible, desktop nav is hidden', async ({ page }) => {
    await page.goto('/');

    const hamburger = page.locator('button[aria-label="Open menu"]');
    await expect(hamburger).toBeVisible();

    // Desktop nav links should not be visible at mobile viewport
    const desktopLinks = page.locator('nav[aria-label="Main"] a:has-text("Projects")');
    await expect(desktopLinks).toBeHidden();
  });

  test('hamburger menu opens and closes', async ({ page }) => {
    await page.goto('/');

    const menuButton = page.locator('header button[aria-expanded]');
    await expect(menuButton).toHaveAttribute('aria-expanded', 'false');

    // Open
    await menuButton.click();
    await expect(menuButton).toHaveAttribute('aria-expanded', 'true');
    await expect(mobileMenuLink(page, 'Projects')).toBeVisible();

    // Close
    await menuButton.click();
    await expect(menuButton).toHaveAttribute('aria-expanded', 'false');
  });

  test('menu links navigate and close the menu', async ({ page }) => {
    await page.goto('/');

    // Open menu
    await page.locator('button[aria-label="Open menu"]').click();

    // Click a mobile menu link
    await mobileMenuLink(page, 'Projects').click();
    await expect(page).toHaveURL('/projects');

    // Menu should be closed after navigation
    const menuButton = page.locator('header button[aria-expanded]');
    await expect(menuButton).toHaveAttribute('aria-expanded', 'false');
  });
});

test.describe('Mobile layout - no horizontal overflow', () => {
  for (const route of ALL_ROUTES) {
    test(`${route.name} (${route.path}) has no overflow`, async ({ page }) => {
      await page.goto(route.path, { waitUntil: 'domcontentloaded' });

      const hasOverflow = await page.evaluate(() => {
        return document.documentElement.scrollWidth > document.documentElement.clientWidth;
      });

      expect(hasOverflow, `Horizontal overflow detected on ${route.path}`).toBe(false);
    });
  }
});

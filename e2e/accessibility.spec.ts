import { test, expect } from './fixtures/base';
import { ALL_ROUTES } from './helpers/routes';

test.describe('Accessibility - axe-core WCAG 2.1 AA', () => {
  for (const route of ALL_ROUTES) {
    test(`${route.name} (${route.path}) has no violations`, async ({ page, axeCheck }) => {
      await page.goto(route.path, { waitUntil: 'domcontentloaded' });
      // Exclude code blocks -- shiki themes handle their own contrast
      await axeCheck({ exclude: ['pre[data-language]', 'pre code'] });
    });
  }
});

test.describe('Keyboard navigation', () => {
  test('skip link is the first focusable element and works', async ({ page }) => {
    await page.goto('/');

    await page.keyboard.press('Tab');
    const skipLink = page.locator('a.skip-link');
    await expect(skipLink).toBeFocused();
    await expect(skipLink).toHaveText('Skip to main content');

    await page.keyboard.press('Enter');
    // Skip link navigates to #main-content anchor
    await expect(page).toHaveURL('/#main-content');
  });

  test('nav links are keyboard-navigable', async ({ page, isMobile }) => {
    test.skip(!!isMobile, 'Desktop nav is hidden on mobile');
    await page.goto('/');

    // Tab past skip link to reach nav
    await page.keyboard.press('Tab'); // skip link
    await page.keyboard.press('Tab'); // logo link

    const logo = page.locator('header a[href="/"]');
    await expect(logo).toBeFocused();

    // Tab through the nav links
    const expectedLabels = ['Projects', 'Blog', 'Contact'];
    for (const label of expectedLabels) {
      await page.keyboard.press('Tab');
      const focused = page.locator(`header a:has-text("${label}")`).first();
      await expect(focused).toBeFocused();
    }
  });

  test('contact form fields have correct tab order', async ({ page }) => {
    await page.goto('/contact');

    // Focus the name input and tab through the form
    await page.locator('#name').focus();
    await expect(page.locator('#name')).toBeFocused();

    await page.keyboard.press('Tab');
    await expect(page.locator('#email')).toBeFocused();

    await page.keyboard.press('Tab');
    await expect(page.locator('#message')).toBeFocused();

    await page.keyboard.press('Tab');
    await expect(page.locator('button[type="submit"]')).toBeFocused();
  });
});

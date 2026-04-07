import { test, expect } from './fixtures/base';

test.describe('Contact form', () => {
  test('required fields prevent empty submission', async ({ page }) => {
    await page.goto('/contact');

    await page.locator('button[type="submit"]').click();

    // HTML5 required validation should prevent submission -- form should still be visible
    await expect(page.locator('form')).toBeVisible();
    await expect(page.locator('[role="status"]')).not.toBeVisible();
  });

  test('invalid email is rejected', async ({ page }) => {
    await page.goto('/contact');

    await page.locator('#name').fill('Test User');
    await page.locator('#email').fill('not-an-email');
    await page.locator('#message').fill('Hello');
    await page.locator('button[type="submit"]').click();

    // HTML5 email validation should prevent submission
    await expect(page.locator('form')).toBeVisible();
    await expect(page.locator('[role="status"]')).not.toBeVisible();
  });

  test('successful submission shows success message', async ({ page }) => {
    await page.route('**/api/contact', (route) =>
      route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ success: true }),
      }),
    );

    await page.goto('/contact');

    await page.locator('#name').fill('Test User');
    await page.locator('#email').fill('test@example.com');
    await page.locator('#message').fill('Hello from Playwright');
    await page.locator('button[type="submit"]').click();

    // Success message should appear
    await expect(page.locator('[role="status"]')).toBeVisible();
    await expect(page.locator('text=Message sent!')).toBeVisible();

    // "Send another message" should reset the form
    await page.locator('text=Send another message').click();
    await expect(page.locator('form')).toBeVisible();
  });

  test('failed submission shows error message', async ({ page }) => {
    await page.route('**/api/contact', (route) =>
      route.fulfill({
        status: 500,
        contentType: 'application/json',
        body: JSON.stringify({ error: 'Failed to send message.' }),
      }),
    );

    await page.goto('/contact');

    await page.locator('#name').fill('Test User');
    await page.locator('#email').fill('test@example.com');
    await page.locator('#message').fill('Hello');
    await page.locator('button[type="submit"]').click();

    await expect(page.locator('p[role="alert"]')).toBeVisible();
    await expect(page.locator('p[role="alert"]')).toContainText('Failed to send message');
  });

  test('message is prefilled from query parameter', async ({ page }) => {
    await page.goto('/contact?message=Hello%20from%20link');

    await expect(page.locator('#message')).toHaveValue('Hello from link');
  });
});

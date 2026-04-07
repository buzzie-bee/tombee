import { test, expect } from './fixtures/base';

test.use({ viewport: { width: 1280, height: 720 } });

test.describe('Desktop navigation', () => {
  test('logo navigates to home', async ({ page }) => {
    await page.goto('/projects');
    await page.locator('header a[href="/"]').click();
    await expect(page).toHaveURL('/');
  });

  test('nav links navigate to correct pages', async ({ page }) => {
    await page.goto('/');

    const links = [
      { label: 'Projects', path: '/projects' },
      { label: 'Blog', path: '/blog' },
      { label: 'Contact', path: '/contact' },
    ];

    for (const link of links) {
      await page.locator(`header nav a:has-text("${link.label}")`).first().click();
      await expect(page).toHaveURL(link.path);
    }
  });

  test('CV link opens in new tab', async ({ page }) => {
    await page.goto('/');

    const cvLink = page.locator('header a[href="/cv.pdf"]');
    await expect(cvLink).toHaveAttribute('target', '_blank');
    await expect(cvLink).toHaveAttribute('rel', /noopener/);
  });

  test('active nav link shows aria-current', async ({ page }) => {
    await page.goto('/projects');

    const projectsLink = page.locator('header nav a:has-text("Projects")').first();
    await expect(projectsLink).toHaveAttribute('aria-current', 'page');

    const blogLink = page.locator('header nav a:has-text("Blog")').first();
    await expect(blogLink).not.toHaveAttribute('aria-current', 'page');
  });
});

test.describe('Footer', () => {
  test('footer links are present and correct', async ({ page }) => {
    await page.goto('/');

    const footer = page.locator('footer');
    await expect(footer.locator('a:has-text("Projects")')).toHaveAttribute('href', '/projects');
    await expect(footer.locator('a:has-text("Blog")')).toHaveAttribute('href', '/blog');
    await expect(footer.locator('a:has-text("Contact")')).toHaveAttribute('href', '/contact');
    await expect(footer.locator('a:has-text("GitHub")')).toHaveAttribute(
      'href',
      'https://github.com/buzzie-bee',
    );
    await expect(footer.locator('a:has-text("LinkedIn")')).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/tombee',
    );
  });

  test('external footer links open in new tabs', async ({ page }) => {
    await page.goto('/');

    const footer = page.locator('footer');
    await expect(footer.locator('a:has-text("GitHub")')).toHaveAttribute('target', '_blank');
    await expect(footer.locator('a:has-text("LinkedIn")')).toHaveAttribute('target', '_blank');
  });
});

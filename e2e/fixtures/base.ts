import { test as base, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

type ConsoleCollector = {
  errors: string[];
  stop: () => void;
};

export const test = base.extend<{
  axeCheck: (options?: { exclude?: string[] }) => Promise<void>;
  consoleCollector: ConsoleCollector;
}>({
  axeCheck: async ({ page }, use) => {
    const check = async (options?: { exclude?: string[] }) => {
      const builder = new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa']);

      if (options?.exclude) {
        for (const selector of options.exclude) {
          builder.exclude(selector);
        }
      }

      const results = await builder.analyze();

      const violations = results.violations.map(
        (v) =>
          `[${v.impact}] ${v.id}: ${v.description}\n` +
          v.nodes.map((n) => `  - ${n.html}\n    ${n.failureSummary}`).join('\n'),
      );

      expect(
        violations,
        `Accessibility violations found:\n${violations.join('\n\n')}`,
      ).toHaveLength(0);
    };

    await use(check);
  },

  consoleCollector: async ({ page }, use) => {
    const errors: string[] = [];

    const handler = (msg: { type: () => string; text: () => string }) => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    };

    page.on('console', handler);

    await use({
      errors,
      stop: () => page.off('console', handler),
    });
  },
});

export { expect };

import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import prettier from 'eslint-config-prettier';

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    // Enable jsx-a11y recommended rules (plugin already registered by eslint-config-next)
    rules: jsxA11y.flatConfigs.recommended.rules,
  },
  {
    // MDX component wrappers spread props (including children) so the linter
    // can't statically see the heading content or label association.
    files: [
      'src/features/blog/blog-mdx-content.tsx',
      'src/features/projects/detail/project-mdx-content.tsx',
    ],
    rules: {
      'jsx-a11y/heading-has-content': 'off',
    },
  },
  {
    // shadcn/ui Label receives htmlFor via spread props at the call site.
    files: ['src/components/ui/label.tsx'],
    rules: {
      'jsx-a11y/label-has-associated-control': 'off',
    },
  },
  {
    // VideoPlayer is used for silent project demo videos without captions.
    files: ['src/components/common/video-player.tsx'],
    rules: {
      'jsx-a11y/media-has-caption': 'off',
    },
  },
  {
    // Playwright fixtures use a `use` function that triggers the React hooks linter.
    files: ['e2e/**/*.ts'],
    rules: {
      'react-hooks/rules-of-hooks': 'off',
    },
  },
  prettier,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
    'archive/**',
  ]),
]);

export default eslintConfig;

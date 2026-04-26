import { Buffer } from 'node:buffer';
import { createRequire } from 'node:module';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import type { Element, ElementContent, Root, RootContent } from 'hast';
import { fromHtmlIsomorphic } from 'hast-util-from-html-isomorphic';
import { createMermaidRenderer, type RenderOptions } from 'mermaid-isomorphic';
import { visit } from 'unist-util-visit';

interface ThemeVariant {
  /** Class added to the wrapper div for this variant — used by CSS to toggle visibility. */
  className: string;
  mermaidConfig: NonNullable<RenderOptions['mermaidConfig']>;
}

interface RehypeMermaidThemedOptions {
  themes: ThemeVariant[];
  /** URL to a CSS file loaded into mermaid-isomorphic's render page (e.g. for custom fonts). */
  css?: string;
}

interface MermaidBlock {
  parent: { children: RootContent[] };
  index: number;
  code: string;
}

/**
 * Custom rehype plugin that renders each mermaid code block once per theme
 * variant and wraps the resulting SVGs in a container the page CSS can toggle
 * via the `.dark` class. Replaces `rehype-mermaid`, which only supports a
 * single render and OS-level `prefers-color-scheme` for dark mode.
 */
export function rehypeMermaidThemed(options: RehypeMermaidThemedOptions) {
  const { themes, css } = options;

  return async (tree: Root) => {
    const blocks: MermaidBlock[] = [];

    visit(tree, 'element', (node, index, parent) => {
      if (node.tagName !== 'pre') return;
      const codeChild = node.children[0];
      if (!codeChild || codeChild.type !== 'element' || codeChild.tagName !== 'code') return;
      const className = codeChild.properties.className;
      const classList = Array.isArray(className) ? className : [];
      if (!classList.includes('language-mermaid')) return;
      const text = codeChild.children[0];
      if (!text || text.type !== 'text') return;
      if (!parent || index === undefined) return;
      blocks.push({ parent: parent as { children: RootContent[] }, index, code: text.value });
    });

    if (blocks.length === 0) return;

    const renderer = createMermaidRenderer();
    const diagrams = blocks.map((b) => b.code);

    const allResults = await Promise.all(
      themes.map((theme) =>
        renderer(diagrams, {
          mermaidConfig: theme.mermaidConfig,
          // Mermaid bakes its theme CSS into the SVG keyed on `#mermaid-N`,
          // and those styles cascade to every other SVG with the same id on
          // the page. Without a per-theme prefix the dark variant's rules
          // override the light variant's fills (and vice versa).
          prefix: theme.className,
          ...(css ? { css } : {}),
        }),
      ),
    );

    // Replace blocks back-to-front so earlier indexes stay valid.
    for (let i = blocks.length - 1; i >= 0; i--) {
      const block = blocks[i];
      const variants: ElementContent[] = themes.map((theme, themeIndex) => {
        const result = allResults[themeIndex][i];
        const children: ElementContent[] =
          result.status === 'fulfilled'
            ? (fromHtmlIsomorphic(result.value.svg, { fragment: true })
                .children as ElementContent[])
            : [{ type: 'text', value: 'Mermaid diagram failed to render.' }];
        return {
          type: 'element',
          tagName: 'div',
          properties: { className: [theme.className] },
          children,
        };
      });

      const wrapper: Element = {
        type: 'element',
        tagName: 'div',
        properties: { className: ['mermaid-themed'] },
        children: variants,
      };

      block.parent.children[block.index] = wrapper;
    }
  };
}

/**
 * Build a `data:` URL containing a stylesheet that registers Geist Mono via
 * @font-face, pointing at the woff2 shipped by the `geist` npm package.
 * mermaid-isomorphic loads this CSS into its build-time browser so text
 * measurement happens against the same font that renders on the live page.
 *
 * A data URL avoids a temp file on disk — Playwright's network stack inside
 * `next dev` rejected file:// stylesheet fetches as NetworkError. The font
 * src itself stays a file:// URL because data URLs can't reference woff2
 * binaries efficiently.
 */
let cachedFontCssUrl: string | null = null;
export function buildGeistMonoCssUrl(): string {
  if (cachedFontCssUrl) return cachedFontCssUrl;
  // Anchor the require at the project root rather than `import.meta.url`.
  // Under Turbopack `import.meta.url` resolves to a virtual path with a
  // `[project]` placeholder segment, which leaks into the resolved font file
  // path and produces a URL the build-time browser can't fetch.
  const require = createRequire(path.join(process.cwd(), 'package.json'));
  // Resolve via an entry point that geist's `exports` map exposes, then walk
  // to the font file. Asking for `geist/package.json` works at the Node level
  // but Turbopack's static analyser rejects it because `package.json` isn't
  // in the exports map.
  const monoEntry = require.resolve('geist/font/mono');
  const fontFile = path.join(path.dirname(monoEntry), 'fonts/geist-mono/GeistMono-Regular.woff2');
  const fontUrl = pathToFileURL(fontFile).toString();
  const cssBody = `@font-face {
  font-family: 'Geist Mono';
  font-style: normal;
  font-weight: 400;
  font-display: block;
  src: url('${fontUrl}') format('woff2');
}`;
  cachedFontCssUrl = `data:text/css;base64,${Buffer.from(cssBody).toString('base64')}`;
  return cachedFontCssUrl;
}

import type { Root } from 'mdast';
import { visit } from 'unist-util-visit';

/**
 * Remark plugin that throws at build time if a blog MDX file contains a
 * raw markdown image (`![alt](src)`). Forces use of the `<PostImage />`
 * component, which applies the correct `sizes` hint and Next.js image
 * optimization.
 */
export function remarkNoMarkdownImages() {
  return (tree: Root, file: { path?: string }) => {
    visit(tree, 'image', (node) => {
      const location = file.path ? ` in ${file.path}` : '';
      const line = node.position?.start?.line;
      const lineInfo = line ? ` (line ${line})` : '';
      throw new Error(
        `Raw markdown image found${location}${lineInfo}: "![${node.alt ?? ''}](${node.url})". ` +
          `Use <PostImage src="..." width={...} height={...} alt="..." /> instead ` +
          `so the image gets Next.js optimization and the correct sizes hint.`,
      );
    });
  };
}

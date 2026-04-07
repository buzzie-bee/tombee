import { readdirSync } from 'fs';
import { join } from 'path';

const contentDir = join(__dirname, '..', '..', 'content');

function getSlugs(dir: string): string[] {
  return readdirSync(join(contentDir, dir))
    .filter((f) => f.endsWith('.mdx') && !f.startsWith('_'))
    .map((f) => f.replace('.mdx', ''));
}

interface RouteEntry {
  path: string;
  name: string;
}

export const STATIC_ROUTES: RouteEntry[] = [
  { path: '/', name: 'Home' },
  { path: '/projects', name: 'Projects' },
  { path: '/blog', name: 'Blog' },
  { path: '/contact', name: 'Contact' },
];

export const PROJECT_ROUTES: RouteEntry[] = getSlugs('projects').map((slug) => ({
  path: `/projects/${slug}`,
  name: `Project: ${slug}`,
}));

export const BLOG_ROUTES: RouteEntry[] = getSlugs('blog').map((slug) => ({
  path: `/blog/${slug}`,
  name: `Blog: ${slug}`,
}));

export const ALL_ROUTES: RouteEntry[] = [...STATIC_ROUTES, ...PROJECT_ROUTES, ...BLOG_ROUTES];

export const EXTERNAL_LINKS = [
  { label: 'GitHub', url: 'https://github.com/buzzie-bee' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/tombee' },
  { label: 'CV', url: '/cv.pdf' },
];

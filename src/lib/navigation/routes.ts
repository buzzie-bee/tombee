import type { Route } from 'next';

export const appPaths = {
  home: '/',
  projects: '/projects',
  blog: '/blog',
  contact: '/contact',
} as const;

export type AppRoute =
  | { name: 'home' }
  | { name: 'projects' }
  | { name: 'projectDetail'; slug: string }
  | { name: 'blog' }
  | { name: 'blogPost'; slug: string }
  | { name: 'contact' };

export function toHref(route: AppRoute): Route {
  switch (route.name) {
    case 'home':
      return appPaths.home;
    case 'projects':
      return appPaths.projects;
    case 'projectDetail':
      return `/projects/${route.slug}` as Route;
    case 'blog':
      return appPaths.blog;
    case 'blogPost':
      return `/blog/${route.slug}` as Route;
    case 'contact':
      return appPaths.contact;
  }
}

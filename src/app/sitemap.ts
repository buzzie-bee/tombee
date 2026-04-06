import type { MetadataRoute } from 'next';
import { getProjectSlugs } from '@/lib/content/projects';
import { getBlogSlugs } from '@/lib/content/blog';

const siteUrl = 'https://tombee.io';

export default function sitemap(): MetadataRoute.Sitemap {
  const projectEntries = getProjectSlugs().map((slug) => ({
    url: `${siteUrl}/projects/${slug}`,
    lastModified: new Date(),
  }));

  const blogEntries = getBlogSlugs().map((slug) => ({
    url: `${siteUrl}/blog/${slug}`,
    lastModified: new Date(),
  }));

  return [
    { url: siteUrl, lastModified: new Date() },
    { url: `${siteUrl}/projects`, lastModified: new Date() },
    { url: `${siteUrl}/blog`, lastModified: new Date() },
    { url: `${siteUrl}/contact`, lastModified: new Date() },
    ...projectEntries,
    ...blogEntries,
  ];
}

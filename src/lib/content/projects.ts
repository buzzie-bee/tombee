import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import type { ProjectCategory, ProjectStatus, ProjectLink } from '@/features/projects/types';

export interface ProjectFrontmatter {
  title: string;
  description: string;
  category: ProjectCategory;
  status: ProjectStatus;
  tags: string[];
  year: string;
  image?: string;
  video?: string;
  featured?: boolean;
  sortOrder?: number;
  links?: ProjectLink[];
}

export interface ProjectContent {
  slug: string;
  frontmatter: ProjectFrontmatter;
  content: string;
}

const PROJECTS_DIR = path.join(process.cwd(), 'content/projects');

export function getProjectSlugs(): string[] {
  return fs
    .readdirSync(PROJECTS_DIR)
    .filter((file) => file.endsWith('.mdx') && !file.startsWith('_'))
    .map((file) => file.replace(/\.mdx$/, ''));
}

export function getProjectBySlug(slug: string): ProjectContent | null {
  const filePath = path.join(PROJECTS_DIR, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  return {
    slug,
    frontmatter: data as ProjectFrontmatter,
    content,
  };
}

export function getAllProjects(): ProjectContent[] {
  return getProjectSlugs()
    .map((slug) => getProjectBySlug(slug))
    .filter((p): p is ProjectContent => p !== null)
    .sort((a, b) => {
      const yearA = a.frontmatter.year.split('–')[0].trim();
      const yearB = b.frontmatter.year.split('–')[0].trim();
      if (yearA !== yearB) return yearB.localeCompare(yearA);
      const orderA = a.frontmatter.sortOrder ?? 99;
      const orderB = b.frontmatter.sortOrder ?? 99;
      return orderA - orderB;
    });
}

export function getFeaturedProjects(): ProjectContent[] {
  return getAllProjects().filter((p) => p.frontmatter.featured);
}

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface BlogFrontmatter {
  title: string;
  summary: string;
  date: string;
  published?: boolean;
}

export interface BlogPost {
  slug: string;
  frontmatter: BlogFrontmatter;
  content: string;
}

const BLOG_DIR = path.join(process.cwd(), 'content/blog');

export function getBlogSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith('.mdx') && !file.startsWith('_'))
    .map((file) => file.replace(/\.mdx$/, ''));
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  return {
    slug,
    frontmatter: data as BlogFrontmatter,
    content,
  };
}

export function getAllBlogPosts(): BlogPost[] {
  return getBlogSlugs()
    .map((slug) => getBlogPostBySlug(slug))
    .filter((p): p is BlogPost => p !== null)
    .filter((p) => p.frontmatter.published !== false)
    .sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime());
}

export function getRecentBlogPosts(count: number = 3): BlogPost[] {
  return getAllBlogPosts().slice(0, count);
}

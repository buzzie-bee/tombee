import type { Metadata } from 'next';
import Link from 'next/link';
import { toHref } from '@/lib/navigation/routes';
import { getAllBlogPosts } from '@/lib/content/blog';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Thoughts on software engineering, architecture, and building products.',
};

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <main className="flex-1">
      <section className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <div className="flex flex-col gap-2">
          <div className="h-1 w-12 rounded-full bg-primary" />
          <h1 className="font-mono text-4xl font-bold tracking-tight md:text-5xl">Blog</h1>
          <p className="mt-2 max-w-md text-lg text-muted-foreground">
            Thoughts on software engineering, architecture, and building products.
          </p>
        </div>

        <div className="mt-12 flex flex-col divide-y divide-border">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={toHref({ name: 'blogPost', slug: post.slug })}
              className="group flex flex-col gap-1 py-6 first:pt-0 last:pb-0"
            >
              <div className="flex items-baseline justify-between gap-4">
                <h2 className="font-mono text-lg font-semibold tracking-tight group-hover:text-primary">
                  {post.frontmatter.title}
                </h2>
                <time className="shrink-0 font-mono text-xs text-muted-foreground">
                  {post.frontmatter.date}
                </time>
              </div>
              <p className="text-sm text-muted-foreground">{post.frontmatter.summary}</p>
            </Link>
          ))}
        </div>

        {posts.length === 0 && (
          <p className="mt-12 text-muted-foreground">No posts yet. Check back soon.</p>
        )}
      </section>
    </main>
  );
}

import Link from 'next/link';
import { toHref } from '@/lib/navigation/routes';
import { getRecentBlogPosts } from '@/lib/content/blog';

export function RecentPosts() {
  const posts = getRecentBlogPosts(3);

  if (posts.length === 0) return null;

  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="flex items-end justify-between gap-4">
        <div className="flex flex-col gap-2">
          <div className="h-1 w-12 rounded-full bg-primary" />
          <h2 className="font-mono text-2xl font-bold tracking-tight md:text-3xl">
            Recent Posts
          </h2>
        </div>
        <Link
          href={toHref({ name: 'blog' })}
          className="font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          View all →
        </Link>
      </div>

      <div className="mt-10 flex flex-col divide-y divide-border">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={toHref({ name: 'blogPost', slug: post.slug })}
            className="group flex flex-col gap-1 py-6 first:pt-0 last:pb-0"
          >
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="font-mono text-lg font-semibold tracking-tight group-hover:text-primary">
                {post.frontmatter.title}
              </h3>
              <time className="shrink-0 font-mono text-xs text-muted-foreground">
                {post.frontmatter.date}
              </time>
            </div>
            <p className="text-sm text-muted-foreground">{post.frontmatter.summary}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

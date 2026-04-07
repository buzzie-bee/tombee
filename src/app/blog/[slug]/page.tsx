import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { toHref } from '@/lib/navigation/routes';
import { getBlogPostBySlug, getBlogSlugs } from '@/lib/content/blog';
import { BlogMdxContent } from '@/features/blog/blog-mdx-content';
import { BlogCta } from '@/features/blog/blog-cta';

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) return {};

  return {
    title: post.frontmatter.title,
    description: post.frontmatter.summary,
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.summary,
      type: 'article',
      publishedTime: post.frontmatter.date,
    },
  };
}

export default async function BlogPostPage({ params }: { params: Params }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post || post.frontmatter.published === false) {
    notFound();
  }

  return (
    <main id="main-content" className="flex-1">
      <article className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <Link
          href={toHref({ name: 'blog' })}
          className="font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          ← Back to blog
        </Link>

        <div className="mt-8 flex flex-col gap-3">
          <time className="font-mono text-sm text-muted-foreground">
            {post.frontmatter.date}
          </time>
          <h1 className="font-mono text-3xl font-bold tracking-tight md:text-4xl">
            {post.frontmatter.title}
          </h1>
          <p className="text-lg text-muted-foreground">{post.frontmatter.summary}</p>
        </div>

        <div className="mt-12">
          <BlogMdxContent source={post.content} />
        </div>

        <div className="mt-12">
          <BlogCta />
        </div>
      </article>
    </main>
  );
}

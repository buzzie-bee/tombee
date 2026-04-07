import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypePrettyCode from 'rehype-pretty-code';
import { VideoPlayer } from '@/components/common/video-player';
import { PostImage } from './post-image';
import { remarkNoMarkdownImages } from './remark-no-markdown-images';

const components = {
  Video: VideoPlayer,
  PostImage,
  h2: (props: React.ComponentProps<'h2'>) => (
    <h2 className="mt-10 mb-4 font-mono text-xl font-semibold tracking-tight" {...props} />
  ),
  h3: (props: React.ComponentProps<'h3'>) => (
    <h3 className="mt-8 mb-3 font-mono text-lg font-semibold tracking-tight" {...props} />
  ),
  p: (props: React.ComponentProps<'p'>) => (
    <p className="mb-4 leading-relaxed text-foreground/85" {...props} />
  ),
  ul: (props: React.ComponentProps<'ul'>) => (
    <ul className="mb-4 flex flex-col gap-2" {...props} />
  ),
  ol: (props: React.ComponentProps<'ol'>) => (
    <ol className="mb-4 flex flex-col gap-2 list-decimal pl-6" {...props} />
  ),
  li: (props: React.ComponentProps<'li'>) => (
    <li className="text-foreground/85 leading-relaxed" {...props} />
  ),
  a: ({ children, ...props }: React.ComponentProps<'a'>) => (
    <a
      className="text-primary underline underline-offset-4 hover:text-primary/80"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {children}
      <span className="sr-only"> (opens in new tab)</span>
    </a>
  ),
  blockquote: (props: React.ComponentProps<'blockquote'>) => (
    <blockquote
      className="my-6 border-l-2 border-primary pl-4 text-muted-foreground italic"
      {...props}
    />
  ),
  img: (props: React.ComponentProps<'img'>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img className="my-6 w-full rounded-lg" alt={props.alt ?? ''} {...props} />
  ),
  pre: (props: React.ComponentProps<'pre'>) => (
    <pre className="my-6" {...props} />
  ),
  code: (props: React.ComponentProps<'code'>) => {
    const isInline = typeof props.children === 'string' && !props.className;
    if (isInline) {
      return (
        <code
          className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm text-foreground"
          {...props}
        />
      );
    }
    return <code {...props} />;
  },
  hr: () => <hr className="my-8 border-border" />,
};

const rehypePrettyCodeOptions = {
  theme: {
    dark: 'dark-plus',
    light: 'light-plus',
  },
  keepBackground: false,
};

export function BlogMdxContent({ source }: { source: string }) {
  return (
    <article className="prose-custom">
      <MDXRemote
        source={source}
        components={components}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkNoMarkdownImages],
            rehypePlugins: [[rehypePrettyCode, rehypePrettyCodeOptions]],
          },
        }}
      />
    </article>
  );
}

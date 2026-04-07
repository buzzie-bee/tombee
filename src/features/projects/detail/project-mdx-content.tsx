import { MDXRemote } from 'next-mdx-remote/rsc';
import { VideoPlayer } from '@/components/common/video-player';

const components = {
  Video: VideoPlayer,
  h2: (props: React.ComponentProps<'h2'>) => (
    <h2 className="mt-8 mb-3 font-mono text-xl font-semibold tracking-tight" {...props} />
  ),
  h3: (props: React.ComponentProps<'h3'>) => (
    <h3 className="mt-6 mb-2 font-mono text-lg font-semibold tracking-tight" {...props} />
  ),
  p: (props: React.ComponentProps<'p'>) => (
    <p className="mb-4 text-muted-foreground leading-relaxed" {...props} />
  ),
  ul: (props: React.ComponentProps<'ul'>) => (
    <ul className="mb-4 columns-1 gap-x-8 sm:columns-2" {...props} />
  ),
  li: (props: React.ComponentProps<'li'>) => (
    <li className="mb-2 flex break-inside-avoid items-start gap-2.5 text-muted-foreground">
      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
      <span>{props.children}</span>
    </li>
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
  img: (props: React.ComponentProps<'img'>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img className="my-6 w-full rounded-lg" alt={props.alt ?? ''} {...props} />
  ),
};

export function ProjectMdxContent({ source }: { source: string }) {
  return (
    <div className="prose-custom">
      <MDXRemote source={source} components={components} />
    </div>
  );
}

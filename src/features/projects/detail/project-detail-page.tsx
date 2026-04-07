import Image from 'next/image';
import Link from 'next/link';
import { toHref } from '@/lib/navigation/routes';
import { Badge } from '@/components/ui/badge';
import { VideoPlayer } from '@/components/common/video-player';
import { ProjectMdxContent } from './project-mdx-content';
import { ProjectNav } from './project-nav';
import { ProjectCta } from './project-cta';
import type { ProjectContent } from '@/lib/content/projects';

const CATEGORY_LABELS: Record<string, string> = {
  personal: 'Personal',
  professional: 'Professional',
  'open-source': 'Open Source',
  startup: 'Startup',
};

const STATUS_LABELS: Record<string, string> = {
  active: 'Active',
  completed: 'Completed',
  archived: 'Archived',
};

export function ProjectDetailPage({ project }: { project: ProjectContent }) {
  const { frontmatter, content, slug } = project;

  return (
    <section className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      <Link
        href={toHref({ name: 'projects' })}
        className="font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        ← Back to projects
      </Link>

      <div className="mt-8 flex flex-col gap-4">
        <div className="flex items-baseline justify-between gap-4">
          <h1 className="font-mono text-4xl font-bold tracking-tight md:text-5xl">
            {frontmatter.title}
          </h1>
          <span className="shrink-0 font-mono text-sm text-muted-foreground">
            {frontmatter.year}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Badge variant="secondary" className="font-mono">
            {CATEGORY_LABELS[frontmatter.category]}
          </Badge>
          <Badge variant="outline" className="font-mono">
            {STATUS_LABELS[frontmatter.status]}
          </Badge>
        </div>

        <p className="text-lg text-muted-foreground">{frontmatter.description}</p>

        {frontmatter.links && frontmatter.links.length > 0 && (
          <div className="flex gap-3">
            {frontmatter.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-8 cursor-pointer items-center justify-center rounded-4xl border border-border bg-input/30 px-3 font-mono text-sm transition-colors hover:bg-input/50 hover:text-foreground"
              >
                {link.label} ↗<span className="sr-only"> (opens in new tab)</span>
              </a>
            ))}
          </div>
        )}
      </div>

      {frontmatter.video ? (
        <VideoPlayer
          src={frontmatter.video}
          poster={frontmatter.image}
          className="mt-10 w-full rounded-lg"
        />
      ) : frontmatter.image ? (
        <div className="relative mt-10 aspect-video w-full overflow-hidden rounded-lg">
          <Image
            src={frontmatter.image}
            alt={frontmatter.title}
            fill
            sizes="(min-width: 768px) 768px, 100vw"
            priority
            className="object-cover"
          />
        </div>
      ) : (
        <div className="mt-10 flex aspect-video w-full items-center justify-center rounded-lg bg-muted">
          <span className="font-mono text-sm text-muted-foreground">No preview available</span>
        </div>
      )}

      <div className="mt-12">
        <ProjectMdxContent source={content} />
      </div>

      <div className="mt-12 flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <div className="flex flex-wrap gap-2">
            {frontmatter.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="font-mono">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        <ProjectNav currentSlug={slug} />
        <ProjectCta projectTitle={frontmatter.title} />
      </div>
    </section>
  );
}

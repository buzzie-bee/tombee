import Link from 'next/link';
import { toHref } from '@/lib/navigation/routes';
import { getAllProjects } from '@/lib/content/projects';

export function ProjectNav({ currentSlug }: { currentSlug: string }) {
  const projects = getAllProjects();
  const currentIndex = projects.findIndex((p) => p.slug === currentSlug);
  const prev = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const next = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  if (!prev && !next) return null;

  return (
    <nav aria-label="Project navigation" className="flex items-stretch gap-4">
      {prev ? (
        <Link
          href={toHref({ name: 'projectDetail', slug: prev.slug })}
          aria-label={`Previous project: ${prev.frontmatter.title}`}
          className="group flex flex-1 flex-col gap-1 rounded-lg bg-card p-5 transition-colors duration-300 hover:bg-muted"
        >
          <span className="font-mono text-xs text-muted-foreground">← Previous</span>
          <span className="font-mono text-sm font-semibold tracking-tight group-hover:text-primary">
            {prev.frontmatter.title}
          </span>
        </Link>
      ) : (
        <div className="flex-1" />
      )}

      {next ? (
        <Link
          href={toHref({ name: 'projectDetail', slug: next.slug })}
          aria-label={`Next project: ${next.frontmatter.title}`}
          className="group flex flex-1 flex-col items-end gap-1 rounded-lg bg-card p-5 text-right transition-colors duration-300 hover:bg-muted"
        >
          <span className="font-mono text-xs text-muted-foreground">Next →</span>
          <span className="font-mono text-sm font-semibold tracking-tight group-hover:text-primary">
            {next.frontmatter.title}
          </span>
        </Link>
      ) : (
        <div className="flex-1" />
      )}
    </nav>
  );
}

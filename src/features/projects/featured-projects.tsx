import Link from 'next/link';
import { toHref } from '@/lib/navigation/routes';
import { getFeaturedProjects } from '@/lib/content/projects';
import { ProjectCard } from './project-card';

export function FeaturedProjects() {
  const projects = getFeaturedProjects();

  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="flex items-end justify-between gap-4">
        <div className="flex flex-col gap-2">
          <div className="h-1 w-12 rounded-full bg-primary" />
          <h2 className="font-mono text-2xl font-bold tracking-tight md:text-3xl">
            Featured Projects
          </h2>
        </div>
        <Link
          href={toHref({ name: 'projects' })}
          className="font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          View all →
        </Link>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.slug}
            slug={project.slug}
            title={project.frontmatter.title}
            description={project.frontmatter.description}
            image={project.frontmatter.image}
            priority={index === 0}
          />
        ))}
      </div>
    </section>
  );
}

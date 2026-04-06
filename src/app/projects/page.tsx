import type { Metadata } from 'next';
import { getAllProjects } from '@/lib/content/projects';
import { ProjectList } from '@/features/projects/project-list';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    "A collection of things I've built - personal experiments, professional work, and open source contributions.",
};

export default function ProjectsPage() {
  const projects = getAllProjects().map((p) => ({
    slug: p.slug,
    title: p.frontmatter.title,
    description: p.frontmatter.description,
    category: p.frontmatter.category,
    tags: p.frontmatter.tags,
    year: p.frontmatter.year,
    image: p.frontmatter.image,
  }));

  return (
    <main className="flex-1">
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="flex flex-col gap-2">
          <div className="h-1 w-12 rounded-full bg-primary" />
          <h1 className="font-mono text-4xl font-bold tracking-tight md:text-5xl">Projects</h1>
          <p className="mt-2 max-w-md text-lg text-muted-foreground">
            A collection of things I&apos;ve built - personal experiments, professional work, and
            open source contributions.
          </p>
        </div>

        <div className="mt-12">
          <ProjectList projects={projects} />
        </div>
      </section>
    </main>
  );
}

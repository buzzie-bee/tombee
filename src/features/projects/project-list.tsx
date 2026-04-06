'use client';

import { useState } from 'react';
import type { ProjectCategory } from './types';
import { CategoryFilter } from './category-filter';
import { ProjectCardFull } from './project-card-full';

interface ProjectListProps {
  projects: {
    slug: string;
    title: string;
    description: string;
    category: ProjectCategory;
    tags: string[];
    year: string;
    image?: string;
  }[];
}

export function ProjectList({ projects }: ProjectListProps) {
  const [active, setActive] = useState<ProjectCategory | 'all'>('all');

  const availableCategories = [...new Set(projects.map((p) => p.category))];
  const filtered = active === 'all' ? projects : projects.filter((p) => p.category === active);

  return (
    <div className="flex flex-col gap-8">
      <CategoryFilter active={active} availableCategories={availableCategories} onChange={setActive} />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {filtered.map((project) => (
          <ProjectCardFull key={project.slug} {...project} />
        ))}
      </div>
    </div>
  );
}

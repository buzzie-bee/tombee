'use client';

import { cn } from '@/lib/utils';
import type { ProjectCategory } from './types';

const CATEGORIES: { label: string; value: ProjectCategory | 'all' }[] = [
  { label: 'All', value: 'all' },
  { label: 'Personal', value: 'personal' },
  { label: 'Professional', value: 'professional' },
  { label: 'Startup', value: 'startup' },
  { label: 'Open Source', value: 'open-source' },
];

interface CategoryFilterProps {
  active: ProjectCategory | 'all';
  availableCategories: ProjectCategory[];
  onChange: (category: ProjectCategory | 'all') => void;
}

export function CategoryFilter({ active, availableCategories, onChange }: CategoryFilterProps) {
  const visible = CATEGORIES.filter(
    (cat) => cat.value === 'all' || availableCategories.includes(cat.value as ProjectCategory),
  );

  return (
    <div className="flex gap-1 overflow-x-auto pb-2 scrollbar-none">
      {visible.map((cat) => (
        <button
          key={cat.value}
          onClick={() => onChange(cat.value)}
          className={cn(
            'shrink-0 cursor-pointer rounded-full px-4 py-1.5 font-mono text-sm transition-colors',
            active === cat.value
              ? 'bg-primary text-primary-foreground'
              : 'text-muted-foreground hover:bg-muted hover:text-foreground',
          )}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}

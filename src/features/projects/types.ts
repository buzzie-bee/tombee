export type ProjectCategory = 'personal' | 'professional' | 'open-source' | 'startup';

export type ProjectStatus = 'active' | 'completed' | 'archived';

export interface ProjectLink {
  label: string;
  href: string;
}

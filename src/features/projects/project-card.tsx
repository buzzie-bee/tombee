import Image from 'next/image';
import Link from 'next/link';
import { toHref } from '@/lib/navigation/routes';

interface ProjectCardProps {
  slug: string;
  title: string;
  description: string;
  image?: string;
  priority?: boolean;
}

export function ProjectCard({ slug, title, description, image, priority }: ProjectCardProps) {
  return (
    <Link
      href={toHref({ name: 'projectDetail', slug })}
      className="group flex flex-col gap-4 rounded-lg bg-card p-6 transition-colors duration-300 hover:bg-muted"
    >
      {image ? (
        <div className="relative aspect-video w-full overflow-hidden rounded-md">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(min-width: 1024px) 384px, (min-width: 640px) 50vw, 100vw"
            priority={priority}
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      ) : (
        <div className="flex aspect-video w-full items-center justify-center rounded-md bg-muted group-hover:bg-muted/50">
          <span className="font-mono text-xs text-muted-foreground">No preview</span>
        </div>
      )}
      <div className="flex flex-col gap-2">
        <h3 className="font-mono text-lg font-semibold tracking-tight group-hover:text-primary">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </Link>
  );
}

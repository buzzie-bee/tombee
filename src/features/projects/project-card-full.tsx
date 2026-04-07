import Image from 'next/image';
import Link from 'next/link';
import { toHref } from '@/lib/navigation/routes';
import { Badge } from '@/components/ui/badge';

interface ProjectCardFullProps {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  year: string;
  image?: string;
  priority?: boolean;
}

export function ProjectCardFull({
  slug,
  title,
  description,
  tags,
  year,
  image,
  priority,
}: ProjectCardFullProps) {
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
            sizes="(min-width: 640px) 50vw, 100vw"
            priority={priority}
            className="object-cover motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:scale-105"
          />
        </div>
      ) : (
        <div className="flex aspect-video w-full items-center justify-center rounded-md bg-muted group-hover:bg-muted/50">
          <span className="font-mono text-xs text-muted-foreground">No preview</span>
        </div>
      )}
      <div className="flex flex-col gap-3">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="font-mono text-lg font-semibold tracking-tight group-hover:text-primary">
            {title}
          </h3>
          <span className="shrink-0 font-mono text-xs text-muted-foreground">{year}</span>
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="font-mono">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </Link>
  );
}

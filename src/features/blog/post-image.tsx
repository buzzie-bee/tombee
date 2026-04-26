import Image from 'next/image';
import { cn } from '@/lib/utils';

interface PostImageProps {
  src: string;
  alt: string;
  width: number | `${number}`;
  height: number | `${number}`;
  priority?: boolean;
  className?: string;
  caption?: string;
}

export function PostImage({
  src,
  alt,
  width,
  height,
  priority,
  className,
  caption,
}: PostImageProps) {
  return (
    <figure className="my-6">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        sizes="(min-width: 768px) 720px, 100vw"
        className={cn('h-auto w-full rounded-lg', className)}
      />
      {caption ? (
        <figcaption className="mt-2 text-sm leading-relaxed text-muted-foreground italic">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

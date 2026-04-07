import Image from 'next/image';
import { cn } from '@/lib/utils';

interface PostImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
}

export function PostImage({ src, alt, width, height, priority, className }: PostImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      sizes="(min-width: 768px) 720px, 100vw"
      className={cn('my-6 h-auto w-full rounded-lg', className)}
    />
  );
}

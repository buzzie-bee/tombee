import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button-variants';

export default function NotFound() {
  return (
    <main className="flex flex-1 items-center justify-center px-6">
      <div className="flex flex-col items-center gap-4 text-center">
        <p className="font-mono text-6xl font-bold text-primary">404</p>
        <h1 className="font-mono text-2xl font-bold tracking-tight">Page not found</h1>
        <p className="max-w-sm text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link href="/" className={buttonVariants({ size: 'lg' })}>
          Go home
        </Link>
      </div>
    </main>
  );
}

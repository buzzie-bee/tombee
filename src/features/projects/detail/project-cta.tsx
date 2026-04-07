import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { buttonVariants } from '@/components/ui/button-variants';

export function ProjectCta({ projectTitle }: { projectTitle: string }) {
  const message = `Hey Tom, I was checking out '${projectTitle}' and I'd love to discuss a similar project.\n\nHere's what I have in mind:\n`;
  const href = `/contact?message=${encodeURIComponent(message)}`;

  return (
    <Card className="text-center">
      <CardContent className="flex flex-col items-center gap-4">
        <h3 className="font-mono text-lg font-semibold tracking-tight">
          Have a similar project in mind?
        </h3>
        <p className="text-sm text-muted-foreground">
          I&apos;d love to hear about it. Let&apos;s talk about what we could build together.
        </p>
        <Link href={href} className={buttonVariants({ size: 'lg' })}>
          Let&apos;s Talk
        </Link>
      </CardContent>
    </Card>
  );
}

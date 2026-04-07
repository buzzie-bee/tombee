import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { buttonVariants } from '@/components/ui/button-variants';

export function BlogCta() {
  return (
    <Card className="text-center">
      <CardContent className="flex flex-col items-center gap-4">
        <h3 className="font-mono text-lg font-semibold tracking-tight">Enjoyed this post?</h3>
        <p className="text-sm text-muted-foreground">
          I&apos;m available for freelance work. If you like how I think, let&apos;s talk about what
          I could build for you.
        </p>
        <Link href="/contact" className={buttonVariants({ size: 'lg' })}>
          Get in Touch
        </Link>
      </CardContent>
    </Card>
  );
}

import { Suspense } from 'react';
import Link from 'next/link';
import { toHref } from '@/lib/navigation/routes';
import { ContactForm } from './contact-form';

export function ContactSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <div className="h-1 w-12 rounded-full bg-primary" />
            <h2 className="font-mono text-2xl font-bold tracking-tight md:text-3xl">
              Get in Touch
            </h2>
          </div>
          <p className="text-muted-foreground">
            Have a project in mind, want to collaborate, or just want to say hi? Drop me a message
            and I&apos;ll get back to you.
          </p>
          <Link
            href={toHref({ name: 'contact' })}
            className="font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            All contact methods →
          </Link>
        </div>

        <Suspense>
          <ContactForm />
        </Suspense>
      </div>
    </section>
  );
}

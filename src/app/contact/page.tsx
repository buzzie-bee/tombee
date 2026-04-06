import type { Metadata } from 'next';
import { Suspense } from 'react';
import { ContactForm } from '@/features/contact/contact-form';
import { ContactMethods } from '@/features/contact/contact-methods';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Tom Bee - send a message or find me on socials.',
};

export default function ContactPage() {
  return (
    <main className="flex-1">
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="flex flex-col gap-2">
          <div className="h-1 w-12 rounded-full bg-primary" />
          <h1 className="font-mono text-4xl font-bold tracking-tight md:text-5xl">Contact</h1>
          <p className="mt-2 max-w-md text-lg text-muted-foreground">
            Pick whichever works best for you - I&apos;m happy to hear from you however you prefer.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-2">
          <div className="flex flex-col gap-6">
            <h2 className="font-mono text-sm font-medium uppercase tracking-widest text-muted-foreground">
              Send a message
            </h2>
            <Suspense>
              <ContactForm />
            </Suspense>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="font-mono text-sm font-medium uppercase tracking-widest text-muted-foreground">
              Or find me here
            </h2>
            <ContactMethods />
          </div>
        </div>
      </section>
    </main>
  );
}

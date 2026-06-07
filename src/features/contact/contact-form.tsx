'use client';

import { useRef, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export function ContactForm() {
  const searchParams = useSearchParams();
  const prefilled = searchParams.get('message') ?? '';
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    const formData = new FormData(e.currentTarget);
    const body = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      message: formData.get('message') as string,
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error ?? 'Something went wrong.');
      }

      setStatus('success');
      formRef.current?.reset();
    } catch (err) {
      setStatus('error');
      setErrorMessage(err instanceof Error ? err.message : 'Something went wrong.');
    }
  }

  if (status === 'success') {
    return (
      <div role="status" className="flex flex-col gap-2 rounded-lg bg-card p-6">
        <p className="font-mono text-sm font-semibold">Message sent!</p>
        <p className="text-sm text-muted-foreground">
          Thanks for reaching out. I&apos;ll get back to you as soon as I can.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-2 cursor-pointer self-start font-mono text-sm text-primary underline underline-offset-4 hover:text-primary/80"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form ref={formRef} className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="name" className="font-mono text-sm">
          Name
        </Label>
        <Input id="name" name="name" placeholder="Your name" required />
      </div>
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="email" className="font-mono text-sm">
          Email
        </Label>
        <Input id="email" name="email" type="email" placeholder="you@example.com" required />
      </div>
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="message" className="font-mono text-sm">
          Message
        </Label>
        <Textarea
          id="message"
          name="message"
          placeholder="What's on your mind?"
          rows={6}
          required
          defaultValue={prefilled}
        />
      </div>
      {status === 'error' && (
        <div role="alert" className="flex flex-col gap-1 text-sm">
          <p className="text-destructive">{errorMessage}</p>
          <p className="text-muted-foreground">
            You can also reach me directly at{' '}
            <a
              href="mailto:hello@tombee.io"
              className="text-primary underline underline-offset-4 hover:text-primary/80"
            >
              hello@tombee.io
            </a>
            .
          </p>
        </div>
      )}
      <Button
        type="submit"
        size="lg"
        className="mt-2 self-start"
        disabled={status === 'submitting'}
        aria-busy={status === 'submitting'}
      >
        {status === 'submitting' ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
}

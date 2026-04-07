import { IconMail, IconBrandLinkedin, IconBrandGithub, IconFileText } from '@tabler/icons-react';

const METHODS = [
  {
    label: 'Email',
    value: 'hello@tombee.io',
    href: 'mailto:hello@tombee.io',
    icon: IconMail,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/tombee',
    href: 'https://www.linkedin.com/in/tombee',
    icon: IconBrandLinkedin,
  },
  {
    label: 'GitHub',
    value: 'github.com/buzzie-bee',
    href: 'https://github.com/buzzie-bee',
    icon: IconBrandGithub,
  },
  {
    label: 'CV',
    value: 'Download CV (PDF)',
    href: '/cv.pdf',
    icon: IconFileText,
  },
];

export function ContactMethods() {
  return (
    <div className="flex flex-col gap-6">
      {METHODS.map((method) => (
        <a
          key={method.label}
          href={method.href}
          target={method.href.startsWith('mailto:') ? undefined : '_blank'}
          rel={method.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
          className="group flex items-center gap-4 rounded-lg bg-card p-4 transition-colors duration-300 hover:bg-muted"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-muted group-hover:bg-background">
            <method.icon aria-hidden="true" className="h-5 w-5 text-muted-foreground group-hover:text-primary" />
          </div>
          <div className="flex flex-col">
            <span className="font-mono text-xs font-medium uppercase tracking-widest text-muted-foreground">
              {method.label}
            </span>
            <span className="text-sm group-hover:text-primary">
              {method.value}
              {!method.href.startsWith('mailto:') && (
                <span className="sr-only"> (opens in new tab)</span>
              )}
            </span>
          </div>
        </a>
      ))}
    </div>
  );
}

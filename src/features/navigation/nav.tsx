'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IconMenu2, IconX } from '@tabler/icons-react';
import { appPaths } from '@/lib/navigation/routes';
import { ThemeToggle } from '@/components/common/theme-toggle';

const NAV_LINKS = [
  { href: appPaths.projects, label: 'Projects' },
  { href: appPaths.blog, label: 'Blog' },
  { href: appPaths.contact, label: 'Contact' },
];

const CV_PATH = '/cv.pdf';

export function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-sm">
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6"
      >
        <Link
          href={appPaths.home}
          className="font-mono text-lg font-bold tracking-tight"
          onClick={() => setOpen(false)}
        >
          tombee
        </Link>

        <div className="hidden items-center gap-1 sm:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname.startsWith(link.href) ? 'page' : undefined}
              className="rounded-lg px-3 py-2 font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={CV_PATH}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg px-3 py-2 font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            CV<span className="sr-only"> (opens in new tab)</span>
          </a>
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-1 sm:hidden">
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            className="cursor-pointer rounded-lg p-2 text-muted-foreground transition-colors hover:text-foreground"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? (
              <IconX aria-hidden="true" className="h-5 w-5" />
            ) : (
              <IconMenu2 aria-hidden="true" className="h-5 w-5" />
            )}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-b border-border/50 sm:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-6 pb-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                aria-current={pathname.startsWith(link.href) ? 'page' : undefined}
                className={`rounded-lg px-3 py-2 font-mono text-sm transition-colors ${
                  pathname.startsWith(link.href)
                    ? 'text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={CV_PATH}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2 font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              CV<span className="sr-only"> (opens in new tab)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

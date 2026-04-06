import Link from 'next/link';
import { appPaths } from '@/lib/navigation/routes';

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border/50">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <p className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} Tom Bee
        </p>

        <nav className="flex items-center gap-4">
          <Link
            href={appPaths.projects}
            className="font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            Projects
          </Link>
          <Link
            href={appPaths.blog}
            className="font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            Blog
          </Link>
          <Link
            href={appPaths.contact}
            className="font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            Contact
          </Link>
          <a
            href="https://github.com/buzzie-bee"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/tombee"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            LinkedIn
          </a>
        </nav>
      </div>
    </footer>
  );
}

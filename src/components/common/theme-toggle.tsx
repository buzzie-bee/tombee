'use client';

import { IconMoon, IconSun } from '@tabler/icons-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      aria-label="Toggle theme"
    >
      <IconSun aria-hidden="true" className="h-5 w-5 rotate-0 scale-100 motion-safe:transition-all dark:-rotate-90 dark:scale-0" />
      <IconMoon aria-hidden="true" className="absolute h-5 w-5 rotate-90 scale-0 motion-safe:transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  );
}

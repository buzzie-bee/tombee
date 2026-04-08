import type { Metadata } from 'next';
import Script from 'next/script';
import { Geist, Geist_Mono } from 'next/font/google';
import { ThemeProvider } from '@/components/common/theme-provider';
import { Nav } from '@/features/navigation/nav';
import { Footer } from '@/features/navigation/footer';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
});

const siteUrl = 'https://tombee.io';

export const metadata: Metadata = {
  title: {
    default: 'Tom Bee',
    template: '%s | Tom Bee',
  },
  description:
    'Fullstack TypeScript engineer. I build production-ready web applications with a focus on developer velocity, scalable systems, and UX that delights.',
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    siteName: 'Tom Bee',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@Tom_Bee',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Nav />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
      <Script
        src="https://rybbit.tombee.io/api/script.js"
        data-site-id="1"
        data-session-replay="true"
        data-track-errors="true"
        strategy="afterInteractive"
      />
    </html>
  );
}

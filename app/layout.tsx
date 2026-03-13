import type { Metadata } from 'next';
import './globals.css';
import Nav from '@/components/Nav';

export const metadata: Metadata = {
  title: { default: 'Calm Home', template: '%s — Calm Home' },
  description: 'Home automation kits built around the moments that matter. Curated bundles, setup guides, and everything in between.',
  metadataBase: new URL('https://calmhome.io'),
  openGraph: {
    siteName: 'Calm Home',
    type: 'website',
    locale: 'en_US',
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-slate-950 text-slate-100 antialiased">
        <Nav />
        <main>{children}</main>
        <footer className="border-t border-slate-800 py-10 px-6 text-center">
          <p className="text-lg font-semibold text-white mb-1">Calm Home</p>
          <p className="text-sm text-slate-500 mb-4">Home automation, done for you.</p>
          <p className="text-xs text-slate-600">© 2026 Calm Home. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}

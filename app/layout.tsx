import type { Metadata } from 'next';
import './globals.css';
import { SITE_NAME, SITE_DESCRIPTION } from '@/lib/packages';
import Nav from '@/components/Nav';

export const metadata: Metadata = {
  title: `${SITE_NAME} — Home automation, done for you.`,
  description: SITE_DESCRIPTION,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-slate-950 text-slate-100 antialiased">
        <Nav />
        <main>{children}</main>
        <footer className="border-t border-slate-800 py-10 px-6 text-center">
          <p className="text-lg font-semibold text-white mb-1">{SITE_NAME}</p>
          <p className="text-sm text-slate-500 mb-4">Home automation, done for you.</p>
          <p className="text-xs text-slate-600">© 2026 {SITE_NAME}. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}

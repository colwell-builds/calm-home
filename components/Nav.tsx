'use client';
import Link from 'next/link';
import { SITE_NAME } from '@/lib/packages';
import { useState } from 'react';

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur-sm border-b border-slate-800/60">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <img src="/logo.svg" alt="Calm Home" className="w-7 h-7" />
          <span className="text-white font-bold text-lg tracking-tight">{SITE_NAME}</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/#how-it-works" className="text-sm text-slate-400 hover:text-white transition-colors">How It Works</Link>
          <Link href="/#packages" className="text-sm text-slate-400 hover:text-white transition-colors">Packages</Link>
          <Link href="/about" className="text-sm text-slate-400 hover:text-white transition-colors">About</Link>
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <Link href="/#waitlist"
            className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 text-sm font-semibold rounded-lg transition-colors">
            Join the Waitlist
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden text-slate-400 hover:text-white" onClick={() => setOpen(!open)}>
          {open ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-slate-800 bg-slate-950 px-6 py-4 flex flex-col gap-4">
          <Link href="/#how-it-works" onClick={() => setOpen(false)} className="text-sm text-slate-300">How It Works</Link>
          <Link href="/#packages" onClick={() => setOpen(false)} className="text-sm text-slate-300">Packages</Link>
          <Link href="/about" onClick={() => setOpen(false)} className="text-sm text-slate-300">About</Link>
          <Link href="/#waitlist" onClick={() => setOpen(false)}
            className="w-full text-center px-4 py-2 bg-amber-500 text-slate-950 text-sm font-semibold rounded-lg">
            Join the Waitlist
          </Link>
        </div>
      )}
    </nav>
  );
}

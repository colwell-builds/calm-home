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
          <svg width="28" height="26" viewBox="0 0 40 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <polygon points="20,2 38,18 2,18" fill="#fbbf24"/>
            <rect x="5" y="18" width="30" height="16" rx="1" fill="#334155"/>
            <rect x="15" y="24" width="10" height="10" rx="1" fill="#fbbf24"/>
            <rect x="7" y="21" width="6" height="5" rx="0.5" fill="#fbbf24" opacity="0.7"/>
            <rect x="27" y="21" width="6" height="5" rx="0.5" fill="#fbbf24" opacity="0.7"/>
          </svg>
          <span className="text-white font-bold text-lg tracking-tight">{SITE_NAME}</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/#how-it-works" className="text-sm text-slate-400 hover:text-white transition-colors">How It Works</Link>
          <Link href="/#packages" className="text-sm text-slate-400 hover:text-white transition-colors">Packages</Link>
          <Link href="/about" className="text-sm text-slate-400 hover:text-white transition-colors">About</Link>
          <Link href="/blog" className="text-sm text-slate-400 hover:text-white transition-colors">Blog</Link>
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
          <Link href="/blog" onClick={() => setOpen(false)} className="text-sm text-slate-300">Blog</Link>
          <Link href="/#waitlist" onClick={() => setOpen(false)}
            className="w-full text-center px-4 py-2 bg-amber-500 text-slate-950 text-sm font-semibold rounded-lg">
            Join the Waitlist
          </Link>
        </div>
      )}
    </nav>
  );
}

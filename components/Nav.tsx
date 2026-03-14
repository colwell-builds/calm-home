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
        <Link href="/" className="flex items-center gap-2.5 hover:opacity-80 transition-opacity">
          <svg width="30" height="30" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            {/* Warm glow behind windows */}
            <ellipse cx="30" cy="38" rx="16" ry="10" fill="#fbbf24" opacity="0.12"/>
            {/* House body — deep navy, slightly rounded base */}
            <path d="M8 30 H52 V52 C52 54.2 50.2 56 48 56 H12 C9.8 56 8 54.2 8 52 Z" fill="#1e3a5f"/>
            {/* Roofline — single clean path, slight softening at peak */}
            <path d="M30 6 L54 30 H46 L30 15 L14 30 H6 Z" fill="#fbbf24"/>
            {/* Left window — warm amber glow */}
            <rect x="12" y="34" width="13" height="11" rx="2.5" fill="#fbbf24" opacity="0.9"/>
            {/* Right window */}
            <rect x="35" y="34" width="13" height="11" rx="2.5" fill="#fbbf24" opacity="0.9"/>
            {/* Arched door — the distinctive element */}
            <path d="M25 56 V45 A5 5 0 0 1 35 45 V56 Z" fill="#fbbf24" opacity="0.75"/>
            {/* Chimney — thin, offset, not centered */}
            <rect x="38" y="10" width="5" height="12" rx="1.5" fill="#fbbf24" opacity="0.6"/>
          </svg>
          <span className="text-white font-bold text-lg tracking-tight">{SITE_NAME}</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/#how-it-works" className="text-sm text-slate-400 hover:text-white transition-colors">How It Works</Link>
          <Link href="/#packages" className="text-sm text-slate-400 hover:text-white transition-colors">Packages</Link>
          <Link href="/about" className="text-sm text-slate-400 hover:text-white transition-colors">About</Link>
          <Link href="/blog" className="text-sm text-slate-400 hover:text-white transition-colors">Blog</Link>
          <Link href="/quiz" className="text-sm text-amber-400 hover:text-amber-300 font-medium transition-colors flex items-center gap-1.5">
            <span className="inline-flex items-center justify-center bg-amber-400/15 rounded-full px-2 py-0.5 text-xs font-semibold">✨</span>
            Find my package
          </Link>
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
          <Link href="/quiz" onClick={() => setOpen(false)}
            className="text-sm text-amber-400 font-medium flex items-center gap-2">
            <span>✨</span> Find my package
          </Link>
          <Link href="/#waitlist" onClick={() => setOpen(false)}
            className="w-full text-center px-4 py-2 bg-amber-500 text-slate-950 text-sm font-semibold rounded-lg">
            Join the Waitlist
          </Link>
        </div>
      )}
    </nav>
  );
}

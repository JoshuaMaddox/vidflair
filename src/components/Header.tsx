'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--color-border)]" style={{ background: 'rgba(10,10,10,0.85)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)' }}>
      <nav className="container-wide flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2" aria-label="VidFlair Home">
          <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <rect width="40" height="40" rx="8" fill="var(--color-accent)"/>
            <path d="M14 12L30 20L14 28V12Z" fill="var(--color-bg)" />
          </svg>
          <span className="text-xl font-bold tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>VidFlair</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/services/corporate-video-production-bangkok" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors">Services</Link>
          <Link href="/pricing" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors">Pricing</Link>
          <Link href="/blog" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors">Blog</Link>
          <Link href="/about" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors">About</Link>
          <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-lg transition-all" style={{ background: 'var(--color-accent)', color: 'var(--color-accent-text)' }}>
            Get a Quote
          </Link>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-[var(--color-border)] pb-6" style={{ background: 'var(--color-bg)' }}>
          <div className="container-wide flex flex-col gap-4 pt-4">
            <Link href="/services/corporate-video-production-bangkok" className="text-base py-2" onClick={() => setOpen(false)}>Services</Link>
            <Link href="/pricing" className="text-base py-2" onClick={() => setOpen(false)}>Pricing</Link>
            <Link href="/blog" className="text-base py-2" onClick={() => setOpen(false)}>Blog</Link>
            <Link href="/about" className="text-base py-2" onClick={() => setOpen(false)}>About</Link>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold rounded-lg mt-2" style={{ background: 'var(--color-accent)', color: 'var(--color-accent-text)' }} onClick={() => setOpen(false)}>
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50" style={{ background: 'rgba(10,10,10,0.92)', backdropFilter: 'blur(12px)', borderBottom: '1px solid var(--color-border)' }}>
      <div className="container-wide">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="text-lg font-bold" style={{ fontFamily: 'var(--font-display)' }}>VidFlair</Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {[
              { href: '/services', label: 'Services' },
              { href: '/pricing', label: 'Pricing' },
              { href: '/blog', label: 'Blog' },
              { href: '/about', label: 'About' },
            ].map(item => (
              <Link key={item.href} href={item.href} className="text-sm font-medium transition-colors hover:text-[var(--color-text)]" style={{ color: 'var(--color-text-muted)' }}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-xl transition-all hover:opacity-90" style={{ background: 'var(--color-accent)', color: 'var(--color-accent-text)' }}>
              Get a Quote
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
            style={{ color: 'var(--color-text-muted)' }}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden" style={{ borderTop: '1px solid var(--color-border)', background: 'rgba(10,10,10,0.97)' }}>
          <div className="container-wide py-6 flex flex-col gap-4">
            {[
              { href: '/services', label: 'Services' },
              { href: '/pricing', label: 'Pricing' },
              { href: '/blog', label: 'Blog' },
              { href: '/about', label: 'About' },
              { href: '/contact', label: 'Get a Quote' },
            ].map(item => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-sm font-medium py-2" style={{ color: 'var(--color-text-muted)' }}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

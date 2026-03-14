import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] pt-24 pb-12" style={{ background: 'var(--color-surface)' }}>
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-5">
              <span className="text-xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>VidFlair</span>
            </Link>
            <p className="text-sm max-w-xs" style={{ color: 'var(--color-text-muted)', lineHeight: '1.7' }}>
              Professional video production in Bangkok. English-speaking crew, transparent pricing, international quality.
            </p>
            <p className="text-sm mt-5">
              <a href="mailto:hello@vidflair.com" style={{ color: 'var(--color-accent)' }}>hello@vidflair.com</a>
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-5" style={{ fontFamily: 'var(--font-display)' }}>Services</h3>
            <ul className="space-y-3">
              {['corporate-video', 'social-media-content', 'commercial-video', 'event-coverage', 'documentary', 'interview-video', 'product-video'].map(slug => (
                <li key={slug}>
                  <Link href={`/services/${slug}`} className="text-sm hover:text-[var(--color-text)] transition-colors capitalize" style={{ color: 'var(--color-text-muted)' }}>
                    {slug.replace(/-/g, ' ')}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-5" style={{ fontFamily: 'var(--font-display)' }}>Company</h3>
            <ul className="space-y-3">
              {[
                { href: '/about', label: 'About' },
                { href: '/pricing', label: 'Pricing' },
                { href: '/blog', label: 'Blog' },
                { href: '/contact', label: 'Contact' },
              ].map(item => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm hover:text-[var(--color-text)] transition-colors" style={{ color: 'var(--color-text-muted)' }}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8" style={{ borderTop: '1px solid var(--color-border)' }}>
          <p className="text-xs" style={{ color: 'var(--color-text-faint)' }}>
            &copy; {new Date().getFullYear()} VidFlair. All rights reserved. Bangkok, Thailand.
          </p>
          <div className="flex gap-6">
            {[
              { href: '/about', label: 'About' },
              { href: '/pricing', label: 'Pricing' },
              { href: '/contact', label: 'Contact' },
            ].map(item => (
              <Link key={item.href} href={item.href} className="text-xs hover:text-[var(--color-text)] transition-colors" style={{ color: 'var(--color-text-faint)' }}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

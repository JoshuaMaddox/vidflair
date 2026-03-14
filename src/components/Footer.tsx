import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] pt-16 pb-8" style={{ background: 'var(--color-surface)' }}>
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <svg width="28" height="28" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <rect width="40" height="40" rx="8" fill="var(--color-accent)"/>
                <path d="M14 12L30 20L14 28V12Z" fill="var(--color-bg)" />
              </svg>
              <span className="text-lg font-bold" style={{ fontFamily: 'var(--font-display)' }}>VidFlair</span>
            </Link>
            <p className="text-sm text-[var(--color-text-muted)] max-w-[280px]">
              Professional video production in Bangkok for international brands and businesses. English-speaking crew, transparent pricing, global quality.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold mb-4 text-[var(--color-text)]">Services</h3>
            <ul className="space-y-2.5">
              <li><Link href="/services/corporate-video-production-bangkok" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors">Corporate Video</Link></li>
              <li><Link href="/services/social-media-video-production-bangkok" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors">Social Media Video</Link></li>
              <li><Link href="/services/event-videography-bangkok" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors">Event Videography</Link></li>
              <li><Link href="/services/drone-videography-bangkok" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors">Drone Videography</Link></li>
              <li><Link href="/services/post-production-bangkok" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors">Post-Production</Link></li>
              <li><Link href="/services/youtube-production-bangkok" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors">YouTube Production</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold mb-4 text-[var(--color-text)]">Resources</h3>
            <ul className="space-y-2.5">
              <li><Link href="/blog" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors">Blog</Link></li>
              <li><Link href="/blog/video-production-costs-bangkok-2026" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors">Bangkok Production Costs</Link></li>
              <li><Link href="/blog/filming-permits-thailand-guide" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors">Filming Permits Guide</Link></li>
              <li><Link href="/pricing" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors">Pricing</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold mb-4 text-[var(--color-text)]">Contact</h3>
            <ul className="space-y-2.5">
              <li><Link href="/contact" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors">Get a Quote</Link></li>
              <li><a href="mailto:hello@vidflair.com" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors">hello@vidflair.com</a></li>
              <li><span className="text-sm text-[var(--color-text-muted)]">Bangkok, Thailand</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[var(--color-border)] pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--color-text-faint)]">
            © {new Date().getFullYear()} VidFlair. All rights reserved. Video production company in Bangkok, Thailand.
          </p>
          <a href="https://www.perplexity.ai/computer" target="_blank" rel="noopener noreferrer" className="text-xs text-[var(--color-text-faint)] hover:text-[var(--color-text-muted)] transition-colors">
            Created with Perplexity Computer
          </a>
        </div>
      </div>
    </footer>
  );
}

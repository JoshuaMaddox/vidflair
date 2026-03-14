import { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';
import { BreadcrumbJsonLd } from '@/components/JsonLd';
import { Mail, MapPin, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact — Get a Free Video Production Quote',
  description: 'Get a transparent, itemized quote for video production in Bangkok within 24 hours. Contact VidFlair for corporate video, social media content, event coverage, and more.',
  alternates: { canonical: 'https://vidflair.com/contact' },
};

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: 'https://vidflair.com' },
        { name: 'Contact', url: 'https://vidflair.com/contact' },
      ]} />

      <section className="pt-40 pb-28 md:pt-52 md:pb-40">
        <div className="container-wide">
          <nav className="flex items-center gap-2 text-xs mb-8" style={{ color: 'var(--color-text-faint)' }} aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[var(--color-text)] transition-colors">Home</Link>
            <span>/</span>
            <span style={{ color: 'var(--color-text-muted)' }}>Contact</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-28">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8" style={{ fontFamily: 'var(--font-display)', lineHeight: '1.05' }}>
                Let&apos;s Talk About<br />
                <span className="text-gradient">Your Next Project</span>
              </h1>
              <p className="text-lg mb-12" style={{ color: 'var(--color-text-muted)', lineHeight: '1.7' }}>
                Share your project details and receive a transparent, itemized quote within 24 hours. No obligation, no pressure — just honest pricing from a team that speaks your language.
              </p>

              <div className="space-y-8 mb-14">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'var(--color-accent-muted)', color: 'var(--color-accent)' }}>
                    <Mail size={18} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold mb-1">Email Us Directly</h3>
                    <a href="mailto:hello@vidflair.com" className="text-sm hover:underline" style={{ color: 'var(--color-accent)' }}>hello@vidflair.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'var(--color-accent-muted)', color: 'var(--color-accent)' }}>
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold mb-1">Location</h3>
                    <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>Bangkok, Thailand</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'var(--color-accent-muted)', color: 'var(--color-accent)' }}>
                    <Clock size={18} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold mb-1">Response Time</h3>
                    <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>Detailed quotes within 24 hours, Mon–Fri</p>
                  </div>
                </div>
              </div>

              <div className="p-7 rounded-xl" style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)' }}>
                <h3 className="text-sm font-semibold mb-4">What happens next?</h3>
                <ol className="space-y-3 text-sm" style={{ color: 'var(--color-text-muted)' }}>
                  <li className="flex items-start gap-2">
                    <span className="font-bold shrink-0" style={{ color: 'var(--color-accent)' }}>1.</span>
                    We review your brief and ask any clarifying questions
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold shrink-0" style={{ color: 'var(--color-accent)' }}>2.</span>
                    You receive a detailed, itemized quote within 24 hours
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold shrink-0" style={{ color: 'var(--color-accent)' }}>3.</span>
                    We schedule a call to discuss scope, timeline, and next steps
                  </li>
                </ol>
              </div>
            </div>

            <div className="p-10 rounded-2xl" style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)' }}>
              <h2 className="text-xl font-bold mb-8" style={{ fontFamily: 'var(--font-display)' }}>Get Your Free Quote</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

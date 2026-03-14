import { Metadata } from 'next';
import Link from 'next/link';
import { services } from '@/lib/services';
import { BreadcrumbJsonLd } from '@/components/JsonLd';
import { ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Pricing — Video Production Costs in Bangkok',
  description: 'Transparent video production pricing in Bangkok. See real cost breakdowns for corporate video, social media content, commercial shoots, and more. 40–60% savings vs. Western markets.',
  alternates: { canonical: 'https://vidflair.com/pricing' },
};

export default function PricingPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: 'https://vidflair.com' },
        { name: 'Pricing', url: 'https://vidflair.com/pricing' },
      ]} />

      <section className="pt-40 pb-20 md:pt-52 md:pb-32">
        <div className="container-default">
          <nav className="flex items-center gap-2 text-xs mb-8" style={{ color: 'var(--color-text-faint)' }} aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[var(--color-text)] transition-colors">Home</Link>
            <span>/</span>
            <span style={{ color: 'var(--color-text-muted)' }}>Pricing</span>
          </nav>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-10" style={{ fontFamily: 'var(--font-display)', lineHeight: '1.05' }}>
              Transparent Pricing,<br />
              <span className="text-gradient">No Surprises</span>
            </h1>
            <p className="text-lg mb-6" style={{ color: 'var(--color-text-muted)', lineHeight: '1.7' }}>
              We believe you should know exactly what you&apos;re paying for before you commit. Below are real cost ranges for typical projects — not estimates designed to get you on a call.
            </p>
            <p className="text-sm" style={{ color: 'var(--color-text-faint)' }}>
              All prices in USD. Final quotes itemized line-by-line. Prices reflect Bangkok production costs.
            </p>
          </div>
        </div>
      </section>

      {/* Package pricing */}
      <section className="pb-28 md:pb-40">
        <div className="container-default">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'Social Content',
                price: '$1,200–$3,500',
                description: 'Short-form social media content, product videos, and brand clips.',
                includes: [
                  '1–2 day shoot',
                  '1–2 person crew',
                  'Basic lighting setup',
                  'Sony FX or similar camera',
                  '3–5 edited videos (30–60 seconds)',
                  'Basic color grade',
                  '5 business day turnaround',
                ],
              },
              {
                name: 'Corporate Video',
                price: '$3,500–$9,000',
                description: 'Company profiles, testimonials, internal communications, training videos.',
                includes: [
                  '2–3 day shoot',
                  '3–4 person crew',
                  'Full lighting package',
                  'RED or Sony FX camera',
                  '1–2 finished videos (2–5 minutes)',
                  'Full color grade & sound mix',
                  '2–3 round revisions',
                ],
                featured: true,
              },
              {
                name: 'Commercial/Brand',
                price: '$9,000–$25,000+',
                description: 'TV commercials, brand campaigns, documentary-style content.',
                includes: [
                  '3–5 day shoot',
                  '5–8 person crew',
                  'Full grip & lighting',
                  'ARRI or RED cinema camera',
                  'Multiple deliverables',
                  'Full post-production suite',
                  'Location scouting & permits',
                ],
              },
            ].map(pkg => (
              <div
                key={pkg.name}
                className="p-10 rounded-2xl flex flex-col"
                style={{
                  background: pkg.featured ? 'var(--color-surface-2)' : 'var(--color-surface)',
                  border: pkg.featured ? '1px solid var(--color-accent)' : '1px solid var(--color-border)',
                }}
              >
                {pkg.featured && (
                  <span className="text-xs font-semibold px-3 py-1 rounded-full mb-5 self-start" style={{ background: 'var(--color-accent)', color: 'var(--color-accent-text)' }}>Most Popular</span>
                )}
                <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'var(--font-display)' }}>{pkg.name}</h3>
                <p className="text-2xl font-bold mb-3" style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-display)' }}>{pkg.price}</p>
                <p className="text-sm mb-8" style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>{pkg.description}</p>
                <ul className="space-y-3 flex-1 mb-10">
                  {pkg.includes.map(item => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="shrink-0 mt-0.5" style={{ color: 'var(--color-accent)' }} />
                      <span className="text-sm" style={{ color: 'var(--color-text-muted)' }}>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-xl transition-all hover:opacity-90" style={{ background: pkg.featured ? 'var(--color-accent)' : 'var(--color-surface-3)', color: pkg.featured ? 'var(--color-accent-text)' : 'var(--color-text)' }}>
                  Get a Quote <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost breakdown */}
      <section className="py-28 md:py-40" style={{ background: 'var(--color-surface)' }}>
        <div className="container-default">
          <h2 className="text-2xl md:text-3xl font-bold mb-16" style={{ fontFamily: 'var(--font-display)' }}>What Goes Into a Quote</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Crew', items: ['Director of Photography', 'Camera Operator', 'Gaffer / Lighting', 'Sound Recordist', 'Production Assistant', 'Producer / Line Producer'] },
              { title: 'Equipment', items: ['Camera body & lenses', 'Lighting package', 'Grip equipment', 'Audio gear', 'Drone (if applicable)', 'Production vehicle'] },
              { title: 'Locations', items: ['Location scouting', 'Permits & fees', 'Studio rental', 'Transport & logistics', 'Catering on-set', 'Location manager'] },
              { title: 'Pre-Production', items: ['Creative development', 'Script / storyboard', 'Casting (if needed)', 'Talent contracts', 'Call sheets', 'Production schedule'] },
              { title: 'Post-Production', items: ['Editing & assembly cut', 'Color grading', 'Sound design & mix', 'Music licensing', 'Graphics & titles', 'Delivery & encoding'] },
              { title: 'Optional Add-ons', items: ['30% Thailand cash rebate advisory', 'Drone footage & aerial', 'Animation & motion graphics', 'Voiceover talent', 'Subtitles & translations', 'Extended licensing'] },
            ].map(cat => (
              <div key={cat.title} className="p-8 rounded-2xl" style={{ background: 'var(--color-surface-2)', border: '1px solid var(--color-border)' }}>
                <h3 className="text-base font-semibold mb-5" style={{ fontFamily: 'var(--font-display)' }}>{cat.title}</h3>
                <ul className="space-y-2">
                  {cat.items.map(item => (
                    <li key={item} className="text-sm flex items-center gap-2" style={{ color: 'var(--color-text-muted)' }}>
                      <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: 'var(--color-accent)' }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-28 md:py-40">
        <div className="container-default">
          <h2 className="text-2xl md:text-3xl font-bold mb-16" style={{ fontFamily: 'var(--font-display)' }}>Pricing FAQs</h2>
          <div className="max-w-3xl space-y-6">
            {[
              { q: 'How accurate are these price ranges?', a: 'These are real ranges based on typical projects. Your final quote will be itemized line-by-line with exact costs for every element.' },
              { q: 'What\'s included in the quote?', a: 'Everything — crew day rates, equipment rental, location fees, permits, post-production hours. No hidden markups or ambiguous line items.' },
              { q: 'Can I qualify for the Thailand 30% rebate?', a: 'International productions that meet Thailand Film Office criteria can receive a 30% cash rebate. We can advise on eligibility and assist with applications.' },
              { q: 'Do you work with smaller budgets?', a: 'Yes. Our Social Content package starts at $1,200 USD. We can also scope smaller shoots for specific needs — just describe your project.' },
              { q: 'How does payment work?', a: 'Typically 50% deposit to confirm booking, with the balance due on delivery. We accept wire transfer and major currencies.' },
            ].map(faq => (
              <div key={faq.q} className="p-8 rounded-xl" style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)' }}>
                <h3 className="text-base font-semibold mb-3" style={{ fontFamily: 'var(--font-display)' }}>{faq.q}</h3>
                <p className="text-sm" style={{ color: 'var(--color-text-muted)', lineHeight: '1.7' }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service links */}
      <section className="py-28 md:py-40" style={{ background: 'var(--color-surface)' }}>
        <div className="container-default">
          <h2 className="text-2xl md:text-3xl font-bold mb-16" style={{ fontFamily: 'var(--font-display)' }}>Browse by Service</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map(service => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="flex items-center justify-between p-5 rounded-xl transition-all hover:translate-y-[-1px]"
                style={{ background: 'var(--color-surface-2)', border: '1px solid var(--color-border)' }}
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl">{service.icon}</span>
                  <span className="text-sm font-medium">{service.name}</span>
                </div>
                <ChevronRight size={16} style={{ color: 'var(--color-text-faint)' }} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 md:py-40">
        <div className="container-narrow text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: 'var(--font-display)' }}>
            Get Your Custom Quote
          </h2>
          <p className="text-base mb-10 max-w-lg mx-auto" style={{ color: 'var(--color-text-muted)' }}>
            Tell us about your project and receive a transparent, itemized quote within 24 hours.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold rounded-xl transition-all hover:opacity-90" style={{ background: 'var(--color-accent)', color: 'var(--color-accent-text)' }}>
            Get a Free Quote <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}

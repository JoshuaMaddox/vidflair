import { Metadata } from 'next';
import Link from 'next/link';
import { services } from '@/lib/services';
import { BreadcrumbJsonLd, FAQPageJsonLd } from '@/components/JsonLd';
import FAQSection from '@/components/FAQSection';
import { ArrowRight, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Video Production Pricing Bangkok — Transparent Rates',
  description: 'Transparent video production pricing in Bangkok. Corporate video from ฿150,000, social media from ฿15,000, event coverage from ฿25,000. Itemized quotes within 24 hours.',
  alternates: { canonical: 'https://vidflair.com/pricing' },
};

const pricingFaqs = [
  { question: 'Are your prices all-inclusive?', answer: 'Our quotes are itemized and transparent. Each line item is clearly listed — crew, equipment, locations, post-production, travel, and any other costs. There are no hidden fees or surprise markups. What you see in the quote is what you pay.' },
  { question: 'Do you require a deposit?', answer: 'Yes, we require a 50% deposit to begin pre-production, with the remaining 50% due upon delivery of the final approved edit. For large projects, we can arrange milestone-based payments.' },
  { question: 'What payment methods do you accept?', answer: 'We accept bank transfer (domestic and international), PayPal, and Wise. We invoice in USD, GBP, EUR, or THB — whichever is most convenient for your accounting.' },
  { question: 'How do I know if I qualify for the 30% government rebate?', answer: 'The Thailand government rebate applies to qualifying foreign productions that spend a minimum amount within Thailand. We can assess your project\'s eligibility during the quoting process and handle the entire rebate application if you qualify.' },
  { question: 'Can I get a custom package?', answer: 'Absolutely. The pricing tiers shown are starting points. Every project is unique, and we tailor packages to your specific needs, budget, and timeline. Send us your brief and we\'ll create a custom proposal.' },
];

export default function PricingPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: 'https://vidflair.com' },
        { name: 'Pricing', url: 'https://vidflair.com/pricing' },
      ]} />
      <FAQPageJsonLd faqs={pricingFaqs} />

      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-default">
          <nav className="flex items-center gap-2 text-xs mb-6" style={{ color: 'var(--color-text-faint)' }} aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[var(--color-text)] transition-colors">Home</Link>
            <span>/</span>
            <span style={{ color: 'var(--color-text-muted)' }}>Pricing</span>
          </nav>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6" style={{ fontFamily: 'var(--font-display)', lineHeight: '1.05' }}>
              Transparent Pricing.<br />
              <span className="text-gradient">No Surprises.</span>
            </h1>
            <p className="text-lg" style={{ color: 'var(--color-text-muted)', lineHeight: '1.7' }}>
              Every quote is itemized line by line. These are starting prices — we customize every project to your scope, timeline, and budget. Get a detailed quote within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Service pricing cards */}
      <section className="pb-16 md:pb-24">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map(service => (
              <div key={service.slug} className="p-6 rounded-2xl flex flex-col" style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)' }}>
                <h3 className="text-base font-semibold mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                  {service.title.replace(' Bangkok', '')}
                </h3>
                <p className="text-sm mb-4 flex-1" style={{ color: 'var(--color-text-muted)' }}>
                  {service.description.slice(0, 80)}…
                </p>
                <div className="mb-4">
                  <span className="text-lg font-bold" style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-display)' }}>
                    {service.priceRange}
                  </span>
                </div>
                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 3).map(f => (
                    <li key={f} className="flex items-start gap-2 text-xs" style={{ color: 'var(--color-text-muted)' }}>
                      <CheckCircle size={14} className="shrink-0 mt-0.5" style={{ color: 'var(--color-accent)' }} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href={`/services/${service.slug}`} className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-lg transition-all hover:opacity-90 mt-auto" style={{ background: 'var(--color-accent)', color: 'var(--color-accent-text)' }}>
                  Learn More <ArrowRight size={12} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-16 md:py-24" style={{ background: 'var(--color-surface)' }}>
        <div className="container-default">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-center" style={{ fontFamily: 'var(--font-display)' }}>Bangkok vs. Western Pricing</h2>
          <p className="text-base text-center mb-10 max-w-xl mx-auto" style={{ color: 'var(--color-text-muted)' }}>
            The same quality and standards at 40–60% lower cost.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr style={{ borderBottom: '2px solid var(--color-border)' }}>
                  <th className="py-4 pr-4 font-semibold">Service</th>
                  <th className="py-4 px-4 font-semibold" style={{ color: 'var(--color-accent)' }}>VidFlair (Bangkok)</th>
                  <th className="py-4 pl-4 font-semibold" style={{ color: 'var(--color-text-muted)' }}>US / UK / Australia</th>
                  <th className="py-4 pl-4 font-semibold" style={{ color: 'var(--color-text-faint)' }}>You Save</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Corporate video (1-2 min)', '$4,200 – $8,500', '$10,000 – $25,000', '~60%'],
                  ['Social media video', '$425 – $1,000', '$1,500 – $5,000', '~70%'],
                  ['Event coverage (full day)', '$1,420 – $3,400', '$3,000 – $8,000', '~55%'],
                  ['Drone filming (half day)', '$570 – $1,140', '$1,500 – $3,000', '~60%'],
                  ['Product video (per SKU)', '$340 – $1,000', '$1,000 – $3,000', '~65%'],
                  ['Real estate walkthrough', '$425 – $850', '$1,000 – $2,500', '~60%'],
                  ['Video editing (per min)', '$225 – $710', '$500 – $2,000', '~55%'],
                  ['YouTube video', '$570 – $1,420', '$2,000 – $5,000', '~70%'],
                ].map(([service, bkk, west, save]) => (
                  <tr key={service} style={{ borderBottom: '1px solid var(--color-border)' }}>
                    <td className="py-4 pr-4 font-medium">{service}</td>
                    <td className="py-4 px-4" style={{ color: 'var(--color-accent)' }}>{bkk}</td>
                    <td className="py-4 pl-4" style={{ color: 'var(--color-text-faint)', textDecoration: 'line-through' }}>{west}</td>
                    <td className="py-4 pl-4 font-bold" style={{ color: 'var(--color-accent)' }}>{save}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-16 md:py-24">
        <div className="container-default">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center" style={{ fontFamily: 'var(--font-display)' }}>Every Project Includes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'English-speaking producer & crew',
              'Itemized, transparent quote',
              'Pre-production planning & scripting',
              'Professional-grade equipment',
              'Full post-production & color grading',
              '2 rounds of revisions included',
              'Multiple delivery formats',
              'Cloud-based review & approval',
              'Filming permit coordination',
            ].map(item => (
              <div key={item} className="flex items-center gap-3 p-4 rounded-xl" style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)' }}>
                <CheckCircle size={18} className="shrink-0" style={{ color: 'var(--color-accent)' }} />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection faqs={pricingFaqs} title="Pricing FAQ" />

      {/* CTA */}
      <section className="py-16 md:py-24" style={{ background: 'var(--color-surface)' }}>
        <div className="container-narrow text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            Get Your Custom Quote
          </h2>
          <p className="text-base mb-8 max-w-lg mx-auto" style={{ color: 'var(--color-text-muted)' }}>
            Every project is unique. Tell us about yours and receive a detailed, itemized quote within 24 hours.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-4 text-base font-semibold rounded-xl transition-all hover:opacity-90" style={{ background: 'var(--color-accent)', color: 'var(--color-accent-text)' }}>
            Get a Free Quote <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}

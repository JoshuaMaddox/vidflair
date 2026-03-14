import { Metadata } from 'next';
import Link from 'next/link';
import { BreadcrumbJsonLd } from '@/components/JsonLd';
import { ArrowRight, Globe, Users, DollarSign, Zap, Award, Camera } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About VidFlair — Bangkok Video Production Company',
  description: 'VidFlair is a professional video production company in Bangkok, Thailand serving international brands. English-speaking crew, transparent pricing, global quality standards.',
  alternates: { canonical: 'https://vidflair.com/about' },
};

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: 'https://vidflair.com' },
        { name: 'About', url: 'https://vidflair.com/about' },
      ]} />

      <section className="pt-40 pb-24 md:pt-52 md:pb-36">
        <div className="container-default">
          <nav className="flex items-center gap-2 text-xs mb-8" style={{ color: 'var(--color-text-faint)' }} aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[var(--color-text)] transition-colors">Home</Link>
            <span>/</span>
            <span style={{ color: 'var(--color-text-muted)' }}>About</span>
          </nav>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-12" style={{ fontFamily: 'var(--font-display)', lineHeight: '1.05' }}>
              Professional Video Production,{' '}
              <span className="text-gradient">Built for International Brands</span>
            </h1>
            <p className="text-lg md:text-xl mb-10" style={{ color: 'var(--color-text-muted)', lineHeight: '1.7' }}>
              VidFlair is a Bangkok-based video production company built from the ground up to serve international clients. We combine Thailand&apos;s world-class production infrastructure and cost advantages with the communication standards, transparency, and quality your brand demands.
            </p>
            <p className="text-base" style={{ color: 'var(--color-text-muted)', lineHeight: '1.7' }}>
              Too many international brands struggle to produce video in Thailand. Language barriers, opaque pricing, unreliable timelines, and inconsistent quality have been the norm for too long. We started VidFlair to fix that — building a production company that operates the way international businesses expect.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-36 md:py-56" style={{ background: 'var(--color-surface)' }}>
        <div className="container-wide">
          <h2 className="text-2xl md:text-3xl font-bold mb-20 text-center" style={{ fontFamily: 'var(--font-display)' }}>What We Stand For</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { icon: <DollarSign size={24} />, title: 'Radical Transparency', desc: 'Every quote is itemized line by line. You see exactly what you\'re paying for — crew rates, equipment, locations, post-production hours. No hidden markups, no unpleasant surprises.' },
              { icon: <Globe size={24} />, title: 'Global Standards', desc: 'We shoot on RED, Sony FX, and ARRI systems. We edit in DaVinci Resolve and Premiere Pro. Our output meets the standards of any multinational brand or broadcast network.' },
              { icon: <Users size={24} />, title: 'English-First Communication', desc: 'Every project has a single English-speaking producer as your point of contact. From initial brief through final delivery, you communicate directly with someone who understands your brand.' },
            ].map(item => (
              <div key={item.title} className="p-12 rounded-2xl" style={{ background: 'var(--color-surface-2)', border: '1px solid var(--color-border)' }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-8" style={{ background: 'var(--color-accent-muted)', color: 'var(--color-accent)' }}>
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold mb-5" style={{ fontFamily: 'var(--font-display)' }}>{item.title}</h3>
                <p className="text-sm" style={{ color: 'var(--color-text-muted)', lineHeight: '1.7' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-36 md:py-56">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {[
              { value: '40–60%', label: 'Cost savings vs. Western markets' },
              { value: '24hr', label: 'Quote turnaround time' },
              { value: '100%', label: 'English-speaking crew' },
              { value: '30%', label: 'Govt rebate eligible' },
            ].map(stat => (
              <div key={stat.label} className="text-center p-10 rounded-2xl" style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)' }}>
                <div className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-accent)' }}>{stat.value}</div>
                <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bangkok advantage */}
      <section className="py-36 md:py-56" style={{ background: 'var(--color-surface)' }}>
        <div className="container-default">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-10" style={{ fontFamily: 'var(--font-display)' }}>The Bangkok Advantage</h2>
            <p className="text-base mb-16" style={{ color: 'var(--color-text-muted)', lineHeight: '1.7' }}>
              Thailand&apos;s film sector generated over ฿7.7 billion (~$245M USD) from 546 foreign productions in 2025. Bangkok offers one of the deepest talent pools in Southeast Asia, world-class equipment infrastructure, and a government that actively supports foreign production through the 30% cash rebate program.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
              {[
                { icon: <Camera size={18} />, text: 'Multiple full-service equipment rental houses' },
                { icon: <Award size={18} />, text: 'Internationally trained, experienced crew' },
                { icon: <Globe size={18} />, text: 'Diverse locations — city, temples, beaches, jungle' },
                { icon: <Zap size={18} />, text: 'Established infrastructure & studio facilities' },
              ].map(item => (
                <div key={item.text} className="flex items-start gap-4 p-7 rounded-xl" style={{ background: 'var(--color-surface-2)', border: '1px solid var(--color-border)' }}>
                  <span className="shrink-0 mt-0.5" style={{ color: 'var(--color-accent)' }}>{item.icon}</span>
                  <span className="text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-36 md:py-56">
        <div className="container-narrow text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ fontFamily: 'var(--font-display)' }}>
            Let&apos;s Make Something Great
          </h2>
          <p className="text-base mb-12 max-w-lg mx-auto" style={{ color: 'var(--color-text-muted)' }}>
            Tell us about your project and get a transparent quote within 24 hours.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-4 text-base font-semibold rounded-xl transition-all hover:opacity-90" style={{ background: 'var(--color-accent)', color: 'var(--color-accent-text)' }}>
            Get a Free Quote <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}

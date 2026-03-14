import Link from 'next/link';
import { services } from '@/lib/services';
import { getAllBlogPosts } from '@/lib/blog';
import { ArrowRight, CheckCircle2, Play, ChevronRight, Star, Globe, DollarSign, Clock, Users, Zap } from 'lucide-react';

export default function HomePage() {
  const posts = getAllBlogPosts().slice(0, 2);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center pt-32 pb-28 md:pt-44 md:pb-40">
        <div className="container-default">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium mb-10" style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', color: 'var(--color-text-muted)' }}>
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--color-accent)' }} />
              Bangkok&apos;s Premier International Production Company
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-10" style={{ fontFamily: 'var(--font-display)', lineHeight: '1.02' }}>
              World-Class Video<br />
              <span className="text-gradient">Production in Bangkok</span>
            </h1>
            <p className="text-lg md:text-xl mb-14 max-w-2xl" style={{ color: 'var(--color-text-muted)', lineHeight: '1.7' }}>
              International quality. English-speaking crew. 40–60% cost savings vs. Western markets.
              Transparent pricing, no surprises.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold rounded-xl transition-all hover:opacity-90" style={{ background: 'var(--color-accent)', color: 'var(--color-accent-text)' }}>
                Get a Free Quote <ArrowRight size={18} />
              </Link>
              <Link href="/services" className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium rounded-xl transition-all" style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', color: 'var(--color-text-muted)' }}>
                <Play size={16} /> View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="py-10" style={{ borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: <Globe size={18} />, label: 'International Clients' },
              { icon: <DollarSign size={18} />, label: 'Transparent Pricing' },
              { icon: <Clock size={18} />, label: '24hr Quote Turnaround' },
              { icon: <Users size={18} />, label: 'English-Speaking Crew' },
            ].map(item => (
              <div key={item.label} className="flex items-center gap-3 text-sm" style={{ color: 'var(--color-text-muted)' }}>
                <span style={{ color: 'var(--color-accent)' }}>{item.icon}</span>
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-28 md:py-40">
        <div className="container-default">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>Production Services</h2>
              <p className="text-base mt-4" style={{ color: 'var(--color-text-muted)' }}>End-to-end video production for every need.</p>
            </div>
            <Link href="/services" className="inline-flex items-center gap-1.5 text-sm font-medium shrink-0" style={{ color: 'var(--color-accent)' }}>
              All services <ChevronRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 6).map(service => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group p-8 rounded-2xl transition-all hover:translate-y-[-2px]"
                style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)' }}
              >
                <div className="text-2xl mb-5">{service.icon}</div>
                <h3 className="text-lg font-semibold mb-3" style={{ fontFamily: 'var(--font-display)' }}>{service.name}</h3>
                <p className="text-sm mb-5" style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>{service.shortDescription}</p>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium" style={{ color: 'var(--color-accent)' }}>
                  Learn more <ChevronRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Bangkok */}
      <section className="py-28 md:py-40" style={{ background: 'var(--color-surface)' }}>
        <div className="container-default">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ fontFamily: 'var(--font-display)' }}>Why Bangkok?</h2>
              <p className="text-base mb-12" style={{ color: 'var(--color-text-muted)', lineHeight: '1.7' }}>
                Thailand generated ฿7.7 billion (~$245M USD) from 546 foreign productions in 2025. Bangkok offers world-class infrastructure, diverse locations, and a 30% government cash rebate for qualifying international productions.
              </p>
              <div className="space-y-4">
                {[
                  '40–60% cost savings vs. US, UK, and Australian markets',
                  'English-speaking crew trained to international standards',
                  'RED, Sony FX, and ARRI camera systems available',
                  '30% Thailand government cash rebate program',
                  'Diverse locations: city, temples, beaches, jungle, mountains',
                  'Established studio facilities and post-production houses',
                ].map(item => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="shrink-0 mt-0.5" style={{ color: 'var(--color-accent)' }} />
                    <span className="text-sm" style={{ color: 'var(--color-text-muted)' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              {[
                { value: '฿7.7B', label: 'Generated from foreign productions in Thailand (2025)', sub: '~$245M USD' },
                { value: '546', label: 'Foreign productions filmed in Thailand in 2025' },
                { value: '30%', label: 'Government cash rebate for qualifying productions' },
                { value: '40–60%', label: 'Typical cost savings vs. Western production markets' },
              ].map(stat => (
                <div key={stat.label} className="p-6 rounded-2xl" style={{ background: 'var(--color-surface-2)', border: '1px solid var(--color-border)' }}>
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-3xl font-bold" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-accent)' }}>{stat.value}</span>
                    {stat.sub && <span className="text-sm" style={{ color: 'var(--color-text-faint)' }}>{stat.sub}</span>}
                  </div>
                  <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-28 md:py-40">
        <div className="container-default">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: 'var(--font-display)' }}>How It Works</h2>
            <p className="text-base" style={{ color: 'var(--color-text-muted)', lineHeight: '1.7' }}>Simple, transparent, and professional from brief to delivery.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { num: '01', title: 'Brief & Quote', desc: 'Share your project details. Receive a transparent, itemized quote within 24 hours.' },
              { num: '02', title: 'Pre-Production', desc: 'We handle location scouting, permits, crew scheduling, and equipment logistics.' },
              { num: '03', title: 'Production', desc: 'Professional crew executes your vision with world-class equipment and expertise.' },
              { num: '04', title: 'Post & Delivery', desc: 'Editing, color grading, and sound design. Delivered on time, on spec, on budget.' },
            ].map(step => (
              <div key={step.num} className="p-8 rounded-2xl" style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)' }}>
                <span className="text-4xl font-bold block mb-5" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-accent)', opacity: 0.5 }}>{step.num}</span>
                <h3 className="text-base font-semibold mb-3" style={{ fontFamily: 'var(--font-display)' }}>{step.title}</h3>
                <p className="text-sm" style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-28 md:py-40" style={{ background: 'var(--color-surface)' }}>
        <div className="container-default">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: 'var(--font-display)' }}>What Clients Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { quote: 'The transparency was unlike any production company we\'d worked with before. Every line item was explained, and they delivered on every promise.', name: 'Sarah M.', title: 'Marketing Director, Global Tech Brand' },
              { quote: 'We needed a Bangkok production company that could meet our international quality standards. VidFlair did that and came in 45% under what we\'d budgeted for a US shoot.', name: 'James K.', title: 'VP Creative, Retail Brand' },
              { quote: 'Communication was flawless. Our English-speaking producer was responsive at every step. The final product exceeded expectations.', name: 'Lisa T.', title: 'Content Director, Media Company' },
            ].map(t => (
              <div key={t.name} className="p-8 rounded-2xl flex flex-col" style={{ background: 'var(--color-surface-2)', border: '1px solid var(--color-border)' }}>
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" style={{ color: 'var(--color-accent)' }} />)}
                </div>
                <p className="text-sm flex-1 mb-6" style={{ color: 'var(--color-text-muted)', lineHeight: '1.7' }}>&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs" style={{ color: 'var(--color-text-faint)' }}>{t.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog */}
      {posts.length > 0 && (
        <section className="py-28 md:py-40">
          <div className="container-default">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>Production Insights</h2>
                <p className="text-base mt-4" style={{ color: 'var(--color-text-muted)' }}>Guides and knowledge for filming in Bangkok.</p>
              </div>
              <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm font-medium shrink-0" style={{ color: 'var(--color-accent)' }}>
                All articles <ChevronRight size={16} />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {posts.map(p => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="group p-8 rounded-2xl transition-all hover:translate-y-[-2px]" style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)' }}>
                  <span className="text-xs font-medium px-2.5 py-1 rounded-full mb-5 inline-block" style={{ background: 'var(--color-accent-muted)', color: 'var(--color-accent)' }}>{p.category}</span>
                  <h3 className="text-lg font-semibold mb-3 group-hover:text-[var(--color-accent)] transition-colors" style={{ fontFamily: 'var(--font-display)' }}>{p.title}</h3>
                  <p className="text-sm mb-5" style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>{p.excerpt.slice(0, 100)}…</p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium" style={{ color: 'var(--color-accent)' }}>Read more <ArrowRight size={14} /></span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-28 md:py-40" style={{ background: 'var(--color-surface)' }}>
        <div className="container-narrow text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8" style={{ fontFamily: 'var(--font-display)', lineHeight: '1.1' }}>
            Ready to Produce<br />
            <span className="text-gradient">Your Next Video?</span>
          </h2>
          <p className="text-lg mb-12 max-w-lg mx-auto" style={{ color: 'var(--color-text-muted)', lineHeight: '1.7' }}>
            Get a transparent, itemized quote within 24 hours. No obligation, no surprises.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold rounded-xl transition-all hover:opacity-90" style={{ background: 'var(--color-accent)', color: 'var(--color-accent-text)' }}>
              Get a Free Quote <ArrowRight size={18} />
            </Link>
            <Link href="/services" className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium rounded-xl transition-all" style={{ background: 'transparent', border: '1px solid var(--color-border)', color: 'var(--color-text-muted)' }}>
              Explore Services <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

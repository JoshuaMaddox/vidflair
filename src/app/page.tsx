import Link from 'next/link';
import { services } from '@/lib/services';
import { getAllBlogPosts } from '@/lib/blog';
import FAQSection from '@/components/FAQSection';
import ContactForm from '@/components/ContactForm';
import { FAQPageJsonLd } from '@/components/JsonLd';
import { ArrowRight, Play, Globe, DollarSign, Zap, Users, Camera, Film, Headphones, Clapperboard } from 'lucide-react';

const homeFaqs = [
  { question: 'How much does video production cost in Bangkok?', answer: 'Costs vary by project type. Social media videos start from ฿15,000 ($425 USD), corporate videos from ฿150,000 ($4,200 USD), and event coverage from ฿25,000 ($710 USD). We provide transparent, itemized quotes within 24 hours — no hidden fees, no surprises.' },
  { question: 'Do you provide English-speaking video crews?', answer: 'Yes. Our entire production team — from producers and directors to camera operators and editors — communicates fluently in English. We also provide bilingual Thai-English coordination for local logistics, permits, and talent.' },
  { question: 'How long does a typical video project take?', answer: 'Most projects take 2-6 weeks from brief to final delivery. Social media content can be turned around in 5-7 business days. Corporate videos typically require 3-6 weeks. Rush timelines are available for time-sensitive projects.' },
  { question: 'Can you work with international brands remotely?', answer: 'Absolutely. We regularly work with brands across the US, UK, Europe, and APAC. Our workflow includes video calls for briefing, shared cloud folders for asset review, and platform-agnostic delivery in any format your team needs.' },
  { question: 'What equipment do you use?', answer: 'We shoot on RED, Sony FX, and ARRI camera systems depending on project requirements. Our grip, lighting, and audio packages are sourced from Bangkok\'s top equipment rental houses. Drone work uses DJI Mavic 4 Pro and Inspire 3 platforms.' },
  { question: 'Do you handle filming permits in Thailand?', answer: 'Yes. We manage all Thailand Film Office (TFO) permit applications, Film Board Officer coordination, location permits, and logistics as a standard part of our production service. We also assist with the 30% government cash rebate application for qualifying productions.' },
];

const serviceIcons: Record<string, React.ReactNode> = {
  'corporate-video-production-bangkok': <Film size={24} />,
  'social-media-video-production-bangkok': <Zap size={24} />,
  'event-videography-bangkok': <Camera size={24} />,
  'drone-videography-bangkok': <Globe size={24} />,
  'product-video-production-bangkok': <Clapperboard size={24} />,
  'real-estate-video-bangkok': <Play size={24} />,
  'post-production-bangkok': <Headphones size={24} />,
  'youtube-production-bangkok': <Users size={24} />,
};

export default function HomePage() {
  const posts = getAllBlogPosts().slice(0, 3);

  return (
    <>
      <FAQPageJsonLd faqs={homeFaqs} />

      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 opacity-30" style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(232,255,71,0.15) 0%, transparent 70%)' }} />
        <div className="container-wide relative">
          <div className="max-w-4xl">
            <p className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium tracking-wide uppercase mb-6" style={{ background: 'var(--color-accent-muted)', color: 'var(--color-accent)' }}>
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--color-accent)' }} />
              Video Production in Bangkok
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6" style={{ fontFamily: 'var(--font-display)', lineHeight: '1.05' }}>
              Your brand deserves{' '}
              <span className="text-gradient">world-class video</span>
              {' '}— at Bangkok prices
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mb-10" style={{ color: 'var(--color-text-muted)', lineHeight: '1.7' }}>
              Professional video production for international brands and businesses.
              English-speaking crew, transparent pricing, and 40–60% savings compared to Western markets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-semibold rounded-xl transition-all hover:opacity-90" style={{ background: 'var(--color-accent)', color: 'var(--color-accent-text)' }}>
                Get a Free Quote <ArrowRight size={18} />
              </Link>
              <Link href="/services/corporate-video-production-bangkok" className="inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-medium rounded-xl transition-all hover:border-[var(--color-border-hover)]" style={{ border: '1px solid var(--color-border)', color: 'var(--color-text)' }}>
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="py-8 border-y" style={{ borderColor: 'var(--color-border)' }}>
        <div className="container-wide">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {['English-Speaking Crew', '40–60% Cost Savings', '24-Hour Quotes', 'CAAT Licensed Drone Ops', '30% Gov. Rebate Eligible'].map(item => (
              <span key={item} className="text-xs font-medium tracking-wide uppercase" style={{ color: 'var(--color-text-faint)' }}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 md:py-28">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              Everything You Need to<br className="hidden sm:block" /> Produce Great Video
            </h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: 'var(--color-text-muted)' }}>
              From concept to delivery — corporate films, social content, drone aerials, event coverage, and post-production, all under one roof in Bangkok.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map(service => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group relative p-6 rounded-2xl transition-all hover:translate-y-[-2px]"
                style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)' }}
              >
                <div className="mb-4 w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'var(--color-accent-muted)', color: 'var(--color-accent)' }}>
                  {serviceIcons[service.slug] || <Play size={24} />}
                </div>
                <h3 className="text-base font-semibold mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                  {service.title.replace(' Bangkok', '')}
                </h3>
                <p className="text-sm mb-4" style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
                  {service.description.slice(0, 120)}…
                </p>
                <span className="text-xs font-medium" style={{ color: 'var(--color-accent)' }}>
                  {service.priceRange}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Bangkok / Why VidFlair */}
      <section className="py-20 md:py-28" style={{ background: 'var(--color-surface)' }}>
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                Why Produce Video<br />in Bangkok?
              </h2>
              <p className="text-base mb-8" style={{ color: 'var(--color-text-muted)', lineHeight: '1.7' }}>
                Thailand's production industry generated over ฿7.7 billion from 546 foreign productions in 2025. Here's why the world's leading brands choose Bangkok.
              </p>
              <div className="space-y-6">
                {[
                  { icon: <DollarSign size={20} />, title: '40–60% Cost Savings', desc: 'The same equipment, crew quality, and production value — at a fraction of US, UK, or Australian prices.' },
                  { icon: <Globe size={20} />, title: 'Diverse Locations', desc: 'Modern skyline, ancient temples, tropical beaches, lush jungle — all within a few hours of Bangkok.' },
                  { icon: <Users size={20} />, title: 'Experienced English-Speaking Crew', desc: 'Bangkok has one of Southeast Asia\'s deepest talent pools of internationally trained, English-fluent professionals.' },
                  { icon: <Zap size={20} />, title: 'Up to 30% Government Rebate', desc: 'Qualifying foreign productions can recover up to 30% of production expenses through Thailand\'s incentive program.' },
                ].map(item => (
                  <div key={item.title} className="flex gap-4">
                    <div className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'var(--color-accent-muted)', color: 'var(--color-accent)' }}>
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-base font-semibold mb-1">{item.title}</h3>
                      <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                Why Choose VidFlair?
              </h2>
              <p className="text-base mb-8" style={{ color: 'var(--color-text-muted)', lineHeight: '1.7' }}>
                We built VidFlair to solve the problems international clients face when producing video in Thailand.
              </p>
              <div className="space-y-5">
                {[
                  { num: '01', title: 'Transparent Pricing', desc: 'Itemized quotes within 24 hours. No hidden markups, no surprise costs. You see exactly what you\'re paying for.' },
                  { num: '02', title: 'Single Point of Contact', desc: 'One English-speaking producer manages your entire project — from brief to final delivery, permits to post-production.' },
                  { num: '03', title: 'Global Quality Standards', desc: 'We shoot on RED, Sony FX, and ARRI systems. Our editors work in DaVinci Resolve and Premiere Pro. Broadcast-ready output, every time.' },
                  { num: '04', title: 'Fast Turnaround', desc: 'Social content in 5-7 days. Corporate video in 3-6 weeks. Rush timelines available when you need them.' },
                ].map(item => (
                  <div key={item.num} className="p-5 rounded-xl" style={{ background: 'var(--color-surface-2)', border: '1px solid var(--color-border)' }}>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-bold" style={{ color: 'var(--color-accent)' }}>{item.num}</span>
                      <h3 className="text-base font-semibold">{item.title}</h3>
                    </div>
                    <p className="text-sm pl-8" style={{ color: 'var(--color-text-muted)' }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cost comparison */}
      <section className="py-20 md:py-28">
        <div className="container-default">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>Bangkok vs. Western Pricing</h2>
            <p className="text-base max-w-xl mx-auto" style={{ color: 'var(--color-text-muted)' }}>
              Same quality. Same standards. Significantly less.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                  <th className="py-4 pr-4 font-semibold">Service</th>
                  <th className="py-4 px-4 font-semibold" style={{ color: 'var(--color-accent)' }}>Bangkok (VidFlair)</th>
                  <th className="py-4 pl-4 font-semibold" style={{ color: 'var(--color-text-muted)' }}>US / UK / Australia</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Corporate video (1-2 min)', '$4,200 – $8,500', '$10,000 – $25,000'],
                  ['Social media video', '$425 – $1,000', '$1,500 – $5,000'],
                  ['Event coverage (full day)', '$1,420 – $3,400', '$3,000 – $8,000'],
                  ['Drone filming (half day)', '$570 – $1,140', '$1,500 – $3,000'],
                  ['Video editing (per minute)', '$225 – $710', '$500 – $2,000'],
                  ['30-sec commercial', '$22,700+', '$50,000 – $150,000'],
                ].map(([service, bkk, west]) => (
                  <tr key={service} style={{ borderBottom: '1px solid var(--color-border)' }}>
                    <td className="py-4 pr-4">{service}</td>
                    <td className="py-4 px-4 font-medium" style={{ color: 'var(--color-accent)' }}>{bkk}</td>
                    <td className="py-4 pl-4" style={{ color: 'var(--color-text-faint)' }}>{west}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Blog preview */}
      <section className="py-20 md:py-28" style={{ background: 'var(--color-surface)' }}>
        <div className="container-wide">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                Production Insights
              </h2>
              <p className="text-base" style={{ color: 'var(--color-text-muted)' }}>
                Guides, pricing breakdowns, and insider knowledge for filming in Thailand.
              </p>
            </div>
            <Link href="/blog" className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium" style={{ color: 'var(--color-accent)' }}>
              All Articles <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {posts.map(post => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group p-6 rounded-2xl transition-all hover:translate-y-[-2px]"
                style={{ background: 'var(--color-surface-2)', border: '1px solid var(--color-border)' }}
              >
                <span className="text-xs font-medium px-2.5 py-1 rounded-full mb-4 inline-block" style={{ background: 'var(--color-accent-muted)', color: 'var(--color-accent)' }}>
                  {post.category}
                </span>
                <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                  {post.title}
                </h3>
                <p className="text-sm mb-4" style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
                  {post.excerpt.slice(0, 140)}…
                </p>
                <span className="text-xs" style={{ color: 'var(--color-text-faint)' }}>
                  {post.readTime}
                </span>
              </Link>
            ))}
          </div>
          <div className="sm:hidden mt-8 text-center">
            <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm font-medium" style={{ color: 'var(--color-accent)' }}>
              All Articles <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection faqs={homeFaqs} title="Frequently Asked Questions About Video Production in Bangkok" />

      {/* CTA / Contact */}
      <section className="py-20 md:py-28" style={{ background: 'var(--color-surface)' }}>
        <div className="container-default">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                Ready to Produce<br />Something Great?
              </h2>
              <p className="text-base mb-8" style={{ color: 'var(--color-text-muted)', lineHeight: '1.7' }}>
                Tell us about your project and get a detailed, itemized quote within 24 hours. No obligation, no hidden fees — just transparent pricing from a team that speaks your language.
              </p>
              <div className="space-y-4">
                {[
                  'Free, no-obligation quote within 24 hours',
                  'Itemized pricing — you see every line item',
                  'Direct communication with your producer',
                  'Flexible timelines to match your schedule',
                ].map(item => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0" style={{ background: 'var(--color-accent)' }}>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2.5 6L5 8.5L9.5 3.5" stroke="var(--color-bg)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-8 rounded-2xl" style={{ background: 'var(--color-surface-2)', border: '1px solid var(--color-border)' }}>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

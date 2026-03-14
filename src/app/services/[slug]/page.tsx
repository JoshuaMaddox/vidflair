import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { services, getServiceBySlug } from '@/lib/services';
import FAQSection from '@/components/FAQSection';
import ContactForm from '@/components/ContactForm';
import { ServiceJsonLd, FAQPageJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { ArrowRight, CheckCircle } from 'lucide-react';

export async function generateStaticParams() {
  return services.map(s => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.metaDescription,
    alternates: { canonical: `https://vidflair.com/services/${service.slug}` },
    openGraph: {
      title: service.title + ' | VidFlair',
      description: service.metaDescription,
      url: `https://vidflair.com/services/${service.slug}`,
    },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const otherServices = services.filter(s => s.slug !== slug).slice(0, 3);

  return (
    <>
      <ServiceJsonLd name={service.title} description={service.description} />
      <FAQPageJsonLd faqs={service.faqs} />
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: 'https://vidflair.com' },
        { name: 'Services', url: 'https://vidflair.com/services/corporate-video-production-bangkok' },
        { name: service.headline, url: `https://vidflair.com/services/${service.slug}` },
      ]} />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container-wide">
          <div className="max-w-3xl">
            <nav className="flex items-center gap-2 text-xs mb-6" style={{ color: 'var(--color-text-faint)' }} aria-label="Breadcrumb">
              <Link href="/" className="hover:text-[var(--color-text)] transition-colors">Home</Link>
              <span>/</span>
              <Link href="/services/corporate-video-production-bangkok" className="hover:text-[var(--color-text)] transition-colors">Services</Link>
              <span>/</span>
              <span style={{ color: 'var(--color-text-muted)' }}>{service.headline}</span>
            </nav>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6" style={{ fontFamily: 'var(--font-display)', lineHeight: '1.05' }}>
              {service.headline}
            </h1>
            <p className="text-lg md:text-xl mb-8" style={{ color: 'var(--color-text-muted)', lineHeight: '1.7' }}>
              {service.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-semibold rounded-xl transition-all hover:opacity-90" style={{ background: 'var(--color-accent)', color: 'var(--color-accent-text)' }}>
                Get a Free Quote <ArrowRight size={18} />
              </Link>
              <div className="inline-flex items-center gap-2 px-7 py-4 text-base font-medium rounded-xl" style={{ border: '1px solid var(--color-border)', color: 'var(--color-accent)' }}>
                {service.priceRange}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-16 md:py-24" style={{ background: 'var(--color-surface)' }}>
        <div className="container-wide">
          <h2 className="text-2xl md:text-3xl font-bold mb-10" style={{ fontFamily: 'var(--font-display)' }}>What&apos;s Included</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {service.features.map(feature => (
              <div key={feature} className="flex items-start gap-3 p-5 rounded-xl" style={{ background: 'var(--color-surface-2)', border: '1px solid var(--color-border)' }}>
                <CheckCircle size={18} className="shrink-0 mt-0.5" style={{ color: 'var(--color-accent)' }} />
                <span className="text-sm font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-24">
        <div className="container-default">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center" style={{ fontFamily: 'var(--font-display)' }}>Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Brief & Quote', desc: 'Share your project details. We send an itemized quote within 24 hours.' },
              { step: '02', title: 'Pre-Production', desc: 'Scripting, scheduling, location scouting, crew assignment, and logistics planning.' },
              { step: '03', title: 'Production', desc: 'Professional filming with our experienced English-speaking crew in Bangkok.' },
              { step: '04', title: 'Post & Delivery', desc: 'Editing, color grading, sound design, revisions, and final delivery in your format.' },
            ].map(item => (
              <div key={item.step} className="text-center p-6 rounded-2xl" style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)' }}>
                <span className="text-3xl font-bold mb-3 block" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-accent)' }}>{item.step}</span>
                <h3 className="text-base font-semibold mb-2" style={{ fontFamily: 'var(--font-display)' }}>{item.title}</h3>
                <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection faqs={service.faqs} title={`${service.headline} — FAQ`} />

      {/* CTA with form */}
      <section className="py-16 md:py-24" style={{ background: 'var(--color-surface)' }}>
        <div className="container-default">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                Get a Quote for {service.headline}
              </h2>
              <p className="text-base mb-8" style={{ color: 'var(--color-text-muted)', lineHeight: '1.7' }}>
                Describe your project and we&apos;ll send you a transparent, itemized quote within 24 hours. No obligation, no hidden costs.
              </p>
              <p className="text-sm" style={{ color: 'var(--color-text-faint)' }}>
                Starting from <strong style={{ color: 'var(--color-accent)' }}>{service.priceRange}</strong>
              </p>
            </div>
            <div className="p-8 rounded-2xl" style={{ background: 'var(--color-surface-2)', border: '1px solid var(--color-border)' }}>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Other services */}
      <section className="py-16 md:py-24">
        <div className="container-wide">
          <h2 className="text-2xl md:text-3xl font-bold mb-10" style={{ fontFamily: 'var(--font-display)' }}>Other Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherServices.map(s => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group p-6 rounded-2xl transition-all hover:translate-y-[-2px]"
                style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)' }}
              >
                <h3 className="text-base font-semibold mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                  {s.title.replace(' Bangkok', '')}
                </h3>
                <p className="text-sm mb-3" style={{ color: 'var(--color-text-muted)' }}>
                  {s.description.slice(0, 100)}…
                </p>
                <span className="text-xs font-medium" style={{ color: 'var(--color-accent)' }}>{s.priceRange}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

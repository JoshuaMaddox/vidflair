import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { services, getServiceBySlug } from '@/lib/services';
import FAQSection from '@/components/FAQSection';
import { BreadcrumbJsonLd, ServiceJsonLd } from '@/components/JsonLd';
import ContactForm from '@/components/ContactForm';
import { ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';

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
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const otherServices = services.filter(s => s.slug !== slug).slice(0, 3);

  return (
    <>
      <ServiceJsonLd service={service} />
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: 'https://vidflair.com' },
        { name: 'Services', url: 'https://vidflair.com/services' },
        { name: service.title, url: `https://vidflair.com/services/${service.slug}` },
      ]} />

      <section className="pt-40 pb-20 md:pt-52 md:pb-32">
        <div className="container-default">
          <nav className="flex items-center gap-2 text-xs mb-8" style={{ color: 'var(--color-text-faint)' }} aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[var(--color-text)] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-[var(--color-text)] transition-colors">Services</Link>
            <span>/</span>
            <span style={{ color: 'var(--color-text-muted)' }}>{service.title}</span>
          </nav>
          <div className="max-w-3xl">
            <div className="text-5xl mb-8">{service.icon}</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-10" style={{ fontFamily: 'var(--font-display)', lineHeight: '1.05' }}>
              {service.headline}
            </h1>
            <p className="text-lg md:text-xl mb-10" style={{ color: 'var(--color-text-muted)', lineHeight: '1.7' }}>
              {service.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-4 text-base font-semibold rounded-xl transition-all hover:opacity-90" style={{ background: 'var(--color-accent)', color: 'var(--color-accent-text)' }}>
                Get a Free Quote <ArrowRight size={18} />
              </Link>
              <Link href="/pricing" className="inline-flex items-center gap-2 px-7 py-4 text-base font-medium rounded-xl transition-all" style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', color: 'var(--color-text-muted)' }}>
                See Pricing <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-28 md:py-40" style={{ background: 'var(--color-surface)' }}>
        <div className="container-default">
          <h2 className="text-2xl md:text-3xl font-bold mb-16" style={{ fontFamily: 'var(--font-display)' }}>What&apos;s Included</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {service.features.map(feature => (
              <div key={feature} className="flex items-start gap-4 p-6 rounded-xl" style={{ background: 'var(--color-surface-2)', border: '1px solid var(--color-border)' }}>
                <CheckCircle2 size={20} className="shrink-0 mt-0.5" style={{ color: 'var(--color-accent)' }} />
                <span className="text-sm" style={{ lineHeight: '1.6' }}>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      {service.process && (
        <section className="py-28 md:py-40">
          <div className="container-default">
            <h2 className="text-2xl md:text-3xl font-bold mb-16" style={{ fontFamily: 'var(--font-display)' }}>Our Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {service.process.map((step, i) => (
                <div key={i} className="p-8 rounded-2xl" style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)' }}>
                  <span className="text-4xl font-bold block mb-5" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-accent)', opacity: 0.5 }}>{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="text-base font-semibold mb-3" style={{ fontFamily: 'var(--font-display)' }}>{step.title}</h3>
                  <p className="text-sm" style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Pricing */}
      {service.pricing && (
        <section className="py-28 md:py-40" style={{ background: 'var(--color-surface)' }}>
          <div className="container-default">
            <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ fontFamily: 'var(--font-display)' }}>Pricing</h2>
            <p className="text-base mb-16" style={{ color: 'var(--color-text-muted)' }}>Indicative pricing for {service.title.toLowerCase()} in Bangkok. Final quote itemized line-by-line.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {service.pricing.map(tier => (
                <div key={tier.name} className="p-10 rounded-2xl" style={{ background: 'var(--color-surface-2)', border: '1px solid var(--color-border)' }}>
                  <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: 'var(--font-display)' }}>{tier.name}</h3>
                  <p className="text-2xl font-bold mb-3" style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-display)' }}>{tier.price}</p>
                  <p className="text-sm mb-8" style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>{tier.description}</p>
                  <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-medium" style={{ color: 'var(--color-accent)' }}>
                    Get a quote <ArrowRight size={14} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="py-28 md:py-40">
          <div className="container-default">
            <FAQSection faqs={service.faqs} title={`${service.title} FAQs`} />
          </div>
        </section>
      )}

      {/* CTA with form */}
      <section className="py-28 md:py-40" style={{ background: 'var(--color-surface)' }}>
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                Get a Quote for {service.title}
              </h2>
              <p className="text-base mb-10" style={{ color: 'var(--color-text-muted)', lineHeight: '1.7' }}>
                Tell us about your {service.title.toLowerCase()} project and receive a transparent, itemized quote within 24 hours.
              </p>
              <div className="space-y-4">
                {service.features.slice(0, 4).map(f => (
                  <div key={f} className="flex items-center gap-3">
                    <CheckCircle2 size={16} style={{ color: 'var(--color-accent)' }} />
                    <span className="text-sm" style={{ color: 'var(--color-text-muted)' }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-10 rounded-2xl" style={{ background: 'var(--color-surface-2)', border: '1px solid var(--color-border)' }}>
              <ContactForm compact />
            </div>
          </div>
        </div>
      </section>

      {/* Related services */}
      {otherServices.length > 0 && (
        <section className="py-28 md:py-40">
          <div className="container-default">
            <h2 className="text-2xl font-bold mb-12" style={{ fontFamily: 'var(--font-display)' }}>Related Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherServices.map(s => (
                <Link key={s.slug} href={`/services/${s.slug}`} className="group p-8 rounded-2xl transition-all hover:translate-y-[-2px]" style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)' }}>
                  <div className="text-2xl mb-4">{s.icon}</div>
                  <h3 className="text-base font-semibold mb-2 group-hover:text-[var(--color-accent)] transition-colors" style={{ fontFamily: 'var(--font-display)' }}>{s.name}</h3>
                  <p className="text-sm" style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>{s.shortDescription}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

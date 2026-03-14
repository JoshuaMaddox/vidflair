export function LocalBusinessJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'VidFlair',
    description: 'Professional video production company in Bangkok, Thailand serving international brands.',
    url: 'https://vidflair.com',
    email: 'hello@vidflair.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bangkok',
      addressCountry: 'TH',
    },
    areaServed: 'Worldwide',
    serviceType: 'Video Production',
    priceRange: '$$$',
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function BreadcrumbJsonLd({ items }: { items: { name: string; url: string }[] }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function BlogPostJsonLd({ title, description, datePublished, author, url }: {
  title: string;
  description: string;
  datePublished: string;
  author: string;
  url: string;
}) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    datePublished,
    author: { '@type': 'Person', name: author },
    publisher: { '@type': 'Organization', name: 'VidFlair', url: 'https://vidflair.com' },
    url,
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function ServiceJsonLd({ service }: { service: { title: string; description: string; slug: string } }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.description,
    provider: { '@type': 'Organization', name: 'VidFlair', url: 'https://vidflair.com' },
    url: `https://vidflair.com/services/${service.slug}`,
    areaServed: 'Worldwide',
    serviceType: 'Video Production',
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

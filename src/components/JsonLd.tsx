export function LocalBusinessJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'VidFlair',
    description: 'Professional video production company in Bangkok, Thailand. Corporate video, social media content, event videography, drone filming, post-production, and YouTube production for international brands and businesses.',
    url: 'https://vidflair.com',
    telephone: '+66-XX-XXX-XXXX',
    email: 'hello@vidflair.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bangkok',
      addressCountry: 'TH'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 13.7563,
      longitude: 100.5018
    },
    areaServed: ['Bangkok', 'Thailand', 'Southeast Asia'],
    priceRange: '$$',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00'
    },
    sameAs: [],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Video Production Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Corporate Video Production', serviceType: 'Video Production' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Social Media Video Production', serviceType: 'Video Production' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Event Videography', serviceType: 'Video Production' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Drone Videography', serviceType: 'Video Production' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Post-Production Services', serviceType: 'Video Editing' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'YouTube Production', serviceType: 'Video Production' } }
      ]
    },
    creator: {
      '@type': 'SoftwareApplication',
      name: 'Perplexity Computer',
      url: 'https://www.perplexity.ai/computer'
    }
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function FAQPageJsonLd({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function ServiceJsonLd({ name, description, provider = 'VidFlair', areaServed = 'Bangkok, Thailand' }: { name: string; description: string; provider?: string; areaServed?: string }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'ProfessionalService',
      name: provider,
      url: 'https://vidflair.com'
    },
    areaServed: { '@type': 'City', name: areaServed },
    serviceType: 'Video Production'
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function BlogPostJsonLd({ title, description, datePublished, author, url }: { title: string; description: string; datePublished: string; author: string; url: string }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    datePublished,
    author: { '@type': 'Organization', name: author },
    publisher: { '@type': 'Organization', name: 'VidFlair', url: 'https://vidflair.com' },
    url,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url }
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
      item: item.url
    }))
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

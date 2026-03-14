export interface Service {
  slug: string;
  title: string;
  headline: string;
  description: string;
  metaDescription: string;
  features: string[];
  faqs: { question: string; answer: string }[];
  priceRange: string;
}

export const services: Service[] = [
  {
    slug: 'corporate-video-production-bangkok',
    title: 'Corporate Video Production Bangkok',
    headline: 'Corporate Video Production in Bangkok',
    description: 'Professional corporate video production for international brands and businesses in Bangkok. Company profiles, training videos, internal communications, and brand films produced to global standards.',
    metaDescription: 'Bangkok corporate video production for international brands. Company profiles, training videos, brand films. English-speaking crew, transparent pricing. Get a free quote today.',
    features: ['Company profile videos', 'Training & onboarding videos', 'Internal communications', 'Brand films & documentaries', 'Executive interviews', 'Annual report videos'],
    faqs: [
      { question: 'How much does a corporate video cost in Bangkok?', answer: 'Corporate video production in Bangkok typically costs between ฿150,000–฿300,000 ($4,200–$8,500 USD) for a 1–2 minute piece. This includes pre-production planning, a professional crew, one day of filming, and full post-production. Prices vary based on complexity, locations, and talent requirements. We provide transparent, itemized quotes within 24 hours.' },
      { question: 'How long does corporate video production take in Thailand?', answer: 'A typical corporate video takes 3–6 weeks from brief to delivery. Pre-production (scripting, planning, logistics) takes 1–3 weeks. Filming usually requires 1–2 days. Post-production (editing, color grading, sound design, revisions) takes 1–3 weeks. Rush timelines are available for urgent projects.' },
      { question: 'Do you provide English-speaking video crews in Bangkok?', answer: 'Yes. Our entire production team communicates fluently in English. From the producer and director to camera operators and editors, every team member works in English. We also provide bilingual Thai-English coordination for any local logistics, permits, or talent.' },
      { question: 'Can you handle corporate video projects for multinational companies?', answer: 'Absolutely. We regularly produce video content for multinational corporations with regional headquarters in Bangkok. Our production standards align with Fortune 500 brand guidelines, and we deliver broadcast-quality footage in any format your team requires.' }
    ],
    priceRange: 'From ฿150,000 ($4,200 USD)',
  },
  {
    slug: 'social-media-video-production-bangkok',
    title: 'Social Media Video Production Bangkok',
    headline: 'Social Media Video Production in Bangkok',
    description: 'High-impact short-form video content for TikTok, Instagram Reels, YouTube Shorts, and LinkedIn. Monthly content packages designed to keep your brand visible and growing across every platform.',
    metaDescription: 'Bangkok social media video production — TikTok, Instagram Reels, YouTube Shorts. Monthly content packages for brands. Professional quality, fast turnaround. Get started today.',
    features: ['TikTok & Instagram Reels', 'YouTube Shorts', 'LinkedIn video content', 'Product demos & unboxings', 'Behind-the-scenes content', 'Monthly retainer packages'],
    faqs: [
      { question: 'Do you offer monthly social media video packages in Bangkok?', answer: 'Yes. We offer monthly content retainer packages starting from 4 videos per month. Each package includes concept development, filming, editing, captioning, and platform-optimized formatting. This is the most cost-effective way to maintain a consistent brand presence on social media.' },
      { question: 'What social media platforms do you produce content for?', answer: 'We produce optimized video content for TikTok, Instagram Reels, YouTube Shorts, LinkedIn, Facebook, and X (Twitter). Each video is formatted, captioned, and optimized for the specific platform\'s algorithm and audience behavior.' },
      { question: 'How fast can you deliver social media videos?', answer: 'Standard turnaround is 5–7 business days from filming. For retainer clients, we can deliver within 48 hours for time-sensitive content. We batch-film multiple pieces in a single session to maximize efficiency and minimize your time commitment.' },
      { question: 'What is the cost of social media video production in Bangkok?', answer: 'Individual social media videos start from ฿15,000 ($425 USD) per piece. Monthly packages of 4+ videos start from ฿45,000 ($1,275 USD) per month, which reduces the per-video cost significantly. All prices include filming, editing, captioning, and platform formatting.' }
    ],
    priceRange: 'From ฿15,000/video ($425 USD)',
  },
  {
    slug: 'event-videography-bangkok',
    title: 'Event Videography Bangkok',
    headline: 'Event Videography in Bangkok',
    description: 'Professional event coverage for conferences, product launches, corporate events, and galas in Bangkok. Multi-camera setups, same-week highlight reels, and full event documentation.',
    metaDescription: 'Bangkok event videography for conferences, launches, galas. Multi-camera coverage, same-week highlights. English-speaking crew. Book your event now.',
    features: ['Conference & seminar coverage', 'Product launch videos', 'Gala & award ceremony filming', 'Live streaming support', 'Same-week highlight reels', 'Multi-camera setups'],
    faqs: [
      { question: 'How much does event videography cost in Bangkok?', answer: 'Event videography in Bangkok starts from ฿25,000 ($710 USD) for half-day coverage with a single camera operator. Full-day multi-camera coverage ranges from ฿50,000–฿120,000 ($1,420–$3,400 USD) depending on the number of cameras, crew size, and deliverables required.' },
      { question: 'Can you provide same-day or same-week event highlight videos?', answer: 'Yes. We offer same-day 60-second social media highlights for immediate sharing, and a polished 2–3 minute highlight reel within 3–5 business days after the event. Full event documentation is typically delivered within 2 weeks.' },
      { question: 'Do you offer live streaming for Bangkok events?', answer: 'Yes. We provide professional multi-camera live streaming for conferences, product launches, and corporate events. We stream to YouTube, Facebook Live, LinkedIn Live, or your custom RTMP endpoint with professional graphics overlays, lower thirds, and real-time switching.' }
    ],
    priceRange: 'From ฿25,000 ($710 USD)',
  },
  {
    slug: 'drone-videography-bangkok',
    title: 'Drone Videography Bangkok',
    headline: 'Drone Videography in Bangkok',
    description: 'Licensed drone cinematography for commercial, real estate, and brand content in Bangkok and across Thailand. DJI Mavic and Inspire platforms, fully insured, CAAT-compliant operations.',
    metaDescription: 'Licensed drone videography in Bangkok — aerial filming for real estate, commercial, brand content. CAAT-compliant, fully insured. Get a quote.',
    features: ['Commercial aerial filming', 'Real estate aerial tours', 'Construction progress documentation', 'Tourism & hospitality aerials', 'FPV cinematic flights', 'CAAT-licensed operations'],
    faqs: [
      { question: 'Is drone filming legal in Bangkok?', answer: 'Yes, with proper authorization. All drone operations in Bangkok require a permit from the Civil Aviation Authority of Thailand (CAAT) and additional location-specific permissions. We handle all permit applications, insurance, and compliance requirements as part of every project.' },
      { question: 'How much does drone videography cost in Bangkok?', answer: 'Drone videography starts from ฿20,000 ($570 USD) per half-day session, including a licensed pilot, DJI equipment, and basic editing. Full-day shoots with advanced platforms and FPV capabilities range from ฿40,000–฿80,000 ($1,140–$2,280 USD).' },
      { question: 'What drone equipment do you use?', answer: 'We operate DJI Mavic 4 Pro and DJI Inspire 3 platforms for standard aerial work, plus custom FPV rigs for cinematic indoor and chase sequences. All equipment is fully insured and maintained to manufacturer specifications.' }
    ],
    priceRange: 'From ฿20,000 ($570 USD)',
  },
  {
    slug: 'product-video-production-bangkok',
    title: 'Product Video Production Bangkok',
    headline: 'Product Video Production in Bangkok',
    description: 'Showcase your products with studio-quality video content. E-commerce product videos, unboxings, demonstrations, and lifestyle shoots produced in Bangkok at a fraction of Western costs.',
    metaDescription: 'Product video production in Bangkok for e-commerce, Amazon, Shopify. Studio shoots, lifestyle content, unboxings. Professional quality at Thai prices.',
    features: ['E-commerce product videos', 'Amazon & Shopify videos', 'Product demonstrations', 'Unboxing videos', 'Lifestyle product shoots', '360° product spins'],
    faqs: [
      { question: 'How much does a product video cost in Bangkok?', answer: 'Studio product videos start from ฿12,000 ($340 USD) per SKU for a clean, professional product showcase. Lifestyle product shoots with models and locations start from ฿35,000 ($1,000 USD). Batch pricing is available for catalogs of 10+ products.' },
      { question: 'Can you produce Amazon-ready product videos?', answer: 'Yes. We produce video content that meets Amazon, Shopify, and major e-commerce platform specifications — including exact aspect ratios, duration limits, and quality requirements. We deliver in all required formats.' }
    ],
    priceRange: 'From ฿12,000/SKU ($340 USD)',
  },
  {
    slug: 'real-estate-video-bangkok',
    title: 'Real Estate Video Bangkok',
    headline: 'Real Estate Video Production in Bangkok',
    description: 'Luxury property tours, aerial footage, and cinematic walkthroughs for Bangkok\'s real estate market. Designed for agents, developers, and property management companies.',
    metaDescription: 'Bangkok real estate video production — luxury property tours, aerial drone footage, cinematic walkthroughs for agents and developers. Fast turnaround.',
    features: ['Luxury condo walkthroughs', 'Aerial property tours', 'Development progress videos', 'Agent introduction videos', 'Virtual tour production', 'Neighborhood showcases'],
    faqs: [
      { question: 'How much does a real estate video cost in Bangkok?', answer: 'A standard property walkthrough video costs ฿15,000–฿30,000 ($425–$850 USD) depending on property size. Premium packages with drone aerials, twilight shots, and lifestyle staging start from ฿45,000 ($1,275 USD). Volume pricing available for agencies with multiple listings.' },
      { question: 'How quickly can you deliver a property video?', answer: 'Standard delivery is 5–7 business days from filming. Express 48-hour turnaround is available for an additional fee. For ongoing agency partnerships, we offer priority scheduling and same-week delivery.' }
    ],
    priceRange: 'From ฿15,000 ($425 USD)',
  },
  {
    slug: 'post-production-bangkok',
    title: 'Post Production Services Bangkok',
    headline: 'Post-Production Services in Bangkok',
    description: 'Send us your raw footage from anywhere in the world. Professional editing, color grading, sound design, motion graphics, and VFX delivered from Bangkok at internationally competitive rates.',
    metaDescription: 'Bangkok post-production services — video editing, color grading, sound design, VFX, motion graphics. Send raw footage, get polished content. International rates.',
    features: ['Video editing & assembly', 'Color grading (DaVinci Resolve)', 'Sound design & mixing', 'Motion graphics & titles', 'VFX & compositing', 'Subtitling & localization'],
    faqs: [
      { question: 'Can I send raw footage to Bangkok for editing?', answer: 'Absolutely. Many of our clients film locally and send raw footage to our Bangkok editing team via cloud transfer (Frame.io, Google Drive, Dropbox, WeTransfer). You save 40–60% compared to Western post-production rates while getting the same quality output.' },
      { question: 'What post-production software do you use?', answer: 'We work in Adobe Premiere Pro and DaVinci Resolve for editing and color grading, After Effects for motion graphics and VFX, Pro Tools for sound design, and Cinema 4D for 3D elements. We deliver in any format and codec your team requires.' },
      { question: 'How much does video editing cost in Bangkok compared to Western countries?', answer: 'Post-production in Bangkok costs approximately 40–60% less than equivalent services in the US, UK, or Australia. A full edit of a 2–3 minute corporate video typically costs ฿25,000–฿50,000 ($710–$1,420 USD) compared to $2,000–$5,000+ in Western markets. Same quality, significantly lower cost.' }
    ],
    priceRange: 'From ฿8,000 ($225 USD)',
  },
  {
    slug: 'youtube-production-bangkok',
    title: 'YouTube Production Bangkok',
    headline: 'YouTube Production Services in Bangkok',
    description: 'Full-service YouTube channel production in Bangkok. From concept to upload — scripting, filming, editing, thumbnails, SEO optimization, and channel strategy for creators and brands.',
    metaDescription: 'YouTube production services Bangkok — filming, editing, thumbnails, SEO, channel strategy. For creators and brands. Start growing your channel today.',
    features: ['YouTube channel strategy', 'Video scripting & production', 'Professional editing & pacing', 'Thumbnail design', 'YouTube SEO optimization', 'Podcast video production'],
    faqs: [
      { question: 'How much does YouTube video production cost in Bangkok?', answer: 'A single professionally produced YouTube video costs ฿20,000–฿50,000 ($570–$1,420 USD) depending on complexity. Monthly production packages for regular uploaders start from ฿60,000 ($1,700 USD) for 4 videos per month, including scripting, filming, editing, and thumbnail design.' },
      { question: 'Do you help with YouTube channel growth strategy?', answer: 'Yes. Beyond production, we advise on video SEO, title and thumbnail optimization, posting schedules, audience retention tactics, and content series planning. We analyze your channel analytics to inform production decisions that drive subscriber growth and watch time.' }
    ],
    priceRange: 'From ฿20,000 ($570 USD)',
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(s => s.slug === slug);
}

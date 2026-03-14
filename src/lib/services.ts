export interface Service {
  slug: string;
  title: string;
  headline: string;
  description: string;
  metaDescription: string;
  features: string[];
  faqs: { question: string; answer: string }[];
  icon: string;
  name: string;
  shortDescription: string;
  process?: { title: string; desc: string }[];
  pricing?: { name: string; price: string; description: string }[];
}

export const services: Service[] = [
  {
    slug: 'corporate-video',
    name: 'Corporate Video',
    title: 'Corporate Video Production Bangkok',
    headline: 'Corporate Video That Represents Your Brand',
    icon: '🎥',
    shortDescription: 'Company profiles, testimonials, training videos, and internal communications.',
    description: 'Professional corporate video production in Bangkok for international brands. Company profiles, product demos, testimonials, training videos, and internal communications — produced to global broadcast standards.',
    metaDescription: 'Corporate video production in Bangkok. Company profiles, product demos, testimonials, training content. English-speaking crew, transparent pricing, 40-60% below Western rates.',
    features: [
      'English-speaking producer and crew',
      'RED, Sony FX, and ARRI camera systems',
      'Full lighting and grip packages',
      'Location scouting and permit management',
      'Script development and storyboarding',
      'Professional sound recording',
      'Color grading in DaVinci Resolve',
      'Sound design and music licensing',
      'Multiple format delivery',
      'Transparent itemized pricing',
    ],
    process: [
      { title: 'Brief & Quote', desc: 'Share your objectives. Receive an itemized quote within 24 hours.' },
      { title: 'Pre-Production', desc: 'Script, storyboard, location scouting, and crew scheduling.' },
      { title: 'Production', desc: 'Professional crew executes your shoot with world-class equipment.' },
      { title: 'Post & Delivery', desc: 'Edit, grade, mix, and deliver in all required formats.' },
    ],
    pricing: [
      { name: 'Interview / Testimonial', price: '$1,500–$4,000', description: '1-day shoot, 1–2 person crew, edited video with color grade.' },
      { name: 'Company Profile', price: '$4,000–$12,000', description: '2–3 day shoot, full crew, professional grade final film.' },
      { name: 'Campaign / Brand Film', price: '$12,000–$30,000+', description: 'Multi-day shoot, full production, multiple deliverables.' },
    ],
    faqs: [
      { question: 'How long does corporate video production take?', answer: 'Typical timeline is 3–6 weeks from approved brief to final delivery. Rush timelines are possible with advance notice.' },
      { question: 'Do you provide scriptwriting?', answer: 'Yes. We offer full script development services as part of pre-production, or can work with your existing scripts and brand guidelines.' },
      { question: 'Can you handle on-camera talent?', answer: 'Yes. We manage talent casting, contracts, and on-set direction. We work with Bangkok’s established talent pool of English-speaking presenters and actors.' },
      { question: 'What camera systems do you use?', answer: 'We shoot on RED, Sony FX (FX6, FX9), and ARRI systems depending on project requirements and budget.' },
    ],
  },
  {
    slug: 'social-media-content',
    name: 'Social Media Content',
    title: 'Social Media Video Production Bangkok',
    headline: 'Social Content That Stops the Scroll',
    icon: '📱',
    shortDescription: 'Short-form social video for Instagram, TikTok, YouTube, and LinkedIn.',
    description: 'High-quality short-form video production for social media. Optimized for Instagram Reels, TikTok, YouTube Shorts, and LinkedIn. Shot in Bangkok with professional crew and equipment.',
    metaDescription: 'Social media video production in Bangkok. Instagram Reels, TikTok, YouTube Shorts, LinkedIn video. Professional crew, fast turnaround, transparent pricing.',
    features: [
      'Vertical and horizontal format shooting',
      'Platform-optimized editing',
      'Multiple content pieces per shoot day',
      'Trend-aware production style',
      'Fast turnaround (5–7 business days)',
      'Caption and subtitle overlays',
      'Music licensing included',
      'Format variations for all platforms',
    ],
    process: [
      { title: 'Content Brief', desc: 'Define your platform, audience, goals, and content mix.' },
      { title: 'Shoot Day', desc: 'Efficient single-day shoots designed to maximize content output.' },
      { title: 'Edit & Optimize', desc: 'Platform-optimized edits with captions, music, and formatting.' },
      { title: 'Deliver', desc: 'All variations delivered in 5–7 business days.' },
    ],
    pricing: [
      { name: 'Content Sprint', price: '$1,200–$2,500', description: '1-day shoot, 3–5 edited videos (30–60 seconds each).' },
      { name: 'Content Series', price: '$2,500–$5,000', description: '2-day shoot, 8–12 edited videos across multiple formats.' },
      { name: 'Monthly Retainer', price: 'From $3,500/month', description: 'Ongoing content production, 2 shoot days per month.' },
    ],
    faqs: [
      { question: 'How many videos can you produce in a day?', answer: 'Typically 4–8 short-form videos per shoot day depending on complexity, location changes, and format requirements.' },
      { question: 'Do you handle the editing for social platforms?', answer: 'Yes — all editing is platform-optimized. We handle aspect ratios, captions, pacing, and music for each platform.' },
      { question: 'Can you film product content?', answer: 'Yes. We have experience with product and lifestyle content shoots for e-commerce, social, and brand campaigns.' },
    ],
  },
  {
    slug: 'commercial-video',
    name: 'Commercial Video',
    title: 'TV Commercial & Brand Video Production Bangkok',
    headline: 'Commercial Production at Broadcast Quality',
    icon: '🌟',
    shortDescription: 'TV commercials, brand campaigns, and high-end branded content.',
    description: 'High-end commercial and brand video production in Bangkok. TV commercials, digital campaign films, and brand content produced with cinema-grade equipment and experienced crews.',
    metaDescription: 'TV commercial and brand video production in Bangkok. Cinema-grade equipment, experienced crews, 40-60% cost savings vs. Western markets. Contact us for a quote.',
    features: [
      'Cinema-grade camera systems (ARRI, RED)',
      'Full grip, lighting, and production design',
      'Director and DOP sourcing',
      'Casting and talent management',
      'Location scouting across Thailand',
      'Thailand Film Office liaison and rebate advisory',
      'Full post-production (edit, grade, sound)',
      'Broadcast master delivery',
    ],
    process: [
      { title: 'Creative Development', desc: 'Concept, treatment, script, and storyboard development.' },
      { title: 'Pre-Production', desc: 'Casting, locations, permits, crew, equipment, and scheduling.' },
      { title: 'Production', desc: 'Multi-day shoot with full professional crew and equipment.' },
      { title: 'Post-Production', desc: 'Edit, VFX, grade, sound design, and broadcast master delivery.' },
    ],
    pricing: [
      { name: 'Digital Commercial', price: '$9,000–$18,000', description: '2–3 day shoot, professional crew, full post-production.' },
      { name: 'TV Commercial', price: '$18,000–$40,000', description: '3–5 day shoot, full production, broadcast master delivery.' },
      { name: 'Brand Campaign', price: '$40,000+', description: 'Multi-spot campaign, full production and post suite.' },
    ],
    faqs: [
      { question: 'Can international brands access the Thailand 30% rebate?', answer: 'Yes, qualifying productions can receive a 30% cash rebate on qualifying Thai spend. VidFlair can advise on eligibility and assist with applications.' },
      { question: 'Do you work with international directors?', answer: 'Yes. We regularly work as line producers and production service companies for international directors visiting Thailand.' },
      { question: 'What camera systems are available?', answer: 'ARRI ALEXA Mini LF, RED V-Raptor, Sony Venice, and other cinema systems are available through our equipment partners in Bangkok.' },
    ],
  },
  {
    slug: 'event-coverage',
    name: 'Event Coverage',
    title: 'Event Video Coverage Bangkok',
    headline: 'Professional Event Coverage in Bangkok',
    icon: '🎙️',
    shortDescription: 'Conference, exhibition, corporate event, and live event video coverage.',
    description: 'Professional event video coverage in Bangkok and Thailand. Conferences, product launches, exhibitions, galas, and corporate events — captured with multi-camera setups and edited for rapid delivery.',
    metaDescription: 'Event video coverage in Bangkok. Conferences, product launches, exhibitions, and corporate events. Multi-camera, same-day highlights available.',
    features: [
      'Multi-camera event coverage',
      'Same-day highlights available',
      'Live switching and streaming capability',
      'Wireless microphone systems',
      'B-roll and audience coverage',
      'Rapid edit turnaround',
      'Full-day event packages',
      'Speaker and interview coverage',
    ],
    pricing: [
      { name: 'Half-Day Coverage', price: '$800–$2,000', description: '1–2 cameras, highlights edit within 48 hours.' },
      { name: 'Full-Day Event', price: '$2,000–$5,000', description: 'Multi-camera, full coverage, highlights and extended cut.' },
      { name: 'Conference / Multi-Day', price: '$5,000+', description: 'Multi-day coverage, keynote recording, interview packages.' },
    ],
    faqs: [
      { question: 'How quickly can you deliver event highlights?', answer: 'Same-day highlights are possible for key moments. Full edited highlights are typically delivered within 24–48 hours.' },
      { question: 'Do you provide live streaming?', answer: 'Yes. We offer professional live streaming production including multi-camera switching, graphics, and platform distribution.' },
    ],
  },
  {
    slug: 'documentary',
    name: 'Documentary',
    title: 'Documentary Video Production Bangkok',
    headline: 'Documentary Production in Southeast Asia',
    icon: '🎦',
    shortDescription: 'Documentary and long-form content for brands, NGOs, and broadcasters.',
    description: 'Documentary video production in Bangkok and across Thailand. Brand documentaries, NGO and impact films, broadcast documentaries, and long-form content series.',
    metaDescription: 'Documentary video production in Bangkok and Thailand. Brand docs, impact films, and broadcast-quality long-form content. Experienced English-speaking crew.',
    features: [
      'Pre-production research and development',
      'Extended shoot schedules across Thailand',
      'Immersive interview and observational shooting',
      'Drone and aerial footage',
      'Archive and rights management support',
      'Long-form editing and structure development',
      'Broadcast and festival master delivery',
      'Trailer and social cut derivations',
    ],
    pricing: [
      { name: 'Brand Documentary', price: '$8,000–$20,000', description: '5–10 minute brand-focused documentary film.' },
      { name: 'Impact / NGO Film', price: '$12,000–$35,000', description: 'Full documentary, up to 30 minutes, festival-ready.' },
      { name: 'Series Episode', price: '$15,000–$40,000+', description: 'Broadcast-quality episode for streaming or TV.' },
    ],
    faqs: [
      { question: 'Do you work with NGOs and nonprofits?', answer: 'Yes. We have experience producing impact and advocacy films for international NGOs operating in Southeast Asia.' },
      { question: 'Can you shoot across different locations in Thailand?', answer: 'Yes. We regularly produce projects across Bangkok, Chiang Mai, Phuket, and rural Thailand. We manage all logistics and transport.' },
    ],
  },
  {
    slug: 'interview-video',
    name: 'Interview Video',
    title: 'Interview Video Production Bangkok',
    headline: 'Professional Interview & Talking Head Production',
    icon: '🎤',
    shortDescription: 'Executive interviews, talking head content, testimonials, and expert Q&As.',
    description: 'Professional interview and talking head video production in Bangkok. Executive interviews, customer testimonials, expert Q&As, and thought leadership content.',
    metaDescription: 'Interview and talking head video production in Bangkok. Executive interviews, testimonials, expert Q&As. Professional crew, studio or location, fast turnaround.',
    features: [
      'Studio or location interview setups',
      'Teleprompter available',
      'Professional lighting and sound',
      'Same-day or next-day rough cut',
      'Multiple interview setups per day',
      'B-roll coverage',
      'Subtitle and caption delivery',
    ],
    pricing: [
      { name: 'Single Interview', price: '$800–$2,000', description: 'Half-day shoot, 1 interview, edited with b-roll.' },
      { name: 'Interview Series', price: '$2,500–$6,000', description: 'Full day, 4–6 interviews, edited individual pieces.' },
    ],
    faqs: [
      { question: 'Can you provide a teleprompter?', answer: 'Yes. Professional teleprompter with operator is available for interview and presenter shoots.' },
      { question: 'Do you have a studio in Bangkok?', answer: 'We work with several established studio facilities in Bangkok. Studio hire is included in relevant packages.' },
    ],
  },
  {
    slug: 'product-video',
    name: 'Product Video',
    title: 'Product Video Production Bangkok',
    headline: 'Product Videos That Drive Conversions',
    icon: '📦',
    shortDescription: 'E-commerce product videos, demo reels, and lifestyle product content.',
    description: 'Professional product video production in Bangkok for e-commerce, digital advertising, and social media. Product demos, unboxings, lifestyle shoots, and branded product content.',
    metaDescription: 'Product video production in Bangkok for e-commerce and social media. Product demos, lifestyle shoots, and branded content. Fast turnaround, transparent pricing.',
    features: [
      'Studio and lifestyle location setups',
      'Product photography available alongside video',
      'Multiple SKU shoots',
      'Motion product shots',
      'Social and e-commerce format delivery',
      'Fast turnaround',
    ],
    pricing: [
      { name: 'Single Product', price: '$600–$1,500', description: 'Studio shoot, 1 product, edited video with b-roll.' },
      { name: 'Product Range', price: '$2,000–$5,000', description: 'Multi-product shoot day, multiple edited videos.' },
    ],
    faqs: [
      { question: 'Can you handle product shoots requiring lifestyle settings?', answer: 'Yes. We regularly produce lifestyle product content using Bangkok’s diverse locations — from urban settings to natural environments.' },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(s => s.slug === slug);
}

import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { LocalBusinessJsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  metadataBase: new URL('https://vidflair.com'),
  title: {
    default: 'VidFlair — Professional Video Production in Bangkok',
    template: '%s | VidFlair',
  },
  description:
    'Professional video production company in Bangkok, Thailand. Corporate video, social media content, event videography, drone filming, and post-production for international brands. English-speaking crew, transparent pricing.',
  keywords: [
    'video production Bangkok',
    'Bangkok videographer',
    'corporate video Thailand',
    'social media video Bangkok',
    'drone videography Bangkok',
    'event videography Bangkok',
    'video production company Thailand',
    'English speaking video crew Bangkok',
  ],
  authors: [{ name: 'VidFlair' }],
  creator: 'VidFlair',
  publisher: 'VidFlair',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vidflair.com',
    siteName: 'VidFlair',
    title: 'VidFlair — Professional Video Production in Bangkok',
    description:
      'Professional video production for international brands. Corporate video, social media content, event videography, drone filming. English-speaking crew, transparent pricing.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VidFlair — Professional Video Production in Bangkok',
    description:
      'Professional video production for international brands. Corporate video, social media content, event videography, drone filming.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://vidflair.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#0a0a0a" />
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&f[]=satoshi@400,500,700&display=swap"
          rel="stylesheet"
        />
        <LocalBusinessJsonLd />
      </head>
      <body>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg" style={{ background: 'var(--color-accent)', color: 'var(--color-accent-text)' }}>
          Skip to main content
        </a>
        <Header />
        <main id="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

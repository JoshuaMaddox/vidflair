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
  description: 'VidFlair is a Bangkok-based video production company serving international brands. English-speaking crew, transparent pricing, 40–60% cost savings vs. Western markets.',
  keywords: ['video production Bangkok', 'corporate video Thailand', 'film crew Bangkok', 'video production company Thailand'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vidflair.com',
    siteName: 'VidFlair',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <LocalBusinessJsonLd />
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

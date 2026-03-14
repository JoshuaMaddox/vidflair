import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center py-20">
      <div className="text-center">
        <p className="text-7xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-accent)' }}>404</p>
        <h1 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>Page Not Found</h1>
        <p className="text-base mb-8" style={{ color: 'var(--color-text-muted)' }}>
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl transition-all hover:opacity-90" style={{ background: 'var(--color-accent)', color: 'var(--color-accent-text)' }}>
          <ArrowLeft size={16} /> Back to Home
        </Link>
      </div>
    </section>
  );
}

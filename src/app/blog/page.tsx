import { Metadata } from 'next';
import Link from 'next/link';
import { getAllBlogPosts } from '@/lib/blog';
import { BreadcrumbJsonLd } from '@/components/JsonLd';
import { ArrowRight, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog — Video Production Insights & Guides',
  description: 'Expert guides on video production in Bangkok — costs, filming permits, equipment, locations, and production tips for international brands and businesses.',
  alternates: { canonical: 'https://vidflair.com/blog' },
};

export default function BlogIndex() {
  const posts = getAllBlogPosts();

  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: 'https://vidflair.com' },
        { name: 'Blog', url: 'https://vidflair.com/blog' },
      ]} />

      <section className="pt-32 pb-8 md:pt-40 md:pb-12">
        <div className="container-default">
          <nav className="flex items-center gap-2 text-xs mb-6" style={{ color: 'var(--color-text-faint)' }} aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[var(--color-text)] transition-colors">Home</Link>
            <span>/</span>
            <span style={{ color: 'var(--color-text-muted)' }}>Blog</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            Production Insights
          </h1>
          <p className="text-lg max-w-2xl" style={{ color: 'var(--color-text-muted)' }}>
            Guides, pricing breakdowns, and insider knowledge for filming in Bangkok and Thailand.
          </p>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="container-default">
          <div className="space-y-6">
            {posts.map((post, i) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block p-8 rounded-2xl transition-all hover:translate-y-[-2px]"
                style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)' }}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-medium px-2.5 py-1 rounded-full" style={{ background: 'var(--color-accent-muted)', color: 'var(--color-accent)' }}>
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs" style={{ color: 'var(--color-text-faint)' }}>
                        <Clock size={12} /> {post.readTime}
                      </span>
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-[var(--color-accent)] transition-colors" style={{ fontFamily: 'var(--font-display)' }}>
                      {post.title}
                    </h2>
                    <p className="text-sm mb-4" style={{ color: 'var(--color-text-muted)', lineHeight: '1.7' }}>
                      {post.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium" style={{ color: 'var(--color-accent)' }}>
                      Read article <ArrowRight size={14} />
                    </span>
                  </div>
                  <div className="text-xs shrink-0" style={{ color: 'var(--color-text-faint)' }}>
                    {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

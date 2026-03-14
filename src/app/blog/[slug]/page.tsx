import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts, getBlogPostBySlug, getAllBlogPosts } from '@/lib/blog';
import { BlogPostJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import ContactForm from '@/components/ContactForm';
import { ArrowLeft, Clock, ArrowRight } from 'lucide-react';

export async function generateStaticParams() {
  return blogPosts.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.metaDescription,
    alternates: { canonical: `https://vidflair.com/blog/${post.slug}` },
    openGraph: {
      title: post.title + ' | VidFlair',
      description: post.metaDescription,
      url: `https://vidflair.com/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const allPosts = getAllBlogPosts();
  const otherPosts = allPosts.filter(p => p.slug !== slug).slice(0, 2);

  // Simple markdown-like rendering: headers, paragraphs, tables, bold, links
  const renderContent = (content: string) => {
    const lines = content.split('\n');
    const elements: React.ReactNode[] = [];
    let i = 0;

    while (i < lines.length) {
      const line = lines[i];

      // Headers
      if (line.startsWith('## ')) {
        elements.push(
          <h2 key={i} className="text-2xl md:text-3xl font-bold mt-12 mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            {line.replace('## ', '')}
          </h2>
        );
        i++;
        continue;
      }
      if (line.startsWith('### ')) {
        elements.push(
          <h3 key={i} className="text-xl font-bold mt-8 mb-3" style={{ fontFamily: 'var(--font-display)' }}>
            {line.replace('### ', '')}
          </h3>
        );
        i++;
        continue;
      }

      // Table
      if (line.startsWith('|')) {
        const tableLines: string[] = [];
        while (i < lines.length && lines[i].startsWith('|')) {
          tableLines.push(lines[i]);
          i++;
        }
        const rows = tableLines.filter(l => !l.match(/^\|[\s-|]+\|$/));
        const headerCells = rows[0]?.split('|').filter(Boolean).map(c => c.trim()) || [];
        const bodyRows = rows.slice(1);
        elements.push(
          <div key={`table-${i}`} className="overflow-x-auto my-6">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                  {headerCells.map((cell, ci) => (
                    <th key={ci} className="py-3 px-4 text-left font-semibold">{cell}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {bodyRows.map((row, ri) => {
                  const cells = row.split('|').filter(Boolean).map(c => c.trim());
                  return (
                    <tr key={ri} style={{ borderBottom: '1px solid var(--color-border)' }}>
                      {cells.map((cell, ci) => (
                        <td key={ci} className="py-3 px-4" style={{ color: ci > 0 ? 'var(--color-text-muted)' : undefined }}>
                          {cell.replace(/\*\*(.*?)\*\*/g, '$1')}
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        );
        continue;
      }

      // List items
      if (line.startsWith('- ')) {
        const listItems: string[] = [];
        while (i < lines.length && lines[i].startsWith('- ')) {
          listItems.push(lines[i].replace('- ', ''));
          i++;
        }
        elements.push(
          <ul key={`list-${i}`} className="my-4 space-y-2 pl-4">
            {listItems.map((item, li) => (
              <li key={li} className="text-base flex items-start gap-2" style={{ color: 'var(--color-text-muted)', lineHeight: '1.7' }}>
                <span className="shrink-0 mt-2.5 w-1.5 h-1.5 rounded-full" style={{ background: 'var(--color-accent)' }} />
                <span dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong style="color:var(--color-text)">$1</strong>') }} />
              </li>
            ))}
          </ul>
        );
        continue;
      }

      // Empty line
      if (line.trim() === '') {
        i++;
        continue;
      }

      // Paragraph
      elements.push(
        <p key={i} className="text-base my-4" style={{ color: 'var(--color-text-muted)', lineHeight: '1.8', maxWidth: '65ch' }}>
          <span dangerouslySetInnerHTML={{ __html: line
            .replace(/\*\*(.*?)\*\*/g, '<strong style="color:var(--color-text)">$1</strong>')
            .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" style="color:var(--color-accent);text-decoration:underline;text-underline-offset:3px">$1</a>')
          }} />
        </p>
      );
      i++;
    }
    return elements;
  };

  return (
    <>
      <BlogPostJsonLd
        title={post.title}
        description={post.metaDescription}
        datePublished={post.date}
        author={post.author}
        url={`https://vidflair.com/blog/${post.slug}`}
      />
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: 'https://vidflair.com' },
        { name: 'Blog', url: 'https://vidflair.com/blog' },
        { name: post.title, url: `https://vidflair.com/blog/${post.slug}` },
      ]} />

      <article className="pt-40 pb-28 md:pt-52 md:pb-40">
        <div className="container-narrow">
          <nav className="flex items-center gap-2 text-xs mb-10" style={{ color: 'var(--color-text-faint)' }} aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[var(--color-text)] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-[var(--color-text)] transition-colors">Blog</Link>
            <span>/</span>
            <span style={{ color: 'var(--color-text-muted)' }} className="truncate">{post.title}</span>
          </nav>

          <header className="mb-20">
            <span className="text-xs font-medium px-2.5 py-1 rounded-full mb-6 inline-block" style={{ background: 'var(--color-accent-muted)', color: 'var(--color-accent)' }}>
              {post.category}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-8" style={{ fontFamily: 'var(--font-display)', lineHeight: '1.1' }}>
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-sm" style={{ color: 'var(--color-text-faint)' }}>
              <span>{post.author}</span>
              <span>·</span>
              <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              <span>·</span>
              <span className="flex items-center gap-1"><Clock size={14} /> {post.readTime}</span>
            </div>
          </header>

          <div className="blog-content">
            {renderContent(post.content)}
          </div>
        </div>
      </article>

      {/* CTA */}
      <section className="py-36 md:py-56" style={{ background: 'var(--color-surface)' }}>
        <div className="container-narrow text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-8" style={{ fontFamily: 'var(--font-display)' }}>
            Ready to Start Your Project?
          </h2>
          <p className="text-base mb-12 max-w-lg mx-auto" style={{ color: 'var(--color-text-muted)' }}>
            Get a transparent, itemized quote for your video production project in Bangkok.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-4 text-base font-semibold rounded-xl transition-all hover:opacity-90" style={{ background: 'var(--color-accent)', color: 'var(--color-accent-text)' }}>
            Get a Free Quote <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Related posts */}
      {otherPosts.length > 0 && (
        <section className="py-36 md:py-56">
          <div className="container-default">
            <h2 className="text-2xl font-bold mb-16" style={{ fontFamily: 'var(--font-display)' }}>More Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {otherPosts.map(p => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="group p-10 rounded-2xl transition-all hover:translate-y-[-2px]" style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)' }}>
                  <span className="text-xs font-medium px-2.5 py-1 rounded-full mb-5 inline-block" style={{ background: 'var(--color-accent-muted)', color: 'var(--color-accent)' }}>{p.category}</span>
                  <h3 className="text-lg font-semibold mb-4 group-hover:text-[var(--color-accent)] transition-colors" style={{ fontFamily: 'var(--font-display)' }}>{p.title}</h3>
                  <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>{p.excerpt.slice(0, 120)}…</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

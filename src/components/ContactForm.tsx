'use client';
import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

export default function ContactForm({ compact = false }: { compact?: boolean }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 800));
    setSubmitted(true);
    setLoading(false);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <CheckCircle size={40} style={{ color: 'var(--color-accent)' }} className="mb-5" />
        <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'var(--font-display)' }}>Message Received!</h3>
        <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>We&apos;ll get back to you with a detailed quote within 24 hours.</p>
      </div>
    );
  }

  const inputStyle = {
    width: '100%',
    padding: compact ? '0.625rem 0.875rem' : '0.75rem 1rem',
    borderRadius: '0.625rem',
    border: '1px solid var(--color-border)',
    background: 'var(--color-surface-2)',
    color: 'var(--color-text)',
    fontSize: '0.875rem',
    outline: 'none',
    fontFamily: 'inherit',
    transition: 'border-color 0.15s',
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className={compact ? 'grid grid-cols-1 gap-4' : 'grid grid-cols-1 sm:grid-cols-2 gap-5'}>
        <div>
          <label className="block text-xs font-medium mb-2" style={{ color: 'var(--color-text-muted)' }}>Name *</label>
          <input type="text" required placeholder="Your name" style={inputStyle}
            onFocus={e => (e.target.style.borderColor = 'var(--color-accent)')}
            onBlur={e => (e.target.style.borderColor = 'var(--color-border)')} />
        </div>
        <div>
          <label className="block text-xs font-medium mb-2" style={{ color: 'var(--color-text-muted)' }}>Email *</label>
          <input type="email" required placeholder="your@email.com" style={inputStyle}
            onFocus={e => (e.target.style.borderColor = 'var(--color-accent)')}
            onBlur={e => (e.target.style.borderColor = 'var(--color-border)')} />
        </div>
      </div>
      <div>
        <label className="block text-xs font-medium mb-2" style={{ color: 'var(--color-text-muted)' }}>Company</label>
        <input type="text" placeholder="Your company (optional)" style={inputStyle}
          onFocus={e => (e.target.style.borderColor = 'var(--color-accent)')}
          onBlur={e => (e.target.style.borderColor = 'var(--color-border)')} />
      </div>
      <div>
        <label className="block text-xs font-medium mb-2" style={{ color: 'var(--color-text-muted)' }}>Service Needed</label>
        <select style={{ ...inputStyle, cursor: 'pointer' }}
          onFocus={e => (e.target.style.borderColor = 'var(--color-accent)')}
          onBlur={e => (e.target.style.borderColor = 'var(--color-border)')}>
          <option value="">Select a service...</option>
          <option>Corporate Video</option>
          <option>Social Media Content</option>
          <option>Commercial / Brand Video</option>
          <option>Event Coverage</option>
          <option>Documentary</option>
          <option>Interview / Talking Head</option>
          <option>Product Video</option>
          <option>Other</option>
        </select>
      </div>
      <div>
        <label className="block text-xs font-medium mb-2" style={{ color: 'var(--color-text-muted)' }}>Estimated Budget</label>
        <select style={{ ...inputStyle, cursor: 'pointer' }}
          onFocus={e => (e.target.style.borderColor = 'var(--color-accent)')}
          onBlur={e => (e.target.style.borderColor = 'var(--color-border)')}>
          <option value="">Select a range...</option>
          <option>Under $2,000</option>
          <option>$2,000 – $5,000</option>
          <option>$5,000 – $10,000</option>
          <option>$10,000 – $25,000</option>
          <option>$25,000+</option>
          <option>Not sure yet</option>
        </select>
      </div>
      <div>
        <label className="block text-xs font-medium mb-2" style={{ color: 'var(--color-text-muted)' }}>Project Details *</label>
        <textarea required rows={compact ? 3 : 5} placeholder="Tell us about your project — timeline, location, deliverables, etc."
          style={{ ...inputStyle, resize: 'vertical', lineHeight: '1.6' }}
          onFocus={e => (e.target.style.borderColor = 'var(--color-accent)')}
          onBlur={e => (e.target.style.borderColor = 'var(--color-border)')} />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-xl transition-all hover:opacity-90 disabled:opacity-60"
        style={{ background: 'var(--color-accent)', color: 'var(--color-accent-text)' }}
      >
        {loading ? 'Sending…' : (<>Send Request <Send size={16} /></>)}
      </button>
      <p className="text-xs text-center" style={{ color: 'var(--color-text-faint)' }}>No obligation. Detailed quote within 24 hours.</p>
    </form>
  );
}

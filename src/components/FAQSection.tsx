'use client';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
}

export default function FAQSection({ faqs, title = 'Frequently Asked Questions' }: { faqs: FAQ[]; title?: string }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold mb-10" style={{ fontFamily: 'var(--font-display)' }}>{title}</h2>
      <div className="space-y-3 max-w-3xl">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="rounded-xl overflow-hidden"
            style={{ border: '1px solid var(--color-border)' }}
          >
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between gap-4 p-6 text-left"
              style={{ background: 'var(--color-surface)' }}
            >
              <span className="text-sm font-semibold">{faq.question}</span>
              <ChevronDown
                size={18}
                style={{ color: 'var(--color-text-faint)', transition: 'transform 0.2s', transform: open === i ? 'rotate(180deg)' : 'none', flexShrink: 0 }}
              />
            </button>
            {open === i && (
              <div className="px-6 pb-6" style={{ background: 'var(--color-surface)' }}>
                <p className="text-sm" style={{ color: 'var(--color-text-muted)', lineHeight: '1.7' }}>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

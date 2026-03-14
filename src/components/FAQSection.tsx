'use client';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
}

export default function FAQSection({ faqs, title = 'Frequently Asked Questions' }: { faqs: FAQ[]; title?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-36 md:py-56">
      <div className="container-default">
        <h2 className="text-3xl md:text-4xl font-bold mb-20 text-center" style={{ fontFamily: 'var(--font-display)' }}>{title}</h2>
        <div className="max-w-3xl mx-auto space-y-5">
          {faqs.map((faq, i) => (
            <div key={i} className="rounded-xl overflow-hidden transition-colors" style={{ background: openIndex === i ? 'var(--color-surface-2)' : 'var(--color-surface)', border: '1px solid var(--color-border)' }}>
              <button
                className="w-full flex items-center justify-between p-6 text-left gap-4"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
              >
                <span className="text-base font-medium">{faq.question}</span>
                <ChevronDown size={20} className="shrink-0 transition-transform" style={{ transform: openIndex === i ? 'rotate(180deg)' : 'rotate(0)', color: 'var(--color-text-muted)' }} />
              </button>
              {openIndex === i && (
                <div className="px-6 pb-6">
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

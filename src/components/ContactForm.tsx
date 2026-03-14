'use client';
import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

export default function ContactForm({ compact = false }: { compact?: boolean }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '', email: '', company: '', projectType: '', budget: '', timeline: '', description: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <CheckCircle size={48} className="mx-auto mb-4" style={{ color: 'var(--color-accent)' }} />
        <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'var(--font-display)' }}>Thank you!</h3>
        <p className="text-[var(--color-text-muted)]">We&apos;ll send you a detailed quote within 24 hours.</p>
      </div>
    );
  }

  const inputClass = "w-full px-4 py-3 rounded-lg text-sm transition-colors focus:outline-none focus:ring-2";
  const inputStyle = { background: 'var(--color-surface-2)', border: '1px solid var(--color-border)', color: 'var(--color-text)', '--tw-ring-color': 'var(--color-accent)' } as React.CSSProperties;

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className={compact ? "space-y-4" : "grid grid-cols-1 md:grid-cols-2 gap-4"}>
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1.5 text-[var(--color-text-muted)]">Full Name *</label>
          <input type="text" id="name" required className={inputClass} style={inputStyle}
            value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})}
            placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1.5 text-[var(--color-text-muted)]">Email Address *</label>
          <input type="email" id="email" required className={inputClass} style={inputStyle}
            value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})}
            placeholder="you@company.com" />
        </div>
      </div>

      <div className={compact ? "space-y-4" : "grid grid-cols-1 md:grid-cols-2 gap-4"}>
        <div>
          <label htmlFor="company" className="block text-sm font-medium mb-1.5 text-[var(--color-text-muted)]">Company</label>
          <input type="text" id="company" className={inputClass} style={inputStyle}
            value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})}
            placeholder="Company name" />
        </div>
        <div>
          <label htmlFor="projectType" className="block text-sm font-medium mb-1.5 text-[var(--color-text-muted)]">Project Type *</label>
          <select id="projectType" required className={inputClass} style={inputStyle}
            value={formData.projectType} onChange={e => setFormData({...formData, projectType: e.target.value})}>
            <option value="">Select a project type</option>
            <option value="corporate">Corporate Video</option>
            <option value="social">Social Media Content</option>
            <option value="event">Event Videography</option>
            <option value="drone">Drone Videography</option>
            <option value="product">Product Video</option>
            <option value="real-estate">Real Estate Video</option>
            <option value="post-production">Post-Production / Editing</option>
            <option value="youtube">YouTube Production</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div className={compact ? "space-y-4" : "grid grid-cols-1 md:grid-cols-2 gap-4"}>
        <div>
          <label htmlFor="budget" className="block text-sm font-medium mb-1.5 text-[var(--color-text-muted)]">Budget Range</label>
          <select id="budget" className={inputClass} style={inputStyle}
            value={formData.budget} onChange={e => setFormData({...formData, budget: e.target.value})}>
            <option value="">Select budget range</option>
            <option value="under-25k">Under ฿25,000 ($700)</option>
            <option value="25k-75k">฿25,000 – ฿75,000 ($700 – $2,100)</option>
            <option value="75k-150k">฿75,000 – ฿150,000 ($2,100 – $4,200)</option>
            <option value="150k-300k">฿150,000 – ฿300,000 ($4,200 – $8,500)</option>
            <option value="300k-plus">฿300,000+ ($8,500+)</option>
          </select>
        </div>
        <div>
          <label htmlFor="timeline" className="block text-sm font-medium mb-1.5 text-[var(--color-text-muted)]">Timeline</label>
          <select id="timeline" className={inputClass} style={inputStyle}
            value={formData.timeline} onChange={e => setFormData({...formData, timeline: e.target.value})}>
            <option value="">When do you need this?</option>
            <option value="asap">ASAP</option>
            <option value="2-weeks">Within 2 weeks</option>
            <option value="1-month">Within 1 month</option>
            <option value="2-months">Within 2 months</option>
            <option value="flexible">Flexible / No rush</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium mb-1.5 text-[var(--color-text-muted)]">Project Description *</label>
        <textarea id="description" required rows={4} className={inputClass + ' resize-none'} style={inputStyle}
          value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})}
          placeholder="Tell us about your project — what do you need, where, and any specific requirements?" />
      </div>

      <button type="submit" className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-lg transition-all hover:opacity-90"
        style={{ background: 'var(--color-accent)', color: 'var(--color-accent-text)' }}>
        <Send size={16} /> Get Your Free Quote
      </button>

      <p className="text-xs text-center text-[var(--color-text-faint)]">
        We respond within 24 hours. No spam, no obligation.
      </p>
    </form>
  );
}

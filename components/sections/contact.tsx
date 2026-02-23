'use client';

import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const contactCards = [
  {
    icon: Phone,
    label: 'Call Us',
    value: '+91 88558 66640',
    sub: 'Mon – Sat, 9am – 7pm',
    href: 'tel:8855866640',
  },
  {
    icon: Mail,
    label: 'Email Us',
    value: 'contact@shreephysio.com',
    sub: 'We reply within 24 hours',
    href: 'mailto:contact@shreephysio.com',
  },
  {
    icon: MapPin,
    label: 'Find Us',
    value: 'Baramati, Maharashtra 413102',
    sub: 'Home visits also available',
    href: '#',
  },
  {
    icon: Clock,
    label: 'Hours',
    value: 'Mon – Sat: 9am – 7pm',
    sub: 'Sunday by appointment',
    href: '#',
  },
];

export default function Contact() {
  return (
    <section
      className="relative overflow-hidden py-28"
      style={{ background: 'linear-gradient(160deg, #f7f9fc 0%, #ffffff 45%, #FFF8F0 100%)' }}
    >
      {/* Ambient orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="orb"
          style={{
            top: '-8%', right: '-6%',
            width: '32rem', height: '32rem',
            background: 'radial-gradient(circle, rgba(245,101,101,0.06) 0%, transparent 70%)',
          }}
        />
        <div
          className="orb"
          style={{
            bottom: '-5%', left: '-5%',
            width: '30rem', height: '30rem',
            background: 'radial-gradient(circle, rgba(237,137,54,0.07) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="section-container relative" style={{ zIndex: 1 }}>

        {/* ── Section Header ──────────────────────────────── */}
        <div className="text-center mb-20">
          <div className="badge-coral-light mx-auto mb-5">
            <span className="badge-dot" style={{ background: 'var(--venturi-coral)' }} />
            Get in Touch
          </div>
          <h2 className="section-title mb-4">
            Contact{' '}
            <span style={{ color: 'var(--venturi-coral)' }}>Us Today</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4" style={{ maxWidth: '36rem' }}>
            Reach out for personalized physiotherapy and rehabilitation services tailored to your needs.
          </p>
          <div
            className="accent-line animate-line-grow anim-both mx-auto mt-6"
            style={{ width: '5rem' }}
          />
        </div>

        {/* ── Main two-column grid ────────────────────────── */}
        <div className="grid lg:grid-cols-2 gap-14 xl:gap-20 items-start">

          {/* Left — Contact info cards */}
          <div className="flex flex-col gap-5">

            {/* Intro text */}
            <p
              className="font-editorial italic font-light leading-relaxed mb-4"
              style={{ fontSize: 'clamp(1.05rem,1.8vw,1.2rem)', color: 'var(--venturi-slate)' }}
            >
              We&apos;re here to support your healing journey — whether you visit our
              clinic or prefer care at home, expert physiotherapy is just one call away.
            </p>

            {/* Info cards grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactCards.map(({ icon: Icon, label, value, sub, href }) => (
                <a
                  key={label}
                  href={href}
                  className="card-base flex flex-col gap-3 p-5 no-underline"
                  style={{ textDecoration: 'none' }}
                >
                  {/* Icon */}
                  <div
                    className="flex items-center justify-center rounded-xl shrink-0"
                    style={{
                      width: '2.75rem', height: '2.75rem',
                      background: 'linear-gradient(135deg, rgba(245,101,101,0.12), rgba(237,137,54,0.1))',
                    }}
                  >
                    <Icon size={18} style={{ color: 'var(--venturi-coral)' }} />
                  </div>
                  {/* Mini accent line */}
                  <div
                    style={{
                      height: '2px', width: '1.5rem', borderRadius: '9999px',
                      background: 'linear-gradient(90deg, var(--venturi-coral), var(--venturi-orange))',
                    }}
                  />
                  <div>
                    <p
                      className="font-body font-medium m-0"
                      style={{ fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--venturi-coral)' }}
                    >
                      {label}
                    </p>
                    <p
                      className="font-body font-medium m-0 mt-1"
                      style={{ fontSize: '0.88rem', color: 'var(--venturi-navy)' }}
                    >
                      {value}
                    </p>
                    <p
                      className="font-body m-0 mt-0.5"
                      style={{ fontSize: '0.72rem', color: 'var(--venturi-slate)' }}
                    >
                      {sub}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Direct call CTA */}
            <a
              href="tel:8855866640"
              className="btn-coral font-body mt-4 justify-center"
              style={{ display: 'flex' }}
            >
              <Phone size={16} />
              Call Now to Book
            </a>
          </div>

          {/* Right — Contact Form */}
          <div
            className="glass-panel-light p-8 sm:p-10"
            style={{ borderRadius: '1.5rem' }}
          >
            <p
              className="font-display font-semibold mb-1"
              style={{ fontSize: '1.2rem', color: 'var(--venturi-navy)' }}
            >
              Send Us a Message
            </p>
            <p
              className="font-body mb-8"
              style={{ fontSize: '0.85rem', color: 'var(--venturi-slate)' }}
            >
              Fill out the form and we&apos;ll get back to you shortly.
            </p>

            <form className="flex flex-col gap-6">

              {/* Name */}
              <div className="flex flex-col gap-2">
                <label
                  className="font-body font-medium"
                  style={{ fontSize: '0.8rem', color: 'var(--venturi-navy)', letterSpacing: '0.04em' }}
                >
                  Your First Name <span style={{ color: 'var(--venturi-coral)' }}>*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your first name"
                  className="w-full font-body rounded-xl border bg-white/80 transition-all duration-300"
                  style={{
                    padding: '0.875rem 1.25rem',
                    fontSize: '0.9rem',
                    color: 'var(--venturi-navy)',
                    borderColor: 'rgba(74,85,104,0.15)',
                    outline: 'none',
                  }}
                  onFocus={e => {
                    e.currentTarget.style.borderColor = 'var(--venturi-coral)';
                    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(245,101,101,0.12)';
                    e.currentTarget.style.background = '#fff';
                  }}
                  onBlur={e => {
                    e.currentTarget.style.borderColor = 'rgba(74,85,104,0.15)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label
                  className="font-body font-medium"
                  style={{ fontSize: '0.8rem', color: 'var(--venturi-navy)', letterSpacing: '0.04em' }}
                >
                  Email Address <span style={{ color: 'var(--venturi-coral)' }}>*</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full font-body rounded-xl border bg-white/80 transition-all duration-300"
                  style={{
                    padding: '0.875rem 1.25rem',
                    fontSize: '0.9rem',
                    color: 'var(--venturi-navy)',
                    borderColor: 'rgba(74,85,104,0.15)',
                    outline: 'none',
                  }}
                  onFocus={e => {
                    e.currentTarget.style.borderColor = 'var(--venturi-coral)';
                    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(245,101,101,0.12)';
                    e.currentTarget.style.background = '#fff';
                  }}
                  onBlur={e => {
                    e.currentTarget.style.borderColor = 'rgba(74,85,104,0.15)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label
                  className="font-body font-medium"
                  style={{ fontSize: '0.8rem', color: 'var(--venturi-navy)', letterSpacing: '0.04em' }}
                >
                  Message or Query <span style={{ color: 'var(--venturi-coral)' }}>*</span>
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell us about your condition or how we can help…"
                  className="w-full font-body rounded-xl border bg-white/80 transition-all duration-300 resize-none"
                  style={{
                    padding: '0.875rem 1.25rem',
                    fontSize: '0.9rem',
                    color: 'var(--venturi-navy)',
                    borderColor: 'rgba(74,85,104,0.15)',
                    outline: 'none',
                  }}
                  onFocus={e => {
                    e.currentTarget.style.borderColor = 'var(--venturi-coral)';
                    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(245,101,101,0.12)';
                    e.currentTarget.style.background = '#fff';
                  }}
                  onBlur={e => {
                    e.currentTarget.style.borderColor = 'rgba(74,85,104,0.15)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="btn-coral font-body w-full justify-center"
                style={{ display: 'flex' }}
              >
                Submit Your Request
              </button>

              <p
                className="font-body text-center"
                style={{ fontSize: '0.72rem', color: 'var(--venturi-slate)' }}
              >
                We typically respond within one business day.
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
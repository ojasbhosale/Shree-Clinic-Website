import Image from 'next/image';
import { Facebook, Linkedin, Instagram, MapPin, Heart, Phone, Mail, ArrowRight } from 'lucide-react';

const socialLinks = [
  { icon: Facebook,  href: '#', label: 'Facebook' },
  { icon: Linkedin,  href: '#', label: 'LinkedIn' },
  { icon: Instagram, href: '#', label: 'Instagram' },
];

const quickLinks = [
  { label: 'Home',     href: '#' },
  { label: 'About',    href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact',  href: '#contact' },
];

const contactInfo = [
  { icon: Phone, value: '+91 88558 66640',         href: 'tel:8855866640' },
  { icon: Mail,  value: 'contact@shreephysio.com', href: 'mailto:contact@shreephysio.com' },
];

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden text-white"
      style={{
        background: 'linear-gradient(135deg, var(--venturi-navy) 0%, #212b3a 60%, var(--venturi-blue) 100%)',
      }}
    >
      {/* ── Ambient orbs ─────────────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="orb"
          style={{
            top: '-15%', right: '-5%',
            width: '30rem', height: '30rem',
            background: 'radial-gradient(circle, rgba(245,101,101,0.1) 0%, transparent 70%)',
          }}
        />
        <div
          className="orb"
          style={{
            bottom: '-10%', left: '-8%',
            width: '28rem', height: '28rem',
            background: 'radial-gradient(circle, rgba(237,137,54,0.08) 0%, transparent 70%)',
          }}
        />
        {/* Dot grid texture */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div
        className="section-container relative"
        style={{ zIndex: 1, paddingTop: '5rem', paddingBottom: '2rem' }}
      >
        {/* ── CTA Banner ─────────────────────────────────────────── */}
        <div
          className="rounded-2xl p-8 mb-16 relative overflow-hidden"
          style={{
            background: 'rgba(245,101,101,0.1)',
            border: '1px solid rgba(245,101,101,0.2)',
          }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at 80% 50%, rgba(245,101,101,0.12) 0%, transparent 60%)',
            }}
          />
          <div className="relative flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p
                className="font-body uppercase tracking-widest mb-1.5"
                style={{ fontSize: '0.68rem', color: 'rgba(245,101,101,0.8)', margin: '0 0 0.375rem' }}
              >
                Start your recovery today
              </p>
              <h3
                className="font-display font-bold text-white m-0"
                style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)' }}
              >
                Book Your Appointment Now
              </h3>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <input
                type="email"
                placeholder="Your email address"
                className="font-body rounded-xl border"
                style={{
                  padding: '0.75rem 1rem',
                  background: 'rgba(255,255,255,0.08)',
                  borderColor: 'rgba(255,255,255,0.15)',
                  color: 'white',
                  fontSize: '0.875rem',
                  outline: 'none',
                  minWidth: '16rem',
                }}
              />
              <a
                href="tel:8855866640"
                className="btn-coral font-body shrink-0"
                style={{ padding: '0.75rem 1.5rem', fontSize: '0.875rem', display: 'inline-flex' }}
              >
                <ArrowRight size={15} />
                Send
              </a>
            </div>
          </div>
        </div>

        {/* ── Main Grid ──────────────────────────────────────────── */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">

          {/* Brand column */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <Image
              src="/logo.png"
              alt="Shree Physiotherapy Clinic"
              width={160}
              height={56}
              className="w-fit"
              style={{ height: '3.5rem', filter: 'brightness(0) invert(1)' }}
            />
            <div
              className="accent-line"
              style={{ width: '3rem' }}
            />
            <div className="flex items-center gap-2">
              <Heart size={14} style={{ color: 'var(--venturi-coral)', flexShrink: 0 }} />
              <span
                className="font-body font-medium"
                style={{
                  fontSize: '0.75rem',
                  color: 'var(--venturi-coral)',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}
              >
                Care &bull; Support &bull; Healing
              </span>
            </div>
            <p
              className="font-body leading-relaxed"
              style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.5)', maxWidth: '22rem', margin: 0 }}
            >
              Personalized physiotherapy and rehabilitation for everyone —
              in our clinic or at your doorstep.
            </p>

            {/* Contact links — pure CSS hover via .footer-link */}
            <div className="flex flex-col gap-2.5">
              {contactInfo.map(({ icon: Icon, value, href }) => (
                <a key={value} href={href} className="footer-link">
                  <Icon size={14} style={{ color: 'var(--venturi-coral)', flexShrink: 0 }} />
                  {value}
                </a>
              ))}
            </div>

            {/* Social icons — pure CSS hover via .footer-social */}
            <div className="flex gap-3 mt-1">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} aria-label={label} className="footer-social">
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p
              className="font-display font-semibold mb-2"
              style={{ fontSize: '0.9rem', color: 'white', letterSpacing: '0.04em', margin: '0 0 0.5rem' }}
            >
              Quick Links
            </p>
            <div
              style={{
                width: '2rem', height: '2px', borderRadius: '9999px',
                background: 'linear-gradient(90deg, var(--venturi-coral), var(--venturi-orange))',
                marginBottom: '1.25rem',
              }}
            />
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  {/* pure CSS hover via .footer-nav-link */}
                  <a href={href} className="footer-nav-link">
                    <span
                      style={{
                        width: '4px', height: '4px', borderRadius: '50%',
                        background: 'var(--venturi-coral)', opacity: 0.6, flexShrink: 0,
                      }}
                    />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Address */}
          <div>
            <p
              className="font-display font-semibold mb-2"
              style={{ fontSize: '0.9rem', color: 'white', letterSpacing: '0.04em', margin: '0 0 0.5rem' }}
            >
              Address
            </p>
            <div
              style={{
                width: '2rem', height: '2px', borderRadius: '9999px',
                background: 'linear-gradient(90deg, var(--venturi-coral), var(--venturi-orange))',
                marginBottom: '1.25rem',
              }}
            />
            <div className="flex items-start gap-3 mb-4">
              <MapPin size={14} style={{ color: 'var(--venturi-coral)', flexShrink: 0, marginTop: '3px' }} />
              <address
                className="font-body not-italic leading-relaxed"
                style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.5)', margin: 0 }}
              >
                23, Sant Namdeo Path<br />
                Opp. Picnic Corner, Marwad Peth<br />
                Gandhi Chowk<br />
                Baramati, Maharashtra 413102
              </address>
            </div>

            {/* Hours card */}
            <div
              className="rounded-xl p-4"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <p
                className="font-body font-medium"
                style={{
                  fontSize: '0.68rem', color: 'var(--venturi-coral)',
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                  margin: '0 0 0.4rem',
                }}
              >
                Clinic Hours
              </p>
              <p
                className="font-body m-0"
                style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}
              >
                Mon – Sat: 9:00am – 7:00pm<br />
                Sunday: By appointment
              </p>
            </div>
          </div>
        </div>

        {/* ── Bottom Bar ──────────────────────────────────────────── */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1.75rem' }}>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <p
                className="font-display font-bold m-0"
                style={{ fontSize: '0.9rem', color: 'white' }}
              >
                DR. SHRADDHA&apos;S SHREE CLINIC
              </p>
              <span
                style={{
                  width: '4px', height: '4px', borderRadius: '50%',
                  background: 'var(--venturi-coral)', display: 'inline-block',
                }}
              />
              <div className="flex items-center gap-1.5">
                <Heart size={11} style={{ color: 'var(--venturi-coral)' }} />
                <span
                  className="font-body"
                  style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.38)' }}
                >
                  Putting People First Since Day One
                </span>
              </div>
            </div>
            <p
              className="font-body m-0"
              style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.28)', textAlign: 'center' }}
            >
              &copy; 2026 SHREE Physiotherapy &amp; Rehabilitation Clinic. All rights reserved.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}
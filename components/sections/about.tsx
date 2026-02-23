'use client';
import Image from 'next/image';
import { GraduationCap, Briefcase, BookOpen, Home } from 'lucide-react';

const credentials = [
  { icon: GraduationCap, label: 'M.PT (Neurology)',    sub: 'Masters in Physiotherapy' },
  { icon: BookOpen,       label: 'Diploma in Yoga',     sub: 'Certified Yoga Practitioner' },
  { icon: Briefcase,      label: '6+ Years Experience', sub: 'Clinical & Academic' },
  { icon: Home,           label: 'Home Visit Services', sub: 'All ages & conditions' },
];

export default function About() {
  return (
    <section id="about" className="section-bg-cream relative overflow-hidden py-28">
      <div className="section-container">

        {/* ── Section Header ──────────────────────────────── */}
        <div className="text-center mb-20">
          <div className="badge-coral-light mx-auto mb-5">
            <span className="badge-dot" />
            Meet Your Specialist
          </div>
          <h2 className="section-title mb-4">
            About <span style={{ color: 'var(--venturi-coral)' }}>Dr. Shraddha</span>
          </h2>
          <div className="accent-line animate-line-grow anim-both mx-auto mt-5" style={{ width: '5rem' }} />
        </div>

        {/* ── Two-column layout ───────────────────────────── */}
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">

          {/* Image with floating cards */}
          <div className="relative">
            <div
              className="relative rounded-3xl shadow-2xl"
              style={{ height: 'clamp(22rem, 40vw, 34rem)' }}
            >
              <Image
                src="/home/about/dr-shraddha.avif"
                alt="Dr. Shraddha Dhongade"
                fill
                className="object-cover"
                priority
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(26,32,44,0.35) 0%, transparent 55%)' }}
              />
              {/* Name tag */}
              <div className="absolute -bottom-8 left-6 right-6">
                <div className="glass-panel px-5 py-4" style={{ borderRadius: '0.875rem' }}>
                  <p className="font-display font-semibold text-white m-0" style={{ fontSize: '1.05rem' }}>
                    Dr. Shraddha A. Dhongade
                  </p>
                  <p className="font-body text-white/65 mt-0.5 m-0" style={{ fontSize: '0.75rem' }}>
                    B.PT &bull; M.PT (Neuro) &bull; Diploma in Yoga
                  </p>
                </div>
              </div>
            </div>

            {/* Floating stat chip */}
            <div
              className="absolute -top-5 -right-5 hidden sm:flex flex-col items-center justify-center rounded-2xl shadow-xl"
              style={{
                width: '7.5rem', height: '7.5rem',
                background: 'linear-gradient(135deg, var(--venturi-coral), var(--venturi-orange))',
              }}
            >
              <span className="font-display font-bold text-white" style={{ fontSize: '2rem', lineHeight: 1 }}>6+</span>
              <span className="font-body text-white/85 text-center mt-1" style={{ fontSize: '0.65rem', letterSpacing: '0.05em', lineHeight: 1.3 }}>
                Years of<br />Excellence
              </span>
            </div>
          </div>

          {/* Content */}
          <div>
            {/* Pull-quote */}
            <div
              className="relative mb-10 pl-7 py-5"
              style={{
                borderLeft: '3px solid var(--venturi-coral)',
                background: 'rgba(245,101,101,0.04)',
                borderRadius: '0 0.75rem 0.75rem 0',
              }}
            >
              <span
                className="font-display italic absolute"
                style={{
                  fontSize: 'clamp(3rem,6vw,5rem)',
                  color: 'var(--venturi-coral)',
                  opacity: 0.7,
                  top: '-0.5rem', left: '1rem',
                  lineHeight: 1,
                }}
              >
                &ldquo;
              </span>
              <p className="font-editorial italic font-light leading-relaxed m-0" style={{ fontSize: 'clamp(1rem,1.6vw,1.15rem)', color: 'var(--venturi-slate)' }}>
                Dr. Shraddha Dhongade is a highly qualified and compassionate physiotherapist
                with a strong academic foundation and over six years of professional experience.
                She blends scientific rehabilitation techniques with holistic healing practices,
                and has shaped the next generation of healthcare professionals as a professor.
              </p>
            </div>

            <p className="font-body leading-relaxed mb-10" style={{ color: 'var(--venturi-slate)', fontSize: '1rem' }}>
              With three years of clinical practice and three years of academic experience,
              she now runs <strong style={{ color: 'var(--venturi-navy)' }}>Dr. Shraddha&apos;s Shree Physiotherapy &amp; Rehabilitation Clinic</strong>,
              offering personalized treatments and home visit services for patients of all ages.
            </p>

            {/* Credential grid */}
            <div className="grid grid-cols-2 gap-4">
              {credentials.map(({ icon: Icon, label, sub }) => (
                <div key={label} className="card-base flex items-start gap-3 p-5">
                  <div
                    className="shrink-0 rounded-xl flex items-center justify-center"
                    style={{ width: '2.5rem', height: '2.5rem', background: 'rgba(245,101,101,0.1)' }}
                  >
                    <Icon size={18} style={{ color: 'var(--venturi-coral)' }} />
                  </div>
                  <div>
                    <p className="font-body font-medium m-0" style={{ fontSize: '0.82rem', color: 'var(--venturi-navy)' }}>{label}</p>
                    <p className="font-body m-0 mt-0.5" style={{ fontSize: '0.7rem', color: 'var(--venturi-slate)' }}>{sub}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <a href="tel:8855866640" className="btn-coral font-body">Book a Consultation</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
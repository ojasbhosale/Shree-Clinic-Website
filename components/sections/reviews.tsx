'use client';
import Image from 'next/image';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Ananya Deshmukh',
    image: '/home/reviews/profilepic1.avif',
    stars: 5,
    tag: 'Stroke Rehabilitation',
    text: 'Dr. Shraddha\'s clinic transformed my recovery journey with personalized care and expert physiotherapy treatments. I couldn\'t have asked for a more compassionate and knowledgeable specialist.',
  },
  {
    name: 'Dr. Deshpande',
    image: '/home/reviews/profilepic2.avif',
    stars: 5,
    tag: 'Yoga Therapy & Pain Management',
    text: 'The yoga-based treatments helped me regain mobility and manage my chronic pain effectively. The home visits were a game-changer — expert care with zero compromise on quality.',
  },
];

export default function Reviews() {
  return (
    <section className="section-bg-pearl relative overflow-hidden py-28">
      <div className="section-container">

        {/* ── Section Header ──────────────────────────────── */}
        <div className="text-center mb-20">
          <div className="badge-coral-light mx-auto mb-5">
            <span className="badge-dot" />
            Patient Stories
          </div>
          <h2 className="section-title mb-4">
            Patient <span style={{ color: 'var(--venturi-coral)' }}>Reviews</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4" style={{ maxWidth: '36rem' }}>
            Hear from those whose lives have changed through expert, compassionate physiotherapy care.
          </p>
          <div className="accent-line animate-line-grow anim-both mx-auto mt-6" style={{ width: '5rem' }} />
        </div>

        {/* ── Review Cards ────────────────────────────────── */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {reviews.map(({ name, image, stars, tag, text }) => (
            <div key={name} className="card-base flex flex-col p-8 gap-6 relative overflow-hidden">
              <Quote size={72} className="absolute -top-2 -right-2 opacity-[0.04]" style={{ color: 'var(--venturi-coral)' }} />

              {/* Stars + tag */}
              <div className="flex items-center justify-between flex-wrap gap-3">
                <div className="flex gap-1">
                  {Array.from({ length: stars }).map((_, i) => (
                    <Star key={i} size={16} style={{ fill: 'var(--venturi-orange)', color: 'var(--venturi-orange)' }} />
                  ))}
                </div>
                <span className="font-body" style={{ fontSize: '0.68rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--venturi-coral)', background: 'rgba(245,101,101,0.08)', border: '1px solid rgba(245,101,101,0.2)', borderRadius: '9999px', padding: '0.25rem 0.75rem' }}>
                  {tag}
                </span>
              </div>

              <p className="font-editorial italic font-light leading-relaxed flex-1" style={{ fontSize: 'clamp(1rem,1.5vw,1.1rem)', color: 'var(--venturi-slate)' }}>
                &ldquo;{text}&rdquo;
              </p>

              <div style={{ height: '1px', background: 'rgba(74,85,104,0.1)' }} />

              <div className="flex items-center gap-4">
                <div className="relative shrink-0 rounded-full overflow-hidden shadow-md" style={{ width: '3rem', height: '3rem' }}>
                  <Image src={image} alt={name} fill className="object-cover" />
                </div>
                <div>
                  <p className="font-display font-semibold m-0" style={{ fontSize: '0.95rem', color: 'var(--venturi-navy)' }}>{name}</p>
                  <p className="font-body m-0 mt-0.5" style={{ fontSize: '0.72rem', color: 'var(--venturi-slate)' }}>Verified Patient</p>
                </div>
                <div className="ml-auto rounded-full" style={{ width: '8px', height: '8px', background: 'var(--venturi-coral)', opacity: 0.5 }} />
              </div>
            </div>
          ))}
        </div>

        {/* ── CTA Strip ────────────────────────────────────── */}
        <div
          className="mt-16 rounded-3xl text-center px-8 py-12 relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, var(--venturi-navy) 0%, var(--venturi-blue) 100%)' }}
        >
          <div className="absolute pointer-events-none" style={{ top: '-30%', right: '-5%', width: '20rem', height: '20rem', borderRadius: '50%', background: 'radial-gradient(circle, rgba(245,101,101,0.15) 0%, transparent 70%)' }} />
          <p className="font-body uppercase tracking-widest mb-3" style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)' }}>
            Ready to start your recovery?
          </p>
          <h3 className="font-display font-bold text-white mb-6" style={{ fontSize: 'clamp(1.5rem,3vw,2rem)' }}>
            Join Our Satisfied Patients Today
          </h3>
          <a href="tel:8855866640" className="btn-coral font-body inline-flex">
            Book an Appointment
          </a>
        </div>

      </div>
    </section>
  );
}
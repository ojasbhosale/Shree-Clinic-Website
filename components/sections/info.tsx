'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Heart, Users, Award, Shield } from 'lucide-react';

const images = [
  '/home/info/info1.jpg',
  '/home/info/info2.jpg',
  '/home/info/info3.jpg',
  '/home/info/info4.jpg',
  '/home/info/info5.jpg',
];

const highlights = [
  { icon: Heart,  title: 'Person-Centred Care',   description: 'Tailored one-to-one support for each individual\'s unique recovery needs.' },
  { icon: Users,  title: 'Exceptional Expertise',  description: 'Compassionate specialist trained to the highest professional standards.' },
  { icon: Award,  title: 'Beyond Standards',       description: 'Exceeding clinical requirements with genuine care and deep respect.' },
  { icon: Shield, title: 'Home from Home',         description: 'Safe, nurturing environments — clinic or doorstep, wherever you need us.' },
];

const quotes = [
  {
    accent: 'Your Healing Journey Begins',
    body: 'At Dr. Shraddha\'s Shree Physiotherapy, we provide personalized physiotherapy and rehabilitation services — focusing on back pain, stroke recovery, and more — ensuring a holistic approach to your health and well-being.',
  },
  {
    accent: 'Compassionate Care Awaits You',
    body: 'Led by Dr. Shraddha Dhongade (M.PT Neuro, Diploma in Yoga), our clinic specializes in yoga-based treatments and offers home visits, ensuring expert care is accessible to everyone.',
  },
];

export default function Info() {
  const [current, setCurrent] = useState(0);
  const next = useCallback(() => setCurrent(p => (p + 1) % images.length), []);
  const prev = useCallback(() => setCurrent(p => (p - 1 + images.length) % images.length), []);

  useEffect(() => {
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [next]);

  return (
    <section className="section-bg-white relative overflow-hidden py-28">
      <div className="section-container">

        {/* ── Section Header ───────────────────────────────── */}
        <div className="text-center mb-20">
          <div className="badge-coral-light mx-auto mb-5">
            <span className="badge-dot" />
            Expert Care &amp; Recovery
          </div>
          <h2 className="section-title mb-3">
            Expert Care for Your <span style={{ color: 'var(--venturi-coral)' }}>Recovery</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4" style={{ maxWidth: '36rem' }}>
            Where exceptional care meets genuine compassion, focusing on recovery every day.
          </p>
          <div className="accent-line animate-line-grow anim-both mx-auto mt-6" style={{ width: '5rem' }} />
        </div>

        {/* ── Main Grid ────────────────────────────────────── */}
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center mb-20">

          {/* Carousel */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl" style={{ height: 'clamp(22rem, 40vw, 34rem)' }}>
              <Image
                src={images[current]}
                alt={`Shree Clinic ${current + 1}`}
                fill
                className="object-cover transition-all duration-700 ease-in-out"
                priority={current === 0}
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(26,32,44,0.4) 0%, transparent 55%)' }} />
              <div className="glass-panel absolute top-5 right-5 px-3 py-1.5 font-body text-white" style={{ borderRadius: '9999px', fontSize: '0.72rem', letterSpacing: '0.08em' }}>
                {current + 1} / {images.length}
              </div>
            </div>

            <button onClick={prev} aria-label="Previous" className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-xl transition-all duration-300 hover-lift border" style={{ borderColor: 'rgba(245,101,101,0.2)' }}>
              <ChevronLeft size={22} style={{ color: 'var(--venturi-slate)' }} />
            </button>
            <button onClick={next} aria-label="Next" className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-xl transition-all duration-300 hover-lift border" style={{ borderColor: 'rgba(245,101,101,0.2)' }}>
              <ChevronRight size={22} style={{ color: 'var(--venturi-slate)' }} />
            </button>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, i) => (
                <button key={i} onClick={() => setCurrent(i)} aria-label={`Image ${i + 1}`} className="rounded-full transition-all duration-300" style={{ width: i === current ? '1.5rem' : '0.5rem', height: '0.5rem', background: i === current ? 'var(--venturi-coral)' : 'rgba(255,255,255,0.6)' }} />
              ))}
            </div>
          </div>

          {/* Quotes */}
          <div className="flex flex-col gap-7">
            {quotes.map(({ accent, body }) => (
              <div key={accent} className="relative pl-7 py-5" style={{ borderLeft: '3px solid var(--venturi-coral)', background: 'rgba(245,101,101,0.04)', borderRadius: '0 0.75rem 0.75rem 0' }}>
                <span className="font-display italic absolute" style={{ fontSize: '4rem', color: 'var(--venturi-coral)', opacity: 0.7, top: '-0.75rem', left: '1rem', lineHeight: 1 }}>&ldquo;</span>
                <p className="font-body font-semibold mb-2" style={{ color: 'var(--venturi-orange)', fontSize: '0.82rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>{accent}</p>
                <p className="font-editorial italic font-light leading-relaxed m-0" style={{ color: 'var(--venturi-slate)', fontSize: 'clamp(0.95rem,1.5vw,1.1rem)' }}>{body}</p>
              </div>
            ))}
            <div className="mt-2">
              <a href="tel:8855866640" className="btn-coral font-body">Book Your Session</a>
            </div>
          </div>
        </div>

        {/* ── Highlights Grid ──────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {highlights.map(({ icon: Icon, title, description }, i) => (
            <div key={title} className="card-base p-6 flex flex-col gap-4" style={{ animationDelay: `${i * 120}ms` }}>
              <div className="flex items-center justify-center rounded-2xl shrink-0" style={{ width: '3rem', height: '3rem', background: 'linear-gradient(135deg, rgba(245,101,101,0.12), rgba(237,137,54,0.1))' }}>
                <Icon size={20} style={{ color: 'var(--venturi-coral)' }} />
              </div>
              <div style={{ height: '2px', width: '2rem', borderRadius: '9999px', background: 'linear-gradient(90deg, var(--venturi-coral), var(--venturi-orange))' }} />
              <div>
                <h4 className="font-display font-semibold mb-1.5" style={{ fontSize: '0.95rem', color: 'var(--venturi-navy)' }}>{title}</h4>
                <p className="font-body leading-relaxed m-0" style={{ fontSize: '0.82rem', color: 'var(--venturi-slate)' }}>{description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
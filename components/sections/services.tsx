'use client';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    image: '/home/services/img1.avif',
    alt: 'Rehabilitation and Recovery',
    tag: '01',
    title: 'Rehabilitation & Recovery',
    body: 'Specializing in stroke recovery, joint issues, and post-surgical rehabilitation for an improved quality of life.',
  },
  {
    image: '/home/services/img2.avif',
    alt: 'Yoga-Based Treatments',
    tag: '02',
    title: 'Yoga-Based Treatments',
    body: 'Integrating yoga principles into therapy for holistic healing and enhanced physical and mental well-being.',
  },
  {
    image: '/home/services/img3.avif',
    alt: 'Convenient Home Care',
    tag: '03',
    title: 'Convenient Home Care',
    body: 'Home visit services for personalized care at your doorstep — expert physiotherapy wherever you need it.',
  },
];

export default function Services() {
  return (
    <section id="services" className="section-bg-dark relative overflow-hidden py-28">
      <div className="section-container">

        {/* ── Section Header ──────────────────────────────── */}
        <div className="text-center mb-20">
          <div className="badge-coral-light mx-auto mb-5">
            <span className="badge-dot" />
            What We Offer
          </div>
          <h2 className="section-title mb-4">
            Expert <span style={{ color: 'var(--venturi-coral)' }}>Physiotherapy</span> Services
          </h2>
          <p className="section-subtitle mx-auto mt-4" style={{ maxWidth: '36rem' }}>
            Personalized care for all ages, focusing on recovery from injuries and chronic conditions.
          </p>
          <div className="accent-line animate-line-grow anim-both mx-auto mt-6" style={{ width: '5rem' }} />
        </div>

        {/* ── Service Cards ───────────────────────────────── */}
        <div className="grid md:grid-cols-3 gap-7 mb-20">
          {services.map(({ image, alt, tag, title, body }) => (
            <div
              key={tag}
              className="group card-base overflow-hidden flex flex-col"
            >
              {/* Image */}
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={image}
                  alt={alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(26,32,44,0.6) 0%, transparent 60%)' }} />
                <span className="font-display font-bold absolute top-4 right-5 text-white/25" style={{ fontSize: '2.5rem', lineHeight: 1 }}>
                  {tag}
                </span>
              </div>

              {/* Body */}
              <div className="p-7 flex flex-col flex-1">
                <div style={{ height: '2px', width: '2rem', borderRadius: '9999px', background: 'linear-gradient(90deg, var(--venturi-coral), var(--venturi-orange))', marginBottom: '1rem' }} />
                <h3 className="font-display font-semibold mb-3" style={{ fontSize: '1.15rem', color: 'white' }}>
                  {title}
                </h3>
                <p className="font-body leading-relaxed flex-1" style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.55)' }}>
                  {body}
                </p>
                <a
                  href="tel:8855866640"
                  className="mt-5 inline-flex items-center gap-1.5 font-body font-medium text-sm transition-colors duration-300 group-hover:gap-2.5"
                  style={{ color: 'var(--venturi-coral)', textDecoration: 'none' }}
                >
                  Book now
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* ── Bottom Image Pair ────────────────────────────── */}
        <div className="grid md:grid-cols-2 gap-7 items-center">
          <div
            className="rounded-3xl overflow-hidden shadow-xl hover-lift"
            style={{ padding: '1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
          >
            <Image
              src="/home/services/img11.avif"
              alt="Physiotherapy Session"
              width={581}
              height={437}
              className="w-full h-auto object-contain rounded-2xl"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div
            className="rounded-3xl overflow-hidden shadow-xl hover-lift flex justify-center"
            style={{ padding: '1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
          >
            <Image
              src="/home/services/img22.avif"
              alt="Rehabilitation Therapy"
              width={656}
              height={437}
              className="h-auto object-contain rounded-2xl"
              style={{ width: '57%' }}
              sizes="(max-width: 768px) 100vw, 45vw"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
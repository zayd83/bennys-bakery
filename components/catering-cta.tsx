'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useFadeIn } from '@/hooks/use-fade-in'
import { useParallax } from '@/hooks/use-parallax'

export function CateringCTA() {
  const { ref, visible } = useFadeIn()
  const bgRef = useParallax(0.2)

  return (
    <section className="relative min-h-[600px] overflow-hidden" ref={ref}>
      {/* Background Image with parallax */}
      <div
        ref={bgRef}
        className="absolute inset-x-0"
        style={{ top: '-20%', bottom: '-20%', willChange: 'transform' }}
      >
        <Image
          src="/bakery-sfeer-1.jpg"
          alt="Catering achtergrond"
          fill
          className="object-cover"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-dark/[0.72]" />

      {/* Content — scale zoom-in entrance */}
      <div
        className={`relative flex min-h-[600px] flex-col items-center justify-center px-6 py-24 text-center transition-all duration-400 ease-out ${
          visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      >
        <span className="mb-4 font-sans text-[0.65rem] uppercase tracking-[0.2em] text-gold">
          CATERING & ZAKELIJK
        </span>
        <h2 className="mb-6 max-w-xl font-serif text-[clamp(3rem,5vw,5rem)] italic leading-[1.05] text-cream">
          Benny&apos;s bij jou op locatie
        </h2>
        <p className="mb-8 max-w-md font-sans text-base font-light text-cream/75">
          Bedrijfslunches, events, taarten op bestelling. Wij zorgen voor het
          eten, jij voor de gasten.
        </p>
        <Link
          href="/reserveren"
          className="rounded-sm bg-terracotta px-8 py-4 font-sans text-white transition-all hover:brightness-110"
        >
          Vraag een offerte aan
        </Link>
        <Link
          href="https://wa.me/31685091092"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 font-sans text-sm text-cream/60 transition-opacity hover:opacity-100"
        >
          Of stuur direct een WhatsApp →
        </Link>
      </div>
    </section>
  )
}

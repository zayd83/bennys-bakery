'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useInView } from '@/hooks/use-in-view'

export function CateringCTA() {
  const { ref, isInView } = useInView()

  return (
    <section className="relative min-h-[500px]" ref={ref}>
      {/* Background Image */}
      <Image
        src="https://picsum.photos/seed/catering/1600/800"
        alt="Catering achtergrond"
        fill
        className="object-cover"
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-dark/[0.72]" />

      {/* Content */}
      <div className="relative flex min-h-[500px] flex-col items-center justify-center px-6 py-20 text-center">
        <span
          className={`mb-4 font-sans text-[0.65rem] uppercase tracking-[0.2em] text-gold ${
            isInView ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          CATERING & ZAKELIJK
        </span>
        <h2
          className={`mb-6 max-w-xl font-serif text-[clamp(2rem,4vw,3rem)] italic text-cream ${
            isInView ? 'animate-fade-in-up animation-delay-100' : 'opacity-0'
          }`}
        >
          Benny&apos;s bij jou op locatie
        </h2>
        <p
          className={`mb-8 max-w-md font-sans text-base font-light text-cream/75 ${
            isInView ? 'animate-fade-in-up animation-delay-200' : 'opacity-0'
          }`}
        >
          Bedrijfslunches, events, taarten op bestelling. Wij zorgen voor het
          eten, jij voor de gasten.
        </p>
        <Link
          href="#reserveren"
          className={`rounded-sm bg-terracotta px-8 py-4 font-sans text-white transition-all hover:brightness-110 ${
            isInView ? 'animate-fade-in-up animation-delay-300' : 'opacity-0'
          }`}
        >
          Vraag een offerte aan
        </Link>
        <Link
          href="https://wa.me/31685091092"
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-4 font-sans text-sm text-cream/60 transition-opacity hover:opacity-100 ${
            isInView ? 'animate-fade-in-up animation-delay-400' : 'opacity-0'
          }`}
        >
          Of stuur direct een WhatsApp →
        </Link>
      </div>
    </section>
  )
}

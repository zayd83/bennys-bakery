'use client'

import Image from 'next/image'
import { useParallax } from '@/hooks/use-parallax'
import { useInView } from '@/hooks/use-in-view'

export function CinematicInterlude() {
  const photoRef = useParallax(0.2)
  const { ref, isInView } = useInView({ threshold: 0.2 })

  return (
    <section
      ref={ref}
      className="relative h-[70vh] sm:h-[85vh] overflow-hidden"
      aria-hidden="true"
    >
      {/* Parallax image */}
      <div
        ref={photoRef}
        className="absolute inset-x-0"
        style={{ top: '-20%', bottom: '-20%', willChange: 'transform' }}
      >
        <Image
          src="/images/sfeer/cinematic-bloemen.jpg"
          alt="Benny's Bakery interieur"
          fill
          className="object-cover object-center"
        />
      </div>

      {/* Subtle dark vignette — edges only, center stays open */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.45) 100%)',
        }}
      />

      {/* Fade-in tagline */}
      <div className="absolute inset-0 flex items-end justify-center pb-14 sm:pb-20">
        <p
          className={`font-serif text-[1.05rem] sm:text-[1.25rem] italic text-white/80 tracking-wide transition-all duration-700 ease-out ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          Welkom in Benny&apos;s
        </p>
      </div>
    </section>
  )
}

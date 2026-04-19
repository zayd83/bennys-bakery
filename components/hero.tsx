'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useInView } from '@/hooks/use-in-view'
import { useParallax } from '@/hooks/use-parallax'

export function Hero() {
  const { ref, isInView } = useInView()
  const heroParallaxRef = useParallax(0.4)

  return (
    <section
      id="home"
      className="relative h-screen min-h-[700px] overflow-hidden"
    >
      <div className="flex h-full flex-col md:flex-row">

        {/* ── Left Half ── */}
        <div
          className="relative flex h-[60vh] w-full flex-col justify-end bg-dark p-8 md:h-full md:w-1/2 md:p-12"
          ref={ref}
        >
          {/* Desktop Circles — tight cluster, centered in left half */}
          <div className="absolute inset-0 hidden md:block">
            <div
              className={`absolute ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ top: '8%', left: '50%', transform: 'translateX(-50%)' }}
            >
              <div className="relative" style={{ width: '300px', height: '200px' }}>
                {/* Circle 1 — top-left */}
                <div
                  className="absolute overflow-hidden rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.55)]"
                  style={{
                    top: 0,
                    left: 0,
                    width: '160px',
                    height: '160px',
                    animation: 'float 4s ease-in-out infinite',
                    border: '2px solid rgba(237,232,222,0.2)',
                  }}
                >
                  <Image
                    src="/food-dish-6.jpg"
                    alt="Vers gebakken brood"
                    width={160}
                    height={160}
                    className="h-full w-full object-cover"
                    priority
                  />
                </div>

                {/* Circle 2 — center-bottom, overlaps */}
                <div
                  className="absolute overflow-hidden rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.55)]"
                  style={{
                    top: '50px',
                    left: '80px',
                    width: '140px',
                    height: '140px',
                    zIndex: 1,
                    animation: 'float 5s ease-in-out 1s infinite',
                    border: '2px solid rgba(237,232,222,0.2)',
                  }}
                >
                  <Image
                    src="/food-dish-8.jpg"
                    alt="Marokkaanse patisserie"
                    width={140}
                    height={140}
                    className="h-full w-full object-cover"
                    priority
                  />
                </div>

                {/* Circle 3 — top-right */}
                <div
                  className="absolute overflow-hidden rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.55)]"
                  style={{
                    top: 0,
                    right: 0,
                    width: '155px',
                    height: '155px',
                    animation: 'float 4.5s ease-in-out 2s infinite',
                    border: '2px solid rgba(237,232,222,0.2)',
                  }}
                >
                  <Image
                    src="/food-dish-4.jpg"
                    alt="Artisanaal gebak"
                    width={155}
                    height={155}
                    className="h-full w-full object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Circles */}
          <div className="absolute right-4 top-4 md:hidden">
            <div className="flex gap-2">
              <div className="h-20 w-20 overflow-hidden rounded-full border-2 border-cream/30 shadow-xl">
                <Image
                  src="/food-dish-6.jpg"
                  alt="Vers gebakken brood"
                  width={80}
                  height={80}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
              <div className="mt-6 h-16 w-16 overflow-hidden rounded-full border-2 border-cream/30 shadow-xl">
                <Image
                  src="/food-dish-8.jpg"
                  alt="Marokkaanse patisserie"
                  width={64}
                  height={64}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Bottom content */}
          <div className="relative z-10">
            <span
              className={`mb-4 inline-block font-sans text-[0.65rem] uppercase tracking-[0.2em] text-gold ${
                isInView ? 'animate-fade-in-up animation-delay-300' : 'opacity-0'
              }`}
            >
              DORDRECHT — BAKKERIJ
            </span>
            <h1
              className={`max-w-[480px] font-serif text-[clamp(3rem,5vw,5.5rem)] font-normal italic leading-[1.05] text-text-light ${
                isInView ? 'animate-fade-in-up animation-delay-400' : 'opacity-0'
              }`}
            >
              Het Ambacht Van Een Echte Bakkerij
            </h1>
            <p
              className={`mt-4 max-w-[340px] font-sans text-[0.9rem] font-light leading-relaxed text-text-light/55 ${
                isInView ? 'animate-fade-in-up animation-delay-400' : 'opacity-0'
              }`}
            >
              Vers gebakken, met liefde bereid — elke dag opnieuw.
            </p>
            <div
              className={`mt-8 flex flex-wrap gap-4 ${
                isInView ? 'animate-fade-in-up animation-delay-500' : 'opacity-0'
              }`}
            >
              <Link
                href="#reserveren"
                className="flex items-center gap-3 rounded-sm px-7 py-3.5 font-sans text-sm font-medium tracking-wide text-[#1C1410] transition-all hover:bg-white"
                style={{ background: 'rgba(237,232,222,0.95)' }}
              >
                Reserveren
                <ArrowRight size={15} />
              </Link>
              <Link
                href="#menu"
                className="flex items-center gap-3 rounded-sm px-7 py-3.5 font-sans text-sm font-medium tracking-wide text-[#EDE8DE] transition-all"
                style={{ border: '1px solid rgba(237,232,222,0.45)' }}
                onMouseEnter={(e) => {
                  ;(e.currentTarget as HTMLAnchorElement).style.borderColor =
                    'rgba(237,232,222,0.9)'
                }}
                onMouseLeave={(e) => {
                  ;(e.currentTarget as HTMLAnchorElement).style.borderColor =
                    'rgba(237,232,222,0.45)'
                }}
              >
                Bekijk Menu
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>

        {/* ── Right Half — single seamless image ── */}
        <div className="relative h-[40vh] w-full overflow-hidden md:h-full md:w-1/2">
          <div
            ref={heroParallaxRef}
            className="absolute inset-x-0"
            style={{ top: '-40%', bottom: '-40%', willChange: 'transform' }}
          >
            <Image
              src="/herosection.jpg"
              alt="Benny's Bakery interieur"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-black/15" />
        </div>

      </div>
    </section>
  )
}

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
    <section id="home" className="relative h-screen min-h-[700px]">
      <div className="flex h-full flex-col md:flex-row">

        {/* ── Left Half ── */}
        <div
          className="relative flex h-[60vh] w-full flex-col justify-end bg-dark p-8 md:h-full md:w-1/2 md:p-12"
          ref={ref}
        >
          {/* Desktop Circles — tight cluster upper-left */}
          <div className="absolute inset-0 hidden md:block">
            {/* Circle 1 — largest, leftmost */}
            <div
              className={`absolute ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ top: '10%', left: '18%' }}
            >
              <div
                className="h-[170px] w-[170px] overflow-hidden rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.55)]"
                style={{ animation: 'float 4s ease-in-out infinite', border: '2px solid rgba(237,232,222,0.2)' }}
              >
                <Image
                  src="/food-dish-6.jpg"
                  alt="Vers gebakken brood"
                  width={170}
                  height={170}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
            </div>

            {/* Circle 2 — medium, center of cluster */}
            <div
              className={`absolute ${isInView ? 'animate-fade-in-up animation-delay-100' : 'opacity-0'}`}
              style={{ top: '19%', left: '31%' }}
            >
              <div
                className="h-[145px] w-[145px] overflow-hidden rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.55)]"
                style={{ animation: 'float 5s ease-in-out 1s infinite', border: '2px solid rgba(237,232,222,0.2)' }}
              >
                <Image
                  src="/food-dish-8.jpg"
                  alt="Marokkaanse patisserie"
                  width={145}
                  height={145}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
            </div>

            {/* Circle 3 — right of cluster */}
            <div
              className={`absolute ${isInView ? 'animate-fade-in-up animation-delay-200' : 'opacity-0'}`}
              style={{ top: '9%', left: '44%' }}
            >
              <div
                className="h-[155px] w-[155px] overflow-hidden rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.55)]"
                style={{ animation: 'float 4.5s ease-in-out 2s infinite', border: '2px solid rgba(237,232,222,0.2)' }}
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

          {/* Option C — fills dead space at mid-point */}
          <div
            className="absolute left-0 right-0 hidden items-center justify-center gap-3 md:flex"
            style={{ top: '50%' }}
          >
            <div className="h-px w-10 bg-cream/25" />
            <span
              className="font-sans text-[0.65rem] uppercase tracking-[0.2em]"
              style={{ color: 'rgba(237,232,222,0.35)' }}
            >
              VERS · LOKAAL · AMBACHTELIJK
            </span>
            <div className="h-px w-10 bg-cream/25" />
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
              className={`mb-5 inline-block font-sans text-[0.65rem] uppercase tracking-[0.25em] text-gold ${
                isInView ? 'animate-fade-in-up animation-delay-300' : 'opacity-0'
              }`}
            >
              DORDRECHT — BAKKERIJ
            </span>
            <h1
              className={`max-w-[480px] font-serif text-[clamp(3.5rem,5.5vw,6rem)] font-normal italic leading-[1.0] text-text-light ${
                isInView ? 'animate-fade-in-up animation-delay-400' : 'opacity-0'
              }`}
            >
              Het Ambacht Van Een Echte Bakkerij
            </h1>
            <p
              className={`mt-4 max-w-[360px] font-sans text-[0.95rem] font-light leading-relaxed text-text-light/60 ${
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
                className="flex items-center gap-2 rounded px-10 py-4 font-sans text-[0.9rem] font-medium tracking-[0.05em] text-[#1C1410] transition-all hover:bg-white"
                style={{ background: 'rgba(237,232,222,0.95)' }}
              >
                Reserveren
                <ArrowRight size={16} />
              </Link>
              <Link
                href="#menu"
                className="flex items-center gap-2 rounded border border-cream/50 px-10 py-4 font-sans text-[0.9rem] font-medium tracking-[0.05em] text-[#EDE8DE] transition-all hover:border-cream/90"
              >
                Bekijk Menu
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>

        {/* ── Right Half — single seamless parallax image ── */}
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
          <div className="absolute inset-0 bg-black/20" />
        </div>

      </div>
    </section>
  )
}

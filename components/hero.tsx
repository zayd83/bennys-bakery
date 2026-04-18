'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { useInView } from '@/hooks/use-in-view'

export function Hero() {
  const { ref, isInView } = useInView()
  const heroImgRef = useRef<HTMLDivElement>(null)
  const circlesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY
      if (heroImgRef.current) {
        heroImgRef.current.style.transform = `translateY(${scrolled * 0.35}px)`
      }
      if (circlesRef.current) {
        circlesRef.current.style.transform = `translateY(${scrolled * -0.15}px)`
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section id="home" className="relative h-screen min-h-[700px]">
      <div className="flex h-full flex-col md:flex-row">

        {/* ── Left Half ── */}
        <div
          className="relative flex h-[60vh] w-full flex-col justify-end bg-dark p-8 md:h-full md:w-1/2 md:p-12"
          ref={ref}
        >

          {/* Desktop Circles — clustered in upper portion */}
          <div
            ref={circlesRef}
            className="absolute inset-0 hidden md:block"
            style={{ willChange: 'transform' }}
          >
            {/* Circle 1 — acai bowl, top-left of cluster */}
            <div
              className={`absolute ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ top: '12%', left: '18%' }}
            >
              <div
                className="h-[160px] w-[160px] overflow-hidden rounded-full border-2 border-cream/25 shadow-[0_8px_32px_rgba(0,0,0,0.55)]"
                style={{ animation: 'float 4s ease-in-out infinite' }}
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
            </div>

            {/* Circle 2 — msemmen sandwich, center-lower */}
            <div
              className={`absolute ${isInView ? 'animate-fade-in-up animation-delay-100' : 'opacity-0'}`}
              style={{ top: '23%', left: '35%' }}
            >
              <div
                className="h-[140px] w-[140px] overflow-hidden rounded-full border-2 border-cream/25 shadow-[0_8px_32px_rgba(0,0,0,0.55)]"
                style={{ animation: 'float 5s ease-in-out 1s infinite' }}
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
            </div>

            {/* Circle 3 — breakfast plate, top-right of cluster */}
            <div
              className={`absolute ${isInView ? 'animate-fade-in-up animation-delay-200' : 'opacity-0'}`}
              style={{ top: '10%', left: '52%' }}
            >
              <div
                className="h-[150px] w-[150px] overflow-hidden rounded-full border-2 border-cream/25 shadow-[0_8px_32px_rgba(0,0,0,0.55)]"
                style={{ animation: 'float 4.5s ease-in-out 2s infinite' }}
              >
                <Image
                  src="/food-dish-4.jpg"
                  alt="Artisanaal gebak"
                  width={150}
                  height={150}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Decorative gold line — fills the empty space between circles and heading */}
          <div
            className="absolute left-1/2 hidden -translate-x-1/2 flex-col items-center md:flex"
            style={{ top: '46%' }}
          >
            <div className="h-1.5 w-1.5 rounded-full bg-gold/40" />
            <div className="h-16 w-px bg-gradient-to-b from-gold/30 to-transparent" />
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
              className={`max-w-[480px] font-serif text-[clamp(3rem,5.5vw,5.5rem)] font-normal italic leading-[1.05] text-text-light ${
                isInView ? 'animate-fade-in-up animation-delay-400' : 'opacity-0'
              }`}
            >
              Het Ambacht Van Een Echte Bakkerij
            </h1>
            <div
              className={`mt-8 flex flex-wrap gap-4 ${
                isInView ? 'animate-fade-in-up animation-delay-500' : 'opacity-0'
              }`}
            >
              <Link
                href="#reserveren"
                className="flex items-center gap-2 rounded-sm border border-cream/40 bg-cream/[0.12] px-8 py-3.5 font-sans text-[0.9rem] tracking-[0.05em] text-text-light backdrop-blur-md transition-all hover:bg-cream/20"
              >
                Reserveren
                <ArrowRight size={16} />
              </Link>
              <Link
                href="#menu"
                className="flex items-center gap-2 rounded-sm border border-cream/25 bg-cream/[0.06] px-8 py-3.5 font-sans text-[0.9rem] tracking-[0.05em] text-text-light backdrop-blur-md transition-all hover:bg-cream/[0.15]"
              >
                Bekijk Menu
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>

        {/* ── Right Half — image with parallax ── */}
        <div className="relative h-[40vh] w-full overflow-hidden md:h-full md:w-1/2">
          <div
            ref={heroImgRef}
            className="absolute inset-x-0"
            style={{ top: '-15%', height: '130%', willChange: 'transform' }}
          >
            <Image
              src="/herosection.jpg"
              alt="Benny's Bakery interieur"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-black/20" />
        </div>

      </div>
    </section>
  )
}

'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Star, ChevronDown } from 'lucide-react'
import { useInView } from '@/hooks/use-in-view'
import { useParallax } from '@/hooks/use-parallax'
import { useEffect, useState } from 'react'

export function Hero() {
  const { ref, isInView } = useInView()
  const heroParallaxRef = useParallax(0.4)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section id="home" className="relative z-10 h-screen overflow-hidden" ref={ref}>

      {/* ── MOBILE LAYOUT ── */}
      <div className="md:hidden absolute inset-0 flex flex-col">
        <Image
          src="/images/sfeer/patisserie-vitrine.jpg"
          alt="Benny's Bakery"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />

        {/* Text & buttons at bottom */}
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-12">
          {/* Rating badge */}
          <div className={`flex items-center gap-1.5 mb-5 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="flex items-center gap-1 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1">
              <Star size={11} className="fill-[#D4A853] text-[#D4A853]" />
              <span className="font-sans text-[0.7rem] text-white font-medium">4.8 · Google Reviews</span>
            </div>
          </div>
          <h1 className={`font-serif text-[3rem] italic leading-[1.05] text-white mb-3 ${isInView ? 'animate-fade-in-up animation-delay-200' : 'opacity-0'}`}>
            Marokkaanse smaken, recht uit het hart van Dordrecht
          </h1>
          <p className={`font-sans text-sm font-light text-white/80 mb-8 ${isInView ? 'animate-fade-in-up animation-delay-150' : 'opacity-0'}`}>
            Verse lunchroom &amp; bakkerij in Dordrecht — elke dag voor je open
          </p>
          <div className={`flex flex-col gap-3 ${isInView ? 'animate-fade-in-up animation-delay-225' : 'opacity-0'}`}>
            <Link
              href="/menu"
              className="flex items-center justify-center gap-3 rounded-sm bg-[#C4622D] py-4 font-sans text-sm font-medium tracking-wide text-white transition-all hover:brightness-110"
            >
              Bekijk Menu <ArrowRight size={15} />
            </Link>
            <Link
              href="/reserveren"
              className="flex items-center justify-center gap-3 rounded-sm py-4 font-sans text-sm font-medium tracking-wide text-white transition-all"
              style={{ border: '1px solid rgba(255,255,255,0.35)' }}
            >
              Reserveren <ArrowRight size={15} />
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-4 right-6 transition-opacity duration-500"
          style={{ opacity: scrolled ? 0 : 1 }}
          aria-hidden="true"
        >
          <ChevronDown size={20} className="text-white/50 animate-bounce" />
        </div>
      </div>

      {/* ── DESKTOP LAYOUT ── */}
      <div className="hidden md:flex h-full flex-row">

        {/* Left Half */}
        <div className="relative flex h-full w-1/2 flex-col justify-end bg-[#F0E9DE] pt-12 pr-12 pb-16">
          <div className="relative z-10 max-w-[440px]" style={{ marginLeft: 'max(1.5rem, calc(50% - 210px))' }}>

            {/* Tag */}
            <span className={`mb-4 inline-block font-sans text-[0.6rem] uppercase tracking-[0.22em] text-[#D4A853] ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
              Lunchroom · Patisserie · Bakkerij — Dordrecht
            </span>

            <h1 className={`max-w-[480px] font-serif text-[clamp(3rem,5vw,5.5rem)] font-normal italic leading-[1.05] text-[#2C1F14] ${isInView ? 'animate-fade-in-up animation-delay-200' : 'opacity-0'}`}>
              Marokkaanse smaken, recht uit het hart van Dordrecht
            </h1>
            <p className={`mt-4 max-w-[340px] font-sans text-[0.9rem] font-light leading-relaxed text-[#6B4C35] ${isInView ? 'animate-fade-in-up animation-delay-400' : 'opacity-0'}`}>
              Verse lunchroom &amp; bakkerij in Dordrecht — elke dag voor je open
            </p>

            <div className={`mt-8 flex flex-wrap gap-3 ${isInView ? 'animate-fade-in-up animation-delay-225' : 'opacity-0'}`}>
              <Link href="/menu" className="flex items-center gap-3 rounded-sm bg-[#2C1F14] px-7 py-3.5 font-sans text-sm font-medium tracking-wide text-[#FAF7F2] transition-all hover:bg-[#3d2a1c]">
                Bekijk Menu <ArrowRight size={15} />
              </Link>
              <Link href="/reserveren" className="flex items-center gap-3 rounded-sm px-7 py-3.5 font-sans text-sm font-medium tracking-wide text-[#2C1F14] transition-all whitespace-nowrap hover:bg-[#2C1F14]/8" style={{ border: '1px solid rgba(44,31,20,0.55)' }}>
                Reserveren <ArrowRight size={15} />
              </Link>
            </div>

            {/* Rating badge */}
            <div className={`mt-8 flex items-center gap-2 ${isInView ? 'animate-fade-in-up animation-delay-400' : 'opacity-0'}`}>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} className="fill-[#D4A853] text-[#D4A853]" />
                ))}
              </div>
              <span className="font-sans text-[0.72rem] text-[#6B4C35]">4.8 · Google Reviews</span>
            </div>
          </div>

          {/* Scroll indicator */}
          <div
            className="absolute bottom-6 left-1/2 -translate-x-1/2 transition-opacity duration-500"
            style={{ opacity: scrolled ? 0 : 1 }}
            aria-hidden="true"
          >
            <ChevronDown size={22} className="text-[#2C1F14]/30 animate-bounce" />
          </div>
        </div>

        {/* Right Half — photo */}
        <div className="relative h-full w-1/2 overflow-hidden">
          <div ref={heroParallaxRef} className="absolute inset-x-0" style={{ top: '-40%', bottom: '-40%', willChange: 'transform' }}>
            <Image src="/images/sfeer/patisserie-vitrine.jpg" alt="Benny's Bakery patisserievitrine" fill className="object-cover object-top" priority />
          </div>
          <div className="absolute inset-0 bg-black/10" />
        </div>

      </div>
    </section>
  )
}

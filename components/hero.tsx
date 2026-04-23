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
    <section id="home" className="relative z-10 h-screen overflow-hidden" ref={ref}>

      {/* ── MOBILE LAYOUT ── */}
      <div className="md:hidden absolute inset-0 flex flex-col">

        {/* Full-screen background photo */}
        <Image
          src="/herosection.jpg"
          alt="Benny's Bakery"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/55" />

        {/* Text & buttons at bottom */}
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-12">
          <h1 className={`font-serif text-[2.6rem] italic leading-[1.05] text-white mb-3 ${isInView ? 'animate-fade-in-up animation-delay-200' : 'opacity-0'}`}>
            Marokkaanse smaken, recht uit het hart van Dordrecht
          </h1>
          <p className={`font-sans text-sm font-light text-white/70 mb-8 ${isInView ? 'animate-fade-in-up animation-delay-150' : 'opacity-0'}`}>
            Vers bereid met liefde, elke ochtend opnieuw
          </p>
          <div className={`flex flex-col gap-3 ${isInView ? 'animate-fade-in-up animation-delay-225' : 'opacity-0'}`}>
            <Link
              href="/reserveren"
              className="flex items-center justify-center gap-3 rounded-sm bg-[#C4622D] py-4 font-sans text-sm font-medium tracking-wide text-white transition-all hover:brightness-110"
            >
              Reserveren <ArrowRight size={15} />
            </Link>
            <Link
              href="/menu"
              className="flex items-center justify-center gap-3 rounded-sm py-4 font-sans text-sm font-medium tracking-wide text-white transition-all"
              style={{ border: '1px solid rgba(255,255,255,0.35)' }}
            >
              Bekijk Menu <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>

      {/* ── DESKTOP LAYOUT ── */}
      <div className="hidden md:flex h-full flex-row">

        {/* Left Half */}
        <div className="relative flex h-full w-1/2 flex-col justify-end bg-[#F0E9DE] pt-12 pr-12 pb-12">

          {/* Bottom content */}
          <div className="relative z-10 max-w-[440px]" style={{ marginLeft: 'max(1.5rem, calc(50% - 210px))' }}>
            <h1 className={`max-w-[480px] font-serif text-[clamp(3rem,5vw,5.5rem)] font-normal italic leading-[1.05] text-[#2C1F14] ${isInView ? 'animate-fade-in-up animation-delay-400' : 'opacity-0'}`}>
              Marokkaanse smaken, recht uit het hart van Dordrecht
            </h1>
            <p className={`mt-4 max-w-[340px] font-sans text-[0.9rem] font-light leading-relaxed text-[#6B4C35] ${isInView ? 'animate-fade-in-up animation-delay-400' : 'opacity-0'}`}>
              Vers bereid met liefde, elke ochtend opnieuw
            </p>
            <div className={`mt-8 flex flex-wrap gap-3 ${isInView ? 'animate-fade-in-up animation-delay-225' : 'opacity-0'}`}>
              <Link href="/reserveren" className="flex items-center gap-3 rounded-sm bg-[#2C1F14] px-7 py-3.5 font-sans text-sm font-medium tracking-wide text-[#FAF7F2] transition-all hover:bg-[#3d2a1c]">
                Reserveren <ArrowRight size={15} />
              </Link>
              <Link href="/menu" className="flex items-center gap-3 rounded-sm px-7 py-3.5 font-sans text-sm font-medium tracking-wide text-[#2C1F14] transition-all whitespace-nowrap hover:bg-[#2C1F14]/8" style={{ border: '1px solid rgba(44,31,20,0.55)' }}>
                Bekijk Menu <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>

        {/* Right Half — photo */}
        <div className="relative h-full w-1/2 overflow-hidden">
          <div ref={heroParallaxRef} className="absolute inset-x-0" style={{ top: '-40%', bottom: '-40%', willChange: 'transform' }}>
            <Image src="/herosection.jpg" alt="Benny's Bakery interieur" fill className="object-cover object-center" priority />
          </div>
          <div className="absolute inset-0 bg-black/15" />
        </div>

      </div>
    </section>
  )
}

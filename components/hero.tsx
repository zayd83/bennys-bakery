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

        {/* Three food circles — centered */}
        <div className="absolute left-1/2 -translate-x-1/2" style={{ top: '18%' }}>
          <div className={`flex items-end gap-5 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="w-[110px] h-[110px] rounded-full overflow-hidden border-2 border-white/25 shadow-2xl flex-shrink-0">
              <Image src="/food-dish-6.jpg" alt="" width={110} height={110} className="w-full h-full object-cover" priority />
            </div>
            <div className="w-[140px] h-[140px] rounded-full overflow-hidden border-2 border-white/25 shadow-2xl flex-shrink-0" style={{ marginBottom: '-28px' }}>
              <Image src="/food-dish-4.jpg" alt="" width={140} height={140} className="w-full h-full object-cover" priority />
            </div>
            <div className="w-[110px] h-[110px] rounded-full overflow-hidden border-2 border-white/25 shadow-2xl flex-shrink-0">
              <Image src="/food-dish-8.jpg" alt="" width={110} height={110} className="w-full h-full object-cover" priority />
            </div>
          </div>
        </div>

        {/* Text & buttons at bottom */}
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-12">
          <span className={`block font-sans text-[0.65rem] uppercase tracking-[0.25em] text-[#D4A853] mb-4 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
            DORDRECHT — BAKKERIJ
          </span>
          <h1 className={`font-serif text-[2.6rem] italic leading-[1.05] text-white mb-3 ${isInView ? 'animate-fade-in-up animation-delay-200' : 'opacity-0'}`}>
            Het Ambacht Van Een Echte Bakkerij
          </h1>
          <p className={`font-sans text-sm font-light text-white/70 mb-8 ${isInView ? 'animate-fade-in-up animation-delay-150' : 'opacity-0'}`}>
            Vers gebakken, met liefde bereid — elke dag opnieuw.
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

          {/* Desktop Circles */}
          <div className="absolute inset-0">
            <div
              className={`absolute ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ top: '8%', left: '50%', transform: 'translateX(-50%)' }}
            >
              <div className="relative" style={{ width: '420px', height: '240px' }}>
                <div
                  className="absolute overflow-hidden rounded-full shadow-[0_8px_32px_rgba(44,31,20,0.18)]"
                  style={{ top: 0, left: 0, width: '150px', height: '150px', animation: 'spinCircle 18s linear infinite', border: '2px solid rgba(44,31,20,0.12)' }}
                >
                  <Image src="/food-dish-6.jpg" alt="Vers gebakken brood" width={150} height={150} className="h-full w-full object-cover" priority />
                </div>
                <div
                  className="absolute overflow-hidden rounded-full shadow-[0_8px_32px_rgba(44,31,20,0.18)]"
                  style={{ top: '55px', left: '140px', width: '135px', height: '135px', zIndex: 1, animation: 'spinCircle 24s linear infinite reverse', border: '2px solid rgba(44,31,20,0.12)' }}
                >
                  <Image src="/food-dish-8.jpg" alt="Marokkaanse patisserie" width={135} height={135} className="h-full w-full object-cover" priority />
                </div>
                <div
                  className="absolute overflow-hidden rounded-full shadow-[0_8px_32px_rgba(44,31,20,0.18)]"
                  style={{ top: 0, left: '270px', width: '145px', height: '145px', animation: 'spinCircle 20s linear infinite', border: '2px solid rgba(44,31,20,0.12)' }}
                >
                  <Image src="/food-dish-4.jpg" alt="Artisanaal gebak" width={145} height={145} className="h-full w-full object-cover" priority />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom content */}
          <div className="relative z-10 max-w-[440px]" style={{ marginLeft: 'max(1.5rem, calc(50% - 210px))' }}>
            <span className={`mb-4 inline-block font-sans text-[0.65rem] uppercase tracking-[0.2em] text-[#C4622D] ${isInView ? 'animate-fade-in-up animation-delay-150' : 'opacity-0'}`}>
              DORDRECHT — BAKKERIJ
            </span>
            <h1 className={`max-w-[480px] font-serif text-[clamp(3rem,5vw,5.5rem)] font-normal italic leading-[1.05] text-[#2C1F14] ${isInView ? 'animate-fade-in-up animation-delay-400' : 'opacity-0'}`}>
              Het Ambacht Van Een Echte Bakkerij
            </h1>
            <p className={`mt-4 max-w-[340px] font-sans text-[0.9rem] font-light leading-relaxed text-[#6B4C35] ${isInView ? 'animate-fade-in-up animation-delay-400' : 'opacity-0'}`}>
              Vers gebakken, met liefde bereid — elke dag opnieuw.
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

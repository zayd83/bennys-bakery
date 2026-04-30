'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useFadeIn } from '@/hooks/use-fade-in'
import { useParallax } from '@/hooks/use-parallax'

export function BreakfastSection() {
  const { ref, visible } = useFadeIn()
  const photoRef = useParallax(0.2)

  return (
    <section className="relative bg-[#F0E9DE] py-16 sm:py-24 lg:py-40 overflow-hidden" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">

          {/* Left — content */}
          <div className="flex flex-col justify-center">
            <span
              className={`mb-5 font-sans text-[0.65rem] uppercase tracking-[0.2em] text-[#D4A853] transition-all duration-400 ease-out ${
                visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
            >
              MAROKKAANS ONTBIJT
            </span>
            <h2
              className={`mb-6 font-serif text-[clamp(2.8rem,4.5vw,4.5rem)] italic leading-[1.05] text-[#2C1F14] transition-all duration-400 ease-out ${
                visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
              style={{ transitionDelay: '80ms' }}
            >
              Marokkaans ontbijten in Dordrecht — elke dag vers
            </h2>
            <p
              className={`mb-8 font-sans text-base font-light leading-[1.9] text-[#6B4C35] transition-all duration-400 ease-out ${
                visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
              style={{ transitionDelay: '160ms' }}
            >
              Msemmen, verse groenten, olijven, gegrilde tomaten en kruidige eieren — een tafel vol Marokkaanse smaken. Halal ontbijten in Dordrecht bij Benny&apos;s Bakery. Di t/m Za vanaf 08:00, Zo vanaf 10:00.
            </p>

            {/* Details */}
            <div
              className={`mb-10 space-y-3 transition-all duration-400 ease-out ${
                visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
              style={{ transitionDelay: '220ms' }}
            >
              {[
                'Vers gebakken msemmen & brood',
                'Lokale groenten & Marokkaanse kruiden',
                'Specialty koffie & verse muntthee',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C4622D] flex-shrink-0" />
                  <span className="font-sans text-[0.9rem] text-[#2C1F14]/80">{item}</span>
                </div>
              ))}
            </div>

            <Link
              href="/reserveren"
              className={`group inline-flex w-fit items-center gap-2 rounded-sm bg-[#2C1F14] px-7 py-3.5 font-sans text-sm font-medium tracking-wide text-[#FAF7F2] transition-all hover:bg-[#3d2a1c] duration-400 ease-out ${
                visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              Reserveer een tafel <ArrowRight size={15} />
            </Link>
          </div>

          {/* Right — stacked photos */}
          <div
            className={`relative transition-all duration-500 ease-out ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            {/* Main large photo */}
            <div className="relative overflow-hidden rounded-lg h-[380px] sm:h-[500px]">
              <div
                ref={photoRef}
                className="absolute inset-x-0"
                style={{ top: '-25%', bottom: '-25%', willChange: 'transform' }}
              >
                <Image
                  src="/images/food/ontbijt-overhead-sq.jpg"
                  alt="Marokkaans ontbijt overhead"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>

            {/* Small overlay photo — bottom left */}
            <div className="absolute -bottom-6 -left-6 hidden sm:block w-[180px] h-[140px] overflow-hidden rounded-lg border-4 border-[#F0E9DE] shadow-xl">
              <Image
                src="/images/food/ontbijt-spread.jpg"
                fill
                alt="Marokkaans ontbijtspread"
                className="object-cover object-center"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

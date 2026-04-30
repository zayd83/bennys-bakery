'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { useFadeIn } from '@/hooks/use-fade-in'
import { useParallax } from '@/hooks/use-parallax'

const tabs = [
  {
    label: 'Espresso',
    src: '/images/drinks/koffie-latte.jpg',
    alt: "Espresso latte bij Benny's Barista",
    desc: 'Ons espresso-programma draait op een GAGGIA machine met zorgvuldig geselecteerde bonen. Elke shot getimed op de seconde.',
  },
  {
    label: 'Iced Coffee',
    src: '/images/drinks/koffie-iced.jpg',
    alt: 'Iced coffee met whipped cream',
    desc: 'Koud, romig en vol smaak. Onze iced coffees worden afgewerkt met verse slagroom en een karameldrizzle.',
  },
  {
    label: 'Signature',
    src: '/images/drinks/koffie-branded.jpg',
    alt: "Benny's signature koffie",
    desc: "De Benny's Signature — onze huisspecialiteit met caramel, een touch Monin en verse slagroom. Eén slok en je komt terug.",
  },
]

export function BaristaSection() {
  const { ref, visible } = useFadeIn()
  const photoRef = useParallax(0.25)
  const [active, setActive] = useState(0)

  return (
    <section className="relative bg-[#2C1F14] py-16 sm:py-24 lg:py-48 overflow-hidden" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[45%_55%] lg:gap-16 items-center">

          {/* Left — image (switches on tab change) */}
          <div
            className={`relative aspect-[3/4] w-full overflow-hidden rounded-lg transition-all duration-500 ease-out ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <div
              ref={photoRef}
              className="absolute inset-x-0"
              style={{ top: '-30%', bottom: '-30%', willChange: 'transform' }}
            >
              {tabs.map((tab, i) => (
                <div
                  key={tab.label}
                  className="absolute inset-0 transition-opacity duration-500"
                  style={{ opacity: active === i ? 1 : 0 }}
                >
                  <Image
                    src={tab.src}
                    alt={tab.alt}
                    fill
                    className="object-cover object-center"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right — content */}
          <div className="flex flex-col justify-center lg:pl-12">
            <span
              className={`mb-5 font-sans text-[0.65rem] uppercase tracking-[0.2em] text-[#D4A853] transition-all duration-500 ease-out ${
                visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}
            >
              SPECIALTY KOFFIE · DORDRECHT
            </span>
            <h2
              className={`mb-6 font-serif text-[clamp(2.8rem,4.5vw,4.5rem)] italic leading-[1.05] text-[#F0E9DE] transition-all duration-500 ease-out ${
                visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}
              style={{ transitionDelay: '80ms' }}
            >
              De beste koffie van Dordrecht, in elke druppel
            </h2>

            {/* Clickable tabs */}
            <div
              className={`mb-6 flex gap-2 transition-all duration-500 ease-out ${
                visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}
              style={{ transitionDelay: '160ms' }}
            >
              {tabs.map((tab, i) => (
                <button
                  key={tab.label}
                  onClick={() => setActive(i)}
                  className={`rounded-sm px-4 py-2 font-sans text-[0.78rem] tracking-wide transition-all duration-250 ${
                    active === i
                      ? 'bg-[#D4A853] text-[#2C1F14] font-medium'
                      : 'border border-[#F0E9DE]/20 text-[#F0E9DE]/60 hover:border-[#F0E9DE]/40 hover:text-[#F0E9DE]/90'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Dynamic description */}
            <div className="relative mb-10 min-h-[80px]">
              {tabs.map((tab, i) => (
                <p
                  key={tab.label}
                  className={`absolute inset-0 font-sans text-base font-light leading-[1.9] text-[#F0E9DE]/65 transition-all duration-400 ${
                    active === i ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
                  }`}
                >
                  {tab.desc}
                </p>
              ))}
            </div>

            <Link
              href="/menu"
              className={`inline-flex w-fit items-center gap-2 rounded-sm border border-[#F0E9DE]/30 px-6 py-3 font-sans text-sm text-[#F0E9DE] transition-all duration-500 ease-out hover:bg-[#F0E9DE]/8 ${
                visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              Bekijk dranken <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

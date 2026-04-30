'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useFadeIn } from '@/hooks/use-fade-in'

const highlights = [
  { src: '/images/sandwiches/sandwich-groente.jpg', label: 'Verse Sandwich', desc: 'Knapperig brood met gegrilde groenten' },
  { src: '/images/drinks/sinaasappelsap.jpg', label: 'Verse Sappen', desc: 'Geperst fruit, geen toevoegingen' },
  { src: '/images/food/ontbijt-tajine.jpg', label: 'Marokkaans Ontbijt', desc: 'Tajine, verse groenten & brood' },
]

export function HealthySection() {
  const { ref, visible } = useFadeIn()

  return (
    <section className="bg-[#F5F0E8] py-16 sm:py-24 lg:py-40" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div className="mb-14 sm:mb-20 text-center">
          <span
            className={`mb-4 inline-block font-sans text-[0.65rem] uppercase tracking-[0.2em] text-[#D4A853] transition-all duration-400 ease-out ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            VERSE LUNCH · DORDRECHT
          </span>
          <h2
            className={`font-serif text-[clamp(2.5rem,4vw,4rem)] italic leading-[1.1] text-[#2C1F14] transition-all duration-400 ease-out ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '80ms' }}
          >
            Vers, kleurrijk & vol smaak
          </h2>
          <p
            className={`mt-4 mx-auto max-w-lg font-sans text-[0.95rem] font-light leading-relaxed text-[#6B4C35] transition-all duration-400 ease-out ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '140ms' }}
          >
            Van verse sandwiches en Marokkaanse salades tot verse sappen en bowls — halal lunchen in Dordrecht doe je bij Benny&apos;s Bakery.
          </p>
        </div>

        {/* Three product cards */}
        <div className="grid gap-6 sm:grid-cols-3">
          {highlights.map((item, i) => (
            <div
              key={item.label}
              className={`group overflow-hidden rounded-lg transition-all duration-500 ease-out ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="relative h-[280px] sm:h-[340px] overflow-hidden">
                <Image
                  src={item.src}
                  fill
                  alt={item.label}
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="bg-white px-5 py-4">
                <p className="font-serif text-[1.05rem] italic text-[#2C1F14]">{item.label}</p>
                <p className="mt-1 font-sans text-[0.8rem] font-light text-[#6B4C35]">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`mt-12 text-center transition-all duration-400 ease-out ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: '350ms' }}
        >
          <Link
            href="/menu"
            className="group inline-flex items-center gap-2 font-sans text-[0.9rem] text-[#C4622D] hover:underline underline-offset-4"
          >
            Bekijk het volledige menu
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </section>
  )
}

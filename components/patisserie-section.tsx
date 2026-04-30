'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useFadeIn } from '@/hooks/use-fade-in'

const items = [
  {
    src: '/images/food/chebakia-solo.jpg',
    name: 'Bastilla',
    desc: 'Marokkaanse bladerdeegpastei met poedersuiker & kaneel',
    position: 'object-center',
  },
  {
    src: '/images/desserts/citroen.jpg',
    name: 'Citroenmousse',
    desc: 'Romige mousse in een frisse citroenschil',
    position: 'object-center',
  },
  {
    src: '/images/desserts/mangomousse.jpg',
    name: 'Mangomousse',
    desc: 'Tropische mousse met verse mangosmaak',
    position: 'object-center',
  },
  {
    src: '/images/desserts/mango.jpg',
    name: 'Pistache Mousse',
    desc: 'Fluweelzachte mousse met Siciliaanse pistache',
    position: 'object-center',
  },
]

export function PatisserieSection() {
  const { ref, visible } = useFadeIn()

  return (
    <section className="bg-[#2C1F14] py-16 sm:py-24 lg:py-40 overflow-hidden" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div className="mb-16 sm:mb-24 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div>
            <span
              className={`mb-4 inline-block font-sans text-[0.65rem] uppercase tracking-[0.22em] text-[#D4A853] transition-all duration-500 ease-out ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              HALAL PATISSERIE · DORDRECHT
            </span>
            <h2
              className={`font-serif text-[clamp(2.8rem,4.5vw,4.5rem)] italic leading-[1.05] text-[#F0E9DE] transition-all duration-500 ease-out ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '80ms' }}
            >
              Marokkaanse patisserie,<br />elke dag vers in Dordrecht
            </h2>
          </div>
          <Link
            href="/menu"
            className={`group inline-flex shrink-0 items-center gap-2 font-sans text-sm text-[#F0E9DE]/60 hover:text-[#D4A853] transition-all duration-300 ${
              visible ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            Bekijk alles <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Staggered grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 items-end">
          {items.map((item, i) => {
            /* Alternate heights for stagger effect */
            const heights = [
              'h-[340px] sm:h-[420px] lg:h-[520px]',
              'h-[260px] sm:h-[340px] lg:h-[380px]',
              'h-[300px] sm:h-[380px] lg:h-[480px]',
              'h-[260px] sm:h-[320px] lg:h-[400px]',
            ]
            /* Alternate animation direction */
            const fromClass = i % 2 === 0 ? '-translate-y-6' : 'translate-y-6'

            return (
              <div
                key={item.name}
                className={`group relative overflow-hidden rounded-lg transition-all duration-600 ease-out ${heights[i]} ${
                  visible ? 'opacity-100 translate-y-0' : `opacity-0 ${fromClass}`
                }`}
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <Image
                  src={item.src}
                  fill
                  alt={item.name}
                  className={`object-cover ${item.position} transition-transform duration-700 group-hover:scale-105`}
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                {/* Label */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="font-serif text-[1rem] italic text-white leading-tight">
                    {item.name}
                  </p>
                  <p className="mt-1 font-sans text-[0.72rem] text-white/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 leading-snug">
                    {item.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

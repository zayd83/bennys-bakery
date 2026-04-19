'use client'

import { useFadeIn } from '@/hooks/use-fade-in'

export function Marquee() {
  const { ref, visible } = useFadeIn()
  const text = 'VERS GEBAKKEN · DORDRECHT · DI T/M ZA 08–18 ✦ ZO 10–18 · ONTBIJT · LUNCH · DINER · PATISSERIE ✦ '

  return (
    <section className="overflow-hidden bg-terracotta py-4">
      <div
        ref={ref}
        className={`transition-all duration-700 ease-out ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'
        }`}
      >
        <div className="animate-marquee flex whitespace-nowrap">
          {[...Array(8)].map((_, i) => (
            <span
              key={i}
              className="mx-4 font-sans text-[0.8rem] uppercase tracking-[0.1em] text-white"
            >
              {text}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

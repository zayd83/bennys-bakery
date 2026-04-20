'use client'

import { useEffect, useRef, useState } from 'react'

const milestones = [
  {
    year: '1985',
    title: "Beni Mellal — de wortels",
    subtitle: 'Waar het allemaal begon',
    text: "In de bergen van Beni Mellal, Marokko, leerde Benny de kunst van het bakken van zijn moeder. Elke ochtend vulde de geur van vers gebakken msemmen en khobz het huis. Het waren deze herinneringen die later de fundering zouden vormen van alles wat Benny's Bakery is geworden.",
    bg: 'dark',
    imagePlaceholder: '[ Beni Mellal ]',
  },
  {
    year: '2005',
    title: 'Aankomst in Nederland',
    subtitle: 'Een nieuw begin',
    text: "Met zijn familie verhuisde Benny naar Nederland, zijn hoofd vol dromen en zijn hart vol recepten van thuis. Hij werkte jaren in verschillende keukens, maar de droom van een eigen plek — een plek die voelde als thuis — bleef hem bij.",
    bg: 'cream',
    imagePlaceholder: '[ Aankomst NL ]',
  },
  {
    year: '2018',
    title: 'De eerste winkel',
    subtitle: 'Een droom wordt werkelijkheid',
    text: "Op het Van Oldenbarneveltplein in Dordrecht opende Benny's Bakery haar deuren. Klein van formaat, groot van hart. Met authentieke Marokkaanse gerechten — van msemmen tot ghorzza — en een warme sfeer die iedereen deed denken aan een gezellig thuis.",
    bg: 'dark',
    imagePlaceholder: '[ Opening 2018 ]',
  },
  {
    year: '2021',
    title: 'Groei en erkenning',
    subtitle: 'Dordrecht ontdekt Benny',
    text: "Mond-tot-mondreclame deed zijn werk. Rijen voor de deur op zaterdagochtend. Zakelijke klanten die Benny inhuurden voor bedrijfslunches. Het menu groeide — açaí bowls naast msemmen, moderne patisserie naast klassieke Marokkaanse smaken.",
    bg: 'cream',
    imagePlaceholder: '[ Drukte 2021 ]',
  },
  {
    year: '2025',
    title: 'Vers, lokaal, ambachtelijk',
    subtitle: 'Het verhaal gaat door',
    text: "Vandaag is Benny's Bakery meer dan een bakkerij. Het is een ontmoetingsplek, een stukje Marokko in het hart van Dordrecht. Elke dag opnieuw worden de beste ingrediënten met zorg bereid — precies zoals Benny's moeder het hem leerde in de heuvels van Beni Mellal.",
    bg: 'dark',
    imagePlaceholder: '[ Vandaag 2025 ]',
  },
]

export function Timeline() {
  const [activeIndex, setActiveIndex] = useState(-1)
  const dotRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers = dotRefs.current.map((dot, i) => {
      if (!dot) return null
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveIndex(prev => Math.max(prev, i))
          }
        },
        { threshold: 0.5, rootMargin: '0px 0px -30% 0px' }
      )
      obs.observe(dot)
      return obs
    })
    return () => observers.forEach(obs => obs?.disconnect())
  }, [])

  return (
    <section className="relative">
      {/* Vertical center line */}
      <div
        className="absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 lg:block"
        style={{ background: 'rgba(212,168,83,0.2)' }}
      />

      {milestones.map((m, i) => (
        <div
          key={i}
          className={`py-32 ${m.bg === 'dark' ? 'bg-dark' : 'bg-cream'}`}
        >
          <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-8 lg:grid-cols-2">
            {/* Dot on center line */}
            <div
              ref={el => { dotRefs.current[i] = el }}
              className={`absolute left-1/2 top-1/2 z-10 hidden h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 transition-all duration-500 lg:block ${
                i <= activeIndex
                  ? 'scale-125 border-gold bg-gold'
                  : 'border-[rgba(212,168,83,0.4)] bg-transparent'
              }`}
            />

            {/* Image placeholder (alternating sides) */}
            <div className={i % 2 === 0 ? 'order-1' : 'order-2'}>
              <div
                className="flex w-full items-center justify-center rounded-lg border border-[rgba(212,168,83,0.15)]"
                style={{
                  aspectRatio: '4 / 3',
                  background: m.bg === 'dark' ? '#2A1F14' : '#E8E0D4',
                }}
              >
                <span className="font-sans text-sm opacity-40" style={{ color: '#D4A853' }}>
                  {m.imagePlaceholder}
                </span>
              </div>
            </div>

            {/* Text content (alternating sides) */}
            <div className={i % 2 === 0 ? 'order-2 lg:pl-12' : 'order-1 lg:pr-12'}>
              <span className="mb-4 block font-sans text-[0.65rem] uppercase tracking-[0.2em] text-gold">
                {m.subtitle}
              </span>
              <h2
                className="mb-4 font-serif text-5xl italic leading-[1.1] lg:text-6xl"
                style={{ color: m.bg === 'dark' ? '#EDE8DE' : '#1C1410' }}
              >
                {m.year}
              </h2>
              <h3
                className="mb-6 font-serif text-2xl font-normal"
                style={{ color: m.bg === 'dark' ? '#EDE8DE' : '#1C1410' }}
              >
                {m.title}
              </h3>
              <p
                className="max-w-md font-sans text-base font-light leading-[1.9]"
                style={{
                  color: m.bg === 'dark'
                    ? 'rgba(237,232,222,0.7)'
                    : 'rgba(28,20,16,0.7)',
                }}
              >
                {m.text}
              </p>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}

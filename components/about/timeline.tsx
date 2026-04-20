'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { TimelineProgress } from './timeline-progress'

const milestones = [
  {
    year: '1985',
    title: "Beni Mellal — de wortels",
    subtitle: 'Waar het allemaal begon',
    text: "In de bergen van Beni Mellal, Marokko, leerde Benny de kunst van het bakken van zijn moeder. Elke ochtend vulde de geur van vers gebakken msemmen en khobz het huis. Het waren deze herinneringen die later de fundering zouden vormen van alles wat Benny's Bakery is geworden.",
    bg: 'dark',
    imageUrl: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=800&q=80',
    imageAlt: 'Marokkaanse bergen en dorpsleven',
  },
  {
    year: '2005',
    title: 'Aankomst in Nederland',
    subtitle: 'Een nieuw begin',
    text: "Met zijn familie verhuisde Benny naar Nederland, zijn hoofd vol dromen en zijn hart vol recepten van thuis. Hij werkte jaren in verschillende keukens, maar de droom van een eigen plek — een plek die voelde als thuis — bleef hem bij.",
    bg: 'cream',
    imageUrl: 'https://images.unsplash.com/photo-1468078809804-4c7b3e60a478?w=800&q=80',
    imageAlt: 'Aankomst in een nieuwe stad',
  },
  {
    year: '2018',
    title: 'De eerste winkel',
    subtitle: 'Een droom wordt werkelijkheid',
    text: "Op het Van Oldenbarneveltplein in Dordrecht opende Benny's Bakery haar deuren. Klein van formaat, groot van hart. Met authentieke Marokkaanse gerechten — van msemmen tot ghorzza — en een warme sfeer die iedereen deed denken aan een gezellig thuis.",
    bg: 'dark',
    imageUrl: 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=800&q=80',
    imageAlt: 'Opening van de bakkerij',
  },
  {
    year: '2021',
    title: 'Groei en erkenning',
    subtitle: 'Dordrecht ontdekt Benny',
    text: "Mond-tot-mondreclame deed zijn werk. Rijen voor de deur op zaterdagochtend. Zakelijke klanten die Benny inhuurden voor bedrijfslunches. Het menu groeide — açaí bowls naast msemmen, moderne patisserie naast klassieke Marokkaanse smaken.",
    bg: 'cream',
    imageUrl: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=800&q=80',
    imageAlt: 'Drukke bakkerij en tevreden klanten',
  },
  {
    year: '2025',
    title: 'Vers, lokaal, ambachtelijk',
    subtitle: 'Het verhaal gaat door',
    text: "Vandaag is Benny's Bakery meer dan een bakkerij. Het is een ontmoetingsplek, een stukje Marokko in het hart van Dordrecht. Elke dag opnieuw worden de beste ingrediënten met zorg bereid — precies zoals Benny's moeder het hem leerde in de heuvels van Beni Mellal.",
    bg: 'dark',
    imageUrl: 'https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=800&q=80',
    imageAlt: 'Moderne bakkerij toonbank',
  },
]

function AnimatedYear({ year, color }: { year: string; color: string }) {
  const [display, setDisplay] = useState('0000')
  const ref = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const target = parseInt(year)
          const start = target - 50
          let current = start
          setDisplay(current.toString())
          const interval = setInterval(() => {
            current += 2
            if (current >= target) {
              setDisplay(year)
              clearInterval(interval)
            } else {
              setDisplay(current.toString())
            }
          }, 30)
          obs.disconnect()
        }
      },
      { threshold: 0.5 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [year])

  return (
    <h2
      ref={ref}
      className="mb-4 font-serif text-5xl italic leading-[1.1] lg:text-6xl"
      style={{ color }}
    >
      {display}
    </h2>
  )
}

export function Timeline() {
  const [activeIndex, setActiveIndex] = useState(-1)
  const [visibleRows, setVisibleRows] = useState<boolean[]>(
    Array(milestones.length).fill(false)
  )
  const dotRefs = useRef<(HTMLDivElement | null)[]>([])
  const rowRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const dotObservers = dotRefs.current.map((dot, i) => {
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

    const rowObservers = rowRefs.current.map((row, i) => {
      if (!row) return null
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleRows(prev => {
              if (prev[i]) return prev
              const next = [...prev]
              next[i] = true
              return next
            })
            obs.disconnect()
          }
        },
        { threshold: 0.1 }
      )
      obs.observe(row)
      return obs
    })

    return () => {
      dotObservers.forEach(obs => obs?.disconnect())
      rowObservers.forEach(obs => obs?.disconnect())
    }
  }, [])

  return (
    <section id="timeline-section" className="relative">
      <TimelineProgress />

      {milestones.map((m, i) => (
        <div key={i} className={`py-32 ${m.bg === 'dark' ? 'bg-[#2D4A3E]' : 'bg-[#F0E9DE]'}`}>
          <div
            ref={el => { rowRefs.current[i] = el }}
            className="relative mx-auto grid max-w-6xl items-center gap-16 px-8 lg:grid-cols-2"
          >
            {/* Dot on center line */}
            <div
              ref={el => { dotRefs.current[i] = el }}
              className={`absolute left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 rounded-full border-2 transition-all duration-500 lg:block ${
                i <= activeIndex
                  ? 'dot-active h-4 w-4 border-gold bg-gold shadow-[0_0_0_6px_rgba(212,168,83,0.15)]'
                  : 'h-3 w-3 border-[#D4C4B0] bg-transparent'
              }`}
            />

            {/* Image (alternating sides) */}
            <div
              className={`milestone ${i % 2 === 0 ? 'from-left order-1' : 'from-right order-2'} ${
                visibleRows[i] ? 'visible' : ''
              }`}
            >
              <div className="relative w-full overflow-hidden rounded-lg" style={{ aspectRatio: '4 / 3' }}>
                <Image
                  src={m.imageUrl}
                  fill
                  className="object-cover"
                  alt={m.imageAlt}
                  unoptimized
                />
              </div>
            </div>

            {/* Text (alternating sides) */}
            <div
              className={`milestone ${i % 2 === 0 ? 'from-right order-2 lg:pl-12' : 'from-left order-1 lg:pr-12'} ${
                visibleRows[i] ? 'visible' : ''
              }`}
            >
              <span className="mb-4 block font-sans text-[0.65rem] uppercase tracking-[0.2em] text-gold">
                {m.subtitle}
              </span>
              <AnimatedYear
                year={m.year}
                color={m.bg === 'dark' ? '#FAF7F2' : '#2C1F14'}
              />
              <h3
                className="mb-6 font-serif text-2xl font-normal"
                style={{ color: m.bg === 'dark' ? '#FAF7F2' : '#2C1F14' }}
              >
                {m.title}
              </h3>
              <p
                className="max-w-md font-sans text-base font-light leading-[1.9]"
                style={{
                  color: m.bg === 'dark'
                    ? 'rgba(250,247,242,0.8)'
                    : 'rgba(44,31,20,0.7)',
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

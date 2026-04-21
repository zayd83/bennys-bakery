'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Timeline } from '@/components/about/timeline'
import { useFadeIn } from '@/hooks/use-fade-in'

const highlights = [
  {
    icon: '◆',
    title: 'Marokkaanse Roots',
    description: 'Authentieke recepten uit Beni Mellal, met generaties aan smaak en traditie.',
  },
  {
    icon: '✦',
    title: 'Vers & Ambachtelijk',
    description: 'Elke dag vers bereid, van het eerste licht tot de laatste bestelling.',
  },
  {
    icon: '◇',
    title: 'Lokaal Verankerd',
    description: 'Trots onderdeel van Dordrecht — een plek voor iedereen.',
  },
  {
    icon: '✧',
    title: 'Catering op Maat',
    description: 'Van bedrijfslunch tot henna-avond — wij brengen de smaken naar jou toe.',
  },
]

const teamMembers = [
  {
    name: 'Benny',
    role: 'Oprichter & Bakker',
    imageUrl: 'https://images.unsplash.com/photo-1583394293214-0a562ed5e571?w=400&q=80',
  },
  {
    name: 'Het Team',
    role: 'Keuken & Service',
    imageUrl: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400&q=80',
  },
  {
    name: 'Catering',
    role: 'Events & Bezorging',
    imageUrl: 'https://images.unsplash.com/photo-1607631568010-a87245c0daf8?w=400&q=80',
  },
]

export default function OverOnsPage() {
  const { ref: heroRef, visible: heroVisible } = useFadeIn(0.05)
  const { ref: highlightsRef, visible: highlightsVisible } = useFadeIn(0.1)
  const { ref: teamRef, visible: teamVisible } = useFadeIn(0.1)
  const { ref: ctaRef, visible: ctaVisible } = useFadeIn(0.1)

  // Scroll progress bar
  useEffect(() => {
    const bar = document.getElementById('progress-bar')
    if (!bar) return
    if (CSS.supports('animation-timeline', 'scroll()')) return
    const onScroll = () => {
      const scrolled = window.scrollY
      const total = document.body.scrollHeight - window.innerHeight
      const progress = total > 0 ? scrolled / total : 0
      bar.style.transform = `scaleX(${progress})`
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <main className="overflow-hidden">
      {/* Fixed scroll progress bar */}
      <div
        id="progress-bar"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '3px',
          background: '#C4622D',
          zIndex: 9999,
          transformOrigin: 'left',
          transform: 'scaleX(0)',
          animation: 'scaleProgress linear',
          animationTimeline: 'scroll(root)',
        } as React.CSSProperties}
      />

      <Navigation />

      {/* ── Section 1: Hero ── */}
      <section className="bg-[#F0E9DE] px-6 pb-20 pt-40 text-center">
        <div
          ref={heroRef as React.RefObject<HTMLDivElement>}
          className={`mx-auto flex max-w-3xl flex-col items-center transition-all duration-1000 ease-out ${
            heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="mb-6 font-sans text-[0.65rem] uppercase tracking-[0.2em] text-[#C4622D]">
            ONS VERHAAL
          </span>
          <h1 className="max-w-3xl font-serif text-[clamp(3rem,6vw,5.5rem)] italic leading-[1.05] text-[#2C1F14]">
            Een erfenis van ambacht en trots
          </h1>
          <p className="mt-6 max-w-[560px] font-sans text-base font-light leading-relaxed text-[#6B4C35]">
            Een reis van passie, Marokkaanse roots en ambachtelijk vakmanschap — van Beni Mellal
            naar de straten van Dordrecht.
          </p>
          <div className="mx-auto mt-8 h-px w-[60px] bg-[#C4622D]" />

          {/* Large showcase image */}
          <div
            className="relative mt-12 overflow-hidden rounded-lg"
            style={{ width: 'min(75vw, 900px)', height: '500px' }}
          >
            <Image
              src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1200&q=80"
              fill
              className="object-cover"
              alt="Benny's Bakery interieur"
              unoptimized
              priority
            />
          </div>
        </div>
      </section>

      {/* ── Section 2: Timeline ── */}
      <Timeline />

      {/* ── Section 3: Highlights ── */}
      <section
        className="bg-[#2D4A3E] py-32"
        ref={highlightsRef as React.RefObject<HTMLDivElement>}
      >
        <div className="mx-auto max-w-6xl px-8">
          <h2
            className={`mb-16 text-center font-serif text-[3rem] italic text-[#FAF7F2] transition-all duration-700 ease-out ${
              highlightsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Wat Benny&apos;s bijzonder maakt
          </h2>
          <div className="grid grid-cols-2 gap-10 lg:grid-cols-4">
            {highlights.map((h, i) => (
              <div
                key={i}
                className="transition-all duration-700 ease-out"
                style={{
                  transitionDelay: `${i * 150}ms`,
                  opacity: highlightsVisible ? 1 : 0,
                  transform: highlightsVisible ? 'translateY(0)' : 'translateY(30px)',
                }}
              >
                <span className="mb-4 block font-serif text-4xl text-[#D4A853]">{h.icon}</span>
                <h3 className="mb-3 font-serif text-[1.4rem] text-[#FAF7F2]">{h.title}</h3>
                <p className="font-sans text-[0.9rem] font-light leading-relaxed text-[rgba(250,247,242,0.7)]">
                  {h.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 4: Team ── */}
      <section
        className="bg-[#E8DDD0] py-32"
        ref={teamRef as React.RefObject<HTMLDivElement>}
      >
        <div className="mx-auto max-w-6xl px-8 text-center">
          <span
            className={`mb-4 inline-block font-sans text-[0.65rem] uppercase tracking-[0.2em] text-[#C4622D] transition-all duration-700 ease-out ${
              teamVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            HET TEAM
          </span>
          <h2
            className={`mb-16 font-serif text-[3rem] italic text-[#2C1F14] transition-all duration-700 ease-out ${
              teamVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            De handen achter elk gerecht
          </h2>
          <div className="grid gap-10 md:grid-cols-3">
            {teamMembers.map((member, i) => (
              <div
                key={i}
                className="flex flex-col items-center transition-all duration-700 ease-out"
                style={{
                  transitionDelay: `${i * 150}ms`,
                  opacity: teamVisible ? 1 : 0,
                  transform: teamVisible ? 'translateY(0)' : 'translateY(24px)',
                }}
              >
                <div
                  className="relative mb-6 w-full max-w-[280px] overflow-hidden rounded-lg"
                  style={{ aspectRatio: '1 / 1' }}
                >
                  <Image
                    src={member.imageUrl}
                    fill
                    className="object-cover object-top"
                    alt={member.name}
                    unoptimized
                  />
                </div>
                <h3 className="font-serif text-[1.2rem] text-[#2C1F14]">{member.name}</h3>
                <span className="mt-1 font-sans text-[0.75rem] uppercase tracking-[0.15em] text-[#C4622D]">
                  {member.role}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 5: CTA ── */}
      <section
        className="relative flex min-h-[600px] items-center justify-center overflow-hidden"
        ref={ctaRef as React.RefObject<HTMLDivElement>}
      >
        <Image
          src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=1600&q=80"
          fill
          className="object-cover"
          alt="Bakkerij sfeer"
          unoptimized
        />
        <div className="absolute inset-0 bg-dark/75" />
        <div
          className={`relative z-10 flex flex-col items-center px-6 py-24 text-center transition-all duration-700 ease-out ${
            ctaVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <span className="mb-4 font-sans text-[0.65rem] uppercase tracking-[0.2em] text-gold">
            KOM LANGS
          </span>
          <h2 className="mb-6 max-w-xl font-serif text-[clamp(2.5rem,5vw,3.5rem)] italic leading-[1.05] text-cream">
            Proef het verhaal zelf
          </h2>
          <p className="mb-8 max-w-md font-sans text-base font-light text-cream/75">
            Kom langs op het Van Oldenbarneveltplein in Dordrecht en ontdek wat wij voor je
            kunnen betekenen.
          </p>
          <Link
            href="/reserveren"
            className="rounded-sm bg-terracotta px-8 py-4 font-sans text-white transition-all hover:brightness-110"
          >
            Reserveren
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}

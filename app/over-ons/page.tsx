'use client'

import Link from 'next/link'
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
  { name: 'Benny', role: 'Oprichter & Bakker' },
  { name: 'Het Team', role: 'Keuken & Service' },
  { name: 'Catering', role: 'Events & Bezorging' },
]

export default function OverOnsPage() {
  const { ref: heroRef, visible: heroVisible } = useFadeIn(0.05)
  const { ref: highlightsRef, visible: highlightsVisible } = useFadeIn(0.1)
  const { ref: teamRef, visible: teamVisible } = useFadeIn(0.1)
  const { ref: ctaRef, visible: ctaVisible } = useFadeIn(0.1)

  return (
    <main className="overflow-hidden">
      <Navigation />

      {/* ── Section 1: Hero ── */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#1a1208] px-6 pb-24 pt-40 text-center">
        <div
          ref={heroRef as React.RefObject<HTMLDivElement>}
          className={`flex flex-col items-center transition-all duration-1000 ease-out ${
            heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="mb-6 font-sans text-[0.65rem] uppercase tracking-[0.2em] text-gold">
            ONS VERHAAL
          </span>
          <h1 className="max-w-3xl font-serif text-[clamp(3rem,6vw,5.5rem)] italic leading-[1.05] text-text-light">
            Een erfenis van ambacht en trots
          </h1>
          <p className="mt-6 max-w-[560px] font-sans text-base font-light leading-relaxed text-text-light/65">
            Een reis van passie, Marokkaanse roots en ambachtelijk vakmanschap — van Beni Mellal
            naar de straten van Dordrecht.
          </p>
          <div className="mx-auto mt-8 h-px w-[60px] bg-gold" />

          {/* Large image placeholder */}
          <div
            className="mt-12 flex items-center justify-center rounded-lg border border-[rgba(212,168,83,0.15)]"
            style={{
              width: 'min(75vw, 900px)',
              height: '500px',
              background: '#2A1F14',
            }}
          >
            <span className="font-sans text-sm text-gold opacity-30">
              [ Foto Benny&apos;s Bakery ]
            </span>
          </div>
        </div>
      </section>

      {/* ── Section 2: Timeline ── */}
      <Timeline />

      {/* ── Section 3: Highlights ── */}
      <section
        className="bg-cream py-32"
        ref={highlightsRef as React.RefObject<HTMLDivElement>}
      >
        <div className="mx-auto max-w-6xl px-8">
          <h2
            className={`mb-16 text-center font-serif text-[3rem] italic text-text-dark transition-all duration-700 ease-out ${
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
                  transitionDelay: `${i * 100}ms`,
                  opacity: highlightsVisible ? 1 : 0,
                  transform: highlightsVisible ? 'translateY(0)' : 'translateY(24px)',
                }}
              >
                <span className="mb-4 block font-serif text-4xl text-gold">{h.icon}</span>
                <h3 className="mb-3 font-serif text-[1.4rem] text-text-dark">{h.title}</h3>
                <p className="font-sans text-[0.9rem] font-light leading-relaxed text-text-dark/60">
                  {h.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 4: Team ── */}
      <section
        className="bg-dark py-32"
        ref={teamRef as React.RefObject<HTMLDivElement>}
      >
        <div className="mx-auto max-w-6xl px-8 text-center">
          <span
            className={`mb-4 inline-block font-sans text-[0.65rem] uppercase tracking-[0.2em] text-gold transition-all duration-700 ease-out ${
              teamVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            HET TEAM
          </span>
          <h2
            className={`mb-16 font-serif text-[3rem] italic text-text-light transition-all duration-700 ease-out ${
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
                  className="mb-6 flex w-full max-w-[280px] items-center justify-center rounded-lg bg-warm-mid"
                  style={{ aspectRatio: '1 / 1' }}
                >
                  <span className="font-sans text-sm text-gold opacity-40">[ Foto ]</span>
                </div>
                <h3 className="font-serif text-[1.2rem] text-text-light">{member.name}</h3>
                <span className="mt-1 font-sans text-[0.75rem] uppercase tracking-[0.15em] text-gold">
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
        <div className="absolute inset-0 bg-warm-mid" />
        <div className="absolute inset-0 bg-dark/50" />
        <div
          className={`relative flex flex-col items-center px-6 py-24 text-center transition-all duration-700 ease-out ${
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
            href="/#reserveren"
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

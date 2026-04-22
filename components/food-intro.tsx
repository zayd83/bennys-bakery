'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useInView } from '@/hooks/use-in-view'
export function FoodIntro() {
  const { ref, isInView } = useInView()

  return (
    <section id="menu" className="relative z-[1] overflow-hidden bg-cream py-16 sm:py-24 lg:py-56" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 grid-cols-1 lg:grid-cols-2 lg:gap-20">
          <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-8">

            {/* Left photo */}
            <div className="relative w-full sm:w-[48%]">
              <div className="relative overflow-hidden rounded-sm h-[280px] sm:h-[480px]">
                <Image src="/food-dish-3.jpg" fill
                  className="object-cover" alt="Benny's" />
              </div>
            </div>

            {/* Right photo — starts lower on desktop */}
            <div className="relative w-full sm:w-[48%] mt-0 sm:mt-20">
              <div className="relative overflow-hidden rounded-sm h-[280px] sm:h-[480px]">
                <Image src="/bakery-sfeer-1.jpg" fill
                  className="object-cover" alt="Benny's sfeer" />
              </div>
            </div>

          </div>

          {/* Right - Content */}
          <div className="flex flex-col justify-center lg:pl-16">
            <span
              className={`mb-5 font-sans text-[0.65rem] uppercase tracking-[0.2em] text-gold ${
                isInView ? 'animate-fade-in-up' : 'opacity-0'
              }`}
            >
              BENNY&apos;s BAKERY
            </span>
            <h2
              className={`mb-8 font-serif text-[clamp(2.5rem,4vw,4rem)] italic leading-[1.1] text-text-dark ${
                isInView ? 'animate-fade-in-up animation-delay-200' : 'opacity-0'
              }`}
            >
              Marokkaanse klassiekers, vers bereid
            </h2>
            <p
              className={`mb-10 font-sans text-base font-light leading-[1.9] text-text-dark/70 ${
                isInView ? 'animate-fade-in-up animation-delay-150' : 'opacity-0'
              }`}
            >
              Al-Maclaa: waar culinaire revolutie en Marokkaanse klassiekers bij
              elkaar komen. Bij Benny&apos;s Bakery draait alles om vers, lokaal en
              ambachtelijk — van een traditioneel ontbijt tot patisserie op
              bestelling.
            </p>
            <Link
              href="#menu"
              className={`group flex items-center gap-2 font-sans text-terracotta transition-all hover:underline ${
                isInView ? 'animate-fade-in-up animation-delay-400' : 'opacity-0'
              }`}
            >
              Bekijk het menu
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

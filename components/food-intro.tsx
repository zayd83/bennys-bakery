'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useInView } from '@/hooks/use-in-view'

export function FoodIntro() {
  const { ref, isInView } = useInView()

  return (
    <section id="menu" className="bg-cream py-32 lg:py-40" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left - Images */}
          <div
            className={`grid grid-cols-2 gap-4 lg:gap-6 ${
              isInView ? 'animate-fade-in-up' : 'opacity-0'
            }`}
          >
            <div className="relative aspect-[3/4] w-full">
              <Image
                src="/food-dish-3.jpg"
                alt="Vers gebakken brood"
                fill
                className="rounded-lg object-cover"
              />
            </div>
            <div className="relative mt-10 aspect-[3/4] w-full">
              <Image
                src="/bakery-sfeer-2.jpg"
                alt="Marokkaanse ontbijt"
                fill
                className="rounded-lg object-cover"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div className="flex flex-col justify-center">
            <span
              className={`mb-5 font-sans text-[0.65rem] uppercase tracking-[0.2em] text-gold ${
                isInView ? 'animate-fade-in-up animation-delay-100' : 'opacity-0'
              }`}
            >
              BENNY&apos;S BAKERY
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
                isInView ? 'animate-fade-in-up animation-delay-300' : 'opacity-0'
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

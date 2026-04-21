'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useInView } from '@/hooks/use-in-view'
import { useParallaxContainer } from '@/hooks/use-scroll-animation'

export function FoodIntro() {
  const { ref, isInView } = useInView()
  const leftPhotoRef = useParallaxContainer(0.12, 'up')
  const rightPhotoRef = useParallaxContainer(0.06, 'up')

  return (
    <section id="menu" className="relative z-[1] overflow-hidden bg-cream py-32 lg:py-40" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left - Images with differential parallax */}
          <div className="relative flex items-start gap-4 px-6 lg:px-0">
            {/* Left photo — starts higher, moves faster */}
            <div
              ref={leftPhotoRef}
              className="relative w-[55%] mt-0"
              style={{ willChange: 'transform' }}
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                <Image
                  src="/food-dish-3.jpg"
                  fill
                  className="object-cover"
                  alt="Marokkaans ontbijt"
                />
              </div>
            </div>

            {/* Right photo — starts lower, moves slower */}
            <div
              ref={rightPhotoRef}
              className="relative w-[45%] mt-16"
              style={{ willChange: 'transform' }}
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                <Image
                  src="/bakery-sfeer-1.jpg"
                  fill
                  className="object-cover"
                  alt="Benny's Bakery sfeer"
                />
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="flex flex-col justify-center">
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

'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useInView } from '@/hooks/use-in-view'

export function WeekFeature() {
  const { ref, isInView } = useInView()

  return (
    <section id="aanraders" className="bg-deep-green py-32 lg:py-48" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[55%_45%] lg:gap-20">
          {/* Left - Content */}
          <div className="flex flex-col justify-center lg:order-1">
            <span
              className={`mb-5 font-sans text-[0.65rem] uppercase tracking-[0.2em] text-gold ${
                isInView ? 'animate-fade-in-up' : 'opacity-0'
              }`}
            >
              WEKELIJKSE AANRADER
            </span>
            <h2
              className={`mb-8 font-serif text-[clamp(3rem,5vw,5rem)] italic leading-[1.05] text-cream ${
                isInView ? 'animate-fade-in-up animation-delay-100' : 'opacity-0'
              }`}
            >
              Msemmen met kip — een klassieker met een twist
            </h2>
            <p
              className={`mb-10 font-sans text-base font-light leading-[1.9] text-cream/80 ${
                isInView ? 'animate-fade-in-up animation-delay-200' : 'opacity-0'
              }`}
            >
              Luchtige msemmen gevuld met mals gekruide kip, frisse salade en een
              romige saus. Een gerecht dat generaties verbindt — van de warme
              plaat direct naar jouw bord. Elke week een nieuwe aanrader.
            </p>
            <Link
              href="#menu"
              className={`inline-flex w-fit items-center rounded-sm border border-cream px-6 py-3 font-sans text-cream transition-all hover:bg-cream/10 ${
                isInView ? 'animate-fade-in-up animation-delay-300' : 'opacity-0'
              }`}
            >
              Bekijk het menu
            </Link>
          </div>

          {/* Right - Image */}
          <div
            className={`relative aspect-[3/4] w-full lg:order-2 ${
              isInView ? 'animate-fade-in-up animation-delay-200' : 'opacity-0'
            }`}
          >
            <Image
              src="/food-dish-5.jpg"
              alt="Msemmen met kip"
              fill
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

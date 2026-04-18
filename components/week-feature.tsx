'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useInView } from '@/hooks/use-in-view'

export function WeekFeature() {
  const { ref, isInView } = useInView()

  return (
    <section id="aanraders" className="bg-deep-green py-20 lg:py-28" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[55%_45%] lg:gap-16">
          {/* Left - Content */}
          <div className="flex flex-col justify-center lg:order-1">
            <span
              className={`mb-4 font-sans text-[0.65rem] uppercase tracking-[0.2em] text-gold ${
                isInView ? 'animate-fade-in-up' : 'opacity-0'
              }`}
            >
              WEKELIJKSE AANRADER
            </span>
            <h2
              className={`mb-6 font-serif text-[clamp(2rem,4vw,3.5rem)] italic leading-[1.1] text-cream ${
                isInView ? 'animate-fade-in-up animation-delay-100' : 'opacity-0'
              }`}
            >
              Msemmen met kip — een klassieker met een twist
            </h2>
            <p
              className={`mb-8 font-sans text-base font-light leading-[1.9] text-cream/80 ${
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
            className={`relative h-[350px] lg:order-2 lg:h-[450px] ${
              isInView ? 'animate-fade-in-up animation-delay-200' : 'opacity-0'
            }`}
          >
            <Image
              src="https://picsum.photos/seed/msemmen/800/600"
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

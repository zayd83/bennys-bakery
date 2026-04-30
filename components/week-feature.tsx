'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useFadeIn } from '@/hooks/use-fade-in'
import { useParallax } from '@/hooks/use-parallax'

export function WeekFeature() {
  const { ref, visible } = useFadeIn()
  const photoRef = useParallax(0.3)

  return (
    <section id="aanraders" className="relative bg-deep-green py-16 sm:py-24 lg:py-48" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[55%_45%] lg:gap-20">
          {/* Left - Content */}
          <div className="flex flex-col justify-center lg:order-1">
            <span
              className={`mb-5 font-sans text-[0.65rem] uppercase tracking-[0.2em] text-gold transition-all duration-400 ease-out ${
                visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
              style={{ transitionDelay: '0ms' }}
            >
              WEKELIJKSE AANRADER
            </span>
            <h2
              className={`mb-8 font-serif text-[clamp(3rem,5vw,5rem)] italic leading-[1.05] text-cream transition-all duration-400 ease-out ${
                visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
              style={{ transitionDelay: '100ms' }}
            >
              Msemmen met kip — vers uit onze Dordrechtse bakkerij
            </h2>
            <p
              className={`mb-10 font-sans text-base font-light leading-[1.9] text-cream/80 transition-all duration-400 ease-out ${
                visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              Luchtige msemmen gevuld met mals gekruide halal kip, frisse salade
              en een romige saus. Een gerecht dat generaties verbindt — van de
              warme plaat direct naar jouw bord. Elke week een nieuwe aanrader
              bij Benny&apos;s Bakery in Dordrecht.
            </p>
            <Link
              href="/menu"
              className={`inline-flex w-fit items-center rounded-sm border border-cream px-6 py-3 font-sans text-cream transition-all duration-400 ease-out hover:bg-cream/10 ${
                visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              Bekijk het menu
            </Link>
          </div>

          {/* Right - Image */}
          <div
            className={`relative aspect-[3/4] w-full overflow-hidden rounded-lg lg:order-2 transition-all duration-400 ease-out ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
            style={{ transitionDelay: '150ms' }}
          >
            <div
              ref={photoRef}
              className="absolute inset-x-0"
              style={{ top: '-30%', bottom: '-30%', willChange: 'transform' }}
            >
              <Image
                src="/images/food/ontbijt-spread.jpg"
                alt="Msemmen met harcha bij Benny's"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

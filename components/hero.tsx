'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useInView } from '@/hooks/use-in-view'

export function Hero() {
  const { ref, isInView } = useInView()

  return (
    <section id="home" className="relative h-screen min-h-[700px]">
      <div className="flex h-full flex-col md:flex-row">
        {/* Left Half - Dark Section */}
        <div className="relative flex h-[60vh] w-full flex-col justify-end bg-dark p-8 md:h-full md:w-1/2 md:p-12" ref={ref}>
          {/* Floating Dish Circles - Hidden on mobile, shown on md+ */}
          <div className="absolute left-8 top-24 hidden md:block lg:left-12 lg:top-28">
            <div
              className={`h-32 w-32 overflow-hidden rounded-full border-2 border-cream/30 shadow-2xl lg:h-40 lg:w-40 ${
                isInView ? 'animate-fade-in-up' : 'opacity-0'
              }`}
            >
              <Image
                src="/food-dish-6.jpg"
                alt="Vers gebakken brood"
                width={160}
                height={160}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>
          <div className="absolute left-1/2 top-36 hidden -translate-x-1/2 md:block lg:top-44">
            <div
              className={`h-28 w-28 overflow-hidden rounded-full border-2 border-cream/30 shadow-2xl lg:h-36 lg:w-36 ${
                isInView ? 'animate-fade-in-up animation-delay-100' : 'opacity-0'
              }`}
            >
              <Image
                src="/food-dish-8.jpg"
                alt="Marokkaanse patisserie"
                width={144}
                height={144}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>
          <div className="absolute right-8 top-28 hidden md:block lg:right-12 lg:top-32">
            <div
              className={`h-24 w-24 overflow-hidden rounded-full border-2 border-cream/30 shadow-2xl lg:h-32 lg:w-32 ${
                isInView ? 'animate-fade-in-up animation-delay-200' : 'opacity-0'
              }`}
            >
              <Image
                src="/food-dish-4.jpg"
                alt="Artisanaal gebak"
                width={128}
                height={128}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>

          {/* Mobile Floating Circles */}
          <div className="absolute right-4 top-4 md:hidden">
            <div className="flex gap-2">
              <div className="h-20 w-20 overflow-hidden rounded-full border-2 border-cream/30 shadow-xl">
                <Image
                  src="/food-dish-6.jpg"
                  alt="Vers gebakken brood"
                  width={80}
                  height={80}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
              <div className="mt-6 h-16 w-16 overflow-hidden rounded-full border-2 border-cream/30 shadow-xl">
                <Image
                  src="/food-dish-8.jpg"
                  alt="Marokkaanse patisserie"
                  width={64}
                  height={64}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Bottom Content */}
          <div className="relative z-10">
            <span
              className={`mb-4 inline-block font-sans text-[0.65rem] uppercase tracking-[0.2em] text-gold ${
                isInView ? 'animate-fade-in-up animation-delay-300' : 'opacity-0'
              }`}
            >
              DORDRECHT — BAKKERIJ
            </span>
            <h1
              className={`max-w-[380px] font-serif text-[clamp(2.2rem,4vw,4rem)] italic leading-[1.1] text-cream ${
                isInView ? 'animate-fade-in-up animation-delay-400' : 'opacity-0'
              }`}
            >
              Het Ambacht Van Een Echte Bakkerij
            </h1>
            <div
              className={`mt-8 flex flex-wrap gap-4 ${
                isInView ? 'animate-fade-in-up animation-delay-500' : 'opacity-0'
              }`}
            >
              <Link
                href="#reserveren"
                className="flex items-center gap-2 rounded-sm bg-cream px-6 py-3 font-sans text-[0.9rem] text-dark transition-all hover:bg-cream/90"
              >
                Reserveren
                <ArrowRight size={16} />
              </Link>
              <Link
                href="#menu"
                className="flex items-center gap-2 rounded-sm border border-cream px-6 py-3 font-sans text-[0.9rem] text-cream transition-all hover:bg-cream/10"
              >
                Bekijk Menu
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>

        {/* Right Half - Image */}
        <div className="relative h-[40vh] w-full md:h-full md:w-1/2">
          <Image
            src="/herosection.jpg"
            alt="Benny's Bakery interieur"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/15" />
        </div>
      </div>
    </section>
  )
}

'use client'

import Image from 'next/image'
import { useParallaxContainer } from '@/hooks/use-scroll-animation'

const topPhotos = [
  '/food-dish-3.jpg',
  '/food-dish-5.jpg',
  '/bakery-sfeer-1.jpg',
  '/food-dish-4.jpg',
  '/food-dish-6.jpg',
  '/food-dish-7.jpg',
]

const bottomPhotos = [
  '/food-dish-8.jpg',
  '/food-dish-9.jpg',
  '/bakery-sfeer-2.jpg',
  '/food-dish-1.jpg',
  '/food-dish-2.jpg',
  '/herosection.jpg',
]

const photoStyle: React.CSSProperties = {
  position: 'relative',
  width: 'clamp(150px, 22vw, 360px)',
  height: 'clamp(190px, 28vw, 440px)',
  flexShrink: 0,
  overflow: 'hidden',
  borderRadius: '0.5rem',
}

export function PhotoGrid() {
  const topRowRef = useParallaxContainer(0.35, 'right')
  const bottomRowRef = useParallaxContainer(0.30, 'left')

  return (
    <section className="bg-[#F0E9DE] py-16 sm:py-24 lg:py-32 overflow-hidden">
      <p className="text-[#D4A853] text-[0.65rem] uppercase tracking-[0.2em] text-center mb-10 sm:mb-16">
        SFEERIMPRESSIE
      </p>

      {/* TOP ROW — sweeps RIGHT */}
      <div className="mb-3 sm:mb-4 overflow-visible">
        <div
          ref={topRowRef}
          className="flex gap-3 sm:gap-4 w-max"
          style={{ marginLeft: 'clamp(-30px, -8vw, -150px)', willChange: 'transform' }}
        >
          {topPhotos.map((src, i) => (
            <div key={i} style={photoStyle}>
              <Image
                src={src}
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                alt={`Benny's Bakery ${i + 1}`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* BOTTOM ROW — sweeps LEFT */}
      <div className="overflow-visible">
        <div
          ref={bottomRowRef}
          className="flex gap-3 sm:gap-4 w-max"
          style={{ marginLeft: 'clamp(-50px, -3vw, -10px)', willChange: 'transform' }}
        >
          {bottomPhotos.map((src, i) => (
            <div key={i} style={photoStyle}>
              <Image
                src={src}
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                alt={`Benny's Bakery sfeer ${i + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

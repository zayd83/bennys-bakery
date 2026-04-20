'use client'

import Image from 'next/image'
import { useParallaxContainer } from '@/hooks/use-scroll-animation'

const topPhotos = [
  '/food-dish-3.jpg',
  '/food-dish-5.jpg',
  '/bakery-sfeer-1.jpg',
  '/food-dish-4.jpg',
  '/food-dish-6.jpg',
]

const bottomPhotos = [
  '/food-dish-7.jpg',
  '/food-dish-8.jpg',
  '/bakery-sfeer-2.jpg',
  '/food-dish-1.jpg',
  '/food-dish-9.jpg',
]

const mobilePhotos = [
  { src: '/food-dish-3.jpg', height: 800 },
  { src: '/food-dish-4.jpg', height: 600 },
  { src: '/bakery-sfeer-1.jpg', height: 700 },
  { src: '/food-dish-5.jpg', height: 500 },
  { src: '/food-dish-6.jpg', height: 600 },
  { src: '/food-dish-7.jpg', height: 750 },
  { src: '/bakery-sfeer-2.jpg', height: 550 },
  { src: '/food-dish-8.jpg', height: 700 },
  { src: '/food-dish-1.jpg', height: 600 },
]

export function PhotoGrid() {
  const topRowRef = useParallaxContainer(0.12, 'right')
  const bottomRowRef = useParallaxContainer(0.12, 'left')

  return (
    <section className="bg-[#F0E9DE] py-32 overflow-hidden">
      <p className="text-[#D4A853] text-[0.65rem] uppercase tracking-[0.2em] text-center mb-16">
        SFEERIMPRESSIE
      </p>

      {/* Desktop: two horizontal parallax rows */}
      <div className="hidden md:block">
        {/* TOP ROW — scrolls RIGHT */}
        <div className="mb-4 overflow-visible">
          <div
            ref={topRowRef}
            className="flex gap-4 w-max"
            style={{ willChange: 'transform' }}
          >
            {topPhotos.map((src, i) => (
              <div
                key={i}
                className="relative flex-shrink-0 overflow-hidden rounded-lg"
                style={{
                  width: i % 2 === 0 ? '380px' : '300px',
                  height: i % 2 === 0 ? '480px' : '380px',
                }}
              >
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

        {/* BOTTOM ROW — scrolls LEFT */}
        <div className="overflow-visible">
          <div
            ref={bottomRowRef}
            className="flex gap-4 w-max ml-auto"
            style={{ willChange: 'transform' }}
          >
            {bottomPhotos.map((src, i) => (
              <div
                key={i}
                className="relative flex-shrink-0 overflow-hidden rounded-lg"
                style={{
                  width: i % 2 === 0 ? '320px' : '400px',
                  height: i % 2 === 0 ? '400px' : '460px',
                }}
              >
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
      </div>

      {/* Mobile: 2-column masonry */}
      <div className="md:hidden px-4 columns-2 gap-3">
        {mobilePhotos.map((photo, i) => (
          <div key={i} className="break-inside-avoid mb-3 overflow-hidden group cursor-pointer">
            <Image
              src={photo.src}
              alt={`Benny's Bakery ${i + 1}`}
              width={600}
              height={photo.height}
              className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  )
}

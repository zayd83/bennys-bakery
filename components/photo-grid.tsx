'use client'

import Image from 'next/image'
import { useInView } from '@/hooks/use-in-view'

const galleryImages = [
  { src: '/bakery-sfeer-1.jpg', height: 'h-[350px]' },
  { src: '/food-dish-1.jpg', height: 'h-[280px]' },
  { src: '/food-dish-3.jpg', height: 'h-[320px]' },
  { src: '/bakery-sfeer-2.jpg', height: 'h-[250px]' },
  { src: '/food-dish-2.jpg', height: 'h-[300px]' },
  { src: '/food-dish-7.jpg', height: 'h-[340px]' },
  { src: '/food-dish-9.jpg', height: 'h-[260px]' },
  { src: '/food-dish-5.jpg', height: 'h-[290px]' },
]

export function PhotoGrid() {
  const { ref, isInView } = useInView()

  return (
    <section className="bg-cream py-20 lg:py-28" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span
            className={`font-sans text-[0.65rem] uppercase tracking-[0.2em] text-gold ${
              isInView ? 'animate-fade-in-up' : 'opacity-0'
            }`}
          >
            SFEERIMPRESSIE
          </span>
        </div>

        {/* Masonry Grid */}
        <div className="columns-2 gap-4 md:columns-3 lg:columns-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`mb-4 break-inside-avoid ${
                isInView
                  ? `animate-fade-in-up`
                  : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`relative ${image.height} w-full overflow-hidden rounded-lg transition-all duration-300 hover:scale-[1.02] hover:brightness-90`}
              >
                <Image
                  src={image.src}
                  alt={`Sfeerimpressie ${index + 1}`}
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

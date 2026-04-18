'use client'

import Image from 'next/image'
import { useInView } from '@/hooks/use-in-view'

const galleryImages = [
  { src: 'https://picsum.photos/seed/gallery1/600/700', height: 'h-[350px]' },
  { src: 'https://picsum.photos/seed/gallery2/600/500', height: 'h-[280px]' },
  { src: 'https://picsum.photos/seed/gallery3/600/600', height: 'h-[320px]' },
  { src: 'https://picsum.photos/seed/gallery4/600/450', height: 'h-[250px]' },
  { src: 'https://picsum.photos/seed/gallery5/600/550', height: 'h-[300px]' },
  { src: 'https://picsum.photos/seed/gallery6/600/650', height: 'h-[340px]' },
  { src: 'https://picsum.photos/seed/gallery7/600/480', height: 'h-[260px]' },
  { src: 'https://picsum.photos/seed/gallery8/600/520', height: 'h-[290px]' },
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

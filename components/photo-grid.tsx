'use client'

import Image from 'next/image'

const photos = [
  { src: '/food-dish-3.jpg', height: 800, alt: 'Benny\'s Bakery gerecht' },
  { src: '/food-dish-4.jpg', height: 600, alt: 'Benny\'s Bakery gerecht' },
  { src: '/bakery-sfeer-1.jpg', height: 700, alt: 'Benny\'s Bakery sfeer' },
  { src: '/food-dish-5.jpg', height: 500, alt: 'Benny\'s Bakery gerecht' },
  { src: '/food-dish-6.jpg', height: 600, alt: 'Benny\'s Bakery gerecht' },
  { src: '/food-dish-7.jpg', height: 750, alt: 'Benny\'s Bakery gerecht' },
  { src: '/bakery-sfeer-2.jpg', height: 550, alt: 'Benny\'s Bakery sfeer' },
  { src: '/food-dish-8.jpg', height: 700, alt: 'Benny\'s Bakery gerecht' },
  { src: '/food-dish-1.jpg', height: 600, alt: 'Benny\'s Bakery gerecht' },
]

export function PhotoGrid() {
  return (
    <section className="bg-[#F5F0E8] py-32">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-[#D4A853] text-[0.65rem] uppercase tracking-[0.2em] text-center mb-16">
          SFEERIMPRESSIE
        </p>

        <div className="columns-2 md:columns-3 lg:columns-4 gap-3">
          {photos.map((photo, i) => (
            <div
              key={i}
              className="break-inside-avoid mb-3 overflow-hidden group cursor-pointer"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                width={600}
                height={photo.height}
                className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

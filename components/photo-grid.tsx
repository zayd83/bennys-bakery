'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

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

const mobilePhotos = [
  { src: '/food-dish-3.jpg', height: 800 },
  { src: '/food-dish-4.jpg', height: 600 },
  { src: '/bakery-sfeer-1.jpg', height: 700 },
  { src: '/food-dish-5.jpg', height: 500 },
  { src: '/food-dish-6.jpg', height: 600 },
  { src: '/food-dish-7.jpg', height: 750 },
]

export function PhotoGrid() {
  const topRef = useRef<HTMLDivElement>(null)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => {
      if (topRef.current)
        topRef.current.style.transform = `translateX(${window.scrollY * 0.3}px)`
      if (bottomRef.current)
        bottomRef.current.style.transform = `translateX(${window.scrollY * -0.5}px)`
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section className="bg-[#F0E9DE] py-32">
      <p className="text-[#D4A853] text-[0.65rem] uppercase tracking-[0.2em] text-center mb-16">
        SFEERIMPRESSIE
      </p>

      {/* Desktop: two horizontal scroll rows */}
      <div className="hidden md:block overflow-hidden">

        {/* TOP ROW — moves RIGHT on scroll */}
        <div
          ref={topRef}
          className="flex gap-4 mb-4"
          style={{ width: '200vw', marginLeft: '-40vw', willChange: 'transform' }}
        >
          {topPhotos.map((src, i) => (
            <div
              key={i}
              style={{ position: 'relative', width: '340px', height: '420px', flexShrink: 0, overflow: 'hidden', borderRadius: '0.5rem' }}
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

        {/* BOTTOM ROW — moves LEFT on scroll */}
        <div
          ref={bottomRef}
          className="flex gap-4"
          style={{ width: 'max-content', marginLeft: 'calc(100vw - 340px)', willChange: 'transform' }}
        >
          {bottomPhotos.map((src, i) => (
            <div
              key={i}
              style={{ position: 'relative', width: '340px', height: '420px', flexShrink: 0, overflow: 'hidden', borderRadius: '0.5rem' }}
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

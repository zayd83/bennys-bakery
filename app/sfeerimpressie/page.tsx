'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

const allPhotos = [
  '/food-dish-1.jpg',
  '/food-dish-2.jpg',
  '/food-dish-3.jpg',
  '/food-dish-4.jpg',
  '/food-dish-5.jpg',
  '/bakery-sfeer-1.jpg',
  '/food-dish-6.jpg',
  '/food-dish-7.jpg',
  '/food-dish-8.jpg',
  '/bakery-sfeer-2.jpg',
  '/food-dish-9.jpg',
  '/herosection.jpg',
]

function GalleryPhoto({ src, index }: { src: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            if (el) {
              el.style.opacity = '1'
              el.style.transform = 'translateY(0)'
            }
          }, index * 50)
          obs.disconnect()
        }
      },
      { threshold: 0.05 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [index])

  return (
    <div
      ref={ref}
      className="break-inside-avoid mb-4 overflow-hidden rounded-sm"
      style={{
        opacity: 0,
        transform: 'translateY(20px)',
        transition: 'opacity 0.6s ease, transform 0.6s ease',
      }}
    >
      <Image
        src={src}
        alt={`Benny's Bakery sfeer ${index + 1}`}
        width={800}
        height={1000}
        className="w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
        loading="lazy"
      />
    </div>
  )
}

export default function SfeerimpressiePage() {
  return (
    <main className="overflow-hidden">
      <Navigation />

      {/* ── Hero Header ── */}
      <section className="bg-[#F0E9DE] px-6 pb-16 pt-40 text-center">
        <span className="mb-4 inline-block font-sans text-[0.65rem] uppercase tracking-[0.2em] text-[#C4622D]">
          SFEERIMPRESSIE
        </span>
        <h1
          className="font-serif italic text-[#2C1F14]"
          style={{ fontSize: '3.5rem', lineHeight: '1.05' }}
        >
          Een kijkje in onze keuken
        </h1>
        <p className="mx-auto mt-4 max-w-md font-sans text-base font-light leading-relaxed text-[#6B4C35]">
          De sfeer, de gerechten, het team — alles wat Benny&apos;s Bakery bijzonder maakt.
        </p>
        <div className="mx-auto mt-6 bg-[#C4622D]" style={{ width: '60px', height: '1.5px' }} />
      </section>

      {/* ── Masonry Gallery ── */}
      <section className="bg-[#FAF7F2] py-20">
        <div className="mx-auto max-w-7xl px-6">
          {/* Desktop: 4 columns */}
          <div
            className="hidden lg:block"
            style={{ columnCount: 4, columnGap: '1rem' }}
          >
            {allPhotos.map((src, i) => (
              <GalleryPhoto key={src} src={src} index={i} />
            ))}
          </div>
          {/* Tablet: 3 columns */}
          <div
            className="hidden md:block lg:hidden"
            style={{ columnCount: 3, columnGap: '1rem' }}
          >
            {allPhotos.map((src, i) => (
              <GalleryPhoto key={src} src={src} index={i} />
            ))}
          </div>
          {/* Mobile: 2 columns */}
          <div
            className="block md:hidden"
            style={{ columnCount: 2, columnGap: '1rem' }}
          >
            {allPhotos.map((src, i) => (
              <GalleryPhoto key={src} src={src} index={i} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { useParallaxContainer } from '@/hooks/use-scroll-animation'

const topRowPhotos = [
  '/food-dish-3.jpg',
  '/food-dish-5.jpg',
  '/bakery-sfeer-1.jpg',
  '/food-dish-4.jpg',
  '/food-dish-6.jpg',
  '/food-dish-7.jpg',
]

const bottomRowPhotos = [
  '/food-dish-8.jpg',
  '/food-dish-9.jpg',
  '/bakery-sfeer-2.jpg',
  '/food-dish-1.jpg',
  '/food-dish-2.jpg',
  '/herosection.jpg',
]

export default function SfeerimpressiePage() {
  const [zoomedSrc, setZoomedSrc] = useState('')
  const [isZoomed, setIsZoomed] = useState(false)

  const topRowRef = useParallaxContainer(0.18, 'right')
  const bottomRowRef = useParallaxContainer(0.18, 'left')

  function openZoom(src: string) {
    setZoomedSrc(src)
    setIsZoomed(true)
  }

  function closeZoom() {
    setIsZoomed(false)
    setZoomedSrc('')
  }

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

      {/* ── Gallery ── */}
      <div className="overflow-hidden">
        <section className="bg-[#FAF7F2] py-32 overflow-hidden">

          {/* Mobile: 2-column masonry */}
          <div className="columns-2 gap-3 px-4 md:hidden">
            {[...topRowPhotos, ...bottomRowPhotos].map((src, i) => (
              <div
                key={i}
                className="break-inside-avoid mb-3 overflow-hidden rounded-lg cursor-pointer"
                onClick={() => openZoom(src)}
              >
                <Image
                  src={src}
                  width={400}
                  height={i % 2 === 0 ? 500 : 380}
                  className="w-full object-cover"
                  alt=""
                />
              </div>
            ))}
          </div>

          {/* Desktop: horizontal scrolling rows */}
          <div className="hidden md:block">
            {/* TOP ROW — slides RIGHT on scroll */}
            <div className="overflow-visible mb-4">
              <div
                ref={topRowRef}
                className="flex gap-4 w-max"
                style={{ willChange: 'transform', paddingLeft: '2rem' }}
              >
                {topRowPhotos.map((src, i) => (
                  <div
                    key={i}
                    className="relative flex-shrink-0 overflow-hidden rounded-lg group cursor-pointer"
                    style={{
                      width: i % 3 === 0 ? '420px' : i % 3 === 1 ? '320px' : '380px',
                      height: i % 3 === 0 ? '520px' : i % 3 === 1 ? '420px' : '480px',
                    }}
                    onClick={() => openZoom(src)}
                  >
                    <Image
                      src={src}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      alt={`Benny's Bakery sfeer ${i + 1}`}
                    />
                    <div className="absolute inset-0 bg-[rgba(44,31,20,0)] group-hover:bg-[rgba(44,31,20,0.15)] transition-colors duration-500" />
                  </div>
                ))}
              </div>
            </div>

            {/* BOTTOM ROW — slides LEFT on scroll */}
            <div className="overflow-visible">
              <div
                ref={bottomRowRef}
                className="flex gap-4 w-max ml-auto"
                style={{ willChange: 'transform', paddingRight: '2rem' }}
              >
                {bottomRowPhotos.map((src, i) => (
                  <div
                    key={i}
                    className="relative flex-shrink-0 overflow-hidden rounded-lg group cursor-pointer"
                    style={{
                      width: i % 3 === 0 ? '350px' : i % 3 === 1 ? '450px' : '390px',
                      height: i % 3 === 0 ? '440px' : i % 3 === 1 ? '540px' : '480px',
                    }}
                    onClick={() => openZoom(src)}
                  >
                    <Image
                      src={src}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      alt={`Benny's Bakery foto ${i + 1}`}
                    />
                    <div className="absolute inset-0 bg-[rgba(44,31,20,0)] group-hover:bg-[rgba(44,31,20,0.15)] transition-colors duration-500" />
                  </div>
                ))}
              </div>
            </div>
          </div>

        </section>
      </div>

      {/* Lightbox */}
      {isZoomed && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-6"
          style={{ background: 'rgba(44,31,20,0.92)' }}
          onClick={closeZoom}
        >
          <div
            className="relative max-w-[90vw] max-h-[90vh]"
            onClick={e => e.stopPropagation()}
          >
            <Image
              src={zoomedSrc}
              width={1200}
              height={900}
              className="object-contain max-h-[85vh] rounded-xl shadow-2xl"
              alt="Sfeerimpressie vergroot"
              unoptimized
            />
            <button
              onClick={closeZoom}
              className="absolute -top-5 -right-5 w-10 h-10 rounded-full bg-[#F0E9DE] text-[#2C1F14] text-lg shadow-lg flex items-center justify-center hover:bg-white transition-colors"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      <Footer />
    </main>
  )
}

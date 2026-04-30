'use client'

import Image from 'next/image'
import { useState, useEffect, useCallback } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { useParallaxContainer } from '@/hooks/use-scroll-animation'

const topPhotos = [
  '/images/sfeer/patisserie-vitrine.jpg',
  '/images/food/ontbijt-spread.jpg',
  '/images/sfeer/interieur-dining.jpg',
  '/images/drinks/koffie-branded.jpg',
  '/images/burgers/burger-beef.jpg',
  '/images/food/chebakia-solo.jpg',
]

const bottomPhotos = [
  '/images/sfeer/baguettes-rek.jpg',
  '/images/sandwiches/sandwich-groente.jpg',
  '/images/sfeer/mural-marokkaans.jpg',
  '/images/drinks/koffie-iced.jpg',
  '/images/burgers/burger-chicken.jpg',
  '/images/desserts/citroen.jpg',
]

const allPhotos: string[] = [...topPhotos, ...bottomPhotos]

const photoStyle: React.CSSProperties = {
  position: 'relative',
  width: 'clamp(150px, 22vw, 360px)',
  height: 'clamp(190px, 28vw, 440px)',
  flexShrink: 0,
  overflow: 'hidden',
  borderRadius: '0.5rem',
  cursor: 'pointer',
}

export function PhotoGrid() {
  const topRowRef = useParallaxContainer(0.35, 'right')
  const bottomRowRef = useParallaxContainer(0.30, 'left')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const openLightbox = useCallback((src: string) => {
    const idx = allPhotos.indexOf(src)
    if (idx !== -1) setLightboxIndex(idx)
  }, [])

  const closeLightbox = useCallback(() => setLightboxIndex(null), [])

  const prev = useCallback(() => {
    setLightboxIndex(i => (i === null ? null : (i - 1 + allPhotos.length) % allPhotos.length))
  }, [])

  const next = useCallback(() => {
    setLightboxIndex(i => (i === null ? null : (i + 1) % allPhotos.length))
  }, [])

  useEffect(() => {
    if (lightboxIndex === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightboxIndex, closeLightbox, prev, next])

  return (
    <>
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
              <div
                key={i}
                style={photoStyle}
                onClick={() => openLightbox(src)}
                role="button"
                aria-label={`Foto ${i + 1} vergroot bekijken`}
                tabIndex={0}
                onKeyDown={e => e.key === 'Enter' && openLightbox(src)}
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

        {/* BOTTOM ROW — sweeps LEFT */}
        <div className="overflow-visible">
          <div
            ref={bottomRowRef}
            className="flex gap-3 sm:gap-4 w-max"
            style={{ marginLeft: 'clamp(-50px, -3vw, -10px)', willChange: 'transform' }}
          >
            {bottomPhotos.map((src, i) => (
              <div
                key={i}
                style={photoStyle}
                onClick={() => openLightbox(src)}
                role="button"
                aria-label={`Sfeer foto ${i + 1} vergroot bekijken`}
                tabIndex={0}
                onKeyDown={e => e.key === 'Enter' && openLightbox(src)}
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
      </section>

      {/* LIGHTBOX */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            className="absolute top-4 right-4 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            onClick={closeLightbox}
            aria-label="Sluiten"
          >
            <X size={20} className="text-white" />
          </button>

          {/* Prev */}
          <button
            className="absolute left-4 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            onClick={e => { e.stopPropagation(); prev() }}
            aria-label="Vorige foto"
          >
            <ChevronLeft size={22} className="text-white" />
          </button>

          {/* Image */}
          <div
            className="relative w-[90vw] max-w-4xl h-[80vh]"
            onClick={e => e.stopPropagation()}
          >
            <Image
              src={allPhotos[lightboxIndex]}
              fill
              className="object-contain"
              alt={`Benny's Bakery foto ${lightboxIndex + 1}`}
              priority
            />
          </div>

          {/* Next */}
          <button
            className="absolute right-4 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            onClick={e => { e.stopPropagation(); next() }}
            aria-label="Volgende foto"
          >
            <ChevronRight size={22} className="text-white" />
          </button>

          {/* Counter */}
          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 font-sans text-[0.75rem] text-white/50">
            {lightboxIndex + 1} / {allPhotos.length}
          </p>
        </div>
      )}
    </>
  )
}

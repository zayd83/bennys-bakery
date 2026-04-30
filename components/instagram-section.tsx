'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useFadeIn } from '@/hooks/use-fade-in'

const posts = [
  { src: '/images/food/chebakia-spread-sq.jpg', alt: 'Marokkaanse chebakia patisserie bij Benny\'s Bakery Dordrecht' },
  { src: '/images/drinks/koffie-branded.jpg', alt: 'Specialty koffie bij Benny\'s Bakery lunchroom Dordrecht' },
  { src: '/images/food/ontbijt-overhead-sq.jpg', alt: 'Marokkaans ontbijt spread Benny\'s Bakery Dordrecht' },
  { src: '/images/desserts/chocolade-bol.jpg', alt: 'Chocolade dessert bij Benny\'s Patisserie Dordrecht' },
  { src: '/images/sfeer/patisserie-vitrine.jpg', alt: 'Sfeer Benny\'s Bakery lunchroom Van Oldenbarneveltplein Dordrecht' },
  { src: '/images/burgers/burger-beef.jpg', alt: 'Halal burger lunch bij Benny\'s Bakery Dordrecht' },
]

const INSTAGRAM_URL = 'https://www.instagram.com/bennysbakeryy/'
const HANDLE = '@bennysbakeryy'

export function InstagramSection() {
  const { ref, visible } = useFadeIn()

  return (
    <section className="bg-[#0D0B07] py-16 sm:py-24" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div
          className={`mb-10 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 transition-all duration-400 ease-out ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div>
            <div className="mb-3 flex items-center gap-2">
              {/* Instagram gradient icon */}
              <svg viewBox="0 0 24 24" className="h-5 w-5 flex-shrink-0" aria-hidden="true">
                <defs>
                  <linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#f09433" />
                    <stop offset="25%" stopColor="#e6683c" />
                    <stop offset="50%" stopColor="#dc2743" />
                    <stop offset="75%" stopColor="#cc2366" />
                    <stop offset="100%" stopColor="#bc1888" />
                  </linearGradient>
                </defs>
                <path fill="url(#ig-grad)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
              </svg>
              <span className="font-sans text-[0.65rem] uppercase tracking-[0.2em] text-[#D4A853]">
                Instagram
              </span>
            </div>
            <h2 className="font-serif text-[clamp(1.8rem,3vw,2.5rem)] italic text-white">
              Volg ons dagelijkse leven
            </h2>
            <p className="mt-2 font-sans text-sm font-light text-white/50">
              Verse producten, sfeer & nieuws — direct uit onze bakkerij in Dordrecht
            </p>
          </div>

          <Link
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 font-sans text-sm text-white/80 transition-all hover:border-white/50 hover:text-white"
          >
            Volg {HANDLE}
          </Link>
        </div>

        {/* Photo grid */}
        <div className="grid grid-cols-3 gap-1.5 sm:gap-2.5">
          {posts.map((post, i) => (
            <Link
              key={i}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative aspect-square overflow-hidden rounded-sm transition-all duration-500 ease-out ${
                visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
              style={{ transitionDelay: `${i * 60}ms` }}
              aria-label={`Bekijk op Instagram: ${post.alt}`}
            >
              <Image
                src={post.src}
                alt={post.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 33vw, 25vw"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  className="h-7 w-7 fill-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow"
                  aria-hidden="true"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}

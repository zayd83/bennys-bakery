'use client'

import { useFadeIn } from '@/hooks/use-fade-in'
import { Star } from 'lucide-react'

const reviews = [
  {
    quote:
      'Elke keer weer genieten van het ontbijt hier. De msemmen zijn onwerkelijk lekker!',
    name: 'Fatima R.',
    date: '2025',
  },
  {
    quote:
      "Benny's verzorgde onze bedrijfslunch en iedereen was onder de indruk. Absoluut aanrader!",
    name: 'Youssef K.',
    date: '2025',
  },
  {
    quote:
      'De açaí bowl is verslavend lekker. Beste bakkerij van Dordrecht.',
    name: 'Sara M.',
    date: '2025',
  },
]

export function Reviews() {
  const { ref, visible } = useFadeIn()

  return (
    <section className="relative bg-[#E8DDD0] py-16 sm:py-24 lg:py-32" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          className={`mb-16 text-center transition-all duration-400 ease-out ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="font-sans text-[0.65rem] uppercase tracking-[0.2em] text-gold">
            GOOGLE REVIEWS · DORDRECHT
          </span>
          <h2 className="mt-3 font-serif text-[clamp(1.8rem,4vw,2.5rem)] italic text-[#2C1F14]">
            Wat onze klanten zeggen
          </h2>
          <p className="mt-2 font-sans text-sm font-light text-[#6B4C35]">
            Dé halal lunchroom &amp; bakkerij van Dordrecht — beoordeeld met een 4.8 ⭐
          </p>
        </div>

        {/* Platform trust badges */}
        <div className={`mb-10 flex flex-wrap justify-center gap-4 transition-all duration-400 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '75ms' }}>
          <div className="flex items-center gap-2 rounded-full bg-white/70 border border-[rgba(212,168,83,0.2)] px-5 py-2.5">
            <span className="text-base leading-none">🟢</span>
            <span className="font-sans text-[0.75rem] font-medium text-[#2C1F14]">Too Good To Go</span>
          </div>
          <div className="flex items-center gap-2 rounded-full bg-white/70 border border-[rgba(212,168,83,0.2)] px-5 py-2.5">
            <span className="text-base leading-none">🛵</span>
            <span className="font-sans text-[0.75rem] font-medium text-[#2C1F14]">Thuisbezorgd</span>
          </div>
          <div className="flex items-center gap-2 rounded-full bg-white/70 border border-[rgba(212,168,83,0.2)] px-5 py-2.5">
            <Star size={12} className="fill-[#D4A853] text-[#D4A853]" />
            <span className="font-sans text-[0.75rem] font-medium text-[#2C1F14]">4.8 · Google Reviews</span>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((review, index) => (
            <div
              key={index}
              className={`rounded-lg border border-[rgba(212,168,83,0.2)] bg-white/60 p-6 md:p-10 transition-all duration-400 ease-out ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 75}ms` }}
            >
              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-gold text-gold" />
                ))}
              </div>
              <p className="mb-6 font-serif text-[1.15rem] italic leading-[1.7] text-[#2C1F14]">
                &ldquo;{review.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="flex items-center justify-center w-9 h-9 rounded-full bg-[#2C1F14] flex-shrink-0"
                >
                  <span className="font-sans text-[0.75rem] font-medium text-[#F0E9DE]">
                    {review.name.charAt(0)}
                  </span>
                </div>
                <p className="font-sans text-[0.8rem] text-[#6B4C35]">
                  {review.name}, {review.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

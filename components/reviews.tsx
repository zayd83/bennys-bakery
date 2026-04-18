'use client'

import { useInView } from '@/hooks/use-in-view'
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
  const { ref, isInView } = useInView()

  return (
    <section className="bg-dark py-20 lg:py-28" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span
            className={`font-sans text-[0.65rem] uppercase tracking-[0.2em] text-gold ${
              isInView ? 'animate-fade-in-up' : 'opacity-0'
            }`}
          >
            WAT KLANTEN ZEGGEN
          </span>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((review, index) => (
            <div
              key={index}
              className={`rounded-lg border border-white/10 bg-white/5 p-8 ${
                isInView ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${(index + 1) * 0.1}s` }}
            >
              {/* Stars */}
              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-gold text-gold"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="mb-4 font-serif text-[1.15rem] italic leading-[1.7] text-cream">
                &ldquo;{review.quote}&rdquo;
              </p>

              {/* Name & Date */}
              <p className="font-sans text-[0.8rem] text-cream/50">
                {review.name}, {review.date}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

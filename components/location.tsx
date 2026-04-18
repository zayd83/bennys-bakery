'use client'

import Link from 'next/link'
import { MapPin, Phone, Mail } from 'lucide-react'
import { useInView } from '@/hooks/use-in-view'

export function Location() {
  const { ref, isInView } = useInView()

  return (
    <section id="over-ons" className="bg-warm-mid py-32" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left - Text Content */}
          <div>
            <span
              className={`mb-4 inline-block font-sans text-[0.65rem] uppercase tracking-[0.2em] text-gold ${
                isInView ? 'animate-fade-in-up' : 'opacity-0'
              }`}
            >
              BEZOEK ONS
            </span>
            <h2
              className={`mb-8 font-serif text-[clamp(2rem,3.5vw,3rem)] italic text-cream ${
                isInView ? 'animate-fade-in-up animation-delay-100' : 'opacity-0'
              }`}
            >
              Van Oldenbarneveltplein 68
            </h2>

            <div
              className={`mb-8 space-y-4 ${
                isInView ? 'animate-fade-in-up animation-delay-200' : 'opacity-0'
              }`}
            >
              <div className="flex items-center gap-3 text-cream/90">
                <MapPin size={18} className="text-gold" />
                <span className="font-sans text-[0.95rem]">3317ES Dordrecht</span>
              </div>
              <div className="flex items-center gap-3 text-cream/90">
                <Phone size={18} className="text-gold" />
                <Link href="tel:+31685091092" className="font-sans hover:text-cream">
                  06 85 09 10 92
                </Link>
              </div>
              <div className="flex items-center gap-3 text-cream/90">
                <Mail size={18} className="text-gold" />
                <Link
                  href="mailto:info@bennysbakery.nl"
                  className="font-sans hover:text-cream"
                >
                  info@bennysbakery.nl
                </Link>
              </div>
            </div>

            <div
              className={`mb-6 ${
                isInView ? 'animate-fade-in-up animation-delay-300' : 'opacity-0'
              }`}
            >
              <h3 className="mb-2 font-sans text-sm font-medium text-cream">
                Openingstijden
              </h3>
              <div className="space-y-1 font-sans text-sm text-cream/75">
                <p>Di t/m Za: 08:00 – 18:00</p>
                <p>Zondag: 10:00 – 18:00</p>
                <p>Maandag: Gesloten</p>
              </div>
            </div>

            <Link
              href="https://maps.google.com/maps?q=Van+Oldenbarneveltplein+68,+Dordrecht"
              target="_blank"
              rel="noopener noreferrer"
              className={`font-sans text-gold transition-all hover:underline ${
                isInView ? 'animate-fade-in-up animation-delay-400' : 'opacity-0'
              }`}
            >
              Open in Google Maps →
            </Link>
          </div>

          {/* Right - Map */}
          <div
            className={`overflow-hidden rounded-lg ${
              isInView ? 'animate-fade-in-up animation-delay-200' : 'opacity-0'
            }`}
          >
            <iframe
              src="https://maps.google.com/maps?q=Van+Oldenbarneveltplein+68,+Dordrecht&output=embed"
              width="100%"
              height="480"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Locatie Benny's Bakery"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

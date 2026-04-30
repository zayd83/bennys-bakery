import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Hero } from '@/components/hero'
import { Marquee } from '@/components/marquee'
import { FoodIntro } from '@/components/food-intro'
import { WeekFeature } from '@/components/week-feature'
import { PatisserieSection } from '@/components/patisserie-section'
import { BaristaSection } from '@/components/barista-section'
import { HealthySection } from '@/components/healthy-section'
import { PhotoGrid } from '@/components/photo-grid'
import { BreakfastSection } from '@/components/breakfast-section'
import { Reviews } from '@/components/reviews'
import { Location } from '@/components/location'
import { InstagramSection } from '@/components/instagram-section'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navigation />
      <Hero />
      <Marquee />
      <FoodIntro />
      <WeekFeature />
      <PatisserieSection />
      <BaristaSection />
      <HealthySection />
      <div className="overflow-hidden">
        <PhotoGrid />
      </div>
      {/* Gallery CTA */}
      <div className="bg-[#F0E9DE] py-10 text-center">
        <Link
          href="/sfeerimpressie"
          className="font-sans text-[0.9rem] tracking-[0.04em] text-[#2C1F14] underline-offset-4 hover:underline"
        >
          Bekijk alle foto&apos;s →
        </Link>
      </div>
      <BreakfastSection />
      <Reviews />
      <Location />

      <InstagramSection />
      <Footer />
    </main>
  )
}

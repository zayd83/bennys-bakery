import { Navigation } from '@/components/navigation'
import { Hero } from '@/components/hero'
import { Marquee } from '@/components/marquee'
import { FoodIntro } from '@/components/food-intro'
import { WeekFeature } from '@/components/week-feature'
import { PhotoGrid } from '@/components/photo-grid'
import { CateringCTA } from '@/components/catering-cta'
import { ReservationForm } from '@/components/reservation-form'
import { Reviews } from '@/components/reviews'
import { Location } from '@/components/location'
import { Footer } from '@/components/footer'
export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Marquee />
      <FoodIntro />
      <WeekFeature />
      <PhotoGrid />
      <CateringCTA />
      <ReservationForm />
      <Reviews />
      <Location />
      <Footer />
    </main>
  )
}

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { PhotoGrid } from '@/components/photo-grid'

export default function SfeerimpressiePage() {
  return (
    <main className="overflow-hidden pt-20">
      <Navigation />
      <PhotoGrid />
      <Footer />
    </main>
  )
}

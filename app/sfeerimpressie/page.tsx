import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { PhotoGrid } from '@/components/photo-grid'

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

      <PhotoGrid />

      <Footer />
    </main>
  )
}

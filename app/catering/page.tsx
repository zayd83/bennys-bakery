'use client'

import { useMemo, useRef, useState } from 'react'
import Image from 'next/image'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Minus, Plus } from 'lucide-react'

type MenuItem = {
  id: string
  name: string
  description: string
  price: number
}

type Category = {
  title: string
  priceNote: string | null
  items: MenuItem[]
}

const CATEGORIES: Category[] = [
  {
    title: 'Broodjes & Sandwiches',
    priceNote: '€15 p.p.',
    items: [
      { id: 'tonijn-deluxe', name: 'Tonijn Deluxe', description: 'Verse tonijnsalade, ei en frisse groenten', price: 15 },
      { id: 'broodje-grillworst', name: 'Broodje Grillworst', description: 'Pittige grillworst met huisgemaakte saus', price: 15 },
      { id: 'filet-american', name: 'Filet American', description: 'Romige filet american met rode ui', price: 15 },
      { id: 'bennys-broodje-kip', name: "Benny's Broodje (kip)", description: "Krokante kip met Benny's specerijen", price: 15 },
      { id: 'broodje-kipfilet', name: 'Broodje Kipfilet', description: 'Mals gegrilde kipfilet met sla en tomaat', price: 15 },
      { id: 'tuna-melt', name: 'Tuna Melt', description: 'Gesmolten kaas met romige tonijnsalade', price: 15 },
    ],
  },
  {
    title: 'Marokkaans',
    priceNote: '€15 p.p.',
    items: [
      { id: 'msemmen-bennys-kip', name: "Msemmen Benny's (kip)", description: 'Warm Marokkaans pannenbrood gevuld met kip', price: 15 },
      { id: 'msemmen-grillworst', name: 'Msemmen Grillworst', description: 'Msemmen gevuld met pittige grillworst', price: 15 },
      { id: 'msemmen-tonijn', name: 'Msemmen Tonijn', description: 'Msemmen gevuld met verse tonijnsalade', price: 15 },
      { id: 'bot-bot-kip', name: 'Bot Bot Kip', description: 'Zacht Bot Bot broodje met sappige kip', price: 15 },
      { id: 'bot-bot-grillworst', name: 'Bot Bot Grillworst', description: 'Zacht Bot Bot broodje met grillworst', price: 15 },
      { id: 'bot-bot-tonijn', name: 'Bot Bot Tonijn', description: 'Zacht Bot Bot broodje met tonijnsalade', price: 15 },
    ],
  },
  {
    title: 'Specials',
    priceNote: '€15 p.p.',
    items: [
      { id: 'bennys-truffel-chicken', name: "Benny's Truffel Chicken", description: 'Krokante kip met truffelmayonaise', price: 15 },
      { id: 'bennys-rustiek-kip', name: "Benny's Rustiek Kip", description: 'Rustiek brood met gegrilde kip en groenten', price: 15 },
      { id: 'bennys-spicy-kip', name: "Benny's Spicy Kip", description: 'Pittige kip met huisgemaakte spicy saus', price: 15 },
      { id: 'bennys-gezond', name: "Benny's Gezond", description: 'Verse en gezonde belegging met groenten', price: 15 },
    ],
  },
  {
    title: 'Loaded Fries',
    priceNote: '€15 p.p.',
    items: [
      { id: 'loaded-fries-truffel-parmezaan', name: 'Truffel & Parmezaan (vega)', description: 'Krokante friet met truffelmayo en parmezaan', price: 15 },
      { id: 'bennys-loaded', name: "Benny's Loaded", description: "Friet met Benny's signature topping", price: 15 },
      { id: 'crispy-chicken-fries', name: 'Crispy Chicken', description: 'Loaded fries met krokante kipstukjes', price: 15 },
    ],
  },
  {
    title: 'Sides',
    priceNote: null,
    items: [
      { id: 'friet', name: 'Friet', description: 'Krokante verse friet', price: 4.5 },
    ],
  },
  {
    title: 'Ontbijt',
    priceNote: '€15 p.p.',
    items: [
      { id: 'acai-bowl', name: 'Acai Bowl', description: 'Frisse acai bowl met fruit en granola (tot 17:00)', price: 15 },
      { id: 'healthy-bowl', name: 'Healthy Bowl', description: 'Voedzame bowl met verse, gezonde ingrediënten (tot 17:00)', price: 15 },
      { id: 'ontbijt-bennys', name: "Ontbijt Benny's", description: "Compleet Benny's ontbijt (tot 14:00)", price: 15 },
      { id: 'uitsmijter', name: 'Uitsmijter', description: 'Klassieke uitsmijter met brood (tot 14:00)', price: 15 },
    ],
  },
  {
    title: 'Dranken',
    priceNote: null,
    items: [
      { id: 'iced-coffee-small', name: 'Iced Coffee Small', description: 'Onze signature ijskoffie, kleine maat', price: 6 },
      { id: 'iced-coffee-large', name: 'Iced Coffee Large', description: 'Onze signature ijskoffie, grote maat', price: 8 },
      { id: 'iced-matcha-small', name: 'Iced Matcha Small', description: 'Romige iced matcha, kleine maat', price: 6 },
      { id: 'iced-matcha-large', name: 'Iced Matcha Large', description: 'Romige iced matcha, grote maat', price: 8 },
      { id: 'avocado-shake', name: 'Avocado Shake', description: 'Romige avocado milkshake', price: 5 },
      { id: 'aardbei-shake', name: 'Aardbei Shake', description: 'Romige aardbei milkshake', price: 5 },
      { id: 'marokkaanse-muntthee', name: 'Marokkaanse Muntthee', description: 'Traditionele verse muntthee', price: 2.5 },
      { id: 'pickwick-thee', name: 'Pickwick Thee', description: 'Diverse Pickwick thee smaken', price: 2 },
      { id: 'espresso', name: 'Espresso', description: 'Pure Italiaanse espresso', price: 3 },
      { id: 'koffie', name: 'Koffie', description: 'Vers gezette filterkoffie', price: 3 },
      { id: 'cappuccino', name: 'Cappuccino', description: 'Espresso met romig melkschuim', price: 3.5 },
      { id: 'latte-macchiato', name: 'Latte Macchiato', description: 'Laagjes espresso, melk en melkschuim', price: 4 },
      { id: 'classic-mojito-passion', name: 'Classic Mojito Passion', description: 'Frisse mojito met passievrucht', price: 8.5 },
      { id: 'blue-lagoon-mojito', name: 'Blue Lagoon Mojito', description: 'Verfrissende blauwe mojito', price: 8.5 },
      { id: 'berry-bliss-mojito', name: 'Berry Bliss Mojito', description: 'Mojito met verse bosvruchten', price: 6 },
    ],
  },
  {
    title: 'Frisdranken',
    priceNote: '€2,50',
    items: [
      { id: 'coca-cola-zero', name: 'Coca Cola Zero', description: 'Cola zonder suiker', price: 2.5 },
      { id: 'red-bull-original', name: 'Red Bull Original', description: 'Energiedrank, original smaak', price: 2.5 },
      { id: 'red-bull-zero', name: 'Red Bull Zero', description: 'Energiedrank zonder suiker', price: 2.5 },
      { id: 'spa-blauw', name: 'Spa Blauw', description: 'Koolzuurhoudend bronwater', price: 2.5 },
      { id: 'sprite', name: 'Sprite', description: 'Fris citroen-limoen frisdrank', price: 2.5 },
      { id: 'capri-sun', name: 'Capri Sun', description: 'Fruitig drinkpakje', price: 2.5 },
      { id: 'oasis-tropical', name: 'Oasis Tropical', description: 'Tropische vruchtendrank', price: 2.5 },
      { id: 'hawai-tropical', name: 'Hawai Tropical', description: 'Tropische frisdrank', price: 2.5 },
      { id: 'chocomel', name: 'Chocomel', description: 'Chocolademelk', price: 2.5 },
      { id: 'fuze-tea-peach', name: 'Fuze Tea Peach', description: 'IJsthee met perzik', price: 2.5 },
      { id: 'poms', name: 'Poms', description: 'Sinaasappel-frisdrank', price: 2.5 },
      { id: 'appelsap', name: 'Appelsap', description: 'Vers appelsap', price: 2.5 },
    ],
  },
]

const ALL_ITEMS: MenuItem[] = CATEGORIES.flatMap((c) => c.items)

const STEPS = [
  { number: '1', title: 'Kies je gerechten', description: 'Stel je bestelling samen uit ons catering menu' },
  { number: '2', title: 'Vul het formulier in', description: 'Aantal personen, datum, tijd en locatie' },
  { number: '3', title: 'Wij regelen de rest', description: 'Wij leveren vers op jouw locatie' },
]

function formatPrice(n: number) {
  return n % 1 === 0 ? `€${n}` : `€${n.toFixed(2).replace('.', ',')}`
}

const BOOKLET_PAGES = [
  '/catering-menu/page-1.jpg',
  '/catering-menu/page-2.jpg',
  '/catering-menu/page-3.jpg',
]
const BOOKLET_TOTAL = BOOKLET_PAGES.length
const BOOKLET_FLIP_DURATION = 500

export default function CateringPage() {
  const [cart, setCart] = useState<Record<string, number>>({})
  const [formData, setFormData] = useState({
    bedrijfsnaam: '',
    contactpersoon: '',
    email: '',
    telefoon: '',
    datum: '',
    tijd: '',
    adres: '',
    personen: '',
    opmerkingen: '',
  })

  const addItem = (id: string) => {
    setCart((c) => ({ ...c, [id]: (c[id] || 0) + 1 }))
  }

  const removeItem = (id: string) => {
    setCart((c) => {
      const current = c[id] || 0
      if (current <= 1) {
        const next = { ...c }
        delete next[id]
        return next
      }
      return { ...c, [id]: current - 1 }
    })
  }

  const totalItems = useMemo(
    () => Object.values(cart).reduce((sum, qty) => sum + qty, 0),
    [cart]
  )

  const totalPrice = useMemo(
    () =>
      Object.entries(cart).reduce((sum, [id, qty]) => {
        const item = ALL_ITEMS.find((i) => i.id === id)
        return sum + (item ? item.price * qty : 0)
      }, 0),
    [cart]
  )

  const selectedItems = useMemo(
    () =>
      Object.entries(cart)
        .filter(([, qty]) => qty > 0)
        .map(([id, qty]) => {
          const item = ALL_ITEMS.find((i) => i.id === id)
          return { item: item!, qty }
        }),
    [cart]
  )

  const selectedItemsString = selectedItems
    .map(({ item, qty }) => `${qty}x ${item.name}`)
    .join(', ')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const scrollToForm = () => {
    document.getElementById('bestelformulier')?.scrollIntoView({ behavior: 'smooth' })
  }

  const [bookletIndex, setBookletIndex] = useState(0)
  const [bookletFlipping, setBookletFlipping] = useState(false)
  const [bookletFlipDir, setBookletFlipDir] = useState<'next' | 'prev'>('next')
  const bookletTouchStartX = useRef(0)
  const bookletTouchStartY = useRef(0)

  const bookletCanNext = bookletIndex < BOOKLET_TOTAL - 1
  const bookletCanPrev = bookletIndex > 0

  const bookletGoNext = () => {
    if (!bookletCanNext || bookletFlipping) return
    setBookletFlipDir('next')
    setBookletFlipping(true)
    setTimeout(() => {
      setBookletIndex((p) => Math.min(p + 1, BOOKLET_TOTAL - 1))
      setBookletFlipping(false)
    }, BOOKLET_FLIP_DURATION)
  }

  const bookletGoPrev = () => {
    if (!bookletCanPrev || bookletFlipping) return
    setBookletFlipDir('prev')
    setBookletFlipping(true)
    setTimeout(() => {
      setBookletIndex((p) => Math.max(0, p - 1))
      setBookletFlipping(false)
    }, BOOKLET_FLIP_DURATION)
  }

  const handleBookletTouchStart = (e: React.TouchEvent) => {
    bookletTouchStartX.current = e.touches[0].clientX
    bookletTouchStartY.current = e.touches[0].clientY
  }

  const handleBookletTouchEnd = (e: React.TouchEvent) => {
    const deltaX = e.changedTouches[0].clientX - bookletTouchStartX.current
    const deltaY = e.changedTouches[0].clientY - bookletTouchStartY.current
    if (Math.abs(deltaX) < Math.abs(deltaY)) return
    if (Math.abs(deltaX) < 50) return
    if (deltaX < 0) bookletGoNext()
    else bookletGoPrev()
  }

  const bookletFlipClass = bookletFlipping
    ? bookletFlipDir === 'next'
      ? 'flip-out-next'
      : 'flip-out-prev'
    : ''

  const inputClass =
    'w-full bg-transparent border-0 border-b border-[#D4C4B0] rounded-none px-0 py-3 font-sans text-[0.9rem] text-[#2C1F14] placeholder:text-[#6B4C35]/40 focus:border-terracotta focus:outline-none transition-colors'

  const labelClass =
    'block font-sans text-[0.65rem] uppercase tracking-[0.12em] text-[#6B4C35]/60 mb-1'

  return (
    <main className="overflow-hidden">
      <Navigation />

      {/* ── Hero ── */}
      <section className="bg-warm-mid px-6 pb-16 text-center" style={{ paddingTop: '10rem' }}>
        <div className="mx-auto max-w-2xl">
          <span className="mb-5 inline-block font-sans text-[0.65rem] uppercase tracking-[0.2em] text-gold">
            BEDRIJFSCATERING
          </span>
          <h1
            className="font-serif italic text-cream"
            style={{ fontSize: 'clamp(2.5rem,5vw,4rem)', lineHeight: 1.1 }}
          >
            Benny&apos;s voor jouw bedrijf
          </h1>
          <p className="mx-auto mt-5 max-w-md font-sans text-sm text-cream/70">
            Verse halal lunch voor jouw team, vergadering of event. Bestel direct via deze pagina.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {['Halal gecertificeerd', 'Bezorging in Dordrecht', 'Minimale bestelling op aanvraag'].map((badge) => (
              <span
                key={badge}
                className="font-sans text-[0.8rem] tracking-[0.04em] text-gold"
              >
                ✓ {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Menu Booklet ── */}
      <section className="bg-[#F0E9DE] px-6 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <span className="mb-4 inline-block font-sans text-[0.65rem] uppercase tracking-[0.2em] text-gold">
            CATERING MENUKAART
          </span>
          <h2 className="font-serif text-[clamp(2rem,3.5vw,2.8rem)] italic text-text-dark">
            Bekijk ons volledige menu
          </h2>
          <p className="mt-3 font-sans text-[0.8rem] text-[#6B4C35]/70">
            Swipe of gebruik de pijlen om te bladeren
          </p>
        </div>

        <div className="mx-auto mt-10" style={{ maxWidth: '500px' }}>
          <div
            className={`book-page page-shadow ${bookletFlipClass}`}
            onTouchStart={handleBookletTouchStart}
            onTouchEnd={handleBookletTouchEnd}
          >
            <div
              className="relative overflow-hidden rounded-sm bg-white"
              style={{
                aspectRatio: '1 / 1.415',
                boxShadow:
                  '0 4px 6px rgba(44,31,20,0.04), 0 20px 60px rgba(44,31,20,0.12), 0 0 0 1px rgba(212,168,83,0.12)',
              }}
            >
              <Image
                src={BOOKLET_PAGES[bookletIndex]}
                fill
                className="object-cover"
                alt={`Catering menukaart pagina ${bookletIndex + 1}`}
                sizes="(max-width: 500px) 100vw, 500px"
              />
            </div>
          </div>

          {/* Prev / Next + counter */}
          <div className="mt-6 flex items-center justify-center gap-6">
            <button
              type="button"
              onClick={bookletGoPrev}
              disabled={!bookletCanPrev}
              aria-label="Vorige pagina"
              className={`flex h-12 w-12 items-center justify-center rounded-full border transition-all duration-200 ${
                bookletCanPrev
                  ? 'border-[#2C1F14] bg-white text-[#2C1F14] hover:bg-[#2C1F14] hover:text-white'
                  : 'cursor-not-allowed border-[#D4C4B0] bg-transparent text-[#D4C4B0]'
              }`}
            >
              ←
            </button>

            <span className="font-sans text-sm font-medium text-[#2C1F14]">
              {bookletIndex + 1} / {BOOKLET_TOTAL}
            </span>

            <button
              type="button"
              onClick={bookletGoNext}
              disabled={!bookletCanNext}
              aria-label="Volgende pagina"
              className={`flex h-12 w-12 items-center justify-center rounded-full border transition-all duration-200 ${
                bookletCanNext
                  ? 'border-[#2C1F14] bg-white text-[#2C1F14] hover:bg-[#2C1F14] hover:text-white'
                  : 'cursor-not-allowed border-[#D4C4B0] bg-transparent text-[#D4C4B0]'
              }`}
            >
              →
            </button>
          </div>

          {/* Download */}
          <div className="mt-6 text-center">
            <a
              href="/catering-menu/menukaart.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full border border-terracotta px-8 py-3 font-sans text-sm text-terracotta transition-all hover:bg-terracotta hover:text-white"
            >
              Download menukaart (PDF)
            </a>
          </div>
        </div>
      </section>

      {/* ── Hoe het werkt ── */}
      <section className="bg-cream px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
            {STEPS.map((step) => (
              <div key={step.number} className="flex flex-col items-center text-center">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-terracotta font-serif text-xl text-white">
                  {step.number}
                </div>
                <h3 className="font-serif text-xl text-text-dark">{step.title}</h3>
                <p className="mt-2 font-sans text-sm text-[#6B4C35]">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Catering Menu ── */}
      <section className="bg-cream px-8 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <span className="mb-4 inline-block font-sans text-[0.65rem] uppercase tracking-[0.2em] text-gold">
              CATERING MENU
            </span>
            <h2 className="font-serif text-[clamp(2rem,3.5vw,2.8rem)] italic text-text-dark">
              Stel jouw pakket samen
            </h2>
          </div>

          {CATEGORIES.map((category) => (
            <div key={category.title} className="mb-12 last:mb-0">
              <div className="mb-5 flex items-baseline gap-3">
                <h3 className="font-serif text-2xl italic text-terracotta">{category.title}</h3>
                {category.priceNote && (
                  <span className="font-sans text-sm text-[#6B4C35]/70">{category.priceNote}</span>
                )}
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {category.items.map((item) => {
                  const qty = cart[item.id] || 0
                  return (
                    <div
                      key={item.id}
                      className="flex items-center justify-between gap-4 rounded-lg border border-[#D4C4B0] bg-white p-4"
                    >
                      <div className="min-w-0">
                        <h4 className="font-serif text-[1.1rem] text-[#2C1F14]">{item.name}</h4>
                        <p className="mt-1 line-clamp-2 font-sans text-[0.8rem] text-[#6B4C35]">
                          {item.description}
                        </p>
                      </div>

                      <div className="flex flex-shrink-0 items-center gap-3">
                        <span className="font-sans font-medium text-terracotta">
                          {category.priceNote ?? formatPrice(item.price)}
                        </span>

                        {qty === 0 ? (
                          <button
                            type="button"
                            onClick={() => addItem(item.id)}
                            aria-label={`${item.name} toevoegen`}
                            className="flex h-8 w-8 items-center justify-center rounded-full bg-terracotta text-white transition-all hover:brightness-110"
                          >
                            <Plus size={16} />
                          </button>
                        ) : (
                          <div className="flex items-center gap-2">
                            <button
                              type="button"
                              onClick={() => removeItem(item.id)}
                              aria-label={`${item.name} verwijderen`}
                              className="flex h-7 w-7 items-center justify-center rounded-full border border-terracotta text-terracotta transition-all hover:bg-terracotta hover:text-white"
                            >
                              <Minus size={14} />
                            </button>
                            <span className="w-4 text-center font-sans text-sm font-medium text-[#2C1F14]">
                              {qty}
                            </span>
                            <button
                              type="button"
                              onClick={() => addItem(item.id)}
                              aria-label={`${item.name} toevoegen`}
                              className="flex h-7 w-7 items-center justify-center rounded-full bg-terracotta text-white transition-all hover:brightness-110"
                            >
                              <Plus size={14} />
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Floating order summary ── */}
      {totalItems > 0 && (
        <div
          className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 sm:px-10"
          style={{ background: '#2C1F14' }}
        >
          <span className="font-sans text-sm text-cream">
            {totalItems} {totalItems === 1 ? 'item' : 'items'} geselecteerd
          </span>
          <button
            type="button"
            onClick={scrollToForm}
            className="rounded-sm bg-terracotta px-6 py-3 font-sans text-sm font-medium text-white transition-all hover:brightness-110"
          >
            Ga naar bestellen →
          </button>
        </div>
      )}

      {/* ── Bestelformulier ── */}
      <section id="bestelformulier" className="bg-[#F0E9DE] px-6 py-16">
        <div className="mx-auto max-w-2xl">
          <div className="mb-10 text-center">
            <span className="mb-4 inline-block font-sans text-[0.65rem] uppercase tracking-[0.2em] text-gold">
              JOUW BESTELLING
            </span>
            <h2 className="font-serif text-[clamp(2rem,3.5vw,2.8rem)] italic text-text-dark">
              Bevestig je catering aanvraag
            </h2>
          </div>

          {/* Order summary */}
          <div className="mb-10 rounded-xl border border-[#D4C4B0] bg-white p-6">
            <p className="mb-4 font-sans text-[0.65rem] uppercase tracking-[0.15em] text-gold">
              Jouw selectie
            </p>
            {selectedItems.length === 0 ? (
              <p className="font-sans text-sm text-[#6B4C35]/70">
                Nog geen gerechten geselecteerd. Kies hierboven uit het catering menu.
              </p>
            ) : (
              <>
                <ul className="space-y-2">
                  {selectedItems.map(({ item, qty }) => (
                    <li
                      key={item.id}
                      className="flex items-center justify-between font-sans text-sm text-[#2C1F14]"
                    >
                      <span>
                        {qty}x {item.name}
                      </span>
                      <span className="text-[#6B4C35]">{formatPrice(item.price * qty)}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex items-center justify-between border-t border-[#D4C4B0] pt-4">
                  <span className="font-sans text-sm font-medium text-[#2C1F14]">Totaal</span>
                  <span className="font-sans text-sm font-medium text-terracotta">
                    {formatPrice(totalPrice)}
                  </span>
                </div>
              </>
            )}
          </div>

          {/* Form */}
          <form action="https://formspree.io/f/PLACEHOLDER" method="POST">
            <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2 mb-7">
              <div>
                <label className={labelClass}>Bedrijfsnaam *</label>
                <input
                  type="text"
                  name="bedrijfsnaam"
                  placeholder="Naam van je bedrijf"
                  required
                  value={formData.bedrijfsnaam}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>Contactpersoon *</label>
                <input
                  type="text"
                  name="contactpersoon"
                  placeholder="Jouw naam"
                  required
                  value={formData.contactpersoon}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
            </div>

            <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2 mb-7">
              <div>
                <label className={labelClass}>E-mail *</label>
                <input
                  type="email"
                  name="email"
                  placeholder="jouw@bedrijf.nl"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>Telefoon *</label>
                <input
                  type="tel"
                  name="telefoon"
                  placeholder="+31 6 00 00 00 00"
                  required
                  value={formData.telefoon}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
            </div>

            <div className="flex items-center gap-4 my-7">
              <div className="flex-1 h-px bg-[#D4C4B0]" />
              <span className="text-gold text-xs">◆</span>
              <div className="flex-1 h-px bg-[#D4C4B0]" />
            </div>

            <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2 mb-7">
              <div>
                <label className={labelClass}>Datum levering *</label>
                <input
                  type="date"
                  name="datum"
                  required
                  value={formData.datum}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>Tijd levering *</label>
                <input
                  type="time"
                  name="tijd"
                  required
                  value={formData.tijd}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
            </div>

            <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2 mb-7">
              <div>
                <label className={labelClass}>Leveradres (straat + stad) *</label>
                <input
                  type="text"
                  name="adres"
                  placeholder="Straatnaam 1, Dordrecht"
                  required
                  value={formData.adres}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>Aantal personen *</label>
                <input
                  type="number"
                  name="personen"
                  placeholder="10"
                  min="1"
                  required
                  value={formData.personen}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
            </div>

            <div className="mb-7">
              <label className={labelClass}>Opmerkingen / dieetwensen</label>
              <textarea
                name="opmerkingen"
                placeholder="Allergieën, dieetwensen of overige opmerkingen"
                rows={3}
                value={formData.opmerkingen}
                onChange={handleChange}
                className={inputClass}
                style={{ resize: 'vertical' }}
              />
            </div>

            <input type="hidden" name="bestelde_items" value={selectedItemsString} readOnly />

            <button
              type="submit"
              className="w-full mt-2 py-4 font-sans text-sm tracking-[0.12em] uppercase font-medium text-white transition-all duration-300 hover:brightness-110 active:scale-[0.99] rounded-sm bg-terracotta"
            >
              Verstuur catering aanvraag →
            </button>

            <p className="text-center font-sans text-[0.7rem] text-[#6B4C35] opacity-50 mt-4">
              Je gegevens worden alleen gebruikt om deze cateringaanvraag te verwerken en worden niet gedeeld met derden.
            </p>
          </form>

          {/* WhatsApp / call alternative */}
          <div className="flex items-center gap-4 mt-10 mb-6">
            <div className="flex-1 h-px bg-[#D4C4B0]" />
            <span className="font-sans text-[0.65rem] uppercase tracking-[0.15em] text-[#6B4C35] opacity-50">
              of
            </span>
            <div className="flex-1 h-px bg-[#D4C4B0]" />
          </div>
          <div className="text-center">
            <p className="mb-4 font-sans text-sm text-[#6B4C35]">
              Liever direct bellen of appen?
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="tel:+31685091092"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-sans text-sm text-[#2C1F14] border border-[#D4C4B0] transition-all hover:border-terracotta"
              >
                Bel ons
              </a>
              <a
                href="https://wa.me/31685091092"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-sans text-sm text-white transition-all hover:brightness-110"
                style={{ background: '#25D366' }}
              >
                App ons op WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

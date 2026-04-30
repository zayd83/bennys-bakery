import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Benny's Bakery | Lunchroom & Bakkerij Dordrecht | Halal",
  description: "Benny's Bakery — verse lunchroom & Marokkaanse bakkerij in Dordrecht. Halal eten, vers gebakken brood, patisserie, ontbijt en lunch. Elke dag open in Dordrecht, Drechtsteden.",
  keywords: ['bakkerij Dordrecht', 'lunchroom Dordrecht', 'Marokkaanse bakkerij Dordrecht', 'halal eten Dordrecht', 'eten Dordrecht', 'halal bakkerij', 'Marokkaanse lunchroom', 'Drechtsteden', 'Zuid-Holland', 'vers brood', 'patisserie', 'ontbijt Dordrecht', 'lunch Dordrecht', 'ambachtelijk'],
  authors: [{ name: "Benny's Bakery" }],
  openGraph: {
    title: "Benny's Bakery | Vers • Lokaal • Ambachtelijk",
    description: "Marokkaans-geïnspireerde ambachtelijke bakkerij in Dordrecht",
    type: 'website',
    locale: 'nl_NL',
  },
}

export const viewport: Viewport = {
  themeColor: '#0D0B07',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="nl" className={`${cormorant.variable} ${dmSans.variable} bg-cream`}>
      <body className="font-sans antialiased">
        {children}
        {/* Floating WhatsApp button */}
        <a
          href="https://wa.me/31685091092?text=Hallo%2C%20ik%20wil%20graag%20bestellen!"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Bestel via WhatsApp"
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 shadow-lg transition-all hover:brightness-110 active:scale-95"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white flex-shrink-0">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
          </svg>
          <span className="font-sans text-sm font-medium text-white">Bestel direct</span>
        </a>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

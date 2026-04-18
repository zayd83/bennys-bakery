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
  title: "Benny's Bakery | Vers • Lokaal • Ambachtelijk | Dordrecht",
  description: "Benny's Bakery - Marokkaans-geïnspireerde ambachtelijke bakkerij in Dordrecht. Vers gebakken brood, patisserie, ontbijt en lunch. Traditioneel vakmanschap met moderne flair.",
  keywords: ['bakkerij', 'Dordrecht', 'Marokkaans', 'ambachtelijk', 'vers brood', 'patisserie', 'ontbijt', 'lunch'],
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
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

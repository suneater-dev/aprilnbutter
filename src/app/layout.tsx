import type { Metadata } from 'next'
import './globals.css'
import BromaStyleHeader from '@/components/layout/BromaStyleHeader'
import MinimalFooter from '@/components/layout/MinimalFooter'

export const metadata: Metadata = {
  title: {
    default: 'April & Butter Bakery',
    template: '%s | April & Butter Bakery'
  },
  description: 'A cozy, earth-toned bakery offering buttery croissants, soft sponge cakes, and delicate pastries made fresh daily with wholesome ingredients.',
  keywords: ['bakery', 'croissants', 'pastries', 'fresh bread', 'cakes', 'April & Butter'],
  authors: [{ name: 'April & Butter Bakery' }],
  creator: 'April & Butter Bakery',
  publisher: 'April & Butter Bakery',
  metadataBase: new URL('https://aprilandbutter.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aprilandbutter.com',
    title: 'April & Butter Bakery',
    description: 'A cozy, earth-toned bakery offering buttery croissants, soft sponge cakes, and delicate pastries made fresh daily.',
    siteName: 'April & Butter Bakery',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'April & Butter Bakery',
    description: 'A cozy, earth-toned bakery offering buttery croissants, soft sponge cakes, and delicate pastries made fresh daily.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <BromaStyleHeader />
        {children}
        <MinimalFooter />
      </body>
    </html>
  )
}
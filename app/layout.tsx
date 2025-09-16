import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Swing Accelerate - Swing Trade Alerts, Education & Tools',
  description: 'A Discord community with swing trade alerts, education, and tools designed to help traders accelerate profitability through a math-driven swing model.',
  keywords: 'swing trading, trading alerts, trading education, trading tools, Discord community, swing trades',
  authors: [{ name: 'Luke Rosenthal' }],
  creator: 'Luke Rosenthal',
  publisher: 'Swing Accelerate',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://swingaccelerate.com',
    title: 'Swing Accelerate - Swing Trade Alerts, Education & Tools',
    description: 'A Discord community with swing trade alerts, education, and tools designed to help traders accelerate profitability through a math-driven swing model.',
    siteName: 'Swing Accelerate',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Swing Accelerate - Swing Trade Alerts, Education & Tools',
    description: 'A Discord community with swing trade alerts, education, and tools designed to help traders accelerate profitability through a math-driven swing model.',
    creator: '@luke_vol',
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
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Swing Accelerate",
              "url": "https://swingaccelerate.com",
              "logo": "https://swingaccelerate.com/logo.png",
              "description": "A Discord community with swing trade alerts, education, and tools designed to help traders accelerate profitability through a math-driven swing model.",
              "founder": {
                "@type": "Person",
                "name": "Luke Rosenthal"
              },
              "sameAs": [
                "https://x.com/luke_vol",
                "https://www.youtube.com/@Lukevol"
              ]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "Swing Accelerate Membership",
              "description": "A Discord community with swing trade alerts, education, and tools designed to help traders accelerate profitability through a math-driven swing model.",
              "brand": {
                "@type": "Brand",
                "name": "Swing Accelerate"
              },
              "offers": {
                "@type": "Offer",
                "price": "49",
                "priceCurrency": "USD",
                "priceValidUntil": "2024-12-31",
                "availability": "https://schema.org/InStock"
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}


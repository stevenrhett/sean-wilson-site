import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Strategy - Bold Business Solutions That Drive Results',
  description: 'Transform your business with our bold Strategy, cutting-edge solutions, and proven methodologies. Get results that matter.',
  keywords: [
    'business strategy',
    'consulting',
    'growth strategy',
    'business transformation',
    'strategic planning',
    'business solutions',
    'bold Strategy',
    'results-driven',
    'business consulting'
  ],
  authors: [{ name: 'Strategy Team' }],
  creator: 'Strategy',
  publisher: 'Strategy',
  metadataBase: new URL('https://Strategy.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Strategy - Bold Business Solutions',
    description: 'Transform your business with our bold Strategy and cutting-edge solutions.',
    url: 'https://Strategy.vercel.app',
    siteName: 'Strategy',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Strategy - Bold Business Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Strategy - Bold Business Solutions',
    description: 'Transform your business with our bold Strategy and cutting-edge solutions.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#ff6b35" />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased bg-bold-pattern`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

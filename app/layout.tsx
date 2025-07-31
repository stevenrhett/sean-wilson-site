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
  title: 'Your Company - Executive Coaching & Leadership Development',
  description: 'Transform your leadership journey with our comprehensive executive coaching, organizational development, and strategic consulting services. Personalized guidance that transcends conventional boundaries.',
  keywords: [
    'executive coaching',
    'leadership development',
    'organizational development',
    'crisis management',
    'strategic communication',
    'business consulting',
    'leadership training',
    'community-centered solutions',
    'transformational leadership',
    'nonprofit consulting'
  ],
  authors: [{ name: 'Your Company' }],
  creator: 'Your Company',
  publisher: 'Your Company',
  metadataBase: new URL('https://yourcompany.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Your Company - Executive Coaching & Leadership Development',
    description: 'Transform your leadership journey with our comprehensive executive coaching and strategic consulting services.',
    url: 'https://yourcompany.vercel.app',
    siteName: 'Your Company',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Your Company - Executive Coaching & Leadership Development',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Your Company - Executive Coaching & Leadership Development',
    description: 'Transform your leadership journey with our comprehensive executive coaching and strategic consulting services.',
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
        <meta name="theme-color" content="#ff4c00" />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased bg-bold-pattern`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

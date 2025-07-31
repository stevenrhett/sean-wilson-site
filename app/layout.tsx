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
  title: 'Strategy by Sean Wilson - Leadership Rooted in Liberation',
  description: 'Empowering people, campaigns, and institutions to build justice-centered solutions. Leadership development, criminal justice campaigns, and strategic advising for social change.',
  keywords: [
    'Sean Wilson',
    'leadership development',
    'criminal justice reform',
    'social change strategy',
    'justice-centered leadership',
    'campaign strategy',
    'policy consulting',
    'strategic advising',
    'emancipated strategies',
    'liberation leadership',
    'organizational development',
    'keynote speaker'
  ],
  authors: [{ name: 'Sean Wilson' }],
  creator: 'Sean Wilson',
  publisher: 'Strategy by Sean Wilson',
  metadataBase: new URL('https://strategybyseanwilson.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Strategy by Sean Wilson - Leadership Rooted in Liberation',
    description: 'Empowering people, campaigns, and institutions to build justice-centered solutions.',
    url: 'https://strategybyseanwilson.com',
    siteName: 'Strategy by Sean Wilson',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/assets/images/sw-headshot.jpeg',
        width: 1200,
        height: 630,
        alt: 'Sean Wilson - Leadership Rooted in Liberation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Strategy by Sean Wilson - Leadership Rooted in Liberation',
    description: 'Empowering people, campaigns, and institutions to build justice-centered solutions.',
    images: ['/assets/images/sw-headshot.jpeg'],
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

// Asset management utilities for Sean Wilson website
// This file centralizes all asset paths and provides helper functions

export const ASSETS = {
  // Images
  images: {
    hero: {
      background: '/images/hero/strategy-background.webp',
      seanPhoto: '/images/hero/sean-professional.webp',
      pattern: '/images/hero/strategy-pattern.svg'
    },
    about: {
      seanBusiness: '/images/about/sean-business-suit.webp',
      seanWorking: '/images/about/sean-consulting.webp',
      seanSpeaking: '/images/about/sean-speaking.webp',
      workspace: '/images/about/workspace-background.webp'
    },
    services: {
      strategy: '/images/services/strategy-icon.svg',
      consulting: '/images/services/consulting-icon.svg',
      growth: '/images/services/growth-icon.svg',
      digital: '/images/services/digital-icon.svg',
      analytics: '/images/services/analytics-icon.svg',
      transformation: '/images/services/transformation-icon.svg'
    },
    portfolio: {
      caseStudy1: '/images/portfolio/case-study-1.webp',
      caseStudy2: '/images/portfolio/case-study-2.webp',
      caseStudy3: '/images/portfolio/case-study-3.webp',
      results: '/images/portfolio/results-dashboard.webp'
    },
    testimonials: {
      // Note: Only use with explicit client permission
      placeholder: '/images/testimonials/client-placeholder.svg',
      ratings: '/images/testimonials/five-stars.svg'
    },
    backgrounds: {
      gradient: '/images/backgrounds/bold-gradient.svg',
      pattern: '/images/backgrounds/strategy-pattern.svg',
      geometric: '/images/backgrounds/geometric-pattern.svg',
      office: '/images/backgrounds/modern-office.webp'
    }
  },

  // Icons and Favicons
  icons: {
    favicon: '/favicon.ico',
    appleTouchIcon: '/icons/apple-touch-icon.png',
    favicon32: '/icons/favicon-32x32.png',
    favicon16: '/icons/favicon-16x16.png',
    androidChrome192: '/icons/android-chrome-192x192.png',
    androidChrome512: '/icons/android-chrome-512x512.png',
    logo: '/icons/Strategy-logo.svg'
  },

  // Documents and Downloads
  documents: {
    brochures: {
      serviceBrochure: '/documents/brochures/Strategy-services.pdf',
      companyOverview: '/documents/brochures/company-overview.pdf'
    },
    caseStudies: {
      digitalTransformation: '/documents/case-studies/digital-transformation.pdf',
      growthStrategy: '/documents/case-studies/growth-strategy.pdf',
      businessOptimization: '/documents/case-studies/business-optimization.pdf'
    },
    resources: {
      strategyGuide: '/documents/resources/business-strategy-guide.pdf',
      growthFramework: '/documents/resources/growth-framework.pdf',
      digitalPlaybook: '/documents/resources/digital-transformation-playbook.pdf'
    }
  },

  // Patterns and Graphics
  patterns: {
    heroPattern: '/patterns/hero-pattern.svg',
    strategicPattern: '/patterns/strategic-elements.svg',
    gradientOverlay: '/patterns/gradient-overlay.svg',
    decorativeLines: '/patterns/decorative-lines.svg'
  },

  // Social Media and SEO
  social: {
    ogImage: '/images/social/og-image.png',
    twitterCard: '/images/social/twitter-card.png',
    linkedinCard: '/images/social/linkedin-card.png'
  }
} as const

// Helper functions for asset management
export const getAssetPath = (category: keyof typeof ASSETS, subcategory: string, asset: string): string => {
  const categoryAssets = ASSETS[category] as any
  const subcategoryAssets = categoryAssets[subcategory]
  return subcategoryAssets?.[asset] || ''
}

// Image optimization helpers
export const getOptimizedImageSizes = (baseWidth: number) => ({
  small: Math.round(baseWidth * 0.5),
  medium: Math.round(baseWidth * 0.75),
  large: baseWidth,
  xlarge: Math.round(baseWidth * 1.5)
})

// Responsive image srcSet generator
export const generateSrcSet = (basePath: string, sizes: number[]): string => {
  return sizes
    .map(size => {
      const extension = basePath.split('.').pop()
      const pathWithoutExt = basePath.replace(`.${extension}`, '')
      return `${pathWithoutExt}-${size}w.${extension} ${size}w`
    })
    .join(', ')
}

// WebP fallback helper
export const getImageWithFallback = (webpPath: string, fallbackPath: string) => ({
  webp: webpPath,
  fallback: fallbackPath
})

// Asset preloading
export const preloadCriticalAssets = () => {
  const criticalAssets = [
    ASSETS.images.hero.background,
    ASSETS.images.hero.seanPhoto,
    ASSETS.icons.favicon32,
    ASSETS.patterns.heroPattern
  ]

  return criticalAssets.map(asset => ({
    rel: 'preload',
    href: asset,
    as: asset.endsWith('.svg') ? 'image' : 'image'
  }))
}

// Social media meta image helpers
export const getSocialMetaImages = () => ({
  openGraph: {
    image: ASSETS.social.ogImage,
    width: 1200,
    height: 630,
    alt: 'Strategy - Bold Business Solutions That Drive Results'
  },
  twitter: {
    image: ASSETS.social.twitterCard,
    width: 1200,
    height: 600,
    alt: 'Sean Wilson - Business Strategy Consultant'
  }
})

// Favicon configuration
export const getFaviconConfig = () => [
  {
    rel: 'icon',
    type: 'image/x-icon',
    href: ASSETS.icons.favicon
  },
  {
    rel: 'apple-touch-icon',
    sizes: '180x180',
    href: ASSETS.icons.appleTouchIcon
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '32x32',
    href: ASSETS.icons.favicon32
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '16x16',
    href: ASSETS.icons.favicon16
  }
]

// Export for easy access
export default ASSETS

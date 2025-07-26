# Assets Organization & Optimization Guide

## Directory Structure

```
/public/assets/
├── images/
│   ├── hero/                 # Hero section images
│   ├── services/             # Service-related images
│   ├── team/                 # Team photos
│   ├── testimonials/         # Client photos
│   ├── logos/                # Company/client logos
│   ├── backgrounds/          # Background images
│   └── general/              # General purpose images
├── icons/
│   ├── ui/                   # UI icons (arrows, buttons, etc.)
│   ├── social/               # Social media icons
│   ├── services/             # Service-specific icons
│   └── brand/                # Brand icons and favicons
├── documents/
│   ├── brochures/            # Marketing brochures
│   ├── case-studies/         # Case study PDFs
│   ├── presentations/        # Presentation files
│   └── downloads/            # General downloads
└── videos/
    ├── hero/                 # Hero background videos
    ├── testimonials/         # Video testimonials
    ├── demos/                # Product/service demos
    └── presentations/        # Video presentations
```

## Asset Optimization Guidelines

### Images

#### Format Recommendations
1. **WebP** - Primary format for web images (90% smaller than JPEG)
2. **AVIF** - Next-gen format where supported (50% smaller than WebP)
3. **JPEG** - Fallback for photographs
4. **PNG** - For images with transparency
5. **SVG** - For icons and simple graphics

#### Sizing Guidelines
```
Mobile:     320px - 768px   (1x, 2x retina)
Tablet:     768px - 1024px  (1x, 2x retina)
Desktop:    1024px+         (1x, 2x retina)
```

#### Naming Convention
```
[purpose]-[description]-[size].[format]
Examples:
- hero-background-1920w.webp
- service-consulting-icon-48w.svg
- team-john-doe-300w.webp
- logo-company-brand-200w.svg
```

### Icons

#### SVG Optimization
- Remove unnecessary metadata
- Simplify paths where possible
- Use consistent viewBox dimensions
- Optimize for small file sizes

#### Icon Sets
```
UI Icons:     24px, 32px, 48px
Social Icons: 32px, 48px
Service Icons: 64px, 96px, 128px
Brand Icons:  Variable sizes
```

### Videos

#### Format & Compression
- **MP4** (H.264) - Primary format
- **WebM** - Alternative for better compression
- Optimize for web delivery (max 5MB for background videos)
- Provide poster images for all videos

### Documents

#### PDF Optimization
- Compress for web viewing
- Use descriptive filenames
- Ensure accessibility compliance
- Maximum 10MB per file

## Implementation Examples

### Responsive Images in Next.js
```jsx
import Image from 'next/image'

// Responsive image with multiple sources
<picture>
  <source srcSet="/assets/images/hero/background-1920w.webp" media="(min-width: 1024px)" />
  <source srcSet="/assets/images/hero/background-768w.webp" media="(min-width: 768px)" />
  <Image
    src="/assets/images/hero/background-375w.webp"
    alt="Hero background"
    width={1920}
    height={1080}
    priority
  />
</picture>
```

### Icon Components
```jsx
// Create reusable icon components
const ServiceIcon = ({ name, size = 48 }) => (
  <Image
    src={`/assets/icons/services/${name}.svg`}
    alt={`${name} service icon`}
    width={size}
    height={size}
  />
)
```

## Mobile Optimization Strategy

### 1. Lazy Loading
```jsx
// Implement lazy loading for below-fold images
<Image
  src="/assets/images/services/consulting.webp"
  alt="Consulting services"
  loading="lazy"
  width={400}
  height={300}
/>
```

### 2. Progressive Enhancement
```jsx
// Provide fallbacks for unsupported formats
<picture>
  <source srcSet="image.avif" type="image/avif" />
  <source srcSet="image.webp" type="image/webp" />
  <img src="image.jpg" alt="Fallback" />
</picture>
```

### 3. Bandwidth Considerations
- Serve different image sizes based on device
- Use CSS `image-set()` for high-DPI displays
- Implement adaptive loading based on connection speed

## Asset Loading Performance

### Critical Assets (Load First)
1. Logo and brand assets
2. Hero section images
3. Above-the-fold icons
4. Essential UI elements

### Non-Critical Assets (Lazy Load)
1. Below-the-fold images
2. Background videos
3. Testimonial photos
4. Gallery images

### Preloading Strategy
```html
<!-- Preload critical images -->
<link rel="preload" as="image" href="/assets/images/hero/background-1920w.webp" />

<!-- Prefetch likely-needed assets -->
<link rel="prefetch" href="/assets/images/services/consulting.webp" />
```

## CDN & Delivery Optimization

### Recommended CDN Features
1. **Image Optimization** - Automatic format conversion
2. **Compression** - Gzip/Brotli compression
3. **Global Distribution** - Edge caching
4. **Responsive Images** - Dynamic resizing

### Cache Headers
```
Images:    Cache-Control: public, max-age=31536000 (1 year)
Videos:    Cache-Control: public, max-age=31536000 (1 year)
Documents: Cache-Control: public, max-age=86400 (1 day)
```

## Accessibility Considerations

### Alt Text Guidelines
```jsx
// Descriptive alt text for meaningful images
<Image src="/assets/images/team/john-doe.webp" alt="John Doe, Senior Consultant" />

// Empty alt for decorative images
<Image src="/assets/images/backgrounds/pattern.webp" alt="" />
```

### Document Accessibility
- Ensure PDFs are screen reader compatible
- Provide text alternatives for complex graphics
- Use proper heading structures in documents

## File Size Targets

### Mobile-Optimized Sizes
```
Hero Images:    < 200KB (compressed)
Service Icons:  < 5KB (SVG)
Team Photos:    < 50KB (WebP)
Background:     < 100KB (WebP)
Videos:         < 5MB (background)
Documents:      < 2MB (compressed PDF)
```

## Quality Assurance Checklist

### Before Adding Assets
- [ ] Optimized for target file size
- [ ] Proper naming convention used
- [ ] Multiple formats provided where beneficial
- [ ] Accessibility requirements met
- [ ] Mobile-friendly dimensions

### Performance Testing
- [ ] Lighthouse performance score maintained
- [ ] Mobile page load time < 3 seconds
- [ ] Images load without layout shift
- [ ] No broken asset links

## Tools & Resources

### Image Optimization
- **Squoosh.app** - Online image compression
- **ImageOptim** - Mac image optimization
- **Sharp** - Node.js image processing
- **Next.js Image Optimization** - Built-in optimization

### Performance Testing
- **Lighthouse** - Google's performance tool
- **WebPageTest** - Detailed performance analysis
- **Chrome DevTools** - Network and performance tabs

### Asset Management
- **Cloudinary** - Comprehensive asset management
- **ImageKit** - Image optimization CDN
- **Vercel** - Built-in asset optimization

## Future Considerations

### Emerging Formats
1. **AVIF** - Next-generation image format
2. **WebP Animation** - Alternative to GIF
3. **HEIF** - High Efficiency Image Format

### Performance Improvements
1. **HTTP/3** - Faster asset delivery
2. **Service Workers** - Offline asset caching
3. **WebAssembly** - Client-side image processing

This comprehensive asset strategy ensures optimal performance across all devices while maintaining high visual quality and accessibility standards.

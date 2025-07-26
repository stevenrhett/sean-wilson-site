# Sean Wilson Website Assets

This directory contains all static assets for the Sean Wilson (Strategy) website.

## 📁 Directory Structure

```
public/
├── images/           # Photos, graphics, and visual content
│   ├── hero/        # Hero section images
│   ├── about/       # Profile photos and background images
│   ├── services/    # Service-related imagery
│   ├── testimonials/ # Client photos (with permission)
│   ├── portfolio/   # Work samples and case studies
│   └── backgrounds/ # Background patterns and textures
├── icons/           # Favicons and app icons
│   ├── favicon.ico
│   ├── apple-touch-icon.png
│   ├── favicon-32x32.png
│   ├── favicon-16x16.png
│   └── site.webmanifest
├── documents/       # PDFs, brochures, and downloadable content
│   ├── brochures/   # Marketing materials
│   ├── case-studies/ # Portfolio PDFs
│   └── resources/   # Free resources and guides
└── patterns/        # SVG patterns and graphics
    ├── hero-pattern.svg
    └── decorative-elements.svg
```

## 🖼️ Image Requirements

### Hero Section
- **Main hero image**: High-quality, professional background (1920x1080px minimum)
- **Sean's photo**: Professional headshot (800x800px, square format)
- **Background pattern**: Subtle SVG pattern for visual interest

### About Section
- **Professional photos**: Multiple angles of Sean in business attire
- **Background images**: Office, workspace, or professional settings
- **Lifestyle photos**: Speaking, consulting, or working scenes

### Services Section
- **Service icons**: Custom or professional icons for each service
- **Process diagrams**: Visual representation of workflow
- **Infographics**: Statistics and success rate visualizations

### Portfolio/Case Studies
- **Before/after graphics**: Visual representations of results
- **Charts and graphs**: Performance visualizations
- **Client work samples**: Screenshots or mockups (with permission)

## 🎨 Image Specifications

### Formats
- **Photos**: WebP (primary), JPEG (fallback)
- **Graphics**: SVG (vector), PNG (with transparency)
- **Icons**: SVG preferred, PNG for complex icons

### Sizes
- **Hero images**: 1920x1080px (16:9 ratio)
- **Profile photos**: 800x800px (1:1 ratio)
- **Service icons**: 64x64px (SVG scalable)
- **Thumbnails**: 400x300px (4:3 ratio)
- **Backgrounds**: 2560x1440px for high-DPI displays

### Optimization
- Compress all images for web
- Use Next.js Image component for automatic optimization
- Provide multiple sizes for responsive images
- Include alt text for accessibility

## 📄 Document Assets

### Marketing Materials
- Company brochure (PDF)
- Service overview sheets
- Case studies compilation
- Pricing information

### Resources
- Strategy guides
- Business templates
- Checklists and frameworks
- Whitepapers

## 🔧 Technical Assets

### Favicons
- favicon.ico (32x32, 16x16 multi-size)
- apple-touch-icon.png (180x180)
- favicon-32x32.png
- favicon-16x16.png
- android-chrome-192x192.png
- android-chrome-512x512.png

### SEO Assets
- Open Graph images (1200x630px)
- Twitter Card images (1200x600px)
- Schema.org structured data images

## 📱 Responsive Considerations

### Breakpoints
- Mobile: 320px - 768px
- Tablet: 768px - 1024px  
- Desktop: 1024px+
- Large Desktop: 1440px+

### Image Variants
Provide multiple sizes for each image:
- Small (400px width)
- Medium (800px width)
- Large (1200px width)
- Extra Large (1920px width)

## 🚀 Implementation

### Using Next.js Image Component
```jsx
import Image from 'next/image'

// Optimized image with responsive sizing
<Image
  src="/images/hero/sean-professional.webp"
  alt="Sean Wilson - Business Strategy Consultant"
  width={800}
  height={600}
  priority
  className="rounded-lg shadow-xl"
/>
```

### Background Images
```css
.hero-background {
  background-image: url('/images/hero/strategy-background.webp');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
```

## 📋 Asset Checklist

### High Priority Assets Needed
- [ ] Sean's professional headshot
- [ ] Company logo variations
- [ ] Hero background image
- [ ] Favicon set
- [ ] Open Graph images

### Medium Priority Assets
- [ ] Service illustration icons
- [ ] Portfolio screenshots
- [ ] Background patterns
- [ ] Testimonial client photos (with permission)

### Nice-to-Have Assets
- [ ] Video testimonials
- [ ] Office/workspace photos
- [ ] Interactive infographics
- [ ] Animation assets

The asset structure is now ready to support a professional, high-converting website for Sean Wilson's strategy consulting business.

# Assets Directory

This directory contains all static assets for the Sean Wilson website project.

## Directory Structure

```
/public/assets/
├── images/         # All image files (photos, graphics, illustrations)
├── icons/          # Icon files (SVG, PNG icons)
├── documents/      # PDF files, documents, downloadable content
├── videos/         # Video files and media
└── README.md       # This file
```

## Guidelines

### Images
- Use WebP format when possible for better performance
- Optimize images for web (compress without losing quality)
- Use descriptive filenames (e.g., `hero-background.webp`, `about-team-photo.jpg`)
- Consider providing multiple sizes for responsive images

### Icons
- Prefer SVG format for scalability
- Use consistent naming convention (e.g., `icon-arrow-right.svg`)
- Keep file sizes small

### Documents
- Compress PDF files
- Use descriptive filenames
- Ensure accessibility compliance

### Videos
- Optimize for web delivery
- Provide multiple formats when necessary (MP4, WebM)
- Consider using video compression

## Usage in Next.js

Assets in this directory can be referenced from the root:

```jsx
// Images
<img src="/assets/images/hero-background.webp" alt="Hero background" />

// Icons
<img src="/assets/icons/icon-arrow.svg" alt="Arrow icon" />

// Documents
<a href="/assets/documents/brochure.pdf" download>Download Brochure</a>
```

## Mobile Optimization

- Ensure all images have appropriate alt text
- Use responsive image techniques
- Consider loading performance on mobile devices
- Test file sizes and loading times

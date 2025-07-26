# Sean Wilson Headshot Integration Guide

## 📁 File Placement

Place the `sw-headshot.jpeg` file in the following location:
```
/public/assets/images/team/sw-headshot.jpeg
```

This follows our organized asset structure for team photos.

## 🖼️ Usage Examples

### 1. Hero Section Integration
```jsx
// In hero-section.tsx - Add Sean's photo to hero
import Image from 'next/image'

<div className="flex flex-col lg:flex-row items-center gap-12">
  <div className="lg:w-1/2">
    {/* Existing hero content */}
  </div>
  <div className="lg:w-1/2">
    <div className="relative">
      <Image
        src="/assets/images/team/sw-headshot.jpeg"
        alt="Sean Wilson, Founder & CEO"
        width={400}
        height={400}
        className="rounded-2xl shadow-2xl"
        priority
      />
      <div className="absolute -bottom-4 -right-4 bg-bold-gradient p-4 rounded-xl">
        <span className="text-white font-bold">CEO & Founder</span>
      </div>
    </div>
  </div>
</div>
```

### 2. About Section (New Component)
```jsx
// Create new about-section.tsx component
export function AboutSection() {
  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title mb-6">Meet Sean Wilson</h2>
            <p className="text-lg text-gray-600 mb-6">
              With over 15 years of experience in business strategy and transformation, 
              Sean has helped 500+ companies achieve breakthrough results through bold, 
              innovative approaches.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-gradient-to-r from-[#ff4c00] to-[#ff9900] rounded-full"></div>
                <span>Harvard Business School MBA</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-gradient-to-r from-[#ff4c00] to-[#ff9900] rounded-full"></div>
                <span>Former McKinsey & Company Partner</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-gradient-to-r from-[#ff4c00] to-[#ff9900] rounded-full"></div>
                <span>Published Author on Business Strategy</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/assets/images/team/sw-headshot.jpeg"
              alt="Sean Wilson, Founder & Strategic Consultant"
              width={500}
              height={600}
              className="rounded-2xl shadow-xl"
            />
            <div className="absolute -top-4 -left-4 bg-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-orange-500">500+</div>
              <div className="text-sm text-gray-600">Companies Transformed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
```

### 3. Testimonials Section Enhancement
```jsx
// Add Sean's photo to testimonials for credibility
<div className="text-center mb-12">
  <Image
    src="/assets/images/team/sw-headshot.jpeg"
    alt="Sean Wilson"
    width={80}
    height={80}
    className="rounded-full mx-auto mb-4 shadow-lg"
  />
  <h3 className="text-xl font-bold">Sean Wilson</h3>
  <p className="text-gray-600">Founder & Strategic Consultant</p>
</div>
```

### 4. Contact Section Integration
```jsx
// Add personal touch to contact section
<div className="bg-white rounded-2xl p-8 shadow-xl">
  <div className="flex items-center gap-4 mb-6">
    <Image
      src="/assets/images/team/sw-headshot.jpeg"
      alt="Sean Wilson"
      width={60}
      height={60}
      className="rounded-full"
    />
    <div>
      <h3 className="font-bold">Sean Wilson</h3>
      <p className="text-gray-600">Let's discuss your transformation</p>
    </div>
  </div>
  {/* Contact form */}
</div>
```

## 🎨 Styling Recommendations

### Responsive Image Sizing
```jsx
// Multiple sizes for different screens
<Image
  src="/assets/images/team/sw-headshot.jpeg"
  alt="Sean Wilson"
  width={400}
  height={400}
  className="w-full max-w-sm lg:max-w-md xl:max-w-lg rounded-2xl shadow-xl"
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>
```

### Professional Effects
```jsx
// Professional styling with gradient border
<div className="relative p-1 bg-bold-gradient rounded-2xl">
  <Image
    src="/assets/images/team/sw-headshot.jpeg"
    alt="Sean Wilson"
    width={400}
    height={400}
    className="rounded-2xl w-full h-full object-cover"
  />
</div>
```

## 📱 Mobile Optimization

### Mobile-First Approach
```css
/* Ensure headshot looks great on mobile */
.headshot-container {
  @apply w-64 h-64 mx-auto mb-8;
  @apply sm:w-80 sm:h-80;
  @apply lg:w-96 lg:h-96 lg:mx-0;
}
```

## 🚀 Implementation Steps

1. **Place the file**: Move `sw-headshot.jpeg` to `/public/assets/images/team/`

2. **Add to existing components**: Choose which sections to enhance with Sean's photo

3. **Create About section**: Add a dedicated about section if desired

4. **Test responsiveness**: Verify the image looks good on all screen sizes

5. **Optimize loading**: Use `priority` prop for above-the-fold images

## 💡 Best Practices

- **Alt text**: Always include descriptive alt text
- **Lazy loading**: Use for below-the-fold images
- **WebP format**: Consider converting to WebP for better performance
- **Multiple sizes**: Provide different sizes for different contexts
- **Consistent styling**: Match the overall design theme

Would you like me to help implement any of these specific integrations?

# Executive Coaching & Leadership Development Website

This Next.js website has been redesigned to focus on executive coaching and leadership development services, inspired by professional consulting firms like GEMtrainers and Darris Group.

## 🎯 Key Features

### Design & Layout
- **Professional Hero Section**: Full-screen hero with powerful messaging about executive coaching
- **About Section**: Personal profile section showcasing expertise and achievements
- **Services Section**: Comprehensive overview of four core services
- **Who We Are Section**: Vision, values, and community impact focus
- **Testimonials & Client Logos**: Social proof and credibility building
- **Contact Form**: Professional contact form with service selection
- **Responsive Design**: Mobile-first approach with smooth animations

### Core Services Highlighted
1. **Executive Coaching** - "Leadership Is a Lonely Place...or Is It?"
2. **Organizational Development** - "We Help Sculpt Organizational Excellence"
3. **Crisis Management** - "Are You in Trouble? We Can Help."
4. **Strategic Communication** - "We Teach You What Others Want to Keep Secret"

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📝 Customization Guide

### 1. Personal Information
Update the following files with your actual information:

**`components/about-section.tsx`**
- Replace placeholder name and company
- Add your professional photo
- Update biography and achievements
- Customize recognition and awards

**`components/hero-section.tsx`**
- Update hero messaging
- Replace company tagline
- Customize call-to-action buttons

### 2. Contact Information
**`components/contact-section.tsx`** and **`components/footer.tsx`**
- Update email address
- Add phone number
- Set location/address
- Configure social media links

### 3. Services Content
**`components/services-section.tsx`**
- Customize service descriptions
- Update pricing or methodologies
- Add specific case studies or examples

### 4. Images & Media
Replace placeholder content in:
- Hero background image
- Professional headshots
- Service images
- Client logos
- Team photos

### 5. Brand Colors & Styling
**`tailwind.config.js`** and **`app/globals.css`**
- Update primary brand color (currently orange `#ff4c00`)
- Customize typography
- Adjust spacing and layout

## 🎨 Design Inspiration

This design draws inspiration from:
- **GEMtrainers LLC**: Executive coaching focus and messaging
- **Darris Group**: Professional consulting layout and services structure
- **Community Impact**: Social justice and community-centered approach

## 📱 Responsive Design

The website is built mobile-first with breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px  
- Desktop: > 1024px

## 🔧 Technical Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod validation
- **Analytics**: Vercel Analytics

## 📊 Performance Features

- **Optimized Images**: Next.js Image component
- **Font Optimization**: Google Fonts with display swap
- **Smooth Animations**: Intersection Observer for scroll-triggered animations
- **SEO Optimized**: Meta tags, Open Graph, and structured data
- **Accessibility**: ARIA labels, keyboard navigation, high contrast support

## 🛠️ Maintenance & Updates

### Regular Updates Needed:
1. **Testimonials**: Add new client feedback
2. **Client Logos**: Update with recent clients
3. **Services**: Expand or refine service offerings
4. **Blog/Content**: Add thought leadership content
5. **Contact Info**: Keep all contact details current

### SEO Considerations:
- Update meta descriptions regularly
- Add blog/insights section for content marketing
- Optimize images with alt text
- Monitor page load speeds
- Keep content fresh and relevant

## 📞 Support & Customization

For additional customization or technical support:
1. Review component documentation
2. Check Tailwind CSS documentation for styling
3. Refer to Next.js documentation for framework features
4. Consider adding a CMS for easier content management

## 🌟 Future Enhancements

Consider adding:
- **Blog/Insights Section**: Thought leadership content
- **Case Studies**: Detailed client success stories
- **Online Scheduling**: Calendar integration for consultations
- **Resource Library**: Downloadable guides and tools
- **Video Content**: Speaking engagements and testimonials
- **Newsletter Integration**: Email marketing capabilities

---

**Note**: Remember to replace all placeholder content (company names, contact information, images, etc.) with your actual business information before going live.

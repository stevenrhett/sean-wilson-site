import { Header } from '../components/header'
import { HeroSection } from '../components/hero-section'
import { AboutSection } from '../components/about-section'
import { ServicesSection } from '../components/services-section'
import { WhoWeAreSection } from '../components/who-we-are-section'
import { TestimonialsSection } from '../components/testimonials-section'
import { ContactSection } from '../components/contact-section'
import { Footer } from '../components/footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WhoWeAreSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

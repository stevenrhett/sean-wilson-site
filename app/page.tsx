import { Header } from '../components/header'
import { HeroSection } from '../components/hero-section'
import { ServicesSection } from '../components/services-section'
import { AboutSection } from '../components/about-section'
import { SpeakingSection } from '../components/speaking-section'
import { TestimonialsSection } from '../components/testimonials-section'
import { ContactSection } from '../components/contact-section'
import { Footer } from '../components/footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <SpeakingSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

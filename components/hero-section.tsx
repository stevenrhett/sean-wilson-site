'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Target, Rocket } from 'lucide-react'
import Image from 'next/image'

export function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-[#ff4c00] to-[#ff9900] rounded mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-yellow-300 rounded mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-red-300 rounded mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-16 items-center max-w-7xl mx-auto">

          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >


            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hero-text mb-8"
            >
              Leadership
              <span className="block text-gradient">That</span>
              Liberates
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed"
            >
             Empowering people, campaigns, and institutions to
              <strong className="text-orange-500"> build </strong>justice-centered solutions
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center mb-16"
            >
              <motion.button
                onClick={() => scrollToSection('#contact')}
                className="btn-primary group flex items-center gap-3 text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book a Consultation
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                onClick={() => scrollToSection('#podcast')}
                className="btn-secondary group flex items-center gap-3 text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Listen to Podcast
                <Target className="h-5 w-5" />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Column - Sean Wilson Photo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute -inset-6 bg-gradient-to-r from-orange-400 to-yellow-400 rounded blur-xl opacity-20"></div>

              {/* Image container */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative bg-white rounded shadow-2xl overflow-hidden max-w-4xl mx-auto"
              >
                <Image
                  src="/assets/images/sean-wilson.jpg"
                  alt="Sean Wilson - ACLU advocate and leadership strategist"
                  width={800}
                  height={1000}
                  className="w-full h-auto object-cover"
                  priority
                />

                {/* Overlay with quote or credentials */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-10">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="text-white"
                  >
                    <h3 className="hidden font-bold text-3xl mb-3">Sean Wilson</h3>
                    <p className="hidden text-xl opacity-95">ACLU Advocate & Strategic Leader</p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>



        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-gray-400 rounded flex justify-center"
          >
            <div className="w-1 h-3 bg-gray-400 rounded mt-2"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
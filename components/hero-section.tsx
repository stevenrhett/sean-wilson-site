'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import Link from 'next/link'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/60 z-10" />
        <div className="w-full h-full bg-gray-900 flex items-center justify-center">
          {/* Placeholder for hero image - you can replace with actual image */}
          <div className="w-full h-full bg-gradient-to-br from-gray-800 to-black opacity-80" />
        </div>
      </div>

      <div className="relative z-20 container-custom text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight"
          >
            EXECUTIVE COACHING
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl md:text-3xl lg:text-4xl font-light mb-8 text-gray-200"
          >
            Leadership Is a Lonely Place...or Is It?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            We pioneer transformative journeys for leaders through unrivaled executive 
            coaching expertise. Committed to cultivating visionary leadership, our seasoned 
            coaches provide personalized guidance transcending conventional boundaries.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="#contact">
              <button className="bg-primary hover:bg-primary-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                Get Started Today
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
            
            <Link href="#about">
              <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Learn More
              </button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-16"
          >
            <p className="text-sm text-gray-400 mb-4">Scroll to explore</p>
            <ChevronDown className="w-6 h-6 mx-auto animate-bounce text-gray-400" />
          </motion.div>
        </motion.div>
      </div>

      {/* Quote overlay inspired by the designs */}
      <div className="absolute bottom-20 right-8 z-20 hidden lg:block">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="bg-white/10 backdrop-blur-lg p-6 rounded-xl max-w-sm"
        >
          <p className="text-white font-light italic">
            "We don't just draw you a roadmap, we take the journey with you."
          </p>
        </motion.div>
      </div>
    </section>
  )
}

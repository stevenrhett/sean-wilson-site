'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mic, Users, BookOpen, Target, Heart, TrendingUp, MessageCircle, Award } from 'lucide-react'
import Image from 'next/image'

export function SpeakingSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const services = [
    { name: "Keynote Speaking", icon: Mic },
    { name: "Panel Moderator & Facilitator", icon: Users },
    { name: "Executive Leadership Workshops", icon: BookOpen },
    { name: "Advocacy & Organizing Trainings", icon: Target },
    { name: "Building a Life of Purpose After Incarceration", icon: Heart },
    { name: "Winning Campaigns that Shift Power", icon: TrendingUp },
    { name: "Transformative Storytelling for Social Change", icon: MessageCircle },
    { name: "Leadership Through an Equity Lens", icon: Award }
  ]

  return (
    <section id="speaking" className="section-padding bg-white">
      <div className="container-custom" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title mb-6">Speaking & Training</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Book Sean Wilson – Keynote Speaker, Facilitator, & National Voice for Change
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold mb-8">Services:</h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <service.icon className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{service.name}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
              className="mt-8"
            >
              <button className="btn-primary">
                Request Booking Info
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/assets/images/sw-headshot.jpeg"
                alt="Sean Wilson Speaking"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <Mic className="w-8 h-8 mb-2" />
                <p className="font-semibold text-lg">National Voice for Change</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

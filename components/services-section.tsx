'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mic, Users, Briefcase, Megaphone, BookOpen } from 'lucide-react'

const services = [
  {
    icon: Mic,
    title: 'Keynote Speaking',
    description: 'Book Sean Wilson for powerful keynotes rooted in lived experience and systemic expertise.',
    features: [
      'Inspiring talks grounded in justice and leadership',
      'Actionable steps for equity and systemic change',
      'Tailored to conferences, corporate events, and summits'
    ]
  },
  {
    icon: Users,
    title: 'Panel Moderator & Facilitator',
    description: 'Skilled at guiding nuanced conversations on justice and leadership.',
    features: [
      'Balances diverse perspectives to spark meaningful dialogue',
      'Experienced in national conferences and grassroots events',
      'Creates safe, impactful spaces for transformative discussion'
    ]
  },
  {
    icon: Briefcase,
    title: 'Executive Leadership Workshops',
    description: 'Develop equity-centered leadership strategies for executives and boards.',
    features: [
      'Capacity building for organizational transformation',
      'Practical frameworks for inclusive decision-making',
      'Custom-designed for executives and senior leadership teams'
    ]
  },
  {
    icon: Megaphone,
    title: 'Advocacy & Organizing Trainings',
    description: 'Hands-on training to design and win campaigns that shift power.',
    features: [
      'Tools to create sustainable justice-centered movements',
      'Strategies for community-based mobilization',
      'Focused on impact and long-term systemic change'
    ]
  },
  {
    icon: BookOpen,
    title: 'Signature Talks & Topics',
    description: 'Engaging sessions that inspire, educate, and create lasting impact.',
    features: [
      'Building a Life of Purpose After Incarceration',
      'Winning Campaigns that Shift Power',
      'Transformative Storytelling for Social Change',
      'Leadership Through an Equity Lens'
    ]
  }
]

export function ServicesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="services" className="section-padding bg-white" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
            <span className="text-gradient">Speaking & Training</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Book Sean Wilson – Keynote Speaker, Facilitator, & National Voice for Change
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="card-bold group hover:animate-pulse-glow"
            >
              <div className="p-8">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-bold-gradient rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-bold-gradient rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-2">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-gradient-to-r from-[#ff4c00] to-[#ff9900] rounded-full"></div>
                      <span className="text-sm font-medium text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
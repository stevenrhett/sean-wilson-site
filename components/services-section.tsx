'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Users, Scale, Target } from 'lucide-react'

export function ServicesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const services = [
    {
      title: "Leadership Development & Coaching",
      description: "Empowering purpose-driven leaders.",
      icon: Users,
    },
    {
      title: "Criminal Justice Campaigns & Policy Consulting", 
      description: "Transformative strategies and advocacy.",
      icon: Scale,
    },
    {
      title: "Strategic Advising for Social Change",
      description: "Strengthening impact and organizational capacity.",
      icon: Target,
    }
  ]

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title mb-6">What Do We Do</h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="text-center p-8 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <service.icon className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-gray-900">{service.title}</h3>
              
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <button className="btn-primary">
            Learn More About Our Services
          </button>
        </motion.div>
      </div>
    </section>
  )
}

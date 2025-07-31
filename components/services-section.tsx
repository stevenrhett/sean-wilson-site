'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Users, TrendingUp, Shield, MessageCircle, Target, Lightbulb } from 'lucide-react'
import Image from 'next/image'

export function ServicesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const mainServices = [
    {
      title: "Leadership Development & Coaching",
      description: "Empowering purpose-driven leaders.",
      icon: Target,
      image: "/assets/images/sw-8.jpg"
    },
    {
      title: "Criminal Justice Campaigns & Policy Consulting", 
      description: "Transformative strategies and advocacy.",
      icon: Shield,
      image: "/assets/images/sw-11.jpg"
    },
    {
      title: "Strategic Advising for Social Change",
      description: "Strengthening impact and organizational capacity.",
      icon: TrendingUp,
      image: "/assets/images/sw-5.jpg"
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
        <div className="space-y-16">
          {mainServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="flex items-center gap-4 mb-6">
                  <service.icon className="w-8 h-8 text-primary" />
                  <h3 className="text-2xl lg:text-3xl font-bold">{service.title}</h3>
                </div>
                
                <p className="text-gray-600 leading-relaxed text-lg mb-8">{service.description}</p>
                
                <button className="btn-primary">
                  Learn More About {service.title}
                </button>
              </div>

              {/* Image */}
              <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                <div className="relative h-80 lg:h-96 w-full max-w-md mx-auto lg:max-w-none rounded overflow-hidden shadow-xl">
                  <Image
                    src={service.image}
                    alt={`Sean Wilson - ${service.title}`}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 400px, (max-width: 1024px) 500px, 600px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <service.icon className="w-8 h-8 mb-2" />
                    <p className="font-semibold text-lg">{service.title}</p>
                  </div>
                </div>
              </div>
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

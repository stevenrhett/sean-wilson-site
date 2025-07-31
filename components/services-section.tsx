'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Users, TrendingUp, Shield, MessageCircle, Target, Lightbulb } from 'lucide-react'

export function ServicesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const mainServices = [
    {
      title: "Executive Coaching",
      subtitle: "Leadership Is a Lonely Place...or Is It?",
      description: "Personalized guidance transcending conventional boundaries. As catalysts for leadership excellence, we tailor bespoke coaching programs, honing skills and fostering resilience. Empowering leaders to navigate complexities with confidence, we redefine leadership paradigms.",
      icon: Target,
    },
    {
      title: "Organizational Development", 
      subtitle: "We Help Sculpt Organizational Excellence",
      description: "We architect success, serving as your compass for transformative organizational development. From strategic planning to streamlined operations, we engineer bespoke solutions that empower organizations. We offer comprehensive consulting tailored specifically for mission-driven organizations.",
      icon: TrendingUp,
    },
    {
      title: "Crisis Management & Consulting",
      subtitle: "Are You in Trouble? We Can Help.",
      description: "Our expert team specializes in navigating uncertainty, offering a lifeline to distressed organizations. With a rapid-response mindset, we deploy tailored solutions to stabilize, protect, and fortify organizations in crisis.",
      icon: Shield,
    },
    {
      title: "Strategic Communication",
      subtitle: "We Teach You What Others Want to Keep Secret",
      description: "We are a leading force in strategic communication consulting, blending expertise in messaging and strategic communication for success. Our dynamic team crafts bespoke strategies to amplify your organization's impact, from stakeholder engagement to storytelling.",
      icon: MessageCircle,
    }
  ]

  const additionalServices = [
    "Motivational and Transformative Speaking Engagements",
    "Leadership Development Programs",
    "Team Building and Culture Transformation",
    "Strategic Planning and Implementation",
    "Change Management Consulting",
    "Board Development and Governance"
  ]

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-custom" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title mb-6">WHAT WE DO</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We do FOUR things and we do them better than anyone else.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-lg font-semibold">
            <span className="flex items-center gap-2">
              Executive Coaching <span className="text-primary">★</span>
            </span>
            <span className="flex items-center gap-2">
              Organizational Development <span className="text-primary">★</span>
            </span>
            <span className="flex items-center gap-2">
              Crisis Management <span className="text-primary">★</span>
            </span>
            <span className="flex items-center gap-2">
              Strategic Communication
            </span>
          </div>
        </motion.div>

        {/* Main Services */}
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
                <div className="flex items-center gap-4 mb-4">
                  <service.icon className="w-8 h-8 text-primary" />
                  <h3 className="text-2xl lg:text-3xl font-bold">{service.title}</h3>
                </div>
                
                <h4 className="text-xl font-semibold text-gray-700 mb-6">{service.subtitle}</h4>
                
                <p className="text-gray-600 leading-relaxed mb-8">{service.description}</p>
                
                <button className="btn-primary">
                  Learn More About {service.title}
                </button>
              </div>

              {/* Image/Visual */}
              <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden shadow-xl">
                  {/* Placeholder for service images */}
                  <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-500 flex items-center justify-center">
                    <div className="text-center text-white">
                      <service.icon className="w-16 h-16 mx-auto mb-4" />
                      <p className="font-semibold">{service.title}</p>
                      <p className="text-sm opacity-75">Service Image</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Services */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 bg-white rounded-2xl p-8 lg:p-12 shadow-lg"
        >
          <h3 className="text-3xl font-bold text-center mb-8">Additional Services</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                className="flex items-center gap-3 p-4 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Lightbulb className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-gray-700">{service}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 text-center bg-primary rounded-2xl p-12 text-white"
        >
          <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Leadership?</h3>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how we can help you achieve your organizational goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary font-bold py-3 px-8 rounded-lg hover:shadow-lg transition-all">
              Schedule Consultation
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-primary font-bold py-3 px-8 rounded-lg transition-all">
              Download Our Guide
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

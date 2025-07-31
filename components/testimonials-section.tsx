'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Quote, Star } from 'lucide-react'

export function TestimonialsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      title: "CEO, Healthcare Foundation",
      content: "The executive coaching program transformed our leadership team's effectiveness. The personalized approach and deep understanding of organizational dynamics made all the difference.",
      rating: 5
    },
    {
      name: "Michael Chen",
      title: "Director, Nonprofit Alliance",
      content: "During our organizational crisis, their rapid response and strategic guidance helped us not only survive but emerge stronger. Truly exceptional crisis management expertise.",
      rating: 5
    },
    {
      name: "Jennifer Martinez",
      title: "VP of Operations, Tech Company",
      content: "The leadership development program exceeded our expectations. Our team's communication and collaboration improved dramatically within just a few months.",
      rating: 5
    }
  ]

  const clients = [
    { name: "ASTY", logo: "/api/placeholder/120/60" },
    { name: "Yale", logo: "/api/placeholder/120/60" },
    { name: "Pohlad Family Foundation", logo: "/api/placeholder/120/60" },
    { name: "Veterans of America Los Angeles", logo: "/api/placeholder/120/60" },
    { name: "World Economic Forum", logo: "/api/placeholder/120/60" },
    { name: "Fortune 500 Company", logo: "/api/placeholder/120/60" },
    { name: "Tech Innovation Hub", logo: "/api/placeholder/120/60" },
    { name: "Global Nonprofit", logo: "/api/placeholder/120/60" }
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title mb-6">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from leaders who have transformed their organizations with our guidance and support.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow relative"
            >
              <Quote className="w-8 h-8 text-primary/30 absolute top-6 right-6" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-gray-600 font-semibold text-sm">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Client Logos Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-12 text-gray-800">
            Past Speaking Engagements & Clients
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center justify-items-center">
            {clients.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="w-24 h-16 bg-white rounded-lg shadow-md flex items-center justify-center hover:shadow-lg transition-shadow p-4"
              >
                {/* Placeholder for client logos */}
                <div className="text-center">
                  <div className="w-full h-8 bg-gray-300 rounded mb-1"></div>
                  <div className="text-xs text-gray-500 font-semibold">
                    {client.name}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 bg-primary rounded-2xl p-8 lg:p-12 text-white"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">500+</div>
              <div className="text-primary-100">Leaders Coached</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">150+</div>
              <div className="text-primary-100">Organizations Served</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">95%</div>
              <div className="text-primary-100">Client Satisfaction Rate</div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 text-center bg-white rounded-2xl p-12 shadow-lg"
        >
          <h3 className="text-3xl font-bold mb-4 text-gray-900">Ready to Join Our Success Stories?</h3>
          <p className="text-xl text-gray-600 mb-8">
            Transform your leadership and organization with our proven methodologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">
              Schedule Your Consultation
            </button>
            <button className="btn-secondary">
              View Case Studies
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

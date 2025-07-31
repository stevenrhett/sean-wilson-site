'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Quote } from 'lucide-react'

export function TestimonialsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const testimonials = [
    {
      content: "Sean's leadership development work has transformed how we approach justice-centered organizing. His insights are invaluable.",
      author: "Community Leader",
      organization: "National Justice Organization"
    },
    {
      content: "From incarceration to impact - Sean's story and strategy work demonstrates the power of lived experience in creating change.",
      author: "Policy Director",
      organization: "Criminal Justice Reform Coalition"
    },
    {
      content: "Sean doesn't just speak about transformation - he embodies it. His coaching has strengthened our entire leadership team.",
      author: "Executive Director",
      organization: "Social Change Institute"
    }
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
          <h2 className="section-title mb-6">Impact & Testimonials</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from leaders who have experienced transformative change through Sean's work.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow relative"
            >
              <Quote className="w-8 h-8 text-primary/30 absolute top-6 right-6" />
              
              <p className="text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>
              
              <div>
                <h4 className="font-semibold text-gray-900">{testimonial.author}</h4>
                <p className="text-gray-600 text-sm">{testimonial.organization}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

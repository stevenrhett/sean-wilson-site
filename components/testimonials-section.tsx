'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Quote } from 'lucide-react'
import Image from 'next/image'

export function TestimonialsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const testimonials = [
    {
      content: "Sean's leadership development work has transformed how we approach justice-centered organizing. His insights are invaluable.",
      author: "Community Leader",
      organization: "National Justice Organization",
    },
    {
      content: "From incarceration to impact - Sean's story and strategy work demonstrates the power of lived experience in creating change.",
      author: "Policy Director",
      organization: "Criminal Justice Reform Coalition",
    },
    {
      content: "Sean doesn't just speak about transformation - he embodies it. His coaching has strengthened our entire leadership team.",
      author: "Executive Director",
      organization: "Social Change Institute",
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
              
              <p className="text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-4"> <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.author}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.organization}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-primary rounded-2xl p-8 lg:p-12 text-white"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">1000+</div>
              <div className="text-primary-100">Leaders Empowered</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">50+</div>
              <div className="text-primary-100">Organizations Served</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">10+</div>
              <div className="text-primary-100">Years of Impact</div>
            </div>
          </div>
        </motion.div>

        {/* Additional Image Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8">Sean in Action</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {["/assets/images/sw-1.jpg", "/assets/images/sw-10.jpg", "/assets/images/sw-headshot.jpeg"].map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                className="relative h-64 w-full max-w-sm mx-auto rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <Image
                  src={image}
                  alt={`Sean Wilson in action ${index + 1}`}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 280px, (max-width: 1024px) 320px, 400px"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

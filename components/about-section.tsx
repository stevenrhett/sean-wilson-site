'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

export function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-custom" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/assets/images/sw-headshot.jpeg"
                alt="Sean Wilson - Strategist and Speaker"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="section-title mb-8">About Me</h2>
            
            <div className="mb-8">
              <blockquote className="text-2xl font-light italic text-gray-700 mb-6 leading-relaxed">
                "I don't just speak about change. I build it with the people most impacted at the center."
              </blockquote>
              <cite className="text-lg font-semibold text-gray-900">
                -Sean Wilson, Founder
              </cite>
            </div>
            
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Sean Wilson is a nationally recognized strategist, speaker, and organizer. 
                From incarceration to impact, Sean has leveraged his story and skill to 
                advance justice reform nationwide.
              </p>

              <p>
                As the founder of Emancipated Strategies and Senior Director at Dream.Org, 
                Sean offers powerful insight and results-driven leadership.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-8"
            >
              <button className="btn-primary">
                Read Full Bio
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

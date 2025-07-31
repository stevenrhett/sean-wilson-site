'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Target, Users, Lightbulb, Heart } from 'lucide-react'

export function WhoWeAreSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const services = [
    'Motivational and Transformative Speaking Engagements',
    'Executive and Leadership Consulting',
    'Grassroot Outreach and Community Mobilization',
    'Business Enterprise Solutions'
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-gray-100 via-gray-50 to-white">
      <div className="container-custom" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title mb-8 text-gray-800">WHO WE ARE</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              {/* Placeholder for team/meeting image */}
              <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-500 flex items-center justify-center">
                <div className="text-center text-white">
                  <Users className="w-16 h-16 mx-auto mb-4" />
                  <p className="font-semibold">Team Meeting</p>
                  <p className="text-sm opacity-75">Collaborative Leadership</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Vision */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-3xl font-bold mb-6 text-gray-800">Our Vision</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              We believe in a world where every voice is heard, where every potential 
              is realized, and where the power of community is the cornerstone of 
              societal progress. Our work is driven by the conviction that together, 
              we can overcome challenges and create lasting impact through unity, 
              innovation, and action.
            </p>
          </motion.div>
        </div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Services</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-900 mb-2">{service}</h4>
                  <p className="text-gray-600 text-sm">
                    Delivering impactful solutions tailored to your organization's unique needs and goals.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Section with Image and CTA */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <h3 className="text-3xl font-bold mb-6 text-gray-800">Join Us</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Whether you're looking to inspire your team, influence policy, 
              mobilize your community, or transform your business, we are your 
              partner in creating meaningful change. Let's work together to build 
              a better future for everyone.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary">
                Schedule Consultation
              </button>
              <button className="btn-secondary">
                Learn More
              </button>
            </div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="relative"
          >
            <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden shadow-xl">
              {/* Placeholder for business/consulting image */}
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center">
                <div className="text-center text-gray-700">
                  <Heart className="w-16 h-16 mx-auto mb-4" />
                  <p className="font-semibold">Community Impact</p>
                  <p className="text-sm opacity-75">Making a Difference</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mt-20 bg-white rounded-2xl p-8 lg:p-12 shadow-lg"
        >
          <h3 className="text-3xl font-bold text-center mb-8 text-gray-800">Our Core Values</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-bold text-xl mb-3">Community First</h4>
              <p className="text-gray-600">
                We believe in the power of community and collective action to drive meaningful change.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-bold text-xl mb-3">Innovation</h4>
              <p className="text-gray-600">
                We constantly seek new and creative solutions to complex challenges.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-bold text-xl mb-3">Integrity</h4>
              <p className="text-gray-600">
                We operate with the highest ethical standards and authentic commitment to our mission.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

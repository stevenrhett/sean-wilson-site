'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { UserCheck, Gavel, Lightbulb } from 'lucide-react'

export function AboutSection() {
  const achievements = [
    {
      icon: UserCheck ,
      title: "Leadership Development & Coaching",
      description: "Empowering purpose-driven leaders to create lasting change."
    },
    {
      icon: Gavel ,
      title: "Criminal Justice Campaigns & Policy Consulting",
      description: "Transformative strategies and advocacy for systemic reform."
    },
    {
      icon: Lightbulb,
      title: "Strategic Advising for Social Change",
      description: "Strengthening impact and organizational capacity for nonprofits."
    },

  ]

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title mb-10">Meet Sean Wilson</h2>
          <p className="section-subtitle max-w-3xl mx-auto mb-4">
            "I don't just talk about transformation, I co-create it with the people who've lived through the struggle."
          </p>
          <p className="text-lg text-gray-900 leading-relaxed">
            Sean Wilson, Founder
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - About Content & Achievements */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >

            {/* Achievements Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon
                return (
                  <motion.div
                    key={achievement.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1 text-sm">
                        {achievement.title}
                      </h4>
                      <p className="text-xs text-gray-600">
                        {achievement.description}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Right Side - Sean's Photo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              {/* Main Photo */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="/assets/images/sw-headshot.jpeg"
                  alt="Sean Wilson, Founder & Strategic Consultant"
                  width={500}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority
                />
                {/* Gradient overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Floating Stats Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="absolute -top-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100"
              >
                <div className="text-center">
                  <div className="text-3xl font-black text-orange-500 mb-1">ACLU Alumni</div>
                  <div className="text-sm font-semibold text-gray-600">Advancing</div>
                  <div className="text-sm text-gray-500">Justice</div>
                </div>
              </motion.div>

              {/* Floating Experience Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                viewport={{ once: true }}
                className="absolute -bottom-6 -right-6 bg-bold-gradient p-6 rounded-2xl shadow-xl"
              >
                <div className="text-center text-white">
                  <div className="text-3xl font-black mb-1">15+</div>
                  <div className="text-sm font-semibold">Years</div>
                  <div className="text-sm opacity-90">Experience</div>
                </div>
              </motion.div>
            </div>

            {/* Background Decoration */}
            <div className="absolute -z-10 top-8 left-8 w-full h-full bg-orange-100 rounded-2xl opacity-50"></div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Organization?</h3>
            <p className="text-gray-600 mb-6">
              Connect with Sean directly to discuss your unique challenges and discover 
              how our bold Strategy can accelerate your growth.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
              onClick={() => {
                const element = document.querySelector('#contact')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
            >
              Schedule a Consultation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Award, BookOpen, Users, TrendingUp } from 'lucide-react'

export function AboutSection() {
  const achievements = [
    {
      icon: Award,
      title: "Leadership Development & Coaching",
      description: "Empowering purpose-driven leaders to create lasting change."
    },
    {
      icon: BookOpen,
      title: "Criminal Justice Campaigns & Policy Consulting",
      description: "Transformative strategies and advocacy for systemic reform."
    },
    {
      icon: Users,
      title: "Strategic Advising for Social Change",
      description: "Strengthening impact and organizational capacity for nonprofits."
    },
    {
      icon: TrendingUp,
      title: "Organizational Transformation",
      description: "Recognized thought leader in creating sustainable change."
    }
  ]

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="section-title mb-4 sm:mb-6">Meet Sean Wilson</h2>
          <p className="section-subtitle max-w-3xl mx-auto mb-2 sm:mb-4">
            "I don't just talk about transformation, I co-create it with the people who've lived through the struggle."
          </p>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Sean Wilson, Founder
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Side - About Content & Achievements */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            {/* About Text */}
            <div className="mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                Leadership That Liberates
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-3 sm:mb-4">
                Sean Wilson brings over 15 years of experience in transformational leadership, 
                with a unique focus on justice-centered solutions. His work spans criminal justice 
                reform, organizational development, and strategic consulting for purpose-driven organizations.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                With a deep understanding of systems change and community-centered approaches, 
                Sean helps leaders and organizations build sustainable solutions that create lasting impact.
              </p>
            </div>

            {/* Achievements Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon
                return (
                  <motion.div
                    key={achievement.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3 p-3 sm:p-4 bg-white rounded-lg sm:rounded-xl shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1 text-xs sm:text-sm">
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
            className="relative order-1 lg:order-2"
          >
            <div className="relative max-w-md mx-auto lg:max-w-none">
              {/* Main Photo */}
              <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl">
                <Image
                  src="/assets/images/sw-headshot.jpeg"
                  alt="Sean Wilson, Founder & Strategic Consultant"
                  width={400}
                  height={500}
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
                className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 bg-white p-3 sm:p-4 rounded-lg sm:rounded-xl shadow-lg border border-gray-100"
              >
                <div className="text-center">
                  <div className="text-lg sm:text-2xl font-black text-orange-500 mb-1">100+</div>
                  <div className="text-xs sm:text-sm font-semibold text-gray-600">Companies</div>
                  <div className="text-xs text-gray-500">Transformed</div>
                </div>
              </motion.div>

              {/* Floating Experience Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                viewport={{ once: true }}
                className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 bg-bold-gradient p-3 sm:p-4 rounded-lg sm:rounded-xl shadow-lg"
              >
                <div className="text-center text-white">
                  <div className="text-lg sm:text-2xl font-black mb-1">15+</div>
                  <div className="text-xs sm:text-sm font-semibold">Years</div>
                  <div className="text-xs opacity-90">Experience</div>
                </div>
              </motion.div>
            </div>

            {/* Background Decoration */}
            <div className="absolute -z-10 top-4 left-4 sm:top-8 sm:left-8 w-full h-full bg-orange-100 rounded-xl sm:rounded-2xl opacity-50"></div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12 sm:mt-16"
        >
          <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">Ready to Transform Your Organization?</h3>
            <p className="text-sm sm:text-base text-gray-600 mb-6">
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

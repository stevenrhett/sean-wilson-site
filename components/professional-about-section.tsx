'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Award, BookOpen, Users, TrendingUp, Quote } from 'lucide-react'

export function ProfessionalAboutSection() {
  const achievements = [
    {
      icon: Award,
      title: "Harvard Business School",
      subtitle: "MBA, Strategic Management",
      description: "Magna Cum Laude"
    },
    {
      icon: Users,
      title: "McKinsey & Company",
      subtitle: "Former Senior Partner",
      description: "Fortune 500 Practice Lead"
    },
    {
      icon: BookOpen,
      title: "Published Author",
      subtitle: "\"Bold Strategy Revolution\"",
      description: "Amazon #1 Bestseller"
    },
    {
      icon: TrendingUp,
      title: "Industry Recognition",
      subtitle: "Top 40 Under 40",
      description: "Business Strategy Leaders"
    }
  ]

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-orange-100 px-4 py-2 rounded-full mb-6">
            <div className="w-2 h-2 bg-gradient-to-r from-[#ff4c00] to-[#ff9900] rounded-full"></div>
            <span className="text-orange-800 font-semibold text-sm">Meet the Visionary</span>
          </div>
          <h2 className="section-title mb-6">Sean Wilson</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Transforming businesses through bold strategy and proven methodologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-5 gap-16 items-center max-w-7xl mx-auto">
          {/* Professional Photo Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="xl:col-span-2"
          >
            <div className="relative">
              {/* Main Photo Container */}
              <div className="relative group">
                {/* Background Decoration */}
                <div className="absolute -inset-4 bg-bold-gradient opacity-20 rounded-3xl blur-xl group-hover:opacity-30 transition-opacity duration-500"></div>
                
                {/* Photo Frame */}
                <div className="relative bg-white p-4 rounded shadow-2xl">
                  <div className="relative overflow-hidden rounded-2xl">
                    <Image
                      src="/images/sw-headshot.jpeg"
                      alt="Sean Wilson - Founder & Strategic Business Consultant"
                      width={600}
                      height={750}
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                      priority
                    />
                    {/* Subtle overlay for better text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent"></div>
                  </div>
                </div>

                {/* Floating Achievement Card - Top Left */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, x: -20, y: -20 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="absolute -top-6 -left-6 bg-white p-4 rounded shadow-xl border border-gray-100 z-10"
                >
                  <div className="text-center">
                    <div className="text-2xl font-black text-orange-500 mb-1">500+</div>
                    <div className="text-xs font-semibold text-gray-600">Companies</div>
                    <div className="text-xs text-gray-500">Transformed</div>
                  </div>
                </motion.div>

                {/* Floating Achievement Card - Bottom Right */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, x: 20, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="absolute -bottom-6 -right-6 bg-bold-gradient p-4 rounded shadow-xl z-10"
                >
                  <div className="text-center text-white">
                    <div className="text-2xl font-black mb-1">15+</div>
                    <div className="text-xs font-semibold opacity-95">Years</div>
                    <div className="text-xs opacity-80">Experience</div>
                  </div>
                </motion.div>

                {/* Professional Quote Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.0 }}
                  viewport={{ once: true }}
                  className="absolute top-1/2 -right-8 transform -translate-y-1/2 bg-white p-3 rounded shadow-lg border border-gray-100"
                >
                  <Quote className="w-6 h-6 text-orange-500" />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="xl:col-span-3"
          >
            {/* Professional Introduction */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-16 bg-bold-gradient rounded"></div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">
                    Founder & Strategic Consultant
                  </h3>
                  <p className="text-orange-600 font-semibold">
                    Harvard MBA • Former McKinsey Partner • Bestselling Author
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>Sean is the Senior Director of Organizing and Partnerships at Dream.Org. In his role,
                he is responsible for overseeing capacity building, leadership development programs,
                and grassroots partnerships. Over the past two and a half years, Sean has led the team
                in building one of the most transformational training programs in the nation
                - The Dream Justice Cohort, as part of the Justice program. Sean was born and
                raised in Milwaukee, Wisconsin, and has organized at the state and local level
                around policy change related to youth justice, voting rights, police reform, and
                criminal justice. He is well-positioned to influence real reform and has trained





                  <strong className="text-orange-600">  over 300 advocates </strong>
                  in organizing and leadership development, bringing about policy and
                                                                                                    legislative change at the local and state levels. As someone who is system-impacted,
                                                                                                    Sean brings an advantage and insight into a system he believes is in need of reform by
                                                                                                    investing in the leadership of those most proximate to the issue and problem.

                                                                                                    Previously, Sean served as a commissioner on the Governor’s Juvenile Justice Commission,
                                                                                                    where he advised the DOJ on its juvenile justice programs and funding decisions.
                                                                                                    He also serves as a Co-Instructor at Marquette University, providing academic support and
                                                                                                     career-building resources for incarcerated and recently released students.

                                                                                                    He was recently featured in HBO's "Growing Up Milwaukee" documentary, which highlights the
                                                                                                    challenges faced by Black youth. Sean is an active member of several boards and is a sought-after
                                                                                                    guest on numerous podcasts and media platforms where he shares his story of resilience and advocates for change.
                </p>
                <p>
                  As a former Senior Partner at McKinsey & Company, Sean led Fortune 500 
                  transformations and developed the revolutionary "Bold Strategy Framework" 
                  that's now used by industry leaders globally.
                </p>
              </div>
            </div>

            {/* Professional Achievements Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon
                return (
                  <motion.div
                    key={achievement.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="bg-white p-6 rounded shadow-sm border border-gray-100 hover:shadow-lg hover:border-orange-200 transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-orange-50 rounded flex items-center justify-center group-hover:bg-orange-100 transition-colors duration-300">
                          <IconComponent className="w-6 h-6 text-orange-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-900 mb-1">
                            {achievement.title}
                          </h4>
                          <p className="text-sm font-semibold text-orange-600 mb-1">
                            {achievement.subtitle}
                          </p>
                          <p className="text-xs text-gray-600">
                            {achievement.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Professional Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-orange-50 to-yellow-50 p-8 rounded border-l-4 border-orange-500"
            >
              <Quote className="w-8 h-8 text-orange-500 mb-4" />
              <blockquote className="text-lg font-medium text-gray-900 italic mb-4">
                "True transformation doesn't come from playing it safe. It comes from bold 
                decisions, strategic vision, and the courage to challenge conventional wisdom."
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 relative">
                  <Image
                    src="/assets/images/team/sw-headshot.jpeg"
                    alt="Sean Wilson"
                    width={40}
                    height={40}
                    className="rounded object-cover"
                  />
                </div>
                <div>
                  <div className="font-bold text-gray-900">Sean Wilson</div>
                  <div className="text-sm text-gray-600">Founder, Strategy</div>
                </div>
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              viewport={{ once: true }}
              className="mt-10"
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary flex-1 sm:flex-none"
                  onClick={() => {
                    const element = document.querySelector('#contact')
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                >
                  Schedule a Consultation
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary flex-1 sm:flex-none"
                  onClick={() => {
                    const element = document.querySelector('#services')
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                >
                  View Methodology
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

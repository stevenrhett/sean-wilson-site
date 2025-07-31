'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Award, Users, Target, Heart } from 'lucide-react'

export function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const achievements = [
    {
      icon: Award,
      title: "Leadership Excellence",
      description: "Recognized for exceptional leadership development programs"
    },
    {
      icon: Users,
      title: "Community Impact",
      description: "Transforming lives through strategic community engagement"
    },
    {
      icon: Target,
      title: "Results Driven",
      description: "Proven track record of delivering measurable outcomes"
    },
    {
      icon: Heart,
      title: "Values Based",
      description: "Committed to ethical leadership and social justice"
    }
  ]

  return (
    <section id="about" className="section-padding bg-white">
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
              {/* Placeholder for professional photo */}
              <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-400 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gray-500 rounded-full mx-auto mb-4"></div>
                  <p className="text-gray-600">Professional Photo</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="section-title mb-6">
              ABOUT <span className="text-gradient">SEAN WILSON</span>,
              CHIEF EXECUTIVE COACH
            </h2>
            
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg">
                <strong>Community-Centered Solutions</strong>
              </p>
              
              <p>
                I am the CEO and Founder of [Your Company], a consultancy renowned for its 
                expertise in executive coaching, leadership development, and organizational 
                transformation, with a strong emphasis on community-centered solutions. As a 
                dynamic speaker, trainer, executive coach, and changemaker, my firm has become 
                a prominent force in various sectors.
              </p>

              <p>
                My journey began with a deep commitment to servant leadership and community 
                impact. From grassroots organizing to executive-level consulting, I have 
                worked for years developing leaders who create lasting change in their 
                organizations and communities.
              </p>

              <p>
                My expertise is evident through successful leadership development programs, 
                making me a sought-after consultant for organizations seeking transformational 
                change. I specialize in helping leaders navigate complexity with confidence, 
                redefining leadership paradigms that drive sustainable impact.
              </p>

              <p>
                Since founding my practice, I have worked with leaders at both the grassroots 
                and executive levels. I have championed efforts for organizational excellence 
                and served as a strategic advisor for mission-driven organizations across 
                multiple sectors.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-8"
            >
              <button className="btn-primary">
                Schedule a Consultation
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Achievements Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12">Key Achievements & Recognition</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <achievement.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="font-bold text-lg mb-2">{achievement.title}</h4>
                <p className="text-gray-600 text-sm">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Recognition Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 bg-gray-50 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold mb-6">Recognition & Awards</h3>
          <div className="space-y-4 text-gray-700">
            <p>• <strong>2024:</strong> Leadership Excellence Award from [Organization]</p>
            <p>• <strong>2023:</strong> Community Impact Fellowship recognition</p>
            <p>• <strong>2022:</strong> 40 Under 40 Award from [Local Business Journal]</p>
            <p>• <strong>2021:</strong> Outstanding Achievement in Executive Development</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

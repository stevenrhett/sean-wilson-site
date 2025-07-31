'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mic, Users, BookOpen, Target, Heart, TrendingUp, MessageCircle, Award, Play, Headphones, ExternalLink } from 'lucide-react'
import Image from 'next/image'

export function SpeakingSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const services = [
    { name: "Keynote Speaking", icon: Mic },
    { name: "Panel Moderator & Facilitator", icon: Users },
    { name: "Executive Leadership Workshops", icon: BookOpen },
    { name: "Advocacy & Organizing Trainings", icon: Target },
    { name: "Building a Life of Purpose After Incarceration", icon: Heart },
    { name: "Winning Campaigns that Shift Power", icon: TrendingUp },
    { name: "Transformative Storytelling for Social Change", icon: MessageCircle },
    { name: "Leadership Through an Equity Lens", icon: Award }
  ]

  const handlePodcastClick = () => {
    window.open('https://open.spotify.com/playlist/6U2rPlZtYTMmjiKVl2jjL5?si=8Dd-75-iTvqEWTE_46XlqA&pi=XRh6iqf_RG-TN', '_blank')
  }

  return (
    <section id="speaking" className="section-padding bg-white">
      <div className="container-custom" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title mb-6">Speaking & Training</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Book Sean Wilson – Keynote Speaker, Facilitator, & National Voice for Change
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold mb-8">Services:</h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <service.icon className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{service.name}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
              className="mt-8"
            >
              <button className="btn-primary">
                Request Booking Info
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/assets/images/sw-headshot.jpeg"
                alt="Sean Wilson Speaking"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <Mic className="w-8 h-8 mb-2" />
                <p className="font-semibold text-lg">National Voice for Change</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Featured Podcast Interview Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white rounded-3xl p-8 lg:p-12"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/20 text-primary-200 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Headphones className="w-4 h-4" />
              Featured Interview
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold mb-6">
              Podcast <span className="text-primary">Interview</span>
            </h3>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Sean Wilson is the Organizing Director at Dream.Org. As someone with 17 years of lived experience
              and direct involvement with the criminal legal system, Sean brings an advantage and insight into a
              system he believes to be broken and in need of reform. We got into some of this and of course we
              talked all things fatherhood.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Podcast Player & Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
            >
              {/* Podcast Player Card */}
              <div id="podcast" className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700 mb-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center">
                    <Mic className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">Featured Podcast Interview</h4>
                    <p className="text-gray-400">Listen to Sean's Story</p>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Listen to Sean share his powerful journey from incarceration to impact, discussing criminal justice reform, 
                  leadership strategies, and the importance of lived experience in creating systemic change.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.button
                    onClick={handlePodcastClick}
                    className="flex items-center justify-center gap-2 bg-primary hover:bg-primary-600 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 flex-1"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Play className="w-5 h-5" />
                    Listen on Spotify
                  </motion.button>


                </div>
              </div>

              {/* Feature */}
              <div className="text-center p-6 bg-gray-800/30 rounded-xl border border-gray-700">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <h5 className="font-semibold mb-2">Personal Journey</h5>
                <p className="text-sm text-gray-400">From incarceration to impact - a powerful story of transformation and leadership</p>
              </div>
            </motion.div>

            {/* Right Side - Interview Topics */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.2 }}
            >


              <div className="space-y-4">
                <h5 className="text-xl font-bold">Interview Topics:</h5>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>17 years of lived experience with the criminal legal system</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Insights into systemic reform and justice transformation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Leadership development through lived experience</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Fatherhood, family, and community impact</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Building justice-centered organizations at Dream.Org</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

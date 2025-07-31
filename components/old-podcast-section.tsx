'use client'

import { motion } from 'framer-motion'
import { Play, Headphones, Mic, ExternalLink, Calendar, Download } from 'lucide-react'
import Image from 'next/image'

export function PodcastSection() {
  const podcastFeatures = [
    {
      icon: Mic,
      title: "Leadership Insights",
      description: "Real conversations about transformational leadership and social change"
    },
    {
      icon: Calendar,
      title: "Weekly Episodes",
      description: "New episodes every week featuring thought leaders and change makers"
    },
    {
      icon: Headphones,
      title: "Expert Interviews",
      description: "In-depth discussions with practitioners driving systemic change"
    }
  ]

  const recentEpisodes = [
    {
      title: "Building Justice-Centered Organizations",
      description: "How to embed equity and justice into your organizational DNA",
      duration: "42 min",
      date: "Jan 15, 2025"
    },
    {
      title: "Leadership in Times of Crisis",
      description: "Navigating uncertainty while maintaining your mission focus",
      duration: "38 min", 
      date: "Jan 8, 2025"
    },
    {
      title: "Community-Centered Strategy",
      description: "Putting communities at the center of your strategic planning",
      duration: "45 min",
      date: "Jan 1, 2025"
    }
  ]

  const handlePodcastClick = () => {
    window.open('https://open.spotify.com/playlist/6U2rPlZtYTMmjiKVl2jjL5?si=8Dd-75-iTvqEWTE_46XlqA&pi=XRh6iqf_RG-TN', '_blank')
  }

  return (
    <section id="podcast" className="section-padding bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-300 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Headphones className="w-4 h-4" />
            Listen & Learn
          </div>
          <h2 className="section-title mb-6">
            Leadership That <span className="text-gradient">Liberates</span> Podcast
          </h2>
          <p className="section-subtitle max-w-3xl mx-auto text-gray-300">
            Join Sean Wilson for powerful conversations about transformational leadership, 
            justice-centered solutions, and the strategies that create lasting change.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Podcast Player & Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Podcast Player Card */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-2xl border border-gray-700 mb-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-bold-gradient rounded-xl flex items-center justify-center">
                  <Mic className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Leadership That Liberates</h3>
                  <p className="text-gray-400">with Sean Wilson</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Discover the strategies, insights, and stories behind transformational leadership 
                that creates justice-centered solutions for lasting impact.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  onClick={handlePodcastClick}
                  className="flex items-center justify-center gap-2 bg-bold-gradient hover:shadow-lg hover:shadow-orange-500/25 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:-translate-y-1 flex-1"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Play className="w-5 h-5" />
                  Listen on Spotify
                </motion.button>
                <motion.button
                  className="flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ExternalLink className="w-4 h-4" />
                  All Platforms
                </motion.button>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {podcastFeatures.map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center p-4 bg-gray-800/50 rounded-xl border border-gray-700"
                  >
                    <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <IconComponent className="w-6 h-6 text-orange-400" />
                    </div>
                    <h4 className="font-semibold mb-2">{feature.title}</h4>
                    <p className="text-sm text-gray-400">{feature.description}</p>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Right Side - Recent Episodes */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Recent Episodes</h3>
            <div className="space-y-4">
              {recentEpisodes.map((episode, index) => (
                <motion.div
                  key={episode.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-orange-500/50 transition-all duration-300 group cursor-pointer"
                  onClick={handlePodcastClick}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="font-semibold mb-2 group-hover:text-orange-400 transition-colors">
                        {episode.title}
                      </h4>
                      <p className="text-sm text-gray-400 leading-relaxed">
                        {episode.description}
                      </p>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <div className="w-10 h-10 bg-orange-500/20 rounded-full flex items-center justify-center group-hover:bg-orange-500/30 transition-colors">
                        <Play className="w-4 h-4 text-orange-400" />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{episode.date}</span>
                    <span>{episode.duration}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* View All Episodes */}
            <motion.button
              onClick={handlePodcastClick}
              className="w-full mt-6 bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 border border-gray-700 hover:border-orange-500/50"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View All Episodes
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-l from-orange-500/10 to-transparent rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-r from-orange-500/10 to-transparent rounded-full blur-3xl -z-10"></div>
    </section>
  )
}

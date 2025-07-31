'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState, useCallback } from 'react'
import { Mail, Send, Check, ExternalLink } from 'lucide-react'

export function ContactSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    inquiryType: '',
    message: ''
  })

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Secure input sanitization
  const sanitizeInput = (value: string): string => {
    return value.trim().replace(/<[^>]*>/g, '').substring(0, 1000)
  }

  // Email validation
  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email) && email.length <= 254
  }

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    const sanitizedValue = sanitizeInput(value)
    
    setFormData(prev => ({ ...prev, [name]: sanitizedValue }))
    setError(null) // Clear error when user starts typing
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    
    // Client-side validation
    if (!formData.name || formData.name.length < 2) {
      setError('Please enter a valid name')
      return
    }
    
    if (!formData.email || !isValidEmail(formData.email)) {
      setError('Please enter a valid email address')
      return
    }
    
    if (!formData.message || formData.message.length < 10) {
      setError('Please enter a message with at least 10 characters')
      return
    }

    if (!formData.inquiryType) {
      setError('Please select an inquiry type')
      return
    }

    setIsSubmitting(true)
    
    try {
      // Simulate form submission with error handling
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          // Simulate occasional network errors for testing
          if (Math.random() > 0.95) {
            reject(new Error('Network error'))
          } else {
            resolve(true)
          }
        }, 1000)
      })
      
      setIsSubmitted(true)
      setFormData({ name: '', email: '', organization: '', inquiryType: '', message: '' })
    } catch (err) {
      setError('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handlePodcastClick = useCallback(() => {
    try {
      window.open('https://open.spotify.com/playlist/6U2rPlZtYTMmjiKVl2jjL5?si=8Dd-75-iTvqEWTE_46XlqA&pi=XRh6iqf_RG-TN', '_blank', 'noopener,noreferrer')
    } catch (err) {
      console.error('Failed to open podcast link:', err)
    }
  }, [])

  const inquiryTypes = [
    'Consulting',
    'Speaking',
    'Coaching',
    'Media'
  ]

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title mb-6">Let's Build Together</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Ready to strengthen your leadership, advance justice, or deepen your strategy? 
            Fill out the form or book a discovery call to explore how Emancipated Strategies can elevate your work.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Podcast & Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Podcast Interviews</h3>
              <p className="text-gray-600 mb-6">
                Listen to Sean share insights on leadership, justice reform, and strategic change.
              </p>
              
              <button 
                onClick={handlePodcastClick}
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                aria-label="Listen to Sean Wilson's podcast interviews on Spotify"
              >
                <ExternalLink className="w-5 h-5" />
                Listen on Spotify
              </button>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <h4 className="font-bold text-lg mb-4">Get in Touch</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <a 
                    href="mailto:sean@emancipatedstrategies.com"
                    className="text-gray-700 hover:text-primary transition-colors"
                  >
                    sean@emancipatedstrategies.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-primary/5 rounded-xl p-6">
              <h4 className="font-bold text-lg mb-3 text-primary">Ready to Get Started?</h4>
              <p className="text-gray-700 mb-4">
                Book a discovery call to explore how we can work together to advance your mission.
              </p>
              <button className="btn-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                Book Discovery Call
              </button>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gray-50 rounded-2xl p-8"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <Check className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                <p className="text-gray-600">
                  Thank you for reaching out. We'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg" role="alert">
                    {error}
                  </div>
                )}

                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    maxLength={100}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Your full name"
                    aria-describedby={error?.includes('name') ? 'name-error' : undefined}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    maxLength={254}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="your.email@example.com"
                    aria-describedby={error?.includes('email') ? 'email-error' : undefined}
                  />
                </div>

                <div>
                  <label htmlFor="organization" className="block text-sm font-semibold text-gray-900 mb-2">
                    Organization
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleInputChange}
                    maxLength={200}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Your organization name"
                  />
                </div>

                <div>
                  <label htmlFor="inquiryType" className="block text-sm font-semibold text-gray-900 mb-2">
                    Inquiry Type *
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    aria-describedby={error?.includes('inquiry') ? 'inquiry-error' : undefined}
                  >
                    <option value="">Select inquiry type...</option>
                    {inquiryTypes.map((type, index) => (
                      <option key={index} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    maxLength={1000}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your needs and how we can help..."
                    aria-describedby={error?.includes('message') ? 'message-error' : undefined}
                  />
                  <div className="text-xs text-gray-500 mt-1">
                    {formData.message.length}/1000 characters
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

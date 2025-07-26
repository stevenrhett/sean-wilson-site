'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useForm, ValidationError } from '@formspree/react'
import { Mail, Phone, MapPin, Clock, X } from 'lucide-react'

export function ContactSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [isModalOpen, setIsModalOpen] = useState(false)

  const [state, handleSubmit] = useForm("xeozgreo")

  return (
    <section id="contact" className="section-padding bg-bold-gradient text-white" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            LET'S <span className="text-yellow-300">CREATE</span> SOMETHING
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Ready to bring Sean Wilson to your event? Request booking info and let's make it happen.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold mb-8">Get In Touch</h3>

            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-bold">Email</div>
                  <div className="opacity-90">seankemet82@gmail.com</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-bold">Phone</div>
                  <div className="opacity-90">[Add Phone Number]</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-bold">Location</div>
                  <div className="opacity-90">Milwaukee, Wisconsin</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-bold">Response Time</div>
                  <div className="opacity-90">Within 24 hours</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Request Booking CTA */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col items-center justify-center bg-white/10 backdrop-blur-sm p-8 rounded-3xl"
          >
            <h3 className="text-3xl font-bold mb-6 text-center">Request Booking Info</h3>
            <p className="text-center opacity-90 mb-6">
              Interested in booking Sean Wilson for your keynote, workshop, or event? Click below to request details and availability.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-white text-orange-500 font-bold py-4 px-8 rounded-xl hover:bg-gray-100 transition-all duration-300"
            >
              Request Booking Info
            </button>
          </motion.div>
        </div>
      </div>


      {isModalOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl p-8 max-w-lg w-full relative text-gray-900"
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
            >
              <X className="h-6 w-6" />
            </button>

            {state.succeeded ? (
              <div className="text-center p-6">
                <h3 className="text-2xl font-bold mb-2">Request Sent!</h3>
                <p className="text-gray-700">Thank you. We'll respond within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-2xl font-bold mb-4">Booking Request</h3>

                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your full name"
                  className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-orange-500 text-gray-900 placeholder-gray-400"
                />

                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Your email address"
                  className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-orange-500 text-gray-900 placeholder-gray-400"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />

                <input
                  type="text"
                  name="organization"
                  placeholder="Organization or event name"
                  className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-orange-500 text-gray-900 placeholder-gray-400"
                />

                <textarea
                  name="message"
                  placeholder="Tell us about your event and desired booking details..."
                  rows={4}
                  className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-orange-500 text-gray-900 placeholder-gray-400"
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} />

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full bg-orange-500 text-white font-bold py-3 rounded-xl hover:bg-orange-600 transition"
                >
                  {state.submitting ? 'Sending...' : 'Submit Request'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </section>
  )
}
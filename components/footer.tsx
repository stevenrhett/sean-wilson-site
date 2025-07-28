'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Linkedin, Twitter, Instagram, Facebook, Youtube, Mail } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/sean-wilson-6963aa164/',
      icon: Linkedin,
      hoverColor: 'hover:text-blue-400'
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/',
      icon: Twitter,
      hoverColor: 'hover:text-blue-300'
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com/',
      icon: Instagram,
      hoverColor: 'hover:text-pink-400'
    },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Company Info */}
          <div className="md:col-span-1">
            <motion.div 
              className="flex items-center gap-3 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="relative w-8 h-8">
                <Image
                  src="/assets/icons/strategy.svg"
                  alt="Strategy Logo"
                  width={32}
                  height={32}
                  className="w-full h-full object-contain filter invert"
                />
              </div>
              <span className="text-xl font-black">
                Strategy
              </span>
            </motion.div>
            <p className="text-gray-400 mb-4">
              Bold Strategy that deliver extraordinary results.
              Transform your business with our proven methodologies.
            </p>
            <p className="text-sm text-gray-500">
              © {currentYear} Strategy. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <div className="space-y-2">
              {[
                { name: 'Home', href: '#home' },
                { name: 'About', href: '#about' },
                { name: 'Services', href: '#services' },
                { name: 'Podcast', href: '#podcast' },
                { name: 'Contact', href: '#contact' },
              ].map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-1">
            <h3 className="font-bold text-lg mb-4">Get In Touch</h3>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <p>seankemet82@gmail.com</p>
              </div>
              <p>Milwaukee, Wisconsin</p>
            </div>
            <div className="mt-4">
              <button
                onClick={() => scrollToSection('#contact')}
                className="bg-bold-gradient text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
              >
                Start Your Transformation
              </button>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="md:col-span-1">
            <h3 className="font-bold text-lg mb-4">Connect With Sean</h3>
            <p className="text-gray-400 mb-4 text-sm">
              Follow Sean's journey and insights on social media
            </p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 ${social.hoverColor} hover:bg-gray-700 transition-all duration-200 transform hover:scale-105`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -2 }}
                    aria-label={`Follow Sean on ${social.name}`}
                  >
                    <IconComponent className="w-5 h-5" />
                  </motion.a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              Built with bold vision and cutting-edge technology.
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <button className="hover:text-gray-300 transition-colors">Privacy Policy</button>
              <button className="hover:text-gray-300 transition-colors">Terms of Service</button>
              <button className="hover:text-gray-300 transition-colors">Cookie Policy</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

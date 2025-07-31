'use client'

import Link from 'next/link'
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const navigation = {
    main: [
      { name: 'Home', href: '#' },
      { name: 'Services', href: '#services' },
      { name: 'About', href: '#about' },
      { name: 'Contact', href: '#contact' },
    ],
    services: [
      { name: 'Executive Coaching', href: '#services' },
      { name: 'Organizational Development', href: '#services' },
      { name: 'Crisis Management', href: '#services' },
      { name: 'Strategic Communication', href: '#services' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
    ]
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'info@yourcompany.com',
      href: 'mailto:info@yourcompany.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '(555) 123-4567',
      href: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      label: 'Office',
      value: 'Your City, State',
      href: '#'
    }
  ]

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: '#',
      icon: Linkedin
    },
    {
      name: 'Twitter',
      href: '#',
      icon: Twitter
    },
    {
      name: 'Instagram',
      href: '#',
      icon: Instagram
    }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">YC</span>
                </div>
                <div>
                  <div className="text-lg font-bold">Your Company</div>
                  <div className="text-sm text-gray-400">Executive Coaching</div>
                </div>
              </div>
              
              <p className="text-gray-400 leading-relaxed mb-6">
                Transforming leaders and organizations through innovative coaching, 
                strategic consulting, and community-centered solutions.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Navigation Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Navigation</h3>
              <ul className="space-y-4">
                {navigation.main.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Services</h3>
              <ul className="space-y-4">
                {navigation.services.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Contact</h3>
              <ul className="space-y-4">
                {contactInfo.map((info, index) => (
                  <li key={index}>
                    <Link
                      href={info.href}
                      className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
                    >
                      <info.icon className="w-5 h-5 group-hover:text-primary transition-colors" />
                      <span>{info.value}</span>
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Newsletter Signup */}
              <div className="mt-8">
                <h4 className="font-semibold mb-4">Stay Updated</h4>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-primary text-white placeholder-gray-400"
                  />
                  <button className="bg-primary hover:bg-primary-600 px-4 py-2 rounded-r-lg transition-colors">
                    <Mail className="w-5 h-5" />
                  </button>
                </div>
                <p className="text-xs text-gray-400 mt-2">
                  Get insights on leadership and organizational development.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="text-center lg:text-left">
              <p className="text-gray-400">
                © {currentYear} Your Company. All rights reserved.
              </p>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center lg:justify-end gap-6">
              {navigation.legal.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

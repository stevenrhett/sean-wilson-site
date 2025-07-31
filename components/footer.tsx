'use client'

import Link from 'next/link'
import { Mail, ExternalLink, Linkedin, Twitter, Instagram } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const navigation = {
    main: [
      { name: 'Home', href: '#' },
      { name: 'Services', href: '#services' },
      { name: 'About', href: '#about' },
      { name: 'Speaking', href: '#speaking' },
      { name: 'Contact', href: '#contact' },
    ],
    services: [
      { name: 'Leadership Development & Coaching', href: '#services' },
      { name: 'Criminal Justice Campaigns', href: '#services' },
      { name: 'Strategic Advising for Social Change', href: '#services' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
    ]
  }

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Left Column - Company Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xl">SW</span>
                </div>
                <div>
                  <div className="text-xl font-bold">Strategy by Sean Wilson</div>
                  <div className="text-sm text-gray-400">Leadership Rooted in Liberation</div>
                </div>
              </div>
              
              <p className="text-gray-400 leading-relaxed max-w-md">
                Empowering people, campaigns, and institutions to build justice-centered solutions through transformative leadership and strategic organizing.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-300"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </Link>
                ))}
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <Link
                  href="mailto:sean@emancipatedstrategies.com"
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
                >
                  <Mail className="w-5 h-5 group-hover:text-primary transition-colors" />
                  <span>sean@emancipatedstrategies.com</span>
                </Link>
                
                <Link
                  href="https://open.spotify.com/playlist/6U2rPlZtYTMmjiKVl2jjL5?si=8Dd-75-iTvqEWTE_46XlqA&pi=XRh6iqf_RG-TN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
                >
                  <ExternalLink className="w-5 h-5 group-hover:text-primary transition-colors" />
                  <span>Podcast Interviews</span>
                </Link>
              </div>
            </div>

            {/* Right Column - Navigation & Newsletter */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* Navigation */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Navigation</h3>
                  <ul className="space-y-3">
                    {navigation.main.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="text-gray-400 hover:text-white transition-colors duration-300"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Services</h3>
                  <ul className="space-y-3">
                    {navigation.services.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Newsletter & Updates */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
                <p className="text-gray-400 mb-4 text-sm">
                  Get insights on leadership, justice reform, and strategic organizing.
                </p>
                
                <div className="space-y-4">
                  <div className="flex">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-primary text-white placeholder-gray-400 text-sm"
                    />
                    <button className="bg-primary hover:bg-primary-600 px-4 py-3 rounded-r-lg transition-colors duration-300">
                      <Mail className="w-5 h-5" />
                    </button>
                  </div>
                  
                  <p className="text-xs text-gray-500">
                    Join our community of justice-centered leaders and advocates.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-center sm:text-left">
              <p className="text-gray-400 text-sm">
                © {currentYear} Strategy by Sean Wilson / Emancipated Strategies. All rights reserved.
              </p>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center sm:justify-end gap-6">
              {navigation.legal.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
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

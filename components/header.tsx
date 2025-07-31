'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: 'Home', href: '#' },
    {
      name: 'Services',
      href: '#services',
      dropdown: [
        { name: 'Executive Coaching', href: '#services' },
        { name: 'Organizational Development', href: '#services' },
        { name: 'Crisis Management', href: '#services' },
        { name: 'Strategic Communication', href: '#services' },
      ]
    },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-200'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg lg:text-xl">SW</span>
              </div>
            </motion.div>
            <div className="hidden sm:block">
              <div className="text-lg lg:text-xl font-bold text-gray-900">
                Sean Wilson
              </div>
              <div className="text-xs lg:text-sm text-gray-600 -mt-1">
                Executive Coaching
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.dropdown ? item.name : null)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 font-semibold transition-colors ${
                    scrolled ? 'text-gray-900 hover:text-primary' : 'text-white hover:text-primary'
                  }`}
                >
                  {item.name}
                  {item.dropdown && <ChevronDown className="w-4 h-4" />}
                </Link>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {item.dropdown && activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50"
                    >
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link href="#contact">
              <button className="bg-primary hover:bg-primary-600 text-white font-semibold px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors mobile-menu-button"
          >
            {isOpen ? (
              <X className={`w-6 h-6 ${scrolled ? 'text-gray-900' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${scrolled ? 'text-gray-900' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t border-gray-200 bg-white/95 backdrop-blur-lg"
            >
              <div className="py-4 space-y-2">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-3 text-gray-900 hover:text-primary hover:bg-gray-50 font-semibold transition-colors rounded-lg mx-2"
                    >
                      {item.name}
                    </Link>
                    {item.dropdown && (
                      <div className="ml-4 space-y-1">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            onClick={() => setIsOpen(false)}
                            className="block px-4 py-2 text-gray-600 hover:text-primary hover:bg-gray-50 transition-colors rounded-lg"
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="px-4 pt-4">
                  <Link href="#contact">
                    <button
                      onClick={() => setIsOpen(false)}
                      className="w-full bg-primary hover:bg-primary-600 text-white font-semibold py-3 px-4 rounded-lg transition-all"
                    >
                      Get Started
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}

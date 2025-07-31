'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  // Close mobile menu when clicking outside or on escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (!target.closest('[data-mobile-menu]')) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.addEventListener('click', handleClickOutside)
      document.body.style.overflow = 'hidden' // Prevent body scroll when menu is open
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.removeEventListener('click', handleClickOutside)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const navigation = [
    { name: 'Home', href: '#', ariaLabel: 'Go to home section' },
    { name: 'Services', href: '#services', ariaLabel: 'Go to services section' },
    { name: 'About', href: '#about', ariaLabel: 'Go to about section' },
    { name: 'Speaking', href: '#speaking', ariaLabel: 'Go to speaking section' },
    { name: 'Contact', href: '#contact', ariaLabel: 'Go to contact section' },
  ]

  const handleNavClick = useCallback(() => {
    setIsOpen(false)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-200'
          : 'bg-transparent'
      }`}
      role="banner"
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg"
            aria-label="Strategy by Sean Wilson - Go to homepage"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg lg:text-xl" aria-hidden="true">SW</span>
              </div>
            </motion.div>
            <div className="hidden sm:block">
              <div className={`text-lg lg:text-xl font-bold transition-colors ${
                scrolled ? 'text-gray-900' : 'text-white'
              }`}>
                Strategy by Sean Wilson
              </div>
              <div className={`text-xs lg:text-sm -mt-1 transition-colors ${
                scrolled ? 'text-gray-600' : 'text-gray-300'
              }`}>
                Leadership Rooted in Liberation
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8" role="navigation" aria-label="Main navigation">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded px-2 py-1 ${
                  scrolled 
                    ? 'text-gray-900 hover:text-primary' 
                    : 'text-white hover:text-primary'
                }`}
                aria-label={item.ariaLabel}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link href="#contact">
              <button className="bg-primary hover:bg-primary-600 text-white font-semibold px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary">
                Book Consultation
              </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors mobile-menu-button focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
              scrolled ? 'hover:bg-gray-100' : 'hover:bg-white/10'
            }`}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            data-mobile-menu
          >
            {isOpen ? (
              <X className={`w-6 h-6 transition-colors ${
                scrolled ? 'text-gray-900' : 'text-white'
              }`} />
            ) : (
              <Menu className={`w-6 h-6 transition-colors ${
                scrolled ? 'text-gray-900' : 'text-white'
              }`} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t border-gray-200 bg-white/95 backdrop-blur-lg"
              data-mobile-menu
              role="navigation"
              aria-label="Mobile navigation"
            >
              <div className="py-4 space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={handleNavClick}
                    className="block px-4 py-3 text-gray-900 hover:text-primary hover:bg-gray-50 font-semibold transition-colors rounded-lg mx-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    aria-label={item.ariaLabel}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="px-4 pt-4">
                  <Link href="#contact">
                    <button
                      onClick={handleNavClick}
                      className="w-full bg-primary hover:bg-primary-600 text-white font-semibold py-3 px-4 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
                    >
                      Book Consultation
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

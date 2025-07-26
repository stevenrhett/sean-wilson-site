'use client'

import { motion } from 'framer-motion'
import { Linkedin, Twitter, Instagram, Facebook, Youtube } from 'lucide-react'

interface SocialLinksProps {
  variant?: 'default' | 'header' | 'hero'
  className?: string
}

export function SocialLinks({ variant = 'default', className = '' }: SocialLinksProps) {
  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/seanwilson', // Replace with actual LinkedIn URL
      icon: Linkedin,
      hoverColor: 'hover:text-blue-400'
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/seanwilson', // Replace with actual Twitter URL
      icon: Twitter,
      hoverColor: 'hover:text-blue-300'
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com/seanwilson', // Replace with actual Instagram URL
      icon: Instagram,
      hoverColor: 'hover:text-pink-400'
    },
    {
      name: 'Facebook',
      href: 'https://facebook.com/seanwilson', // Replace with actual Facebook URL
      icon: Facebook,
      hoverColor: 'hover:text-blue-500'
    },
    {
      name: 'YouTube',
      href: 'https://youtube.com/@seanwilson', // Replace with actual YouTube URL
      icon: Youtube,
      hoverColor: 'hover:text-red-400'
    }
  ]

  const getVariantStyles = () => {
    switch (variant) {
      case 'header':
        return {
          container: 'flex items-center gap-3',
          iconWrapper: 'w-8 h-8 rounded-full bg-gray-100 hover:bg-orange-100 text-gray-600 hover:text-orange-600',
          iconSize: 'w-4 h-4'
        }
      case 'hero':
        return {
          container: 'flex items-center gap-4',
          iconWrapper: 'w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white hover:text-orange-300',
          iconSize: 'w-6 h-6'
        }
      default:
        return {
          container: 'flex items-center gap-3',
          iconWrapper: 'w-10 h-10 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-400',
          iconSize: 'w-5 h-5'
        }
    }
  }

  const styles = getVariantStyles()

  return (
    <div className={`${styles.container} ${className}`}>
      {socialLinks.map((social, index) => {
        const IconComponent = social.icon
        return (
          <motion.a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.iconWrapper} ${social.hoverColor} flex items-center justify-center transition-all duration-200 transform hover:scale-105`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ y: -2 }}
            aria-label={`Follow Sean on ${social.name}`}
          >
            <IconComponent className={styles.iconSize} />
          </motion.a>
        )
      })}
    </div>
  )
}

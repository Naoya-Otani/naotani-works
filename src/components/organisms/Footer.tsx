import React from 'react'
import { cn } from '@/lib/utils'
import { Text, Icon } from '../atoms'

interface FooterProps {
  className?: string
}

export const Footer: React.FC<FooterProps> = ({ className }) => {
  const socialLinks = [
    { name: 'GitHub', href: '#', icon: 'github' },
    { name: 'Email', href: '#', icon: 'mail' }
  ]

  return (
    <footer className={cn(
      'bg-green-900 text-white py-12',
      className
    )}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Description */}
          <div className="text-center md:text-left">
            <Text as="h3" variant="heading" className="text-white mb-2">
              Naoya Otani
            </Text>
            <Text variant="body" className="text-green-100">
              Software Engineer & Creative Developer
            </Text>
          </div>
          
          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="p-3 bg-green-800 rounded-full hover:bg-green-700 transition-colors duration-200"
                aria-label={link.name}
              >
                <Icon name={link.icon} size="md" className="text-white" />
              </a>
            ))}
          </div>
        </div>
        
        <div className="border-t border-green-800 mt-8 pt-8 text-center">
          <Text variant="caption" className="text-green-200">
            © 2024 Naoya Otani. All rights reserved.
          </Text>
        </div>
      </div>
    </footer>
  )
}
import React from 'react'
import { cn } from '@/lib/utils'
import { Text, Button } from '../atoms'

interface HeaderProps {
  className?: string
}

export const Header: React.FC<HeaderProps> = ({ className }) => {
  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Works', href: '#works' },
    { label: 'Contact', href: '#contact' }
  ]

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50',
      className
    )}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Text as="h1" variant="heading" className="text-xl text-green-800">
            Naoya Otani
          </Text>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-green-700 transition-colors duration-200 font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>
          
          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="primary" size="sm">
              Contact
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button className="md:hidden p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}
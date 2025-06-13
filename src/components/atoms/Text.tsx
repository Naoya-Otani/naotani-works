import React from 'react'
import { cn } from '@/lib/utils'

interface TextProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
  variant?: 'title' | 'heading' | 'body' | 'caption' | 'code'
  className?: string
  children: React.ReactNode
}

export const Text: React.FC<TextProps> = ({
  as: Component = 'p',
  variant = 'body',
  className,
  children,
  ...props
}) => {
  const variantClasses = {
    title: 'text-4xl md:text-6xl font-bold text-green-900 leading-tight',
    heading: 'text-2xl md:text-3xl font-semibold text-green-800 leading-snug',
    body: 'text-base md:text-lg text-gray-700 leading-relaxed',
    caption: 'text-sm text-gray-600 leading-normal',
    code: 'text-sm font-mono bg-amber-50 px-2 py-1 rounded text-green-800'
  }

  return (
    <Component
      className={cn(variantClasses[variant], className)}
      {...props}
    >
      {children}
    </Component>
  )
}
import React from 'react'
import { cn } from '@/lib/utils'
import { Text, Image, Icon } from '../atoms'

interface CardProps {
  title: string
  description?: string
  imageSrc?: string
  imageAlt?: string
  icon?: string
  href?: string
  className?: string
  variant?: 'default' | 'featured' | 'minimal'
}

export const Card: React.FC<CardProps> = ({
  title,
  description,
  imageSrc,
  imageAlt,
  icon,
  href,
  className,
  variant = 'default'
}) => {
  const baseClasses = 'bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden'
  
  const variantClasses = {
    default: 'border border-gray-200',
    featured: 'border-2 border-green-200 bg-gradient-to-br from-white to-green-50',
    minimal: 'shadow-none border-none bg-transparent'
  }

  const CardContent = (
    <div className={cn(baseClasses, variantClasses[variant], className)}>
      {imageSrc && (
        <div className="relative h-48 w-full">
          <Image
            src={imageSrc}
            alt={imageAlt || title}
            fill
            className="object-cover"
          />
        </div>
      )}
      
      <div className="p-6">
        <div className="flex items-start gap-3">
          {icon && (
            <Icon 
              name={icon} 
              size="md" 
              color="primary"
              className="mt-1 flex-shrink-0" 
            />
          )}
          
          <div className="flex-1">
            <Text 
              as="h3" 
              variant="heading" 
              className="text-xl mb-2"
            >
              {title}
            </Text>
            
            {description && (
              <Text variant="body" className="text-gray-600">
                {description}
              </Text>
            )}
          </div>
        </div>
        
        {href && (
          <div className="mt-4 flex justify-end">
            <Icon name="external" size="sm" color="muted" />
          </div>
        )}
      </div>
    </div>
  )

  if (href) {
    return (
      <a 
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block hover:scale-105 transition-transform duration-200"
      >
        {CardContent}
      </a>
    )
  }

  return CardContent
}
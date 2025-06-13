import React from 'react'
import NextImage from 'next/image'
import { cn } from '@/lib/utils'

interface ImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'
  priority?: boolean
  fill?: boolean
}

export const Image: React.FC<ImageProps> = ({
  src,
  alt,
  width,
  height,
  className,
  rounded = 'md',
  priority = false,
  fill = false,
  ...props
}) => {
  const roundedClasses = {
    none: '',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    full: 'rounded-full'
  }

  return (
    <NextImage
      src={src}
      alt={alt}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      fill={fill}
      priority={priority}
      className={cn(
        'object-cover',
        roundedClasses[rounded],
        className
      )}
      {...props}
    />
  )
}
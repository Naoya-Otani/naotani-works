import React from 'react'
import { cn } from '@/lib/utils'
import { Text } from '../atoms'

interface TimelineItemProps {
  title: string
  organization: string
  period: string
  description?: string
  isLast?: boolean
  className?: string
}

export const TimelineItem: React.FC<TimelineItemProps> = ({
  title,
  organization,
  period,
  description,
  isLast = false,
  className
}) => {
  return (
    <div className={cn('relative flex gap-6', className)}>
      {/* Timeline Line */}
      <div className="flex flex-col items-center">
        <div className="w-4 h-4 bg-green-600 rounded-full border-4 border-white shadow-sm z-10" />
        {!isLast && (
          <div className="w-0.5 h-full bg-green-200 mt-2" />
        )}
      </div>
      
      {/* Content */}
      <div className="flex-1 pb-8">
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
            <Text as="h3" variant="heading" className="text-lg">
              {title}
            </Text>
            <Text variant="caption" className="text-green-600 font-medium">
              {period}
            </Text>
          </div>
          
          <Text variant="body" className="text-green-700 font-medium mb-2">
            {organization}
          </Text>
          
          {description && (
            <Text variant="body" className="text-gray-600">
              {description}
            </Text>
          )}
        </div>
      </div>
    </div>
  )
}
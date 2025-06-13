import React from 'react'
import { cn } from '@/lib/utils'
import { Text, Icon } from '../atoms'

interface SkillBadgeProps {
  name: string
  level?: 'beginner' | 'intermediate' | 'advanced' | 'expert'
  icon?: string
  className?: string
}

export const SkillBadge: React.FC<SkillBadgeProps> = ({
  name,
  level = 'intermediate',
  icon,
  className
}) => {
  const levelColors = {
    beginner: 'bg-gray-100 text-gray-700 border-gray-300',
    intermediate: 'bg-blue-100 text-blue-700 border-blue-300',
    advanced: 'bg-green-100 text-green-700 border-green-300',
    expert: 'bg-amber-100 text-amber-700 border-amber-300'
  }

  const levelIndicators = {
    beginner: 1,
    intermediate: 2,
    advanced: 3,
    expert: 4
  }

  return (
    <div className={cn(
      'inline-flex items-center gap-2 px-3 py-2 rounded-full border',
      levelColors[level],
      className
    )}>
      {icon && (
        <Icon 
          name={icon} 
          size="sm" 
          className="text-current" 
        />
      )}
      
      <Text variant="caption" className="font-medium text-current">
        {name}
      </Text>
      
      <div className="flex gap-1 ml-1">
        {Array.from({ length: 4 }, (_, i) => (
          <div
            key={i}
            className={cn(
              'w-1.5 h-1.5 rounded-full',
              i < levelIndicators[level] 
                ? 'bg-current opacity-100' 
                : 'bg-current opacity-20'
            )}
          />
        ))}
      </div>
    </div>
  )
}
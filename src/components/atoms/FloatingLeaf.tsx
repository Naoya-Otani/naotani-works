import { useMemo, useState, useEffect } from 'react';

interface FloatingLeafProps {
  size?: number;
  left: string;
  top: string;
  animationDelay: string;
  animationDuration: string;
  scrollOffset?: number;
}

const FloatingLeaf: React.FC<FloatingLeafProps> = ({
  size = 40,
  left,
  top,
  animationDelay,
  animationDuration,
  scrollOffset = 0,
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Generate stable random values only after component mounts
  const leafPath = useMemo(() => {
    if (!isMounted) {
      // Default path for SSR
      return "M50 5c0 0 -25 25 -25 45c0 15 10 25 25 25s25-10 25-25c0-20-25-45-25-45z";
    }
    
    return `M50 5c0 0 -${20 + Math.random() * 10} ${20 + Math.random() * 10} -${20 + Math.random() * 10} ${40 + Math.random() * 20}c0 ${12 + Math.random() * 8} ${8 + Math.random() * 4} ${20 + Math.random() * 10} ${20 + Math.random() * 10} ${20 + Math.random() * 10}s${20 + Math.random() * 10}-${8 + Math.random() * 4} ${20 + Math.random() * 10}-${20 + Math.random() * 10}c0-${20 + Math.random() * 20}-${20 + Math.random() * 10}-${40 + Math.random() * 20}-${20 + Math.random() * 10}-${40 + Math.random() * 20}z`;
  }, [isMounted]);

  const leafColor = useMemo(() => {
    if (!isMounted) {
      return "hsl(30, 50%, 40%)"; // Default color for SSR
    }
    return `hsl(${25 + Math.random() * 15}, ${40 + Math.random() * 20}%, ${35 + Math.random() * 15}%)`;
  }, [isMounted]);

  const stemColor = useMemo(() => {
    if (!isMounted) {
      return "hsl(25, 70%, 30%)"; // Default color for SSR
    }
    return `hsl(${20 + Math.random() * 10}, ${60 + Math.random() * 20}%, ${25 + Math.random() * 10}%)`;
  }, [isMounted]);

  const scrollMultiplier = useMemo(() => {
    if (!isMounted) {
      return 0.15; // Default multiplier for SSR
    }
    return 0.1 + Math.random() * 0.2;
  }, [isMounted]);

  return (
    <div
      className="absolute animate-natural-float"
      style={{
        left,
        top,
        animationDelay,
        animationDuration,
        transform: `translateY(${scrollOffset * scrollMultiplier}px)`,
      }}
    >
      <svg 
        width={size} 
        height={size} 
        viewBox="0 0 100 100" 
        className="opacity-20"
      >
        <path 
          d={leafPath}
          fill={leafColor}
        />
        <path 
          d="M50 5 L50 95" 
          stroke={stemColor}
          strokeWidth="2"
        />
      </svg>
    </div>
  );
};

export default FloatingLeaf;
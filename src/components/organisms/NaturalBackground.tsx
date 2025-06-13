"use client";

import { useState, useEffect, useMemo } from 'react';
import WoodGrainPattern from '@/components/atoms/WoodGrainPattern';
import FloatingLeaf from '@/components/atoms/FloatingLeaf';
import WindParticle from '@/components/atoms/WindParticle';
import SunlightEffect from '@/components/atoms/SunlightEffect';
import Branch from '@/components/atoms/Branch';
import { FLOATING_ELEMENT_CONFIG, WIND_PARTICLE_CONFIG } from '@/constants';

interface NaturalBackgroundProps {
  scrollY: number;
}

const NaturalBackground: React.FC<NaturalBackgroundProps> = ({ scrollY }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Generate stable random positions for leaves
  const leafData = useMemo(() => {
    if (!isMounted) {
      // Return default positions for SSR
      return Array.from({ length: FLOATING_ELEMENT_CONFIG.count }, (_, i) => ({
        size: FLOATING_ELEMENT_CONFIG.minSize + (i % 3) * 10,
        left: `${(i * 25) % 100}%`,
        top: `${(i * 30) % 100}%`,
        animationDelay: `${i * 2}s`,
        animationDuration: `${FLOATING_ELEMENT_CONFIG.baseDuration + (i % 5) * 2}s`,
      }));
    }

    return Array.from({ length: FLOATING_ELEMENT_CONFIG.count }, () => ({
      size: FLOATING_ELEMENT_CONFIG.minSize + Math.random() * FLOATING_ELEMENT_CONFIG.maxSizeVariation,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * FLOATING_ELEMENT_CONFIG.maxDelay}s`,
      animationDuration: `${FLOATING_ELEMENT_CONFIG.baseDuration + Math.random() * FLOATING_ELEMENT_CONFIG.maxDurationVariation}s`,
    }));
  }, [isMounted]);

  // Generate stable random positions for wind particles
  const windParticleData = useMemo(() => {
    if (!isMounted) {
      // Return default positions for SSR
      return Array.from({ length: WIND_PARTICLE_CONFIG.count }, (_, i) => ({
        left: `${(i * 20) % 100}%`,
        top: `${(i * 35) % 100}%`,
        animationDelay: `${i * 1.5}s`,
        animationDuration: `${WIND_PARTICLE_CONFIG.baseDuration + (i % 3)}s`,
      }));
    }

    return Array.from({ length: WIND_PARTICLE_CONFIG.count }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * WIND_PARTICLE_CONFIG.maxDelay}s`,
      animationDuration: `${WIND_PARTICLE_CONFIG.baseDuration + Math.random() * WIND_PARTICLE_CONFIG.maxDurationVariation}s`,
    }));
  }, [isMounted]);

  return (
    <div className="absolute inset-0">
      {/* Wood Grain Pattern */}
      <WoodGrainPattern patternId="wood-pattern-enhanced" opacity={0.15} />
      
      {/* Floating Natural Elements */}
      <div className="absolute inset-0">
        {/* Large floating leaves */}
        {leafData.map((leaf, i) => (
          <FloatingLeaf
            key={i}
            size={leaf.size}
            left={leaf.left}
            top={leaf.top}
            animationDelay={leaf.animationDelay}
            animationDuration={leaf.animationDuration}
            scrollOffset={scrollY}
          />
        ))}
        
        {/* Branches */}
        <div className="absolute top-0 left-10">
          <Branch 
            width={200} 
            height={300} 
            animationDelay="0s"
          />
        </div>
        
        <div className="absolute top-20 right-20">
          <Branch 
            width={150} 
            height={250} 
            strokeWidth={6}
            animationDelay="2s"
          />
        </div>
      </div>
      
      {/* Sunlight filtering effect */}
      <SunlightEffect mouseX={mousePosition.x} mouseY={mousePosition.y} />
      
      {/* Wind particles */}
      <div className="absolute inset-0">
        {windParticleData.map((particle, i) => (
          <WindParticle
            key={i}
            left={particle.left}
            top={particle.top}
            animationDelay={particle.animationDelay}
            animationDuration={particle.animationDuration}
          />
        ))}
      </div>
    </div>
  );
};

export default NaturalBackground;
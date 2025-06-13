"use client";

import React, { useEffect, useState } from 'react';
import NaturalBackground from '@/components/organisms/NaturalBackground';
import HeroContent from '@/components/organisms/HeroContent';
import { NATURAL_COLORS } from '@/constants';

const HeroSection: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section 
      className="relative h-screen h-screen-mobile flex items-center justify-center overflow-hidden" 
      style={{ 
        background: NATURAL_COLORS.background
      }}
    >
      {/* Natural Background */}
      <NaturalBackground scrollY={scrollY} />

      {/* Hero Content */}
      <HeroContent isLoaded={isLoaded} />
    </section>
  );
};

export default HeroSection;
import WelcomeMessage from '@/components/molecules/WelcomeMessage';
import NameWithVine from '@/components/molecules/NameWithVine';
import RoleDescription from '@/components/molecules/RoleDescription';
import ScrollIndicator from '@/components/molecules/ScrollIndicator';
import { ANIMATION_DELAYS, CTA_BUTTONS } from '@/constants';

interface HeroContentProps {
  isLoaded: boolean;
}

const HeroContent: React.FC<HeroContentProps> = ({ isLoaded }) => {
  return (
    <div className="relative z-10 w-full h-full flex flex-col justify-center items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center space-y-4 sm:space-y-6 lg:space-y-8">
        {/* Welcome Message */}
        <WelcomeMessage isLoaded={isLoaded} />
        
        {/* Main Title */}
        <div className={`transition-all duration-3000 ${isLoaded ? 'animate-grow-from-seed' : 'opacity-0 scale-0'}`}>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-black leading-tight">
            <NameWithVine isLoaded={isLoaded} />
          </h1>
        </div>

        {/* Role Description */}
        <RoleDescription isLoaded={isLoaded} />

        {/* Action Buttons */}
        <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-3000 ${isLoaded ? 'animate-grow-from-seed' : 'opacity-0 scale-0'}`} style={{ animationDelay: ANIMATION_DELAYS.ctaButtons }}>
          <button className="group relative px-10 py-5 overflow-hidden rounded-full bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold text-lg shadow-2xl transition-all duration-500 hover:scale-110 hover:shadow-green-500/50 transform-gpu">
            <div className="absolute inset-0 bg-gradient-to-r from-green-700 to-emerald-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
            
            <span className="relative z-10 flex items-center gap-3">
              <svg className="w-6 h-6 animate-spin-slow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
              </svg>
              {CTA_BUTTONS.explore}
            </span>
            
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/25 to-transparent transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
          </button>
          
          <button className="group relative px-10 py-5 rounded-full border-3 border-green-600 text-green-800 font-bold text-lg backdrop-blur-lg bg-green-50/20 transition-all duration-500 hover:bg-green-600 hover:text-white hover:scale-110 hover:shadow-xl transform-gpu">
            <span className="relative z-10 flex items-center gap-3">
              {CTA_BUTTONS.connect}
              <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
              </svg>
            </span>
          </button>
        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <ScrollIndicator isLoaded={isLoaded} />
      </div>
    </div>
  );
};

export default HeroContent;
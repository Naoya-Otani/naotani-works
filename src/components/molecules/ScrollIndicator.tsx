import { ANIMATION_DELAYS } from '@/constants';

interface ScrollIndicatorProps {
  isLoaded: boolean;
}

const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({ isLoaded }) => {
  return (
    <div className={`transition-all duration-3000 ${isLoaded ? 'animate-grow-from-seed' : 'opacity-0 scale-0'}`} style={{ animationDelay: ANIMATION_DELAYS.scrollIndicator }}>
      <div className="flex flex-col items-center gap-4">
        <div className="p-4 rounded-full bg-gradient-to-br from-green-200/40 to-amber-200/40 backdrop-blur-sm border-2 border-green-300/50">
          <svg className="w-6 h-6 text-green-800 animate-bounce-gentle" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ScrollIndicator;
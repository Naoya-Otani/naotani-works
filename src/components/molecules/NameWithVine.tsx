import GradientText from '@/components/atoms/GradientText';
import { PROFILE } from '@/constants';

interface NameWithVineProps {
  isLoaded?: boolean;
}

const NameWithVine: React.FC<NameWithVineProps> = () => {
  return (
    <span className="relative block">
      <span className="relative z-10 font-extrabold">
        <GradientText>{PROFILE.name}</GradientText>
      </span>
      
      <div className="absolute -bottom-6 left-0 w-full flex justify-center">
        <svg width="400" height="40" viewBox="0 0 400 40">
          <path 
            d="M20 20 Q100 10 200 20 Q300 30 380 20" 
            stroke="#10b981" 
            strokeWidth="4" 
            fill="none"
          />
          <g>
            <path d="M100 15c0 0 -3 3 -3 6c0 1.657 1.343 3 3 3s3-1.343 3-3c0-3-3-6-3-6z" fill="#10b981"/>
            <path d="M200 25c0 0 -3 3 -3 6c0 1.657 1.343 3 3 3s3-1.343 3-3c0-3-3-6-3-6z" fill="#16a34a"/>
            <path d="M300 15c0 0 -3 3 -3 6c0 1.657 1.343 3 3 3s3-1.343 3-3c0-3-3-6-3-6z" fill="#15803d"/>
          </g>
        </svg>
      </div>
    </span>
  );
};

export default NameWithVine;
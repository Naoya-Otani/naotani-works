interface WoodGrainPatternProps {
  patternId: string;
  opacity?: number;
}

const WoodGrainPattern: React.FC<WoodGrainPatternProps> = ({ 
  patternId, 
  opacity = 0.15 
}) => {
  return (
    <svg 
      className="absolute inset-0 w-full h-full" 
      style={{ opacity }}
      preserveAspectRatio="none"
    >
      <defs>
        <pattern 
          id={patternId} 
          x="0" 
          y="0" 
          width="300" 
          height="200" 
          patternUnits="userSpaceOnUse"
        >
          <rect width="300" height="200" fill="#e8e1d3"/>
          <path 
            d="M0 60c30-15 80-5 120 5s60-10 90 0s50 15 90 5v8c-40-10-50 5-90-5s-60-15-90 0s-90 10-120-5z" 
            fill="#d4c5a8" 
            opacity="0.7"
          />
          <path 
            d="M0 120c40-20 70 5 110-5s70-20 100 0s60 15 90-5v12c-30-10-60 5-90 5s-60-20-100 0s-70 15-110 5z" 
            fill="#c8b896" 
            opacity="0.8"
          />
          <path 
            d="M0 80c25-8 45 3 70-2s40-12 65 0s35 8 60-3s40 5 80 0v6c-40-5-55 3-80 0s-25-8-60 3s-40-12-65 0s-45 10-70 2z" 
            fill="#bfac84" 
            opacity="0.6"
          />
          <ellipse cx="80" cy="100" rx="15" ry="8" fill="#a8956f" opacity="0.4"/>
          <ellipse cx="220" cy="150" rx="20" ry="12" fill="#9d8a66" opacity="0.3"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`}/>
    </svg>
  );
};

export default WoodGrainPattern;
interface BranchProps {
  width?: number;
  height?: number;
  strokeColor?: string;
  strokeWidth?: number;
  animationDelay?: string;
  className?: string;
}

const Branch: React.FC<BranchProps> = ({
  width = 200,
  height = 300,
  strokeColor = "#8b7355",
  strokeWidth = 8,
  animationDelay = "0s",
  className = "",
}) => {
  return (
    <div className={`opacity-30 animate-sway ${className}`} style={{ animationDelay }}>
      <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
        <path 
          d={`M20 ${height} Q30 ${height * 0.83} 40 ${height * 0.67} Q50 ${height * 0.5} 45 ${height * 0.33} Q40 ${height * 0.17} 50 0`}
          stroke={strokeColor} 
          strokeWidth={strokeWidth} 
          fill="none"
        />
        <path 
          d={`M45 ${height * 0.33} Q80 ${height * 0.3} 120 ${height * 0.28}`}
          stroke={strokeColor} 
          strokeWidth={strokeWidth / 2} 
          fill="none"
        />
        <path 
          d={`M40 ${height * 0.67} Q10 ${height * 0.6} 5 ${height * 0.53}`}
          stroke={strokeColor} 
          strokeWidth={strokeWidth * 0.375} 
          fill="none"
        />
      </svg>
    </div>
  );
};

export default Branch;
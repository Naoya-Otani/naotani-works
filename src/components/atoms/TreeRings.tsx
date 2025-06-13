interface TreeRingsProps {
  size?: number;
  rings?: number;
  color?: string;
  opacity?: number;
}

const TreeRings: React.FC<TreeRingsProps> = ({ 
  size = 200, 
  rings = 4, 
  color = "#8b7355", 
  opacity = 0.2 
}) => {
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ opacity }}>
      {Array.from({ length: rings }).map((_, index) => (
        <circle 
          key={index}
          cx={size / 2} 
          cy={size / 2} 
          r={(size / 2) - (index * (size / 2 / rings))} 
          fill="none" 
          stroke={color} 
          strokeWidth="1"
        />
      ))}
    </svg>
  );
};

export default TreeRings;
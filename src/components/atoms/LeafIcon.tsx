interface LeafIconProps {
  size?: number;
  color?: string;
  opacity?: number;
}

const LeafIcon: React.FC<LeafIconProps> = ({ 
  size = 20, 
  color = "#10b981", 
  opacity = 0.6 
}) => {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20">
      <path 
        d="M10 2c0 0 -6 6 -6 12c0 3.314 2.686 6 6 6s6-2.686 6-6c0-6-6-12-6-12z" 
        fill={color} 
        opacity={opacity}
      />
    </svg>
  );
};

export default LeafIcon;
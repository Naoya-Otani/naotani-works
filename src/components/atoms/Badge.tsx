interface BadgeProps {
  children: React.ReactNode;
  animationDelay?: string;
  className?: string;
}

export default function Badge({ children, animationDelay, className = '' }: BadgeProps) {
  return (
    <span 
      className={`px-4 py-2 bg-gradient-to-r from-green-200/50 to-amber-200/50 backdrop-blur-sm border-2 border-green-300/50 rounded-full text-sm font-medium text-green-800 transform hover:scale-110 transition-all duration-300 animate-sprout ${className}`}
      style={{ animationDelay }}
    >
      {children}
    </span>
  );
}
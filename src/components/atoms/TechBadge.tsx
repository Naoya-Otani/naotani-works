interface TechBadgeProps {
  tech: string;
  gradient: string;
  animationDelay?: string;
}

export default function TechBadge({ tech, gradient, animationDelay }: TechBadgeProps) {
  return (
    <span 
      className={`px-3 py-1 bg-gradient-to-r ${gradient} text-white text-xs font-bold rounded-full transform hover:scale-110 transition-all duration-300 animate-bounce-in`}
      style={{ animationDelay }}
    >
      {tech}
    </span>
  );
}
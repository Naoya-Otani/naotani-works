interface SocialIconProps {
  icon: string;
  name: string;
  href: string;
  animationDelay?: string;
}

export default function SocialIcon({ icon, name, href, animationDelay }: SocialIconProps) {
  return (
    <a
      href={href}
      className="group relative w-12 h-12 bg-gradient-to-br from-amber-200/30 to-orange-200/30 backdrop-blur-sm border border-amber-300/50 rounded-2xl flex items-center justify-center transform hover:scale-110 transition-all duration-300 animate-bounce-in"
      style={{ animationDelay }}
    >
      <span className="text-xl group-hover:scale-125 transition-transform duration-300">
        {icon}
      </span>
      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-amber-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {name}
      </div>
    </a>
  );
}
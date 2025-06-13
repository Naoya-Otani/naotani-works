interface ActionButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export default function ActionButton({ 
  href, 
  onClick, 
  variant = 'primary', 
  icon, 
  children, 
  className = '' 
}: ActionButtonProps) {
  const baseClasses = "flex items-center gap-2 px-6 py-3 font-bold rounded-xl transform hover:scale-110 transition-all duration-300";
  
  const variantClasses = {
    primary: "bg-gradient-to-r text-white hover:shadow-lg",
    secondary: "border-2 border-amber-600 text-amber-800 backdrop-blur-sm hover:bg-amber-600 hover:text-white hover:shadow-xl"
  };

  const Component = href ? 'a' : 'button';
  
  return (
    <Component
      href={href}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...(href && { target: "_blank", rel: "noopener noreferrer" })}
    >
      {icon}
      {children}
    </Component>
  );
}
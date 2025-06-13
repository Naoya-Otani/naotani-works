interface GradientTextProps {
  children: React.ReactNode;
  gradient?: string;
  className?: string;
}

const GradientText: React.FC<GradientTextProps> = ({
  children,
  gradient = "from-amber-800 via-yellow-700 to-green-700",
  className = "",
}) => {
  return (
    <span className={`text-transparent bg-clip-text bg-gradient-to-r ${gradient} ${className}`}>
      {children}
    </span>
  );
};

export default GradientText;
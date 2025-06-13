interface WindParticleProps {
  left: string;
  top: string;
  animationDelay: string;
  animationDuration: string;
}

const WindParticle: React.FC<WindParticleProps> = ({
  left,
  top,
  animationDelay,
  animationDuration,
}) => {
  return (
    <div
      className="absolute w-1 h-1 bg-amber-300 rounded-full animate-wind-drift opacity-40"
      style={{
        left,
        top,
        animationDelay,
        animationDuration,
      }}
    />
  );
};

export default WindParticle;
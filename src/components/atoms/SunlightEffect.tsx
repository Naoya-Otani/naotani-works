interface SunlightEffectProps {
  mouseX: number;
  mouseY: number;
}

const SunlightEffect: React.FC<SunlightEffectProps> = ({ mouseX, mouseY }) => {
  return (
    <div 
      className="absolute inset-0 opacity-30"
      style={{
        background: `radial-gradient(ellipse at ${mouseX}% ${mouseY}%, 
          rgba(255, 248, 220, 0.6) 0%, 
          rgba(255, 248, 220, 0.3) 30%, 
          transparent 70%)`,
      }}
    />
  );
};

export default SunlightEffect;
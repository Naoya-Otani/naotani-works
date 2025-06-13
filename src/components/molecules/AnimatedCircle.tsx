import FloatingEmoji from '@/components/atoms/FloatingEmoji';
import { CONTACT_CONTENT } from '@/constants';

export default function AnimatedCircle() {
  return (
    <div className="relative">
      <div className="w-64 h-64 mx-auto relative">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-400/30 to-orange-500/30 rounded-full animate-spin-slow" />
        <div className="absolute inset-4 bg-gradient-to-br from-white/40 to-amber-100/40 rounded-full backdrop-blur-sm flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl mb-4 animate-bounce">{CONTACT_CONTENT.circle.emoji}</div>
            <p className="text-amber-800 font-bold text-lg">{CONTACT_CONTENT.circle.text}</p>
          </div>
        </div>
        
        {CONTACT_CONTENT.floatingEmojis.map((emoji, index) => (
          <FloatingEmoji key={emoji} emoji={emoji} index={index} />
        ))}
      </div>
    </div>
  );
}
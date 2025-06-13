interface FloatingEmojiProps {
  emoji: string;
  index: number;
}

export default function FloatingEmoji({ emoji, index }: FloatingEmojiProps) {
  return (
    <div
      className="absolute text-2xl animate-orbit"
      style={{
        left: `${50 + Math.cos(index * Math.PI / 2) * 40}%`,
        top: `${50 + Math.sin(index * Math.PI / 2) * 40}%`,
        animationDelay: `${index * 0.5}s`,
        animationDuration: '8s',
      }}
    >
      {emoji}
    </div>
  );
}
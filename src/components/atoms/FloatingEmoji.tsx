interface FloatingEmojiProps {
  emoji: string;
  index: number;
}

export default function FloatingEmoji({ emoji, index }: FloatingEmojiProps) {
  // Static positions instead of orbital calculation
  const positions = [
    { left: '20%', top: '30%' },
    { left: '80%', top: '20%' },
    { left: '90%', top: '70%' },
    { left: '15%', top: '80%' },
  ];
  
  const position = positions[index % positions.length];
  
  return (
    <div
      className="absolute text-2xl"
      style={{
        left: position.left,
        top: position.top,
      }}
    >
      {emoji}
    </div>
  );
}
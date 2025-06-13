interface SectionTitleProps {
  emoji: string;
  title: string;
  description?: string;
}

export default function SectionTitle({ emoji, title, description }: SectionTitleProps) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-800 via-amber-700 to-green-600 mb-4">
        {emoji} {title}
      </h2>
      <div className="w-24 h-2 bg-gradient-to-r from-green-500 via-amber-500 to-green-600 mx-auto rounded-full animate-pulse-gentle" />
      {description && (
        <p className="text-green-700 mt-4 text-lg">{description}</p>
      )}
    </div>
  );
}
export default function StatusDots() {
  return (
    <div className="absolute top-4 right-4 flex gap-2">
      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
      <div className="w-3 h-3 bg-amber-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
      <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
    </div>
  );
}
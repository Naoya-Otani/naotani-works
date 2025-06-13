import LeafIcon from '@/components/atoms/LeafIcon';
import { PROFILE } from '@/constants';

interface WelcomeMessageProps {
  isLoaded: boolean;
}

const WelcomeMessage: React.FC<WelcomeMessageProps> = ({ isLoaded }) => {
  return (
    <div className={`mb-4 sm:mb-6 lg:mb-8 transition-all duration-3000 ${isLoaded ? 'animate-grow-from-seed' : 'opacity-0 scale-0'}`}>
      <div className="inline-block p-4 sm:p-6 rounded-3xl bg-gradient-to-br from-amber-50/40 to-yellow-50/60 backdrop-blur-sm border-2 border-amber-200/50 shadow-xl relative overflow-hidden">
        <div className="absolute top-2 left-2">
          <LeafIcon size={20} color="#10b981" opacity={0.6} />
        </div>
        <div className="absolute bottom-2 right-2">
          <LeafIcon size={15} color="#f59e0b" opacity={0.6} />
        </div>
        
        <p className="text-lg font-semibold text-amber-800 tracking-wide">
          {PROFILE.welcomeMessage}
        </p>
      </div>
    </div>
  );
};

export default WelcomeMessage;
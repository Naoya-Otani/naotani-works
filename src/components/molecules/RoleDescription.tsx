import TreeRings from '@/components/atoms/TreeRings';
import { PROFILE, ROLES, ANIMATION_DELAYS } from '@/constants';

interface RoleDescriptionProps {
  isLoaded: boolean;
}

const RoleDescription: React.FC<RoleDescriptionProps> = ({ isLoaded }) => {

  return (
    <div className={`transition-all duration-3000 ${isLoaded ? 'animate-grow-from-seed' : 'opacity-0 scale-0'}`} style={{ animationDelay: ANIMATION_DELAYS.roleDescription }}>
      <div className="relative p-4 sm:p-6 lg:p-8 rounded-3xl bg-gradient-to-br from-green-50/30 to-amber-50/40 backdrop-blur-lg border-2 border-green-200/40 shadow-2xl overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <TreeRings size={200} rings={4} color="#8b7355" />
        </div>
        
        <p className="relative text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-amber-900 font-light mb-4 sm:mb-6">
          {PROFILE.tagline.split(' ').slice(0, 2).join(' ')} <span className="font-bold text-green-800 animate-pulse-gentle">{PROFILE.highlightText}</span>
        </p>
        
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-4 sm:mt-6 lg:mt-8">
          {ROLES.map((role) => (
            <div 
              key={role.text}
              className="px-6 py-3 bg-gradient-to-r from-green-100/60 to-amber-100/60 backdrop-blur-sm border-2 border-green-300/40 rounded-full text-amber-800 font-medium transform hover:scale-110 transition-all duration-500 hover:shadow-lg animate-sprout"
              style={{ animationDelay: role.delay }}
            >
              {role.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoleDescription;
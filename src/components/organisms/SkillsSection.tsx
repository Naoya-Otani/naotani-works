import SectionTitle from '@/components/atoms/SectionTitle';
import SkillItem from '@/components/molecules/SkillItem';
import { SKILLS_CONTENT, SKILL_CATEGORIES } from '@/constants';

export default function SkillsSection() {
  return (
    <section className="mb-20 animate-grow-from-seed" style={{ animationDelay: '1s' }}>
      <SectionTitle 
        emoji={SKILLS_CONTENT.emoji}
        title={SKILLS_CONTENT.title}
        description={SKILLS_CONTENT.description}
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SKILL_CATEGORIES.map((category) => (
          <div 
            key={category.title}
            className="group relative animate-slide-in-3d"
            style={{ animationDelay: category.delay }}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-20 rounded-3xl blur-xl transform group-hover:scale-110 transition-transform duration-500`} />
            
            <div className="relative bg-gradient-to-br from-green-50/30 to-amber-50/40 backdrop-blur-xl rounded-3xl border-2 border-green-200/50 p-8 shadow-2xl transform hover:scale-105 hover:rotate-2 transition-all duration-500 h-full overflow-hidden">
              {/* Organic decorations */}
              <div className="absolute top-2 right-2 opacity-30">
                <svg width="30" height="30" viewBox="0 0 30 30">
                  <path d="M15 5c0 0 -8 8 -8 16c0 4.418 3.582 8 8 8s8-3.582 8-8c0-8-8-16-8-16z" fill="#10b981"/>
                </svg>
              </div>
              
              <div className="text-center mb-6">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${category.color} rounded-full shadow-lg mb-4 text-2xl animate-pulse-gentle`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-green-900">{category.title}</h3>
              </div>
              
              <ul className="space-y-3">
                {category.skills.map((skill) => (
                  <SkillItem key={skill} skill={skill} />
                ))}
              </ul>
              
              <div className="absolute bottom-4 left-4 opacity-30">
                <svg width="20" height="20" viewBox="0 0 20 20">
                  <circle cx="10" cy="10" r="8" fill="none" stroke="#10b981" strokeWidth="1"/>
                  <circle cx="10" cy="10" r="5" fill="none" stroke="#10b981" strokeWidth="1"/>
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
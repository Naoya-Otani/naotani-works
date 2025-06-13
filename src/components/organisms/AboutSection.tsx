import SectionTitle from '@/components/atoms/SectionTitle';
import Badge from '@/components/atoms/Badge';
import { ABOUT_CONTENT } from '@/constants';

export default function AboutSection() {
  return (
    <section className="mb-20 animate-grow-from-seed" style={{ animationDelay: '0.5s' }}>
      <SectionTitle 
        emoji={ABOUT_CONTENT.emoji}
        title={ABOUT_CONTENT.title}
      />
      
      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-amber-400/20 rounded-3xl blur-xl transform group-hover:scale-110 transition-transform duration-500" />
        
        <div className="relative bg-gradient-to-br from-green-50/30 to-amber-50/40 backdrop-blur-xl rounded-3xl border-2 border-green-200/50 p-8 shadow-2xl transform hover:scale-105 transition-all duration-500 overflow-hidden">
          {/* Tree rings decoration */}
          <div className="absolute top-4 right-4 opacity-20">
            <svg width="60" height="60" viewBox="0 0 60 60">
              <circle cx="30" cy="30" r="25" fill="none" stroke="#10b981" strokeWidth="1"/>
              <circle cx="30" cy="30" r="18" fill="none" stroke="#10b981" strokeWidth="1"/>
              <circle cx="30" cy="30" r="12" fill="none" stroke="#10b981" strokeWidth="1"/>
            </svg>
          </div>
          
          <div className="flex items-center gap-6 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg animate-pulse-gentle">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-green-900">{ABOUT_CONTENT.role.title}</h3>
              <p className="text-green-700 font-medium">{ABOUT_CONTENT.role.subtitle}</p>
            </div>
          </div>
          
          <p className="text-lg text-green-800 leading-relaxed">
            {ABOUT_CONTENT.description}
          </p>
          
          <div className="flex flex-wrap gap-3 mt-6">
            {ABOUT_CONTENT.tags.map((tag, index) => (
              <Badge 
                key={tag}
                animationDelay={`${1 + index * 0.2}s`}
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
import SectionTitle from '@/components/atoms/SectionTitle';
import TechBadge from '@/components/atoms/TechBadge';
import StatusDots from '@/components/atoms/StatusDots';
import ProjectActions from '@/components/molecules/ProjectActions';
import { PROJECTS_CONTENT, PROJECTS } from '@/constants';

export default function ProjectsSection() {
  return (
    <section className="mb-20 animate-slide-in-3d" style={{ animationDelay: '1.8s' }}>
      <SectionTitle 
        emoji={PROJECTS_CONTENT.emoji}
        title={PROJECTS_CONTENT.title}
        description={PROJECTS_CONTENT.description}
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {PROJECTS.map((project) => (
          <div 
            key={project.title}
            className="group relative animate-slide-in-3d"
            style={{ animationDelay: project.delay }}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 rounded-3xl blur-xl transform group-hover:scale-110 transition-transform duration-500`} />
            
            <div className="relative bg-gradient-to-br from-white/20 to-amber-100/30 backdrop-blur-xl rounded-3xl border border-amber-200/40 p-8 shadow-2xl transform hover:scale-105 transition-all duration-500 h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 bg-gradient-to-br ${project.gradient} rounded-xl flex items-center justify-center shadow-lg`}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.78 0-2.678-2.153-1.415-3.414l5-5A2 2 0 009 9.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-amber-900">{project.title}</h3>
              </div>
              
              <p className="text-amber-800 mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, techIndex) => (
                  <TechBadge
                    key={tech}
                    tech={tech}
                    gradient={project.gradient}
                    animationDelay={`${2.5 + techIndex * 0.1}s`}
                  />
                ))}
              </div>
              
              <ProjectActions gradient={project.gradient} />
              
              <StatusDots />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
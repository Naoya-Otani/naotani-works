import HeroSection from '@/components/organisms/HeroSection';
import AboutSection from '@/components/organisms/AboutSection';
import SkillsSection from '@/components/organisms/SkillsSection';
import ProjectsSection from '@/components/organisms/ProjectsSection';
import ContactSection from '@/components/organisms/ContactSection';
import FooterSection from '@/components/organisms/FooterSection';

export default function Home() {
  return (
    <div className="min-h-screen relative" style={{ backgroundColor: '#f0efe2' }}>
      {/* Wood grain background pattern */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <svg className="w-full h-full" preserveAspectRatio="none">
          <pattern id="wood-pattern-page" x="0" y="0" width="200" height="100" patternUnits="userSpaceOnUse">
            <rect width="200" height="100" fill="#d4a574"/>
            <path d="M0 30c20-10 40-10 60 0s40 10 60 0s40-10 60 0s40 10 60 0v5c-20-10-40-10-60 0s-40 10-60 0s-40-10-60 0s-40 10-60 0z" fill="#c19a6b" opacity="0.5"/>
            <path d="M0 50c30-15 60-15 90 0s60 15 90 0v5c-30-15-60-15-90 0s-60 15-90 0z" fill="#b08968" opacity="0.3"/>
            <path d="M0 70c25-8 50-8 75 0s50 8 75 0s50-8 75 0v5c-25-8-50-8-75 0s-50 8-75 0s-50-8-75 0z" fill="#a0826d" opacity="0.4"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#wood-pattern-page)"/>
        </svg>
      </div>

      <HeroSection />

      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <FooterSection />
    </div>
  );
}
import SocialIcon from '@/components/atoms/SocialIcon';
import { FOOTER_CONTENT, SOCIAL_LINKS } from '@/constants';

export default function FooterSection() {
  return (
    <footer className="relative mt-20 animate-slide-in-3d" style={{ animationDelay: '2.8s' }}>
      <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 to-orange-900/20 backdrop-blur-xl" />
      
      <div className="relative border-t border-amber-200/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-800 to-orange-600 mb-2">
                {FOOTER_CONTENT.title}
              </h3>
              <p className="text-amber-700 font-medium">
                {FOOTER_CONTENT.subtitle}
              </p>
            </div>
            
            <div className="flex justify-center gap-6 mb-8">
              {SOCIAL_LINKS.map((social, index) => (
                <SocialIcon
                  key={social.name}
                  icon={social.icon}
                  name={social.name}
                  href={social.href}
                  animationDelay={`${3 + index * 0.1}s`}
                />
              ))}
            </div>
            
            <div className="border-t border-amber-200/30 pt-6">
              <p className="text-amber-700 text-sm">
                {FOOTER_CONTENT.copyright}
              </p>
              <p className="text-amber-600 text-xs mt-2">
                {FOOTER_CONTENT.tech}
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-amber-400/20 to-orange-500/20 rounded-full blur-lg animate-pulse" />
      <div className="absolute bottom-4 right-4 w-12 h-12 bg-gradient-to-br from-orange-400/20 to-red-500/20 rounded-full blur-lg animate-pulse" style={{ animationDelay: '1s' }} />
    </footer>
  );
}
import SectionTitle from '@/components/atoms/SectionTitle';
import ContactActions from '@/components/molecules/ContactActions';
import AnimatedCircle from '@/components/molecules/AnimatedCircle';
import { CONTACT_CONTENT } from '@/constants';

export default function ContactSection() {
  return (
    <section className="animate-slide-in-3d" style={{ animationDelay: '2.4s' }}>
      <SectionTitle 
        emoji={CONTACT_CONTENT.emoji}
        title={CONTACT_CONTENT.title}
        description={CONTACT_CONTENT.description}
      />
      
      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 via-pink-400/20 to-red-400/20 rounded-3xl blur-xl transform group-hover:scale-110 transition-transform duration-500" />
        
        <div className="relative bg-gradient-to-br from-white/20 to-amber-100/30 backdrop-blur-xl rounded-3xl border border-amber-200/40 p-8 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-amber-900 mb-4">
                {CONTACT_CONTENT.heading}
              </h3>
              <p className="text-amber-800 mb-6 leading-relaxed">
                {CONTACT_CONTENT.message}
              </p>
              
              <ContactActions />
            </div>
            
            <AnimatedCircle />
          </div>
        </div>
      </div>
    </section>
  );
}
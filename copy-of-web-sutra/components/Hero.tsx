import React from 'react';
import { ArrowRight, BookOpen, Briefcase } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-brand-dark">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
         <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-primary rounded-full blur-3xl"></div>
         <div className="absolute top-1/2 right-0 w-80 h-80 bg-brand-secondary rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
            <span className="text-brand-secondary font-semibold text-sm tracking-wide uppercase">Bridging Code & Academia</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
          Innovating <span className="text-brand-secondary">Business</span>,<br />
          Empowering <span className="text-brand-primary">Education</span>.
        </h1>
        
        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          We are a full-service software development agency and academic consultancy based in Chhatrapati Sambhaji Nagar.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#business" 
            className="flex items-center justify-center gap-2 bg-brand-secondary text-white px-8 py-4 rounded-lg font-semibold hover:bg-amber-600 transition-all hover:shadow-lg hover:shadow-amber-500/25 group"
          >
            <Briefcase size={20} />
            For Business
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="#education" 
            className="flex items-center justify-center gap-2 bg-white/10 text-white border border-white/20 px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all backdrop-blur-sm"
          >
            <BookOpen size={20} />
            For Students
          </a>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/30">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
        </svg>
      </div>
    </section>
  );
};

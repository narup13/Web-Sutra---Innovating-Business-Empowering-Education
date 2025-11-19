import React from 'react';
import { Monitor, ShoppingBag, FileText, GraduationCap, Code, Book } from 'lucide-react';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-brand-light">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What We Do</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            We operate on a unique dual-engine model, delivering professional software solutions while mentoring the next generation of engineers.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Commercial Column */}
          <div id="business" className="bg-white rounded-2xl p-8 shadow-xl border border-slate-100 relative overflow-hidden group hover:border-brand-secondary/50 transition-colors">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-secondary/10 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
            
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-amber-100 p-3 rounded-xl text-amber-600">
                <Monitor size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-800">Commercial Development</h3>
            </div>
            
            <p className="text-slate-600 mb-6 leading-relaxed">
              We help local businesses go online. Whether you need a portfolio, a dynamic business website, or an e-commerce store, we deliver clean, responsive code.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="mt-1 text-amber-500"><ShoppingBag size={20} /></div>
                <div>
                  <h4 className="font-semibold text-slate-800">E-Commerce & Portfolios</h4>
                  <p className="text-sm text-slate-500 mt-1">Custom landing pages and online stores that drive sales.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mt-1 text-amber-500"><Code size={20} /></div>
                <div>
                  <h4 className="font-semibold text-slate-800">Zero-Maintenance Sites</h4>
                  <p className="text-sm text-slate-500 mt-1">Specialty in secure, free-to-host websites using platforms like Blogger CMS.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-slate-100">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Tech Stack</p>
              <div className="flex flex-wrap gap-2">
                {['HTML5', 'CSS3', 'JavaScript', 'Python', 'Blogger'].map(tag => (
                  <span key={tag} className="px-3 py-1 bg-slate-50 text-slate-600 rounded-full text-xs font-medium border border-slate-200">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Academic Column */}
          <div id="education" className="bg-white rounded-2xl p-8 shadow-xl border border-slate-100 relative overflow-hidden group hover:border-brand-primary/50 transition-colors">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/10 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>

            <div className="flex items-center gap-4 mb-8">
              <div className="bg-blue-100 p-3 rounded-xl text-blue-600">
                <GraduationCap size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-800">Academic Labs & Projects</h3>
            </div>
            
            <p className="text-slate-600 mb-6 leading-relaxed">
              We understand the pressure of engineering submissions. We provide expert guidance and source code implementation for DBATU students.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="mt-1 text-blue-500"><Book size={20} /></div>
                <div>
                  <h4 className="font-semibold text-slate-800">Final Year Projects</h4>
                  <p className="text-sm text-slate-500 mt-1">IEEE Paper implementation in Python/Java with full support.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mt-1 text-blue-500"><FileText size={20} /></div>
                <div>
                  <h4 className="font-semibold text-slate-800">Documentation Support</h4>
                  <p className="text-sm text-slate-500 mt-1">Professional Synopses, Black Books, and Presentation preparation.</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Domains</p>
              <div className="flex flex-wrap gap-2">
                {['CSE/IT', 'Machine Learning', 'Web Apps', 'Android', 'IEEE'].map(tag => (
                  <span key={tag} className="px-3 py-1 bg-slate-50 text-slate-600 rounded-full text-xs font-medium border border-slate-200">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { Users, MapPin, Wallet } from 'lucide-react';

export const Features: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-2 space-y-6">
            <span className="text-brand-primary font-bold tracking-wider uppercase text-sm">Why Choose Web Sutra?</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              We aren't just a company.<br/>
              We are <span className="text-brand-secondary">developers</span>.
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Founded by <strong className="text-slate-900">Narendra Pawar</strong>, we bridge the gap between commercial needs and academic requirements. 
              You don't talk to salespeople here; you talk directly to the experts who write the code.
            </p>
            
            <div className="pt-6">
              <img 
                src="https://picsum.photos/800/600" 
                alt="Coding Workspace" 
                className="rounded-xl shadow-lg object-cover w-full h-64 grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>

          {/* Features Grid */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-6">
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center text-brand-primary mb-4">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Developer-Led</h3>
              <p className="text-slate-600 text-sm">
                Direct communication with the tech team leads to faster problem-solving and zero miscommunication.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center text-brand-secondary mb-4">
                <MapPin size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Local Expertise</h3>
              <p className="text-slate-600 text-sm">
                Based in Chhatrapati Sambhaji Nagar, we have deep knowledge of local business needs and university curriculums (DBATU).
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:shadow-md transition-shadow sm:col-span-2">
              <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center text-green-600 mb-4">
                <Wallet size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Cost-Effective</h3>
              <p className="text-slate-600 text-sm">
                We believe in affordable innovation. We offer high-end software standards at student-friendly and startup-friendly prices, making technology accessible to everyone.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

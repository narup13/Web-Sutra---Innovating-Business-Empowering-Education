import React from 'react';
import { Mail, MapPin, Phone, Github, Linkedin, Facebook } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-brand-dark text-white pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">Web Sutra</h3>
            <p className="text-slate-400 mb-6 max-w-sm">
              Innovating Business, Empowering Education. We bridge the digital gap for local businesses and mentor the next generation of engineers.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-primary transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-primary transition-colors">
                <Github size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-primary transition-colors">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3 text-slate-400">
              <li><a href="#business" className="hover:text-brand-secondary transition-colors">Business Websites</a></li>
              <li><a href="#business" className="hover:text-brand-secondary transition-colors">E-Commerce</a></li>
              <li><a href="#education" className="hover:text-brand-secondary transition-colors">IEEE Projects</a></li>
              <li><a href="#education" className="hover:text-brand-secondary transition-colors">Academic Documentation</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-brand-primary shrink-0 mt-1" />
                <span>Chhatrapati Sambhaji Nagar (Aurangabad), Maharashtra</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-brand-primary shrink-0" />
                <a href="mailto:contact@websutra.com" className="hover:text-white">contact@websutra.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-brand-primary shrink-0" />
                <a href="tel:+919876543210" className="hover:text-white">+91 98765 43210</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Web Sutra. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

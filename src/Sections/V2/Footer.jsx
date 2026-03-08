import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter, ArrowUpRight } from 'lucide-react';
import logofest from '../../assets/Logo-FEST-LIGHT.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Facebook size={24} />, href: '#', bg: 'bg-[#2DD4BF]', shadow: '#111827' },
    { icon: <Twitter size={24} />, href: '#', bg: 'bg-[#FBBF24]', shadow: '#111827' },
    { icon: <Instagram size={24} />, href: '#', bg: 'bg-[#D946EF]', shadow: '#111827' },
    { icon: <Linkedin size={24} />, href: '#', bg: 'bg-[#F97316]', shadow: '#111827' },
  ];

  const quickLinks = ['About', 'Events', 'Sponsors', 'FAQ', 'Contact'];

  return (
    <footer className="relative bg-[#6D28D9] text-white border-t-8 border-slate-900 font-sans overflow-hidden z-10 selection:bg-[#FBBF24] selection:text-slate-900">
      
      <div className="container mx-auto px-6 lg:px-24 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Brand & Mission (Spans 5 cols) */}
          <div className="md:col-span-5 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="bg-slate-900 border-4 border-white p-4 rounded-2xl shadow-[8px_8px_0px_#2DD4BF] mb-8 -rotate-2 hover:rotate-0 transition-transform duration-300">
              <img 
                src={logofest} 
                alt="Logo FEST" 
                className="w-48 object-contain"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://placehold.co/400x150/0F172A/FFFFFF?text=FES+LOGO';
                }}
              />
            </div>
            <p className="text-xl font-bold leading-snug max-w-sm mb-6 drop-shadow-md">
              Empowering the next generation of rule-breakers and startup founders. 
              <br/> <span className="text-[#FBBF24] font-black uppercase">Build the future today.</span>
            </p>
          </div>

          {/* Quick Links (Spans 3 cols) */}
          <div className="md:col-span-3 flex flex-col items-center md:items-start">
            <h3 className="font-black text-2xl uppercase tracking-widest mb-6 border-b-4 border-[#2DD4BF] pb-2 inline-block drop-shadow-[2px_2px_0px_#0F172A]">
              Explore
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`} 
                    className="group flex items-center text-lg font-bold hover:text-[#FBBF24] transition-colors"
                  >
                    <span className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-[#2DD4BF] mr-2">
                      ▶
                    </span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media (Spans 4 cols) */}
          <div className="md:col-span-4 flex flex-col items-center md:items-start">
            <h3 className="font-black text-2xl uppercase tracking-widest mb-6 border-b-4 border-[#D946EF] pb-2 inline-block drop-shadow-[2px_2px_0px_#0F172A]">
              Connect
            </h3>
            
            <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
              {socialLinks.map((social, idx) => (
                <a 
                  key={idx}
                  href={social.href} 
                  className={`flex items-center justify-center w-14 h-14 rounded-xl border-4 border-slate-900 text-slate-900 ${social.bg} shadow-[4px_4px_0px_#0F172A] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[0px_0px_0px_#0F172A] transition-all duration-200`}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Brutalist Contact Button */}
            <a 
              href="mailto:contact@fesorganizer.com"
              className="inline-flex items-center gap-2 bg-white text-slate-900 border-4 border-slate-900 font-black uppercase tracking-wider py-3 px-6 rounded-xl shadow-[4px_4px_0px_#0F172A] hover:bg-[#F97316] hover:text-white hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[0px_0px_0px_#0F172A] transition-all duration-200"
            >
              Get In Touch <ArrowUpRight strokeWidth={3} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t-4 border-slate-900 bg-[#FBBF24] text-slate-900 py-6 px-6 relative z-10">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left font-bold uppercase tracking-wide text-sm">
          <p className="flex items-center gap-2">
            &copy; {currentYear} Future Entrepreneur Summit
          </p>
          <p>
            Powered by <a href="https://fesorganizer.com/" className="font-black underline decoration-4 decoration-[#D946EF] hover:text-[#D946EF] transition-colors">FESt Organizer</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
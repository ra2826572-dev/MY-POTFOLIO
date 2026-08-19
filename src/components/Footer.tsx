import React from 'react';
import { 
  Linkedin, 
  Instagram, 
  Github, 
  Phone, 
  Mail, 
  ArrowUp
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../portfolioData';

interface FooterProps {}

export const Footer: React.FC<FooterProps> = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative bg-[#06080E] text-slate-400 pt-16 pb-12 border-t border-slate-800/80 overflow-hidden">
      
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand & Mission */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-violet-500 p-[1.5px] shadow-md shadow-blue-500/20">
                <div className="w-full h-full bg-[#090D16] rounded-[10px] flex items-center justify-center">
                  <span className="font-extrabold text-base text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-200 to-amber-300">
                    R
                  </span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-black text-white uppercase tracking-wider">
                  {PORTFOLIO_DATA.personal.name}
                </h3>
                <p className="text-xs text-blue-400 font-medium -mt-0.5">
                  {PORTFOLIO_DATA.personal.role}
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              "Building modern digital experiences for businesses and brands."
            </p>

            {/* Availability Indicator */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Freelance & Contract Work</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-blue-400 transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links & Direct Channels */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
              Connect With Me
            </h4>
            <p className="text-xs text-slate-400">
              Let's connect across social platforms or send an inquiry directly.
            </p>

            <div className="flex items-center gap-3">
              {/* WhatsApp */}
              <a
                href={PORTFOLIO_DATA.contact.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 hover:bg-emerald-950 border border-slate-800 hover:border-emerald-500/40 text-slate-300 hover:text-emerald-400 flex items-center justify-center transition-all shadow-sm"
                title="WhatsApp"
              >
                <Phone className="w-4 h-4" />
              </a>

              {/* Email */}
              <a
                href={PORTFOLIO_DATA.contact.socials.email}
                className="w-10 h-10 rounded-xl bg-slate-900 hover:bg-blue-950 border border-slate-800 hover:border-blue-500/40 text-slate-300 hover:text-blue-400 flex items-center justify-center transition-all shadow-sm"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>

              {/* LinkedIn */}
              <a
                href={PORTFOLIO_DATA.contact.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 hover:bg-blue-950 border border-slate-800 hover:border-blue-500/40 text-slate-300 hover:text-blue-400 flex items-center justify-center transition-all shadow-sm"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              {/* Instagram */}
              <a
                href={PORTFOLIO_DATA.contact.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 hover:bg-pink-950 border border-slate-800 hover:border-pink-500/40 text-slate-300 hover:text-pink-400 flex items-center justify-center transition-all shadow-sm"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>

              {/* GitHub */}
              <a
                href={PORTFOLIO_DATA.contact.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-600 text-slate-300 hover:text-white flex items-center justify-center transition-all shadow-sm"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 RIZWAN AHMAD. All Rights Reserved.</p>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};

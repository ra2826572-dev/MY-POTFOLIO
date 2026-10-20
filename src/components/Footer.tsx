import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  Linkedin, 
  Instagram, 
  Github, 
  Phone, 
  Mail, 
  ArrowUp,
  MapPin,
  Globe,
  Navigation
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../portfolioData';
import { useLanguage } from '../context/LanguageContext';

interface FooterProps {}

export const Footer: React.FC<FooterProps> = () => {
  const { t, isRTL } = useLanguage();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: t.nav.home, href: '/' },
    { name: t.nav.about, href: '/about' },
    { name: t.nav.skills, href: '/skills' },
    { name: t.nav.services, href: '/services' },
    { name: t.nav.projects, href: '/projects' },
    { name: t.nav.process, href: '/process' },
    { name: t.nav.contact, href: '/contact' },
  ];

  return (
    <footer className="relative bg-[#06080E] text-slate-400 pt-16 pb-12 border-t border-slate-800/80 overflow-hidden">
      
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

      <motion.div 
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-20px' }}
        transition={{ duration: 0.35 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
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
              "{t.footer.tagline}"
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
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="hover:text-blue-400 hover:translate-x-0.5 transition-all inline-flex items-center gap-1.5"
                  >
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links & Direct Channels */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
              {t.footer.contactTitle}
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
                className="w-10 h-10 rounded-xl bg-slate-900 hover:bg-emerald-950 border border-slate-800 hover:border-emerald-500/40 text-slate-300 hover:text-emerald-400 flex items-center justify-center hover:-translate-y-1 transition-all duration-200 shadow-sm"
                title="WhatsApp"
              >
                <Phone className="w-4 h-4" />
              </a>

              {/* Email */}
              <a
                href={PORTFOLIO_DATA.contact.socials.email}
                className="w-10 h-10 rounded-xl bg-slate-900 hover:bg-blue-950 border border-slate-800 hover:border-blue-500/40 text-slate-300 hover:text-blue-400 flex items-center justify-center hover:-translate-y-1 transition-all duration-200 shadow-sm"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>

              {/* LinkedIn */}
              <a
                href={PORTFOLIO_DATA.contact.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 hover:bg-blue-950 border border-slate-800 hover:border-blue-500/40 text-slate-300 hover:text-blue-400 flex items-center justify-center hover:-translate-y-1 transition-all duration-200 shadow-sm"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              {/* Instagram */}
              <a
                href={PORTFOLIO_DATA.contact.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 hover:bg-pink-950 border border-slate-800 hover:border-pink-500/40 text-slate-300 hover:text-pink-400 flex items-center justify-center hover:-translate-y-1 transition-all duration-200 shadow-sm"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>

              {/* GitHub */}
              <a
                href={PORTFOLIO_DATA.contact.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-600 text-slate-300 hover:text-white flex items-center justify-center hover:-translate-y-1 transition-all duration-200 shadow-sm"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Live Location Section */}
        <div className="mt-10 pt-8 border-t border-slate-800/80">
          <div className="bg-gradient-to-r from-slate-900/90 via-[#0B132B]/80 to-slate-900/90 rounded-2xl p-6 border border-slate-800/90 shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Background glowing radar effect */}
            <div className="absolute right-10 -bottom-10 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="flex items-center gap-4 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 relative shrink-0 shadow-lg shadow-blue-500/10">
                <MapPin className="w-6 h-6 animate-bounce" />
                <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-slate-900 animate-ping" />
                <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-slate-900" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-sm font-bold text-white tracking-wide uppercase">Live Headquarters & Base</h4>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-semibold text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Online / Active
                  </span>
                </div>
                <p className="text-xs text-slate-300 font-medium mt-1 flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-blue-400" />
                  <span>{PORTFOLIO_DATA.personal.location}</span>
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 relative z-10 w-full md:w-auto justify-end">
              <div className="text-left md:text-right hidden sm:block">
                <div className="text-[11px] text-slate-400 font-medium">Working Hours</div>
                <div className="text-xs text-slate-200 font-semibold">24/7 Available for Clients Worldwide</div>
              </div>
              <a
                href="https://maps.google.com/?q=Faisalabad,+Pakistan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:-translate-y-0.5 transition-all duration-200"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>View Live Map</span>
              </a>
            </div>

          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>{t.footer.rights}</p>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 hover:-translate-y-0.5 transition-all duration-200"
          >
            <span>{t.footer.backToTop}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </motion.div>
    </footer>
  );
};

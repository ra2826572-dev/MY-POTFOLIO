import React from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  ArrowRight, 
  MessageSquare, 
  Zap, 
  Send,
  Phone
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../portfolioData';

interface CTAProps {
  onOpenQuoteModal: () => void;
}

export const CTA: React.FC<CTAProps> = ({ onOpenQuoteModal }) => {
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 relative overflow-hidden bg-[#080B11]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Large Premium CTA Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl p-8 sm:p-14 lg:p-16 overflow-hidden bg-gradient-to-b from-slate-900/90 via-[#0B0F19] to-slate-950 border border-slate-700/70 shadow-2xl shadow-black/80"
        >
          {/* Animated Background Gradients & Glow Accents */}
          <div className="absolute -top-32 -left-32 w-80 h-80 bg-blue-600/25 rounded-full blur-[100px] pointer-events-none animate-pulse" />
          <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-purple-600/25 rounded-full blur-[100px] pointer-events-none animate-pulse" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-transparent pointer-events-none" />

          {/* Grid pattern overlay */}
          <div 
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
              backgroundSize: '32px 32px',
            }}
          />

          <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950/70 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Let's Create Together</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-4">
              Have a Project in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-200 to-purple-400">Mind?</span>
            </h2>

            {/* Description */}
            <p className="text-base sm:text-xl text-slate-300 max-w-xl leading-relaxed mb-10 font-normal">
              "Let's build something modern, professional and memorable."
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 w-full sm:w-auto">
              
              {/* Start a Project (Opens interactive custom quote wizard) */}
              <button
                type="button"
                onClick={onOpenQuoteModal}
                className="inline-flex items-center justify-center px-8 py-4 rounded-full font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 shadow-xl shadow-blue-600/30 hover:shadow-blue-600/50 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 text-sm sm:text-base gap-2 group"
              >
                <Zap className="w-5 h-5 text-amber-300" />
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Contact Me (Scrolls to contact form) */}
              <a
                href="#contact"
                onClick={scrollToContact}
                className="inline-flex items-center justify-center px-8 py-4 rounded-full font-bold text-slate-200 bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700 hover:border-slate-500 hover:text-white hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 shadow-lg text-sm sm:text-base gap-2"
              >
                <MessageSquare className="w-5 h-5 text-blue-400" />
                <span>Contact Me</span>
              </a>

            </div>

            {/* WhatsApp Alternative Quick Link */}
            <div className="mt-8 pt-6 border-t border-slate-800/80 flex items-center justify-center gap-2 text-xs text-slate-400">
              <span>Prefer instant messaging?</span>
              <a 
                href={PORTFOLIO_DATA.contact.socials.whatsapp} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-emerald-400 font-semibold hover:underline flex items-center gap-1"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Chat on WhatsApp ({PORTFOLIO_DATA.contact.phone})</span>
              </a>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

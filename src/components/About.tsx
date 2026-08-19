import React from 'react';
import { motion } from 'motion/react';
import { 
  FolderGit2, 
  Globe, 
  Smartphone, 
  Zap, 
  Layers, 
  Sparkles,
  MessageSquare
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../portfolioData';

interface AboutProps {
  onOpenQuoteModal: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenQuoteModal }) => {
  const statIcons: Record<string, React.ReactNode> = {
    FolderGit2: <FolderGit2 className="w-6 h-6 text-blue-400" />,
    Globe: <Globe className="w-6 h-6 text-indigo-400" />,
    Smartphone: <Smartphone className="w-6 h-6 text-purple-400" />,
    Zap: <Zap className="w-6 h-6 text-amber-400" />,
  };

  const corePillars = [
    {
      title: 'Clean UI Architecture',
      desc: 'Visual hierarchy with deliberate typography, high contrast, and refined white space.',
      icon: <Layers className="w-5 h-5 text-blue-400" />,
    },
    {
      title: 'Responsive & Mobile First',
      desc: 'Flawlessly tested across iPhones, Androids, tablets, laptops, and ultra-wide displays.',
      icon: <Smartphone className="w-5 h-5 text-indigo-400" />,
    },
    {
      title: 'Smooth User Experiences',
      desc: 'Intuitive navigation, frictionless forms, and micro-interactions that guide visitors.',
      icon: <Sparkles className="w-5 h-5 text-purple-400" />,
    },
    {
      title: 'Conversion & Speed Focused',
      desc: 'Engineered with fast page loads and clear calls-to-action that convert traffic into clients.',
      icon: <Zap className="w-5 h-5 text-amber-400" />,
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#090D16]/60 border-y border-slate-800/40">
      
      {/* Background ambient decorative shapes */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Discover My Background</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-200 to-purple-400">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-4" />
        </div>

        {/* Two Column Content: Bio & Narrative + Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: About Text & Pillars */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 backdrop-blur-xl shadow-xl shadow-black/40">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span>Passionate Web Designer & Developer</span>
              </h3>
              
              <p className="text-lg text-slate-300 leading-relaxed font-normal mb-6">
                "{PORTFOLIO_DATA.personal.aboutDetailed}"
              </p>

              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Whether you need a custom-built corporate website, a high-converting landing page, an e-commerce shop, or a complete modern redesign, I bridge the gap between creative visual artistry and robust technical execution.
              </p>

              {/* Action row */}
              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-800">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-semibold shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:scale-[1.02] transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Get in Touch</span>
                </a>
                
                <a
                  href={PORTFOLIO_DATA.contact.socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-800/80 hover:bg-slate-800 text-slate-200 text-sm font-medium border border-slate-700 transition-colors"
                >
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Core Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {corePillars.map((pillar, idx) => (
                <div 
                  key={idx} 
                  className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/70 hover:border-slate-700 transition-all duration-300 flex flex-col gap-2"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-slate-800/80 border border-slate-700/50">
                      {pillar.icon}
                    </div>
                    <h4 className="font-bold text-sm text-slate-100">{pillar.title}</h4>
                  </div>
                  <p className="text-xs text-slate-400 leading-normal pl-1">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: The 4 Required Key Statistics & Cards */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {PORTFOLIO_DATA.personal.stats.map((stat, index) => (
              <div
                key={index}
                className="group relative p-6 rounded-3xl bg-slate-900/70 border border-slate-800/90 hover:border-blue-500/40 backdrop-blur-xl shadow-xl shadow-black/50 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                {/* Glow on hover */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                <div>
                  <div className="w-12 h-12 rounded-2xl bg-slate-800/90 border border-slate-700/80 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    {statIcons[stat.icon] || <Zap className="w-6 h-6 text-blue-400" />}
                  </div>
                  
                  <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-mono mb-1">
                    {stat.value}
                  </p>
                  
                  <h4 className="text-base font-bold text-slate-200 mb-1">
                    {stat.label}
                  </h4>
                </div>

                <p className="text-xs text-slate-400 font-medium pt-3 border-t border-slate-800/60 mt-3">
                  {stat.note}
                </p>
              </div>
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  );
};

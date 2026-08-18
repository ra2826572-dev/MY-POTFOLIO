import React from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  Smartphone, 
  Zap, 
  Users, 
  Search, 
  ShieldCheck,
  Check,
  ArrowRight
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../portfolioData';

export const WhyChooseMe: React.FC = () => {
  const getBenefitIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-blue-400" />;
      case 'Smartphone': return <Smartphone className="w-6 h-6 text-indigo-400" />;
      case 'Zap': return <Zap className="w-6 h-6 text-amber-400" />;
      case 'Users': return <Users className="w-6 h-6 text-purple-400" />;
      case 'Search': return <Search className="w-6 h-6 text-emerald-400" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-teal-400" />;
      default: return <Sparkles className="w-6 h-6 text-blue-400" />;
    }
  };

  return (
    <section className="py-24 relative overflow-hidden bg-[#080B11]">
      
      {/* Glow backgrounds */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Uncompromising Quality</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-200 to-purple-400">Choose Me</span>
          </h2>
          <p className="text-slate-400 text-base max-w-2xl mt-3">
            Every website is crafted with meticulous attention to visual elegance, speed, and business conversion goals.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-4" />
        </div>

        {/* 6 Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.whyChooseMe.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
              className="group relative p-7 rounded-3xl bg-slate-900/60 border border-slate-800/80 hover:border-blue-500/40 backdrop-blur-xl shadow-xl shadow-black/40 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-blue-500/10 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-13 h-13 rounded-2xl bg-slate-800/90 border border-slate-700/80 flex items-center justify-center group-hover:scale-110 transition-transform shadow-inner">
                    {getBenefitIcon(item.icon)}
                  </div>

                  {item.highlightStat && (
                    <span className="px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-[11px] font-bold text-blue-300 font-mono">
                      {item.highlightStat}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-300/90 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-800/60 flex items-center gap-2 text-xs font-semibold text-emerald-400">
                <Check className="w-4 h-4" />
                <span>Guaranteed Standard</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

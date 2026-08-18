import React from 'react';
import { motion } from 'motion/react';
import { 
  Monitor, 
  Briefcase, 
  ShoppingBag, 
  Rocket, 
  Layout, 
  RefreshCw, 
  ArrowRight, 
  Check, 
  Sparkles,
  HelpCircle,
  Phone
} from 'lucide-react';
import { PORTFOLIO_DATA, Service } from '../portfolioData';

interface ServicesProps {
  onOpenQuoteModal: (preselectedService?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenQuoteModal }) => {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Monitor': return <Monitor className="w-6 h-6 text-blue-400" />;
      case 'Briefcase': return <Briefcase className="w-6 h-6 text-indigo-400" />;
      case 'ShoppingBag': return <ShoppingBag className="w-6 h-6 text-purple-400" />;
      case 'Rocket': return <Rocket className="w-6 h-6 text-pink-400" />;
      case 'Layout': return <Layout className="w-6 h-6 text-emerald-400" />;
      case 'RefreshCw': return <RefreshCw className="w-6 h-6 text-amber-400" />;
      default: return <Monitor className="w-6 h-6 text-blue-400" />;
    }
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-[#090D16]/80 border-t border-slate-800/40">
      
      {/* Decorative backdrop glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>High Impact Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            What <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-200 to-purple-400">I Do</span>
          </h2>
          <p className="text-slate-400 text-base max-w-2xl mt-3 font-normal">
            Specialized design and development services built to transform your online presence into a powerful business asset.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-4" />
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {PORTFOLIO_DATA.services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative p-8 rounded-3xl bg-slate-900/60 border border-slate-800/90 hover:border-blue-500/50 backdrop-blur-xl shadow-xl shadow-black/40 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute top-5 right-5 px-3 py-1 rounded-full bg-gradient-to-r from-blue-600/30 to-purple-600/30 border border-blue-400/40 text-[11px] font-bold text-blue-300">
                  Most Requested
                </div>
              )}

              {/* Service Header */}
              <div>
                <div className="w-14 h-14 rounded-2xl bg-slate-800/90 border border-slate-700/80 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-slate-800 transition-all shadow-lg shadow-black/30">
                  {getServiceIcon(service.icon)}
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                  {service.title}
                </h3>

                <p className="text-sm text-slate-300/90 leading-relaxed mb-6 font-normal">
                  {service.description}
                </p>

                {/* Key Deliverables Bullet Points */}
                <div className="space-y-2.5 pt-4 border-t border-slate-800/80 mb-8">
                  {service.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <div className="w-4 h-4 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0 mt-0.5 text-emerald-400">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Get a Quote Action */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onOpenQuoteModal(service.title)}
                  className="w-full py-3 px-4 rounded-xl bg-slate-800/80 hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 text-slate-200 hover:text-white font-semibold text-xs sm:text-sm border border-slate-700 hover:border-transparent transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-md"
                >
                  <span>Get a Quote</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Bottom Fast Assistance Banner */}
        <div className="mt-16 p-8 rounded-3xl bg-slate-900/60 border border-slate-800 backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">Need a quick custom proposal or estimate?</h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Send your requirements directly via WhatsApp and receive a tailored quote within 24 hours.
              </p>
            </div>
          </div>

          <a
            href={PORTFOLIO_DATA.contact.socials.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-lg shadow-emerald-500/20 flex items-center gap-2"
          >
            <Phone className="w-4 h-4" />
            <span>WhatsApp Quick Quote</span>
          </a>
        </div>

      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
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
  ExternalLink, 
  Presentation,
  PenTool,
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2
} from 'lucide-react';
import { PORTFOLIO_DATA, Service } from '../portfolioData';
import { PowerPointIcon } from './icons/PowerPointIcon';

interface ServicesProps {
  onOpenQuoteModal: (preselectedService?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenQuoteModal }) => {
  const [isPresentationModalOpen, setIsPresentationModalOpen] = useState(false);
  const [activeSlideIdx, setActiveSlideIdx] = useState(0);

  const presentationSlides = PORTFOLIO_DATA.presentationDesign.slides;
  const currentSlide = presentationSlides[activeSlideIdx] || presentationSlides[0];

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Monitor': return <Monitor className="w-6 h-6 text-blue-400" />;
      case 'Briefcase': return <Briefcase className="w-6 h-6 text-indigo-400" />;
      case 'ShoppingBag': return <ShoppingBag className="w-6 h-6 text-purple-400" />;
      case 'Rocket': return <Rocket className="w-6 h-6 text-pink-400" />;
      case 'Layout': return <Layout className="w-6 h-6 text-emerald-400" />;
      case 'RefreshCw': return <RefreshCw className="w-6 h-6 text-amber-400" />;
      case 'Presentation': return <Presentation className="w-6 h-6 text-blue-400" />;
      case 'PenTool': return <PenTool className="w-6 h-6 text-blue-400" />;
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
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative p-8 rounded-3xl bg-slate-900/60 border border-slate-800/90 hover:border-blue-500/50 backdrop-blur-xl shadow-xl shadow-black/40 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 flex flex-col justify-between overflow-hidden"
            >
              {/* Animated hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-indigo-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute top-5 right-5 px-3 py-1 rounded-full bg-slate-800/90 border border-slate-700/80 text-[11px] font-bold text-blue-300">
                  Most Requested
                </div>
              )}

              {/* Service Header */}
              <div>
                <div className="w-14 h-14 rounded-2xl bg-slate-800/90 border border-slate-700/80 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-slate-800 transition-all shadow-lg shadow-black/30">
                  {getServiceIcon(service.icon)}
                </div>

                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-300 transition-colors">
                  {service.title}
                </h3>

                {service.subtitle && (
                  <p className="text-xs font-semibold text-blue-400 mb-2.5">
                    {service.subtitle}
                  </p>
                )}

                <p className="text-sm text-slate-300/90 leading-relaxed mb-6 font-normal">
                  {service.description}
                </p>

                {/* Key Deliverables Bullet Points */}
                <div className="space-y-2.5 pt-4 border-t border-slate-800/80 mb-6">
                  {service.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <div className="w-4 h-4 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0 mt-0.5 text-emerald-400">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Featured Live Project / Presentation / Portfolio Link */}
                {service.featuredProject && (
                  <div className="mb-6 p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800/80 hover:border-blue-500/40 transition-colors shadow-md flex items-center justify-between gap-3">
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-blue-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span>
                          {service.id === 'presentation-design' 
                            ? 'Live Presentation Deck' 
                            : 'Live Client Project'}
                        </span>
                      </div>
                      <p className="text-xs font-bold text-white truncate mt-0.5">
                        {service.featuredProject.name}
                      </p>
                      <p className="text-[11px] text-slate-400 truncate">
                        {service.featuredProject.tagline}
                      </p>
                    </div>

                    {service.id === 'presentation-design' ? (
                      <button
                        type="button"
                        onClick={() => {
                          setActiveSlideIdx(0);
                          setIsPresentationModalOpen(true);
                        }}
                        className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-semibold shadow-md shadow-blue-600/30 transition-all hover:scale-105 active:scale-95"
                        title="View live presentation slide deck"
                      >
                        <PowerPointIcon className="w-3.5 h-3.5" />
                        <span>Live Presentation</span>
                      </button>
                    ) : (
                      <a
                        href={service.featuredProject.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-semibold shadow-md shadow-blue-600/30 transition-all hover:scale-105 active:scale-95"
                        title={`Visit ${service.featuredProject.name} live store`}
                      >
                        <span>Live Site</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                )}
              </div>

              {/* Card Action Buttons */}
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

      </div>

      {/* ========================================================================= */}
      {/* Live 16:9 Presentation Modal (Loaded directly from service card) */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {isPresentationModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/90 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-6xl rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden flex flex-col max-h-[95vh]"
            >
              {/* Modal Top Bar */}
              <div className="p-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <PowerPointIcon className="w-5 h-5" />
                  <span className="font-bold text-white text-sm">
                    {currentSlide.title} • {currentSlide.slideNumber}
                  </span>
                  <span className="hidden sm:inline-block px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-mono font-bold">
                    Live 16:9 Deck
                  </span>
                </div>
                
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setActiveSlideIdx((prev) => (prev === 0 ? presentationSlides.length - 1 : prev - 1))}
                    className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-colors"
                    title="Previous Slide"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono font-bold text-blue-400">
                    {activeSlideIdx + 1} / {presentationSlides.length}
                  </span>
                  <button
                    type="button"
                    onClick={() => setActiveSlideIdx((prev) => (prev === presentationSlides.length - 1 ? 0 : prev + 1))}
                    className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-colors"
                    title="Next Slide"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsPresentationModalOpen(false)}
                    className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white transition-colors ml-1"
                    title="Close Presentation"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Modal Slide Canvas */}
              <div className="p-6 sm:p-10 lg:p-12 overflow-y-auto bg-gradient-to-br from-[#080B11] via-[#0D1322] to-[#0A0E17] flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider inline-block">
                      {currentSlide.category}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      16:9 WIDESCREEN MASTER // {currentSlide.slideNumber}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-4xl font-black text-white mb-1.5 tracking-tight">
                    {currentSlide.title}
                  </h3>
                  <p className="text-sm sm:text-base font-bold text-indigo-300 mb-5">
                    {currentSlide.subtitle}
                  </p>

                  <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-200 text-xs sm:text-sm font-medium leading-relaxed mb-6">
                    "{currentSlide.headline}"
                  </div>

                  {/* Points Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    {currentSlide.points.map((pt, i) => (
                      <div key={i} className={`p-4 rounded-2xl border transition-all ${
                        pt.highlight 
                          ? 'bg-slate-900/80 border-blue-500/40 shadow-lg' 
                          : 'bg-slate-900/50 border-slate-800'
                      }`}>
                        <strong className="text-sm font-bold text-white block mb-1">{pt.label}</strong>
                        {pt.value && <p className="text-xs font-mono font-bold text-blue-400 mb-2">{pt.value}</p>}
                        <p className="text-xs text-slate-300 leading-relaxed">{pt.desc}</p>
                      </div>
                    ))}
                  </div>

                  {currentSlide.statMetric && (
                    <div className="p-5 rounded-2xl bg-slate-900/60 border border-blue-500/30 text-center max-w-sm mx-auto mb-4">
                      <span className="text-xs text-blue-400 uppercase font-bold tracking-wider">{currentSlide.statMetric.label}</span>
                      <p className="text-4xl font-black text-white font-mono my-1">{currentSlide.statMetric.value}</p>
                      {currentSlide.statMetric.growth && <span className="text-xs text-emerald-400 font-bold">{currentSlide.statMetric.growth}</span>}
                    </div>
                  )}
                </div>

                {/* Modal Slide Footer */}
                <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between text-xs text-slate-400 gap-2 mt-4">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-bold text-white">Rizwan Ahmad</span>
                    <span>•</span>
                    <span>{currentSlide.contact?.role || 'Web Developer & Presentation Designer'}</span>
                    {currentSlide.contact?.phone && (
                      <>
                        <span className="text-slate-600">•</span>
                        <span className="text-blue-300 font-mono">📱 {currentSlide.contact.phone}</span>
                        <span className="text-slate-600">•</span>
                        <span className="text-slate-300 font-mono">✉️ {currentSlide.contact.email}</span>
                      </>
                    )}
                  </div>
                  <div className="flex items-center gap-3">
                    <a
                      href="#presentation-design"
                      onClick={() => setIsPresentationModalOpen(false)}
                      className="text-xs text-blue-400 hover:underline flex items-center gap-1 font-semibold"
                    >
                      <span>Jump to Full Presentation Section</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};

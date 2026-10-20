import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Compass, 
  Map, 
  PenTool, 
  Code, 
  Rocket, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  ChevronRight
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../portfolioData';
import { useLanguage } from '../context/LanguageContext';

export const Process: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const { t, isRTL } = useLanguage();

  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass': return <Compass className="w-6 h-6 text-blue-400" />;
      case 'Map': return <Map className="w-6 h-6 text-indigo-400" />;
      case 'PenTool': return <PenTool className="w-6 h-6 text-purple-400" />;
      case 'Code': return <Code className="w-6 h-6 text-emerald-400" />;
      case 'Rocket': return <Rocket className="w-6 h-6 text-amber-400" />;
      default: return <Sparkles className="w-6 h-6 text-blue-400" />;
    }
  };

  const stepsData = t.process.steps && t.process.steps.length === 5 
    ? t.process.steps 
    : [
        {
          title: PORTFOLIO_DATA.process[0].title,
          desc: PORTFOLIO_DATA.process[0].shortDesc,
          deliverable: 'Scope blueprint & sitemap',
        },
        {
          title: PORTFOLIO_DATA.process[1].title,
          desc: PORTFOLIO_DATA.process[1].shortDesc,
          deliverable: 'Figma prototypes & design system',
        },
        {
          title: PORTFOLIO_DATA.process[2].title,
          desc: PORTFOLIO_DATA.process[2].shortDesc,
          deliverable: 'Responsive frontend code',
        },
        {
          title: PORTFOLIO_DATA.process[3].title,
          desc: PORTFOLIO_DATA.process[3].shortDesc,
          deliverable: 'Speed test & QA report',
        },
        {
          title: PORTFOLIO_DATA.process[4].title,
          desc: PORTFOLIO_DATA.process[4].shortDesc,
          deliverable: 'Live site deployment & 30-day support',
        },
      ];

  const currentStep = stepsData[activeStep] || stepsData[0];

  return (
    <section id="process" className="py-24 relative overflow-hidden bg-[#090D16]/90 border-t border-slate-800/40">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Scroll Reveal */}
        <motion.div 
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.process.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            {t.process.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-200 to-purple-400">{t.process.titleHighlight}</span>
          </h2>
          <p className="text-slate-400 text-base max-w-2xl mt-3">
            {t.process.subtitle}
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-4" />
        </motion.div>

        {/* 5-Step Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 relative">
          
          {/* Animated horizontal connecting line on desktop */}
          <div className="hidden lg:block absolute top-14 left-10 right-10 h-[2px] bg-slate-800 z-0 overflow-hidden">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
              className={`h-full w-full bg-gradient-to-r from-blue-500 via-purple-500 to-amber-500 ${isRTL ? 'origin-right' : 'origin-left'}`}
            />
          </div>

          {PORTFOLIO_DATA.process.map((step, index) => {
            const isSelected = activeStep === index;
            const stepInfo = stepsData[index] || {
              title: step.title,
              desc: step.shortDesc,
              deliverable: '',
            };

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, delay: index * 0.06 }}
                onClick={() => setActiveStep(index)}
                className={`relative z-10 cursor-pointer p-6 rounded-3xl backdrop-blur-xl transition-all duration-200 flex flex-col justify-between ${
                  isSelected 
                    ? 'bg-slate-900/95 border-2 border-blue-500 shadow-2xl shadow-blue-500/25 -translate-y-1.5'
                    : 'bg-slate-900/50 border border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/70 hover:-translate-y-1'
                }`}
              >
                <div>
                  {/* Step Number & Icon Header */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-2xl font-black font-mono text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">
                      {step.number}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-slate-800/90 border border-slate-700/80 flex items-center justify-center shadow-md">
                      {getStepIcon(step.icon)}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">
                    {stepInfo.title}
                  </h3>

                  <p className="text-xs text-slate-300/90 leading-relaxed mb-4">
                    {stepInfo.desc}
                  </p>

                  {/* Bullet details */}
                  <div className="space-y-2 pt-3 border-t border-slate-800">
                    <div className="flex items-start gap-2 text-[11px] text-slate-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                      <span>{stepInfo.deliverable}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-800/50 flex items-center justify-between text-[11px] text-slate-400 font-medium">
                  <span>{t.process.stepPrefix} {index + 1}</span>
                  <span className="text-blue-400 flex items-center gap-0.5">
                    <span>{t.common.viewProject}</span> 
                    <ChevronRight className={`w-3 h-3 ${isRTL ? 'rotate-180' : ''}`} />
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Selected Step Summary Banner */}
        <motion.div 
          key={activeStep}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-12 p-6 sm:p-8 rounded-3xl bg-slate-900/70 border border-blue-500/30 backdrop-blur-xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 shrink-0">
              {getStepIcon(PORTFOLIO_DATA.process[activeStep].icon)}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-blue-400">{t.process.stepPrefix} {PORTFOLIO_DATA.process[activeStep].number}</span>
                <span className="text-slate-600">•</span>
                <h4 className="text-lg font-bold text-white">{currentStep.title}</h4>
              </div>
              <p className="text-sm text-slate-300 mt-1">
                {currentStep.desc}
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="shrink-0 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-xs sm:text-sm shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 transition-all flex items-center gap-2"
          >
            <span>{t.common.letsTalk}</span>
            <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
          </a>
        </motion.div>

      </div>
    </section>
  );
};

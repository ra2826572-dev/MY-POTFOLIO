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
import { PORTFOLIO_DATA, ProcessStep } from '../portfolioData';

export const Process: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

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

  return (
    <section id="process" className="py-24 relative overflow-hidden bg-[#090D16]/90 border-t border-slate-800/40">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Structured & Dependable</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-200 to-purple-400">Process</span>
          </h2>
          <p className="text-slate-400 text-base max-w-2xl mt-3">
            A clear, 5-phase structured workflow ensuring your project is completed with transparency, on-time delivery, and precision.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-4" />
        </div>

        {/* 5-Step Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 relative">
          
          {/* Subtle horizontal connecting line on desktop */}
          <div className="hidden lg:block absolute top-14 left-10 right-10 h-[2px] bg-gradient-to-r from-blue-600/40 via-purple-600/40 to-amber-600/40 z-0" />

          {PORTFOLIO_DATA.process.map((step, index) => {
            const isSelected = activeStep === index;

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setActiveStep(index)}
                className={`relative z-10 cursor-pointer p-6 rounded-3xl backdrop-blur-xl transition-all duration-300 flex flex-col justify-between ${
                  isSelected 
                    ? 'bg-slate-900/90 border-2 border-blue-500/80 shadow-2xl shadow-blue-500/20 -translate-y-2'
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
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-300/90 leading-relaxed mb-4">
                    {step.shortDesc}
                  </p>

                  {/* Bullet details */}
                  <div className="space-y-2 pt-3 border-t border-slate-800">
                    {step.details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2 text-[11px] text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-800/50 flex items-center justify-between text-[11px] text-slate-400 font-medium">
                  <span>Phase {index + 1}</span>
                  <span className="text-blue-400 flex items-center gap-0.5">
                    View <ChevronRight className="w-3 h-3" />
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
                <span className="text-xs font-mono font-bold text-blue-400">Step {PORTFOLIO_DATA.process[activeStep].number}</span>
                <span className="text-slate-600">•</span>
                <h4 className="text-lg font-bold text-white">{PORTFOLIO_DATA.process[activeStep].title} Phase</h4>
              </div>
              <p className="text-sm text-slate-300 mt-1">
                {PORTFOLIO_DATA.process[activeStep].shortDesc}
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="shrink-0 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-xs sm:text-sm shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 transition-all flex items-center gap-2"
          >
            <span>Start Step 1: Discovery</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

      </div>
    </section>
  );
};

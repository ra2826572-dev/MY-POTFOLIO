import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Eye, 
  MessageSquare 
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../portfolioData';
import { RizwanBadge } from './RizwanBadge';

interface HeroProps {
  onOpenQuoteModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  return (
    <section 
      id="home" 
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 lg:py-32 overflow-hidden"
    >
      {/* Background Ambient Glows & Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-purple-600/15 rounded-full blur-[130px]" />
        <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-amber-500/10 rounded-full blur-[120px]" />
        
        {/* Subtle grid lines */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Bio & Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 backdrop-blur-md mb-6 shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                Available for New Projects
              </span>
            </div>

            {/* Main Greeting and Name */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-4">
              Hi, I'm <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-200 to-purple-400">
                {PORTFOLIO_DATA.personal.name}
              </span>
            </h1>

            {/* Subheading / Role */}
            <div className="flex items-center gap-3 mb-6">
              <span className="h-[2px] w-8 bg-gradient-to-r from-blue-500 to-indigo-500 inline-block rounded-full" />
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-200 tracking-wide">
                {PORTFOLIO_DATA.personal.role}
              </h2>
            </div>

            {/* Short Description */}
            <p className="text-base sm:text-lg text-slate-300/90 max-w-2xl leading-relaxed mb-9 font-normal">
              "{PORTFOLIO_DATA.personal.bio}"
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              {/* View My Work */}
              <Link
                to="/projects"
                id="hero-view-work-btn"
                className="relative inline-flex items-center justify-center px-7 py-4 rounded-full font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 shadow-xl shadow-blue-600/25 hover:shadow-blue-600/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 group overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative z-10 flex items-center gap-2 text-base">
                  <Eye className="w-5 h-5" />
                  <span>View My Work</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              {/* Let's Work Together */}
              <Link
                to="/contact"
                id="hero-work-together-btn"
                className="inline-flex items-center justify-center px-7 py-4 rounded-full font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800/90 border border-slate-700/80 hover:border-slate-600 hover:text-white hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-lg shadow-black/40 text-base gap-2"
              >
                <MessageSquare className="w-5 h-5 text-blue-400" />
                <span>Let's Work Together</span>
              </Link>
            </div>

            {/* Quick trust metrics under hero buttons */}
            <div className="mt-10 pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-6 w-full max-w-lg">
              <div>
                <p className="text-2xl font-bold text-white font-mono">80+</p>
                <p className="text-xs text-slate-400">Projects Done</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white font-mono">50+</p>
                <p className="text-xs text-slate-400">Websites Live</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-emerald-400 font-mono">100%</p>
                <p className="text-xs text-slate-400">Responsive</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: High-End Circular 3D Emblem Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            <RizwanBadge />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

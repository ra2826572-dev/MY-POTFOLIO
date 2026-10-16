import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Eye, 
  MessageSquare,
  FileText
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../portfolioData';
import { RizwanBadge } from './RizwanBadge';
import { AnimatedCounter } from './AnimatedCounter';

interface HeroProps {
  onOpenQuoteModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.32,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section 
      id="home" 
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 lg:py-32 overflow-hidden"
    >
      {/* Background Ambient Glows & Subtle Grid Pattern (Original Blue/Purple Theme) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/12 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-purple-600/12 rounded-full blur-[130px]" />
        <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-indigo-600/10 rounded-full blur-[120px]" />
        
        {/* Volumetric Soft Light Ray (Original Blue / Indigo Theme) */}
        <div 
          className="absolute -top-24 -right-24 w-[550px] sm:w-[750px] h-[550px] sm:h-[750px] opacity-35 pointer-events-none"
          style={{
            background: 'conic-gradient(from 215deg at 80% 10%, rgba(59, 130, 246, 0.3) 0deg, rgba(99, 102, 241, 0.18) 28deg, transparent 60deg)',
            filter: 'blur(45px)',
            transform: 'rotate(-10deg)',
          }}
        />

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
          
          {/* Left Column: Headline, Bio & Action Buttons with Staggered Entrance */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Status Badge */}
            <motion.div variants={itemVariants} className="flex items-center gap-3 flex-wrap mb-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 backdrop-blur-md shadow-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                  Available for New Projects
                </span>
              </div>
            </motion.div>

            {/* Main Greeting and Name with subtle gradient shine */}
            <motion.h1 variants={itemVariants} className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-4">
              Hi, I'm <br className="hidden sm:inline" />
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-200 to-purple-400 bg-[length:200%_auto] transition-all duration-700">
                {PORTFOLIO_DATA.personal.name}
              </span>
            </motion.h1>

            {/* Subheading / Role */}
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
              <span className="h-[2px] w-8 bg-gradient-to-r from-blue-500 to-indigo-500 inline-block rounded-full" />
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-200 tracking-wide">
                {PORTFOLIO_DATA.personal.role}
              </h2>
            </motion.div>

            {/* Short Description */}
            <motion.p variants={itemVariants} className="text-base sm:text-lg text-slate-300/90 max-w-2xl leading-relaxed mb-9 font-normal">
              "{PORTFOLIO_DATA.personal.bio}"
            </motion.p>

            {/* Primary Action Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              {/* View My Work */}
              <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.2 }}>
                <Link
                  to="/projects"
                  id="hero-view-work-btn"
                  className="relative inline-flex items-center justify-center px-8 py-4 rounded-full font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 shadow-xl shadow-blue-600/30 hover:shadow-blue-600/50 border border-blue-400/20 transition-all duration-300 group overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white/15 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  <span className="relative z-10 flex items-center gap-2 text-base">
                    <Eye className="w-5 h-5" />
                    <span>View My Work</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-200" />
                  </span>
                </Link>
              </motion.div>
            </motion.div>

            {/* Quick trust metrics under hero buttons with AnimatedCounter */}
            <motion.div variants={itemVariants} className="mt-10 pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-6 w-full max-w-lg">
              <div className="group">
                <p className="text-2xl sm:text-3xl font-black text-white font-mono tracking-tight group-hover:text-blue-400 transition-colors">
                  <AnimatedCounter value={80} suffix="+" />
                </p>
                <p className="text-xs text-slate-400 mt-0.5">Projects Done</p>
              </div>
              <div className="group">
                <p className="text-2xl sm:text-3xl font-black text-white font-mono tracking-tight group-hover:text-indigo-400 transition-colors">
                  <AnimatedCounter value={50} suffix="+" />
                </p>
                <p className="text-xs text-slate-400 mt-0.5">Websites Live</p>
              </div>
              <div className="group">
                <p className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono tracking-tight">
                  <AnimatedCounter value={100} suffix="%" />
                </p>
                <p className="text-xs text-slate-400 mt-0.5">Responsive</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: High-End Circular 3D Emblem Badge with Smooth Reveal */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 14 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            <RizwanBadge />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

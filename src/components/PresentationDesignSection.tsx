import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Presentation, 
  Briefcase, 
  GraduationCap, 
  TrendingUp, 
  BarChart3, 
  Sparkles, 
  Type, 
  Palette, 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  X, 
  CheckCircle2, 
  ArrowRight, 
  Sliders, 
  Layers, 
  Monitor, 
  Star
} from 'lucide-react';
import { PORTFOLIO_DATA, PresentationSkillItem, PresentationSlide } from '../portfolioData';
import { Link } from 'react-router-dom';

// Custom Authentic PowerPoint Icon
export const PowerPointIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg 
    viewBox="0 0 48 48" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
    aria-label="Microsoft PowerPoint"
  >
    <rect x="4" y="6" width="40" height="36" rx="6" fill="#D24726" />
    <path 
      d="M28 14H18C16.8954 14 16 14.8954 16 16V32C16 33.1046 16.8954 34 18 34H28C33.5228 34 38 29.5228 38 24C38 18.4772 33.5228 14 28 14Z" 
      fill="#EB3C00" 
      opacity="0.9"
    />
    <rect x="6" y="10" width="22" height="28" rx="4" fill="#FF8F6B" opacity="0.35" />
    <path 
      d="M20 18H25.5C27.9853 18 30 20.0147 30 22.5C30 24.9853 27.9853 27 25.5 27H23V31H20V18ZM23 24.5H25.2C26.3046 24.5 27.2 23.6046 27.2 22.5C27.2 21.3954 26.3046 20.5 25.2 20.5H23V24.5Z" 
      fill="white" 
    />
  </svg>
);

export const PresentationDesignSection: React.FC = () => {
  const { presentationDesign } = PORTFOLIO_DATA;
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [isFullscreenModalOpen, setIsFullscreenModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'all' | 'corporate' | 'creative' | 'analytics'>('all');

  const currentSlide: PresentationSlide = presentationDesign.slides[activeSlideIndex] || presentationDesign.slides[0];

  const handlePrevSlide = () => {
    setActiveSlideIndex((prev) => (prev === 0 ? presentationDesign.slides.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setActiveSlideIndex((prev) => (prev === presentationDesign.slides.length - 1 ? 0 : prev + 1));
  };

  // Icon mapping for the 8 skills
  const renderSkillIcon = (iconName: string) => {
    switch (iconName) {
      case 'PowerPoint':
        return <PowerPointIcon className="w-6 h-6" />;
      case 'Briefcase':
        return <Briefcase className="w-6 h-6 text-blue-400" />;
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6 text-emerald-400" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-purple-400" />;
      case 'BarChart3':
        return <BarChart3 className="w-6 h-6 text-amber-400" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-pink-400" />;
      case 'Type':
        return <Type className="w-6 h-6 text-cyan-400" />;
      case 'Palette':
        return <Palette className="w-6 h-6 text-indigo-400" />;
      default:
        return <Presentation className="w-6 h-6 text-blue-400" />;
    }
  };

  // Filter skills
  const filteredSkills = presentationDesign.skills.filter((skill) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'corporate') return skill.category.toLowerCase().includes('corporate') || skill.category.toLowerCase().includes('enterprise');
    if (activeTab === 'creative') return skill.category.toLowerCase().includes('creative') || skill.category.toLowerCase().includes('rapid') || skill.category.toLowerCase().includes('visual');
    if (activeTab === 'analytics') return skill.category.toLowerCase().includes('data') || skill.category.toLowerCase().includes('fundraising');
    return true;
  });

  return (
    <section 
      id="presentation-design" 
      className="py-20 relative overflow-hidden bg-[#080B11] border-t border-slate-800/80"
    >
      {/* Background Ambience consistent with hero & services */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-10 w-[450px] h-[450px] bg-indigo-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{presentationDesign.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Presentation <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-200 to-purple-400">Design</span>
          </h2>

          <p className="text-slate-400 text-base max-w-3xl mt-3 leading-relaxed">
            {presentationDesign.tagline}
          </p>

          {/* Quick Metrics Bar */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-3xl">
            <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800/80 text-center backdrop-blur-sm">
              <span className="text-xs text-slate-400 block mb-0.5">Overall Proficiency</span>
              <strong className="text-xl font-black text-blue-400 font-mono">{presentationDesign.overallProficiency}%</strong>
            </div>
            <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800/80 text-center backdrop-blur-sm">
              <span className="text-xs text-slate-400 block mb-0.5">Primary Tool</span>
              <strong className="text-base font-bold text-white flex items-center justify-center gap-1.5">
                <PowerPointIcon className="w-4 h-4" />
                PowerPoint
              </strong>
            </div>
            <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800/80 text-center backdrop-blur-sm">
              <span className="text-xs text-slate-400 block mb-0.5">Standard Format</span>
              <strong className="text-base font-bold text-slate-200 font-mono">16:9 Widescreen</strong>
            </div>
            <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800/80 text-center backdrop-blur-sm">
              <span className="text-xs text-slate-400 block mb-0.5">Delivery Formats</span>
              <strong className="text-base font-bold text-emerald-400">PPTX • PDF • Canva</strong>
            </div>
          </div>

          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-8" />
        </div>

        {/* ========================================================================= */}
        {/* Interactive Professional Presentation Preview (16:9 Slide Deck Mockup) */}
        {/* ========================================================================= */}
        <div className="mb-20">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shadow-inner">
                <Monitor className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <span>Professional Presentation Preview</span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-semibold">
                    Interactive
                  </span>
                </h3>
                <p className="text-xs text-slate-400">
                  Switch slides below to experience real corporate & pitch deck typography, layout pacing, and charts.
                </p>
              </div>
            </div>

            {/* Slide Navigation Controls */}
            <div className="flex items-center gap-2 self-end sm:self-auto">
              <button
                type="button"
                onClick={handlePrevSlide}
                aria-label="Previous Slide"
                className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-all shadow-md active:scale-95"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <span className="px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono font-bold text-blue-400">
                {currentSlide.slideNumber}
              </span>

              <button
                type="button"
                onClick={handleNextSlide}
                aria-label="Next Slide"
                className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-all shadow-md active:scale-95"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={() => setIsFullscreenModalOpen(true)}
                title="Open Fullscreen Slide View"
                className="p-2.5 rounded-xl bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/30 text-blue-300 hover:text-white transition-all ml-1"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* 16:9 Presentation Frame */}
          <div className="relative rounded-3xl bg-slate-950 border border-slate-800/90 shadow-2xl overflow-hidden group">
            
            {/* Presentation Chrome Top Bar */}
            <div className="px-4 sm:px-6 py-3 bg-[#0A0E17] border-b border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <PowerPointIcon className="w-3.5 h-3.5" />
                <span className="font-mono text-slate-300">Investor_PitchDeck_Widescreen_2026.pptx</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="hidden md:inline-block px-2 py-0.5 rounded bg-slate-800 text-[10px] text-slate-300 font-mono">
                  16:9 Widescreen Master
                </span>
                <span className="text-slate-400 font-mono text-xs">
                  Slide {activeSlideIndex + 1} / {presentationDesign.slides.length}
                </span>
              </div>
            </div>

            {/* Slide Body (16:9 Ratio Canvas) */}
            <div className="p-6 sm:p-10 lg:p-14 bg-gradient-to-br from-[#090D16] via-[#0D1322] to-[#0A0E17] relative min-h-[380px] sm:min-h-[440px] flex flex-col justify-between">
              
              {/* Subtle background slide geometry grid */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b0a_1px,transparent_1px),linear-gradient(to_bottom,#1e293b0a_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />
              <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />

              {/* Slide Top Metadata */}
              <div className="relative z-10">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider">
                    <Sparkles className="w-3 h-3" />
                    <span>{currentSlide.category}</span>
                  </div>

                  <span className="text-xs font-mono text-slate-400 tracking-wider">
                    PROJECT PROTOCOL // 0{activeSlideIndex + 1}
                  </span>
                </div>

                {/* Slide Headings */}
                <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight max-w-4xl">
                  {currentSlide.title}
                </h3>
                <p className="text-sm sm:text-base font-semibold text-indigo-300 mt-1">
                  {currentSlide.subtitle}
                </p>

                {/* Slide Headline / Executive Summary */}
                <div className="mt-4 p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-200 text-xs sm:text-sm font-medium leading-relaxed max-w-4xl">
                  "{currentSlide.headline}"
                </div>
              </div>

              {/* Middle Section: Points Grid + Stat Highlight */}
              <div className="relative z-10 my-6 grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
                
                {/* Points Column */}
                <div className="lg:col-span-8 space-y-3.5">
                  {currentSlide.points.map((pt, pIdx) => (
                    <div 
                      key={pIdx}
                      className={`p-4 rounded-2xl border transition-all ${
                        pt.highlight 
                          ? 'bg-gradient-to-r from-blue-950/40 to-slate-900/80 border-blue-500/40 shadow-lg shadow-blue-950/20' 
                          : 'bg-slate-900/60 border-slate-800/80'
                      }`}
                    >
                      <div className="flex flex-wrap items-baseline justify-between gap-1 mb-1">
                        <strong className="text-sm font-bold text-white flex items-center gap-2">
                          <span className={`w-2 h-2 rounded-full ${pt.highlight ? 'bg-blue-400 animate-pulse' : 'bg-slate-500'}`} />
                          {pt.label}
                        </strong>
                        {pt.value && (
                          <span className="text-xs font-bold font-mono text-blue-400">
                            {pt.value}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-300 pl-4 leading-relaxed">
                        {pt.desc}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Big Stat Metric Showcase Card */}
                {currentSlide.statMetric && (
                  <div className="lg:col-span-4 p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-slate-900/80 to-slate-950 border border-blue-500/30 text-center flex flex-col justify-center items-center shadow-xl shadow-black/50">
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-2">
                      Key Performance Metric
                    </span>
                    <strong className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-200 to-purple-400 font-mono my-1">
                      {currentSlide.statMetric.value}
                    </strong>
                    <span className="text-xs text-slate-300 font-medium">
                      {currentSlide.statMetric.label}
                    </span>
                    {currentSlide.statMetric.growth && (
                      <span className="mt-3 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold">
                        {currentSlide.statMetric.growth}
                      </span>
                    )}
                  </div>
                )}

              </div>

              {/* Bottom Footer of Slide */}
              <div className="relative z-10 pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between text-xs text-slate-400 gap-2">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-bold text-white">Rizwan Ahmad</span>
                  <span>•</span>
                  <span>{currentSlide.contact?.role || 'Lead Presentation & Web Designer'}</span>
                  {currentSlide.contact?.phone && (
                    <>
                      <span className="text-slate-600">•</span>
                      <span className="text-blue-300 font-mono">📱 {currentSlide.contact.phone}</span>
                      <span className="text-slate-600">•</span>
                      <span className="text-slate-300 font-mono">✉️ {currentSlide.contact.email}</span>
                    </>
                  )}
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-mono text-blue-400">{currentSlide.slideNumber}</span>
                  <span className="text-[11px] text-slate-500">Designed with PowerPoint & React</span>
                </div>
              </div>

            </div>

            {/* Slide Selector Thumbnails Row */}
            <div className="p-3 bg-slate-950 border-t border-slate-800/80 flex items-center justify-between overflow-x-auto gap-2">
              <div className="flex items-center gap-2 w-full">
                {presentationDesign.slides.map((s, idx) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setActiveSlideIndex(idx)}
                    className={`flex-1 min-w-[140px] p-2.5 rounded-xl text-left transition-all border ${
                      activeSlideIndex === idx
                        ? 'bg-blue-950/50 border-blue-500/50 text-white shadow-md'
                        : 'bg-slate-900/60 border-slate-800/70 text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] font-mono font-bold text-blue-400">
                        {s.slideNumber}
                      </span>
                      {activeSlideIndex === idx && (
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                      )}
                    </div>
                    <p className="text-xs font-bold truncate">
                      {s.title}
                    </p>
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* ========================================================================= */}
        {/* The 8 Presentation Design Skills Grid */}
        {/* ========================================================================= */}
        <div className="mb-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-400 mb-1">
                <Sliders className="w-3.5 h-3.5" />
                <span>Specialized Presentation Proficiencies</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Presentation Design Competencies
              </h3>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 bg-slate-900/80 p-1 rounded-xl border border-slate-800">
              <button
                type="button"
                onClick={() => setActiveTab('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  activeTab === 'all' 
                    ? 'bg-blue-600 text-white shadow-sm' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                All (8)
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('corporate')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  activeTab === 'corporate' 
                    ? 'bg-blue-600 text-white shadow-sm' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Corporate & Business
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('analytics')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  activeTab === 'analytics' 
                    ? 'bg-blue-600 text-white shadow-sm' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Pitch & Analytics
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('creative')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  activeTab === 'creative' 
                    ? 'bg-blue-600 text-white shadow-sm' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Creative & Canva
              </button>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimatePresence>
              {filteredSkills.map((skill, index) => (
                <motion.div
                  key={skill.id}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, delay: index * 0.04 }}
                  className="group relative p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-blue-500/40 backdrop-blur-xl shadow-lg shadow-black/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  {/* Hover ambient highlight */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 via-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                  <div>
                    {/* Top Row: Icon + Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                        {renderSkillIcon(skill.iconName)}
                      </div>
                      <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-slate-800/90 border border-slate-700/50 text-blue-400">
                        {skill.badge}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-white mb-1 group-hover:text-blue-300 transition-colors">
                      {skill.title}
                    </h4>

                    <p className="text-[11px] font-semibold text-slate-400 mb-3">
                      {skill.category}
                    </p>

                    <p className="text-xs text-slate-300 leading-relaxed mb-4">
                      {skill.description}
                    </p>

                    {/* Deliverables Checklist */}
                    <div className="space-y-1.5 pt-3 border-t border-slate-800/80 mb-5">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        Key Deliverables:
                      </p>
                      {skill.deliverables.map((del, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-1.5 text-[11px] text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                          <span>{del}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Proficiency Bar */}
                  <div className="pt-3 border-t border-slate-800/80">
                    <div className="flex justify-between items-center text-[11px] font-semibold mb-1.5">
                      <span className="text-slate-400">Proficiency Level</span>
                      <span className="font-mono text-blue-400 font-bold">{skill.proficiency}%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden p-0.5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.proficiency}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: 'easeOut', delay: 0.15 }}
                        className="h-full rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500"
                      />
                    </div>
                  </div>

                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* Presentation Design Software & Stack */}
        {/* ========================================================================= */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-xl mb-12">
          <h4 className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-4 flex items-center gap-2">
            <Layers className="w-4 h-4" />
            <span>Mastered Software & Design Tools</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {presentationDesign.tools.map((tool, tIdx) => (
              <div 
                key={tIdx} 
                className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <strong className="text-sm font-bold text-white flex items-center gap-1.5">
                      {tool.name.includes('PowerPoint') ? (
                        <PowerPointIcon className="w-4 h-4" />
                      ) : (
                        <Palette className="w-4 h-4 text-purple-400" />
                      )}
                      {tool.name}
                    </strong>
                    <span className="text-xs font-mono font-bold text-blue-400">
                      {tool.proficiency}%
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 leading-snug">
                    {tool.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* Call to Action Banner (Matches standard website cards) */}
        {/* ========================================================================= */}
        <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-blue-500/40 backdrop-blur-xl shadow-lg shadow-black/40 flex flex-col md:flex-row items-center justify-between gap-6 transition-all duration-300">
          <div className="flex items-start sm:items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-blue-400 shrink-0 shadow-inner">
              <PowerPointIcon className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-white">
                Need a High-Impact Pitch Deck or Corporate Presentation?
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl leading-relaxed">
                Whether pitching venture capital for a seed round, preparing an executive QBR, or designing an interactive training masterclass, I deliver presentation decks that command attention.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0 flex-wrap">
            <Link
              to="/contact"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-blue-500/25 hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
            >
              <span>Order Presentation Deck</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            
            <a
              href={PORTFOLIO_DATA.contact.socials.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-full bg-slate-800/80 border border-slate-700 hover:border-slate-600 text-slate-200 hover:text-white font-semibold text-xs sm:text-sm transition-all"
            >
              <span>Discuss on WhatsApp</span>
            </a>
          </div>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* Fullscreen Slide Modal */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {isFullscreenModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/90 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-6xl rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden flex flex-col max-h-[95vh]"
            >
              {/* Modal Top Bar */}
              <div className="p-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <PowerPointIcon className="w-5 h-5" />
                  <span className="font-bold text-white text-sm">
                    {currentSlide.title} • {currentSlide.slideNumber}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handlePrevSlide}
                    className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNextSlide}
                    className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsFullscreenModalOpen(false)}
                    className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Modal Slide Canvas */}
              <div className="p-8 sm:p-12 overflow-y-auto bg-gradient-to-br from-[#090D16] to-[#0D1322] flex-grow">
                <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider inline-block mb-3">
                  {currentSlide.category}
                </span>
                <h3 className="text-3xl sm:text-4xl font-black text-white mb-2">
                  {currentSlide.title}
                </h3>
                <p className="text-sm font-bold text-indigo-300 mb-6">
                  {currentSlide.subtitle}
                </p>
                <p className="text-base text-slate-200 mb-8 max-w-4xl leading-relaxed">
                  "{currentSlide.headline}"
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  {currentSlide.points.map((pt, i) => (
                    <div key={i} className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800">
                      <strong className="text-sm font-bold text-white block mb-1">{pt.label}</strong>
                      {pt.value && <p className="text-sm font-mono font-bold text-blue-400 mb-2">{pt.value}</p>}
                      <p className="text-xs text-slate-300">{pt.desc}</p>
                    </div>
                  ))}
                </div>

                {currentSlide.statMetric && (
                  <div className="p-6 rounded-2xl bg-slate-900 border border-blue-500/30 text-center max-w-md mx-auto">
                    <span className="text-xs text-blue-400 uppercase font-bold tracking-wider">{currentSlide.statMetric.label}</span>
                    <p className="text-5xl font-black text-white font-mono my-2">{currentSlide.statMetric.value}</p>
                    {currentSlide.statMetric.growth && <span className="text-xs text-emerald-400 font-bold">{currentSlide.statMetric.growth}</span>}
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  FileCode, 
  Palette, 
  Code2, 
  Atom, 
  Globe2, 
  LayoutGrid, 
  Figma, 
  Smartphone, 
  PenTool, 
  Sparkles, 
  Layers, 
  Zap,
  CheckCircle,
  Cpu,
  Cloud,
  Bot,
  Server,
  ExternalLink,
  Award,
  ShieldCheck,
  TrendingUp,
  Briefcase,
  BarChart3,
  GraduationCap,
  Type
} from 'lucide-react';
import { PORTFOLIO_DATA, Skill } from '../portfolioData';
import { PresentationDesignSection, PowerPointIcon } from './PresentationDesignSection';
import { VSCodeSection, VSCodeIcon } from './VSCodeSection';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Presentation Design', 'Cloud & Hosting', 'Frontend & Code', 'CMS & Platforms', 'Design & Creative', 'Tools & AI'];

  // Map icon names to Lucide icons
  const renderSkillIcon = (iconName: string) => {
    const props = { className: "w-6 h-6" };
    switch (iconName) {
      case 'VSCode': return <VSCodeIcon className="w-6 h-6" />;
      case 'PowerPoint': return <PowerPointIcon className="w-6 h-6" />;
      case 'TrendingUp': return <TrendingUp {...props} className="w-6 h-6 text-purple-400" />;
      case 'Briefcase': return <Briefcase {...props} className="w-6 h-6 text-blue-400" />;
      case 'BarChart3': return <BarChart3 {...props} className="w-6 h-6 text-amber-400" />;
      case 'GraduationCap': return <GraduationCap {...props} className="w-6 h-6 text-emerald-400" />;
      case 'Type': return <Type {...props} className="w-6 h-6 text-cyan-400" />;
      case 'Cloud': return <Cloud {...props} className="w-6 h-6 text-sky-400" />;
      case 'Bot': return <Bot {...props} className="w-6 h-6 text-purple-400" />;
      case 'Server': return <Server {...props} className="w-6 h-6 text-emerald-400" />;
      case 'FileCode': return <FileCode {...props} className="w-6 h-6 text-orange-400" />;
      case 'Palette': return <Palette {...props} className="w-6 h-6 text-blue-400" />;
      case 'Code2': return <Code2 {...props} className="w-6 h-6 text-yellow-400" />;
      case 'Atom': return <Atom {...props} className="w-6 h-6 text-cyan-400" />;
      case 'Globe2': return <Globe2 {...props} className="w-6 h-6 text-sky-400" />;
      case 'LayoutGrid': return <LayoutGrid {...props} className="w-6 h-6 text-pink-400" />;
      case 'Figma': return <Figma {...props} className="w-6 h-6 text-violet-400" />;
      case 'Smartphone': return <Smartphone {...props} className="w-6 h-6 text-emerald-400" />;
      case 'PenTool': return <PenTool {...props} className="w-6 h-6 text-amber-400" />;
      case 'Sparkles': return <Sparkles {...props} className="w-6 h-6 text-purple-400" />;
      case 'Layers': return <Layers {...props} className="w-6 h-6 text-teal-400" />;
      case 'Zap': return <Zap {...props} className="w-6 h-6 text-yellow-300" />;
      default: return <Cpu {...props} className="w-6 h-6 text-indigo-400" />;
    }
  };

  const filteredSkills = selectedCategory === 'All'
    ? PORTFOLIO_DATA.skills
    : PORTFOLIO_DATA.skills.filter(s => s.category === selectedCategory);

  return (
    <>
    <section id="skills" className="py-24 relative overflow-hidden bg-[#080B11]">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Core Competencies & Stack</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-200 to-purple-400">Skills</span>
          </h2>
          <p className="text-slate-400 text-base max-w-xl mt-3">
            A battle-tested toolset covering modern frontend code, responsive CMS architecture, and intuitive UI/UX design.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-4" />
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25 scale-105'
                  : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Animated Skills Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        >
          <AnimatePresence>
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                className="group relative p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-blue-500/40 backdrop-blur-xl shadow-lg shadow-black/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10 flex flex-col justify-between"
              >
                {/* Glow layer on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 via-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center group-hover:scale-110 transition-transform shadow-inner">
                      {renderSkillIcon(skill.iconName)}
                    </div>
                    <div className="flex items-center gap-1.5 flex-wrap justify-end">
                      {skill.name.toLowerCase().includes('expert') && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-400 border border-amber-500/30 shadow-sm shadow-amber-500/10">
                          ⭐ Expert
                        </span>
                      )}
                      <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-800/90 text-slate-300 border border-slate-700/50">
                        {skill.category}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-blue-300 transition-colors">
                    {skill.name}
                  </h3>

                  <p className="text-xs text-slate-400 font-medium mb-4">
                    {skill.experience}
                  </p>
                  {skill.certificateUrl && (
                    <a
                      href={skill.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-500/10 hover:bg-purple-500/20 text-purple-300 text-xs font-semibold border border-purple-500/30 transition-all hover:scale-[1.02] shadow-sm group/cert w-fit"
                    >
                      <Award className="w-3.5 h-3.5 text-purple-400 group-hover/cert:rotate-12 transition-transform" />
                      <span>{skill.certificateTitle || 'Verify Credential'}</span>
                      <ExternalLink className="w-3 h-3 text-purple-400" />
                    </a>
                  )}
                </div>

                {/* Skill Level Progress Bar */}
                <div className="space-y-1.5 pt-3 border-t border-slate-800/60">
                  <div className="flex justify-between text-[11px] font-semibold">
                    <span className="text-slate-400">Proficiency</span>
                    <span className="text-blue-400 font-mono">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: 'easeOut', delay: 0.1 }}
                      className="h-full rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500"
                    />
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Official Claude Certification Showcase Card */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-purple-950/50 via-slate-900/90 to-indigo-950/50 border border-purple-500/30 backdrop-blur-xl shadow-2xl shadow-purple-950/40 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-48 h-48 bg-purple-500/15 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="flex items-start sm:items-center gap-5">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-600 border border-purple-400/40 flex items-center justify-center text-white shrink-0 shadow-lg shadow-purple-600/30">
                <ShieldCheck className="w-8 h-8 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  <span className="px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 text-[11px] font-bold border border-purple-500/30 uppercase tracking-wider flex items-center gap-1">
                    <Award className="w-3 h-3" /> Official Credential
                  </span>
                  <span className="text-emerald-400 text-xs font-semibold flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5" /> Verified by Anthropic
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Anthropic Claude Certified Specialist
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
                  Certified through Claude Academy for advanced prompt engineering, agentic workflow architecture, tool-use integration, and production-grade full-stack AI applications.
                </p>
                <div className="mt-2 text-[11px] text-slate-400 font-mono">
                  Credential ID: <span className="text-purple-300">756dec40601edbd310dabed4772c31e8</span>
                </div>
              </div>
            </div>

            <a
              href="https://academy.claude.com/verify/756dec40601edbd310dabed4772c31e8"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white font-bold text-sm shadow-xl shadow-purple-600/30 hover:scale-105 active:scale-95 transition-all duration-300 border border-purple-400/30 group"
            >
              <Award className="w-4 h-4 text-purple-200" />
              <span>Verify Official Certificate</span>
              <ExternalLink className="w-4 h-4 text-purple-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Visual Studio Code Keyboard Shortcuts & Workflow Mastery Showcase */}
        <VSCodeSection />

        {/* Highlight Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-blue-500/40 backdrop-blur-xl shadow-lg shadow-black/40 flex flex-col md:flex-row items-center justify-between gap-6 transition-all duration-300">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-blue-400 shrink-0 shadow-inner">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">Have a specific tech stack in mind?</h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Whether you prefer React, custom WordPress, Elementor, Shopify or custom HTML/CSS, I adapt to your business needs.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="shrink-0 px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-blue-500/25 hover:scale-105 active:scale-95 transition-all"
          >
            Discuss Your Stack
          </a>
        </div>

      </div>
    </section>

    {/* Dedicated Professional Presentation Design Section */}
    <PresentationDesignSection />
    </>
  );
};

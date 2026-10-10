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
  Cpu,
  Cloud,
  Bot,
  Server,
  TrendingUp,
  Briefcase,
  BarChart3,
  GraduationCap,
  Type
} from 'lucide-react';
import { PORTFOLIO_DATA, Skill } from '../portfolioData';
import { PowerPointIcon } from './icons/PowerPointIcon';

const VSCodeIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Visual Studio Code">
    <path d="M187.9 248.8c5.4 2.8 12.1 2.2 17-1.5l42.6-32.9c5.2-4 8.5-10.3 8.5-16.9V58.5c0-6.6-3.3-12.8-8.5-16.9l-42.6-32.9c-4.9-3.7-11.6-4.3-17-1.5-5.4 2.8-8.9 8.4-8.9 14.5v20.9L87.5 128l91.5 85.4v20.9c0 6.1 3.5 11.7 8.9 14.5z" fill="#0065A9"/>
    <path d="M190.5 42.6L79.4 128l111.1 85.4V42.6z" fill="#007ACC"/>
    <path d="M239.5 45.4l-42.6-32.9c-4.9-3.7-11.6-4.3-17-1.5-2.8 1.4-5 3.7-6.5 6.4l-94 72.8 30.1 23.3 128.4-98.3c1.1-.9 1.6-1.5 1.6-1.5v-8.3z" fill="#1F9CF0"/>
    <path d="M196.9 244.5c4.9-3.7 11.6-4.3 17-1.5l25.6-19.8-128.4-98.3-30.1 23.3 94 72.8c1.5 2.7 3.7 5 6.5 6.4 4.9 2.5 10.5 2.1 14.4-2.9z" fill="#0065A9"/>
    <path d="M16.5 75.3c-4.7-3.6-11.4-3.1-15.6 1.2-4.1 4.3-4.3 11-.5 15.6l44.4 35.9-44.4 35.9c-3.8 4.6-3.6 11.3.5 15.6 4.2 4.3 10.9 4.8 15.6 1.2l56.3-45.5c4.5-3.6 4.5-10.4 0-14L16.5 75.3z" fill="#007ACC"/>
  </svg>
);

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

        {/* Category Filter Pills with Smooth Animated Tab Indicator */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((category) => {
            const isSelected = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`relative px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  isSelected
                    ? 'text-white shadow-lg shadow-blue-500/25'
                    : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="activeSkillCategoryTab"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 shadow-md shadow-blue-500/30"
                    transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{category}</span>
              </button>
            );
          })}
        </div>

        {/* Animated Skills Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -10 }}
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ duration: 0.35, delay: index * 0.02 }}
                className="group relative p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-blue-500/50 backdrop-blur-xl shadow-lg shadow-black/40 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/15 flex flex-col justify-between overflow-hidden"
              >
                {/* Glow layer on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 via-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

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

      </div>
    </section>
  );
};

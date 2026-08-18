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
  Cpu
} from 'lucide-react';
import { PORTFOLIO_DATA, Skill } from '../portfolioData';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Frontend & Code', 'CMS & Platforms', 'Design & Creative', 'Tools & AI'];

  // Map icon names to Lucide icons
  const renderSkillIcon = (iconName: string) => {
    const props = { className: "w-6 h-6" };
    switch (iconName) {
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
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-800/90 text-slate-300 border border-slate-700/50">
                      {skill.category}
                    </span>
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

        {/* Highlight Banner */}
        <div className="mt-14 p-6 rounded-2xl bg-gradient-to-r from-blue-950/40 via-indigo-950/40 to-purple-950/40 border border-blue-800/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-blue-400 shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">Have a specific tech stack in mind?</h4>
              <p className="text-xs text-slate-300 mt-0.5">
                Whether you prefer React, custom WordPress, Elementor, Shopify or custom HTML/CSS, I adapt to your business needs.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="shrink-0 px-6 py-2.5 rounded-full bg-white text-slate-950 font-bold text-xs sm:text-sm hover:bg-blue-50 transition-colors shadow-md"
          >
            Discuss Your Stack
          </a>
        </div>

      </div>
    </section>
  );
};

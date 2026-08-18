import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  ExternalLink, 
  Eye, 
  Layers, 
  ArrowUpRight, 
  Monitor, 
  Smartphone,
  CheckCircle2,
  Code2
} from 'lucide-react';
import { PORTFOLIO_DATA, Project } from '../portfolioData';
import { ProjectModal } from './ProjectModal';

interface ProjectsProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onOpenQuoteModal }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'Business', 'Restaurant', 'Salon', 'E-Commerce', 'Hotel', 'Portfolio'];

  const filteredProjects = activeCategory === 'All'
    ? PORTFOLIO_DATA.projects
    : PORTFOLIO_DATA.projects.filter(p => p.category.toLowerCase() === activeCategory.toLowerCase());

  const handleLiveDemoClick = (e: React.MouseEvent, project: Project) => {
    e.preventDefault();
    // Open project preview modal with live viewport inspection
    setSelectedProject(project);
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#080B11]">
      
      {/* Background glowing gradients */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Proven Design Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-200 to-purple-400">Featured Work</span>
          </h2>
          <p className="text-slate-400 text-base max-w-2xl mt-3">
            Explore a curated selection of responsive websites, e-commerce stores, and high-converting web applications.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-4" />
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25 scale-105'
                  : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group relative rounded-3xl bg-slate-900/60 border border-slate-800/90 hover:border-blue-500/50 backdrop-blur-xl shadow-xl shadow-black/40 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10"
              >
                <div>
                  {/* Screenshot Container with Browser Frame Style */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover object-top group-hover:scale-108 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />

                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />

                    {/* Category Chip */}
                    <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-slate-900/90 backdrop-blur-md border border-slate-700/80 text-[11px] font-bold text-blue-300">
                      {project.category}
                    </div>

                    {/* Quick View Button on Image Hover */}
                    <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
                      <button
                        type="button"
                        onClick={() => setSelectedProject(project)}
                        className="px-4 py-2 rounded-full bg-white text-slate-950 text-xs font-bold shadow-lg hover:bg-blue-50 flex items-center gap-1.5 transition-transform hover:scale-105"
                      >
                        <Eye className="w-3.5 h-3.5 text-blue-600" />
                        <span>Quick View</span>
                      </button>
                    </div>
                  </div>

                  {/* Card Content Area */}
                  <div className="p-6">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-semibold text-indigo-400">
                        {project.tagline}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors line-clamp-1">
                      {project.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-300/85 leading-relaxed line-clamp-2 mb-4 font-normal">
                      {project.description}
                    </p>

                    {/* Technology Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-0.5 rounded-md bg-slate-800/90 text-slate-300 text-[11px] font-medium border border-slate-700/60"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-0.5 rounded-md bg-slate-800/60 text-slate-400 text-[10px]">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons: Live Demo & View Project */}
                <div className="px-6 pb-6 pt-2 grid grid-cols-2 gap-3 border-t border-slate-800/60">
                  {/* Live Demo button */}
                  <button
                    type="button"
                    onClick={(e) => handleLiveDemoClick(e, project)}
                    className="py-2.5 px-3 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-200 hover:text-white text-xs font-semibold border border-slate-700 transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-blue-400" />
                    <span>Live Demo</span>
                  </button>

                  {/* View Project button */}
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="py-2.5 px-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-semibold shadow-md shadow-blue-600/20 hover:shadow-blue-600/40 hover:opacity-95 transition-all flex items-center justify-center gap-1.5"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Project</span>
                  </button>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Customization Callout */}
        <div className="mt-16 p-6 rounded-2xl bg-slate-900/40 border border-dashed border-slate-800 text-center">
          <p className="text-xs sm:text-sm text-slate-400">
            💡 <strong className="text-slate-300">Customizable Showcase:</strong> All 6 project screenshots, live URLs, and descriptions can be customized instantly in <code className="text-blue-400">portfolioData.ts</code>.
          </p>
        </div>

      </div>

      {/* Interactive Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onOpenQuoteModal={onOpenQuoteModal}
        />
      )}
    </section>
  );
};

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  ExternalLink, 
  Eye, 
  Plus, 
  Edit3, 
  RotateCcw, 
  Check, 
  FolderPlus,
  FolderOpen
} from 'lucide-react';
import { PORTFOLIO_DATA, Project } from '../portfolioData';
import { ProjectModal } from './ProjectModal';
import { ProjectManagerModal } from './ProjectManagerModal';
import { AdminLockModal } from './AdminLockModal';
import { Lock } from 'lucide-react';

interface ProjectsProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

const STORAGE_KEY = 'rizwan_custom_projects';

export const Projects: React.FC<ProjectsProps> = ({ onOpenQuoteModal }) => {
  const [projects, setProjects] = useState<Project[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          // Sync existing project details with hardcoded PORTFOLIO_DATA
          return parsed.map((p: Project) => {
            const hardcoded = PORTFOLIO_DATA.projects.find(dp => dp.id === p.id);
            return hardcoded ? { ...p, ...hardcoded } : p;
          });
        }
      }
    } catch (e) {
      console.error('Error loading projects from localStorage:', e);
    }
    return PORTFOLIO_DATA.projects;
  });

  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isManagerModalOpen, setIsManagerModalOpen] = useState<boolean>(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Admin PIN Protection State
  const [isLockModalOpen, setIsLockModalOpen] = useState<boolean>(false);
  const [lockActionTitle, setLockActionTitle] = useState<string>('Add New Project');
  const [pendingAdminAction, setPendingAdminAction] = useState<(() => void) | null>(null);

  const requireAdminAuth = (action: () => void, title: string) => {
    setPendingAdminAction(() => action);
    setLockActionTitle(title);
    setIsLockModalOpen(true);
  };

  // Sync to localStorage
  const saveProjectsToStorage = (updatedProjects: Project[]) => {
    setProjects(updatedProjects);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedProjects));
    } catch (e) {
      console.error('Error saving projects to localStorage:', e);
    }
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  // Derive dynamic categories list based on existing projects
  const categories = React.useMemo(() => {
    const defaultCats = ['All', 'Business', 'Restaurant', 'Salon', 'E-Commerce', 'Hotel', 'Portfolio'];
    const projectCats = Array.from(new Set(projects.map(p => p.category)));
    const combined = ['All', ...Array.from(new Set([...defaultCats.slice(1), ...projectCats]))];
    return combined;
  }, [projects]);

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category.toLowerCase() === activeCategory.toLowerCase());

  const handleOpenAddProject = () => {
    requireAdminAuth(() => {
      setEditingProject(null);
      setIsManagerModalOpen(true);
    }, 'Add New Portfolio Project');
  };

  const handleOpenEditProject = (e: React.MouseEvent, project: Project) => {
    e.stopPropagation();
    requireAdminAuth(() => {
      setEditingProject(project);
      setIsManagerModalOpen(true);
    }, `Edit Project: ${project.name}`);
  };

  const handleSaveProject = (savedProject: Project) => {
    let updated: Project[];
    const exists = projects.some(p => p.id === savedProject.id);

    if (exists) {
      updated = projects.map(p => (p.id === savedProject.id ? savedProject : p));
      showToast(`"${savedProject.name}" updated successfully!`);
    } else {
      updated = [savedProject, ...projects];
      showToast(`"${savedProject.name}" added to portfolio!`);
    }

    saveProjectsToStorage(updated);
  };

  const handleResetToDefaults = () => {
    requireAdminAuth(() => {
      if (window.confirm('Are you sure you want to reset the projects showcase to original samples?')) {
        saveProjectsToStorage(PORTFOLIO_DATA.projects);
        localStorage.removeItem(STORAGE_KEY);
        showToast('Showcase reset to original projects.');
      }
    }, 'Reset Portfolio Projects');
  };

  const handleLiveDemoClick = (e: React.MouseEvent, project: Project) => {
    e.preventDefault();
    setSelectedProject(project);
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#080B11]">
      
      {/* Background glowing gradients */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Floating Notification Toast */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="fixed top-20 right-6 z-50 px-4 py-3 rounded-2xl bg-emerald-950/90 border border-emerald-500/50 text-emerald-200 text-xs font-semibold shadow-2xl backdrop-blur-md flex items-center gap-2"
          >
            <Check className="w-4 h-4 text-emerald-400" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Showcase & Work Management</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-200 to-purple-400">Featured Work</span>
          </h2>
          
          <p className="text-slate-400 text-base max-w-2xl mt-3">
            Explore recent live websites, client projects, and responsive applications.
          </p>

          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-4 mb-6" />

          {/* Action Row: Add My Work + Reset */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={handleOpenAddProject}
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white text-xs sm:text-sm font-bold shadow-lg shadow-blue-600/30 hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
            >
              <Plus className="w-4 h-4 stroke-[3]" />
              <span>+ Add New Project / Apna Kaam Add Karein</span>
              <span className="ml-1 px-1.5 py-0.5 rounded-full bg-black/30 border border-white/20 text-[10px] flex items-center gap-1 font-mono opacity-90">
                <Lock className="w-2.5 h-2.5" />
                PIN
              </span>
            </button>

            {projects !== PORTFOLIO_DATA.projects && (
              <button
                type="button"
                onClick={handleResetToDefaults}
                className="px-4 py-2 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-slate-200 text-xs font-medium border border-slate-800 flex items-center gap-1.5 transition-colors"
                title="Reset to default showcase (Protected by Admin PIN)"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset to Defaults</span>
              </button>
            )}
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25 scale-105'
                  : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {category}
              {category === 'All' ? ` (${projects.length})` : ''}
            </button>
          ))}
        </div>

        {/* Empty State if no projects in category */}
        {filteredProjects.length === 0 ? (
          <div className="p-12 rounded-3xl bg-slate-900/40 border border-dashed border-slate-800 text-center max-w-lg mx-auto">
            <div className="w-12 h-12 rounded-2xl bg-blue-950/60 border border-blue-500/30 text-blue-400 flex items-center justify-center mx-auto mb-4">
              <FolderOpen className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">No projects in this category</h3>
            <p className="text-xs text-slate-400 mb-6">
              Add your work to this category or view all projects.
            </p>
            <button
              type="button"
              onClick={handleOpenAddProject}
              className="px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold shadow-lg"
            >
              + Add Project
            </button>
          </div>
        ) : (
          /* Projects Grid */
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
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                  className="group relative rounded-3xl bg-slate-900/60 border border-slate-800/90 hover:border-blue-500/50 backdrop-blur-xl shadow-xl shadow-black/40 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10"
                >
                  <div>
                    {/* Screenshot Container with Actions Overlay */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.src = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop';
                        }}
                      />

                      {/* Dark gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />

                      {/* Top Left: Category Chip */}
                      <div className="absolute top-3.5 left-3.5 z-10 px-3 py-1 rounded-full bg-slate-900/90 backdrop-blur-md border border-slate-700/80 text-[11px] font-bold text-blue-300">
                        {project.category}
                      </div>

                      {/* Top Right: Edit Action Button */}
                      <div className="absolute top-3.5 right-3.5 z-10 flex items-center gap-1.5 opacity-90 group-hover:opacity-100 transition-opacity">
                        {/* Edit Button */}
                        <button
                          type="button"
                          onClick={(e) => handleOpenEditProject(e, project)}
                          className="p-2 rounded-full bg-slate-900/90 hover:bg-blue-600 border border-slate-700/80 text-slate-300 hover:text-white shadow-lg backdrop-blur-md transition-all cursor-pointer"
                          title="Edit this project"
                        >
                          <Edit3 className="w-3.5 h-3.5" />
                        </button>
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
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <span className="text-xs font-semibold text-indigo-400">
                          {project.tagline}
                        </span>
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors line-clamp-1">
                        {project.name}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-300/85 leading-relaxed line-clamp-2 mb-4 font-normal">
                        {project.description}
                      </p>

                      {/* Technology Badges */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
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
        )}

      </div>

      {/* Interactive Project Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onOpenQuoteModal={onOpenQuoteModal}
        />
      )}

      {/* Add / Edit Project Manager Modal */}
      <ProjectManagerModal
        isOpen={isManagerModalOpen}
        onClose={() => {
          setIsManagerModalOpen(false);
          setEditingProject(null);
        }}
        onSaveProject={handleSaveProject}
        initialProject={editingProject}
      />

      {/* Admin Security PIN Lock Modal (PIN: 5911, Hidden by default) */}
      <AdminLockModal
        isOpen={isLockModalOpen}
        actionTitle={lockActionTitle}
        onClose={() => {
          setIsLockModalOpen(false);
          setPendingAdminAction(null);
        }}
        onSuccess={() => {
          if (pendingAdminAction) {
            pendingAdminAction();
            setPendingAdminAction(null);
          }
        }}
      />

    </section>
  );
};

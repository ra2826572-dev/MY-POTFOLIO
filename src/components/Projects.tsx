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
import { collection, query, orderBy, onSnapshot, doc, deleteDoc, writeBatch, setDoc } from 'firebase/firestore';
import { db, OperationType, handleFirestoreError, serverTimestamp } from '../firebase';

interface ProjectsProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

const STORAGE_KEY = 'rizwan_custom_projects';

export const Projects: React.FC<ProjectsProps> = ({ onOpenQuoteModal }) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isManagerModalOpen, setIsManagerModalOpen] = useState<boolean>(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [spotlightProjectId, setSpotlightProjectId] = useState<string>('proj-voiceflow');

  // Admin PIN Protection State
  const [isLockModalOpen, setIsLockModalOpen] = useState<boolean>(false);
  const [lockActionTitle, setLockActionTitle] = useState<string>('Add New Project');
  const [pendingAdminAction, setPendingAdminAction] = useState<(() => void) | null>(null);

  // Load from Firestore
  useEffect(() => {
    const q = query(collection(db, 'projects'), orderBy('createdAt', 'desc'));
    
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const projectsData: Project[] = [];
      snapshot.forEach((doc) => {
        projectsData.push({ id: doc.id, ...doc.data() } as Project);
      });

      // If Firestore is empty, we show default data but don't save it yet
      // This allows the user to see the default projects if they haven't added any to DB
      if (projectsData.length === 0) {
        setProjects(PORTFOLIO_DATA.projects);
      } else {
        // Merge default projects that aren't yet in Firestore so new showcase projects (like SHOE CASA) always appear
        const firestoreIds = new Set(projectsData.map(p => p.id));
        const mergedDefaults = PORTFOLIO_DATA.projects.filter(p => !firestoreIds.has(p.id));
        setProjects([...projectsData, ...mergedDefaults]);
      }
      setIsLoading(false);
    }, (error) => {
      handleFirestoreError(error, OperationType.LIST, 'projects');
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const requireAdminAuth = (action: () => void, title: string) => {
    setPendingAdminAction(() => action);
    setLockActionTitle(title);
    setIsLockModalOpen(true);
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

  const handleSaveProject = async (savedProject: Project) => {
    try {
      const projectRef = doc(db, 'projects', savedProject.id);
      
      // We don't want to overwrite the whole object with string timestamps
      // because firestore.rules expects serverTimestamp() for updatedAt
      const projectData = {
        ...savedProject,
        updatedAt: serverTimestamp(),
        // Only set createdAt if it's a new project
        ...(savedProject.id.startsWith('proj-') && !projects.find(p => p.id === savedProject.id) 
            ? { createdAt: serverTimestamp() } 
            : {}
        )
      };
      
      await setDoc(projectRef, projectData, { merge: true });
      showToast(`"${savedProject.name}" saved to database successfully!`);
    } catch (error) {
      handleFirestoreError(error, OperationType.WRITE, `projects/${savedProject.id}`);
    }
  };

  const handleResetToDefaults = () => {
    requireAdminAuth(async () => {
      if (window.confirm('Are you sure you want to seed/reset the database with original samples? This will update the live site for everyone.')) {
        try {
          const batch = writeBatch(db);
          
          // Seed the database with defaults
          PORTFOLIO_DATA.projects.forEach(p => {
            const projectRef = doc(db, 'projects', p.id);
            batch.set(projectRef, {
              ...p,
              createdAt: serverTimestamp(),
              updatedAt: serverTimestamp()
            });
          });

          await batch.commit();
          showToast('Database seeded with original projects.');
        } catch (error) {
          handleFirestoreError(error, OperationType.WRITE, 'projects');
        }
      }
    }, 'Seed/Reset Database');
  };

  const handleLiveDemoClick = (e: React.MouseEvent, project: Project) => {
    e.preventDefault();
    setSelectedProject(project);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#080B11] flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin" />
      </div>
    );
  }

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

        {/* Featured Project Spotlight: Dynamic Toggle */}
        {(() => {
          const spotlightProject = projects.find(p => p.id === spotlightProjectId) 
            || projects.find(p => p.id === 'proj-voiceflow')
            || projects.find(p => p.id === 'proj-delaqua')
            || projects.find(p => p.id === 'proj-mezturkish')
            || projects.find(p => p.id === 'proj-thedonpizza')
            || projects.find(p => p.id === 'proj-libertygrand')
            || projects.find(p => p.id === 'proj-furniture-sheheryar')
            || projects.find(p => p.id === 'proj-flyingscissor')
            || projects.find(p => p.id === 'proj-neonstrike')
            || projects.find(p => p.id === 'proj-groomermen')
            || PORTFOLIO_DATA.projects[0];

          if (!spotlightProject) return null;

          return (
            <div className="mb-12 rounded-3xl bg-gradient-to-r from-slate-900/90 via-indigo-950/40 to-slate-900/90 border border-indigo-500/30 p-6 sm:p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-600/10 rounded-full blur-[90px] pointer-events-none" />
              
              {/* Spotlight Selector Tabs */}
              <div className="flex items-center justify-between flex-wrap gap-3 mb-6 relative z-10 border-b border-slate-800/80 pb-4">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Featured Deployments:</span>
                  <div className="flex items-center gap-1 p-1 rounded-xl bg-slate-950/90 border border-slate-800 flex-wrap">
                    <button
                      type="button"
                      onClick={() => setSpotlightProjectId('proj-voiceflow')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                        spotlightProject.id === 'proj-voiceflow'
                          ? 'bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 text-white font-bold shadow-md shadow-purple-600/30'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      🎙️ VoiceFlow AI Studio
                    </button>
                    <button
                      type="button"
                      onClick={() => setSpotlightProjectId('proj-delaqua')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                        spotlightProject.id === 'proj-delaqua'
                          ? 'bg-gradient-to-r from-pink-600 via-rose-500 to-amber-500 text-white font-bold shadow-md shadow-pink-600/30'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      💄 DELAQUA Beauty Salon
                    </button>
                    <button
                      type="button"
                      onClick={() => setSpotlightProjectId('proj-mezturkish')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                        spotlightProject.id === 'proj-mezturkish'
                          ? 'bg-gradient-to-r from-emerald-800 via-teal-700 to-amber-600 text-white font-bold shadow-md shadow-emerald-700/30'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      🇹🇷 MEZ Turkish Restaurant
                    </button>
                    <button
                      type="button"
                      onClick={() => setSpotlightProjectId('proj-thedonpizza')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                        spotlightProject.id === 'proj-thedonpizza'
                          ? 'bg-gradient-to-r from-red-600 via-amber-600 to-yellow-500 text-white font-bold shadow-md shadow-red-600/30'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      🍕 The Don Pizza
                    </button>
                    <button
                      type="button"
                      onClick={() => setSpotlightProjectId('proj-libertygrand')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                        spotlightProject.id === 'proj-libertygrand'
                          ? 'bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-700 text-slate-950 font-bold shadow-md shadow-amber-500/25'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      🏰 Liberty Grand Marquee
                    </button>
                    <button
                      type="button"
                      onClick={() => setSpotlightProjectId('proj-furniture-sheheryar')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                        spotlightProject.id === 'proj-furniture-sheheryar'
                          ? 'bg-gradient-to-r from-amber-700 via-amber-600 to-yellow-600 text-white shadow-md shadow-amber-600/20'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      🛋️ Furniture Store (Sheheryar)
                    </button>
                    <button
                      type="button"
                      onClick={() => setSpotlightProjectId('proj-flyingscissor')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                        spotlightProject.id === 'proj-flyingscissor'
                          ? 'bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-600 text-white shadow-md shadow-amber-500/20'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      ✂️ Flying Scissor
                    </button>
                    <button
                      type="button"
                      onClick={() => setSpotlightProjectId('proj-neonstrike')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                        spotlightProject.id === 'proj-neonstrike'
                          ? 'bg-gradient-to-r from-cyan-500 via-fuchsia-600 to-pink-500 text-white shadow-md shadow-fuchsia-500/20'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      ⚡ NEON STRIKE (3D FPS)
                    </button>
                    <button
                      type="button"
                      onClick={() => setSpotlightProjectId('proj-groomermen')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                        spotlightProject.id === 'proj-groomermen'
                          ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      💈 Groomer Men Saloon
                    </button>
                    <button
                      type="button"
                      onClick={() => setSpotlightProjectId('proj-adnansweets')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                        spotlightProject.id === 'proj-adnansweets'
                          ? 'bg-gradient-to-r from-amber-600 to-rose-600 text-white shadow-md'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      🎂 Adnan Sweets
                    </button>
                    <button
                      type="button"
                      onClick={() => setSpotlightProjectId('proj-shoecasa')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                        spotlightProject.id === 'proj-shoecasa'
                          ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      👞 SHOE CASA
                    </button>
                  </div>
                </div>

                <span className="text-[11px] text-slate-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Live Client Website
                </span>
              </div>

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                {/* Left: Thumbnail & Visual Badge */}
                <div className="lg:col-span-5 relative rounded-2xl overflow-hidden aspect-[16/10] bg-slate-950 border border-slate-800 shadow-xl">
                  <img
                    src={spotlightProject.image}
                    alt={spotlightProject.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                  
                  <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-slate-900/90 backdrop-blur-md border border-amber-500/40 text-amber-300 text-xs font-bold flex items-center gap-1.5 shadow-lg">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>Featured Live Launch</span>
                  </div>

                  <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between text-xs text-slate-300 font-mono bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-800">
                    <span className="truncate flex items-center gap-1.5">
                      <span className="text-emerald-400">🔒</span>
                      {spotlightProject.liveUrl ? spotlightProject.liveUrl.replace('https://', '').replace('/', '') : 'Live Project'}
                    </span>
                    <span className="text-emerald-400 font-bold flex items-center gap-1 shrink-0">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      Live Website
                    </span>
                  </div>
                </div>

                {/* Right: Content & Direct Actions */}
                <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="px-3 py-0.5 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30 text-xs font-semibold">
                        {spotlightProject.category}
                      </span>
                      {spotlightProject.clientName && (
                        <span className="text-xs text-slate-400">
                          {spotlightProject.clientName}
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl sm:text-2xl font-black text-white mb-2 group-hover:text-blue-300 transition-colors">
                      {spotlightProject.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed mb-4">
                      {spotlightProject.description}
                    </p>

                    {/* Tech Pills */}
                    <div className="flex flex-wrap gap-1.5">
                      {spotlightProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-lg bg-slate-800/90 border border-slate-700/80 text-slate-300 text-[11px] font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-slate-800/80">
                    <a
                      href={spotlightProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white text-xs sm:text-sm font-bold shadow-lg shadow-blue-600/30 hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Visit Live Website</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => setSelectedProject(spotlightProject)}
                      className="px-4 py-2.5 rounded-xl bg-slate-800/90 hover:bg-slate-800 text-slate-200 hover:text-white text-xs sm:text-sm font-semibold border border-slate-700 transition-all flex items-center gap-2"
                    >
                      <Eye className="w-4 h-4 text-blue-400" />
                      <span>Interactive Device Preview</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })()}

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

                      {/* Top Left: Category Chip & Featured Badge */}
                      <div className="absolute top-3.5 left-3.5 z-10 flex items-center gap-1.5 flex-wrap">
                        <span className="px-3 py-1 rounded-full bg-slate-900/90 backdrop-blur-md border border-slate-700/80 text-[11px] font-bold text-blue-300">
                          {project.category}
                        </span>
                        {(project.id === 'proj-voiceflow' || project.id === 'proj-delaqua' || project.id === 'proj-mezturkish' || project.id === 'proj-thedonpizza' || project.id === 'proj-libertygrand' || project.id === 'proj-furniture-sheheryar' || project.id === 'proj-flyingscissor' || project.id === 'proj-neonstrike' || project.id === 'proj-shoecasa' || project.id === 'proj-adnansweets' || project.id === 'proj-groomermen') && (
                          <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 backdrop-blur-md border border-amber-500/40 text-[10px] font-bold text-amber-300 flex items-center gap-1">
                            <Sparkles className="w-2.5 h-2.5" />
                            Featured
                          </span>
                        )}
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

                      {/* Quick View & Direct Site Buttons on Image Hover */}
                      <div className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50 backdrop-blur-[2px] p-2">
                        <button
                          type="button"
                          onClick={() => setSelectedProject(project)}
                          className="px-3.5 py-2 rounded-full bg-white text-slate-950 text-xs font-bold shadow-lg hover:bg-blue-50 flex items-center gap-1.5 transition-transform hover:scale-105"
                        >
                          <Eye className="w-3.5 h-3.5 text-blue-600" />
                          <span>Quick View</span>
                        </button>
                        {project.liveUrl && project.liveUrl !== '#' && project.liveUrl.startsWith('http') && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="px-3.5 py-2 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold shadow-lg flex items-center gap-1.5 transition-transform hover:scale-105"
                            title="Open live site directly in a new tab"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                            <span>Visit Site ↗</span>
                          </a>
                        )}
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
                      title="Open interactive device preview"
                    >
                      <Eye className="w-3.5 h-3.5 text-blue-400" />
                      <span>Live Preview</span>
                    </button>

                    {/* View / Visit button */}
                    {project.liveUrl && project.liveUrl !== '#' && project.liveUrl.startsWith('http') ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2.5 px-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-semibold shadow-md shadow-blue-600/20 hover:shadow-blue-600/40 transition-all flex items-center justify-center gap-1.5"
                        title="Visit live website in new tab"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Visit Site ↗</span>
                      </a>
                    ) : (
                      <button
                        type="button"
                        onClick={() => setSelectedProject(project)}
                        className="py-2.5 px-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-semibold shadow-md shadow-blue-600/20 hover:shadow-blue-600/40 hover:opacity-95 transition-all flex items-center justify-center gap-1.5"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>View Project</span>
                      </button>
                    )}
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

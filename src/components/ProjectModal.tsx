import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  ExternalLink, 
  CheckCircle2, 
  Smartphone, 
  Monitor, 
  Tablet, 
  Sparkles, 
  Calendar, 
  User, 
  ArrowRight,
  Code,
  ShieldCheck,
  Layers,
  Globe,
  ImageIcon,
  RotateCw
} from 'lucide-react';
import { Project, PORTFOLIO_DATA } from '../portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onOpenQuoteModal }) => {
  const [deviceView, setDeviceView] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [previewMode, setPreviewMode] = useState<'live' | 'image'>('live');
  const [iframeKey, setIframeKey] = useState<number>(0);

  if (!project) return null;

  const hasLiveUrl = Boolean(project.liveUrl && project.liveUrl !== '#' && project.liveUrl.startsWith('http'));

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto rounded-3xl bg-[#0B0F19] border border-slate-700/80 shadow-2xl shadow-black text-slate-100 z-10 custom-scrollbar"
        >
          {/* Header Bar */}
          <div className="sticky top-0 z-30 flex items-center justify-between px-6 py-4 bg-[#0B0F19]/95 backdrop-blur-lg border-b border-slate-800">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-600/20 text-blue-400 border border-blue-500/30">
                {project.category}
              </span>
              <h3 className="text-base sm:text-lg font-bold text-white truncate max-w-[200px] sm:max-w-md">
                {project.name}
              </h3>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            
            {/* Viewport Controls Bar */}
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-4">
                
                {/* Left: Live Interactive vs Image Screenshot Toggle */}
                <div className="flex items-center gap-2">
                  {hasLiveUrl && (
                    <div className="flex items-center p-1 rounded-xl bg-slate-900 border border-slate-800">
                      <button
                        type="button"
                        onClick={() => setPreviewMode('live')}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                          previewMode === 'live'
                            ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md'
                            : 'text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        <Globe className="w-3.5 h-3.5 text-emerald-300" />
                        <span>Live Interactive</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setPreviewMode('image')}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                          previewMode === 'image'
                            ? 'bg-blue-600 text-white shadow-md'
                            : 'text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        <ImageIcon className="w-3.5 h-3.5 text-blue-300" />
                        <span>Screenshot</span>
                      </button>
                    </div>
                  )}

                  {/* Device switchers */}
                  <div className="flex items-center gap-1 p-1 rounded-xl bg-slate-900 border border-slate-800">
                    <button
                      type="button"
                      onClick={() => setDeviceView('desktop')}
                      className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                        deviceView === 'desktop' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-slate-200'
                      }`}
                      title="Desktop Viewport"
                    >
                      <Monitor className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Desktop</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setDeviceView('tablet')}
                      className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                        deviceView === 'tablet' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-slate-200'
                      }`}
                      title="Tablet Viewport"
                    >
                      <Tablet className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Tablet</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setDeviceView('mobile')}
                      className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                        deviceView === 'mobile' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-slate-200'
                      }`}
                      title="Mobile Viewport"
                    >
                      <Smartphone className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Mobile</span>
                    </button>
                  </div>
                </div>

                {/* Right: Direct External Links */}
                <div className="flex items-center gap-2">
                  {hasLiveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-xs font-bold text-white shadow-lg shadow-blue-600/25 transition-all hover:scale-105 active:scale-95"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Open Website in New Tab</span>
                    </a>
                  )}
                  <a
                    href={PORTFOLIO_DATA.contact.socials.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 hover:text-white border border-slate-700 transition-colors"
                  >
                    <span>Hire For Similar</span>
                  </a>
                </div>
              </div>

              {/* Responsive Container Preview Frame */}
              <div className="flex justify-center bg-[#070A10] p-3 sm:p-6 rounded-2xl border border-slate-800/90 overflow-hidden min-h-[380px] sm:min-h-[460px] items-center">
                <div 
                  className={`transition-all duration-300 rounded-xl overflow-hidden shadow-2xl border border-slate-700/80 bg-slate-950 flex flex-col relative ${
                    deviceView === 'desktop' ? 'w-full max-w-4xl h-[420px] sm:h-[500px]' :
                    deviceView === 'tablet' ? 'w-[480px] max-w-full h-[460px] sm:h-[520px]' :
                    'w-[320px] max-w-full h-[520px]'
                  }`}
                >
                  {/* Browser mockup header with interactive address bar */}
                  <div className="w-full h-8 bg-slate-900 border-b border-slate-800 flex items-center justify-between px-3 gap-2 shrink-0">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    </div>

                    <div className="flex-1 max-w-md mx-2 px-2.5 py-0.5 rounded-md bg-slate-950 border border-slate-800 flex items-center justify-between text-[11px] text-slate-300 font-mono">
                      <span className="truncate flex items-center gap-1">
                        <span className="text-emerald-400">🔒</span>
                        {project.liveUrl || 'https://example.com'}
                      </span>
                      {hasLiveUrl && (
                        <button
                          type="button"
                          onClick={() => setIframeKey((prev) => prev + 1)}
                          className="text-slate-400 hover:text-white p-0.5"
                          title="Refresh page"
                        >
                          <RotateCw className="w-2.5 h-2.5" />
                        </button>
                      )}
                    </div>

                    <div className="text-[10px] font-semibold text-slate-400">
                      {deviceView === 'desktop' ? '1920×1080' : deviceView === 'tablet' ? '768×1024' : '375×812'}
                    </div>
                  </div>

                  {/* Viewport Content: Interactive iFrame or Screenshot */}
                  <div className="relative flex-1 w-full h-full overflow-hidden bg-slate-950">
                    {hasLiveUrl && previewMode === 'live' ? (
                      <iframe
                        key={iframeKey}
                        src={project.liveUrl}
                        title={project.name}
                        className="w-full h-full border-0 bg-white"
                        sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals"
                        loading="lazy"
                      />
                    ) : (
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover object-top"
                        onError={(e) => {
                          e.currentTarget.src = 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1200&auto=format&fit=crop';
                        }}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Project Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-slate-800">
              
              {/* Left Column: Overview & Features */}
              <div className="md:col-span-2 space-y-6">
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">Project Overview</h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {project.description}
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed mt-2">
                    {project.overview}
                  </p>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider text-slate-300 mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-400" />
                    <span>Key Highlights & Deliverables</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {project.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300 bg-slate-900/60 p-2.5 rounded-xl border border-slate-800">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Meta Info & Technologies */}
              <div className="space-y-5 bg-slate-900/40 p-5 rounded-2xl border border-slate-800/80">
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-1">Target Niche</p>
                  <p className="text-sm font-bold text-white">{project.tagline}</p>
                </div>

                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-1">Estimated Turnaround</p>
                  <p className="text-sm font-bold text-blue-300">{project.completionTime || '1 Week'}</p>
                </div>

                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-2">Tech Stack Used</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-2.5 py-1 rounded-lg bg-slate-800 text-slate-200 text-xs font-medium border border-slate-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Call to action inside modal */}
                <div className="pt-4 border-t border-slate-800">
                  <button
                    type="button"
                    onClick={() => {
                      onClose();
                      onOpenQuoteModal(`Similar to ${project.name}`);
                    }}
                    className="w-full py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-xs shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 hover:opacity-90"
                  >
                    <span>Build Something Similar</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

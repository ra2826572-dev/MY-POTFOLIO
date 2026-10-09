import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  PenTool, 
  BookOpen, 
  FileText, 
  Share2, 
  Search, 
  Check, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  Clock, 
  Hash, 
  X, 
  Sparkles,
  ExternalLink,
  Copy,
  Layers,
  ChevronRight,
  Send,
  MessageSquare,
  ShieldCheck,
  CheckCheck
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { WRITING_PROJECTS, WritingProject, CONTENT_WRITING_SERVICE_INFO } from '../contentWritingData';

interface ContentWritingPortfolioProps {
  onOpenQuoteModal?: (serviceName?: string) => void;
  isEmbedded?: boolean;
}

export const ContentWritingPortfolio: React.FC<ContentWritingPortfolioProps> = ({ 
  onOpenQuoteModal,
  isEmbedded = false
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<WritingProject | null>(null);
  const [copiedSnippet, setCopiedSnippet] = useState<string | null>(null);
  const [activeSocialPostIndex, setActiveSocialPostIndex] = useState<number>(0);

  const categories = [
    'All',
    'Blog Writing',
    'Website Content',
    'Social Media Copywriting',
    'SEO Content'
  ];

  const filteredProjects = WRITING_PROJECTS.filter((proj) => {
    if (activeCategory === 'All') return true;
    return proj.category === activeCategory;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Blog Writing':
        return <BookOpen className="w-4 h-4 text-blue-400" />;
      case 'Website Content':
        return <FileText className="w-4 h-4 text-indigo-400" />;
      case 'Social Media Copywriting':
        return <Share2 className="w-4 h-4 text-pink-400" />;
      case 'SEO Content':
        return <Search className="w-4 h-4 text-emerald-400" />;
      default:
        return <PenTool className="w-4 h-4 text-blue-400" />;
    }
  };

  const handleCopyText = (text: string, label: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedSnippet(label);
      setTimeout(() => setCopiedSnippet(null), 2500);
    }
  };

  return (
    <section id="content-writing-portfolio" className={`${isEmbedded ? 'py-12' : 'py-20 sm:py-24'} relative overflow-hidden bg-[#080B11]`}>
      
      {/* Background Ambience consistent with site theme */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-10 w-[450px] h-[450px] bg-indigo-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <PenTool className="w-3.5 h-3.5" />
            <span>Content Writing Portfolio</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Words That Inform, Engage & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-200 to-purple-400">Convert</span>
          </h1>

          <p className="text-slate-400 text-base max-w-2xl mt-3 leading-relaxed">
            Explore 4 complete, publication-grade writing samples covering technical blog articles, conversion agency web copy, multi-channel social campaigns, and search-optimized guides.
          </p>

          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-6" />

          {/* Credibility and Transparency Note */}
          <div className="mt-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/60 border border-slate-800/80 text-[11px] text-slate-300">
            <span className="w-2 h-2 rounded-full bg-blue-400" />
            <span className="font-semibold text-slate-400">Standard:</span>
            <span>Personal Sample Projects — Created for Portfolio Demonstration</span>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25 scale-105'
                  : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat !== 'All' && getCategoryIcon(cat)}
              <span>{cat}</span>
              {cat === 'All' && <span className="text-xs opacity-75 font-mono">({WRITING_PROJECTS.length})</span>}
            </button>
          ))}
        </div>

        {/* 4 Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group relative rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-blue-500/40 backdrop-blur-xl shadow-lg shadow-black/40 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10"
              >
                {/* Top Media Cover */}
                <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-slate-950">
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2 flex-wrap">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-700/80 text-xs font-semibold text-blue-400 backdrop-blur-md shadow-md">
                      {getCategoryIcon(project.category)}
                      <span>{project.category}</span>
                    </span>

                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-950/80 border border-slate-800 text-[11px] font-mono text-slate-300 backdrop-blur-md">
                      <Clock className="w-3 h-3 text-slate-400" />
                      <span>{project.readingTime}</span>
                    </span>
                  </div>

                  {/* Brand Tag if present */}
                  {project.brand && (
                    <div className="absolute bottom-3 left-4">
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30">
                        {project.brand}
                      </span>
                    </div>
                  )}

                  {/* Word count tag */}
                  <div className="absolute bottom-3 right-4">
                    <span className="text-xs font-mono font-bold text-slate-300 px-2 py-0.5 rounded bg-slate-900/80 border border-slate-800">
                      {project.wordCount}
                    </span>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between">
                  <div>
                    {/* Honesty label */}
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                      <span>{project.disclaimer}</span>
                    </p>

                    <h2 className="text-xl sm:text-2xl font-bold text-white group-hover:text-blue-300 transition-colors leading-tight mb-2">
                      {project.title}
                    </h2>

                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Excerpt / Sample Content Preview Box */}
                    <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-300 italic mb-5 leading-relaxed relative">
                      <span className="text-blue-400 font-serif text-lg leading-none mr-1">“</span>
                      {project.previewSnippet}
                      <span className="text-blue-400 font-serif text-lg leading-none ml-1">”</span>
                    </div>

                    {/* Deliverables tags */}
                    <div className="space-y-1.5 mb-6">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        Deliverables Included:
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.deliverables.slice(0, 3).map((item, dIdx) => (
                          <span
                            key={dIdx}
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-800/80 border border-slate-700/60 text-[11px] text-slate-300"
                          >
                            <Check className="w-3 h-3 text-emerald-400" />
                            <span>{item}</span>
                          </span>
                        ))}
                        {project.deliverables.length > 3 && (
                          <span className="px-2 py-1 rounded-lg bg-slate-800/40 text-[11px] text-slate-400">
                            +{project.deliverables.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedProject(project);
                        setActiveSocialPostIndex(0);
                      }}
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-blue-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all"
                    >
                      <span>Read Full Sample</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {/* ========================================================================= */}
        {/* Section 5: Client Conversion Call to Action */}
        {/* ========================================================================= */}
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900/60 border border-slate-800/80 hover:border-blue-500/40 backdrop-blur-xl shadow-xl shadow-black/40 relative overflow-hidden transition-all duration-300">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/90 border border-slate-700/80 text-blue-400 text-xs font-semibold mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Ready to Elevate Your Message?</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
                Need Content That Connects With Your Audience?
              </h3>
              <p className="text-slate-300 text-sm sm:text-base mt-2.5 leading-relaxed">
                Let's create clear, engaging, and purposeful content for your website, blog, or social media.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => {
                  if (onOpenQuoteModal) {
                    onOpenQuoteModal('Content Writing');
                  } else {
                    window.location.href = '/contact';
                  }
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-sm shadow-xl shadow-blue-500/30 hover:scale-105 active:scale-95 transition-all"
              >
                <span>Let's Work Together</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-semibold text-sm border border-slate-700 transition-all"
              >
                <span>Direct Message</span>
              </Link>
            </div>
          </div>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* Section 3: Comprehensive Full-Sample Reader Detail Modal */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/90 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="relative w-full max-w-5xl rounded-3xl bg-[#080B11] border border-slate-800 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
            >
              {/* Modal Top Header Bar */}
              <div className="p-4 sm:p-6 bg-slate-900/80 border-b border-slate-800 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 min-w-0">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(null)}
                    className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors shrink-0"
                    title="Back to All Projects"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-0.5">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 uppercase tracking-wider">
                        {selectedProject.category}
                      </span>
                      <span className="text-[10px] text-slate-400 font-mono">
                        {selectedProject.wordCount} • {selectedProject.readingTime}
                      </span>
                    </div>
                    <h3 className="text-base sm:text-xl font-bold text-white truncate">
                      {selectedProject.title}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(null)}
                    className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white border border-slate-700 transition-colors"
                    title="Close"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Modal Scrollable Body */}
              <div className="p-6 sm:p-10 overflow-y-auto flex-1 space-y-8 bg-[#080B11]">
                
                {/* Project Overview & Disclaimer Banner */}
                <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-blue-400 block mb-0.5">
                      Portfolio Credibility & Provenance
                    </span>
                    <p className="text-xs text-slate-300">
                      <strong className="text-white">{selectedProject.disclaimer}</strong>. Crafted to demonstrate voice, clarity, structuring, and conversion discipline.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      type="button"
                      onClick={() => {
                        const allText = JSON.stringify(selectedProject, null, 2);
                        handleCopyText(allText, 'sample');
                      }}
                      className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold border border-slate-700 flex items-center gap-1.5 transition-colors"
                    >
                      {copiedSnippet === 'sample' ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Copied Sample</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-slate-400" />
                          <span>Copy Sample Text</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* =================================================================== */}
                {/* PROJECT 1 & 4: LONG-FORM ARTICLES (BLOG WRITING / SEO GUIDE) */}
                {/* =================================================================== */}
                {selectedProject.articleContent && (
                  <div className="prose prose-invert max-w-none space-y-6">
                    
                    {/* SEO Metadata Box for Project 4 */}
                    {selectedProject.seoMetadata && (
                      <div className="p-5 sm:p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400">
                          <Search className="w-4 h-4" />
                          <span>Target Search Engine Optimization (SEO) Metadata</span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800/80">
                            <span className="text-slate-400 block mb-0.5 font-medium">Primary Keyword:</span>
                            <strong className="text-emerald-300 font-mono text-sm">{selectedProject.seoMetadata.primaryKeyword}</strong>
                          </div>
                          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800/80">
                            <span className="text-slate-400 block mb-0.5 font-medium">Suggested URL Slug:</span>
                            <span className="text-blue-300 font-mono text-xs">{selectedProject.seoMetadata.suggestedSlug}</span>
                          </div>
                          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800/80 md:col-span-2">
                            <span className="text-slate-400 block mb-0.5 font-medium">Target SEO Title:</span>
                            <span className="text-white font-semibold">{selectedProject.seoMetadata.seoTitle}</span>
                          </div>
                          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800/80 md:col-span-2">
                            <span className="text-slate-400 block mb-0.5 font-medium">Meta Description:</span>
                            <p className="text-slate-300">{selectedProject.seoMetadata.metaDescription}</p>
                          </div>
                          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800/80 md:col-span-2 flex items-center gap-2 flex-wrap">
                            <span className="text-slate-400 font-medium">Secondary Keywords:</span>
                            {selectedProject.seoMetadata.relatedKeywords.map((kw, kwIdx) => (
                              <span key={kwIdx} className="px-2 py-0.5 rounded bg-slate-800 text-[11px] font-mono text-slate-300">
                                #{kw}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Article Headline */}
                    <div className="border-b border-slate-800 pb-6">
                      <h1 className="text-2xl sm:text-4xl font-black text-white leading-tight mb-2">
                        {selectedProject.title}
                      </h1>
                      <p className="text-sm sm:text-base text-slate-400">
                        {selectedProject.subtitle}
                      </p>
                    </div>

                    {/* Article Introduction */}
                    <div className="space-y-4 text-slate-200 leading-relaxed text-sm sm:text-base">
                      {selectedProject.articleContent.introduction.map((p, idx) => (
                        <p key={idx} className={idx === 0 ? "text-base sm:text-lg font-normal text-slate-100" : ""}>
                          {p}
                        </p>
                      ))}
                    </div>

                    {/* Article Sections */}
                    <div className="space-y-8 pt-4">
                      {selectedProject.articleContent.sections.map((sec, sIdx) => (
                        <div key={sIdx} className="space-y-3.5">
                          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight border-l-2 border-blue-500 pl-3">
                            {sec.heading}
                          </h2>
                          {sec.body.map((bText, bIdx) => (
                            <p key={bIdx} className="text-sm sm:text-base text-slate-300 leading-relaxed">
                              {bText}
                            </p>
                          ))}
                          {sec.listItems && (
                            <ul className="space-y-2 pl-4 list-disc marker:text-blue-400 text-sm sm:text-base text-slate-300">
                              {sec.listItems.map((item, lIdx) => (
                                <li key={lIdx} className="pl-1 leading-relaxed">
                                  {item}
                                </li>
                              ))}
                            </ul>
                          )}
                          {sec.subsections && (
                            <div className="space-y-4 pt-2 pl-3 border-l border-slate-800">
                              {sec.subsections.map((sub, subIdx) => (
                                <div key={subIdx} className="space-y-2">
                                  <h3 className="text-base sm:text-lg font-bold text-slate-100">
                                    {sub.subheading}
                                  </h3>
                                  {sub.body.map((subB, subBIdx) => (
                                    <p key={subBIdx} className="text-sm text-slate-300 leading-relaxed">
                                      {subB}
                                    </p>
                                  ))}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* SEO Checklist if available */}
                    {selectedProject.articleContent.checklist && (
                      <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 my-8">
                        <div className="flex items-center gap-2 mb-4">
                          <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                          <h3 className="text-lg font-bold text-white">
                            Practical SEO Execution Checklist
                          </h3>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                          {selectedProject.articleContent.checklist.map((cItem, cIdx) => (
                            <div key={cIdx} className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/80 flex items-start gap-3">
                              <span className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 text-xs font-bold mt-0.5">
                                {cIdx + 1}
                              </span>
                              <div>
                                <strong className="text-xs font-bold text-white block mb-0.5">
                                  {cItem.item}
                                </strong>
                                <p className="text-[11px] text-slate-400 leading-snug">
                                  {cItem.description}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Article Conclusion */}
                    <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-3">
                      <h3 className="text-lg font-bold text-white flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-blue-400" />
                        <span>Conclusion & Key Takeaway</span>
                      </h3>
                      {selectedProject.articleContent.conclusion.map((cText, cIdx) => (
                        <p key={cIdx} className="text-sm sm:text-base text-slate-300 leading-relaxed">
                          {cText}
                        </p>
                      ))}
                    </div>

                    {/* Article Call to Action */}
                    <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-950/30 to-indigo-950/30 border border-blue-500/30 text-center space-y-3">
                      <strong className="text-base font-bold text-white block">
                        Editorial Call to Action
                      </strong>
                      <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
                        {selectedProject.articleContent.callToAction}
                      </p>
                    </div>

                  </div>
                )}

                {/* =================================================================== */}
                {/* PROJECT 2: WEBSITE COPY (NEXORA DIGITAL) */}
                {/* =================================================================== */}
                {selectedProject.websitePages && (
                  <div className="space-y-8">
                    <div className="border-b border-slate-800 pb-4">
                      <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
                        Brand Identity & Website Architecture Copy
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                        Nexora Digital — Full Website Copywriting
                      </h2>
                      <p className="text-xs sm:text-sm text-slate-400 mt-1">
                        High-converting page structures engineered for creative digital agencies.
                      </p>
                    </div>

                    <div className="space-y-6">
                      {selectedProject.websitePages.map((page, pIdx) => (
                        <div
                          key={pIdx}
                          className="p-6 sm:p-7 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-4"
                        >
                          <div className="flex items-center justify-between gap-3 border-b border-slate-800 pb-3">
                            <span className="text-xs font-bold font-mono uppercase text-blue-400 px-2.5 py-1 rounded bg-slate-950 border border-slate-800">
                              {page.sectionName}
                            </span>
                            {page.cta && (
                              <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                                CTA: “{page.cta}”
                              </span>
                            )}
                          </div>

                          <div>
                            <h3 className="text-xl sm:text-2xl font-black text-white leading-tight mb-1.5">
                              {page.headline}
                            </h3>
                            {page.subheadline && (
                              <p className="text-sm font-semibold text-indigo-300 mb-3">
                                {page.subheadline}
                              </p>
                            )}
                            <p className="text-sm text-slate-300 leading-relaxed">
                              {page.content}
                            </p>
                          </div>

                          {page.bulletPoints && (
                            <div className="pt-2 space-y-2">
                              {page.bulletPoints.map((bp, bpIdx) => (
                                <div key={bpIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                                  <Check className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                                  <span>{bp}</span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* =================================================================== */}
                {/* PROJECT 3: SOCIAL MEDIA COPYWRITING (TECHNOVA) */}
                {/* =================================================================== */}
                {selectedProject.socialPosts && (
                  <div className="space-y-6">
                    <div className="border-b border-slate-800 pb-4">
                      <span className="text-xs font-bold uppercase tracking-wider text-pink-400">
                        Multi-Channel B2B & Developer Social Campaign
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                        TechNova — 5 Complete Social Media Posts
                      </h2>
                      <p className="text-xs sm:text-sm text-slate-400 mt-1">
                        High-engagement hooks, value-first captions, conversion CTAs, and suggested creative concepts.
                      </p>
                    </div>

                    {/* Social Post Selector Tabs */}
                    <div className="flex flex-wrap gap-2 p-1.5 rounded-xl bg-slate-950 border border-slate-800">
                      {selectedProject.socialPosts.map((post, postIdx) => (
                        <button
                          key={postIdx}
                          type="button"
                          onClick={() => setActiveSocialPostIndex(postIdx)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                            activeSocialPostIndex === postIdx
                              ? 'bg-blue-600 text-white shadow-md'
                              : 'text-slate-400 hover:text-slate-200'
                          }`}
                        >
                          Post {post.postNumber} ({post.platform.split('/')[0].trim()})
                        </button>
                      ))}
                    </div>

                    {/* Active Social Post Showcase */}
                    {(() => {
                      const post = selectedProject.socialPosts[activeSocialPostIndex];
                      if (!post) return null;
                      return (
                        <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800/90 space-y-5">
                          <div className="flex items-center justify-between gap-3 flex-wrap border-b border-slate-800 pb-3">
                            <span className="text-xs font-bold uppercase tracking-wider text-blue-400 px-2.5 py-1 rounded bg-slate-950 border border-slate-800">
                              Post #{post.postNumber} • {post.platform}
                            </span>
                            <button
                              type="button"
                              onClick={() => handleCopyText(`${post.hook}\n\n${post.caption}\n\n${post.cta}\n\n${post.hashtags.join(' ')}`, `post-${post.postNumber}`)}
                              className="text-xs text-slate-400 hover:text-white flex items-center gap-1 font-semibold"
                            >
                              {copiedSnippet === `post-${post.postNumber}` ? (
                                <span className="text-emerald-400 flex items-center gap-1">
                                  <Check className="w-3.5 h-3.5" /> Copied Post
                                </span>
                              ) : (
                                <>
                                  <Copy className="w-3.5 h-3.5" /> Copy Post Text
                                </>
                              )}
                            </button>
                          </div>

                          {/* Hook */}
                          <div className="p-4 rounded-xl bg-blue-950/20 border border-blue-500/30">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-blue-400 block mb-1">
                              Opening Hook (Feed Scroll-Stopper)
                            </span>
                            <strong className="text-sm sm:text-base font-bold text-white block leading-snug">
                              {post.hook}
                            </strong>
                          </div>

                          {/* Caption */}
                          <div>
                            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
                              Post Caption
                            </span>
                            <p className="text-sm text-slate-200 leading-relaxed whitespace-pre-line bg-slate-950/60 p-4 rounded-xl border border-slate-800/80">
                              {post.caption}
                            </p>
                          </div>

                          {/* CTA & Hashtags */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 block mb-1">
                                Call to Action (CTA)
                              </span>
                              <p className="text-xs text-white font-medium">
                                {post.cta}
                              </p>
                            </div>
                            <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                                Targeted Hashtags
                              </span>
                              <div className="flex flex-wrap gap-1.5">
                                {post.hashtags.map((h, hIdx) => (
                                  <span key={hIdx} className="text-xs font-mono text-blue-400 font-semibold">
                                    {h}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>

                          {/* Visual Concept */}
                          <div className="p-4 rounded-xl bg-purple-950/20 border border-purple-500/25">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-purple-300 block mb-1">
                              Suggested Visual / Video Asset Concept
                            </span>
                            <p className="text-xs text-slate-300 leading-relaxed">
                              {post.visualConcept}
                            </p>
                          </div>
                        </div>
                      );
                    })()}
                  </div>
                )}

              </div>

              {/* Modal Bottom Footer Actions */}
              <div className="p-4 sm:p-6 bg-slate-950 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs sm:text-sm font-semibold transition-colors"
                >
                  ← Back to All Projects
                </button>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedProject(null);
                      if (onOpenQuoteModal) {
                        onOpenQuoteModal('Content Writing');
                      } else {
                        window.location.href = '/contact';
                      }
                    }}
                    className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-blue-500/25 hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
                  >
                    <span>Hire Me for Content Writing</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};

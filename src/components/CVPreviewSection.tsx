import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  FileText, 
  Download, 
  Eye, 
  Printer, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  Briefcase, 
  GraduationCap, 
  Code2, 
  ExternalLink,
  MessageSquare
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../portfolioData';
import { Link } from 'react-router-dom';
import { CVModal } from './CVModal';
import { CVDocument } from './CVDocument';
import { downloadCVPdf } from '../utils/downloadCV';

interface CVPreviewSectionProps {
  onOpenQuoteModal?: (serviceName?: string) => void;
}

export const CVPreviewSection: React.FC<CVPreviewSectionProps> = ({ 
  onOpenQuoteModal 
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const { cv } = PORTFOLIO_DATA;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPDF = async () => {
    setIsDownloading(true);
    try {
      await downloadCVPdf('cv-preview-export-doc', 'Rizwan_Ahmad_Professional_CV.pdf');
    } catch (e) {
      console.warn('PDF download error:', e);
      window.print();
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <>
      {/* Hidden offscreen rendered document for instant 1-click PDF generation without opening modal */}
      <div className="fixed -left-[99999px] top-0 pointer-events-none no-print" aria-hidden="true">
        <div id="cv-preview-export-doc" style={{ width: '880px' }}>
          <CVDocument theme="light" />
        </div>
      </div>

      <section 
        id="resume-cv" 
        className="py-24 relative overflow-hidden bg-[#070A10] border-t border-slate-800/80"
      >
        {/* Subtle Background Lighting */}
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="flex flex-col items-center text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Verified Qualifications & Career</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Curriculum Vitae <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-200 to-purple-400">& Professional Resume</span>
            </h2>

            <p className="text-slate-400 text-base max-w-2xl mt-3">
              Official summary of technical capabilities, professional agency experience at Weversity, 80+ delivered web projects, and certified AI credentials.
            </p>

            {/* Quick Action Buttons Row */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              
              {/* View Full CV Button */}
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                id="view-full-cv-btn"
                className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white font-bold text-sm shadow-xl shadow-blue-600/25 hover:shadow-blue-600/40 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2 group"
              >
                <Eye className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>View Full CV (آن لائن دیکھیں)</span>
              </button>

              {/* Download CV (PDF) Button */}
              <button
                type="button"
                disabled={isDownloading}
                onClick={handleDownloadPDF}
                id="download-cv-btn"
                className="px-6 py-3.5 rounded-2xl bg-slate-900/90 hover:bg-slate-800/90 border border-blue-500/40 hover:border-blue-400 text-white font-bold text-sm shadow-lg shadow-black/40 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2 group disabled:opacity-60"
              >
                <Download className={`w-4 h-4 text-blue-400 group-hover:-translate-y-0.5 transition-transform ${isDownloading ? 'animate-bounce' : ''}`} />
                <span>{isDownloading ? 'Generating PDF...' : 'Download CV (PDF)'}</span>
              </button>

              {/* Print CV Button */}
              <button
                type="button"
                onClick={handlePrint}
                className="px-5 py-3.5 rounded-2xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white font-semibold text-sm transition-all duration-300 flex items-center gap-2"
                title="Print CV document"
              >
                <Printer className="w-4 h-4 text-slate-400" />
                <span className="hidden sm:inline">Print CV</span>
              </button>

              {/* Direct Page Link */}
              <Link
                to="/cv"
                className="px-5 py-3.5 rounded-2xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white font-semibold text-sm transition-all duration-300 flex items-center gap-2"
              >
                <span>Dedicated CV Page</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </Link>

            </div>

            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-6" />
          </div>

          {/* Interactive CV Showcase Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left 4 Cols: Executive Card Snapshot */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-4 rounded-3xl bg-slate-900/70 border border-slate-800/90 p-6 sm:p-8 flex flex-col justify-between backdrop-blur-xl shadow-xl shadow-black/40"
            >
              <div>
                {/* Profile Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-20 h-20 rounded-2xl p-0.5 bg-gradient-to-tr from-blue-500 via-indigo-500 to-purple-500 overflow-hidden shadow-lg shrink-0">
                    <img
                      src={cv.avatar}
                      alt={cv.fullName}
                      className="w-full h-full rounded-[14px] object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white leading-tight">
                      {cv.fullName}
                    </h3>
                    <p className="text-xs text-blue-400 font-semibold mt-0.5">
                      {cv.jobTitle}
                    </p>
                    <p className="text-[11px] text-slate-400 mt-1 flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse" />
                      {cv.location}
                    </p>
                  </div>
                </div>

                {/* Key Metrics Strip */}
                <div className="grid grid-cols-2 gap-3 py-4 my-2 border-y border-slate-800">
                  <div className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800/80">
                    <p className="text-[11px] text-slate-400">Experience</p>
                    <p className="text-base font-bold text-white font-mono">{cv.experienceYears}</p>
                  </div>
                  <div className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800/80">
                    <p className="text-[11px] text-slate-400">Delivered</p>
                    <p className="text-base font-bold text-emerald-400 font-mono">80+ Sites</p>
                  </div>
                </div>

                {/* Quick Info Points */}
                <div className="space-y-3 mt-4 text-xs">
                  <div className="flex items-center justify-between text-slate-300">
                    <span className="text-slate-400">Primary Agency:</span>
                    <strong className="text-white">WEVERSITY (2 Yrs)</strong>
                  </div>
                  <div className="flex items-center justify-between text-slate-300">
                    <span className="text-slate-400">Education:</span>
                    <strong className="text-white">Matric / 10th (Science)</strong>
                  </div>
                  <div className="flex items-center justify-between text-slate-300">
                    <span className="text-slate-400">Certification:</span>
                    <strong className="text-purple-300">Anthropic Claude AI</strong>
                  </div>
                  <div className="flex items-center justify-between text-slate-300">
                    <span className="text-slate-400">Languages:</span>
                    <span className="text-slate-200">English, Urdu, Punjabi</span>
                  </div>
                </div>
              </div>

              {/* Hire Me CTA inside card */}
              <div className="pt-6 mt-6 border-t border-slate-800">
                <Link
                  to="/contact"
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs shadow-md shadow-emerald-600/20 transition-all flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Hire Rizwan for Your Project</span>
                </Link>
              </div>
            </motion.div>

            {/* Right 8 Cols: Interactive CV Preview Document */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-8 rounded-3xl bg-[#090D16] border border-slate-800 p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative group"
            >
              {/* Top Banner inside preview */}
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Interactive Resume Preview</h4>
                      <p className="text-[11px] text-slate-400">Click below to open full-screen document or print</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-semibold flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      A4 Ready
                    </span>
                  </div>
                </div>

                {/* Summary Snippet */}
                <div className="mb-6 p-4 rounded-2xl bg-slate-950/60 border border-slate-800/70">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-2 flex items-center gap-1.5">
                    <Code2 className="w-4 h-4" />
                    Executive Summary
                  </h5>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {cv.summary}
                  </p>
                </div>

                {/* Experience & Education Dual Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  
                  {/* Experience Box */}
                  <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/70">
                    <h5 className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-3 flex items-center gap-1.5">
                      <Briefcase className="w-4 h-4" />
                      Experience Highlights
                    </h5>
                    <div className="space-y-3">
                      <div>
                        <div className="flex items-center justify-between text-xs">
                          <strong className="text-white">WEVERSITY</strong>
                          <span className="text-blue-400 font-mono text-[11px]">2 Years</span>
                        </div>
                        <p className="text-[11px] text-slate-400">Graphic Designer & Web Creative Professional</p>
                      </div>
                      <div className="pt-2 border-t border-slate-800/60">
                        <div className="flex items-center justify-between text-xs">
                          <strong className="text-white">Freelance Consultant</strong>
                          <span className="text-emerald-400 font-mono text-[11px]">80+ Projects</span>
                        </div>
                        <p className="text-[11px] text-slate-400">Web Developer & UI/UX Specialist</p>
                      </div>
                    </div>
                  </div>

                  {/* Skills & Education Box */}
                  <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/70">
                    <h5 className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-3 flex items-center gap-1.5">
                      <GraduationCap className="w-4 h-4" />
                      Core Stack & Education
                    </h5>
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {['HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind', 'WordPress', 'Elementor', 'Photoshop', 'Claude AI'].map((s, idx) => (
                        <span key={idx} className="text-[10px] px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300 font-medium">
                          {s}
                        </span>
                      ))}
                    </div>
                    <p className="text-[11px] text-slate-400 border-t border-slate-800/60 pt-2">
                      <strong className="text-slate-300">Matric / 10th Class:</strong> BISE Faisalabad
                    </p>
                  </div>

                </div>
              </div>

              {/* Bottom Expand Buttons */}
              <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
                <div className="text-xs text-slate-400">
                  Looking for the complete printed CV document?
                </div>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(true)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-md transition-all duration-200"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Open Full Document</span>
                  </button>
                  <button
                    type="button"
                    disabled={isDownloading}
                    onClick={handleDownloadPDF}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs border border-slate-700 transition-all disabled:opacity-60"
                  >
                    <Download className={`w-3.5 h-3.5 text-blue-400 ${isDownloading ? 'animate-bounce' : ''}`} />
                    <span>{isDownloading ? 'Generating...' : 'Download (PDF)'}</span>
                  </button>
                </div>
              </div>

            </motion.div>

          </div>

        </div>
      </section>

      {/* Full Screen Interactive CV Modal */}
      <CVModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onOpenQuoteModal={onOpenQuoteModal}
      />
    </>
  );
};

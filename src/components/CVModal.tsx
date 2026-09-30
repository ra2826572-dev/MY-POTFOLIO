import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Download, 
  Printer, 
  ExternalLink, 
  Sun, 
  Moon, 
  MessageSquare, 
  Check, 
  FileText 
} from 'lucide-react';
import { CVDocument } from './CVDocument';
import { PORTFOLIO_DATA } from '../portfolioData';
import { useNavigate } from 'react-router-dom';
import { downloadCVPdf } from '../utils/downloadCV';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenQuoteModal?: (serviceName?: string) => void;
}

export const CVModal: React.FC<CVModalProps> = ({ 
  isOpen, 
  onClose,
  onOpenQuoteModal 
}) => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [downloading, setDownloading] = useState(false);
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPDF = async () => {
    setDownloading(true);
    try {
      await downloadCVPdf('cv-document', 'Rizwan_Ahmad_Professional_CV.pdf');
    } catch (e) {
      console.warn('PDF download error:', e);
      window.print();
    } finally {
      setDownloading(false);
    }
  };

  const handleHireMe = () => {
    onClose();
    if (onOpenQuoteModal) {
      onOpenQuoteModal('Web Development & Design');
    } else {
      navigate('/contact');
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative w-full max-w-5xl rounded-3xl bg-[#090D16] border border-slate-800 shadow-2xl overflow-hidden flex flex-col my-auto max-h-[96vh]"
        >
          {/* Top Sticky Toolbar */}
          <div className="no-print p-4 sm:px-6 border-b border-slate-800/90 bg-[#080B11]/90 backdrop-blur-md flex flex-wrap items-center justify-between gap-3 sticky top-0 z-30">
            
            {/* Title / Badge */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white leading-tight">
                  Curriculum Vitae (CV)
                </h3>
                <p className="text-xs text-slate-400 leading-tight">
                  {PORTFOLIO_DATA.cv.fullName} • {PORTFOLIO_DATA.cv.jobTitle}
                </p>
              </div>
            </div>

            {/* Actions: Theme Toggle, Print, Download, Hire, Close */}
            <div className="flex items-center gap-2 flex-wrap">
              
              {/* Theme Toggle (Dark vs Light paper view) */}
              <button
                type="button"
                onClick={() => setTheme(prev => prev === 'dark' ? 'light' : 'dark')}
                title="Toggle CV Preview Theme"
                className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors text-xs flex items-center gap-1.5"
              >
                {theme === 'dark' ? (
                  <>
                    <Sun className="w-4 h-4 text-amber-400" />
                    <span className="hidden sm:inline">Light Paper</span>
                  </>
                ) : (
                  <>
                    <Moon className="w-4 h-4 text-blue-400" />
                    <span className="hidden sm:inline">Dark Luxe</span>
                  </>
                )}
              </button>

              {/* Print Button */}
              <button
                type="button"
                onClick={handlePrint}
                title="Print CV on A4 paper"
                className="px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors text-xs font-semibold flex items-center gap-1.5"
              >
                <Printer className="w-4 h-4 text-slate-400" />
                <span className="hidden sm:inline">Print</span>
              </button>

              {/* Download PDF Button */}
              <button
                type="button"
                disabled={downloading}
                onClick={handleDownloadPDF}
                id="modal-download-cv-btn"
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-bold text-xs shadow-md shadow-blue-600/30 hover:scale-105 active:scale-95 transition-all flex items-center gap-1.5 disabled:opacity-60"
              >
                <Download className={`w-4 h-4 ${downloading ? 'animate-bounce' : ''}`} />
                <span>{downloading ? 'Generating PDF...' : 'Download CV (PDF)'}</span>
              </button>

              {/* Hire Me Button */}
              <button
                type="button"
                onClick={handleHireMe}
                className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md shadow-emerald-600/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Hire Me</span>
              </button>

              {/* Close Button */}
              <button
                type="button"
                onClick={onClose}
                aria-label="Close CV Modal"
                className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

            </div>

          </div>

          {/* Modal Scrollable Body */}
          <div className="p-4 sm:p-8 overflow-y-auto flex-grow bg-slate-950/60">
            <CVDocument theme={theme} />
          </div>

          {/* Bottom Bar Info */}
          <div className="no-print px-6 py-3 border-t border-slate-800/80 bg-[#080B11] flex flex-wrap items-center justify-between text-xs text-slate-400 gap-2">
            <span className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              Format optimized for A4 document & international client review.
            </span>
            <div className="flex items-center gap-4">
              <a 
                href={PORTFOLIO_DATA.cv.portfolioUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors flex items-center gap-1"
              >
                <span>Live Portfolio</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};

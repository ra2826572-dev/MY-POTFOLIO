import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Download, 
  Printer, 
  Sun, 
  Moon, 
  MessageSquare, 
  Share2, 
  Check, 
  FileText 
} from 'lucide-react';
import { CVDocument } from '../components/CVDocument';
import { PORTFOLIO_DATA } from '../portfolioData';
import { downloadCVPdf } from '../utils/downloadCV';

interface CVPageProps {
  onOpenQuoteModal?: (serviceName?: string) => void;
}

export const CVPage: React.FC<CVPageProps> = ({ onOpenQuoteModal }) => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [copied, setCopied] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = `${PORTFOLIO_DATA.cv.fullName} — Professional Web Developer CV & Resume`;
    window.scrollTo(0, 0);
  }, []);

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

  const handleShare = async () => {
    const shareUrl = "https://my-potfolio-seven-rho.vercel.app/cv";
    try {
      if (navigator.share) {
        await navigator.share({
          title: "Rizwan Ahmad — Professional Web Developer CV",
          text: "Check out Rizwan Ahmad's verified Web Developer CV & Resume",
          url: shareUrl,
        });
        return;
      }
    } catch {
      // Fallback to clipboard
    }

    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(shareUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
      } catch (err) {
        prompt('Copy this CV link:', shareUrl);
      }
    } else {
      prompt('Copy this CV link:', shareUrl);
    }
  };

  const handleHireMe = () => {
    if (onOpenQuoteModal) {
      onOpenQuoteModal('Web Development & Design');
    } else {
      navigate('/contact');
    }
  };

  return (
    <div className="min-h-screen bg-[#080B11] text-slate-100 pt-24 pb-20 relative">
      
      {/* Background ambient lighting */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Control Bar (Hidden during print) */}
        <div className="no-print mb-8 p-4 sm:p-5 rounded-3xl bg-slate-900/80 border border-slate-800 backdrop-blur-xl shadow-xl flex flex-wrap items-center justify-between gap-4">
          
          {/* Back button & title */}
          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="p-2.5 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors flex items-center gap-2 text-xs font-semibold"
              title="Return to Portfolio Home"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Portfolio</span>
            </Link>

            <div className="hidden sm:block h-6 w-px bg-slate-800" />

            <div className="hidden sm:flex items-center gap-2 text-xs text-slate-400">
              <FileText className="w-4 h-4 text-blue-400" />
              <span>Official Professional Document</span>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2 flex-wrap">
            
            {/* Theme Toggle */}
            <button
              type="button"
              onClick={() => setTheme(prev => prev === 'dark' ? 'light' : 'dark')}
              className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors text-xs font-semibold flex items-center gap-1.5"
              title="Toggle preview theme"
            >
              {theme === 'dark' ? (
                <>
                  <Sun className="w-3.5 h-3.5 text-amber-400" />
                  <span className="hidden sm:inline">Light Paper</span>
                </>
              ) : (
                <>
                  <Moon className="w-3.5 h-3.5 text-blue-400" />
                  <span className="hidden sm:inline">Dark Luxe</span>
                </>
              )}
            </button>

            {/* Share link button */}
            <button
              type="button"
              onClick={handleShare}
              className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors text-xs font-semibold flex items-center gap-1.5"
              title="Copy CV link"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5 text-slate-400" />
                  <span className="hidden sm:inline">Share Link</span>
                </>
              )}
            </button>

            {/* Print Button */}
            <button
              type="button"
              onClick={handlePrint}
              className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors text-xs font-semibold flex items-center gap-1.5"
              title="Print document"
            >
              <Printer className="w-3.5 h-3.5 text-slate-400" />
              <span>Print</span>
            </button>

            {/* Download PDF Button */}
            <button
              type="button"
              disabled={downloading}
              onClick={handleDownloadPDF}
              id="cv-page-download-btn"
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold text-xs shadow-lg shadow-blue-600/30 transition-all flex items-center gap-1.5 hover:scale-105 disabled:opacity-60"
            >
              <Download className={`w-3.5 h-3.5 ${downloading ? 'animate-bounce' : ''}`} />
              <span>{downloading ? 'Generating PDF...' : 'Download CV (PDF)'}</span>
            </button>

            {/* Hire Me Button */}
            <button
              type="button"
              onClick={handleHireMe}
              className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md shadow-emerald-600/20 transition-all flex items-center gap-1.5 hover:scale-105"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Hire Me</span>
            </button>

          </div>

        </div>

        {/* Printable & Interactive CV Document Component */}
        <div className="my-4">
          <CVDocument theme={theme} />
        </div>

        {/* Bottom Helper Notice (Hidden in print) */}
        <div className="no-print mt-8 p-4 rounded-2xl bg-slate-900/60 border border-slate-800 text-center text-xs text-slate-400 max-w-xl mx-auto">
          Tip: Click <strong className="text-white">"Download CV (PDF)"</strong> or <strong className="text-white">"Print"</strong> to save this document directly as an A4 formatted PDF in your browser.
        </div>

      </div>

    </div>
  );
};

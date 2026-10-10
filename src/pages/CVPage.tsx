import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  FileText 
} from 'lucide-react';
import { CVDocument } from '../components/CVDocument';
import { PORTFOLIO_DATA } from '../portfolioData';

interface CVPageProps {
  onOpenQuoteModal?: (serviceName?: string) => void;
}

export const CVPage: React.FC<CVPageProps> = () => {
  useEffect(() => {
    document.title = `${PORTFOLIO_DATA.cv.fullName} — Professional Web Developer CV & Resume`;
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#080B11] text-slate-100 pt-24 pb-20 relative">
      
      {/* Background ambient lighting */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Control Bar (Hidden during print) */}
        <div className="no-print mb-8 p-4 sm:p-5 rounded-3xl bg-slate-900/80 border border-slate-800 backdrop-blur-xl shadow-xl flex items-center justify-between gap-4">
          
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

        </div>

        {/* Printable & Interactive CV Document Component */}
        <div className="my-4">
          <CVDocument theme="dark" />
        </div>
      </div>

    </div>
  );
};

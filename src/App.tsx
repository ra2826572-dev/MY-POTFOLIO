/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, MotionConfig } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { Phone } from 'lucide-react';
import { PORTFOLIO_DATA } from './portfolioData';
import ScrollToTop from './components/ScrollToTop';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { AnimatedBackground } from './components/AnimatedBackground';
import { PageTransition } from './components/PageTransition';
import { LanguageProvider, useLanguage } from './context/LanguageContext';

// Pages
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Skills } from './pages/Skills';
import { Services } from './pages/Services';
import { Projects } from './pages/Projects';
import { Process } from './pages/Process';
import { Contact } from './pages/Contact';
import { CVPage } from './pages/CVPage';
import { ContentWritingPage } from './pages/ContentWritingPage';

function AppContent() {
  const { t, isRTL } = useLanguage();
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quotePreselectedService, setQuotePreselectedService] = useState<string | undefined>(undefined);
  const location = useLocation();

  const handleOpenQuoteModal = (serviceName?: string) => {
    setQuotePreselectedService(serviceName);
    setIsQuoteModalOpen(true);
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-[#080B11] text-[#F1F5F9] relative selection:bg-blue-600 selection:text-white flex flex-col overflow-x-hidden">
        
        {/* Top Reading Scroll Progress Bar */}
        <ScrollProgressBar />

        {/* Global Ambient Background */}
        <AnimatedBackground />

        {/* Navigation */}
        <Navbar 
          onOpenQuoteModal={() => handleOpenQuoteModal()} 
        />

        {/* Main Content Areas with Smooth Animated Page Transitions */}
        <main className="flex-grow relative z-10 flex flex-col">
          <AnimatePresence mode="wait">
            <Routes location={location}>
              <Route path="/" element={<PageTransition key="home"><Home onOpenQuoteModal={handleOpenQuoteModal} /></PageTransition>} />
              <Route path="/about" element={<PageTransition key="about"><About onOpenQuoteModal={handleOpenQuoteModal} /></PageTransition>} />
              <Route path="/skills" element={<PageTransition key="skills"><Skills /></PageTransition>} />
              <Route path="/services" element={<PageTransition key="services"><Services onOpenQuoteModal={handleOpenQuoteModal} /></PageTransition>} />
              <Route path="/content-writing" element={<PageTransition key="content"><ContentWritingPage onOpenQuoteModal={handleOpenQuoteModal} /></PageTransition>} />
              <Route path="/projects" element={<PageTransition key="projects"><Projects onOpenQuoteModal={handleOpenQuoteModal} /></PageTransition>} />
              <Route path="/process" element={<PageTransition key="process"><Process /></PageTransition>} />
              <Route path="/contact" element={<PageTransition key="contact"><Contact /></PageTransition>} />
              <Route path="/cv" element={<PageTransition key="cv"><CVPage onOpenQuoteModal={handleOpenQuoteModal} /></PageTransition>} />
              <Route path="/resume" element={<PageTransition key="resume"><CVPage onOpenQuoteModal={handleOpenQuoteModal} /></PageTransition>} />
            </Routes>
          </AnimatePresence>
        </main>

        {/* Footer */}
        <Footer />

        {/* Floating Instant WhatsApp Button with Subtle Interactive Hover */}
        <motion.a
          href={PORTFOLIO_DATA.contact.socials.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          id="floating-whatsapp-trigger"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-6 right-6 z-40 p-3.5 sm:p-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-colors flex items-center justify-center group no-print"
          aria-label="Chat on WhatsApp"
          title="Direct WhatsApp Chat"
        >
          <Phone className="w-5 h-5 sm:w-6 sm:h-6 fill-current relative z-10" />
          <span className="relative z-10 max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out font-bold text-xs sm:text-sm pl-0 group-hover:pl-2">
            {t.common.whatsappMe}
          </span>
        </motion.a>

        {/* Quote / Cost Estimator Modal */}
        <QuoteModal
          isOpen={isQuoteModalOpen}
          onClose={() => setIsQuoteModalOpen(false)}
          initialService={quotePreselectedService}
        />

      </div>
    </MotionConfig>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <AppContent />
      </Router>
    </LanguageProvider>
  );
}

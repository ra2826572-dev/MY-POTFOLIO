/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { Phone } from 'lucide-react';
import { PORTFOLIO_DATA } from './portfolioData';
import ScrollToTop from './components/ScrollToTop';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { AnimatedBackground } from './components/AnimatedBackground';
import { PageTransition } from './components/PageTransition';

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
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quotePreselectedService, setQuotePreselectedService] = useState<string | undefined>(undefined);
  const location = useLocation();

  const handleOpenQuoteModal = (serviceName?: string) => {
    setQuotePreselectedService(serviceName);
    setIsQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#080B11] text-[#F1F5F9] relative selection:bg-blue-600 selection:text-white flex flex-col overflow-x-hidden">
      
      {/* Top Reading Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Global Ambient Floating Orbs & Twinkling Particles */}
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

      {/* Floating Instant WhatsApp Button with Continuous Levitation & Pulse */}
      <motion.a
        href={PORTFOLIO_DATA.contact.socials.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        id="floating-whatsapp-trigger"
        animate={{
          y: [0, -7, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="fixed bottom-6 right-6 z-40 p-3.5 sm:p-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-2xl shadow-emerald-500/30 hover:scale-110 active:scale-95 transition-transform duration-300 flex items-center justify-center group no-print"
        aria-label="Chat on WhatsApp"
        title="Direct WhatsApp Chat"
      >
        {/* Subtle pulsing outer radar wave */}
        <span className="absolute -inset-1 rounded-full bg-emerald-400/40 animate-ping opacity-60 pointer-events-none" />
        
        <Phone className="w-5 h-5 sm:w-6 sm:h-6 fill-current relative z-10" />
        <span className="relative z-10 max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out font-bold text-xs sm:text-sm pl-0 group-hover:pl-2">
          WhatsApp Me
        </span>
      </motion.a>

      {/* Quote / Cost Estimator Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        initialService={quotePreselectedService}
      />

    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}

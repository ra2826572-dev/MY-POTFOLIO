/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { Phone } from 'lucide-react';
import { PORTFOLIO_DATA } from './portfolioData';
import ScrollToTop from './components/ScrollToTop';

// Pages
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Skills } from './pages/Skills';
import { Services } from './pages/Services';
import { Projects } from './pages/Projects';
import { Process } from './pages/Process';
import { Contact } from './pages/Contact';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quotePreselectedService, setQuotePreselectedService] = useState<string | undefined>(undefined);

  const handleOpenQuoteModal = (serviceName?: string) => {
    setQuotePreselectedService(serviceName);
    setIsQuoteModalOpen(true);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[#080B11] text-[#F1F5F9] relative selection:bg-blue-600 selection:text-white flex flex-col">
        
        {/* Navigation */}
        <Navbar 
          onOpenQuoteModal={() => handleOpenQuoteModal()} 
        />

        {/* Main Content Areas */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home onOpenQuoteModal={handleOpenQuoteModal} />} />
            <Route path="/about" element={<About onOpenQuoteModal={handleOpenQuoteModal} />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/services" element={<Services onOpenQuoteModal={handleOpenQuoteModal} />} />
            <Route path="/projects" element={<Projects onOpenQuoteModal={handleOpenQuoteModal} />} />
            <Route path="/process" element={<Process />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />

        {/* Floating Instant WhatsApp Button */}
        <a
          href={PORTFOLIO_DATA.contact.socials.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          id="floating-whatsapp-trigger"
          className="fixed bottom-6 right-6 z-40 p-3.5 sm:p-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-2xl shadow-emerald-500/30 hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center group"
          aria-label="Chat on WhatsApp"
          title="Direct WhatsApp Chat"
        >
          <Phone className="w-5 h-5 sm:w-6 sm:h-6 fill-current" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out font-bold text-xs sm:text-sm pl-0 group-hover:pl-2">
            WhatsApp Me
          </span>
        </a>

        {/* Quote / Cost Estimator Modal */}
        <QuoteModal
          isOpen={isQuoteModalOpen}
          onClose={() => setIsQuoteModalOpen(false)}
          initialService={quotePreselectedService}
        />

      </div>
    </Router>
  );
}

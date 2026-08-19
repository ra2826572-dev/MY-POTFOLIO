/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { Process } from './components/Process';
import { WhyChooseMe } from './components/WhyChooseMe';
import { Testimonials } from './components/Testimonials';
import { CTA } from './components/CTA';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { Phone } from 'lucide-react';
import { PORTFOLIO_DATA } from './portfolioData';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quotePreselectedService, setQuotePreselectedService] = useState<string | undefined>(undefined);

  const handleOpenQuoteModal = (serviceName?: string) => {
    setQuotePreselectedService(serviceName);
    setIsQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#080B11] text-[#F1F5F9] relative selection:bg-blue-600 selection:text-white">
      
      {/* Navigation */}
      <Navbar 
        onOpenQuoteModal={() => handleOpenQuoteModal()} 
      />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero 
          onOpenQuoteModal={() => handleOpenQuoteModal()} 
        />

        {/* 2. About Me Section */}
        <About 
          onOpenQuoteModal={() => handleOpenQuoteModal()} 
        />

        {/* 3. Skills Section */}
        <Skills />

        {/* 4. Services Section */}
        <Services 
          onOpenQuoteModal={(service) => handleOpenQuoteModal(service)} 
        />

        {/* 5. Featured Projects Showcase */}
        <Projects 
          onOpenQuoteModal={(service) => handleOpenQuoteModal(service)} 
        />

        {/* 6. My Process Timeline */}
        <Process />

        {/* 7. Why Choose Me */}
        <WhyChooseMe />

        {/* 8. Client Testimonials */}
        <Testimonials />

        {/* 9. Call to Action Banner */}
        <CTA 
          onOpenQuoteModal={() => handleOpenQuoteModal()} 
        />

        {/* 10. Contact Section */}
        <Contact />
      </main>

      {/* 12. Footer */}
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
  );
}

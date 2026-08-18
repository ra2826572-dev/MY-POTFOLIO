import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Sparkles, 
  Check, 
  Send, 
  Phone, 
  Mail, 
  Calculator,
  ArrowRight
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../portfolioData';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose, initialService }) => {
  const [selectedService, setSelectedService] = useState<string>(initialService || 'Website Design');
  const [pageCount, setPageCount] = useState<string>('1-5 Pages');
  const [timeline, setTimeline] = useState<string>('2-3 Weeks');
  const [clientName, setClientName] = useState<string>('');
  const [clientPhone, setClientPhone] = useState<string>('');
  const [clientEmail, setClientEmail] = useState<string>('');
  const [notes, setNotes] = useState<string>('');

  if (!isOpen) return null;

  const servicesList = [
    'Website Design',
    'Business Website',
    'E-Commerce Website',
    'Landing Page',
    'UI/UX Design',
    'Website Redesign'
  ];

  const handleWhatsAppSend = () => {
    const text = `Hi Rizwan, I would like a quote for a project!%0A%0A*Name:* ${clientName || 'Client'}%0A*Service:* ${selectedService}%0A*Scope:* ${pageCount}%0A*Target Timeline:* ${timeline}%0A*Email:* ${clientEmail || 'N/A'}%0A*Phone:* ${clientPhone || 'N/A'}%0A*Notes:* ${encodeURIComponent(notes || 'Looking forward to discussing details.')}`;
    window.open(`https://wa.me/${PORTFOLIO_DATA.contact.whatsappNumber}?text=${text}`, '_blank');
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#0B0F19] border border-slate-700/80 shadow-2xl p-6 sm:p-8 z-10 custom-scrollbar text-white"
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                <Calculator className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Project Cost & Quote Request</h3>
                <p className="text-xs text-slate-400">Select your requirements for an immediate tailored estimate.</p>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-6">
            
            {/* Step 1: Select Service */}
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-3">
                1. Select Service
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {servicesList.map((service) => (
                  <button
                    key={service}
                    type="button"
                    onClick={() => setSelectedService(service)}
                    className={`p-3 rounded-xl text-xs font-semibold text-left transition-all border ${
                      selectedService === service
                        ? 'bg-blue-600/20 border-blue-500 text-blue-300 shadow-md shadow-blue-500/10'
                        : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800'
                    }`}
                  >
                    {service}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Scope & Timeline */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  2. Number of Pages
                </label>
                <select
                  value={pageCount}
                  onChange={(e) => setPageCount(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-sm text-white outline-none"
                >
                  <option value="1 Page (Single Landing Page)">1 Page (Single Landing Page)</option>
                  <option value="1-5 Pages (Standard Business Site)">1-5 Pages (Standard Business Site)</option>
                  <option value="6-12 Pages (Multi-Section Corporate)">6-12 Pages (Multi-Section Corporate)</option>
                  <option value="15+ Pages / Full Custom Store">15+ Pages / Full Custom Store</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  3. Target Timeline
                </label>
                <select
                  value={timeline}
                  onChange={(e) => setTimeline(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-sm text-white outline-none"
                >
                  <option value="Rush (Within 1-2 Weeks)">Rush (Within 1-2 Weeks)</option>
                  <option value="Standard (2-3 Weeks)">Standard (2-3 Weeks)</option>
                  <option value="Flexible (1-2 Months)">Flexible (1-2 Months)</option>
                </select>
              </div>
            </div>

            {/* Step 3: Contact Info */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-[11px] font-semibold text-slate-400 mb-1">Your Name</label>
                <input
                  type="text"
                  placeholder="e.g. Alex"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-400 mb-1">WhatsApp / Phone</label>
                <input
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  value={clientPhone}
                  onChange={(e) => setClientPhone(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-400 mb-1">Email</label>
                <input
                  type="email"
                  placeholder="name@email.com"
                  value={clientEmail}
                  onChange={(e) => setClientEmail(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white outline-none focus:border-blue-500"
                />
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className="block text-[11px] font-semibold text-slate-400 mb-1">Project Notes / Reference Websites</label>
              <textarea
                rows={2}
                placeholder="Any special features, integrations, or competitor sites you like..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white outline-none focus:border-blue-500 resize-none"
              />
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={handleWhatsAppSend}
                className="flex-1 py-3 px-5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
              >
                <Phone className="w-4 h-4" />
                <span>Send Quote Request on WhatsApp</span>
              </button>

              <button
                type="button"
                onClick={onClose}
                className="py-3 px-5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold"
              >
                Close
              </button>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

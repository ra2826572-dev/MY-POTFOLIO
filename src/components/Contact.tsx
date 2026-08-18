import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Mail, 
  Phone, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  Linkedin, 
  Instagram, 
  Github, 
  MessageSquare, 
  ArrowRight,
  Clock,
  MapPin,
  ExternalLink,
  Copy,
  Check
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Website Design',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const projectTypes = [
    'Website Design',
    'Business Website',
    'E-Commerce Website',
    'Landing Page',
    'UI/UX Design',
    'Website Redesign',
    'Other / Custom Project'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission and construct WhatsApp/Email links
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  // Generate WhatsApp prefilled URL with form content
  const getCustomWhatsAppUrl = () => {
    const text = `Hi Rizwan, my name is ${formData.name || 'Client'}.%0A%0AProject Type: ${formData.projectType}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0A%0AMessage:%0A${encodeURIComponent(formData.message || 'I would like to discuss a web project with you.')}`;
    return `https://wa.me/${PORTFOLIO_DATA.contact.whatsappNumber}?text=${text}`;
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#080B11]">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Direct Communication</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-200 to-purple-400">Touch</span>
          </h2>
          <p className="text-slate-400 text-base max-w-2xl mt-3 font-normal">
            Ready to bring your website vision to life? Fill out the form below or message me directly on WhatsApp.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Channels & Socials */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* Prominent WhatsApp Me Highlight Card */}
            <div className="relative p-7 rounded-3xl bg-gradient-to-br from-emerald-950/70 via-slate-900/90 to-slate-900/90 border border-emerald-500/40 backdrop-blur-xl shadow-xl shadow-black/50 overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                  <Phone className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] font-bold border border-emerald-500/30">
                  Fastest Response (~15 mins)
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">
                Chat Directly on WhatsApp
              </h3>
              
              <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
                Connect instantly to discuss project timelines, pricing, or custom feature requirements.
              </p>

              <a
                href={PORTFOLIO_DATA.contact.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                id="contact-whatsapp-main-btn"
                className="w-full py-3.5 px-6 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all flex items-center justify-center gap-2 group"
              >
                <Phone className="w-4 h-4" />
                <span>WhatsApp Me</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Email Contact Card */}
            <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800/90 backdrop-blur-xl shadow-xl shadow-black/40 flex items-center justify-between gap-4">
              <div className="flex items-center gap-4 min-w-0">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-slate-400 font-medium">Email Me At</p>
                  <p className="text-sm font-bold text-white truncate">{PORTFOLIO_DATA.contact.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-1.5 shrink-0">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                  title="Copy email address"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
                <a
                  href={PORTFOLIO_DATA.contact.socials.email}
                  className="p-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white transition-colors"
                  title="Open mail client"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Social Channels Required */}
            <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800/90 backdrop-blur-xl shadow-xl shadow-black/40">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
                Connect on Social Networks
              </h4>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {/* LinkedIn */}
                <a
                  href={PORTFOLIO_DATA.contact.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl bg-slate-800/70 hover:bg-blue-900/40 border border-slate-700/70 hover:border-blue-500/50 text-slate-300 hover:text-blue-400 flex flex-col items-center gap-1.5 transition-all text-center"
                >
                  <Linkedin className="w-5 h-5" />
                  <span className="text-xs font-semibold">LinkedIn</span>
                </a>

                {/* Instagram */}
                <a
                  href={PORTFOLIO_DATA.contact.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl bg-slate-800/70 hover:bg-pink-900/40 border border-slate-700/70 hover:border-pink-500/50 text-slate-300 hover:text-pink-400 flex flex-col items-center gap-1.5 transition-all text-center"
                >
                  <Instagram className="w-5 h-5" />
                  <span className="text-xs font-semibold">Instagram</span>
                </a>

                {/* GitHub */}
                <a
                  href={PORTFOLIO_DATA.contact.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl bg-slate-800/70 hover:bg-slate-700 border border-slate-700/70 hover:border-slate-500 text-slate-300 hover:text-white flex flex-col items-center gap-1.5 transition-all text-center"
                >
                  <Github className="w-5 h-5" />
                  <span className="text-xs font-semibold">GitHub</span>
                </a>

                {/* WhatsApp */}
                <a
                  href={PORTFOLIO_DATA.contact.socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl bg-slate-800/70 hover:bg-emerald-900/40 border border-slate-700/70 hover:border-emerald-500/50 text-slate-300 hover:text-emerald-400 flex flex-col items-center gap-1.5 transition-all text-center"
                >
                  <Phone className="w-5 h-5" />
                  <span className="text-xs font-semibold">WhatsApp</span>
                </a>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/60 text-center">
                <p className="text-[11px] text-slate-400">
                  Links easily customizable in <code className="text-blue-400">portfolioData.ts</code>
                </p>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Interactive Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/70 border border-slate-800/90 backdrop-blur-xl shadow-2xl shadow-black/50">
              
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-white">Send a Direct Message</h3>
                  <p className="text-xs text-slate-400 mt-1">I will review your message and reply promptly.</p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                  <Send className="w-5 h-5" />
                </div>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center flex flex-col items-center justify-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mb-2">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold text-white">Message Prepared!</h4>
                  <p className="text-sm text-slate-300 max-w-md">
                    Thank you, <strong className="text-white">{formData.name}</strong>. You can now send this directly via WhatsApp or Email for instant review:
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-3 pt-4 w-full max-w-md">
                    <a
                      href={getCustomWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-3 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Send on WhatsApp</span>
                    </a>

                    <a
                      href={`mailto:${PORTFOLIO_DATA.contact.email}?subject=Project%20Inquiry%20from%20${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message + '\n\nPhone: ' + formData.phone + '\nProject: ' + formData.projectType)}`}
                      className="flex-1 py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Send via Email</span>
                    </a>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', projectType: 'Website Design', message: '' });
                    }}
                    className="text-xs text-slate-400 hover:text-white pt-4 underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                        Your Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        placeholder="e.g. John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-slate-950/70 border border-slate-700/80 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-white text-sm placeholder-slate-500 outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                        Email Address *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-slate-950/70 border border-slate-700/80 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-white text-sm placeholder-slate-500 outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Phone / WhatsApp & Project Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="contact-phone" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                        Phone / WhatsApp *
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        required
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-slate-950/70 border border-slate-700/80 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-white text-sm placeholder-slate-500 outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-project-type" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                        Project Type
                      </label>
                      <select
                        id="contact-project-type"
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-slate-950/70 border border-slate-700/80 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-white text-sm outline-none transition-all"
                      >
                        {projectTypes.map((type) => (
                          <option key={type} value={type} className="bg-slate-900 text-white">
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Project Details & Message *
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      placeholder="Describe your website goals, number of pages, design preferences, and timeline..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-950/70 border border-slate-700/80 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-white text-sm placeholder-slate-500 outline-none transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    id="contact-form-submit-btn"
                    className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white font-bold text-sm sm:text-base shadow-xl shadow-blue-600/30 hover:shadow-blue-600/50 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 group cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Processing Message...</span>
                      </span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>

                  <p className="text-center text-[11px] text-slate-500">
                    🔒 Your contact details are kept strictly private and used solely for project discussions.
                  </p>

                </form>
              )}

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

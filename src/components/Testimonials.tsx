import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Star, 
  Quote, 
  Sparkles, 
  MessageSquarePlus, 
  X, 
  CheckCircle2, 
  MapPin, 
  User, 
  Briefcase, 
  Send 
} from 'lucide-react';
import { PORTFOLIO_DATA, Testimonial } from '../portfolioData';
import { db } from '../firebase';
import { collection, onSnapshot, doc, setDoc } from 'firebase/firestore';

export const Testimonials: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(PORTFOLIO_DATA.testimonials);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  // Form state
  const [clientName, setClientName] = useState('');
  const [clientRole, setClientRole] = useState('Founder & CEO');
  const [clientCompany, setClientCompany] = useState('');
  const [city, setCity] = useState('Lahore');
  const [rating, setRating] = useState(5);
  const [quote, setQuote] = useState('');
  const [projectType, setProjectType] = useState('Full-Stack Web App');

  // Load testimonials from Firestore in real-time
  useEffect(() => {
    try {
      const unsubscribe = onSnapshot(collection(db, 'testimonials'), (snapshot) => {
        if (!snapshot.empty) {
          const list: Testimonial[] = [];
          snapshot.forEach((docSnap) => {
            list.push(docSnap.data() as Testimonial);
          });
          if (list.length > 0) {
            setTestimonials(list);
          }
        }
      }, (error) => {
        console.warn('Firestore testimonials load error, using default data:', error);
      });
      return () => unsubscribe();
    } catch (e) {
      console.warn('Firestore testimonials error:', e);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName.trim() || !clientCompany.trim() || !quote.trim()) return;

    setIsSubmitting(true);
    try {
      const id = 'test-' + Date.now();
      const newTestimonial: Testimonial = {
        id,
        clientName: clientName.trim(),
        clientRole: clientRole.trim(),
        clientCompany: `${clientCompany.trim()} (${city})`,
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
        rating: Number(rating),
        quote: quote.trim(),
        projectType: projectType.trim(),
        isPlaceholder: false
      };

      // Save permanently to Firestore
      const docRef = doc(db, 'testimonials', id);
      await setDoc(docRef, newTestimonial);

      setSuccessMessage('Thank you! Your comment/testimonial has been successfully added to the database and is now live.');
      setIsSubmitting(false);

      // Reset form
      setClientName('');
      setClientCompany('');
      setQuote('');
      
      setTimeout(() => {
        setIsModalOpen(false);
        setSuccessMessage(null);
      }, 3000);
    } catch (err: any) {
      console.error('Failed to save testimonial:', err);
      alert('Failed to save comment. Please try again.');
      setIsSubmitting(false);
    }
  };

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-[#090D16]/80 border-t border-slate-800/40">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Pakistani & Global Client Feedback</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-200 to-purple-400">Testimonials</span>
          </h2>
          <p className="text-slate-400 text-base max-w-2xl mt-3">
            Read what founders and business leaders across Lahore, Karachi, Islamabad, Faisalabad and globally say about working with me.
          </p>

          {/* Add Testimonial / Comment Button */}
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-bold text-sm shadow-lg shadow-blue-600/30 hover:scale-105 transition-all duration-300"
          >
            <MessageSquarePlus className="w-4 h-4" />
            Add Your Review / Comment (اپنا تبصرہ درج کریں)
          </button>

          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-4" />
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-8 rounded-3xl bg-slate-900/80 border border-slate-800/90 hover:border-blue-500/40 backdrop-blur-xl shadow-xl shadow-black/40 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                {/* Quote Icon & Rating Stars */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                    <Quote className="w-5 h-5" />
                  </div>

                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.rating || 5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Testimonial Quote */}
                <p className="text-slate-300 text-sm leading-relaxed mb-6 font-normal italic">
                  "{item.quote}"
                </p>
              </div>

              {/* Client Info */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={item.avatar}
                    alt={item.clientName}
                    className="w-11 h-11 rounded-full object-cover border border-slate-700"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-white leading-tight">
                      {item.clientName}
                    </h4>
                    <p className="text-[11px] text-slate-400 leading-tight">
                      {item.clientRole} • {item.clientCompany}
                    </p>
                    <p className="text-[10px] text-blue-400 mt-0.5">
                      {item.projectType}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Add Review / Comment Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    <MessageSquarePlus className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Add Your Client Review / Comment</h3>
                    <p className="text-xs text-slate-400">Saved permanently in persistent database</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {successMessage ? (
                <div className="p-6 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 text-center text-emerald-300 space-y-3">
                  <CheckCircle2 className="w-12 h-12 mx-auto text-emerald-400" />
                  <p className="text-sm font-semibold">{successMessage}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Your Full Name</label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-3 w-4 h-4 text-slate-500" />
                      <input
                        type="text"
                        required
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        placeholder="e.g. Ali Raza"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Your Role / Title</label>
                      <input
                        type="text"
                        required
                        value={clientRole}
                        onChange={(e) => setClientRole(e.target.value)}
                        placeholder="e.g. Founder & CEO"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Company / Organization</label>
                      <input
                        type="text"
                        required
                        value={clientCompany}
                        onChange={(e) => setClientCompany(e.target.value)}
                        placeholder="e.g. Lahore Tech"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">City in Pakistan / Region</label>
                      <div className="relative">
                        <MapPin className="absolute left-3.5 top-3 w-4 h-4 text-slate-500" />
                        <select
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-blue-500"
                        >
                          <option value="Lahore">Lahore</option>
                          <option value="Karachi">Karachi</option>
                          <option value="Islamabad">Islamabad</option>
                          <option value="Faisalabad">Faisalabad</option>
                          <option value="Rawalpindi">Rawalpindi</option>
                          <option value="Multan">Multan</option>
                          <option value="Peshawar">Peshawar</option>
                          <option value="International">International</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Rating (Stars)</label>
                      <select
                        value={rating}
                        onChange={(e) => setRating(Number(e.target.value))}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-blue-500"
                      >
                        <option value="5">⭐⭐⭐⭐⭐ (5 Stars)</option>
                        <option value="4">⭐⭐⭐⭐ (4 Stars)</option>
                        <option value="3">⭐⭐⭐ (3 Stars)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Project Type</label>
                    <input
                      type="text"
                      required
                      value={projectType}
                      onChange={(e) => setProjectType(e.target.value)}
                      placeholder="e.g. E-Commerce Store & Web App"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Your Review / Comment (تبصرہ)</label>
                    <textarea
                      required
                      rows={4}
                      value={quote}
                      onChange={(e) => setQuote(e.target.value)}
                      placeholder="Write your feedback or comment about Rizwan's work..."
                      className="w-full p-4 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-blue-500 resize-none"
                    />
                  </div>

                  <div className="pt-4 flex items-center justify-end gap-3">
                    <button
                      type="button"
                      onClick={() => setIsModalOpen(false)}
                      className="px-5 py-2.5 rounded-xl bg-slate-800 text-slate-300 font-semibold text-sm hover:bg-slate-700 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-sm shadow-lg shadow-blue-600/30 hover:scale-105 transition-all flex items-center gap-2 disabled:opacity-50"
                    >
                      <Send className="w-4 h-4" />
                      {isSubmitting ? 'Saving to Database...' : 'Submit & Save Review'}
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};

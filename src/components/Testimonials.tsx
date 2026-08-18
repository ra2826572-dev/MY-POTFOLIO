import React from 'react';
import { motion } from 'motion/react';
import { 
  Star, 
  Quote, 
  Sparkles, 
  CheckCircle2, 
  HelpCircle,
  Edit3
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../portfolioData';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-[#090D16]/80 border-t border-slate-800/40">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Client Feedback Preview</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-200 to-purple-400">Testimonials</span>
          </h2>
          <p className="text-slate-400 text-base max-w-2xl mt-3">
            Read what previous partners and business owners say about their experience working with me.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-4" />
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-8 rounded-3xl bg-slate-900/60 border border-slate-800/90 hover:border-blue-500/40 backdrop-blur-xl shadow-xl shadow-black/40 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                {/* Quote Icon & Rating Stars */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                    <Quote className="w-5 h-5" />
                  </div>

                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Testimonial Quote */}
                <p className="text-slate-300 text-sm leading-relaxed mb-6 font-normal italic">
                  "{item.quote}"
                </p>
              </div>

              {/* Client Info & Placeholder Badge */}
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

              {/* Clearly marked placeholder badge */}
              {item.isPlaceholder && (
                <div className="mt-4 pt-2 border-t border-dashed border-slate-800/60 flex items-center justify-between text-[10px] text-slate-400">
                  <span className="flex items-center gap-1 text-amber-400/90 font-medium">
                    <Edit3 className="w-3 h-3" /> Sample Review Placeholder
                  </span>
                  <span>Ready to edit</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Notice explaining placeholder replacement */}
        <div className="mt-12 p-4 rounded-2xl bg-slate-900/40 border border-slate-800 text-center max-w-2xl mx-auto">
          <p className="text-xs text-slate-400">
            📌 <strong className="text-slate-300">Ready for your real client feedback:</strong> These placeholders are configured in <code className="text-blue-400">portfolioData.ts</code> so you can plug in genuine client reviews as you complete client projects.
          </p>
        </div>

      </div>
    </section>
  );
};

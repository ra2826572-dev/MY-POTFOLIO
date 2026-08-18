import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Code, 
  FileText, 
  Phone, 
  Image as ImageIcon, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';

interface CustomizationGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CustomizationGuideModal: React.FC<CustomizationGuideModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

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

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-3xl bg-[#0B0F19] border border-slate-700/80 shadow-2xl p-6 sm:p-8 z-10 custom-scrollbar text-slate-200"
        >
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                <Code className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Customization Guide</h3>
                <p className="text-xs text-slate-400">How to update your info in <code className="text-blue-400">portfolioData.ts</code></p>
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

          <div className="space-y-6 text-sm">
            
            {/* Guide Step 1 */}
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
              <h4 className="font-bold text-white flex items-center gap-2 mb-2 text-sm">
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>1. Update Your Real WhatsApp Number & Socials</span>
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-3">
                Open <code className="text-blue-300 bg-slate-800 px-1.5 py-0.5 rounded">src/portfolioData.ts</code> and update the <code className="text-blue-300">contact</code> object with your actual phone number:
              </p>
              <pre className="p-3 rounded-xl bg-slate-950 text-[11px] font-mono text-emerald-300 overflow-x-auto border border-slate-800">
{`whatsappNumber: '923001234567', // Numbers only for wa.me link
phone: '+92 300 1234567',
socials: {
  whatsapp: 'https://wa.me/YOUR_PHONE_NUMBER?text=...',
  email: 'mailto:your-email@gmail.com',
  linkedin: 'https://linkedin.com/in/your-profile',
  instagram: 'https://instagram.com/your-username',
  github: 'https://github.com/your-username',
}`}
              </pre>
            </div>

            {/* Guide Step 2 */}
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
              <h4 className="font-bold text-white flex items-center gap-2 mb-2 text-sm">
                <ImageIcon className="w-4 h-4 text-blue-400" />
                <span>2. Swap Project Screenshots & Live Links</span>
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-3">
                Replace project images with your real website screenshots or Unsplash image links:
              </p>
              <pre className="p-3 rounded-xl bg-slate-950 text-[11px] font-mono text-blue-300 overflow-x-auto border border-slate-800">
{`projects: [
  {
    id: 'proj-1',
    name: 'Your Real Client Website',
    image: 'https://your-screenshot-url.com/image.jpg',
    liveUrl: 'https://actual-client-website.com',
    ...
  }
]`}
              </pre>
            </div>

            {/* Guide Step 3 */}
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
              <h4 className="font-bold text-white flex items-center gap-2 mb-2 text-sm">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span>3. Replace Testimonials & Stats</span>
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Update the <code className="text-blue-300 bg-slate-800 px-1.5 py-0.5 rounded">testimonials</code> array with real client quotes and change <code className="text-blue-300 bg-slate-800 px-1.5 py-0.5 rounded">stats</code> (e.g. 80+ Projects, 50+ Websites) whenever your metrics grow!
              </p>
            </div>

          </div>

          <div className="mt-6 pt-4 border-t border-slate-800 flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold"
            >
              Got it, close guide
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

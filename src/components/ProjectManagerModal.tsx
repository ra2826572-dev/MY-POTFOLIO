import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Upload, 
  Image as ImageIcon, 
  Plus, 
  Trash2, 
  Check, 
  Globe, 
  Tag, 
  FileText, 
  Sparkles,
  Link,
  Code2
} from 'lucide-react';
import { Project } from '../portfolioData';

interface ProjectManagerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSaveProject: (project: Project) => void;
  initialProject?: Project | null;
}

const DEFAULT_CATEGORIES: Project['category'][] = [
  'Business',
  'E-Commerce',
  'Restaurant',
  'Salon',
  'Hotel',
  'Portfolio'
];

const PRESET_TECH = [
  'WordPress',
  'Elementor',
  'WooCommerce',
  'Shopify',
  'React',
  'Tailwind CSS',
  'JavaScript',
  'HTML5 / CSS3',
  'Next.js',
  'PHP',
  'UI/UX Design',
  'Responsive Design'
];

const PRESET_SAMPLE_IMAGES = [
  { name: 'Corporate Business', url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Modern E-Commerce', url: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Restaurant & Cafe', url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Beauty & Salon', url: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Luxury Hotel', url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Creative Portfolio', url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop' }
];

export const ProjectManagerModal: React.FC<ProjectManagerModalProps> = ({
  isOpen,
  onClose,
  onSaveProject,
  initialProject
}) => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState<Project['category']>('Business');
  const [tagline, setTagline] = useState('');
  const [description, setDescription] = useState('');
  const [overview, setOverview] = useState('');
  const [image, setImage] = useState('');
  const [liveUrl, setLiveUrl] = useState('');
  const [technologies, setTechnologies] = useState<string[]>([]);
  const [customTechInput, setCustomTechInput] = useState('');
  const [features, setFeatures] = useState<string[]>([]);
  const [newFeatureInput, setNewFeatureInput] = useState('');
  const [clientName, setClientName] = useState('');
  const [completionTime, setCompletionTime] = useState('');

  const [imageInputMode, setImageInputMode] = useState<'upload' | 'url' | 'presets'>('upload');
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (initialProject) {
      setName(initialProject.name || '');
      setCategory(initialProject.category || 'Business');
      setTagline(initialProject.tagline || '');
      setDescription(initialProject.description || '');
      setOverview(initialProject.overview || '');
      setImage(initialProject.image || '');
      setLiveUrl(initialProject.liveUrl || '');
      setTechnologies(initialProject.technologies || ['WordPress', 'Elementor']);
      setFeatures(initialProject.features || ['Fully Responsive Design', 'Fast Page Load Speed', 'SEO Optimized']);
      setClientName(initialProject.clientName || '');
      setCompletionTime(initialProject.completionTime || '4 Days Delivery');
    } else {
      // Defaults for a new project
      setName('');
      setCategory('Business');
      setTagline('Modern Website Design');
      setDescription('A custom, responsive website crafted with high speed performance and conversion-focused UI.');
      setOverview('Designed and developed a complete responsive web solution tailored to client branding and business goals.');
      setImage('https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop');
      setLiveUrl('https://example.com');
      setTechnologies(['WordPress', 'Elementor', 'Responsive Design']);
      setFeatures(['100% Mobile & Tablet Responsive', 'Fast Page Speed & Performance', 'Modern UI/UX Visual Layout', 'Contact Form & WhatsApp Integration']);
      setClientName('Private Client');
      setCompletionTime('3-5 Days');
    }
  }, [initialProject, isOpen]);

  if (!isOpen) return null;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        setImage(result);
      };
      reader.readAsDataURL(file);
    }
  };

  const toggleTechnology = (tech: string) => {
    if (technologies.includes(tech)) {
      setTechnologies(technologies.filter(t => t !== tech));
    } else {
      setTechnologies([...technologies, tech]);
    }
  };

  const handleAddCustomTech = (e: React.KeyboardEvent | React.MouseEvent) => {
    if ('key' in e && e.key !== 'Enter') return;
    if (customTechInput.trim() && !technologies.includes(customTechInput.trim())) {
      setTechnologies([...technologies, customTechInput.trim()]);
      setCustomTechInput('');
    }
  };

  const handleAddFeature = (e: React.KeyboardEvent | React.MouseEvent) => {
    if ('key' in e && e.key !== 'Enter') return;
    if (newFeatureInput.trim() && !features.includes(newFeatureInput.trim())) {
      setFeatures([...features, newFeatureInput.trim()]);
      setNewFeatureInput('');
    }
  };

  const handleRemoveFeature = (index: number) => {
    setFeatures(features.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    const projectData: Project = {
      id: initialProject ? initialProject.id : `proj-${Date.now()}`,
      name: name.trim(),
      category,
      tagline: tagline.trim() || 'Custom Web Solution',
      description: description.trim() || 'Modern website tailored for high conversions.',
      overview: overview.trim() || description.trim() || 'Engineered with clean UI and responsive layouts.',
      image: image || 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
      liveUrl: liveUrl.trim() || '#',
      technologies: technologies.length > 0 ? technologies : ['Web Design', 'Development'],
      features: features.length > 0 ? features : ['Responsive Design', 'SEO Optimized'],
      clientName: clientName.trim() || 'Client Project',
      completionTime: completionTime.trim() || 'Completed',
      previewType: 'mockup'
    };

    onSaveProject(projectData);
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
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#0B0F19] border border-slate-700/80 shadow-2xl shadow-black text-slate-100 z-10 custom-scrollbar"
        >
          {/* Header */}
          <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#0B0F19]/95 backdrop-blur-lg border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 p-[1.5px]">
                <div className="w-full h-full bg-[#0B0F19] rounded-[10px] flex items-center justify-center text-blue-400">
                  <Code2 className="w-5 h-5" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">
                  {initialProject ? 'Edit Project' : 'Add My Work / Project'}
                </h3>
                <p className="text-xs text-slate-400">
                  Apna real kaam aur website yahan save karein jo portfolio mein display ho.
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Form Body */}
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
            
            {/* Top Grid: Name, Category, Tagline */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Project Title */}
              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                  Project Title / Client Business Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Apex Luxury Real Estate, Dental Care Clinic..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white text-sm outline-none transition-all placeholder:text-slate-500"
                />
              </div>

              {/* Category Selection */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                  Category
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value as Project['category'])}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 focus:border-blue-500 text-white text-sm outline-none"
                >
                  {DEFAULT_CATEGORIES.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              {/* Tagline */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                  Tagline / Subtitle
                </label>
                <input
                  type="text"
                  value={tagline}
                  onChange={(e) => setTagline(e.target.value)}
                  placeholder="e.g. Modern E-Commerce Store, High Converting Page"
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 focus:border-blue-500 text-white text-sm outline-none placeholder:text-slate-500"
                />
              </div>

            </div>

            {/* Project Image Section */}
            <div className="space-y-3 p-4 rounded-2xl bg-slate-900/50 border border-slate-800">
              <div className="flex items-center justify-between">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-300 flex items-center gap-2">
                  <ImageIcon className="w-4 h-4 text-blue-400" />
                  <span>Project Screenshot / Image</span>
                </label>
                <div className="flex gap-1">
                  <button
                    type="button"
                    onClick={() => setImageInputMode('upload')}
                    className={`px-2.5 py-1 rounded-lg text-xs font-medium ${
                      imageInputMode === 'upload' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white bg-slate-800'
                    }`}
                  >
                    Upload File
                  </button>
                  <button
                    type="button"
                    onClick={() => setImageInputMode('url')}
                    className={`px-2.5 py-1 rounded-lg text-xs font-medium ${
                      imageInputMode === 'url' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white bg-slate-800'
                    }`}
                  >
                    Paste URL
                  </button>
                  <button
                    type="button"
                    onClick={() => setImageInputMode('presets')}
                    className={`px-2.5 py-1 rounded-lg text-xs font-medium ${
                      imageInputMode === 'presets' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white bg-slate-800'
                    }`}
                  >
                    Pick Template
                  </button>
                </div>
              </div>

              {/* Mode 1: File Upload */}
              {imageInputMode === 'upload' && (
                <div>
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileUpload}
                    accept="image/*"
                    className="hidden"
                  />
                  <div 
                    onClick={() => fileInputRef.current?.click()}
                    className="cursor-pointer border-2 border-dashed border-slate-700 hover:border-blue-500 rounded-xl p-6 flex flex-col items-center justify-center gap-2 bg-slate-950/60 transition-colors"
                  >
                    <Upload className="w-6 h-6 text-blue-400" />
                    <p className="text-xs font-semibold text-slate-200">
                      Click to choose screenshot from your device
                    </p>
                    <p className="text-[11px] text-slate-400">
                      Supports JPG, PNG, WebP (Instant local preview)
                    </p>
                  </div>
                </div>
              )}

              {/* Mode 2: URL Input */}
              {imageInputMode === 'url' && (
                <div>
                  <input
                    type="url"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    placeholder="https://images.unsplash.com/... or your image link"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 focus:border-blue-500 text-white text-xs outline-none"
                  />
                </div>
              )}

              {/* Mode 3: Presets */}
              {imageInputMode === 'presets' && (
                <div className="grid grid-cols-3 gap-2">
                  {PRESET_SAMPLE_IMAGES.map((preset) => (
                    <div
                      key={preset.name}
                      onClick={() => setImage(preset.url)}
                      className={`cursor-pointer rounded-lg overflow-hidden border p-1 transition-all ${
                        image === preset.url ? 'border-blue-500 ring-2 ring-blue-500/40 bg-blue-950/30' : 'border-slate-800 hover:border-slate-600'
                      }`}
                    >
                      <img src={preset.url} alt={preset.name} className="h-14 w-full object-cover rounded" />
                      <p className="text-[10px] text-slate-300 text-center mt-1 truncate">{preset.name}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Image Preview Bar */}
              {image && (
                <div className="flex items-center gap-3 pt-2">
                  <div className="w-16 h-12 rounded-lg overflow-hidden border border-slate-700 bg-slate-950 flex-shrink-0">
                    <img src={image} alt="Preview" className="w-full h-full object-cover" />
                  </div>
                  <div className="text-xs text-slate-300 truncate">
                    <span className="text-emerald-400 font-semibold">✓ Image Loaded</span>
                    <p className="text-[11px] text-slate-400 truncate max-w-sm">{image.substring(0, 50)}...</p>
                  </div>
                </div>
              )}
            </div>

            {/* Description & Overview */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                  Short Description (Card Summary)
                </label>
                <textarea
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Short 1-2 sentence overview shown on the card..."
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 focus:border-blue-500 text-white text-xs outline-none resize-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                  Detailed Project Overview (Modal View)
                </label>
                <textarea
                  rows={3}
                  value={overview}
                  onChange={(e) => setOverview(e.target.value)}
                  placeholder="Full background, what was built, goals achieved..."
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 focus:border-blue-500 text-white text-xs outline-none resize-none"
                />
              </div>
            </div>

            {/* Live Website Demo URL */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5 flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-emerald-400" />
                <span>Live Website Link (Client URL or Demo)</span>
              </label>
              <input
                type="url"
                value={liveUrl}
                onChange={(e) => setLiveUrl(e.target.value)}
                placeholder="https://myclientwebsite.com (or https://yourdemo.com)"
                className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 focus:border-emerald-500 text-white text-sm outline-none placeholder:text-slate-500"
              />
            </div>

            {/* Technologies Used */}
            <div className="space-y-2">
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
                Technologies Used
              </label>
              <div className="flex flex-wrap gap-1.5 mb-2">
                {PRESET_TECH.map((tech) => {
                  const isSelected = technologies.includes(tech);
                  return (
                    <button
                      key={tech}
                      type="button"
                      onClick={() => toggleTechnology(tech)}
                      className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                        isSelected
                          ? 'bg-blue-600 text-white border border-blue-400 shadow-sm'
                          : 'bg-slate-900 text-slate-400 border border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      {isSelected ? '✓ ' : '+ '}
                      {tech}
                    </button>
                  );
                })}
              </div>

              {/* Custom Tech Input */}
              <div className="flex gap-2">
                <input
                  type="text"
                  value={customTechInput}
                  onChange={(e) => setCustomTechInput(e.target.value)}
                  onKeyDown={handleAddCustomTech}
                  placeholder="Add custom skill (e.g. Figma, Vite, Redux) & press Enter"
                  className="flex-1 px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white outline-none"
                />
                <button
                  type="button"
                  onClick={handleAddCustomTech}
                  className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs text-slate-200"
                >
                  Add Tag
                </button>
              </div>
            </div>

            {/* Key Features Bullet List */}
            <div className="space-y-2">
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
                Key Features Included
              </label>
              <div className="space-y-1.5">
                {features.map((feat, idx) => (
                  <div key={idx} className="flex items-center justify-between p-2 rounded-lg bg-slate-900/60 border border-slate-800 text-xs">
                    <span className="text-slate-300 flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      {feat}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleRemoveFeature(idx)}
                      className="text-slate-500 hover:text-red-400 p-1"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>

              {/* Add feature input */}
              <div className="flex gap-2 pt-1">
                <input
                  type="text"
                  value={newFeatureInput}
                  onChange={(e) => setNewFeatureInput(e.target.value)}
                  onKeyDown={handleAddFeature}
                  placeholder="Add a key feature (e.g. WhatsApp Booking, Stripe Checkout) & hit Enter"
                  className="flex-1 px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white outline-none"
                />
                <button
                  type="button"
                  onClick={handleAddFeature}
                  className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs text-slate-200"
                >
                  Add Feature
                </button>
              </div>
            </div>

            {/* Delivery & Client Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                  Client / Industry Name (Optional)
                </label>
                <input
                  type="text"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  placeholder="e.g. UK Fashion Retailer, Local Restaurant"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                  Completion Timeline (Optional)
                </label>
                <input
                  type="text"
                  value={completionTime}
                  onChange={(e) => setCompletionTime(e.target.value)}
                  placeholder="e.g. 4 Days, 1 Week"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs outline-none"
                />
              </div>
            </div>

            {/* Submit / Cancel Bar */}
            <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-bold shadow-lg shadow-blue-600/30 flex items-center gap-2"
              >
                <Check className="w-4 h-4" />
                <span>{initialProject ? 'Save Changes' : 'Add Project to Portfolio'}</span>
              </button>
            </div>

          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

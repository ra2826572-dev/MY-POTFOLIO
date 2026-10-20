import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Globe, Check, ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Language } from '../i18n';

interface LanguageSwitcherProps {
  variant?: 'navbar' | 'mobile' | 'compact';
  className?: string;
  onLanguageSelected?: () => void;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  variant = 'navbar',
  className = '',
  onLanguageSelected,
}) => {
  const { language, languageInfo, isRTL, setLanguage, languages, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Close dropdown on Escape key
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const handleSelect = (code: Language) => {
    setLanguage(code);
    setIsOpen(false);
    if (onLanguageSelected) {
      onLanguageSelected();
    }
  };

  // Mobile layout: sleek grid or list in the mobile menu drawer
  if (variant === 'mobile') {
    return (
      <div className={`w-full py-2 ${className}`}>
        <div className="flex items-center justify-between px-1 mb-2">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
            <Globe className="w-3.5 h-3.5 text-blue-400" />
            <span>{t.language.selectLanguage}</span>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20">
            {languageInfo.flag} {languageInfo.nativeName}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2">
          {languages.map((lang) => {
            const isSelected = language === lang.code;
            return (
              <button
                key={lang.code}
                type="button"
                onClick={() => handleSelect(lang.code)}
                className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-medium transition-all ${
                  isSelected
                    ? 'bg-blue-600/25 border border-blue-500/50 text-white shadow-sm shadow-blue-500/20'
                    : 'bg-slate-900/80 hover:bg-slate-800 border border-slate-800/80 text-slate-300 hover:text-white'
                }`}
              >
                <div className="flex items-center gap-2 truncate">
                  <span className="text-base shrink-0">{lang.flag}</span>
                  <div className="flex flex-col text-left truncate">
                    <span className="font-semibold text-xs leading-tight truncate">
                      {lang.nativeName}
                    </span>
                    <span className="text-[10px] text-slate-400 leading-tight">
                      {lang.name}
                    </span>
                  </div>
                </div>

                {isSelected && (
                  <Check className="w-3.5 h-3.5 text-blue-400 shrink-0 ml-1.5" />
                )}
                {lang.dir === 'rtl' && !isSelected && (
                  <span className="text-[9px] font-mono text-purple-400/90 bg-purple-950/60 px-1 py-0.5 rounded shrink-0">
                    RTL
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  // Desktop Navbar Dropdown
  return (
    <div ref={containerRef} className={`relative inline-block text-left ${className}`}>
      {/* Trigger Button with Globe icon, current language name and flag */}
      <button
        type="button"
        id="language-switcher-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-label={`${t.language.switcherLabel}: ${languageInfo.nativeName}`}
        className="group flex items-center gap-2 px-3 py-2 rounded-full bg-slate-900/80 hover:bg-slate-800/90 border border-slate-800 hover:border-slate-700 text-slate-200 hover:text-white text-xs font-medium transition-all duration-200 shadow-sm backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-blue-500/50"
      >
        <div className="w-5 h-5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
          <Globe className="w-3.5 h-3.5" />
        </div>

        <span className="text-sm shrink-0">{languageInfo.flag}</span>

        <span className="hidden sm:inline font-semibold text-xs tracking-wide">
          {languageInfo.nativeName}
        </span>

        {isRTL && (
          <span className="hidden lg:inline text-[9px] font-mono font-bold px-1.5 py-0.2 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">
            RTL
          </span>
        )}

        <ChevronDown 
          className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${
            isOpen ? 'rotate-180 text-blue-400' : ''
          }`} 
        />
      </button>

      {/* Floating Animated Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={dropdownRef}
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.96 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className={`absolute z-50 mt-2 w-64 rounded-2xl bg-[#090D16]/95 border border-slate-700/80 shadow-2xl shadow-black/80 backdrop-blur-xl p-2.5 overflow-hidden ${
              isRTL ? 'left-0' : 'right-0'
            }`}
          >
            {/* Header / Title */}
            <div className="px-3 py-2 mb-1 border-b border-slate-800/80 flex items-center justify-between">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-blue-400" />
                <span>{t.language.selectLanguage}</span>
              </span>
              <span className="text-[10px] text-slate-400 font-mono">
                10 Languages
              </span>
            </div>

            {/* List of 10 languages */}
            <div className="max-h-72 overflow-y-auto space-y-1 pr-1 custom-scrollbar">
              {languages.map((lang) => {
                const isSelected = language === lang.code;
                return (
                  <button
                    key={lang.code}
                    type="button"
                    onClick={() => handleSelect(lang.code)}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs transition-colors duration-150 text-left ${
                      isSelected
                        ? 'bg-blue-600/20 text-white font-semibold border border-blue-500/30'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/70 border border-transparent'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 truncate">
                      <span className="text-base shrink-0 leading-none">{lang.flag}</span>
                      <div className="flex flex-col truncate">
                        <span className="font-semibold text-xs text-white leading-tight">
                          {lang.nativeName}
                        </span>
                        <span className="text-[10px] text-slate-400 leading-tight">
                          {lang.name}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      {lang.dir === 'rtl' && (
                        <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-purple-950/70 text-purple-300 border border-purple-500/30">
                          RTL
                        </span>
                      )}
                      {isSelected ? (
                        <div className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                      ) : (
                        <div className="w-5 h-5" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

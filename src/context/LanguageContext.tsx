import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { 
  Language, 
  LanguageInfo, 
  Translations, 
  LANGUAGES, 
  TRANSLATIONS, 
  DEFAULT_LANGUAGE,
  getLanguageInfo 
} from '../i18n';

interface LanguageContextType {
  language: Language;
  languageInfo: LanguageInfo;
  isRTL: boolean;
  setLanguage: (lang: Language) => void;
  t: Translations;
  languages: LanguageInfo[];
}

const STORAGE_KEY = 'portfolio_selected_language';

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Language | null;
      if (saved && LANGUAGES.some(l => l.code === saved)) {
        return saved;
      }
      // Check browser navigator language
      const browserLang = navigator.language.split('-')[0].toLowerCase() as Language;
      if (LANGUAGES.some(l => l.code === browserLang)) {
        return browserLang;
      }
    } catch (e) {
      console.warn('Could not read saved language preference:', e);
    }
    return DEFAULT_LANGUAGE;
  });

  const languageInfo = useMemo(() => getLanguageInfo(language), [language]);
  const isRTL = languageInfo.dir === 'rtl';
  const t = useMemo(() => TRANSLATIONS[language] || TRANSLATIONS.en, [language]);

  const setLanguage = (newLang: Language) => {
    if (LANGUAGES.some(l => l.code === newLang)) {
      setLanguageState(newLang);
      try {
        localStorage.setItem(STORAGE_KEY, newLang);
      } catch (e) {
        console.warn('Could not persist language preference:', e);
      }
    }
  };

  // Sync HTML tag direction and lang attribute whenever language changes
  useEffect(() => {
    const htmlEl = document.documentElement;
    const bodyEl = document.body;
    
    htmlEl.lang = language;
    htmlEl.dir = languageInfo.dir;
    
    if (isRTL) {
      htmlEl.classList.add('rtl-layout');
      bodyEl.classList.add('rtl-layout');
    } else {
      htmlEl.classList.remove('rtl-layout');
      bodyEl.classList.remove('rtl-layout');
    }
  }, [language, languageInfo.dir, isRTL]);

  const value = useMemo(
    () => ({
      language,
      languageInfo,
      isRTL,
      setLanguage,
      t,
      languages: LANGUAGES,
    }),
    [language, languageInfo, isRTL, t]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

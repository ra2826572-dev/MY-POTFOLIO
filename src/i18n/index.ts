import { Language, LanguageInfo, Translations } from './types';
import { en } from './translations/en';
import { ur } from './translations/ur';
import { ar } from './translations/ar';
import { zh } from './translations/zh';
import { es } from './translations/es';
import { fr } from './translations/fr';
import { de } from './translations/de';
import { hi } from './translations/hi';
import { ja } from './translations/ja';
import { tr } from './translations/tr';

export * from './types';

export const LANGUAGES: LanguageInfo[] = [
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇬🇧', dir: 'ltr' },
  { code: 'ur', name: 'Urdu', nativeName: 'اردو', flag: '🇵🇰', dir: 'rtl' },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية', flag: '🇸🇦', dir: 'rtl' },
  { code: 'zh', name: 'Chinese', nativeName: '简体中文', flag: '🇨🇳', dir: 'ltr' },
  { code: 'es', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸', dir: 'ltr' },
  { code: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷', dir: 'ltr' },
  { code: 'de', name: 'German', nativeName: 'Deutsch', flag: '🇩🇪', dir: 'ltr' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', flag: '🇮🇳', dir: 'ltr' },
  { code: 'ja', name: 'Japanese', nativeName: '日本語', flag: '🇯🇵', dir: 'ltr' },
  { code: 'tr', name: 'Turkish', nativeName: 'Türkçe', flag: '🇹🇷', dir: 'ltr' },
];

export const TRANSLATIONS: Record<Language, Translations> = {
  en,
  ur,
  ar,
  zh,
  es,
  fr,
  de,
  hi,
  ja,
  tr,
};

export const DEFAULT_LANGUAGE: Language = 'en';

export const getLanguageInfo = (code: Language): LanguageInfo => {
  return LANGUAGES.find((l) => l.code === code) || LANGUAGES[0];
};

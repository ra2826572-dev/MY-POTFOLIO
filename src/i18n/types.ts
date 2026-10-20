export type Language = 
  | 'en' 
  | 'ur' 
  | 'ar' 
  | 'zh' 
  | 'es' 
  | 'fr' 
  | 'de' 
  | 'hi' 
  | 'ja' 
  | 'tr';

export interface LanguageInfo {
  code: Language;
  name: string;          // English name
  nativeName: string;    // Native script name
  flag: string;          // Emoji flag
  dir: 'ltr' | 'rtl';    // Layout direction
}

export interface Translations {
  common: {
    letsTalk: string;
    whatsappMe: string;
    viewWork: string;
    contactMe: string;
    getQuote: string;
    downloadCV: string;
    liveDemo: string;
    visitSite: string;
    viewProject: string;
    close: string;
    all: string;
    loading: string;
  };
  nav: {
    home: string;
    about: string;
    skills: string;
    services: string;
    projects: string;
    process: string;
    contact: string;
    cv: string;
    roleTag: string;
  };
  hero: {
    statusAvailable: string;
    greeting: string;
    name: string;
    role: string;
    bio: string;
    viewWork: string;
    projectsDone: string;
    websitesLive: string;
    responsive: string;
  };
  about: {
    badge: string;
    title: string;
    titleHighlight: string;
    headline: string;
    bioQuote: string;
    paragraph: string;
    pillars: {
      cleanUI: string;
      cleanUIDesc: string;
      responsive: string;
      responsiveDesc: string;
      smoothUX: string;
      smoothUXDesc: string;
      speed: string;
      speedDesc: string;
    };
    stats: {
      experience: string;
      experienceSub: string;
      projects: string;
      projectsSub: string;
      satisfaction: string;
      satisfactionSub: string;
      support: string;
      supportSub: string;
    };
  };
  skills: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    categories: {
      all: string;
      aiVideo: string;
      toolsAI: string;
      frontendCode: string;
      cmsPlatforms: string;
      presentationDesign: string;
      cloudHosting: string;
      designCreative: string;
    };
    featured: string;
    discussSkill: string;
  };
  services: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    items: {
      webDesign: { title: string; desc: string; f1: string; f2: string; f3: string };
      business: { title: string; desc: string; f1: string; f2: string; f3: string };
      ecommerce: { title: string; desc: string; f1: string; f2: string; f3: string };
      landing: { title: string; desc: string; f1: string; f2: string; f3: string };
      customApp: { title: string; desc: string; f1: string; f2: string; f3: string };
      redesign: { title: string; desc: string; f1: string; f2: string; f3: string };
    };
    presentationModalBtn: string;
    hireForService: string;
  };
  projects: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    categories: {
      all: string;
      fullstack: string;
      frontend: string;
      ecommerce: string;
      uiux: string;
    };
    featuredBadge: string;
    liveWebsite: string;
    interactivePreview: string;
    visitLiveSite: string;
    liveDemo: string;
    viewDetails: string;
    noProjectsFound: string;
  };
  process: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    stepPrefix: string;
    steps: Array<{
      title: string;
      desc: string;
      deliverable: string;
    }>;
  };
  whyChooseMe: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    benefits: Array<{
      title: string;
      desc: string;
    }>;
  };
  testimonials: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    filterAll: string;
    filterPk: string;
    filterMy: string;
    addReview: string;
    verifiedClient: string;
  };
  contact: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    form: {
      nameLabel: string;
      namePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      phoneLabel: string;
      phonePlaceholder: string;
      typeLabel: string;
      messageLabel: string;
      messagePlaceholder: string;
      sendBtn: string;
      sendingBtn: string;
      successTitle: string;
      successDesc: string;
      sendAnother: string;
    };
    cards: {
      whatsappTitle: string;
      whatsappDesc: string;
      whatsappAction: string;
      emailTitle: string;
      emailDesc: string;
      copyEmail: string;
      copied: string;
      locationTitle: string;
      locationDesc: string;
    };
  };
  cta: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    talkBtn: string;
    whatsappBtn: string;
  };
  footer: {
    tagline: string;
    quickLinks: string;
    servicesTitle: string;
    contactTitle: string;
    rights: string;
    backToTop: string;
    designerCredit: string;
  };
  language: {
    switcherLabel: string;
    selectLanguage: string;
    currentLanguage: string;
    rtlBadge: string;
  };
}

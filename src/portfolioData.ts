/**
 * RIZWAN AHMAD — Portfolio Data Configuration
 * 
 * You can easily customize any information, links, images, projects,
 * testimonials, and WhatsApp contact number in this file.
 */

import rizwanProfileImg from './assets/images/rizwan_poster_emblem_1788178172045.jpg';
import { WRITING_PROJECTS, CONTENT_WRITING_SERVICE_INFO } from './contentWritingData';

export interface Project {
  id: string;
  name: string;
  category: 'Business' | 'E-Commerce' | 'Restaurant' | 'Salon' | 'Hotel' | 'Portfolio' | 'Game' | 'Web App';
  tagline: string;
  description: string;
  image: string;
  technologies: string[];
  features: string[];
  liveUrl: string;
  previewType?: 'iframe' | 'mockup';
  clientName?: string;
  completionTime?: string;
  overview: string;
}

export interface Skill {
  name: string;
  iconName: string;
  category: 'Frontend & Code' | 'CMS & Platforms' | 'Design & Creative' | 'Tools & AI' | 'Cloud & Hosting' | 'Presentation Design';
  level: number; // 0 to 100
  experience: string;
  highlight?: boolean;
  certificateUrl?: string;
  certificateTitle?: string;
}

export interface PresentationSkillItem {
  id: string;
  title: string;
  category: string;
  proficiency: number;
  description: string;
  iconName: 'PowerPoint' | 'Briefcase' | 'GraduationCap' | 'TrendingUp' | 'BarChart3' | 'Sparkles' | 'Type' | 'Palette';
  badge: string;
  deliverables: string[];
}

export interface PresentationSlide {
  id: number;
  slideNumber: string;
  title: string;
  subtitle: string;
  deckType: string;
  category: string;
  headline: string;
  points: {
    label: string;
    value?: string;
    desc: string;
    highlight?: boolean;
  }[];
  statMetric?: {
    value: string;
    label: string;
    growth?: string;
  };
  visualType: 'cover' | 'comparison' | 'market_tam' | 'process_flow' | 'kpi_dashboard' | 'executive_profile';
  contact?: {
    email?: string;
    phone?: string;
    role?: string;
  };
}

export interface PresentationDesignConfig {
  title: string;
  badge: string;
  tagline: string;
  summary: string;
  overallProficiency: number;
  tools: {
    name: string;
    proficiency: number;
    description: string;
  }[];
  skills: PresentationSkillItem[];
  slides: PresentationSlide[];
}

export interface Service {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  icon: string;
  deliverables: string[];
  popular?: boolean;
  featuredProject?: {
    name: string;
    url: string;
    tagline: string;
  };
}

export interface ProcessStep {
  number: string;
  title: string;
  shortDesc: string;
  details: string[];
  icon: string;
}

export interface WhyChooseItem {
  title: string;
  description: string;
  icon: string;
  highlightStat?: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  clientRole: string;
  clientCompany: string;
  avatar: string;
  rating: number;
  quote: string;
  projectType: string;
  isPlaceholder: boolean;
  country?: 'Pakistan' | 'Malaysia' | 'Global';
  flag?: string;
}

export interface CVData {
  fullName: string;
  jobTitle: string;
  tagline: string;
  email: string;
  phone: string;
  altPhone?: string;
  location: string;
  portfolioUrl: string;
  experienceYears: string;
  summary: string;
  avatar: string;
  experience: {
    company: string;
    role: string;
    period: string;
    type: string;
    location: string;
    highlights: string[];
  }[];
  education: {
    degree: string;
    institution: string;
    status: string;
    year: string;
  }[];
  languages: {
    name: string;
    level: string;
  }[];
  skillCategories: {
    category: string;
    items: string[];
  }[];
  featuredProjects: {
    name: string;
    category: string;
    clientLocation: string;
    description: string;
    link: string;
  }[];
}

export const PORTFOLIO_DATA = {
  personal: {
    name: 'RIZWAN AHMAD',
    shortName: 'Rizwan',
    role: 'Web Designer & Developer',
    secondaryRoles: [
      'Web Designer & Developer',
      'Professional Presentation Designer',
      'Pitch Deck & Slide Specialist',
      'Cloud Expert & DevOps',
      'UI/UX Specialist',
      'WordPress & React Expert',
      'Content Writer & Copywriter'
    ],
    bio: "I create modern, responsive and conversion-focused websites that help businesses build a strong online presence.",
    aboutDetailed: "I'm a creative web designer and developer passionate about building modern websites for businesses and personal brands. I focus on clean UI, responsive layouts, smooth user experiences and professional visual design.",
    avatar: rizwanProfileImg,
    location: 'Faisalabad, Pakistan (Available Worldwide)',
    availabilityStatus: '🟢 Available for new projects',
    experienceYears: '2+ Years Experience',
    stats: [
      { label: 'Completed Projects', value: '80+', note: 'Delivered on time', icon: 'FolderGit2' },
      { label: 'Websites Built', value: '50+', note: 'For diverse industries', icon: 'Globe' },
      { label: 'Responsive Layouts', value: '100%', note: 'Flawless on all devices', icon: 'Smartphone' },
      { label: 'Design Excellence', value: 'Fast & Modern', note: 'Speed & Conversion focused', icon: 'Zap' },
    ],
  },

  contact: {
    email: 'ra2826572@gmail.com',
    phone: '03081509520',
    whatsappNumber: '923081509520',
    whatsappMessage: "Hi Rizwan, I visited your portfolio and would like to discuss a web design/development project with you!",
    location: 'Faisalabad, Pakistan',
    socials: {
      whatsapp: 'https://wa.me/923081509520?text=Hi%20Rizwan%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project!',
      email: 'mailto:ra2826572@gmail.com',
      linkedin: 'https://linkedin.com/in/rizwan-ahmad',
      instagram: 'https://instagram.com/rizwan.dev',
      github: 'https://github.com/rizwanahmad',
    }
  },

  skills: [
    { name: 'Cloud Expert', iconName: 'Cloud', category: 'Cloud & Hosting', level: 96, experience: 'GCP, Firebase, AWS, Vercel & CI/CD', highlight: true },
    { name: 'HTML5', iconName: 'FileCode', category: 'Frontend & Code', level: 95, experience: 'Advanced Structure', highlight: true },
    { name: 'CSS3', iconName: 'Palette', category: 'Frontend & Code', level: 95, experience: 'Modern Layouts & Animations', highlight: true },
    { name: 'JavaScript', iconName: 'Code2', category: 'Frontend & Code', level: 90, experience: 'ES6+ & Dynamic Logic', highlight: true },
    { name: 'React', iconName: 'Atom', category: 'Frontend & Code', level: 88, experience: 'Modern SPA & Components', highlight: true },
    { name: 'WordPress', iconName: 'Globe2', category: 'CMS & Platforms', level: 92, experience: 'Custom Themes & Speed', highlight: true },
    { name: 'Elementor', iconName: 'LayoutGrid', category: 'CMS & Platforms', level: 95, experience: 'Pixel-Perfect Builder', highlight: true },
    { name: 'UI/UX Design', iconName: 'Figma', category: 'Design & Creative', level: 92, experience: 'Wireframes & Visual Flow', highlight: true },
    { name: 'Responsive Web Design', iconName: 'Smartphone', category: 'Frontend & Code', level: 98, experience: 'Mobile-First Perfection', highlight: true },
    { name: 'AI-Assisted Development', iconName: 'Bot', category: 'Tools & AI', level: 92, experience: 'AI Coding Tools, Prompt Engineering & Modern Workflows', highlight: true },
    { name: 'Graphic Design', iconName: 'PenTool', category: 'Design & Creative', level: 85, experience: 'Branding & Social Assets', highlight: false },
    { name: 'Content Writing & Copywriting', iconName: 'PenTool', category: 'Design & Creative', level: 93, experience: 'SEO Articles, Website Copy, Blogs & Social Media', highlight: true },
    { name: 'AI Tools', iconName: 'Sparkles', category: 'Tools & AI', level: 90, experience: 'Workflow & Content Boost', highlight: true },
    { name: 'VS Code & Shortcuts', iconName: 'VSCode', category: 'Tools & AI', level: 98, experience: 'Keyboard Shortcuts, Multi-Cursor & Velocity Workflows', highlight: true },
    { name: 'Tailwind CSS', iconName: 'Layers', category: 'Frontend & Code', level: 94, experience: 'Rapid Utility Styling', highlight: false },
    { name: 'Speed Optimization', iconName: 'Zap', category: 'CMS & Platforms', level: 90, experience: 'Core Web Vitals & SEO', highlight: false },
    { name: 'Presentation Design', iconName: 'PowerPoint', category: 'Presentation Design', level: 96, experience: 'Executive Slides, Pitch Decks & Master Templates', highlight: true },
    { name: 'PowerPoint Expert', iconName: 'PowerPoint', category: 'Presentation Design', level: 96, experience: 'Custom Master Layouts, Vector Graphics & Transitions', highlight: true },
    { name: 'Pitch Deck Design', iconName: 'TrendingUp', category: 'Presentation Design', level: 95, experience: 'Investor-Ready Fundraising Decks & Market TAM', highlight: true },
    { name: 'Business Presentations', iconName: 'Briefcase', category: 'Presentation Design', level: 94, experience: 'Corporate Proposals, Strategy Decks & C-Level Reports', highlight: true },
    { name: 'Infographics & Data Vis', iconName: 'BarChart3', category: 'Presentation Design', level: 93, experience: 'Complex Metrics, Timelines & Visual Charts', highlight: true },
    { name: 'Educational Presentations', iconName: 'GraduationCap', category: 'Presentation Design', level: 91, experience: 'Courseware, Training Slides & Academic Workshops', highlight: false },
    { name: 'Creative Slide Design', iconName: 'Sparkles', category: 'Presentation Design', level: 95, experience: 'High-Impact Typography & Dark-Luxe Visual Compositions', highlight: false },
    { name: 'Canva Presentations', iconName: 'Palette', category: 'Presentation Design', level: 92, experience: 'Rapid Collaborative Decks & Live Interactive Links', highlight: false },
  ] as Skill[],

  presentationDesign: {
    title: 'Presentation Design',
    badge: 'Executive Slide Craft & Pitch Decks',
    tagline: 'Transforming complex business strategies, investor pitches, and educational concepts into compelling, high-converting visual slide experiences.',
    summary: 'Specialized in crafting modern, bespoke PowerPoint and Canva presentations that captivate audiences, command boardroom respect, and close investor rounds. Every slide is architected with obsessive attention to typographic scale, narrative pacing, data visualization, and brand cohesion.',
    overallProficiency: 95,
    tools: [
      { name: 'Microsoft PowerPoint', proficiency: 96, description: 'Master templates, vector icons, customized color themes & smooth slide builds' },
      { name: 'Canva Pro', proficiency: 92, description: 'Modern collaborative presentations, fast turnarounds & interactive presentations' },
      { name: 'Adobe Illustrator', proficiency: 88, description: 'Bespoke infographics, custom vector assets & branded diagram styling' },
      { name: 'Google Slides', proficiency: 90, description: 'Cross-functional enterprise collaboration & cloud deck synchronization' },
    ],
    skills: [
      {
        id: 'powerpoint',
        title: 'Professional PowerPoint Presentations',
        category: 'Corporate & Executive',
        proficiency: 96,
        description: 'Bespoke slide master creation, custom vector icon libraries, subtle motion builds, and executive boardroom aesthetics.',
        iconName: 'PowerPoint',
        badge: 'Master Level',
        deliverables: ['Custom Master Slide Themes', 'Executive Presentation Decks', 'Interactive Hyperlinked Navigation', 'Print & High-Res PDF Export']
      },
      {
        id: 'pitch-decks',
        title: 'Pitch Deck Design',
        category: 'Startups & Fundraising',
        proficiency: 95,
        description: 'High-converting investor pitch decks that distill complex business models, market TAM, and unit economics into crisp slides.',
        iconName: 'TrendingUp',
        badge: 'Investor Ready',
        deliverables: ['Problem-Solution Framing', 'Market Sizing & TAM Charts', 'Financial Modeling Slides', 'Traction & Team Showcases']
      },
      {
        id: 'business',
        title: 'Business Presentations',
        category: 'Corporate Strategy',
        proficiency: 94,
        description: 'Quarterly reviews, sales proposals, stakeholder updates, and company capability profiles that command boardroom attention.',
        iconName: 'Briefcase',
        badge: 'Enterprise',
        deliverables: ['Sales Pitch Proposals', 'Quarterly Business Reviews (QBR)', 'Company Overview Profiles', 'Stakeholder & Board Reports']
      },
      {
        id: 'infographics',
        title: 'Infographics & Data Visualization',
        category: 'Data & Analytics',
        proficiency: 93,
        description: 'Transforming dry spreadsheets, metrics, and workflows into intuitive, beautiful charts, timelines, and graphical diagrams.',
        iconName: 'BarChart3',
        badge: 'Visual Analytics',
        deliverables: ['Custom Growth Charts', 'Process & Flow Architecture', 'Timeline & Milestone Graphics', 'Comparison & Matrix Tables']
      },
      {
        id: 'educational',
        title: 'Educational Presentations',
        category: 'Academia & Training',
        proficiency: 91,
        description: 'Structured courseware, training modules, student webinars, and interactive workshop slides with high retention design.',
        iconName: 'GraduationCap',
        badge: 'Instructional',
        deliverables: ['Workshop & Training Decks', 'Course Curriculum Modules', 'Step-by-Step Guides', 'Student Handouts & Notes']
      },
      {
        id: 'creative',
        title: 'Creative Slide Design',
        category: 'Modern Aesthetics',
        proficiency: 95,
        description: 'Dynamic layouts, dark-mode luxury decks, custom geometric framing, and modern editorial composition that stands out.',
        iconName: 'Sparkles',
        badge: 'Creative Flow',
        deliverables: ['Dark-Luxe Visual Styles', 'Editorial Magazine Layouts', 'Custom Geometric Masking', 'Visual Storytelling Sequences']
      },
      {
        id: 'typography',
        title: 'Presentation Layout & Typography',
        category: 'Visual Hierarchy',
        proficiency: 96,
        description: 'Mastery of grid alignment, typographic scale, white space discipline, and scannable visual anchors for effortless reading.',
        iconName: 'Type',
        badge: 'Typography',
        deliverables: ['Golden Ratio Visual Grids', 'High-Contrast Typographic Pairings', 'Zero Clutter Cognitive Layout', 'Accessible Color Contrasts']
      },
      {
        id: 'canva',
        title: 'Canva Presentation Design',
        category: 'Rapid & Collaborative',
        proficiency: 92,
        description: 'Modern, shareable Canva decks with interactive elements, animations, and ready-to-present online links for agile teams.',
        iconName: 'Palette',
        badge: 'Collaborative',
        deliverables: ['Editable Canva Templates', 'Live Interactive Web Links', 'Social Carousel Decks', 'Animated Brand Presentations']
      }
    ],
    slides: [
      {
        id: 0,
        slideNumber: '01 / 06',
        title: 'Rizwan Ahmad — Web Developer | Front-End & AI',
        subtitle: 'Executive Technical Capability & Portfolio Presentation',
        deckType: 'Executive Capability Deck',
        category: 'Web Developer & AI Workflow',
        headline: 'Web Developer focused on building modern, responsive, and user-friendly web experiences. Skilled in HTML, CSS, JavaScript, and React, with an interest in applying AI tools and workflows to digital products.',
        visualType: 'executive_profile',
        points: [
          { label: 'Technical Core Skills', value: 'HTML, CSS, JS, React', desc: 'Semantic page structure, responsive layouts & styling, interactive experiences, and component-based UI development.', highlight: true },
          { label: 'AI Mastery', value: 'AI Tools & Workflow Exploration', desc: 'Certified AI workflows, prompt engineering, and intelligent agents applied to digital web solutions.', highlight: true },
          { label: 'Professional Experience', value: 'Frontend Engineering', desc: 'Developing responsive desktop/mobile interfaces, reusable UI components, and exploring AI-assisted workflows.', highlight: false },
          { label: 'Core Strengths', value: 'Responsive & Agile', desc: 'UI Development, Problem Solving, Continuous Learning, and AI-assisted Workflows.', highlight: false }
        ],
        statMetric: {
          value: '100%',
          label: 'Client-Focused Delivery',
          growth: 'Clean Code & Fast Loads'
        },
        contact: {
          email: 'ra2826572@gmail.com',
          phone: '03081509520',
          role: 'WEB DEVELOPER | FRONT-END & AI'
        }
      },
      {
        id: 1,
        slideNumber: '02 / 06',
        title: 'AI-Driven FinTech Global Ecosystem',
        subtitle: 'Series Seed Investor Pitch Deck',
        deckType: 'Investor Pitch Deck',
        category: 'Startup & Capital Raise',
        headline: 'Empowering seamless cross-border liquidity with zero-latency automated settlements.',
        visualType: 'cover',
        points: [
          { label: 'Target Funding', value: '$2.5M Seed Round', desc: 'Accelerating AI infrastructure and Southeast Asia expansion.', highlight: true },
          { label: 'Traction', value: '140K+ Active Users', desc: '+38% MoM retention rate across multi-currency business accounts.', highlight: false },
          { label: 'Regulatory', value: 'Full Compliance', desc: 'State-certified AML/KYC institutional banking APIs.', highlight: false }
        ],
        statMetric: {
          value: '$4.8B',
          label: 'Total Addressable Market',
          growth: '+42% YoY'
        }
      },
      {
        id: 2,
        slideNumber: '03 / 06',
        title: 'Market Inefficiency & The Core Bottleneck',
        subtitle: 'Problem vs Solution Analysis',
        deckType: 'Problem & Opportunity',
        category: 'Market Dynamics',
        headline: 'Traditional B2B payment corridors lose $82B annually to manual reconciliation delays.',
        visualType: 'comparison',
        points: [
          { label: 'Legacy Banking Lag', value: '3 - 5 Days', desc: 'High intermediary FX spreads and opaque settlement fees.', highlight: false },
          { label: 'Our AI Automated Engine', value: '< 2.4 Seconds', desc: 'Direct algorithmic liquidity routing with 0.15% flat transparent rate.', highlight: true },
          { label: 'Efficiency Gain', value: '94% Cost Reduction', desc: 'Saving enterprise clients an average of $38,000 monthly.', highlight: true }
        ],
        statMetric: {
          value: '94%',
          label: 'Processing Cost Saved',
          growth: 'Immediate ROI'
        }
      },
      {
        id: 3,
        slideNumber: '04 / 06',
        title: 'High-Impact Data Visualization & TAM Sizing',
        subtitle: 'Market Size & Revenue Trajectory',
        deckType: 'Market TAM & Infographic',
        category: 'Data Visualization',
        headline: 'Capturing a defensible $480M SOM slice within 36 months through automated digital distribution.',
        visualType: 'market_tam',
        points: [
          { label: 'TAM (Total Available)', value: '$48.2 Billion', desc: 'Global cross-border digital merchant transaction volume.', highlight: false },
          { label: 'SAM (Serviceable Market)', value: '$6.4 Billion', desc: 'Emerging tech hubs across APAC, Middle East and EU corridors.', highlight: false },
          { label: 'SOM (Our 3-Year Target)', value: '$480 Million', desc: 'Initial focused footprint via direct API merchant partnerships.', highlight: true }
        ],
        statMetric: {
          value: '$480M',
          label: 'Serviceable Obtainable Market',
          growth: '3-Year Horizon'
        }
      },
      {
        id: 4,
        slideNumber: '05 / 06',
        title: 'Scalable Technical Architecture & Security',
        subtitle: 'Enterprise-Grade Microservices',
        deckType: 'System Architecture',
        category: 'Technical Flow',
        headline: 'Resilient multi-cloud microservices engineered for 99.99% uptime and sub-second execution.',
        visualType: 'process_flow',
        points: [
          { label: 'Smart Routing Layer', value: 'Sub-20ms Engine', desc: 'Intelligent latency-optimized routing between global tier-1 payment rails.', highlight: true },
          { label: 'Bank-Grade Vaults', value: 'AES-256 + HSM', desc: 'Zero-knowledge biometric authentication with decentralized audits.', highlight: false },
          { label: 'Automated CI/CD', value: 'Kubernetes Cloud', desc: 'Zero-downtime rolling deployments across GCP, AWS and Cloudflare Edge.', highlight: false }
        ],
        statMetric: {
          value: '99.99%',
          label: 'Platform Reliability',
          growth: 'SOC2 Compliant'
        }
      },
      {
        id: 5,
        slideNumber: '06 / 06',
        title: '5-Year Revenue Roadmap & Strategic Milestones',
        subtitle: 'Financial Forecast & Unit Economics',
        deckType: 'Financial Forecast',
        category: 'Strategic Vision',
        headline: 'Projected cashflow positive by Month 18 with an expected 7.2x enterprise valuation multiplier.',
        visualType: 'kpi_dashboard',
        points: [
          { label: 'Year 1 Revenue Target', value: '$1.8M ARR', desc: 'Establishment of 24 strategic enterprise merchant pilot accounts.', highlight: false },
          { label: 'Year 3 Scaled Target', value: '$8.4M ARR', desc: 'Regional licensing, automated self-serve platform launch.', highlight: true },
          { label: 'Year 5 Market Leader', value: '$24.6M ARR', desc: 'Dominant liquidity provider with institutional tier-1 integration.', highlight: true }
        ],
        statMetric: {
          value: '$24.6M',
          label: 'Year 5 ARR Projection',
          growth: '+210% CAGR'
        }
      }
    ]
  } as PresentationDesignConfig,

  services: [
    {
      id: 'website-design',
      title: 'Website Design',
      description: 'Modern and responsive websites for businesses and personal brands.',
      icon: 'Monitor',
      deliverables: [
        'Custom visual aesthetic crafted for your niche',
        'Intuitive navigation and high-impact layout',
        'Fluid adaptation across mobile, tablet & desktop',
        'Clean typography and tailored color palette'
      ],
      popular: true,
      featuredProject: {
        name: 'Adnan Sweets & Bakers',
        url: 'https://adnan-sweets-bakers.vercel.app/',
        tagline: 'Artisan Bakery, Custom Cakes & Traditional Sweets'
      }
    },
    {
      id: 'business-websites',
      title: 'Business Websites',
      description: 'Professional websites designed to establish credibility and attract customers.',
      icon: 'Briefcase',
      deliverables: [
        'Trust-building company profile and service pages',
        'Lead generation forms & instant WhatsApp chat',
        'Client testimonials & portfolio integration',
        'Fast loading speed and SEO foundation'
      ],
      featuredProject: {
        name: 'The Dentist@KL',
        url: 'https://the-dentist-kl-five.vercel.app/',
        tagline: 'Premium Dental Clinic & Healthcare Booking Platform in Kuala Lumpur'
      }
    },
    {
      id: 'ecommerce-websites',
      title: 'E-Commerce Websites',
      description: 'Modern online stores with product sections, categories and conversion-focused layouts.',
      icon: 'ShoppingBag',
      deliverables: [
        'High-converting product showcase & catalogs',
        'Seamless checkout flow and cart system',
        'Payment gateway & inventory management ready',
        'Mobile shopping optimized experience'
      ],
      popular: true,
      featuredProject: {
        name: 'SHOE CASA',
        url: 'https://show-casc.vercel.app/',
        tagline: 'Luxury Handcrafted Footwear & WhatsApp E-Commerce'
      }
    },
    {
      id: 'landing-pages',
      title: 'Interactive Web Apps & Games',
      description: 'High-performance landing pages, WebGL 3D graphics, and interactive browser applications.',
      icon: 'Rocket',
      deliverables: [
        'Real-time 3D WebGL scenes & Three.js rendering',
        'Laser-focused copy layout & engaging animations',
        'Immersive audio and responsive canvas controls',
        'Ultra-fast load time and cross-platform compatibility'
      ],
      popular: true,
      featuredProject: {
        name: 'NEON STRIKE',
        url: 'https://neon-strike-sable.vercel.app/',
        tagline: '3D Cyberpunk Survival FPS Web Game'
      }
    },
    {
      id: 'ui-ux-design',
      title: 'UI/UX Design',
      description: 'Clean and user-friendly interfaces with a strong visual hierarchy and bespoke aesthetics.',
      icon: 'Layout',
      deliverables: [
        'Wireframing & interactive Figma prototypes',
        'User journey optimization & research',
        'Design systems, UI kits & typography scales',
        'Accessibility & usability compliance'
      ],
      popular: true,
      featuredProject: {
        name: 'Furniture Store By Sheheryar',
        url: 'https://furniture-store-gules-six.vercel.app/',
        tagline: 'Luxury Designer Showroom & Furniture Web Platform'
      }
    },
    {
      id: 'presentation-design',
      title: 'Presentation & Pitch Deck Design',
      description: 'Bespoke PowerPoint and Canva presentations designed for investor pitching, C-level corporate strategy, and educational masterclasses.',
      icon: 'Presentation',
      deliverables: [
        'Custom master slide decks in 16:9 widescreen format',
        'Pitch decks for venture capital & investor seed rounds',
        'Complex infographics, financial models & data visualization',
        'High-resolution PowerPoint (.pptx), Canva and PDF outputs'
      ],
      popular: true,
      featuredProject: {
        name: 'Rizwan Ahmad — Web Developer & AI Presentation',
        url: '#presentation-design',
        tagline: 'Live 16:9 Executive Capability Presentation'
      }
    },
    {
      id: 'content-writing',
      title: 'Content Writing & Copywriting',
      subtitle: 'Words That Inform, Engage & Convert',
      description: 'Clear, engaging, and audience-focused copy for modern websites, SEO blog articles, and social media campaigns engineered to drive real user action.',
      icon: 'PenTool',
      deliverables: [
        'Website copy & high-converting landing page headlines',
        'SEO blog posts & long-form editorial articles',
        'Brand messaging, value propositions & elevator pitches',
        'Social media captions, campaign copy & content strategy'
      ],
      popular: true
    }
  ] as Service[],

  projects: [
    {
      id: 'proj-the-dentist-kl',
      name: 'The Dentist@KL — Premium Dental Clinic & Healthcare Booking',
      category: 'Business',
      tagline: 'Premium Dental Clinic in Menara Hap Seng, Kuala Lumpur',
      description: 'A modern, high-end healthcare and dental clinic web application engineered for The Dentist@KL (Menara Hap Seng, Kuala Lumpur). Features personalized dental care showcases, cosmetic & orthodontic treatment menus, doctor profiles, verified patient reviews, and interactive appointment booking.',
      image: 'https://the-dentist-kl-five.vercel.app/assets/clinic_reception_interior_1790590787201-DSCalkD8.jpg',
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'Schema.org JSON-LD', 'Vercel Deployment'],
      features: [
        'Personalized dental care & cosmetic dentistry showcases',
        'Interactive consultation & appointment booking system',
        'Comprehensive treatments: Teeth Whitening, Orthodontics & Dental Implants',
        'Menara Hap Seng, Kuala Lumpur clinic location & patient care info',
        '100% mobile-friendly responsive healthcare experience'
      ],
      liveUrl: 'https://the-dentist-kl-five.vercel.app/',
      clientName: 'The Dentist@KL (Menara Hap Seng, Kuala Lumpur)',
      completionTime: '1 Week',
      overview: 'Designed and engineered an elite dental clinic web platform for The Dentist@KL in Kuala Lumpur. Created with clean medical aesthetics, calming visual hierarchy, comprehensive treatment information, patient testimonials, and frictionless online appointment booking.'
    },
    {
      id: 'proj-der-salon',
      name: 'DER SALON — European Luxury Hair & Editorial Styling',
      category: 'Salon',
      tagline: 'Hair, Styled Your Way — Frankfurt-Süd, Germany',
      description: 'An editorial, high-end European hair salon web application crafted for DER SALON (Oppenheimer Landstraße 63, Frankfurt-Süd, Germany). Features bespoke haircuts, precision balayage & coloration menus, wash lounge experiences, Cormorant Garamond typography, and frictionless online appointment booking.',
      image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1600',
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'Schema.org JSON-LD', 'Vercel Deployment'],
      features: [
        'Bespoke haircuts, editorial styling & wash lounge care',
        'Balayage, glossing, blonding & master hair coloration',
        'Oppenheimer Landstraße 63, Frankfurt-Süd location & salon hours',
        'Seamless online appointment booking & consultation flow',
        'European minimalist editorial design with Cormorant Garamond typography'
      ],
      liveUrl: 'https://der-salon-chi.vercel.app/',
      clientName: 'DER SALON (Frankfurt-Süd, Germany)',
      completionTime: '1 Week',
      overview: 'Designed and engineered an elite hair salon web platform for DER SALON in Frankfurt am Main, Germany. Built with sophisticated European editorial aesthetics, fluid mobile responsiveness, comprehensive treatment menus with pricing, and seamless online booking integration.'
    },
    {
      id: 'proj-voiceflow',
      name: 'VoiceFlow AI — AI Voice & Text Studio',
      category: 'Web App',
      tagline: 'Neural Text-to-Speech, Bilingual Urdu & English Audio Synthesis Studio',
      description: 'A cutting-edge generative AI voice and audio engineering web application featuring neural text-to-speech (TTS), bilingual Urdu & English speech synthesis, script structuring, content repurposing into 9 assets, and studio-grade voice generation.',
      image: 'https://voice-flow-liard.vercel.app/logo.jpg',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Web Audio API', 'AI Voice Synthesis', 'Vercel Deployment'],
      features: [
        'Neural Text-to-Speech (TTS) synthesis with natural cadence & emotion controls',
        'Bilingual Urdu & English voice studio (including Zara Natural & Hamza models)',
        'AI script structuring, professional refinement & hook generation tools',
        'One-click content repurposing into 9 digital assets and multi-format audio export',
        'Ultra-clean dark studio UI with real-time waveform & sound design controls'
      ],
      liveUrl: 'https://voice-flow-liard.vercel.app/',
      clientName: 'VoiceFlow AI Studio',
      completionTime: '1 Week',
      overview: 'Designed and engineered VoiceFlow AI, an advanced bilingual neural speech synthesis and audio production suite. Equipped with natural Urdu and English voice engines, audio waveform visualization, scriptwriting AI helpers, and seamless audio export for creators, podcasters, and developers.'
    },
    {
      id: 'proj-delaqua',
      name: 'DELAQUA Beauty Salon — Signature By Asma',
      category: 'Salon',
      tagline: 'Signature Bridal Makeovers, Clinical Hydra Facials & Luxury Women’s Spa',
      description: 'An alluring, dark-luxe beauty salon and spa web platform crafted for Delaqua Beauty Salon (Signature By Asma) in People’s Colony No. 1, Faisalabad featuring signature bridal makeup artistry, clinical hydra facials, keratin hair therapies, luxury spa menus, and direct WhatsApp appointment bookings.',
      image: 'https://saloon-eta-tawny.vercel.app/assets/images/hero.jpg',
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'Schema.org JSON-LD', 'Vercel Deployment'],
      features: [
        'Signature Bridal Makeover by Asma with camera-ready HD velvet finishes',
        'Clinical Hydra Facial, gold glow therapies & deep pore refining treatments',
        'Keratin smoothing, premium hair coloring, blow-dry & restorative spa care',
        '50-A, Nizami Street, People’s Colony No. 1, Faisalabad premier location',
        'Instant WhatsApp appointment booking & bridal consultations (+92 321 7664078)'
      ],
      liveUrl: 'https://saloon-eta-tawny.vercel.app/',
      clientName: 'Delaqua Beauty Salon (Signature By Asma)',
      completionTime: '1 Week',
      overview: 'Designed and engineered an elite women’s beauty salon and spa web platform for Delaqua Beauty Salon by Asma in Faisalabad. Created with a sleek dark aesthetic, luminous rose-gold and magenta accents, Cormorant Garamond & Playfair typography, interactive service category menus, and frictionless WhatsApp booking.'
    },
    {
      id: 'proj-mezturkish',
      name: 'MEZ Turkish Restaurant — Authentic Fine Dining in Gulberg Lahore',
      category: 'Restaurant',
      tagline: 'Authentic Ottoman Cuisine, Fire-Grilled Kebabs & Fine Dining in Gulberg Lahore',
      description: 'A luxurious, heritage culinary web platform engineered for MEZ Turkish Restaurant (Block L, Gulberg 2, Lahore) featuring signature fire-grilled kebabs, authentic Iskender, hand-rolled Turkish pides, hot & cold meze platters, traditional Kunafa, and seamless WhatsApp table reservations.',
      image: 'https://mez-turkish-restaurant.vercel.app/assets/mez_hero_dining_1787219900163-DTNJ0-vL.jpg',
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'Schema.org JSON-LD', 'Vercel Deployment'],
      features: [
        'Authentic Ottoman & Turkish cuisine: Fire-grilled kebabs, skewers & Iskender',
        'Signature MEZ Special Platter, hand-rolled Turkish pides & artisan meze',
        'Delectable traditional desserts: Authentic Turkish Kunafa & aromatic tea',
        '5, Block L, Gulberg 2, Lahore prime location & direct WhatsApp reservation (+92 315 5397465)',
        'Deep Ottoman emerald & gold aesthetic with 100% fluid mobile & tablet responsiveness'
      ],
      liveUrl: 'https://mez-turkish-restaurant.vercel.app/',
      clientName: 'MEZ Turkish Restaurant (Gulberg 2, Lahore)',
      completionTime: '1 Week',
      overview: 'Designed and engineered a luxurious Turkish dining showcase and table reservation web experience for MEZ Turkish Restaurant in Gulberg 2, Lahore. Crafted with deep Ottoman emerald tones, warm royal gold accents, elegant Cinzel & Cormorant typography, authentic culinary photography, and effortless reservation dispatch.'
    },
    {
      id: 'proj-thedonpizza',
      name: 'The Don Pizza — Artisan Wood-Fired Pizzeria',
      category: 'Restaurant',
      tagline: 'Artisan Neapolitan Wood-Fired Pizza, Handcrafted Crusts & Italian Delicacies',
      description: 'A mouthwatering, dark-themed culinary web platform engineered for The Don Pizza featuring artisan wood-fired Neapolitan pizzas (Margherita, Spicy Diavola, Smokey BBQ), stuffed cheesy & classic pan crusts, quick order customization, and mobile-optimized ordering UX.',
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80',
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'Schema.org JSON-LD', 'Vercel Deployment'],
      features: [
        'Artisan wood-fired Neapolitan pizza menu with authentic San Marzano sauce',
        'Specialty crust selection: Stuffed Cheesy Crust, Classic Pan & Fluffy Golden',
        'Curated Italian sides: Wood-fired crispy wings & The Don Tiramisu Classico',
        'Frictionless online order customization & quick add to cart workflow',
        'Dark gourmet culinary aesthetic with 100% fluid mobile & tablet responsiveness'
      ],
      liveUrl: 'https://the-don-pizza-ruby.vercel.app/',
      clientName: 'The Don Pizza Artisan Pizzeria',
      completionTime: '1 Week',
      overview: 'Designed and engineered an irresistible online pizzeria showcase and ordering web platform for The Don Pizza. Crafted with high-impact culinary photography, warm amber and ember lighting accents, interactive crust and topping selectors, and lightning-fast responsiveness across all screen sizes.'
    },
    {
      id: 'proj-libertygrand',
      name: 'Liberty Grand Marquee — Premium Wedding & Event Venue',
      category: 'Hotel',
      tagline: 'Faisalabad’s Premier Luxury Wedding Marquee, Banquet & Event Hall',
      description: 'A majestic, royal web application and venue showcase engineered for Liberty Grand Marquee (196 Ghona Road, Millat Town, Faisalabad) featuring crystal chandelier hall galleries, royal stage setups, Barat & Walima banquet packages, and direct booking inquiries.',
      image: 'https://liberty-grand.vercel.app/assets/liberty_grand_exterior_1786440409427-CHWk-iB6.jpg',
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'Schema.org JSON-LD', 'Vercel Deployment'],
      features: [
        'Grand Barat, Walima & luxury wedding reception booking',
        'Soaring hall interior with crystal chandeliers & climate control',
        'Royal bride & groom stage decor with tailored lighting systems',
        'Executive corporate conferences, annual dinners & banquet catering',
        '196 Ghona Road, Millat Town, Faisalabad location & direct call dispatch (0307-1505555)'
      ],
      liveUrl: 'https://liberty-grand.vercel.app/',
      clientName: 'Liberty Grand Marquee (Millat Town, Faisalabad)',
      completionTime: '1 Week',
      overview: 'Designed and engineered an elite wedding marquee and banquet web platform for Liberty Grand Marquee in Faisalabad. Created with royal gold aesthetics, sophisticated Cormorant Garamond typography, high-resolution interior and stage galleries, and frictionless booking inquiries.'
    },
    {
      id: 'proj-furniture-sheheryar',
      name: 'Furniture Store By Sheheryar — Luxury Designer Showroom',
      category: 'E-Commerce',
      tagline: 'Bespoke Luxury Sofas, Curved Collections & Interior Showroom',
      description: 'An editorial, high-end web platform and digital showroom crafted for Furniture Store By Sheheryar (D Ground, People’s Colony No. 1, Faisalabad) featuring bespoke curved living room collections, custom bedrooms, dining suites, and direct WhatsApp consultations.',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85',
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'Schema.org JSON-LD', 'Vercel Deployment'],
      features: [
        'Curated luxury furniture catalog: living room, curved sofas & bedrooms',
        'Direct WhatsApp bespoke inquiry & consultation (+92 323 6044130)',
        'D Ground, People’s Colony No. 1, Faisalabad showroom locator & hours',
        'Bespoke interior design consultation & custom architectural pieces',
        'Warm ivory & gold editorial typography with 100% mobile responsiveness'
      ],
      liveUrl: 'https://furniture-store-gules-six.vercel.app/',
      clientName: 'Furniture Store By Sheheryar (D Ground, Faisalabad)',
      completionTime: '1 Week',
      overview: 'Engineered a bespoke luxury showroom experience for Furniture Store By Sheheryar in Faisalabad. Designed with warm cream aesthetics, high-end editorial typography, interactive collection galleries, and instant WhatsApp inquiry routing for high-value custom furniture orders.'
    },
    {
      id: 'proj-flyingscissor',
      name: 'Flying Scissor — Premium Hair Salon & Styling',
      category: 'Salon',
      tagline: 'Where Style Meets Precision — Faisalabad Salon & Grooming',
      description: 'A luxurious, modern salon and grooming web platform crafted for Flying Scissor (West Canal Road, Faisalabad) featuring professional haircut menus, styling packages, real salon interior showcase, 4.3★ ratings, and direct WhatsApp appointment booking.',
      image: 'https://flying-scissor.vercel.app/assets/hero_salon_interior_1787564672751-DuA9s-Hm.jpg',
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'Schema.org JSON-LD', 'Vercel Deployment'],
      features: [
        'Comprehensive hair styling, grooming, and luxury salon packages',
        'Direct WhatsApp appointment booking & phone inquiry (+923245478822)',
        'West Canal Road, Main Canal Expressway, Faisal Town location & hours',
        'Verified 4.3★ customer ratings & reviews showcase',
        'Warm gold-accented dark editorial design with 100% mobile responsiveness'
      ],
      liveUrl: 'https://flying-scissor.vercel.app/',
      clientName: 'Flying Scissor (West Canal Rd, Faisalabad)',
      completionTime: '1 Week',
      overview: 'Designed and engineered an elite salon web platform for Flying Scissor in Faisalabad. Created with sophisticated typography, gold-accented dark aesthetics, interactive service menu cards, and frictionless online booking.'
    },
    {
      id: 'proj-neonstrike',
      name: 'NEON STRIKE — 3D Cyberpunk Survival FPS',
      category: 'Game',
      tagline: 'High-Octane 3D Cyberpunk Survival Shooter Web App',
      description: 'An adrenaline-fueled, browser-based 3D first-person survival shooter built with Three.js, WebGL, React, and Web Audio. Battle hostile cybernetic drones, combat cyborgs, and formidable bosses across an immersive dystopian neon cityscape.',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop',
      technologies: ['Three.js', 'WebGL', 'React', 'Tailwind CSS', 'Web Audio API', 'Vite', 'Vercel Deployment'],
      features: [
        'Real-time 3D WebGL renderer & futuristic cyberpunk city environment',
        'Dynamic wave survival mechanics with scaling enemy difficulty',
        'Multiple sci-fi weapons: Plasma Pistol, Assault Rifle, Shotgun',
        'Enemy AI behavior systems (Patrolling Drones, Cyborgs, Bosses)',
        'In-game HUD displaying Health, Ammo, Wave counter & Score',
        'Synthesizer spatial audio & responsive browser controls'
      ],
      liveUrl: 'https://neon-strike-sable.vercel.app/',
      clientName: 'NEON STRIKE Studios',
      completionTime: '2 Weeks',
      overview: 'Engineered a full-featured 3D first-person shooter running natively in the browser without plugins. Utilized Three.js and WebGL shaders for high-performance neon lighting, particle effects, projectile physics, and responsive desktop and mobile browser controls.'
    },
    {
      id: 'proj-groomermen',
      name: 'Groomer Men Saloon — Premium Barber & Men’s Grooming',
      category: 'Salon',
      tagline: 'Luxury Barbershop, Haircuts & Styling Web Platform',
      description: 'A modern, high-end web application crafted for Groomer Men Saloon (Kashmir Pull, Zia Colony, Faisalabad) featuring professional haircut menus, beard styling packages, 4.6★ Google reviews, and direct WhatsApp appointment booking.',
      image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1200&auto=format&fit=crop',
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'Schema.org JSON-LD', 'Vercel Deployment'],
      features: [
        'Interactive men’s haircuts, beard trims & grooming packages',
        'Direct WhatsApp appointment booking & customer service',
        'Kashmir Pull, W Canal Rd, Faisalabad location & store hours',
        'Verified 4.6★ Google customer ratings & testimonials showcase',
        'Dark luxury editorial UI styling with mobile-first responsiveness'
      ],
      liveUrl: 'https://groomer-men-saloon.vercel.app/',
      clientName: 'Groomer Men Saloon (Faisalabad)',
      completionTime: '1 Week',
      overview: 'Engineered an executive barbershop web platform for Groomer Men Saloon in Faisalabad. Designed with a luxury dark aesthetic, comprehensive grooming service menus with pricing, direct online booking actions, and full mobile optimization.'
    },
    {
      id: 'proj-adnansweets',
      name: 'Adnan Sweets & Bakers — Custom Cakes & Bakery Web App',
      category: 'Restaurant',
      tagline: 'Artisan Bakery, Custom Cakes & Traditional Sweets',
      description: 'A vibrant, modern 24/7 web application crafted for Adnan Sweets & Bakers (Dhanola, Faisalabad) featuring custom cakes showcase, traditional sweets (mithai), fresh bakery treats, customer reviews, and direct WhatsApp ordering.',
      image: 'https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=1200&q=80',
      technologies: ['React', 'JavaScript', 'HTML5 / CSS3', 'WhatsApp Ordering', 'Vercel Deployment'],
      features: [
        'Custom birthday & wedding cake showcase catalog',
        'Traditional Pakistani sweets & freshly baked goods',
        'Direct WhatsApp ordering & 24/7 call dispatch integration',
        'Chak 117 JB Dhanola, Faisalabad store locator & maps',
        '100% mobile-friendly responsive layout & customer reviews'
      ],
      liveUrl: 'https://adnan-sweets-bakers.vercel.app/',
      clientName: 'Adnan Sweets & Bakers (Faisalabad)',
      completionTime: '1 Week',
      overview: 'Engineered a warm, appetizing online presence and digital ordering platform for Adnan Sweets & Bakers in Faisalabad. Designed with rich bakery aesthetics, interactive product menus for custom cakes and traditional sweets, and immediate WhatsApp order routing.'
    },
    {
      id: 'proj-shoecasa',
      name: 'SHOE CASA — Luxury Handcrafted Footwear & E-Commerce',
      category: 'E-Commerce',
      tagline: 'Premium Footwear Brand & E-Commerce Web Store',
      description: 'A luxury e-commerce and showcase platform crafted for SHOE CASA (Regent Mall, Faisalabad) featuring handcrafted formal shoes, loafers, chappals, ladies footwear, nationwide delivery, and direct WhatsApp ordering.',
      image: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?q=80&w=1200&auto=format&fit=crop',
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'WhatsApp E-Commerce', 'Vercel Deployment'],
      features: [
        'Luxury handcrafted footwear catalog (Men & Women)',
        'Direct WhatsApp fast order placement & instant dispatch',
        'Regent Mall Faisalabad store locator with interactive details',
        'Nationwide Pakistan delivery & customer care integration',
        'Mobile-first luxury editorial UI styling & animations'
      ],
      liveUrl: 'https://show-casc.vercel.app/',
      clientName: 'SHOE CASA (Regent Mall, Faisalabad)',
      completionTime: '1 Week',
      overview: 'Engineered a high-end luxury e-commerce and brand presence web platform for SHOE CASA, located at Regent Mall, Faisalabad. Built with clean responsive design, elegant typography, streamlined product catalog browsing, and an instant WhatsApp ordering flow that converts visitors into customers.'
    },
    {
      id: 'proj-1',
      name: 'FitBase — Modern Fitness & Gym Platform',
      category: 'Business',
      tagline: 'Modern Gym, Fitness & Workout Website',
      description: 'A high-performance, dynamic website crafted for FitBase Fitness with workout plan exploration, membership pricing packages, trainer profiles, and online joining portal.',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop',
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'Vercel Deployment'],
      features: [
        'Membership pricing tier & plan breakdown',
        'Trainer showcase & personal training consultation',
        'Class schedule timetable & online registration',
        '100% mobile-friendly responsive layout'
      ],
      liveUrl: 'https://fit-base-fitness.vercel.app/',
      clientName: 'FitBase Fitness',
      completionTime: '1 Week',
      overview: 'Engineered an energetic, modern web application for FitBase Fitness to showcase state-of-the-art gym facilities, fitness programs, and membership options.'
    },
    {
      id: 'proj-pizza',
      name: 'Pizza Paradise — Artisan Pizzeria & Fast Food',
      category: 'Restaurant',
      tagline: 'Artisan Pizza, Food Delivery & Restaurant Web App',
      description: 'An appetizing, modern, and responsive website engineered for Pizza Paradise featuring an interactive pizza & deals menu, online food ordering, table reservations, and WhatsApp dispatch.',
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1200&auto=format&fit=crop',
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'Vercel Deployment'],
      features: [
        'Interactive food & pizza menu with crust options',
        'Online order dispatch with instant WhatsApp integration',
        'Table reservation system with date & party size',
        '100% mobile-friendly responsive layout'
      ],
      liveUrl: 'https://pizza-paradise-zeta.vercel.app/',
      clientName: 'Pizza Paradise',
      completionTime: '1 Week',
      overview: 'Engineered a vibrant, appetizing web application for Pizza Paradise featuring real-time menu browsing, hot deal specials, online order placement, and seamless customer communications.'
    },
    {
      id: 'proj-3',
      name: 'Delaqua Beauty — Luxury Beauty Parlor & Aesthetics',
      category: 'Salon',
      tagline: 'Luxury Beauty Parlor & Aesthetics Website',
      description: 'An elegant, high-end beauty parlor and aesthetics web application crafted for Delaqua Beauty featuring an interactive treatment & bridal makeup menu, stylist showcase, and online booking.',
      image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1200&auto=format&fit=crop',
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'Vercel Deployment'],
      features: [
        'Interactive beauty treatments, hair & bridal makeup menu',
        'Direct online appointment booking & consultation',
        'Bridal lookbook gallery & client reviews',
        '100% mobile-friendly responsive layout'
      ],
      liveUrl: 'https://delaqua-beauty-b4tl.vercel.app/',
      clientName: 'Delaqua Beauty',
      completionTime: '1 Week',
      overview: 'Crafted a modern, elegant web application for Delaqua Beauty Parlor with luxurious visuals, comprehensive service pricing, and seamless client appointment scheduling.'
    }
  ] as Project[],

  process: [
    {
      number: '01',
      title: 'Discover',
      shortDesc: "Understand the client's business and requirements.",
      details: [
        'Deep-dive into your brand goals, target audience & competitors',
        'Define exact scope, functional requirements & timeline',
        'Gather assets, content outlines, and design inspiration'
      ],
      icon: 'Compass'
    },
    {
      number: '02',
      title: 'Plan',
      shortDesc: 'Create the website structure and visual direction.',
      details: [
        'Information architecture & sitemap mapping',
        'Low-fidelity wireframing of key conversion journeys',
        'Color schemes, typography pairings & design moodboard'
      ],
      icon: 'Map'
    },
    {
      number: '03',
      title: 'Design',
      shortDesc: 'Build a modern and professional UI.',
      details: [
        'High-fidelity custom visual UI design in Figma / Elementor',
        'Crafting responsive layouts for mobile, tablet and desktop',
        'Interactive prototypes and client feedback revision loops'
      ],
      icon: 'PenTool'
    },
    {
      number: '04',
      title: 'Develop',
      shortDesc: 'Turn the design into a responsive working website.',
      details: [
        'Clean, semantic, and high-performance code / builder setup',
        'Integration of interactive forms, WhatsApp triggers & APIs',
        'Cross-browser compatibility testing & performance optimization'
      ],
      icon: 'Code'
    },
    {
      number: '05',
      title: 'Launch',
      shortDesc: 'Test, optimize and launch the final website.',
      details: [
        'Comprehensive QA testing, SEO setup & security checks',
        'Domain connection, SSL setup & live deployment',
        'Client handover guide, training & post-launch support'
      ],
      icon: 'Rocket'
    }
  ] as ProcessStep[],

  whyChooseMe: [
    {
      title: 'Modern Design',
      description: 'Pixel-perfect, contemporary aesthetics that position your brand ahead of the competition.',
      icon: 'Sparkles',
      highlightStat: 'Contemporary UI'
    },
    {
      title: 'Mobile Responsive',
      description: 'Flawless viewing experience across smartphones, iPads, laptops, and 4K desktop screens.',
      icon: 'Smartphone',
      highlightStat: '100% Fluid'
    },
    {
      title: 'Fast Performance',
      description: 'Optimized code, compressed assets, and fast page load speeds for better user retention.',
      icon: 'Zap',
      highlightStat: '< 1s Load Target'
    },
    {
      title: 'User-Friendly Interface',
      description: 'Intuitive navigation and clear visual hierarchy engineered to convert visitors into clients.',
      icon: 'Users',
      highlightStat: 'Conversion First'
    },
    {
      title: 'SEO-Friendly Structure',
      description: 'Semantic HTML markup, meta optimization, and fast speed designed for Google search engines.',
      icon: 'Search',
      highlightStat: 'Search Ready'
    },
    {
      title: 'Professional Support',
      description: 'Dedicated communication, on-time project delivery, and dependable post-launch assistance.',
      icon: 'ShieldCheck',
      highlightStat: '100% Reliable'
    }
  ] as WhyChooseItem[],

  testimonials: [
    {
      id: 'test-my-1',
      clientName: 'Dr. Arisya Tan',
      clientRole: 'Principal Dental Surgeon',
      clientCompany: 'The Dentist@KL (Menara Hap Seng, Kuala Lumpur)',
      country: 'Malaysia',
      flag: '🇲🇾',
      avatar: 'https://images.unsplash.com/photo-1594824813576-9c4c7953253b?q=80&w=200&auto=format&fit=crop',
      rating: 5,
      quote: "Rizwan designed an exceptional web platform for our dental clinic at Menara Hap Seng, Kuala Lumpur. The treatments menu, patient consultation booking flow, and sleek aesthetics have substantially increased our appointment requests. Highly recommended across Malaysia!",
      projectType: 'Clinic & Healthcare Web App',
      isPlaceholder: false
    },
    {
      id: 'test-pk-1',
      clientName: 'Muhammad Ali Khan',
      clientRole: 'CEO & Founder',
      clientCompany: 'Lahore Tech Ventures (Gulberg, Lahore)',
      country: 'Pakistan',
      flag: '🇵🇰',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
      rating: 5,
      quote: "Rizwan built an exceptional web platform for our tech hub in Gulberg Lahore. His attention to detail, lightning-fast React performance, and WhatsApp integration doubled our inbound client inquiries!",
      projectType: 'Corporate Web App & Branding',
      isPlaceholder: false
    },
    {
      id: 'test-my-2',
      clientName: 'Farhan Zulkifli',
      clientRole: 'Head of Product',
      clientCompany: 'Nusantara Digital Solutions (Bangsar South, KL)',
      country: 'Malaysia',
      flag: '🇲🇾',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop',
      rating: 5,
      quote: "Collaborating with Rizwan from Malaysia was completely frictionless. He delivered our responsive web application ahead of schedule with clean React architecture, ultra-fast performance, and high-converting UX. A truly gifted engineer!",
      projectType: 'Modern SaaS Web Application',
      isPlaceholder: false
    },
    {
      id: 'test-pk-2',
      clientName: 'Fatima Noor',
      clientRole: 'Creative Director',
      clientCompany: 'Karachi Couture & E-Commerce (Karachi)',
      country: 'Pakistan',
      flag: '🇵🇰',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
      rating: 5,
      quote: "Working with Rizwan on our online boutique store was fantastic. The product catalog, cart checkout flow, and mobile responsiveness are world-class. Our customers love ordering across Pakistan!",
      projectType: 'E-Commerce Store',
      isPlaceholder: false
    },
    {
      id: 'test-my-3',
      clientName: 'Melissa Lim',
      clientRole: 'Managing Director',
      clientCompany: 'KL Artisan Living (Mont Kiara, Kuala Lumpur)',
      country: 'Malaysia',
      flag: '🇲🇾',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop',
      rating: 5,
      quote: "The luxury digital catalog Rizwan developed for our lifestyle showroom in Kuala Lumpur exceeded all our expectations. Fast loading speeds, mobile-first design, and seamless WhatsApp lead generation!",
      projectType: 'Luxury Brand & Catalog Experience',
      isPlaceholder: false
    },
    {
      id: 'test-pk-3',
      clientName: 'Sheikh Tariq Mehmood',
      clientRole: 'Managing Director',
      clientCompany: 'Liberty Grand Marquee & Events (Faisalabad)',
      country: 'Pakistan',
      flag: '🇵🇰',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
      rating: 5,
      quote: "Rizwan engineered our luxury banquet and wedding marquee web platform with royal gold aesthetics and seamless booking inquiries. Wedding reservations and corporate inquiries have grown significantly!",
      projectType: 'Luxury Wedding Marquee Platform',
      isPlaceholder: false
    },
    {
      id: 'test-pk-4',
      clientName: 'Asma Tariq',
      clientRole: 'Master Stylist & Founder',
      clientCompany: 'DELAQUA Beauty Salon (People’s Colony, Faisalabad)',
      country: 'Pakistan',
      flag: '🇵🇰',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop',
      rating: 5,
      quote: "Our salon and bridal spa website is gorgeous! The dark-luxe aesthetic, interactive treatment menus, and direct WhatsApp appointment bookings have attracted premium bridal clients every week.",
      projectType: 'Luxury Beauty Salon & Spa Web Platform',
      isPlaceholder: false
    },
    {
      id: 'test-my-4',
      clientName: 'Derrick Wong',
      clientRole: 'Tech Lead',
      clientCompany: 'Apex Cloud Innovations (George Town, Penang)',
      country: 'Malaysia',
      flag: '🇲🇾',
      avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=200&auto=format&fit=crop',
      rating: 5,
      quote: "Rizwan is one of the most reliable frontend engineers we have partnered with. Seamless communication, pixel-perfect Tailwind styling, and rapid turnaround for our Southeast Asian clientele.",
      projectType: 'Full-Stack Web Portal',
      isPlaceholder: false
    },
    {
      id: 'test-pk-5',
      clientName: 'Usman Ghani',
      clientRole: 'Managing Director',
      clientCompany: 'Islamabad Digital Hub (Islamabad)',
      country: 'Pakistan',
      flag: '🇵🇰',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop',
      rating: 5,
      quote: "Absolute professional! Rizwan delivered our high-end business portal ahead of schedule with immaculate UI design and robust Firestore backend persistence. Highly recommended across Pakistan.",
      projectType: 'Full-Stack Web Platform',
      isPlaceholder: false
    },
    {
      id: 'test-pk-6',
      clientName: 'Bilal Ahmed',
      clientRole: 'Managing Partner',
      clientCompany: 'Faisalabad Textile & Apparel (Faisalabad)',
      country: 'Pakistan',
      flag: '🇵🇰',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop',
      rating: 5,
      quote: "From initial sitemap planning to deployment on Vercel, Rizwan's work is top tier. Our international buyers are thoroughly impressed with our new corporate showcase website.",
      projectType: 'Corporate Web Showcase',
      isPlaceholder: false
    }
  ] as Testimonial[],

  cv: {
    fullName: 'Rizwan Ahmad',
    jobTitle: 'Professional Web Developer & Designer',
    tagline: 'Web Designer & Developer | Graphic Designer | AI Specialist',
    email: 'ra2826572@gmail.com',
    phone: '03081509520',
    altPhone: '03095793662',
    location: 'Faisalabad, Pakistan',
    portfolioUrl: 'https://my-potfolio-seven-rho.vercel.app/',
    experienceYears: '2+ Years Experience',
    summary: 'Creative and motivated Graphic Designer and Professional Web Developer with a strong passion for visual design, branding, and digital content. Skilled in creating modern, engaging, and professional designs with attention to detail. Experienced in working on digital projects and websites, with a strong interest in combining creativity and technology. Always eager to learn new skills, take on creative challenges, and deliver high-quality work that meets client needs.',
    avatar: rizwanProfileImg,
    experience: [
      {
        company: 'WEVERSITY',
        role: 'Graphic Designer / Creative & Web Professional',
        period: '2 Years (2024 - Present)',
        type: 'Creative Agency / Professional Team',
        location: 'Faisalabad, Pakistan',
        highlights: [
          'Designed high-impact visual branding, creative assets, and client presentation decks.',
          'Built responsive landing pages and custom websites with modern UI/UX principles.',
          'Collaborated on digital marketing campaigns, social media assets, and digital transformations.'
        ]
      },
      {
        company: 'Independent Freelance Web Developer',
        role: 'Full-Stack Web Developer & UI Designer',
        period: '2023 - Present',
        type: 'Global Client Delivery',
        location: 'Pakistan, Malaysia & International Remote',
        highlights: [
          'Engineered 80+ web projects and launched 50+ production websites for healthcare, luxury salons, events, and retail.',
          'Developed fast-loading, mobile-first websites with React, Tailwind CSS, WordPress, and Elementor.',
          'Delivered international projects including The Dentist@KL (Malaysia) and DER SALON (Germany).'
        ]
      }
    ],
    education: [
      {
        degree: 'Matric / 10th Class',
        institution: 'Board of Intermediate and Secondary Education (BISE) Faisalabad',
        status: 'Completed',
        year: 'Faisalabad, Pakistan'
      },
      {
        degree: 'Continuous Technical Development & Web Engineering',
        institution: 'Frontend Development & Modern React SPA Architecture',
        status: 'Active',
        year: '2023 - Present'
      }
    ],
    languages: [
      { name: 'English', level: 'Professional Working Proficiency' },
      { name: 'Urdu', level: 'Native / Bilingual' },
      { name: 'Punjabi', level: 'Native' }
    ],
    skillCategories: [
      {
        category: 'Web Development',
        items: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React', 'Tailwind CSS', 'Responsive Layouts']
      },
      {
        category: 'CMS & Page Builders',
        items: ['WordPress', 'Elementor Pro', 'Custom Themes', 'WooCommerce', 'Speed Optimization']
      },
      {
        category: 'Creative & Visual Design',
        items: ['Adobe Photoshop', 'Figma', 'Graphic Design', 'Brand Identity', 'UI/UX Prototyping']
      },
      {
        category: 'AI & Modern Developer Tools',
        items: ['AI Prompt Engineering', 'Developer Workflows', 'Git & GitHub', 'Vite & Vercel']
      },
      {
        category: 'Presentation Design',
        items: ['PowerPoint Presentations', 'Pitch Deck Design', 'Infographics & Data Vis', 'Canva Presentations', 'Layout & Typography']
      }
    ],
    featuredProjects: [
      {
        name: 'The Dentist@KL',
        category: 'Healthcare & Dental Portal',
        clientLocation: 'Kuala Lumpur, Malaysia',
        description: 'Elite dental clinic web platform with treatment catalogs, doctor profiles, and direct patient appointment bookings.',
        link: 'https://the-dentist-kl-five.vercel.app/'
      },
      {
        name: 'DER SALON',
        category: 'Luxury Salon & Editorial Lookbook',
        clientLocation: 'Frankfurt-Süd, Germany',
        description: 'Bespoke European salon web experience with dual-language support, editorial lookbook, and online appointment booking.',
        link: 'https://der-salon-chi.vercel.app/'
      },
      {
        name: 'DELAQUA Beauty Salon — Signature By Asma',
        category: 'Luxury Salon & Bridal Spa',
        clientLocation: 'Faisalabad, Pakistan',
        description: 'Dark-luxe rose gold beauty salon web platform with interactive treatment menus and instant WhatsApp booking.',
        link: 'https://delaqua-beauty-salon.vercel.app/'
      },
      {
        name: 'Liberty Grand Marquee & Events',
        category: 'Banquet & Event Venue',
        clientLocation: 'Faisalabad, Pakistan',
        description: 'Luxury wedding marquee website featuring hall virtual tours, royal gold branding, and catering reservation workflows.',
        link: 'https://liberty-grand-marquee.vercel.app/'
      }
    ]
  } as CVData,
  contentWriting: WRITING_PROJECTS
};

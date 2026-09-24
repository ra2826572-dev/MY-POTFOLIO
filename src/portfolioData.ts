/**
 * RIZWAN AHMAD — Portfolio Data Configuration
 * 
 * You can easily customize any information, links, images, projects,
 * testimonials, and WhatsApp contact number in this file.
 */

import rizwanProfileImg from './assets/images/rizwan_poster_emblem_1788178172045.jpg';

export interface Project {
  id: string;
  name: string;
  category: 'Business' | 'E-Commerce' | 'Restaurant' | 'Salon' | 'Hotel' | 'Portfolio';
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
  category: 'Frontend & Code' | 'CMS & Platforms' | 'Design & Creative' | 'Tools & AI';
  level: number; // 0 to 100
  experience: string;
  highlight?: boolean;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  deliverables: string[];
  popular?: boolean;
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
}

export const PORTFOLIO_DATA = {
  personal: {
    name: 'RIZWAN AHMAD',
    shortName: 'Rizwan',
    role: 'Web Designer & Developer',
    secondaryRoles: [
      'Web Designer & Developer',
      'UI/UX Specialist',
      'WordPress & React Expert',
      'Digital Creator'
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
    { name: 'HTML5', iconName: 'FileCode', category: 'Frontend & Code', level: 95, experience: 'Advanced Structure', highlight: true },
    { name: 'CSS3', iconName: 'Palette', category: 'Frontend & Code', level: 95, experience: 'Modern Layouts & Animations', highlight: true },
    { name: 'JavaScript', iconName: 'Code2', category: 'Frontend & Code', level: 90, experience: 'ES6+ & Dynamic Logic', highlight: true },
    { name: 'React', iconName: 'Atom', category: 'Frontend & Code', level: 88, experience: 'Modern SPA & Components', highlight: true },
    { name: 'WordPress', iconName: 'Globe2', category: 'CMS & Platforms', level: 92, experience: 'Custom Themes & Speed', highlight: true },
    { name: 'Elementor', iconName: 'LayoutGrid', category: 'CMS & Platforms', level: 95, experience: 'Pixel-Perfect Builder', highlight: true },
    { name: 'UI/UX Design', iconName: 'Figma', category: 'Design & Creative', level: 92, experience: 'Wireframes & Visual Flow', highlight: true },
    { name: 'Responsive Web Design', iconName: 'Smartphone', category: 'Frontend & Code', level: 98, experience: 'Mobile-First Perfection', highlight: true },
    { name: 'Graphic Design', iconName: 'PenTool', category: 'Design & Creative', level: 85, experience: 'Branding & Social Assets', highlight: false },
    { name: 'AI Tools', iconName: 'Sparkles', category: 'Tools & AI', level: 90, experience: 'Workflow & Content Boost', highlight: true },
    { name: 'Tailwind CSS', iconName: 'Layers', category: 'Frontend & Code', level: 94, experience: 'Rapid Utility Styling', highlight: false },
    { name: 'Speed Optimization', iconName: 'Zap', category: 'CMS & Platforms', level: 90, experience: 'Core Web Vitals & SEO', highlight: false },
  ] as Skill[],

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
      popular: true
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
      ]
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
      popular: true
    },
    {
      id: 'landing-pages',
      title: 'Landing Pages',
      description: 'High-converting landing pages for products, services and campaigns.',
      icon: 'Rocket',
      deliverables: [
        'Laser-focused copy layout & visual hierarchy',
        'Compelling call-to-action triggers',
        'A/B test ready structures and analytics hooks',
        'Ultra-fast load time for high ad conversions'
      ]
    },
    {
      id: 'ui-ux-design',
      title: 'UI/UX Design',
      description: 'Clean and user-friendly interfaces with a strong visual hierarchy.',
      icon: 'Layout',
      deliverables: [
        'Wireframing & interactive Figma prototypes',
        'User journey optimization & research',
        'Design systems, UI kits & typography scales',
        'Accessibility & usability compliance'
      ]
    },
    {
      id: 'website-redesign',
      title: 'Website Redesign',
      description: 'Transform outdated websites into modern, responsive experiences.',
      icon: 'RefreshCw',
      deliverables: [
        'Complete visual overhaul to modern 2026 standards',
        'Performance upgrade & code modernization',
        'Mobile optimization & UX streamlining',
        'Retain your existing SEO rankings & content'
      ]
    }
  ] as Service[],

  projects: [
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
      id: 'proj-2',
      name: 'Flying Scissor — Barber & Salon',
      category: 'Salon',
      tagline: 'Modern Barber Shop & Hair Salon Website',
      description: 'A sleek, modern, and responsive website crafted for Flying Scissor Barber & Salon with interactive service menu, online haircut booking, stylist showcase, and WhatsApp contact.',
      image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1200&auto=format&fit=crop',
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'Vercel Deployment'],
      features: [
        'Interactive haircut & grooming service menu with pricing',
        'Direct online salon booking & WhatsApp consultation',
        'Modern dark-aesthetic barber lookbook gallery',
        '100% mobile-friendly responsive layout'
      ],
      liveUrl: 'https://flying-scissor.vercel.app/',
      clientName: 'Flying Scissor',
      completionTime: '1 Week',
      overview: 'Engineered the official web application for Flying Scissor, providing customers with a seamless browsing experience to view hair styling packages and book appointments instantly.'
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
      id: 'test-1',
      clientName: 'Alex Morgan',
      clientRole: 'Founder & CEO',
      clientCompany: 'Apex Financial Advisors',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
      rating: 5,
      quote: "Rizwan transformed our outdated corporate website into a sleek, high-converting digital experience. Our lead inquiries increased by 40% in the first month.",
      projectType: 'Business Website & Branding',
      isPlaceholder: true
    },
    {
      id: 'test-2',
      clientName: 'Marco Rossi',
      clientRole: 'Owner & Head Chef',
      clientCompany: 'Bella Gusto Pizzeria',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
      rating: 5,
      quote: "The direct WhatsApp ordering and restaurant menu Rizwan built has made online takeout effortless for our customers. Highly professional and very fast turnaround!",
      projectType: 'Restaurant Website & Menu',
      isPlaceholder: true
    },
    {
      id: 'test-3',
      clientName: 'Sophia Vance',
      clientRole: 'Creative Director',
      clientCompany: 'Lumière Spa & Lounge',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop',
      rating: 5,
      quote: "Working with Rizwan was a pleasure from day one. He grasped our luxury vision immediately and delivered a gorgeous website with appointment booking.",
      projectType: 'Salon & Spa Website',
      isPlaceholder: true
    }
  ] as Testimonial[]
};

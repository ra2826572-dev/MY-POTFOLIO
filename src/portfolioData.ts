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
        name: 'Groomer Men Saloon',
        url: 'https://groomer-men-saloon.vercel.app/',
        tagline: 'Premium Men’s Grooming & Barbershop Platform'
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
      id: 'website-redesign',
      title: 'Website Redesign',
      description: 'Transform outdated websites into modern, responsive experiences.',
      icon: 'RefreshCw',
      deliverables: [
        'Complete visual overhaul to modern 2026 standards',
        'Performance upgrade & code modernization',
        'Mobile optimization & UX streamlining',
        'Retain your existing SEO rankings & content'
      ],
      featuredProject: {
        name: 'Liberty Grand Marquee',
        url: 'https://liberty-grand.vercel.app/',
        tagline: 'Luxury Wedding Marquee & Event Venue Web Platform'
      }
    }
  ] as Service[],

  projects: [
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
      id: 'test-pk-1',
      clientName: 'Muhammad Ali Khan',
      clientRole: 'CEO & Founder',
      clientCompany: 'Lahore Tech Ventures (Lahore)',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
      rating: 5,
      quote: "Rizwan built an exceptional web platform for our tech hub in Gulberg Lahore. His attention to detail, lightning-fast React performance, and WhatsApp integration doubled our inbound client inquiries!",
      projectType: 'Corporate Web App & Branding',
      isPlaceholder: false
    },
    {
      id: 'test-pk-2',
      clientName: 'Fatima Noor',
      clientRole: 'Creative Director',
      clientCompany: 'Karachi Couture & E-Commerce (Karachi)',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
      rating: 5,
      quote: "Working with Rizwan on our online boutique store was fantastic. The product catalog, cart checkout flow, and mobile responsiveness are world-class. Our customers love ordering across Pakistan!",
      projectType: 'E-Commerce Store',
      isPlaceholder: false
    },
    {
      id: 'test-pk-3',
      clientName: 'Usman Ghani',
      clientRole: 'Managing Director',
      clientCompany: 'Islamabad Digital Hub (Islamabad)',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
      rating: 5,
      quote: "Absolute professional! Rizwan delivered our high-end business portal ahead of schedule with immaculate UI design and robust Firestore backend persistence. Highly recommended across Pakistan.",
      projectType: 'Full-Stack Web Platform',
      isPlaceholder: false
    },
    {
      id: 'test-pk-4',
      clientName: 'Bilal Ahmed',
      clientRole: 'Managing Partner',
      clientCompany: 'Faisalabad Textile & Apparel (Faisalabad)',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop',
      rating: 5,
      quote: "From initial sitemap planning to deployment on Vercel, Rizwan's work is top tier. Our international buyers are thoroughly impressed with our new corporate showcase website.",
      projectType: 'Corporate Web Showcase',
      isPlaceholder: false
    }
  ] as Testimonial[]
};

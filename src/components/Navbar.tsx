import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ArrowUpRight, 
  MessageSquare, 
  Phone
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../portfolioData';

interface NavbarProps {
  onOpenQuoteModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Skills', href: '/skills' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Process', href: '/process' },
    { name: 'Contact', href: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <header
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'py-3 bg-[#080B11]/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link 
              to="/" 
              onClick={closeMobileMenu}
              className="flex items-center gap-3 group"
              id="brand-logo"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-violet-500 p-[1.5px] shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all duration-300">
                <div className="w-full h-full bg-[#090D16] rounded-[10px] flex items-center justify-center">
                  <span className="font-extrabold text-lg text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-200 to-amber-300">
                    R
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-black text-lg tracking-wider text-slate-100 uppercase group-hover:text-blue-400 transition-colors">
                  {PORTFOLIO_DATA.personal.name}
                </span>
                <span className="text-[10px] tracking-widest text-slate-400 font-medium uppercase -mt-1 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse" />
                  Web Designer & Dev
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-md">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    id={`nav-link-${link.name.toLowerCase()}`}
                    className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                      isActive
                        ? 'text-white'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 shadow-sm shadow-blue-500/30"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{link.name}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Right Action Area */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Quick WhatsApp Jump */}
              <a
                href={PORTFOLIO_DATA.contact.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                id="navbar-whatsapp-btn"
                className="p-2.5 rounded-full bg-slate-900/80 hover:bg-emerald-950/60 border border-slate-800 hover:border-emerald-500/40 text-emerald-400 transition-all duration-200 text-xs flex items-center gap-1.5"
                title="Direct WhatsApp Chat"
              >
                <Phone className="w-3.5 h-3.5" />
                <span className="font-medium hidden xl:inline">WhatsApp</span>
              </a>

              {/* Let's Talk Primary CTA */}
              <Link
                to="/contact"
                id="nav-lets-talk-btn"
                className="relative inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold rounded-full overflow-hidden group bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300"
              >
                <span className="relative z-10 flex items-center gap-1.5">
                  <span>Let's Talk</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 md:hidden">
              <button
                type="button"
                id="mobile-menu-toggle"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 hover:text-white focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[65px] z-40 bg-[#090D16]/95 backdrop-blur-xl border-b border-slate-800 p-6 md:hidden shadow-2xl shadow-black/80"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={closeMobileMenu}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                      isActive
                        ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30'
                        : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-60" />
                  </Link>
                );
              })}

              <div className="pt-4 mt-2 border-t border-slate-800 flex flex-col gap-3">
                <Link
                  to="/contact"
                  onClick={closeMobileMenu}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-center flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Let's Talk</span>
                </Link>

                <a
                  href={PORTFOLIO_DATA.contact.socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 font-semibold text-center flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>WhatsApp Me Directly</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

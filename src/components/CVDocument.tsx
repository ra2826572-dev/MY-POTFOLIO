import React from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  Award, 
  Briefcase, 
  GraduationCap, 
  Code2, 
  ExternalLink, 
  Languages, 
  CheckCircle2, 
  Layers
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../portfolioData';

interface CVDocumentProps {
  theme?: 'dark' | 'light';
  isPrintOnly?: boolean;
}

export const CVDocument: React.FC<CVDocumentProps> = ({ 
  theme = 'dark',
  isPrintOnly = false 
}) => {
  const { cv } = PORTFOLIO_DATA;
  const isLight = theme === 'light';

  return (
    <div 
      id="cv-document"
      className={`cv-print-area w-full max-w-[920px] mx-auto rounded-3xl overflow-hidden shadow-2xl transition-all duration-300 ${
        isPrintOnly ? '' : ''
      } ${
        isLight 
          ? 'bg-white text-slate-900 border border-slate-200' 
          : 'bg-[#0B0F19] text-slate-100 border border-slate-800'
      }`}
    >
      <div className="grid grid-cols-1 md:grid-cols-12 min-h-[1100px]">
        
        {/* Left Column / Sidebar */}
        <aside className={`md:col-span-4 p-6 sm:p-8 flex flex-col justify-between ${
          isLight 
            ? 'bg-slate-50 border-r border-slate-200 text-slate-800' 
            : 'bg-[#070A10] border-r border-slate-800/80 text-slate-200'
        }`}>
          <div>
            {/* Profile Avatar / Emblem */}
            <div className="flex flex-col items-center text-center mb-8">
              <div className="relative group mb-4">
                <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full p-1 bg-gradient-to-tr from-blue-600 via-indigo-500 to-amber-400 shadow-xl overflow-hidden">
                  <img
                    src={cv.avatar}
                    alt={cv.fullName}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <div className="absolute bottom-1 right-2 px-2 py-0.5 rounded-full bg-emerald-500 text-[10px] font-bold text-slate-950 flex items-center gap-1 shadow-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  Available
                </div>
              </div>

              <h2 className="text-xl font-bold tracking-tight text-white mb-0.5 md:hidden">
                {cv.fullName}
              </h2>
              <p className="text-xs text-blue-400 font-medium md:hidden">
                {cv.jobTitle}
              </p>
            </div>

            {/* Contact Details */}
            <div className="mb-8">
              <div className="flex items-center gap-2 pb-2 mb-3 border-b border-blue-500/30">
                <div className="p-1.5 rounded-lg bg-blue-500/10 text-blue-400">
                  <Mail className="w-4 h-4" />
                </div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-blue-400">
                  Contact
                </h3>
              </div>

              <ul className="space-y-3 text-xs">
                <li>
                  <a 
                    href={`tel:${cv.phone}`}
                    className="flex items-start gap-2.5 hover:text-blue-400 transition-colors group"
                  >
                    <Phone className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                    <span className="font-mono">{cv.phone}</span>
                  </a>
                </li>
                {cv.altPhone && (
                  <li>
                    <a 
                      href={`tel:${cv.altPhone}`}
                      className="flex items-start gap-2.5 text-slate-400 hover:text-blue-400 transition-colors group"
                    >
                      <Phone className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />
                      <span className="font-mono">{cv.altPhone} (Alt)</span>
                    </a>
                  </li>
                )}
                <li>
                  <a 
                    href={`mailto:${cv.email}`}
                    className="flex items-start gap-2.5 hover:text-blue-400 transition-colors break-all"
                  >
                    <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                    <span>{cv.email}</span>
                  </a>
                </li>
                <li className="flex items-start gap-2.5">
                  <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                  <span>{cv.location}</span>
                </li>
                <li>
                  <a 
                    href={cv.portfolioUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-start gap-2.5 text-blue-400 hover:underline break-all"
                  >
                    <Globe className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                    <span>{cv.portfolioUrl.replace('https://', '').replace(/\/$/, '')}</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Core Skills */}
            <div className="mb-8">
              <div className="flex items-center gap-2 pb-2 mb-3 border-b border-blue-500/30">
                <div className="p-1.5 rounded-lg bg-blue-500/10 text-blue-400">
                  <Code2 className="w-4 h-4" />
                </div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-blue-400">
                  Technical Skills
                </h3>
              </div>

              <div className="space-y-3.5">
                {cv.skillCategories.map((cat, i) => (
                  <div key={i}>
                    <p className={`text-[11px] font-bold uppercase tracking-wide mb-1.5 ${
                      isLight ? 'text-slate-600' : 'text-slate-400'
                    }`}>
                      {cat.category}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.items.map((skill, si) => (
                        <span 
                          key={si}
                          className={`text-[11px] px-2 py-0.5 rounded-md font-medium ${
                            isLight 
                              ? 'bg-slate-200/80 text-slate-800' 
                              : 'bg-slate-900 border border-slate-800 text-slate-300'
                          }`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="mb-8">
              <div className="flex items-center gap-2 pb-2 mb-3 border-b border-blue-500/30">
                <div className="p-1.5 rounded-lg bg-blue-500/10 text-blue-400">
                  <Languages className="w-4 h-4" />
                </div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-blue-400">
                  Languages
                </h3>
              </div>

              <ul className="space-y-2 text-xs">
                {cv.languages.map((lang, li) => (
                  <li key={li} className="flex items-center justify-between">
                    <span className="font-medium text-slate-200">{lang.name}</span>
                    <span className={`text-[11px] ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                      {lang.level}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Official Certification Badge */}
            <div>
              <div className="flex items-center gap-2 pb-2 mb-3 border-b border-blue-500/30">
                <div className="p-1.5 rounded-lg bg-purple-500/10 text-purple-400">
                  <Award className="w-4 h-4" />
                </div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-purple-400">
                  Certification
                </h3>
              </div>

              <div className={`p-3 rounded-xl border text-xs ${
                isLight 
                  ? 'bg-purple-50 border-purple-200 text-purple-950' 
                  : 'bg-purple-950/30 border-purple-500/30 text-purple-200'
              }`}>
                <div className="flex items-center gap-1.5 font-bold mb-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                  <span>Anthropic Claude Academy</span>
                </div>
                <p className="text-[11px] text-slate-400 leading-snug mb-2">
                  Official Verified Credential in Claude AI, prompt architecture & agents.
                </p>
                <a
                  href="https://academy.claude.com/verify/756dec40601edbd310dabed4772c31e8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[10px] font-bold text-purple-400 hover:text-purple-300 underline"
                >
                  <span>Verify Credential</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </div>
            </div>

          </div>

          {/* Footer note in sidebar */}
          <div className="pt-6 mt-6 border-t border-slate-800/60 text-[10px] text-slate-500 flex items-center justify-between">
            <span>Rizwan Ahmad CV</span>
            <span>v2026.1</span>
          </div>
        </aside>

        {/* Right Column / Main Body */}
        <main className="md:col-span-8 p-6 sm:p-10 flex flex-col justify-between">
          <div>
            
            {/* Header / Name & Title */}
            <div className="border-b border-slate-800 pb-6 mb-8">
              <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight uppercase leading-none mb-2 ${
                isLight ? 'text-slate-900' : 'text-white'
              }`}>
                {cv.fullName}
              </h1>
              <p className="text-sm sm:text-base font-bold tracking-widest text-blue-400 uppercase">
                {cv.jobTitle}
              </p>
              <p className={`text-xs mt-1 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                {cv.tagline}
              </p>
            </div>

            {/* About Me / Professional Summary */}
            <section className="mb-8">
              <div className="flex items-center gap-2 mb-3">
                <div className="h-4 w-1 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full" />
                <h2 className={`text-sm sm:text-base font-bold uppercase tracking-wider ${
                  isLight ? 'text-slate-900' : 'text-white'
                }`}>
                  Professional Summary
                </h2>
              </div>
              <p className={`text-xs sm:text-sm leading-relaxed ${
                isLight ? 'text-slate-700' : 'text-slate-300'
              }`}>
                {cv.summary}
              </p>
            </section>

            {/* Work Experience */}
            <section className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-4 w-1 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full" />
                <h2 className={`text-sm sm:text-base font-bold uppercase tracking-wider ${
                  isLight ? 'text-slate-900' : 'text-white'
                }`}>
                  Work Experience
                </h2>
              </div>

              <div className="space-y-6">
                {cv.experience.map((exp, ei) => (
                  <div key={ei} className="relative pl-5 border-l-2 border-blue-500/40 pb-2">
                    <span className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-blue-500" />
                    
                    <div className="flex flex-wrap items-baseline justify-between gap-1 mb-1">
                      <h3 className={`text-sm font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>
                        {exp.company}
                      </h3>
                      <span className="text-[11px] font-semibold text-blue-400 font-mono">
                        {exp.period}
                      </span>
                    </div>

                    <p className="text-xs font-semibold text-slate-300 mb-2">
                      {exp.role} <span className="text-slate-500 font-normal">• {exp.location}</span>
                    </p>

                    <ul className="space-y-1.5 text-xs">
                      {exp.highlights.map((h, hi) => (
                        <li key={hi} className={`flex items-start gap-2 ${
                          isLight ? 'text-slate-600' : 'text-slate-400'
                        }`}>
                          <span className="text-blue-400 mt-1">•</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Featured Projects */}
            <section className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-4 w-1 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full" />
                <h2 className={`text-sm sm:text-base font-bold uppercase tracking-wider ${
                  isLight ? 'text-slate-900' : 'text-white'
                }`}>
                  Key Portfolio Projects
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {cv.featuredProjects.map((proj, pi) => (
                  <div 
                    key={pi}
                    className={`p-3.5 rounded-xl border text-xs flex flex-col justify-between ${
                      isLight 
                        ? 'bg-slate-50 border-slate-200' 
                        : 'bg-slate-900/60 border-slate-800'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-bold text-white text-xs">{proj.name}</h3>
                        <span className="text-[10px] text-blue-400 font-medium">{proj.clientLocation}</span>
                      </div>
                      <p className="text-[11px] text-slate-400 leading-snug mb-2">
                        {proj.description}
                      </p>
                    </div>
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[10px] text-blue-400 font-semibold hover:underline mt-1"
                    >
                      <span>Live Site</span>
                      <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-4 w-1 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full" />
                <h2 className={`text-sm sm:text-base font-bold uppercase tracking-wider ${
                  isLight ? 'text-slate-900' : 'text-white'
                }`}>
                  Education
                </h2>
              </div>

              <div className="space-y-4">
                {cv.education.map((edu, edI) => (
                  <div key={edI} className="flex items-start justify-between gap-3 text-xs">
                    <div>
                      <h3 className={`font-bold text-xs ${isLight ? 'text-slate-900' : 'text-white'}`}>
                        {edu.degree}
                      </h3>
                      <p className={`text-[11px] ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                        {edu.institution}
                      </p>
                    </div>
                    <span className="text-[11px] font-medium text-slate-400 font-mono shrink-0">
                      {edu.year}
                    </span>
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* Verification Footnote */}
          <div className="pt-6 mt-8 border-t border-slate-800/80 flex flex-wrap items-center justify-between text-[11px] text-slate-400 gap-2">
            <span>Portfolio & Interactive Work: <strong className="text-white">{cv.portfolioUrl.replace('https://', '').replace(/\/$/, '')}</strong></span>
            <span className="text-emerald-400 font-medium">✓ Verified Professional Credentials</span>
          </div>

        </main>

      </div>
    </div>
  );
};

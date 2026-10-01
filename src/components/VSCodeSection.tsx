import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  X, 
  Keyboard, 
  Terminal, 
  Code, 
  Zap, 
  ExternalLink, 
  Copy, 
  Check, 
  Sliders, 
  Maximize2,
  FileCode,
  Layers,
  Sparkles
} from 'lucide-react';

// Authentic Official Microsoft Visual Studio Code Vector Icon
export const VSCodeIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg 
    viewBox="0 0 256 256" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
    aria-label="Visual Studio Code"
  >
    <path d="M187.9 248.8c5.4 2.8 12.1 2.2 17-1.5l42.6-32.9c5.2-4 8.5-10.3 8.5-16.9V58.5c0-6.6-3.3-12.8-8.5-16.9l-42.6-32.9c-4.9-3.7-11.6-4.3-17-1.5-5.4 2.8-8.9 8.4-8.9 14.5v20.9L87.5 128l91.5 85.4v20.9c0 6.1 3.5 11.7 8.9 14.5z" fill="#0065A9"/>
    <path d="M190.5 42.6L79.4 128l111.1 85.4V42.6z" fill="#007ACC"/>
    <path d="M239.5 45.4l-42.6-32.9c-4.9-3.7-11.6-4.3-17-1.5-2.8 1.4-5 3.7-6.5 6.4l-94 72.8 30.1 23.3 128.4-98.3c1.1-.9 1.6-1.5 1.6-1.5v-8.3z" fill="#1F9CF0"/>
    <path d="M196.9 244.5c4.9-3.7 11.6-4.3 17-1.5l25.6-19.8-128.4-98.3-30.1 23.3 94 72.8c1.5 2.7 3.7 5 6.5 6.4 4.9 2.5 10.5 2.1 14.4-2.9z" fill="#0065A9"/>
    <path d="M16.5 75.3c-4.7-3.6-11.4-3.1-15.6 1.2-4.1 4.3-4.3 11-.5 15.6l44.4 35.9-44.4 35.9c-3.8 4.6-3.6 11.3.5 15.6 4.2 4.3 10.9 4.8 15.6 1.2l56.3-45.5c4.5-3.6 4.5-10.4 0-14L16.5 75.3z" fill="#007ACC"/>
  </svg>
);

export interface VSCodeShortcut {
  category: string;
  command: string;
  description: string;
  keys: string[];
}

export const VSCODE_SHORTCUTS: VSCodeShortcut[] = [
  // General
  { category: 'General', command: 'Show Command Palette', description: 'Access all commands, extensions and settings instantly', keys: ['Ctrl', 'Shift', 'P'] },
  { category: 'General', command: 'Quick Open, Go to File...', description: 'Instantly jump to any file in the workspace', keys: ['Ctrl', 'P'] },
  { category: 'General', command: 'New Window / Instance', description: 'Open a fresh VS Code workspace instance', keys: ['Ctrl', 'Shift', 'N'] },
  { category: 'General', command: 'Close Window / Instance', description: 'Close current VS Code window', keys: ['Ctrl', 'Shift', 'W'] },
  { category: 'General', command: 'User Settings', description: 'Open JSON / graphical settings panel', keys: ['Ctrl', ','] },
  { category: 'General', command: 'Keyboard Shortcuts', description: 'Open keybinding configuration manager', keys: ['Ctrl', 'K', 'Ctrl', 'S'] },

  // Basic Editing
  { category: 'Basic Editing', command: 'Cut Line (Empty Selection)', description: 'Quickly cut whole line to clipboard without selecting', keys: ['Ctrl', 'X'] },
  { category: 'Basic Editing', command: 'Copy Line (Empty Selection)', description: 'Quickly copy current line to clipboard', keys: ['Ctrl', 'C'] },
  { category: 'Basic Editing', command: 'Move Line Up / Down', description: 'Shift line position without cut-paste', keys: ['Alt', '↑ / ↓'] },
  { category: 'Basic Editing', command: 'Copy Line Up / Down', description: 'Duplicate current line above or below', keys: ['Shift', 'Alt', '↑ / ↓'] },
  { category: 'Basic Editing', command: 'Delete Line', description: 'Remove entire line cleanly', keys: ['Ctrl', 'Shift', 'K'] },
  { category: 'Basic Editing', command: 'Insert Line Below', description: 'Create new line below and place cursor', keys: ['Ctrl', 'Enter'] },
  { category: 'Basic Editing', command: 'Insert Line Above', description: 'Create new line above and place cursor', keys: ['Ctrl', 'Shift', 'Enter'] },
  { category: 'Basic Editing', command: 'Jump to Matching Bracket', description: 'Navigate between matching brackets and braces', keys: ['Ctrl', 'Shift', '\\'] },
  { category: 'Basic Editing', command: 'Indent / Outdent Line', description: 'Quickly adjust code indentation', keys: ['Ctrl', '] / ['] },
  { category: 'Basic Editing', command: 'Toggle Line Comment', description: 'Comment or uncomment current line or selection', keys: ['Ctrl', '/'] },
  { category: 'Basic Editing', command: 'Toggle Block Comment', description: 'Wrap selection in multi-line block comment', keys: ['Shift', 'Alt', 'A'] },
  { category: 'Basic Editing', command: 'Toggle Word Wrap', description: 'Wrap long code lines without adding linebreaks', keys: ['Alt', 'Z'] },
  { category: 'Basic Editing', command: 'Fold / Unfold Region', description: 'Collapse or expand code block', keys: ['Ctrl', 'Shift', '[ / ]'] },
  { category: 'Basic Editing', command: 'Fold All Regions', description: 'Collapse all functions and classes in file', keys: ['Ctrl', 'K', 'Ctrl', '0'] },
  { category: 'Basic Editing', command: 'Unfold All Regions', description: 'Expand all code regions', keys: ['Ctrl', 'K', 'Ctrl', 'J'] },

  // Multi-Cursor and Selection
  { category: 'Multi-Cursor', command: 'Insert Cursor (Multi-Cursor)', description: 'Add additional cursors anywhere in the file', keys: ['Alt', 'Click'] },
  { category: 'Multi-Cursor', command: 'Insert Cursor Above / Below', description: 'Span multiple vertical cursor lines', keys: ['Ctrl', 'Alt', '↑ / ↓'] },
  { category: 'Multi-Cursor', command: 'Undo Last Cursor Operation', description: 'Revert previous cursor position', keys: ['Ctrl', 'U'] },
  { category: 'Multi-Cursor', command: 'Insert Cursor at End of Selected Lines', description: 'Place cursors at each selected line end', keys: ['Shift', 'Alt', 'I'] },
  { category: 'Multi-Cursor', command: 'Select Current Line', description: 'Select entire active line', keys: ['Ctrl', 'L'] },
  { category: 'Multi-Cursor', command: 'Select All Occurrences of Selection', description: 'Simultaneously edit all instances across file', keys: ['Ctrl', 'Shift', 'L'] },
  { category: 'Multi-Cursor', command: 'Select All Occurrences of Current Word', description: 'Batch refactor word in active buffer', keys: ['Ctrl', 'F2'] },
  { category: 'Multi-Cursor', command: 'Add Selection to Next Find Match', description: 'Multi-select next matching word or phrase', keys: ['Ctrl', 'D'] },
  { category: 'Multi-Cursor', command: 'Expand Selection', description: 'Expand selection outward by syntactic node', keys: ['Shift', 'Alt', '→'] },
  { category: 'Multi-Cursor', command: 'Shrink Selection', description: 'Shrink selection inward by syntactic node', keys: ['Shift', 'Alt', '←'] },

  // Navigation
  { category: 'Navigation', command: 'Show All Symbols', description: 'Search and navigate workspace symbols', keys: ['Ctrl', 'T'] },
  { category: 'Navigation', command: 'Go to Line...', description: 'Jump to specific line and column number', keys: ['Ctrl', 'G'] },
  { category: 'Navigation', command: 'Go to Symbol...', description: 'Search symbols inside currently open file', keys: ['Ctrl', 'Shift', 'O'] },
  { category: 'Navigation', command: 'Show Problems Panel', description: 'Inspect TypeScript, linter and syntax errors', keys: ['Ctrl', 'Shift', 'M'] },
  { category: 'Navigation', command: 'Go to Next Error / Warning', description: 'Jump straight to next compile warning', keys: ['F8'] },
  { category: 'Navigation', command: 'Go to Previous Error / Warning', description: 'Jump to previous problem location', keys: ['Shift', 'F8'] },
  { category: 'Navigation', command: 'Navigate Editor Group History', description: 'Cycle through recent active tabs', keys: ['Ctrl', 'Shift', 'Tab'] },
  { category: 'Navigation', command: 'Go Back / Forward', description: 'Step through code navigation history', keys: ['Alt', '← / →'] },

  // Search and Replace
  { category: 'Search & Replace', command: 'Find in File', description: 'Open local buffer search widget', keys: ['Ctrl', 'F'] },
  { category: 'Search & Replace', command: 'Replace in File', description: 'Search and replace in active file', keys: ['Ctrl', 'H'] },
  { category: 'Search & Replace', command: 'Find Next / Previous', description: 'Navigate search query results', keys: ['F3', 'Shift', 'F3'] },
  { category: 'Search & Replace', command: 'Select All Occurrences of Find', description: 'Highlight and edit all search matches', keys: ['Alt', 'Enter'] },
  { category: 'Search & Replace', command: 'Toggle Regex / Case / Word', description: 'Switch advanced search pattern modes', keys: ['Alt', 'R / C / W'] },

  // Rich Languages Editing
  { category: 'Languages & IntelliSense', command: 'Trigger Suggestion (IntelliSense)', description: 'Display autocomplete and method hints', keys: ['Ctrl', 'Space'] },
  { category: 'Languages & IntelliSense', command: 'Trigger Parameter Hints', description: 'Show function arguments and signatures', keys: ['Ctrl', 'Shift', 'Space'] },
  { category: 'Languages & IntelliSense', command: 'Format Document', description: 'Auto-format codebase using Prettier / ESLint', keys: ['Shift', 'Alt', 'F'] },
  { category: 'Languages & IntelliSense', command: 'Format Selection', description: 'Format only highlighted code slice', keys: ['Ctrl', 'K', 'Ctrl', 'F'] },
  { category: 'Languages & IntelliSense', command: 'Go to Definition', description: 'Jump to function or variable declaration', keys: ['F12'] },
  { category: 'Languages & IntelliSense', command: 'Peek Definition', description: 'View source inline without leaving current line', keys: ['Alt', 'F12'] },
  { category: 'Languages & IntelliSense', command: 'Open Definition to the Side', description: 'Open definition in split editor column', keys: ['Ctrl', 'K', 'F12'] },
  { category: 'Languages & IntelliSense', command: 'Quick Fix', description: 'Apply suggested code refactoring / import fix', keys: ['Ctrl', '.'] },
  { category: 'Languages & IntelliSense', command: 'Show References', description: 'Inspect all usage locations of symbol', keys: ['Shift', 'F12'] },
  { category: 'Languages & IntelliSense', command: 'Rename Symbol', description: 'Safely refactor symbol across entire project', keys: ['F2'] },
  { category: 'Languages & IntelliSense', command: 'Trim Trailing Whitespace', description: 'Clean up unused spaces at end of lines', keys: ['Ctrl', 'K', 'Ctrl', 'X'] },

  // File & Editor Management
  { category: 'File & Editor', command: 'New File', description: 'Create new scratchpad or project file', keys: ['Ctrl', 'N'] },
  { category: 'File & Editor', command: 'Open File...', description: 'Browse and open file from disk', keys: ['Ctrl', 'O'] },
  { category: 'File & Editor', command: 'Save File', description: 'Write changes to disk', keys: ['Ctrl', 'S'] },
  { category: 'File & Editor', command: 'Save As...', description: 'Save current buffer with new name', keys: ['Ctrl', 'Shift', 'S'] },
  { category: 'File & Editor', command: 'Save All Files', description: 'Commit all dirty buffers to storage', keys: ['Ctrl', 'K', 'S'] },
  { category: 'File & Editor', command: 'Close Active Editor', description: 'Close current tab', keys: ['Ctrl', 'W'] },
  { category: 'File & Editor', command: 'Close All Editors', description: 'Clean workspace by closing all tabs', keys: ['Ctrl', 'K', 'Ctrl', 'W'] },
  { category: 'File & Editor', command: 'Reopen Closed Editor', description: 'Undo tab close', keys: ['Ctrl', 'Shift', 'T'] },
  { category: 'File & Editor', command: 'Split Editor', description: 'Split workspace into side-by-side columns', keys: ['Ctrl', '\\'] },
  { category: 'File & Editor', command: 'Focus 1st / 2nd / 3rd Group', description: 'Switch active focus between split editors', keys: ['Ctrl', '1 / 2 / 3'] },
  { category: 'File & Editor', command: 'Copy Path of Active File', description: 'Copy full file system path to clipboard', keys: ['Ctrl', 'K', 'P'] },
  { category: 'File & Editor', command: 'Reveal Active File in Explorer', description: 'Highlight current file in tree view', keys: ['Ctrl', 'K', 'R'] },

  // Display & Debug
  { category: 'Display & Terminal', command: 'Show Integrated Terminal', description: 'Toggle built-in bash / powershell console', keys: ['Ctrl', '`'] },
  { category: 'Display & Terminal', command: 'Create New Terminal Instance', description: 'Spawn additional shell session in split view', keys: ['Ctrl', 'Shift', '`'] },
  { category: 'Display & Terminal', command: 'Toggle Sidebar Visibility', description: 'Maximize coding area by hiding sidebar', keys: ['Ctrl', 'B'] },
  { category: 'Display & Terminal', command: 'Show Explorer Panel', description: 'Focus file tree and workspace hierarchy', keys: ['Ctrl', 'Shift', 'E'] },
  { category: 'Display & Terminal', command: 'Show Global Search Panel', description: 'Search across all workspace files', keys: ['Ctrl', 'Shift', 'F'] },
  { category: 'Display & Terminal', command: 'Show Source Control (Git)', description: 'View Git diffs, staged files & commit box', keys: ['Ctrl', 'Shift', 'G'] },
  { category: 'Display & Terminal', command: 'Show Extensions Panel', description: 'Manage plugins, linters and theme packs', keys: ['Ctrl', 'Shift', 'X'] },
  { category: 'Display & Terminal', command: 'Zen Mode (Distraction Free)', description: 'Enter pure fullscreen coding immersion', keys: ['Ctrl', 'K', 'Z'] },
  { category: 'Display & Terminal', command: 'Toggle Full Screen', description: 'Expand editor to complete monitor display', keys: ['F11'] },
  { category: 'Display & Terminal', command: 'Toggle Breakpoint', description: 'Set or clear debug breakpoint on active line', keys: ['F9'] },
  { category: 'Display & Terminal', command: 'Start / Continue Debugging', description: 'Launch Node.js or browser debugger', keys: ['F5'] },
  { category: 'Display & Terminal', command: 'Step Over / Step Into', description: 'Step through executing code instructions', keys: ['F10', 'F11'] },
];

export const VSCodeSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [copiedShortcut, setCopiedShortcut] = useState<string | null>(null);

  const categories = ['All', 'General', 'Basic Editing', 'Multi-Cursor', 'Navigation', 'Search & Replace', 'Languages & IntelliSense', 'File & Editor', 'Display & Terminal'];

  const filteredShortcuts = useMemo(() => {
    return VSCODE_SHORTCUTS.filter((sc) => {
      const matchesCategory = selectedCategory === 'All' || sc.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesCategory;
      
      const matchesSearch = 
        sc.command.toLowerCase().includes(q) ||
        sc.description.toLowerCase().includes(q) ||
        sc.category.toLowerCase().includes(q) ||
        sc.keys.some(k => k.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleCopyKeys = (keys: string[], command: string) => {
    const text = `${keys.join(' + ')} (${command})`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedShortcut(command);
      setTimeout(() => setCopiedShortcut(null), 2000);
    }
  };

  return (
    <>
      {/* ========================================================================= */}
      {/* Visual Studio Code Showcase Card (Inside Skills Section) */}
      {/* ========================================================================= */}
      <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-950/60 via-slate-900/90 to-cyan-950/50 border border-blue-500/30 backdrop-blur-xl shadow-2xl shadow-blue-950/40 relative overflow-hidden">
        {/* Glow backdrop */}
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-56 h-56 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="flex items-start sm:items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-600 border border-blue-400/40 flex items-center justify-center text-white shrink-0 shadow-lg shadow-blue-600/30 p-2.5">
              <VSCodeIcon className="w-full h-full" />
            </div>

            <div>
              <div className="flex items-center gap-2 flex-wrap mb-1">
                <span className="px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 text-[11px] font-bold border border-blue-500/30 uppercase tracking-wider flex items-center gap-1">
                  <Keyboard className="w-3 h-3" /> Microsoft VS Code Expert
                </span>
                <span className="text-emerald-400 text-xs font-semibold flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5" /> 98% Keystroke Mastery
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <span>Visual Studio Code Keyboard Shortcuts & Workflow</span>
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
                Expert-level developer velocity utilizing multi-cursor refactoring, Command Palette orchestration, regex stream find/replace, and terminal automation across enterprise React and TypeScript architectures.
              </p>

              {/* Quick shortcut pills */}
              <div className="mt-3 flex flex-wrap items-center gap-2">
                <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-900/90 border border-slate-700/80 text-[11px] text-slate-300 font-mono">
                  <span className="text-blue-400 font-bold">Ctrl+Shift+P</span>
                  <span className="text-slate-500">•</span>
                  <span>Palette</span>
                </div>
                <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-900/90 border border-slate-700/80 text-[11px] text-slate-300 font-mono">
                  <span className="text-blue-400 font-bold">Alt+Click / Ctrl+D</span>
                  <span className="text-slate-500">•</span>
                  <span>Multi-Cursor</span>
                </div>
                <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-900/90 border border-slate-700/80 text-[11px] text-slate-300 font-mono">
                  <span className="text-blue-400 font-bold">Shift+Alt+F</span>
                  <span className="text-slate-500">•</span>
                  <span>Format</span>
                </div>
                <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-900/90 border border-slate-700/80 text-[11px] text-slate-300 font-mono">
                  <span className="text-blue-400 font-bold">Ctrl+`</span>
                  <span className="text-slate-500">•</span>
                  <span>Terminal</span>
                </div>
              </div>

            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 text-white font-bold text-sm shadow-xl shadow-blue-600/30 hover:scale-105 active:scale-95 transition-all duration-300 border border-blue-400/30 group"
            >
              <Keyboard className="w-4 h-4 text-blue-200" />
              <span>Open Shortcuts Cheatsheet</span>
              <Maximize2 className="w-3.5 h-3.5 text-blue-200 group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* Interactive VS Code Shortcuts Cheatsheet Modal */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/90 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-5xl rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
            >
              {/* Modal Top Bar */}
              <div className="p-4 sm:p-5 bg-slate-950 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center p-1.5">
                    <VSCodeIcon className="w-full h-full" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base sm:text-lg flex items-center gap-2">
                      <span>Visual Studio Code Keyboard Shortcuts</span>
                      <span className="px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 text-[10px] font-mono font-bold border border-blue-500/30">
                        Windows Edition
                      </span>
                    </h3>
                    <p className="text-xs text-slate-400">
                      Official development keyboard bindings for rapid editing, navigation & multi-cursor workflows
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Search & Category Filter Bar */}
              <div className="p-4 bg-slate-900/90 border-b border-slate-800 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
                {/* Search Bar */}
                <div className="relative flex-1">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search shortcuts (e.g. comment, format, terminal, cursor, find)..."
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-blue-500 text-sm text-white placeholder-slate-500 outline-none transition-colors"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs"
                    >
                      Clear
                    </button>
                  )}
                </div>

                {/* Total count badge */}
                <span className="text-xs font-mono text-slate-400 px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 shrink-0 self-center">
                  Showing <strong className="text-blue-400">{filteredShortcuts.length}</strong> of {VSCODE_SHORTCUTS.length} shortcuts
                </span>
              </div>

              {/* Categories Pills */}
              <div className="px-4 py-2.5 bg-slate-950 border-b border-slate-800 overflow-x-auto flex items-center gap-1.5">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                      selectedCategory === cat
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Shortcuts Table / Grid */}
              <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-3 bg-[#080B11]">
                {filteredShortcuts.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-slate-400 text-sm">No shortcuts found matching "{searchQuery}".</p>
                    <button
                      type="button"
                      onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                      className="mt-3 text-xs text-blue-400 hover:underline"
                    >
                      Reset filters
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {filteredShortcuts.map((sc, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-2xl bg-slate-900/70 border border-slate-800/80 hover:border-blue-500/40 transition-all flex items-center justify-between gap-3 group"
                      >
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700/60 uppercase">
                              {sc.category}
                            </span>
                            <strong className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors truncate">
                              {sc.command}
                            </strong>
                          </div>
                          <p className="text-xs text-slate-400 line-clamp-1">
                            {sc.description}
                          </p>
                        </div>

                        {/* Styled Keyboard Keys */}
                        <div className="flex items-center gap-1 shrink-0">
                          <div className="flex items-center gap-1 flex-wrap justify-end">
                            {sc.keys.map((k, kIdx) => (
                              <kbd
                                key={kIdx}
                                className="px-2 py-1 rounded-md bg-slate-950 border border-slate-700 text-blue-400 font-mono text-[11px] font-bold shadow-inner"
                              >
                                {k}
                              </kbd>
                            ))}
                          </div>

                          <button
                            type="button"
                            onClick={() => handleCopyKeys(sc.keys, sc.command)}
                            title="Copy shortcut"
                            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors ml-1"
                          >
                            {copiedShortcut === sc.command ? (
                              <Check className="w-3.5 h-3.5 text-emerald-400" />
                            ) : (
                              <Copy className="w-3.5 h-3.5" />
                            )}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Modal Footer */}
              <div className="p-4 bg-slate-950 border-t border-slate-800 flex flex-wrap items-center justify-between text-xs text-slate-400 gap-2">
                <span>
                  Source: <strong className="text-white">aka.ms/vscodekeybindings</strong> • Windows Keyboard Bindings
                </span>
                <span className="text-emerald-400 font-semibold">
                  ✓ 100% Integrated into Rizwan's Daily Development Velocity
                </span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

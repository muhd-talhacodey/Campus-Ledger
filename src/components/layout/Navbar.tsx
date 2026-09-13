import React, { useState } from 'react';
import { GitHubIcon } from '../ui/Icons';
import { StudentProfile } from '../../types';
import { 
  ShieldCheck, 
  Terminal, 
  Menu, 
  X, 
  PlusCircle,
  LayoutDashboard,
  Compass,
  CheckCircle2,
  ChevronRight,
  Moon,
  Sun
} from 'lucide-react';

interface NavbarProps {
  currentView: 'landing' | 'dashboard';
  setCurrentView: (view: 'landing' | 'dashboard') => void;
  student: StudentProfile;
  onOpenAuthModal: () => void;
  onOpenPostModal: () => void;
  onOpenVerifyModal: () => void;
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  setCurrentView,
  student,
  onOpenAuthModal,
  onOpenPostModal,
  onOpenVerifyModal,
  theme,
  onToggleTheme,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    if (currentView !== 'landing') {
      setCurrentView('landing');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const handleBountyFeedClick = () => {
    if (currentView !== 'dashboard') {
      setCurrentView('dashboard');
    }
    setTimeout(() => {
      const el = document.getElementById('bounty-feed-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/[0.08] bg-[#0A0A0C]/90 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-4">
        
        {/* ================= LEFT: Brand & Logo ================= */}
        <div className="flex items-center gap-4 flex-shrink-0">
          <button 
            onClick={() => { 
              setCurrentView('landing'); 
              window.scrollTo({ top: 0, behavior: 'smooth' }); 
            }}
            className="flex items-center gap-3 text-left group focus:outline-none cursor-pointer"
          >
            {/* Logo Icon */}
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-[#14141A] border border-white/10 group-hover:border-emerald-400/50 transition-all duration-300">
              <Terminal className="w-5 h-5 text-emerald-400" />
              <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
              </span>
            </div>

            {/* Brand Text */}
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5 font-bold tracking-tight text-white text-base sm:text-lg group-hover:text-gold-200 transition-colors">
                <span>Campus Ledger</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              </div>
              <span className="text-[10px] text-zinc-400 font-mono tracking-widest uppercase">
                Real-Time Bounty Node
              </span>
            </div>
          </button>
        </div>

        {/* ================= CENTER: Organized Navigation Pill ================= */}
        <nav className="hidden md:flex items-center bg-[#121216]/90 border border-white/[0.08] rounded-full p-1 shadow-inner text-xs font-medium">
          {/* Overview / Landing Tab */}
          <button
            onClick={() => {
              setCurrentView('landing');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`px-3.5 py-1.5 rounded-full transition-all flex items-center gap-1.5 cursor-pointer ${
              currentView === 'landing'
                ? 'bg-gold-500/20 text-gold-300 border border-gold-500/40 shadow-gold-sm font-semibold'
                : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
            }`}
          >
            <Compass className="w-3.5 h-3.5" />
            <span>Overview</span>
          </button>

          {/* Problem Link (Smooth Scroll) */}
          <button
            onClick={() => handleNavClick('problem')}
            className="px-3.5 py-1.5 rounded-full text-zinc-400 hover:text-white hover:bg-white/[0.04] transition-all cursor-pointer"
          >
            Problem
          </button>

          {/* Solution Link (Smooth Scroll) */}
          <button
            onClick={() => handleNavClick('solution')}
            className="px-3.5 py-1.5 rounded-full text-zinc-400 hover:text-white hover:bg-white/[0.04] transition-all cursor-pointer"
          >
            Solution
          </button>

          {/* Bounty Board / Dashboard Tab */}
          <button
            onClick={handleBountyFeedClick}
            className={`px-3.5 py-1.5 rounded-full transition-all flex items-center gap-1.5 cursor-pointer ${
              currentView === 'dashboard'
                ? 'bg-gold-500/20 text-gold-300 border border-gold-500/40 shadow-gold-sm font-semibold'
                : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
            }`}
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
            <span>Bounty Board</span>
          </button>

          {/* Verify Badge Modal Trigger */}
          <button
            onClick={onOpenVerifyModal}
            className="px-3.5 py-1.5 rounded-full text-zinc-400 hover:text-gold-300 hover:bg-white/[0.04] transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-gold-400" />
            <span>Verify Badge</span>
          </button>
        </nav>

        {/* ================= RIGHT: Unified Action Group ================= */}
        <div className="flex items-center gap-3 flex-shrink-0">
          
          {/* Post Task Button */}
          <button
            onClick={onOpenPostModal}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 h-10 rounded-xl text-xs font-semibold text-zinc-200 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-gold-500/40 hover:text-gold-300 transition-all cursor-pointer"
          >
            <PlusCircle className="w-3.5 h-3.5 text-gold-400" />
            <span>Post Task</span>
          </button>

          {/* GitHub OAuth Authentication Button */}
          <button
            onClick={onOpenAuthModal}
            className="group inline-flex items-center gap-2.5 px-3.5 sm:px-4 h-10 rounded-xl bg-gradient-to-b from-[#1C1C22] to-[#121216] border border-gold-500/40 hover:border-gold-400 text-white font-medium text-xs sm:text-sm shadow-gold-sm hover:shadow-gold-md transition-all cursor-pointer"
            title="Authenticate with GitHub"
          >
            <GitHubIcon className="w-4 h-4 text-zinc-200 group-hover:text-gold-300 transition-colors flex-shrink-0" />
            
            <div className="flex items-center gap-2">
              <span className="tracking-tight hidden md:inline font-mono text-xs">
                {student ? `@${student.githubUsername}` : 'Log in with GitHub'}
              </span>
              <span className="tracking-tight md:hidden font-mono text-xs">
                {student ? `@${student.githubUsername.slice(0, 7)}..` : 'GitHub'}
              </span>
              
              {student && (
                <span className="w-2 h-2 rounded-full bg-emerald-400 ring-2 ring-emerald-500/30 flex-shrink-0" />
              )}
            </div>
          </button>

          <button
            onClick={onToggleTheme}
            className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-gold-500/40 text-zinc-200 transition-all cursor-pointer"
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-gold-300" /> : <Moon className="w-4 h-4 text-zinc-700" />}
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10 text-zinc-400 hover:text-white rounded-xl bg-white/[0.04] border border-white/10"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>

      </div>

      {/* ================= Mobile Navigation Drawer ================= */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-3 pb-6 border-b border-white/10 bg-[#0E0E14] space-y-3 animate-fadeIn">
          {/* Main View Toggle */}
          <div className="grid grid-cols-2 gap-2 p-1 bg-black/40 rounded-xl border border-white/5">
            <button
              onClick={() => { 
                setCurrentView('landing'); 
                setMobileMenuOpen(false); 
              }}
              className={`py-2 text-center rounded-lg text-xs font-semibold transition-all ${
                currentView === 'landing' 
                  ? 'bg-gold-500 text-black shadow-gold-sm' 
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => { 
                setCurrentView('dashboard'); 
                setMobileMenuOpen(false); 
              }}
              className={`py-2 text-center rounded-lg text-xs font-semibold transition-all ${
                currentView === 'dashboard' 
                  ? 'bg-gold-500 text-black shadow-gold-sm' 
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Student Dashboard
            </button>
          </div>

          {/* Navigation Links */}
          <div className="space-y-1 pt-1">
            <button 
              onClick={() => handleNavClick('problem')}
              className="w-full text-left py-2.5 px-3 rounded-lg text-xs font-medium text-zinc-300 hover:bg-white/5 hover:text-gold-300 transition-colors flex items-center justify-between"
            >
              <span>Problem Statement</span>
              <ChevronRight className="w-3.5 h-3.5 text-zinc-500" />
            </button>
            <button 
              onClick={() => handleNavClick('solution')}
              className="w-full text-left py-2.5 px-3 rounded-lg text-xs font-medium text-zinc-300 hover:bg-white/5 hover:text-gold-300 transition-colors flex items-center justify-between"
            >
              <span>3-Step Micro-Bounty Lifecycle</span>
              <ChevronRight className="w-3.5 h-3.5 text-zinc-500" />
            </button>
            <button 
              onClick={handleBountyFeedClick}
              className="w-full text-left py-2.5 px-3 rounded-lg text-xs font-medium text-zinc-300 hover:bg-white/5 hover:text-gold-300 transition-colors flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>Live Bounty Feed</span>
              </div>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-500/30">
                Active
              </span>
            </button>
            <button 
              onClick={() => { 
                onOpenVerifyModal(); 
                setMobileMenuOpen(false); 
              }}
              className="w-full text-left py-2.5 px-3 rounded-lg text-xs font-medium text-zinc-300 hover:bg-white/5 hover:text-gold-300 transition-colors flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-gold-400" />
                <span>Verify Badge SHA-256</span>
              </div>
              <ChevronRight className="w-3.5 h-3.5 text-zinc-500" />
            </button>
          </div>

          {/* Mobile Post Task Action */}
          <div className="pt-2 border-t border-white/5">
            <button
              onClick={() => { 
                onOpenPostModal(); 
                setMobileMenuOpen(false); 
              }}
              className="w-full py-2.5 px-3 rounded-xl text-xs font-semibold bg-gold-500/10 border border-gold-500/40 text-gold-300 hover:bg-gold-500/20 text-center flex items-center justify-center gap-1.5 transition-all"
            >
              <PlusCircle className="w-3.5 h-3.5 text-gold-400" />
              <span>Post a Department Task</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

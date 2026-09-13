import React from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Terminal, 
  DollarSign, 
  CheckCircle2, 
  GitPullRequest,
  Flame,
  Award,
  Clock
} from 'lucide-react';
import { GitHubIcon } from '../ui/Icons';

interface HeroSectionProps {
  onExploreBounties: () => void;
  onPostTask: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreBounties,
  onPostTask,
}) => {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-gradient-to-tr from-cyan-500/10 via-emerald-400/5 to-transparent blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-emerald-500/5 blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Eyebrow Tag */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#16161D] border border-gold-500/30 text-gold-300 text-xs font-mono shadow-gold-sm hover:border-gold-400 transition-all">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-400"></span>
            </span>
            <span>Human-built campus micro-internship marketplace</span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
            Turn Campus Micro-Problems into{' '}
            <span className="gold-gradient-text drop-shadow-[0_4px_24px_rgba(212,175,55,0.3)]">
              Verified Student Credentials.
            </span>
          </h1>

          {/* Sub-headline */}
          <p className="text-lg sm:text-xl text-zinc-300 max-w-2xl mx-auto font-normal leading-relaxed">
            A real-time micro-internship ledger where university departments post technical tasks and students build verified, proof-of-work profiles.
          </p>

          {/* Dual CTAs */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Primary Gold Glowing Button */}
            <button
              onClick={onExploreBounties}
              className="w-full sm:w-auto px-8 py-4 rounded-xl gold-glow-btn font-bold text-sm tracking-wide flex items-center justify-center gap-2 group cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-black group-hover:rotate-12 transition-transform" />
              <span>Explore Campus Bounties</span>
              <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Secondary White Outline Button */}
            <button
              onClick={onPostTask}
              className="w-full sm:w-auto px-7 py-4 rounded-xl bg-[#121216]/80 hover:bg-white/[0.08] text-white border border-white/20 hover:border-gold-400/50 font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 group"
            >
              <span>Post a Department Task</span>
              <span className="text-xs px-2 py-0.5 rounded bg-white/10 text-gold-300 font-mono">2-5h Scope</span>
            </button>
          </div>
        </div>

        {/* Real-Time Live Metrics Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          <div className="glass-card p-5 rounded-2xl text-center border border-gold-500/20">
            <div className="flex items-center justify-center gap-1 text-gold-400 mb-1">
              <DollarSign className="w-4 h-4" />
              <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight">$18,450+</span>
            </div>
            <p className="text-xs text-zinc-400 font-medium">Directly Disbursed to Students</p>
          </div>

          <div className="glass-card p-5 rounded-2xl text-center border border-gold-500/20">
            <div className="flex items-center justify-center gap-1 text-gold-400 mb-1">
              <CheckCircle2 className="w-4 h-4" />
              <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight">412</span>
            </div>
            <p className="text-xs text-zinc-400 font-medium">Campus Tasks Resolved</p>
          </div>

          <div className="glass-card p-5 rounded-2xl text-center border border-gold-500/20">
            <div className="flex items-center justify-center gap-1 text-gold-400 mb-1">
              <ShieldCheck className="w-4 h-4" />
              <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight">99.2%</span>
            </div>
            <p className="text-xs text-zinc-400 font-medium">Peer Review Verification Rate</p>
          </div>

          <div className="glass-card p-5 rounded-2xl text-center border border-gold-500/20">
            <div className="flex items-center justify-center gap-1 text-gold-400 mb-1">
              <Flame className="w-4 h-4" />
              <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight">18</span>
            </div>
            <p className="text-xs text-zinc-400 font-medium">University Departments Enrolled</p>
          </div>
        </div>

        {/* High-Performance Visual Graphic: Holographic Ledger Card Preview */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="relative rounded-2xl p-1 bg-gradient-to-b from-gold-500/40 via-gold-500/10 to-transparent shadow-2xl">
            <div className="rounded-2xl bg-[#0F0F14] p-5 sm:p-7 border border-white/[0.06] overflow-hidden">
              
              {/* Header bar of visual card */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-white/[0.08]">
                <div className="flex items-center gap-3">
                  <div className="flex space-x-1.5">
                    <span className="w-3 h-3 rounded-full bg-rose-500/70"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500/70"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500/70"></span>
                  </div>
                  <span className="text-xs font-mono text-zinc-400">ledger-pipeline://node-01.campus-ledger.edu</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-950/60 text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    120 FPS READY
                  </span>
                </div>
              </div>

              {/* Holographic Ledger Visual Body */}
              <div className="pt-6 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                {/* Step Preview 1: Scoped Task */}
                <div className="p-4 rounded-xl bg-[#14141A] border border-white/5 space-y-2.5 hover:border-gold-500/30 transition-all">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono text-gold-400 uppercase tracking-wider">Scoped Task</span>
                    <span className="text-xs text-zinc-400 font-mono flex items-center gap-1">
                      <Clock className="w-3 h-3 text-gold-400" /> 3 hrs
                    </span>
                  </div>
                  <h4 className="text-sm font-semibold text-white">CS Society Portal Bug</h4>
                  <p className="text-xs text-zinc-400 line-clamp-2">Refactor event registration validation with responsive grid & Webhook alerts.</p>
                  <div className="text-xs font-mono text-gold-300 font-bold">$50 USD Escrowed</div>
                </div>

                {/* Arrow Transition */}
                <div className="p-4 rounded-xl bg-[#14141A] border border-white/5 space-y-2.5 hover:border-gold-500/30 transition-all">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider">GitHub Oracle</span>
                    <GitPullRequest className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <h4 className="text-sm font-semibold text-white">PR #42 Merged</h4>
                  <div className="text-xs text-zinc-400 font-mono space-y-1">
                    <div className="text-emerald-400">+148 additions / -32 deletions</div>
                    <div>Passed 14 automated tests</div>
                  </div>
                  <div className="text-[11px] text-zinc-400 font-mono truncate">Reviewed by Prof. Anderson</div>
                </div>

                {/* Step Preview 3: Minted Credential */}
                <div className="p-4 rounded-xl bg-gradient-to-br from-gold-950/40 via-[#14141A] to-[#14141A] border border-gold-500/40 space-y-2.5 shadow-gold-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono text-gold-300 uppercase tracking-wider font-semibold">Minted Badge</span>
                    <Award className="w-4 h-4 text-gold-400" />
                  </div>
                  <h4 className="text-sm font-semibold text-white">Proof-of-Work Credential</h4>
                  <div className="p-2 rounded bg-black/50 border border-gold-500/20 text-[10px] font-mono text-gold-300/90 truncate">
                    SHA256: 0x8f2d6c31b94a...ef99c15e
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-emerald-400 font-semibold">Verified & Stamped</span>
                    <span className="text-[11px] text-zinc-400 font-mono">100% On-Chain</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

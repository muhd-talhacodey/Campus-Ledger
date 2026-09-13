import React from 'react';
import { StudentProfile } from '../../types';
import { GitHubIcon } from '../ui/Icons';
import { 
  Award, 
  DollarSign, 
  CheckCircle2, 
  Zap, 
  GitCommit, 
  ExternalLink, 
  ShieldCheck, 
  Flame, 
  PlusCircle,
  Sparkles,
  Users
} from 'lucide-react';

interface DashboardHeaderProps {
  student: StudentProfile;
  onOpenAuthModal: () => void;
  onOpenPostModal: () => void;
  onOpenVerifyModal: () => void;
}

export const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  student,
  onOpenAuthModal,
  onOpenPostModal,
  onOpenVerifyModal,
}) => {
  return (
    <div className="space-y-6 pt-6 pb-8">
      
      {/* 1. Developer Identity Header & System Lead Credential */}
      <div className="rounded-2xl p-0.5 bg-gradient-to-r from-gold-500/40 via-gold-400/20 to-gold-500/40 shadow-gold-sm">
        <div className="rounded-2xl bg-[#111116] px-5 py-4 border border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="w-10 h-10 rounded-xl bg-gold-500/15 border border-gold-500/40 flex items-center justify-center text-gold-400 shadow-gold-sm flex-shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-gold-400 font-bold bg-gold-500/10 px-2 py-0.5 rounded border border-gold-500/30">
                  SYSTEM ARCHITECT CREDENTIAL
                </span>
                <span className="text-zinc-500 text-xs hidden sm:inline">•</span>
                <span className="text-[11px] font-mono text-zinc-400 hidden sm:inline">Engine: Reactive 120 FPS</span>
              </div>
              <h2 className="text-sm sm:text-base font-bold text-white tracking-tight mt-0.5">
                Platform Lead & Architect: <span className="text-gold-300">Muhammad Talha Nayyar</span>
              </h2>
            </div>
          </div>

          {/* Ledger Status Pill */}
          <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end text-xs font-mono">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/50 border border-white/10 text-zinc-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Ledger Node: Active</span>
            </div>
            <button
              onClick={onOpenPostModal}
              className="px-3.5 py-1.5 rounded-lg gold-glow-btn text-xs font-bold text-black flex items-center gap-1.5 cursor-pointer"
            >
              <PlusCircle className="w-3.5 h-3.5" />
              <span>Post Task</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. Connected Student Profile & Performance Ledger */}
      <div className="glass-card rounded-2xl p-6 sm:p-8 border border-gold-500/20 shadow-xl">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-white/[0.08]">
          
          {/* Avatar & Student Details */}
          <div className="flex items-start sm:items-center gap-4">
            <div className="relative">
              <img
                src={student.avatarUrl}
                alt={student.name}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover border-2 border-gold-400/50 shadow-gold-sm"
              />
              <div className="absolute -bottom-1 -right-1 p-1 rounded-full bg-[#121216] border border-gold-500/40">
                <GitHubIcon className="w-4 h-4 text-white" />
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                  {student.name}
                </h1>
                <a
                  href={`https://github.com/${student.githubUsername}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-gold-400 hover:text-gold-300 flex items-center gap-1 bg-gold-500/10 px-2 py-0.5 rounded border border-gold-500/30"
                >
                  <span>@{student.githubUsername}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <p className="text-xs sm:text-sm text-zinc-400">
                {student.major} • <span className="text-zinc-300">{student.university}</span> ({student.year})
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-1 text-xs font-mono text-zinc-400">
                <span>{student.publicRepos} Public Repos</span>
                <span>•</span>
                <span className="flex items-center gap-1 text-gold-400 font-semibold">
                  <Flame className="w-3.5 h-3.5" />
                  {student.commitStreakDays} Day Streak
                </span>
                <span>•</span>
                <span className="text-emerald-400 font-semibold">
                  {student.tasksCompleted} Micro-Bounties Completed
                </span>
              </div>
            </div>
          </div>

          {/* Action Buttons: Switch Profile / Verify Badge */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenAuthModal}
              className="px-4 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-gold-500/40 text-xs font-semibold text-white transition-all flex items-center gap-2"
            >
              <GitHubIcon className="w-4 h-4 text-gold-400" />
              <span>Switch GitHub Profile</span>
            </button>

            <button
              onClick={onOpenVerifyModal}
              className="px-4 py-2.5 rounded-xl bg-[#181820] hover:bg-[#20202A] border border-gold-500/40 text-xs font-semibold text-gold-300 transition-all flex items-center gap-2 shadow-gold-sm"
            >
              <ShieldCheck className="w-4 h-4 text-gold-400" />
              <span>Cryptographic Verifier</span>
            </button>
          </div>
        </div>

        {/* Real-Time Student Ledger Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
          <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-1">
            <div className="text-xs text-zinc-400 font-mono flex items-center gap-1.5">
              <DollarSign className="w-3.5 h-3.5 text-emerald-400" />
              <span>Earned Escrow</span>
            </div>
            <div className="text-2xl font-extrabold text-emerald-400 font-mono">
              ${student.earnedUSD}
              <span className="text-xs text-zinc-500 font-normal ml-1">USD</span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-1">
            <div className="text-xs text-zinc-400 font-mono flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-gold-400" />
              <span>Gift Cards</span>
            </div>
            <div className="text-2xl font-extrabold text-gold-400 font-mono">
              ${student.earnedGiftCards}
              <span className="text-xs text-zinc-500 font-normal ml-1">Gift Cards</span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-1">
            <div className="text-xs text-zinc-400 font-mono flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
              <span>Tasks Verified</span>
            </div>
            <div className="text-2xl font-extrabold text-white font-mono">
              {student.tasksCompleted}
              <span className="text-xs text-zinc-500 font-normal ml-1">Bounties</span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-1">
            <div className="text-xs text-zinc-400 font-mono flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-gold-400" />
              <span>Reputation Score</span>
            </div>
            <div className="text-2xl font-extrabold text-gold-300 font-mono">
              {student.reputationScore}
              <span className="text-xs text-zinc-500 font-normal ml-1">/ 100</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

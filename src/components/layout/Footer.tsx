import React from 'react';
import { Terminal, Award, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onOpenVerifyModal: () => void;
  onOpenPostModal: () => void;
  onNavigateDashboard: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenVerifyModal,
  onOpenPostModal,
  onNavigateDashboard,
}) => {
  return (
    <footer className="w-full border-t border-white/[0.08] bg-[#0A0A0C] text-zinc-400 text-sm mt-24">
      {/* Top Banner: Architect & Lead Profile Highlight */}
      <div className="border-b border-white/[0.06] bg-[#0F0F14]/70 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 shadow-gold-sm">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase tracking-wider text-gold-400 font-mono font-semibold">System Architect</span>
                <span className="text-zinc-600">•</span>
                <span className="text-xs text-zinc-400 font-mono">ID: ARCH-MTN-2026</span>
              </div>
              <p className="text-sm font-semibold text-white tracking-tight">
                Platform Lead & Architect: <span className="text-gold-300">Muhammad Talha Nayyar</span>
              </p>
            </div>
          </div>

          <div className="text-xs font-mono text-zinc-400">
            Built and refined by Muhammad Talha Nayyar
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_auto] gap-8 md:items-start">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gold-500/20 border border-gold-400/40 flex items-center justify-center text-gold-400">
              <Terminal className="w-4 h-4" />
            </div>
            <span className="text-lg font-bold text-white tracking-tight">
              Campus Ledger
              <span className="text-gold-400 ml-1">.</span>
            </span>
          </div>
          <p className="text-xs text-zinc-400 leading-relaxed max-w-md">
            The Micro-Internship & Real-Time Campus Problem Bounty Ledger. Empowering university departments to convert technical backlogs into verified, cryptographically signed student credentials.
          </p>
        </div>

        <div className="md:justify-self-end md:text-right">
          <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-300 font-semibold mb-3">
            Platform Protocol
          </h4>
          <ul className="space-y-2 text-xs md:flex md:flex-col md:items-end">
            <li>
              <button onClick={onNavigateDashboard} className="hover:text-gold-300 transition-colors flex items-center gap-1">
                <span>Campus Bounty Board</span>
                <ArrowUpRight className="w-3 h-3 text-zinc-500" />
              </button>
            </li>
            <li>
              <button onClick={onOpenVerifyModal} className="hover:text-gold-300 transition-colors flex items-center gap-1">
                <span>Cryptographic Badge Verifier</span>
                <ArrowUpRight className="w-3 h-3 text-zinc-500" />
              </button>
            </li>
            <li>
              <button onClick={onOpenPostModal} className="hover:text-gold-300 transition-colors flex items-center gap-1">
                <span>Department Task Escrow</span>
                <ArrowUpRight className="w-3 h-3 text-zinc-500" />
              </button>
            </li>
            <li>
              <span className="text-zinc-500">Peer Code Review Protocols</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/[0.05] py-6 text-center text-xs text-zinc-500">
        <p>
          © 2026 Campus Ledger • The Micro-Internship & Real-Time Campus Problem Bounty Ledger. Designed for University Excellence.
        </p>
      </div>
    </footer>
  );
};

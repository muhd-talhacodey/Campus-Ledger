import React, { useState } from 'react';
import { BadgeItem, StudentProfile } from '../../types';
import { 
  X, 
  ShieldCheck, 
  CheckCircle2, 
  ExternalLink, 
  Copy, 
  Check, 
  Hash, 
  Terminal, 
  Award,
  Layers,
  Search
} from 'lucide-react';
import { GitHubIcon } from '../ui/Icons';

interface VerifyModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedBadge?: BadgeItem | null;
  allBadges: BadgeItem[];
  student: StudentProfile;
}

export const VerifyModal: React.FC<VerifyModalProps> = ({
  isOpen,
  onClose,
  selectedBadge,
  allBadges,
  student,
}) => {
  if (!isOpen) return null;

  const [activeBadge, setActiveBadge] = useState<BadgeItem>(
    selectedBadge || allBadges[0] || {
      id: 'BADGE-SHA256-085',
      bountyId: 'BOUNTY-2026-085',
      title: 'AI Research Lab GPU Queue Dashboard WebSocket Connector',
      department: 'AI & Robotics Institute',
      date: 'Sept 11, 2026',
      hash: '0x8f2d6c31b94a71ef99c15e219ba48d30e87b7a91',
      prNumber: 18,
      prUrl: 'https://github.com/campus-ledger/ai-lab-monitor/pull/18',
      tags: ['WebSockets', 'Chart.js', 'Python'],
      hours: 4,
      reward: '$100 USD',
      peerReviewer: 'Dr. Elena Rostova (AI Lead)'
    }
  );

  const [copied, setCopied] = useState(false);

  const handleCopyHash = () => {
    navigator.clipboard.writeText(activeBadge.hash);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-2xl rounded-2xl bg-[#121216] border border-gold-500/40 shadow-gold-glow overflow-hidden my-8">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.08] bg-[#16161D]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-gold-400" />
            <h3 className="text-sm font-bold text-white">Cryptographic Proof-of-Work Verifier</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          
          {/* Badge Switcher if multiple exist */}
          {allBadges.length > 1 && (
            <div className="space-y-2">
              <label className="text-xs font-mono text-zinc-400 uppercase tracking-wider font-semibold">
                Select Credential to Verify:
              </label>
              <div className="flex flex-wrap gap-2">
                {allBadges.map((b) => (
                  <button
                    key={b.id}
                    onClick={() => setActiveBadge(b)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                      activeBadge.id === b.id
                        ? 'bg-gold-500 text-black font-bold shadow-gold-sm'
                        : 'bg-white/5 text-zinc-400 hover:text-white border border-white/5'
                    }`}
                  >
                    {b.id}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Verification Status Banner */}
          <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/40 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 flex-shrink-0">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-white flex items-center gap-2">
                  <span>Cryptographic Proof Status: VALID</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                </div>
                <div className="text-[11px] text-zinc-400 font-mono">
                  Merkle Block #491,029 • Root Match Confirmed
                </div>
              </div>
            </div>

            <div className="hidden sm:block text-right">
              <div className="text-[10px] font-mono text-zinc-500 uppercase">Verification Oracle</div>
              <div className="text-xs font-bold text-gold-400 font-mono">CAMPUS-LEDGER-V2</div>
            </div>
          </div>

          {/* Detailed Verification Ledger Fields */}
          <div className="space-y-3 font-mono text-xs">
            {/* Hash Container */}
            <div className="p-3.5 rounded-xl bg-black/60 border border-white/10 space-y-1">
              <div className="flex items-center justify-between text-[11px] text-zinc-400">
                <span className="flex items-center gap-1.5 text-gold-400">
                  <Hash className="w-3.5 h-3.5" />
                  <span>SHA-256 Digest</span>
                </span>
                <button
                  onClick={handleCopyHash}
                  className="flex items-center gap-1 text-[10px] text-gold-400 hover:text-gold-300"
                >
                  {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{copied ? 'Copied!' : 'Copy Hash'}</span>
                </button>
              </div>
              <div className="text-white font-bold break-all bg-white/[0.03] p-2 rounded border border-white/5">
                {activeBadge.hash}
              </div>
            </div>

            {/* Attributes Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-1">
                <div className="text-[10px] text-zinc-500 uppercase">Student Subject</div>
                <div className="text-zinc-200 font-bold">{student.name}</div>
                <div className="text-[11px] text-zinc-400">@{student.githubUsername}</div>
              </div>

              <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-1">
                <div className="text-[10px] text-zinc-500 uppercase">Verifying Department</div>
                <div className="text-zinc-200 font-bold">{activeBadge.department}</div>
                <div className="text-[11px] text-zinc-400">Reviewer: {activeBadge.peerReviewer}</div>
              </div>

              <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-1">
                <div className="text-[10px] text-zinc-500 uppercase">Scoped Contribution</div>
                <div className="text-zinc-200 font-bold">{activeBadge.hours} Hours Scoped</div>
                <div className="text-[11px] text-emerald-400 font-semibold">{activeBadge.reward}</div>
              </div>

              <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-1">
                <div className="text-[10px] text-zinc-500 uppercase">GitHub PR Source</div>
                <a
                  href={activeBadge.prUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold-400 hover:underline flex items-center gap-1 font-bold"
                >
                  <span>Pull Request #{activeBadge.prNumber}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <div className="text-[11px] text-zinc-400">Commit signature: GPG Verified</div>
              </div>
            </div>
          </div>

          {/* Visual Digital Signature Seal */}
          <div className="p-4 rounded-xl bg-gradient-to-r from-[#171720] via-[#121216] to-[#171720] border border-gold-500/30 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Award className="w-6 h-6 text-gold-400" />
              <div>
                <div className="text-xs font-bold text-white">Cryptographically Signed Proof-of-Work</div>
                <div className="text-[10px] text-zinc-400 font-mono">Issued by Campus Ledger Consortium</div>
              </div>
            </div>

            <div className="text-right font-mono text-[11px] text-emerald-400 font-semibold">
              ✓ Tamper Evident
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 border-t border-white/[0.08] bg-[#0E0E12] flex items-center justify-between text-xs text-zinc-400 font-mono">
          <span>Campus Ledger Protocol v2.4</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white font-medium transition-colors"
          >
            Close Inspector
          </button>
        </div>

      </div>
    </div>
  );
};

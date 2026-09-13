import React, { useState } from 'react';
import { Bounty, StudentProfile } from '../../types';
import { StatusBadge, DifficultyBadge } from '../ui/Badge';
import { GitHubIcon } from '../ui/Icons';
import { triggerGoldConfetti } from '../ui/Confetti';
import { 
  X, 
  Clock, 
  DollarSign, 
  Zap, 
  GitPullRequest, 
  CheckCircle2, 
  ShieldCheck, 
  FileCode2, 
  Sparkles,
  ArrowRight,
  Award,
  Loader2,
  AlertCircle
} from 'lucide-react';

interface ClaimSubmitModalProps {
  bounty: Bounty | null;
  student: StudentProfile;
  onClose: () => void;
  onSubmitPR: (bountyId: string, prUrl: string) => void;
  onVerifyBadge: (bounty: Bounty) => void;
}

export const ClaimSubmitModal: React.FC<ClaimSubmitModalProps> = ({
  bounty,
  student,
  onClose,
  onSubmitPR,
  onVerifyBadge,
}) => {
  if (!bounty) return null;

  const [prUrl, setPrUrl] = useState(
    bounty.prUrl || `https://github.com/campus-ledger/${bounty.id.toLowerCase()}/pull/12`
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [pipelineStep, setPipelineStep] = useState<0 | 1 | 2 | 3>(0);
  const [completedSuccess, setCompletedSuccess] = useState(false);

  const handleSimulateSubmit = () => {
    setIsSubmitting(true);
    setPipelineStep(1);

    // Step 1: Automated CI Linting
    setTimeout(() => {
      setPipelineStep(2);

      // Step 2: Automated Test Execution
      setTimeout(() => {
        setPipelineStep(3);

        // Step 3: Peer Code Review & Department Sign-off
        setTimeout(() => {
          setIsSubmitting(false);
          setCompletedSuccess(true);
          triggerGoldConfetti();
          onSubmitPR(bounty.id, prUrl);
        }, 1200);
      }, 1000);
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-2xl rounded-2xl bg-[#121216] border border-gold-500/30 shadow-gold-glow overflow-hidden my-8">
        
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.08] bg-[#16161D]">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-zinc-400">{bounty.id}</span>
            <span className="text-zinc-600">•</span>
            <StatusBadge status={bounty.status} size="sm" />
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          
          {/* Title & Department */}
          <div className="space-y-2">
            <span className="text-xs font-mono text-gold-400 uppercase tracking-wider">
              {bounty.department} ({bounty.departmentCategory})
            </span>
            <h2 className="text-xl font-bold text-white leading-snug">
              {bounty.title}
            </h2>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              {bounty.description}
            </p>
          </div>

          {/* Reward & Scope Highlights */}
          <div className="grid grid-cols-3 gap-3 p-3.5 rounded-xl bg-black/40 border border-white/5">
            <div className="text-center">
              <div className="text-[10px] font-mono text-zinc-500 uppercase">Scoped Hours</div>
              <div className="text-base font-bold text-white font-mono flex items-center justify-center gap-1 mt-0.5">
                <Clock className="w-3.5 h-3.5 text-gold-400" />
                <span>{bounty.hours} hrs</span>
              </div>
            </div>

            <div className="text-center border-x border-white/5">
              <div className="text-[10px] font-mono text-zinc-500 uppercase">Escrow Reward</div>
              <div className="text-base font-bold font-mono mt-0.5">
                {bounty.rewardType === 'USD' ? (
                  <span className="text-emerald-400">${bounty.rewardAmount} USD</span>
                ) : (
                  <span className="text-cyan-400">${bounty.rewardAmount} Gift Card</span>
                )}
              </div>
            </div>

            <div className="text-center">
              <div className="text-[10px] font-mono text-zinc-500 uppercase">Difficulty</div>
              <div className="mt-1">
                <DifficultyBadge difficulty={bounty.difficulty} />
              </div>
            </div>
          </div>

          {/* Required Deliverables Checklist */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold">
              Department Acceptance Criteria
            </h4>
            <div className="space-y-2">
              {bounty.deliverables.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-2.5 rounded-lg bg-white/[0.02] border border-white/5 text-xs text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Submission / Pipeline Section */}
          {bounty.status === 'Verified & Paid' || completedSuccess ? (
            <div className="p-5 rounded-xl bg-emerald-950/30 border border-emerald-500/40 space-y-3">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span>Bounty Verified & Credential Minted!</span>
              </div>
              <p className="text-xs text-zinc-300">
                This micro-bounty has passed peer review sign-off. Escrow payout of{' '}
                <span className="font-bold text-emerald-400 font-mono">
                  {bounty.rewardType === 'USD' ? `$${bounty.rewardAmount} USD` : `$${bounty.rewardAmount} Gift Card`}
                </span>{' '}
                has been credited to <span className="font-mono text-white">@{student.githubUsername}</span>.
              </p>
              <div className="pt-2 flex flex-wrap gap-2">
                <button
                  onClick={() => {
                    onClose();
                    onVerifyBadge(bounty);
                  }}
                  className="px-4 py-2 rounded-xl gold-glow-btn text-xs font-bold text-black flex items-center gap-1.5"
                >
                  <Award className="w-4 h-4" />
                  <span>Inspect Minted Badge SHA-256</span>
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-4 pt-2 border-t border-white/5">
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-zinc-300 font-semibold flex items-center justify-between">
                  <span>GitHub Pull Request Link:</span>
                  <button
                    type="button"
                    onClick={() => setPrUrl(`https://github.com/campus-ledger/${bounty.id.toLowerCase()}/pull/${Math.floor(Math.random() * 80) + 10}`)}
                    className="text-[11px] text-gold-400 hover:underline"
                  >
                    Auto-generate sample PR link
                  </button>
                </label>
                <div className="relative">
                  <GitPullRequest className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="url"
                    value={prUrl}
                    onChange={(e) => setPrUrl(e.target.value)}
                    placeholder="https://github.com/university-dept/repo/pull/12"
                    className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-black/60 border border-white/10 text-xs text-white font-mono focus:outline-none focus:border-gold-400"
                  />
                </div>
              </div>

              {/* Real-Time Peer Review Simulator Pipeline Steps */}
              {isSubmitting && (
                <div className="p-4 rounded-xl bg-black/70 border border-gold-500/30 space-y-2.5 text-xs font-mono">
                  <div className="text-gold-400 font-bold flex items-center gap-2">
                    <Loader2 className="w-3.5 h-3.5 animate-spin text-gold-400" />
                    <span>Executing Campus Ledger Verification Oracle...</span>
                  </div>

                  <div className="space-y-1.5 text-[11px]">
                    <div className={`flex items-center gap-2 ${pipelineStep >= 1 ? 'text-emerald-400' : 'text-zinc-500'}`}>
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>1. Automated ESLint & TypeScript Compilation Pass</span>
                    </div>
                    <div className={`flex items-center gap-2 ${pipelineStep >= 2 ? 'text-emerald-400' : 'text-zinc-500'}`}>
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>2. GitHub Actions Test Suite: 14/14 tests verified</span>
                    </div>
                    <div className={`flex items-center gap-2 ${pipelineStep >= 3 ? 'text-emerald-400' : 'text-zinc-500'}`}>
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>3. Peer Code Review: Department Sign-off by Senior Lead</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Action Button */}
              {!isSubmitting && (
                <button
                  type="button"
                  onClick={handleSimulateSubmit}
                  disabled={!prUrl.trim()}
                  className="w-full py-3 rounded-xl gold-glow-btn font-bold text-xs text-black flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Submit PR for Peer Review & Auto-Mint Badge</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-white/[0.08] bg-[#0E0E12] flex items-center justify-between text-xs text-zinc-500 font-mono">
          <span>Connected as @{student.githubUsername}</span>
          <span>Zero-Knowledge Verification Oracle</span>
        </div>

      </div>
    </div>
  );
};

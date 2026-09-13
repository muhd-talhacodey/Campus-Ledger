import React from 'react';
import { Bounty } from '../../types';
import { StatusBadge, DifficultyBadge } from '../ui/Badge';
import { 
  Clock, 
  DollarSign, 
  Zap, 
  GitPullRequest, 
  ArrowRight, 
  ShieldCheck, 
  Layers,
  Sparkles,
  Award
} from 'lucide-react';

interface BountyCardProps {
  bounty: Bounty;
  onSelectBounty: (bounty: Bounty) => void;
  onVerifyBadge?: (bounty: Bounty) => void;
}

export const BountyCard: React.FC<BountyCardProps> = ({
  bounty,
  onSelectBounty,
  onVerifyBadge,
}) => {
  return (
    <div className="glass-card rounded-2xl p-5 sm:p-6 border border-white/[0.08] hover:border-gold-500/40 flex flex-col justify-between group transition-all duration-300">
      
      {/* Top Header: Department, Status & Scoped Hours */}
      <div className="space-y-3">
        <div className="flex items-center justify-between gap-2">
          <span className="text-[11px] font-mono text-zinc-400 bg-white/[0.04] px-2.5 py-1 rounded border border-white/[0.06] truncate max-w-[180px]">
            {bounty.department}
          </span>
          <StatusBadge status={bounty.status} size="sm" />
        </div>

        {/* Title */}
        <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-gold-200 transition-colors leading-snug">
          {bounty.title}
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed line-clamp-3">
          {bounty.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {bounty.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.03] text-zinc-300 border border-white/[0.06] group-hover:border-gold-500/20 transition-colors"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Middle: Scoped Hours, Difficulty, Deliverables */}
      <div className="pt-4 mt-4 border-t border-white/[0.06] space-y-3">
        <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-gold-400" />
            <span className="text-zinc-300 font-semibold">{bounty.hours} hrs</span>
            <span>scope</span>
          </div>

          <DifficultyBadge difficulty={bounty.difficulty} />
        </div>

        {/* Reward & Action Section */}
        <div className="flex items-center justify-between gap-3 pt-2">
          {/* Reward Amount */}
          <div>
            <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
              {bounty.rewardType === 'USD' ? 'Cash Reward' : 'Gift Card Reward'}
            </div>
            <div className="text-xl font-extrabold font-mono flex items-baseline gap-1">
              {bounty.rewardType === 'USD' ? (
                <span className="text-emerald-400">
                  ${bounty.rewardAmount} <span className="text-xs text-emerald-500/80">USD</span>
                </span>
              ) : (
                <span className="text-cyan-400">
                  ${bounty.rewardAmount} <span className="text-xs text-cyan-400/80">Gift Card</span>
                </span>
              )}
            </div>
          </div>

          {/* Action Trigger */}
          {bounty.status === 'Open' && (
            <button
              onClick={() => onSelectBounty(bounty)}
              className="px-4 py-2 rounded-xl gold-glow-btn text-xs font-bold text-black flex items-center gap-1.5 group-hover:scale-102 transition-transform cursor-pointer"
            >
              <span>Claim & PR</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}

          {bounty.status === 'In Review' && (
            <button
              onClick={() => onSelectBounty(bounty)}
              className="px-3.5 py-2 rounded-xl bg-amber-950/40 hover:bg-amber-900/50 border border-gold-500/40 text-xs font-bold text-gold-300 flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <Clock className="w-3.5 h-3.5 text-gold-400" />
              <span>Inspect PR</span>
            </button>
          )}

          {bounty.status === 'Verified & Paid' && (
            <button
              onClick={() => {
                if (onVerifyBadge) {
                  onVerifyBadge(bounty);
                } else {
                  onSelectBounty(bounty);
                }
              }}
              className="px-3.5 py-2 rounded-xl bg-emerald-950/40 hover:bg-emerald-900/50 border border-emerald-500/40 text-xs font-bold text-emerald-300 flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <Award className="w-3.5 h-3.5 text-emerald-400" />
              <span>View Badge</span>
            </button>
          )}
        </div>
      </div>

    </div>
  );
};

import React from 'react';
import { BountyStatus } from '../../types';
import { CheckCircle2, Clock, Sparkles } from 'lucide-react';

interface StatusBadgeProps {
  status: BountyStatus;
  size?: 'sm' | 'md' | 'lg';
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status, size = 'md' }) => {
  const sizeClasses = {
    sm: 'text-xs px-2 py-0.5 gap-1.5',
    md: 'text-xs px-2.5 py-1 gap-1.5 font-medium',
    lg: 'text-sm px-3.5 py-1.5 gap-2 font-medium',
  }[size];

  switch (status) {
    case 'Open':
      return (
        <span className={`inline-flex items-center rounded-full bg-cyan-950/50 text-cyan-400 border border-cyan-500/30 ${sizeClasses}`}>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          <span>Open Bounty</span>
        </span>
      );
    case 'In Review':
      return (
        <span className={`inline-flex items-center rounded-full bg-amber-950/50 text-gold-400 border border-gold-500/40 ${sizeClasses}`}>
          <Clock className="w-3.5 h-3.5 text-gold-400 animate-spin" style={{ animationDuration: '4s' }} />
          <span>In Review</span>
        </span>
      );
    case 'Verified & Paid':
      return (
        <span className={`inline-flex items-center rounded-full bg-emerald-950/60 text-emerald-400 border border-emerald-500/40 ${sizeClasses}`}>
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
          <span>Verified & Paid</span>
        </span>
      );
    default:
      return null;
  }
};

export const DifficultyBadge: React.FC<{ difficulty: 'Beginner' | 'Intermediate' | 'Advanced' }> = ({ difficulty }) => {
  const colors = {
    Beginner: 'bg-emerald-950/30 text-emerald-300 border-emerald-500/20',
    Intermediate: 'bg-gold-950/30 text-gold-300 border-gold-500/20',
    Advanced: 'bg-rose-950/30 text-rose-300 border-rose-500/20',
  }[difficulty];

  return (
    <span className={`text-[11px] px-2 py-0.5 rounded border ${colors} font-mono uppercase tracking-wider`}>
      {difficulty}
    </span>
  );
};

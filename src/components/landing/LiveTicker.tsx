import React from 'react';
import { Bounty } from '../../types';
import { Terminal, Clock, CheckCircle2, ArrowRight } from 'lucide-react';

interface LiveTickerProps {
  bounties: Bounty[];
  onSelectBounty: (bounty: Bounty) => void;
}

export const LiveTicker: React.FC<LiveTickerProps> = ({ bounties, onSelectBounty }) => {
  return (
    <div className="w-full bg-[#0D0D11] border-y border-white/[0.08] py-3 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 flex items-center gap-4">
        {/* Fixed Ticker Label */}
        <div className="flex-shrink-0 flex items-center gap-2 pr-4 border-r border-white/10 font-mono text-xs text-gold-400 font-bold uppercase tracking-wider">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
          </span>
          <span>LIVE BOUNTY STREAM</span>
        </div>

        {/* Scrolling Items */}
        <div className="flex items-center gap-6 overflow-x-auto no-scrollbar scroll-smooth whitespace-nowrap py-1 text-xs">
          {bounties.slice(0, 6).map((bounty) => (
            <button
              key={bounty.id}
              onClick={() => onSelectBounty(bounty)}
              className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 hover:border-gold-500/30 text-zinc-300 transition-all cursor-pointer group flex-shrink-0"
            >
              <span className="text-zinc-500 font-mono text-[11px]">{bounty.departmentCategory}</span>
              <span className="text-white font-medium group-hover:text-gold-300 transition-colors">
                {bounty.title.length > 38 ? `${bounty.title.slice(0, 38)}...` : bounty.title}
              </span>
              <span className="font-mono text-gold-400 font-bold">
                {bounty.rewardType === 'USD' ? `$${bounty.rewardAmount}` : `$${bounty.rewardAmount} gift card`}
              </span>
              <span className={`text-[10px] px-1.5 py-0.5 rounded font-mono ${
                bounty.status === 'Open' 
                  ? 'bg-cyan-950/60 text-cyan-400 border border-cyan-500/30' 
                  : bounty.status === 'In Review'
                  ? 'bg-amber-950/60 text-gold-300 border border-gold-500/30'
                  : 'bg-emerald-950/60 text-emerald-400 border border-emerald-500/30'
              }`}>
                {bounty.status}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

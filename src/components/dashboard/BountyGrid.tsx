import React, { useState, useMemo } from 'react';
import { Bounty, BountyStatus } from '../../types';
import { BountyCard } from './BountyCard';
import { 
  Search, 
  Filter, 
  Layers, 
  CheckCircle2, 
  Clock, 
  DollarSign, 
  PlusCircle, 
  Sparkles,
  SlidersHorizontal
} from 'lucide-react';

interface BountyGridProps {
  bounties: Bounty[];
  onSelectBounty: (bounty: Bounty) => void;
  onVerifyBadge: (bounty: Bounty) => void;
  onOpenPostModal: () => void;
  selectedCategoryFilter?: string | null;
  onClearCategoryFilter?: () => void;
}

export const BountyGrid: React.FC<BountyGridProps> = ({
  bounties,
  onSelectBounty,
  onVerifyBadge,
  onOpenPostModal,
  selectedCategoryFilter,
  onClearCategoryFilter,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'All' | BountyStatus>('All');
  const [categoryFilter, setCategoryFilter] = useState<string>(selectedCategoryFilter || 'All');
  const [maxHoursFilter, setMaxHoursFilter] = useState<number>(0); // 0 means all

  // Sync if external category filter changed
  React.useEffect(() => {
    if (selectedCategoryFilter) {
      setCategoryFilter(selectedCategoryFilter);
    }
  }, [selectedCategoryFilter]);

  const categories = [
    'All',
    'Computer Science',
    'Engineering',
    'Student Affairs',
    'Administration',
    'AI & Research',
  ];

  const filteredBounties = useMemo(() => {
    return bounties.filter((b) => {
      // Search
      const matchesSearch = 
        b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        b.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
        b.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

      // Status
      const matchesStatus = statusFilter === 'All' || b.status === statusFilter;

      // Category
      const matchesCategory = categoryFilter === 'All' || b.departmentCategory === categoryFilter;

      // Hours
      const matchesHours = maxHoursFilter === 0 || b.hours <= maxHoursFilter;

      return matchesSearch && matchesStatus && matchesCategory && matchesHours;
    });
  }, [bounties, searchQuery, statusFilter, categoryFilter, maxHoursFilter]);

  return (
    <div id="bounty-feed-section" className="space-y-6 pt-4">
      {/* Header & Controls Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
              Interactive Campus Bounty Board
            </h2>
            <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-gold-500/10 text-gold-300 border border-gold-500/30">
              {filteredBounties.length} Available
            </span>
          </div>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1">
            2 to 5 hour technical tasks posted directly by campus departments with escrowed rewards.
          </p>
        </div>

        <button
          onClick={onOpenPostModal}
          className="self-start md:self-auto px-4 py-2.5 rounded-xl gold-glow-btn text-xs font-bold text-black flex items-center gap-2 cursor-pointer shadow-gold-sm"
        >
          <PlusCircle className="w-4 h-4" />
          <span>Post Department Task</span>
        </button>
      </div>

      {/* Filter Chips & Search Bar */}
      <div className="p-4 rounded-2xl bg-[#121216] border border-white/[0.08] space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by task title, department, or stack (e.g. React, Python, Postgres)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-black/50 border border-white/10 text-white placeholder-zinc-500 text-xs focus:outline-none focus:border-gold-400/60 transition-colors"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-zinc-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

          {/* Max Hours Filter */}
          <div className="flex items-center gap-1.5 bg-black/40 p-1 rounded-xl border border-white/10 text-xs font-mono">
            <span className="px-2 text-zinc-500 text-[11px] hidden sm:inline">Scope:</span>
            {[
              { label: 'All Hours', value: 0 },
              { label: '≤ 2h', value: 2 },
              { label: '≤ 3h', value: 3 },
              { label: '≤ 5h', value: 5 },
            ].map((scope) => (
              <button
                key={scope.label}
                onClick={() => setMaxHoursFilter(scope.value)}
                className={`px-2.5 py-1.5 rounded-lg text-[11px] transition-all ${
                  maxHoursFilter === scope.value
                    ? 'bg-gold-500 text-black font-bold'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {scope.label}
              </button>
            ))}
          </div>
        </div>

        {/* Category Tabs & Status Filter */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-white/5">
          {/* Status Pills */}
          <div className="flex flex-wrap items-center gap-1.5 text-xs">
            {(['All', 'Open', 'In Review', 'Verified & Paid'] as const).map((status) => (
              <button
                key={status}
                onClick={() => setStatusFilter(status)}
                className={`px-3 py-1 rounded-lg font-medium transition-all ${
                  statusFilter === status
                    ? 'bg-gold-500/20 text-gold-300 border border-gold-500/50 shadow-gold-sm'
                    : 'bg-white/[0.03] text-zinc-400 border border-white/5 hover:text-white hover:bg-white/[0.06]'
                }`}
              >
                {status === 'All' ? 'Status' : status}
              </button>
            ))}
          </div>

          {/* Department Category Select */}
          <div className="flex items-center gap-2 text-xs">
            <span className="text-zinc-500 font-mono text-[11px]">Dept:</span>
            <select
              value={categoryFilter}
              onChange={(e) => {
                setCategoryFilter(e.target.value);
                if (onClearCategoryFilter && e.target.value === 'All') {
                  onClearCategoryFilter();
                }
              }}
              className="bg-black/60 border border-white/10 text-zinc-300 text-xs rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-gold-400"
            >
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c === 'All' ? 'All Departments' : c}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Bounty Cards Grid */}
      {filteredBounties.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBounties.map((bounty) => (
            <BountyCard
              key={bounty.id}
              bounty={bounty}
              onSelectBounty={onSelectBounty}
              onVerifyBadge={onVerifyBadge}
            />
          ))}
        </div>
      ) : (
        <div className="glass-card rounded-2xl p-12 text-center border border-white/10 space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 mx-auto flex items-center justify-center text-zinc-500">
            <Search className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-white">No Matching Bounties Found</h3>
          <p className="text-xs text-zinc-400 max-w-sm mx-auto">
            Try adjusting your search criteria or filter tags, or post a new department micro-bounty.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setStatusFilter('All');
              setCategoryFilter('All');
              setMaxHoursFilter(0);
            }}
            className="text-xs text-gold-400 hover:underline pt-2 font-mono"
          >
            Reset all filters
          </button>
        </div>
      )}
    </div>
  );
};

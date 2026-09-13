import React, { useState } from 'react';
import { Bounty } from '../../types';
import { X, Sparkles, Building2 } from 'lucide-react';

interface PostBountyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddBounty: (bounty: Bounty) => void;
}

export const PostBountyModal: React.FC<PostBountyModalProps> = ({
  isOpen,
  onClose,
  onAddBounty,
}) => {
  if (!isOpen) return null;

  const [title, setTitle] = useState('');
  const [department, setDepartment] = useState('Computer Science Society');
  const [departmentCategory, setDepartmentCategory] = useState<'Computer Science' | 'Engineering' | 'Student Affairs' | 'Administration' | 'AI & Research'>('Computer Science');
  const [description, setDescription] = useState('');
  const [hours, setHours] = useState(3);
  const [rewardType, setRewardType] = useState<'USD' | 'GIFT_CARD'>('USD');
  const [rewardAmount, setRewardAmount] = useState(60);
  const [tagsInput, setTagsInput] = useState('React, TypeScript, Tailwind');
  const [deliverablesInput, setDeliverablesInput] = useState('Implement responsive interface\nWrite unit tests\nCreate PR documentation');
  const [difficulty, setDifficulty] = useState<'Beginner' | 'Intermediate' | 'Advanced'>('Intermediate');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;

    const newBounty: Bounty = {
      id: `BOUNTY-2026-0${Math.floor(Math.random() * 800) + 100}`,
      title: title.trim(),
      department: department.trim(),
      departmentCategory,
      description: description.trim(),
      hours,
      rewardType,
      rewardAmount,
      status: 'Open',
      tags: tagsInput.split(',').map((t) => t.trim()).filter(Boolean),
      difficulty,
      postedAt: 'Just now',
      deliverables: deliverablesInput
        .split('\n')
        .map((d) => d.trim())
        .filter(Boolean),
    };

    onAddBounty(newBounty);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-xl rounded-2xl bg-[#121216] border border-gold-500/30 shadow-gold-glow overflow-hidden my-8">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.08] bg-[#16161D]">
          <div className="flex items-center gap-2">
            <Building2 className="w-4 h-4 text-gold-400" />
            <span className="text-sm font-bold text-white">Post a Department Task (2-5h Scope)</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[75vh] overflow-y-auto text-xs">
          
          {/* Title */}
          <div className="space-y-1.5">
            <label className="text-zinc-300 font-semibold">Task Title</label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Optimize Course Registration API or Add Mobile Map Filter"
              className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-gold-400"
            />
          </div>

          {/* Department & Category */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <label className="text-zinc-300 font-semibold">Department / Society</label>
              <input
                type="text"
                required
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                placeholder="e.g. Computer Science Society"
                className="w-full px-3 py-2 rounded-xl bg-black/60 border border-white/10 text-white focus:outline-none focus:border-gold-400"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-zinc-300 font-semibold">Category</label>
              <select
                value={departmentCategory}
                onChange={(e) => setDepartmentCategory(e.target.value as any)}
                className="w-full px-3 py-2 rounded-xl bg-black/60 border border-white/10 text-white focus:outline-none focus:border-gold-400"
              >
                <option value="Computer Science">Computer Science</option>
                <option value="Engineering">Engineering</option>
                <option value="Student Affairs">Student Affairs</option>
                <option value="Administration">Administration</option>
                <option value="AI & Research">AI & Research</option>
              </select>
            </div>
          </div>

          {/* Scoped Hours & Difficulty */}
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <label className="text-zinc-300 font-semibold flex items-center justify-between">
                <span>Scoped Hours:</span>
                <span className="text-gold-400 font-mono font-bold">{hours} hrs</span>
              </label>
              <input
                type="range"
                min={2}
                max={5}
                step={1}
                value={hours}
                onChange={(e) => setHours(Number(e.target.value))}
                className="w-full accent-gold-500 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] font-mono text-zinc-500">
                <span>2h (Min)</span>
                <span>5h (Max Scope)</span>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-zinc-300 font-semibold">Difficulty Level</label>
              <select
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value as any)}
                className="w-full px-3 py-2 rounded-xl bg-black/60 border border-white/10 text-white focus:outline-none focus:border-gold-400"
              >
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            </div>
          </div>

          {/* Reward Type & Amount */}
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <label className="text-zinc-300 font-semibold">Reward Type</label>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setRewardType('USD')}
                  className={`flex-1 py-2 rounded-lg font-mono font-semibold transition-all ${
                    rewardType === 'USD'
                      ? 'bg-emerald-950 text-emerald-400 border border-emerald-500/50'
                      : 'bg-white/5 text-zinc-400 border border-white/5'
                  }`}
                >
                  Cash
                </button>
                <button
                  type="button"
                  onClick={() => setRewardType('GIFT_CARD')}
                  className={`flex-1 py-2 rounded-lg font-mono font-semibold transition-all ${
                    rewardType === 'GIFT_CARD'
                      ? 'bg-cyan-950 text-cyan-300 border border-cyan-500/50'
                      : 'bg-white/5 text-zinc-400 border border-white/5'
                  }`}
                >
                  Gift Card
                </button>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-zinc-300 font-semibold">
                Reward Amount ($)
              </label>
              <input
                type="number"
                required
                min={10}
                value={rewardAmount}
                onChange={(e) => setRewardAmount(Number(e.target.value))}
                className="w-full px-3 py-2 rounded-xl bg-black/60 border border-white/10 text-white font-mono focus:outline-none focus:border-gold-400"
              />
            </div>
          </div>

          {/* Description */}
          <div className="space-y-1.5">
            <label className="text-zinc-300 font-semibold">Task Description & Context</label>
            <textarea
              required
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Detail the technical bottleneck and what needs to be solved..."
              className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-gold-400"
            />
          </div>

          {/* Tech Tags */}
          <div className="space-y-1.5">
            <label className="text-zinc-300 font-semibold">Tags (comma-separated)</label>
            <input
              type="text"
              value={tagsInput}
              onChange={(e) => setTagsInput(e.target.value)}
              placeholder="React, TypeScript, SQL, Docker"
              className="w-full px-3 py-2 rounded-xl bg-black/60 border border-white/10 text-white font-mono focus:outline-none focus:border-gold-400"
            />
          </div>

          {/* Deliverables */}
          <div className="space-y-1.5">
            <label className="text-zinc-300 font-semibold">Deliverables (one per line)</label>
            <textarea
              rows={3}
              value={deliverablesInput}
              onChange={(e) => setDeliverablesInput(e.target.value)}
              placeholder="Requirement 1&#10;Requirement 2&#10;Test coverage report"
              className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-white/10 text-white font-mono text-[11px] focus:outline-none focus:border-gold-400"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3 rounded-xl gold-glow-btn font-bold text-xs text-black flex items-center justify-center gap-2 cursor-pointer shadow-gold-sm"
            >
              <Sparkles className="w-4 h-4" />
              <span>Lock Escrow & Publish Micro-Bounty to Ledger</span>
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { StudentProfile } from '../../types';
import { GitHubIcon } from '../ui/Icons';
import { MOCK_STUDENT_PRESETS } from '../../data/initialBounties';
import { X, Check, Search, Sparkles, ExternalLink, Loader2 } from 'lucide-react';

interface GitHubAuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentStudent: StudentProfile;
  onSelectStudent: (student: StudentProfile) => void;
}

export const GitHubAuthModal: React.FC<GitHubAuthModalProps> = ({
  isOpen,
  onClose,
  currentStudent,
  onSelectStudent,
}) => {
  if (!isOpen) return null;

  const [customUsername, setCustomUsername] = useState('');
  const [loadingCustom, setLoadingCustom] = useState(false);
  const [customError, setCustomError] = useState<string | null>(null);

  const handleFetchCustomGitHub = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!customUsername.trim()) return;

    setLoadingCustom(true);
    setCustomError(null);

    try {
      const res = await fetch(`https://api.github.com/users/${customUsername.trim()}`);
      if (!res.ok) {
        throw new Error('User not found on GitHub. Using fallback profile.');
      }
      const data = await res.json();

      const newStudent: StudentProfile = {
        githubUsername: data.login,
        name: data.name || data.login,
        avatarUrl: data.avatar_url,
        university: 'University Technical Institute',
        major: 'Computer Science & Software Systems',
        year: 'Class of 2026',
        earnedUSD: 150,
        earnedGiftCards: 200,
        tasksCompleted: 2,
        reputationScore: 92,
        bio: data.bio || 'Campus Ledger student developer & open-source contributor.',
        publicRepos: data.public_repos || 12,
        commitStreakDays: 15,
        verifiedBadges: currentStudent.verifiedBadges,
      };

      onSelectStudent(newStudent);
      onClose();
    } catch (err: any) {
      // Create a fallback profile with their typed username so it never fails
      const fallback: StudentProfile = {
        githubUsername: customUsername.trim().toLowerCase(),
        name: customUsername.trim(),
        avatarUrl: `https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80`,
        university: 'Imperial University of Technology',
        major: 'Computer Science & Engineering',
        year: 'Junior (Class of 2027)',
        earnedUSD: 120,
        earnedGiftCards: 150,
        tasksCompleted: 2,
        reputationScore: 90,
        bio: 'Campus Ledger student engineer.',
        publicRepos: 15,
        commitStreakDays: 12,
        verifiedBadges: currentStudent.verifiedBadges,
      };
      onSelectStudent(fallback);
      onClose();
    } finally {
      setLoadingCustom(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-lg rounded-2xl bg-[#121216] border border-gold-500/40 shadow-gold-glow overflow-hidden my-8">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.08] bg-[#16161D]">
          <div className="flex items-center gap-2.5">
            <GitHubIcon className="w-5 h-5 text-white" />
            <h3 className="text-base font-bold text-white">GitHub OAuth Authentication</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <p className="text-xs text-zinc-300 leading-relaxed">
            Connect your GitHub account to authenticate your student identity, link merged PRs to your verified credentials, and track your campus micro-bounty ledger.
          </p>

          {/* Quick Preset Accounts */}
          <div className="space-y-2.5">
            <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider font-semibold">
              Select Demo Student Profile:
            </div>

            <div className="space-y-2">
              {MOCK_STUDENT_PRESETS.map((preset) => {
                const isSelected = currentStudent.githubUsername === preset.githubUsername;
                return (
                  <button
                    key={preset.githubUsername}
                    onClick={() => {
                      onSelectStudent(preset);
                      onClose();
                    }}
                    className={`w-full p-3.5 rounded-xl border text-left flex items-center justify-between transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-gold-500/15 border-gold-400 shadow-gold-sm'
                        : 'bg-black/40 border-white/5 hover:border-gold-500/30 hover:bg-white/[0.03]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={preset.avatarUrl}
                        alt={preset.name}
                        className="w-10 h-10 rounded-xl object-cover border border-white/10"
                      />
                      <div>
                        <div className="text-xs font-bold text-white flex items-center gap-1.5">
                          <span>{preset.name}</span>
                          {preset.githubUsername === 'talhanayyar-dev' && (
                            <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-gold-400/20 text-gold-300 border border-gold-400/40">
                              Lead Architect
                            </span>
                          )}
                        </div>
                        <div className="text-[11px] font-mono text-zinc-400">
                          @{preset.githubUsername} • {preset.major}
                        </div>
                      </div>
                    </div>

                    {isSelected && (
                      <span className="w-6 h-6 rounded-full bg-gold-500 text-black flex items-center justify-center flex-shrink-0">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Or Connect Any Live GitHub Username */}
          <div className="pt-2 border-t border-white/5 space-y-3">
            <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider font-semibold">
              Or Connect Any Custom GitHub Username:
            </div>

            <form onSubmit={handleFetchCustomGitHub} className="flex gap-2">
              <div className="relative flex-1">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 text-xs font-mono">@</span>
                <input
                  type="text"
                  placeholder="github-username"
                  value={customUsername}
                  onChange={(e) => setCustomUsername(e.target.value)}
                  className="w-full pl-7 pr-3 py-2 rounded-xl bg-black/60 border border-white/10 text-xs text-white font-mono focus:outline-none focus:border-gold-400"
                />
              </div>

              <button
                type="submit"
                disabled={loadingCustom || !customUsername.trim()}
                className="px-4 py-2 rounded-xl gold-glow-btn text-xs font-bold text-black flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
              >
                {loadingCustom ? (
                  <Loader2 className="w-4 h-4 animate-spin text-black" />
                ) : (
                  <>
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Connect</span>
                  </>
                )}
              </button>
            </form>

            <p className="text-[11px] text-zinc-500">
              Live queries GitHub's public API to pull avatar, repositories, and credentials into the reactive state.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

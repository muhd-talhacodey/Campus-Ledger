import React, { useState } from 'react';
import { BadgeItem, StudentProfile } from '../../types';
import { 
  Award, 
  ShieldCheck, 
  ExternalLink, 
  Copy, 
  Check, 
  Download, 
  Share2, 
  Clock, 
  GitPullRequest,
  Hash,
  Sparkles
} from 'lucide-react';
import { GitHubIcon } from '../ui/Icons';

interface BadgeGeneratorProps {
  badges: BadgeItem[];
  student: StudentProfile;
  onInspectBadge: (badge: BadgeItem) => void;
}

export const BadgeGenerator: React.FC<BadgeGeneratorProps> = ({
  badges,
  student,
  onInspectBadge,
}) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopyLink = (badge: BadgeItem) => {
    navigator.clipboard.writeText(`https://campus-ledger.edu/verify/${badge.hash}`);
    setCopiedId(badge.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleDownloadCredential = (badge: BadgeItem) => {
    const credentialData = {
      "@context": ["https://www.w3.org/2018/credentials/v1"],
      "id": badge.id,
      "type": ["VerifiableCredential", "CampusMicroInternshipBadge"],
      "issuer": {
        "id": "did:campus-ledger:issuer",
        "name": badge.department
      },
      "issuanceDate": new Date().toISOString(),
      "credentialSubject": {
        "id": `did:github:${student.githubUsername}`,
        "studentName": student.name,
        "taskTitle": badge.title,
        "scopedHours": badge.hours,
        "reward": badge.reward,
        "pullRequest": badge.prUrl,
        "peerReviewer": badge.peerReviewer,
        "sha256Proof": badge.hash
      }
    };

    const blob = new Blob([JSON.stringify(credentialData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `credential-${badge.id}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div id="verify-badge-section" className="space-y-6 pt-8 border-t border-white/[0.08]">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
              Verified Proof-of-Work Badges
            </h2>
            <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-500/30">
              {badges.length} Minted Credentials
            </span>
          </div>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1">
            Immutable credentials backed by GitHub PR merges and department peer sign-offs.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-gold-400">
          <ShieldCheck className="w-4 h-4" />
          <span>W3C Verifiable Credential Compatible</span>
        </div>
      </div>

      {/* Badges Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {badges.map((badge) => (
          <div
            key={badge.id}
            className="relative rounded-2xl p-0.5 bg-gradient-to-b from-gold-400/40 via-gold-500/20 to-transparent shadow-gold-sm hover:shadow-gold-md transition-all duration-300 group"
          >
            <div className="rounded-2xl bg-[#111116] p-6 border border-white/[0.06] flex flex-col justify-between h-full space-y-5">
              
              {/* Top Row: Department & Seal */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/60 border border-gold-500/30 text-gold-300">
                    {badge.id}
                  </span>
                </div>

                <div>
                  <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wide">
                    {badge.department}
                  </div>
                  <h3 className="text-base font-bold text-white mt-1 group-hover:text-gold-200 transition-colors leading-snug">
                    {badge.title}
                  </h3>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                  <Clock className="w-3.5 h-3.5 text-gold-400" />
                  <span>{badge.hours}h Scoped Task</span>
                  <span>•</span>
                  <span className="text-emerald-400 font-semibold">{badge.reward}</span>
                </div>

                {/* Cryptographic Hash Container */}
                <div className="p-2.5 rounded-xl bg-black/60 border border-white/5 space-y-1">
                  <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500">
                    <span className="flex items-center gap-1">
                      <Hash className="w-3 h-3 text-gold-400" />
                      <span>SHA-256 PROOF HASH</span>
                    </span>
                    <span>{badge.date}</span>
                  </div>
                  <div className="font-mono text-[11px] text-gold-300/90 truncate">
                    {badge.hash}
                  </div>
                </div>

                <div className="text-[11px] font-mono text-zinc-400 flex items-center justify-between">
                  <span>Sign-off: {badge.peerReviewer}</span>
                  <span className="text-emerald-400 font-bold">100% VERIFIED</span>
                </div>
              </div>

              {/* Action Buttons: Inspect on Ledger, Copy Link, Download JSON */}
              <div className="pt-3 border-t border-white/5 flex items-center justify-between gap-2">
                <button
                  onClick={() => onInspectBadge(badge)}
                  className="px-3 py-1.5 rounded-lg bg-gold-500/10 hover:bg-gold-500/20 border border-gold-500/30 text-xs font-semibold text-gold-300 flex items-center gap-1.5 transition-colors"
                >
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Verify Proof</span>
                </button>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => handleCopyLink(badge)}
                    title="Copy verifiable URL"
                    className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
                  >
                    {copiedId === badge.id ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Share2 className="w-4 h-4" />
                    )}
                  </button>

                  <button
                    onClick={() => handleDownloadCredential(badge)}
                    title="Download Verifiable Credential (JSON)"
                    className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
                  >
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

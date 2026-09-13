import React from 'react';
import { 
  AlertTriangle, 
  FileQuestion, 
  Clock, 
  XCircle, 
  Inbox, 
  FileSpreadsheet, 
  AlertCircle,
  HelpCircle,
  TrendingDown,
  ServerCrash
} from 'lucide-react';

export const ProblemSection: React.FC = () => {
  return (
    <section id="problem" className="py-24 border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-950/40 border border-rose-500/30 text-rose-400 text-xs font-mono uppercase tracking-wider">
            <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
            <span>Campus Technical Backlog</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Neglected Department Tasks vs.{' '}
            <span className="text-rose-400">Unverified Student Resumes</span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
            University departments and student societies struggle with small, critical technical tasks (e.g., updating websites, fixing event databases, setting up forms), while students lack verified, real-world experience on their profiles.
          </p>
        </div>

        {/* Split Visual Comparison Card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Left Side: Visual Friction & Breakdown Graphics */}
          <div className="rounded-2xl p-6 sm:p-8 bg-gradient-to-b from-[#1C1215] to-[#120F12] border border-rose-500/30 shadow-2xl relative overflow-hidden flex flex-col justify-between">
            {/* Ambient Red Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/10 blur-[90px] pointer-events-none -z-0" />

            <div className="relative z-10 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-rose-500/20">
                <div className="flex items-center gap-2 text-rose-400 font-mono text-xs font-bold uppercase tracking-wider">
                  <ServerCrash className="w-4 h-4" />
                  <span>The Problem Visualizer</span>
                </div>
                <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-rose-950 text-rose-300 border border-rose-500/40">
                  CRITICAL FRICTION
                </span>
              </div>

              {/* Cluttered Inbox & Neglected Tickets Graphic */}
              <div className="space-y-3">
                <div className="text-xs font-mono text-zinc-400 uppercase tracking-wide flex items-center gap-1.5">
                  <Inbox className="w-3.5 h-3.5 text-rose-400" />
                  <span>Department Backlog Tickets (Unattended)</span>
                </div>

                {/* Ticket 1 */}
                <div className="p-3.5 rounded-xl bg-black/40 border border-rose-500/20 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-rose-950/80 border border-rose-500/40 flex items-center justify-center text-rose-400">
                      <XCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white">Event Registration Form 404 & CORS Error</div>
                      <div className="text-[11px] text-zinc-500 font-mono">CS Society • Submitted 38 days ago</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-1 rounded bg-rose-950 text-rose-300 border border-rose-800">
                    NEGLECTED
                  </span>
                </div>

                {/* Ticket 2 */}
                <div className="p-3.5 rounded-xl bg-black/40 border border-rose-500/20 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-rose-950/80 border border-rose-500/40 flex items-center justify-center text-rose-400">
                      <FileSpreadsheet className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white">Manual Excel Export for Spring Fest Seating</div>
                      <div className="text-[11px] text-zinc-500 font-mono">Student Affairs • 14 hours manual labor</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-1 rounded bg-amber-950 text-amber-300 border border-amber-800">
                    NO DEVELOPER
                  </span>
                </div>
              </div>

              {/* Student Resume Void Visual Graphic */}
              <div className="pt-2 space-y-3">
                <div className="text-xs font-mono text-zinc-400 uppercase tracking-wide flex items-center gap-1.5">
                  <FileQuestion className="w-3.5 h-3.5 text-rose-400" />
                  <span>Student Resume Dilemma</span>
                </div>

                <div className="p-4 rounded-xl bg-black/60 border border-white/10 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-zinc-300">Junior Computer Science Major</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-950/80 text-rose-400 border border-rose-500/30">
                      UNVERIFIED PROOF
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400 italic">
                    "Listed 'React, Python, SQL' on resume, but recruiter rejected: No real-world verifiable production code or campus contributions found."
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    <span className="text-[10px] px-2 py-0.5 rounded bg-rose-950/40 text-rose-400/80 line-through">
                      Unverified Course Projects
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-rose-950/40 text-rose-400/80 line-through">
                      Tutorial Clones
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-rose-950/40 text-rose-400/80 line-through">
                      Zero Codebase PRs
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-rose-500/20 text-xs font-mono text-rose-300/80 flex items-center justify-between">
              <span>Status Quo: Bureaucratic inertia</span>
              <span>Outcome: Lost productivity</span>
            </div>
          </div>

          {/* Right Side: Detailed Breakdown & Friction Analysis */}
          <div className="rounded-2xl p-6 sm:p-8 bg-[#121216] border border-white/[0.08] flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                <h3 className="text-lg font-bold text-white tracking-tight">The Core Problem Breakdown</h3>
                <span className="text-xs font-mono text-zinc-400">Campus Friction Analysis</span>
              </div>

              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-lg bg-rose-500/10 border border-rose-500/30 flex-shrink-0 flex items-center justify-center text-rose-400 mt-1">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold text-white">Tasks Are Too Small for Traditional Contracts</h4>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      University IT procurement requires 6-8 weeks and formal RFPs. A 3-hour website bug or event database script cannot wait for semester-long vendor cycles.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex-shrink-0 flex items-center justify-center text-amber-400 mt-1">
                    <AlertCircle className="w-4 h-4" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold text-white">High Friction for Student Hiring</h4>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      Faculty and student societies lack a quick, compliant micro-escrow mechanism to disburse cash or gift-card rewards directly upon code verification.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-lg bg-rose-500/10 border border-rose-500/30 flex-shrink-0 flex items-center justify-center text-rose-400 mt-1">
                    <TrendingDown className="w-4 h-4" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold text-white">The Student "Experience Trap"</h4>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      Students are caught in a classic catch-22: internships require prior real-world experience, but students have nowhere to gain verifiable software credentials on campus.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom summary metric box */}
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-between">
              <div>
                <div className="text-xs text-zinc-400 font-mono">Average Unsolved Campus Backlog</div>
                <div className="text-xl font-bold text-white font-mono">42+ Days / Ticket</div>
              </div>
              <div className="text-right">
                <div className="text-xs text-zinc-400 font-mono">Underutilized Student Engineers</div>
                <div className="text-xl font-bold text-rose-400 font-mono">84% Stalled</div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

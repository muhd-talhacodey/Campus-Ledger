import React, { useState } from 'react';
import { 
  Sparkles, 
  GitPullRequest, 
  Award, 
  CheckCircle2, 
  Layers, 
  ArrowRight,
  ShieldCheck,
  FileCode2,
  Lock,
  Cpu,
  Coins
} from 'lucide-react';
import { GitHubIcon } from '../ui/Icons';

export const SolutionSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<1 | 2 | 3>(1);

  return (
    <section id="solution" className="py-24 border-t border-white/[0.06] relative bg-[#0C0C0F]">
      {/* Ambient Flare */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-cyan-500/5 blur-[140px] pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-950/40 border border-gold-500/30 text-gold-300 text-xs font-mono uppercase tracking-wider shadow-gold-sm">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>The Campus Solution</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            The 3-Step Micro-Bounty{' '}
            <span className="gold-gradient-text">Lifecycle Engine</span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
            A campus bounty board for 2-to-5 hour paid tasks, verified through peer code reviews and rewarded with cash or gift cards for students.
          </p>
        </div>

        {/* Interactive 3-Step Graphic Navigation with Animated Gold Progress Line */}
        <div className="relative max-w-4xl mx-auto mb-12">
          {/* Background Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-10 right-10 h-0.5 bg-white/10 -translate-y-1/2 -z-0">
            <div 
              className="h-full bg-gradient-to-r from-gold-500 via-gold-300 to-gold-500 transition-all duration-500 shadow-[0_0_12px_#FFD700]"
              style={{
                width: activeStep === 1 ? '20%' : activeStep === 2 ? '60%' : '100%'
              }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            {/* Step 1 Button Card */}
            <button
              onClick={() => setActiveStep(1)}
              className={`p-5 rounded-2xl text-left transition-all duration-300 border ${
                activeStep === 1
                  ? 'bg-[#181820] border-gold-400 shadow-gold-md scale-102'
                  : 'bg-[#121216]/80 border-white/10 hover:border-gold-500/30 hover:bg-[#15151B]'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-mono font-bold text-sm transition-all ${
                  activeStep === 1 
                    ? 'bg-gold-500 text-black shadow-gold-sm' 
                    : 'bg-white/5 text-zinc-400 border border-white/10'
                }`}>
                  01
                </div>
                <span className="text-[11px] font-mono text-gold-400 uppercase tracking-wider">2-5h Scope</span>
              </div>
              <h3 className="text-base font-bold text-white mb-1">1. Task Posted</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Scoped micro-bounties published by university departments with locked escrow rewards.
              </p>
            </button>

            {/* Step 2 Button Card */}
            <button
              onClick={() => setActiveStep(2)}
              className={`p-5 rounded-2xl text-left transition-all duration-300 border ${
                activeStep === 2
                  ? 'bg-[#181820] border-gold-400 shadow-gold-md scale-102'
                  : 'bg-[#121216]/80 border-white/10 hover:border-gold-500/30 hover:bg-[#15151B]'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-mono font-bold text-sm transition-all ${
                  activeStep === 2 
                    ? 'bg-gold-500 text-black shadow-gold-sm' 
                    : 'bg-white/5 text-zinc-400 border border-white/10'
                }`}>
                  02
                </div>
                <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider">GitHub Oracle</span>
              </div>
              <h3 className="text-base font-bold text-white mb-1">2. Peer Code Review</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Verification via GitHub pull requests with CI/CD checks and faculty/TA sign-offs.
              </p>
            </button>

            {/* Step 3 Button Card */}
            <button
              onClick={() => setActiveStep(3)}
              className={`p-5 rounded-2xl text-left transition-all duration-300 border ${
                activeStep === 3
                  ? 'bg-[#181820] border-gold-400 shadow-gold-md scale-102'
                  : 'bg-[#121216]/80 border-white/10 hover:border-gold-500/30 hover:bg-[#15151B]'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-mono font-bold text-sm transition-all ${
                  activeStep === 3 
                    ? 'bg-gold-500 text-black shadow-gold-sm' 
                    : 'bg-white/5 text-zinc-400 border border-white/10'
                }`}>
                  03
                </div>
                <span className="text-[11px] font-mono text-gold-400 uppercase tracking-wider">SHA-256 Badge</span>
              </div>
              <h3 className="text-base font-bold text-white mb-1">3. Auto-Badge Minting</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Automated credential generation with immutable proof-of-work permanently tied to student profile.
              </p>
            </button>
          </div>
        </div>

        {/* Live Step Dynamic Interactive Visualizer Panel */}
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl p-1 bg-gradient-to-r from-gold-500/30 via-gold-400/20 to-gold-500/30 shadow-gold-lg">
            <div className="rounded-2xl bg-[#111116] p-6 sm:p-8 border border-white/[0.08]">
              
              {/* Step 1 Visualizer Display */}
              {activeStep === 1 && (
                <div className="space-y-6 animate-fadeIn">
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/[0.08]">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></span>
                      <span className="font-mono text-xs text-cyan-400 uppercase font-bold tracking-wider">
                        Stage 01: Micro-Bounty Specification
                      </span>
                    </div>
                    <span className="text-xs font-mono text-zinc-400">Escrow Locked: Smart Contract / Department Pool</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                    <div className="space-y-4">
                      <h4 className="text-lg font-bold text-white">
                        Precise, Scoped Technical Deliverables (2 to 5 Hours)
                      </h4>
                      <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                        Department heads don't write vague 3-month job descriptions. They post modular tickets with clear acceptance criteria and pre-funded bounties such as $30 - $150 cash or student gift cards.
                      </p>
                      
                      <div className="space-y-2 pt-2 text-xs">
                        <div className="flex items-center gap-2 text-zinc-300">
                          <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0" />
                          <span>Guaranteed escrow payout upon PR merge</span>
                        </div>
                        <div className="flex items-center gap-2 text-zinc-300">
                          <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0" />
                          <span>Standardized issue templates & starter branches</span>
                        </div>
                        <div className="flex items-center gap-2 text-zinc-300">
                          <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0" />
                          <span>Protected student academic bandwidth (no scope creep)</span>
                        </div>
                      </div>
                    </div>

                    {/* Visual Code Ticket Preview */}
                    <div className="rounded-xl bg-[#09090C] p-4 border border-gold-500/30 space-y-3 font-mono text-xs">
                      <div className="flex items-center justify-between text-zinc-500 border-b border-white/5 pb-2">
                        <span>bounty_manifest.json</span>
                        <span className="text-gold-400">$50 USD Escrowed</span>
                      </div>
                      <pre className="text-zinc-300 overflow-x-auto text-[11px] leading-relaxed">
{`{
  "bounty_id": "CS-SOC-2026-081",
  "dept": "Computer Science Society",
  "scope_hours": 3,
  "stack": ["React", "TypeScript", "Tailwind"],
  "bounty_escrow": "50.00 USD",
  "status": "OPEN_FOR_CLAIM",
  "criteria": [
    "Form validation with Zod",
    "Discord webhook trigger on submit",
    "Passing test suite"
  ]
}`}
                      </pre>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2 Visualizer Display */}
              {activeStep === 2 && (
                <div className="space-y-6 animate-fadeIn">
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/[0.08]">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      <span className="font-mono text-xs text-emerald-400 uppercase font-bold tracking-wider">
                        Stage 02: GitHub Oracle & Peer Review
                      </span>
                    </div>
                    <span className="text-xs font-mono text-zinc-400">Sync: GitHub Pull Request Webhook</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                    <div className="space-y-4">
                      <h4 className="text-lg font-bold text-white">
                        Zero Fluff: Verified by Production Code Reviews
                      </h4>
                      <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                        Students submit a GitHub Pull Request link. The Campus Ledger test runner executes continuous integration, while department tech leads or senior peer reviewers inspect the diff.
                      </p>
                      
                      <div className="space-y-2 pt-2 text-xs">
                        <div className="flex items-center gap-2 text-zinc-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                          <span>Automated linting & unit test pass verification</span>
                        </div>
                        <div className="flex items-center gap-2 text-zinc-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                          <span>Cryptographic signature by verifying department lead</span>
                        </div>
                        <div className="flex items-center gap-2 text-zinc-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                          <span>Real commit history visible on student's public GitHub</span>
                        </div>
                      </div>
                    </div>

                    {/* PR Code Review Visual */}
                    <div className="rounded-xl bg-[#09090C] p-4 border border-emerald-500/30 space-y-3 font-mono text-xs">
                      <div className="flex items-center justify-between text-zinc-400 border-b border-white/5 pb-2">
                        <div className="flex items-center gap-1.5 text-emerald-400">
                          <GitPullRequest className="w-3.5 h-3.5" />
                          <span>PR #42 (Approved)</span>
                        </div>
                        <span className="text-zinc-500 text-[10px]">review_signoff.gpg</span>
                      </div>
                      <div className="space-y-1.5 text-[11px]">
                        <div className="text-zinc-400">--- a/src/registration/form.tsx</div>
                        <div className="text-emerald-400 bg-emerald-950/30 px-1 py-0.5 rounded">
                          + const validated = schema.safeParse(data);
                        </div>
                        <div className="text-emerald-400 bg-emerald-950/30 px-1 py-0.5 rounded">
                          + await notifyDiscordWebhook(validated.data);
                        </div>
                        <div className="pt-2 text-zinc-400 flex items-center justify-between text-[10px]">
                          <span>Peer Sign-off: Prof. J. Anderson</span>
                          <span className="text-emerald-400 font-bold">ALL CHECKS PASSED</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3 Visualizer Display */}
              {activeStep === 3 && (
                <div className="space-y-6 animate-fadeIn">
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/[0.08]">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-gold-400 animate-pulse"></span>
                      <span className="font-mono text-xs text-gold-400 uppercase font-bold tracking-wider">
                        Stage 03: Immutable Proof-of-Work Badge Minted
                      </span>
                    </div>
                    <span className="text-xs font-mono text-zinc-400">SHA-256 Ledger Stamp</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                    <div className="space-y-4">
                      <h4 className="text-lg font-bold text-white">
                        Cryptographic Proof You Can Put Directly on Your Resume
                      </h4>
                      <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                        Once approved, the ledger automatically mints a tamper-proof credential stamped with the SHA-256 hash, department signature, and direct link to the merged pull request.
                      </p>
                      
                      <div className="space-y-2 pt-2 text-xs">
                        <div className="flex items-center gap-2 text-zinc-300">
                          <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0" />
                          <span>One-click verifiable link for employers & recruiters</span>
                        </div>
                        <div className="flex items-center gap-2 text-zinc-300">
                          <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0" />
                          <span>Direct integration with LinkedIn & GitHub profiles</span>
                        </div>
                        <div className="flex items-center gap-2 text-zinc-300">
                          <CheckCircle2 className="w-4 h-4 text-gold-400 flex-shrink-0" />
                          <span>Campus reputation score boosts priority for larger micro-internships</span>
                        </div>
                      </div>
                    </div>

                    {/* Minted Badge Graphic */}
                    <div className="rounded-xl bg-gradient-to-br from-[#1E1A0F] to-[#121216] p-5 border border-gold-400/60 shadow-gold-sm space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Award className="w-5 h-5 text-gold-400" />
                          <span className="text-xs font-bold text-white uppercase font-mono">Verified Credential</span>
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-gold-400/20 text-gold-300 border border-gold-400/40">
                          MINTED #085
                        </span>
                      </div>
                      
                      <div>
                        <div className="text-xs font-bold text-white">AI Research Lab GPU Queue Connector</div>
                        <div className="text-[11px] text-zinc-400">Awarded to: @talhanayyar-dev</div>
                      </div>

                      <div className="p-2.5 rounded bg-black/70 border border-white/5 font-mono text-[10px] text-gold-300/90 break-all">
                        PROOF-HASH: 0x8f2d6c31b94a71ef99c15e219ba48d30e87b7a91
                      </div>

                      <div className="flex items-center justify-between text-[11px] text-zinc-400 pt-1">
                        <span>Issuer: AI & Robotics Institute</span>
                        <span className="text-emerald-400 font-semibold">$100 USD Paid</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

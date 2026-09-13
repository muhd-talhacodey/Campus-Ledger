import React, { useState, useEffect } from 'react';
import { Bounty, StudentProfile, BadgeItem } from './types';
import { INITIAL_BOUNTIES, INITIAL_STUDENT_PROFILE } from './data/initialBounties';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/landing/HeroSection';
import { ProblemSection } from './components/landing/ProblemSection';
import { SolutionSection } from './components/landing/SolutionSection';
import { LiveTicker } from './components/landing/LiveTicker';
import { DepartmentShowcase } from './components/landing/DepartmentShowcase';
import { DashboardHeader } from './components/dashboard/DashboardHeader';
import { BountyGrid } from './components/dashboard/BountyGrid';
import { ClaimSubmitModal } from './components/dashboard/ClaimSubmitModal';
import { PostBountyModal } from './components/dashboard/PostBountyModal';
import { GitHubAuthModal } from './components/dashboard/GitHubAuthModal';
import { BadgeGenerator } from './components/dashboard/BadgeGenerator';
import { VerifyModal } from './components/dashboard/VerifyModal';
import { triggerGoldConfetti } from './components/ui/Confetti';
import { ArrowLeft, Sparkles, CheckCircle2, ShieldCheck, Flame } from 'lucide-react';

export function App() {
  // State: Navigation view ('landing' or 'dashboard')
  const [currentView, setCurrentView] = useState<'landing' | 'dashboard'>('landing');
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  // State: Bounties & Student Profile
  const [bounties, setBounties] = useState<Bounty[]>(INITIAL_BOUNTIES);
  const [student, setStudent] = useState<StudentProfile>(INITIAL_STUDENT_PROFILE);

  // Modals state
  const [selectedBountyForModal, setSelectedBountyForModal] = useState<Bounty | null>(null);
  const [isPostModalOpen, setIsPostModalOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isVerifyModalOpen, setIsVerifyModalOpen] = useState(false);
  const [selectedBadgeForVerify, setSelectedBadgeForVerify] = useState<BadgeItem | null>(null);

  // Selected Category filter from showcase
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string | null>(null);

  // Notification toast
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4000);
  };

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView]);

  useEffect(() => {
    document.documentElement.classList.toggle('light', theme === 'light');
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  // Handler: Claim and Submit PR
  const handleSubmitPR = (bountyId: string, prUrl: string) => {
    const targetBounty = bounties.find((b) => b.id === bountyId);
    if (!targetBounty) return;

    const prNumberMatch = prUrl.match(/pull\/(\d+)/);
    const prNumber = prNumberMatch ? parseInt(prNumberMatch[1], 10) : Math.floor(Math.random() * 80) + 10;
    const generatedHash = `0x${Array.from({ length: 40 }, () => Math.floor(Math.random() * 16).toString(16)).join('')}`;

    // Update bounties
    setBounties((prev) =>
      prev.map((b) => {
        if (b.id === bountyId) {
          return {
            ...b,
            status: 'Verified & Paid',
            claimedBy: {
              githubUsername: student.githubUsername,
              name: student.name,
              avatarUrl: student.avatarUrl,
            },
            prUrl,
            prNumber,
            verifiedAt: 'Just now',
            hash: generatedHash,
            peerReviewer: 'Senior Peer Review Board',
          };
        }
        return b;
      })
    );

    // Create new verified badge
    const newBadge: BadgeItem = {
      id: `BADGE-SHA256-0${Math.floor(Math.random() * 800) + 100}`,
      bountyId: targetBounty.id,
      title: targetBounty.title,
      department: targetBounty.department,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      hash: generatedHash,
      prNumber,
      prUrl,
      tags: targetBounty.tags,
      hours: targetBounty.hours,
      reward: targetBounty.rewardType === 'USD' ? `$${targetBounty.rewardAmount} USD` : `$${targetBounty.rewardAmount} Gift Card`,
      peerReviewer: 'Senior Peer Review Board',
    };

    // Update student profile
    setStudent((prev) => ({
      ...prev,
      earnedUSD: targetBounty.rewardType === 'USD' ? prev.earnedUSD + targetBounty.rewardAmount : prev.earnedUSD,
      earnedGiftCards: targetBounty.rewardType === 'GIFT_CARD' ? prev.earnedGiftCards + targetBounty.rewardAmount : prev.earnedGiftCards,
      tasksCompleted: prev.tasksCompleted + 1,
      reputationScore: Math.min(100, prev.reputationScore + 2),
      verifiedBadges: [newBadge, ...prev.verifiedBadges],
    }));

    showToast(`Bounty Verified! Credential minted with hash ${generatedHash.slice(0, 10)}...`);
  };

  // Handler: Add new bounty
  const handleAddBounty = (newBounty: Bounty) => {
    setBounties([newBounty, ...bounties]);
    showToast(`New micro-bounty "${newBounty.title.slice(0, 30)}..." published to ledger!`);
    triggerGoldConfetti();
  };

  // Handler: Navigate to category
  const handleNavigateToCategory = (category: string) => {
    setSelectedCategoryFilter(category);
    setCurrentView('dashboard');
    setTimeout(() => {
      const el = document.getElementById('bounty-feed-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 150);
  };

  // Handler: Open Verify Modal for specific badge
  const handleInspectBadge = (badge: BadgeItem) => {
    setSelectedBadgeForVerify(badge);
    setIsVerifyModalOpen(true);
  };

  const handleVerifyBadgeFromBounty = (bounty: Bounty) => {
    const existingBadge = student.verifiedBadges.find((b) => b.bountyId === bounty.id);
    if (existingBadge) {
      handleInspectBadge(existingBadge);
    } else {
      setSelectedBadgeForVerify({
        id: `BADGE-${bounty.id}`,
        bountyId: bounty.id,
        title: bounty.title,
        department: bounty.department,
        date: bounty.verifiedAt || 'Recently',
        hash: bounty.hash || '0x8f2d6c31b94a71ef99c15e219ba48d30e87b7a91',
        prNumber: bounty.prNumber || 42,
        prUrl: bounty.prUrl || 'https://github.com/campus-ledger/main/pull/42',
        tags: bounty.tags,
        hours: bounty.hours,
        reward: bounty.rewardType === 'USD' ? `$${bounty.rewardAmount} USD` : `$${bounty.rewardAmount} Gift Card`,
        peerReviewer: bounty.peerReviewer || 'Faculty Tech Lead',
      });
      setIsVerifyModalOpen(true);
    }
  };

  return (
    <div className={`min-h-screen bg-[#0A0A0C] text-[#E4E4E7] flex flex-col font-sans selection:bg-gold-500/30 selection:text-gold-200 ${theme === 'light' ? 'theme-light' : 'theme-dark'}`}>
      
      {/* Toast Notification Banner */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 animate-bounce">
          <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#14141A] border border-gold-400 text-white text-xs font-mono shadow-gold-md">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <span>{toastMessage}</span>
          </div>
        </div>
      )}

      {/* Sticky Navigation Bar */}
      <Navbar
        currentView={currentView}
        setCurrentView={setCurrentView}
        student={student}
        onOpenAuthModal={() => setIsAuthModalOpen(true)}
        onOpenPostModal={() => setIsPostModalOpen(true)}
        onOpenVerifyModal={() => {
          setSelectedBadgeForVerify(null);
          setIsVerifyModalOpen(true);
        }}
        theme={theme}
        onToggleTheme={() => setTheme((current) => current === 'dark' ? 'light' : 'dark')}
      />

      {/* PAGE 1: LANDING PAGE */}
      {currentView === 'landing' && (
        <main className="flex-1">
          {/* Hero Section */}
          <HeroSection
            onExploreBounties={() => setCurrentView('dashboard')}
            onPostTask={() => setIsPostModalOpen(true)}
          />

          {/* Live Micro-Bounty Ticker */}
          <LiveTicker
            bounties={bounties}
            onSelectBounty={(b) => {
              setSelectedBountyForModal(b);
            }}
          />

          {/* Visual Problem Display Section */}
          <ProblemSection />

          {/* Visual Solution Display Section (3-Step Micro-Bounty Lifecycle) */}
          <SolutionSection />

          {/* Campus Departments Showcase */}
          <DepartmentShowcase onNavigateToCategory={handleNavigateToCategory} />

          {/* Jump to Dashboard Banner */}
          <section className="py-20 border-t border-white/[0.06] bg-gradient-to-b from-[#0A0A0C] to-[#121216]">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-300 text-xs font-mono">
                <Flame className="w-3.5 h-3.5 text-gold-400" />
                <span>Ready to Claim a Campus Micro-Bounty?</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Launch the Student Dashboard & Bounty Board
              </h2>
              <p className="text-zinc-400 text-sm max-w-xl mx-auto">
                Explore active 2-5h tasks, submit your pull request for peer review, and automatically mint verified proof-of-work badges for your resume.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => setCurrentView('dashboard')}
                  className="px-8 py-3.5 rounded-xl gold-glow-btn font-bold text-sm text-black inline-flex items-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Launch Student Dashboard</span>
                </button>
              </div>
            </div>
          </section>
        </main>
      )}

      {/* PAGE 2: STUDENT DASHBOARD & BOUNTY LEDGER */}
      {currentView === 'dashboard' && (
        <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-20 animate-fadeIn">
          {/* Back to Landing Page link */}
          <div className="pt-6">
            <button
              onClick={() => setCurrentView('landing')}
              className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-gold-300 font-mono transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Overview Landing Page</span>
            </button>
          </div>

          {/* Developer Credential Header & Student Profile Banner */}
          <DashboardHeader
            student={student}
            onOpenAuthModal={() => setIsAuthModalOpen(true)}
            onOpenPostModal={() => setIsPostModalOpen(true)}
            onOpenVerifyModal={() => {
              setSelectedBadgeForVerify(null);
              setIsVerifyModalOpen(true);
            }}
          />

          {/* Interactive Campus Bounty Board */}
          <BountyGrid
            bounties={bounties}
            onSelectBounty={(b) => setSelectedBountyForModal(b)}
            onVerifyBadge={handleVerifyBadgeFromBounty}
            onOpenPostModal={() => setIsPostModalOpen(true)}
            selectedCategoryFilter={selectedCategoryFilter}
            onClearCategoryFilter={() => setSelectedCategoryFilter(null)}
          />

          {/* Verified Badge & Proof-of-Work Generator */}
          <BadgeGenerator
            badges={student.verifiedBadges}
            student={student}
            onInspectBadge={handleInspectBadge}
          />
        </main>
      )}

      {/* Footer (with Developer Identity: Muhammad Talha Nayyar) */}
      <Footer
        onOpenVerifyModal={() => {
          setSelectedBadgeForVerify(null);
          setIsVerifyModalOpen(true);
        }}
        onOpenPostModal={() => setIsPostModalOpen(true)}
        onNavigateDashboard={() => setCurrentView('dashboard')}
      />

      {/* Claim / Submit PR Workflow Modal */}
      <ClaimSubmitModal
        bounty={selectedBountyForModal}
        student={student}
        onClose={() => setSelectedBountyForModal(null)}
        onSubmitPR={handleSubmitPR}
        onVerifyBadge={handleVerifyBadgeFromBounty}
      />

      {/* Post Department Task Modal */}
      <PostBountyModal
        isOpen={isPostModalOpen}
        onClose={() => setIsPostModalOpen(false)}
        onAddBounty={handleAddBounty}
      />

      {/* GitHub OAuth Authentication Modal */}
      <GitHubAuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        currentStudent={student}
        onSelectStudent={(s) => {
          setStudent(s);
          showToast(`Logged in as @${s.githubUsername}`);
        }}
      />

      {/* Cryptographic Badge Verifier Modal */}
      <VerifyModal
        isOpen={isVerifyModalOpen}
        onClose={() => {
          setIsVerifyModalOpen(false);
          setSelectedBadgeForVerify(null);
        }}
        selectedBadge={selectedBadgeForVerify}
        allBadges={student.verifiedBadges}
        student={student}
      />

    </div>
  );
}

export default App;

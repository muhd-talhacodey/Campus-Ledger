export type BountyStatus = 'Open' | 'In Review' | 'Verified & Paid';

export type DepartmentCategory =
  | 'Computer Science'
  | 'Engineering'
  | 'Student Affairs'
  | 'Administration'
  | 'AI & Research';

export type RewardType = 'USD' | 'GIFT_CARD';

export interface ClaimedBy {
  githubUsername: string;
  name: string;
  avatarUrl: string;
}

export interface Bounty {
  id: string;
  title: string;
  department: string;
  departmentCategory: DepartmentCategory;
  description: string;
  hours: number;
  rewardType: RewardType;
  rewardAmount: number;
  status: BountyStatus;
  tags: string[];
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  postedAt: string;
  deliverables: string[];
  claimedBy?: ClaimedBy;
  prUrl?: string;
  prNumber?: number;
  verifiedAt?: string;
  hash?: string;
  peerReviewer?: string;
}

export interface BadgeItem {
  id: string;
  bountyId: string;
  title: string;
  department: string;
  date: string;
  hash: string;
  prNumber: number;
  prUrl: string;
  tags: string[];
  hours: number;
  reward: string;
  peerReviewer: string;
}

export interface StudentProfile {
  githubUsername: string;
  name: string;
  avatarUrl: string;
  university: string;
  major: string;
  year: string;
  earnedUSD: number;
  earnedGiftCards: number;
  tasksCompleted: number;
  reputationScore: number;
  bio: string;
  publicRepos: number;
  commitStreakDays: number;
  verifiedBadges: BadgeItem[];
}

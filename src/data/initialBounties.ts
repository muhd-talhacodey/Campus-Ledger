import { Bounty, StudentProfile } from '../types';

export const INITIAL_BOUNTIES: Bounty[] = [
  {
    id: 'BOUNTY-2026-081',
    title: 'Update Computer Science Society Web Portal & Event Registration',
    department: 'Computer Science Society',
    departmentCategory: 'Computer Science',
    description: 'Refactor the upcoming annual hackathon registration section with responsive Tailwind grid, form validation schema, and automated Discord webhook alerts.',
    hours: 3,
    rewardType: 'USD',
    rewardAmount: 50,
    status: 'Open',
    tags: ['React', 'TypeScript', 'Tailwind', 'Webhooks'],
    difficulty: 'Intermediate',
    postedAt: '2 hours ago',
    deliverables: [
      'Responsive registration form component with validation',
      'Discord webhook payload dispatch on submit',
      'Unit test suite for input sanitization'
    ]
  },
  {
    id: 'BOUNTY-2026-082',
    title: 'Database Indexing & Query Optimization for Spring Fest Event Tracker',
    department: 'Campus Student Affairs',
    departmentCategory: 'Student Affairs',
    description: 'Analyze slow query logs on the Postgres database during ticket drops. Add compound indexes on (user_id, event_status) and optimize heavy joins.',
    hours: 2,
    rewardType: 'GIFT_CARD',
    rewardAmount: 100,
    status: 'Open',
    tags: ['PostgreSQL', 'SQL', 'Database Tuning', 'Performance'],
    difficulty: 'Intermediate',
    postedAt: '4 hours ago',
    deliverables: [
      'EXPLAIN ANALYZE execution benchmark comparison',
      'Migration script with added btree indexes',
      'Sub-50ms response latency verification report'
    ]
  },
  {
    id: 'BOUNTY-2026-083',
    title: 'Fix Concurrent Seat Booking Race Condition in Dining Hall Capacity API',
    department: 'Campus Operations & Dining',
    departmentCategory: 'Administration',
    description: 'Resolve double-booking oversights in Redis distributed lock implementation during peak lunch reservation spikes (12:00 PM - 1:30 PM).',
    hours: 4,
    rewardType: 'USD',
    rewardAmount: 85,
    status: 'In Review',
    tags: ['Redis', 'Node.js', 'Concurrency', 'Fastify'],
    difficulty: 'Advanced',
    postedAt: 'Yesterday',
    claimedBy: {
      githubUsername: 'talhanayyar-dev',
      name: 'Muhammad Talha Nayyar',
      avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'
    },
    prUrl: 'https://github.com/campus-ledger/dining-api/pull/42',
    prNumber: 42,
    peerReviewer: 'Prof. J. Anderson (CS Dept)',
    deliverables: [
      'Distributed mutex wrapper around ticket issuance',
      'Locust load test script simulating 500 concurrent users',
      'Zero collision guarantee verified'
    ]
  },
  {
    id: 'BOUNTY-2026-084',
    title: 'Student Society Election Voting Form Sanitization & Rate-Limiting',
    department: 'Student Union Governance',
    departmentCategory: 'Student Affairs',
    description: 'Implement tokenized CSRF defense, IP-based sliding window rate-limiting, and client-side Zod form parsing to prevent automated ballot stuffing.',
    hours: 3,
    rewardType: 'USD',
    rewardAmount: 65,
    status: 'Open',
    tags: ['Next.js', 'Zod', 'Security', 'Redis'],
    difficulty: 'Intermediate',
    postedAt: '5 hours ago',
    deliverables: [
      'Sliding window rate-limiter middleware (1 vote / 60s per IP)',
      'Strict Zod schema parsing for student credentials',
      'OWASP security checklist pass verification'
    ]
  },
  {
    id: 'BOUNTY-2026-085',
    title: 'AI Research Lab GPU Queue Dashboard WebSocket Connector',
    department: 'AI & Robotics Institute',
    departmentCategory: 'AI & Research',
    description: 'Build a low-latency WebSocket client subscription to stream real-time NVIDIA A100 VRAM allocations and cluster temperature graphs.',
    hours: 4,
    rewardType: 'USD',
    rewardAmount: 100,
    status: 'Verified & Paid',
    tags: ['WebSockets', 'Chart.js', 'Python', 'React'],
    difficulty: 'Advanced',
    postedAt: '3 days ago',
    claimedBy: {
      githubUsername: 'talhanayyar-dev',
      name: 'Muhammad Talha Nayyar',
      avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'
    },
    prUrl: 'https://github.com/campus-ledger/ai-lab-monitor/pull/18',
    prNumber: 18,
    verifiedAt: '2 days ago',
    hash: '0x8f2d6c31b94a71ef99c15e219ba48d30e87b7a91',
    peerReviewer: 'Dr. Elena Rostova (AI Lead)',
    deliverables: [
      'Bi-directional WebSocket streaming hook with auto-reconnect',
      'Canvas-accelerated GPU utilization telemetry chart',
      'Peer review sign-off by AI infrastructure team'
    ]
  },
  {
    id: 'BOUNTY-2026-086',
    title: 'Automate Course Syllabus PDF Extractor for Registrar Schedule Sync',
    department: 'University Registrar',
    departmentCategory: 'Administration',
    description: 'Write a resilient Python OCR/PDF parser pipeline that extracts examination schedules, prerequisite codes, and office hours directly into JSON schemas.',
    hours: 5,
    rewardType: 'GIFT_CARD',
    rewardAmount: 250,
    status: 'Open',
    tags: ['Python', 'PDFPlumber', 'JSON Schema', 'Regex'],
    difficulty: 'Intermediate',
    postedAt: '6 hours ago',
    deliverables: [
      'Parser module handling multi-column tables and non-standard layouts',
      'CLI tool with batch processing support for 120+ syllabus files',
      'Accuracy benchmark yielding >98% field recognition'
    ]
  },
  {
    id: 'BOUNTY-2026-087',
    title: 'Campus Shuttle Live GPS Mapbox Smooth Polyline Interpolation',
    department: 'Campus Transportation Services',
    departmentCategory: 'Engineering',
    description: 'Eliminate choppy shuttle icon jumps by computing spherical linear interpolation (slerp) between telemetry coordinates over 2.5s intervals.',
    hours: 2,
    rewardType: 'USD',
    rewardAmount: 45,
    status: 'Open',
    tags: ['Mapbox GL', 'Turf.js', 'JavaScript', 'GIS'],
    difficulty: 'Beginner',
    postedAt: '1 day ago',
    deliverables: [
      'Turf.js bezier-spline smoothing pipeline',
      'Mobile battery consumption profile report',
      '120 FPS smooth vehicle tracking render'
    ]
  },
  {
    id: 'BOUNTY-2026-088',
    title: 'Library RFID Book Return Webhook Listener & Alert Daemon',
    department: 'Campus Library Systems',
    departmentCategory: 'Administration',
    description: 'Deploy a micro-daemon listening to hardware RFID scan pulses from the 2nd-floor return drop box to immediately notify student holds via automated SMS.',
    hours: 3,
    rewardType: 'USD',
    rewardAmount: 60,
    status: 'Verified & Paid',
    tags: ['Go', 'Twilio API', 'Webhooks', 'Docker'],
    difficulty: 'Intermediate',
    postedAt: '4 days ago',
    claimedBy: {
      githubUsername: 'talhanayyar-dev',
      name: 'Muhammad Talha Nayyar',
      avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'
    },
    prUrl: 'https://github.com/campus-ledger/library-rfid-daemon/pull/9',
    prNumber: 9,
    verifiedAt: '3 days ago',
    hash: '0x3c11e74a980b1df36e09a4713c72b5f629d8a541',
    peerReviewer: 'Marcus Vance (Library Chief Tech)',
    deliverables: [
      'Fault-tolerant Go HTTP listener with retry queue',
      'Twilio rate-limiting compliance layer',
      'Docker Compose setup with automated health checks'
    ]
  }
];

export const INITIAL_STUDENT_PROFILE: StudentProfile = {
  githubUsername: 'talhanayyar-dev',
  name: 'Muhammad Talha Nayyar',
  avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80',
  university: 'Imperial University of Technology',
  major: 'Computer Science & Software Architecture',
  year: 'Senior (Class of 2026)',
  earnedUSD: 245,
  earnedGiftCards: 350,
  tasksCompleted: 6,
  reputationScore: 98,
  bio: 'Platform Lead & Systems Architect. Passionate about distributed campus systems, low-latency microservices, and verified student proof-of-work protocols.',
  publicRepos: 34,
  commitStreakDays: 48,
  verifiedBadges: [
    {
      id: 'BADGE-SHA256-085',
      bountyId: 'BOUNTY-2026-085',
      title: 'AI Research Lab GPU Queue Dashboard WebSocket Connector',
      department: 'AI & Robotics Institute',
      date: 'Sept 11, 2026',
      hash: '0x8f2d6c31b94a71ef99c15e219ba48d30e87b7a91',
      prNumber: 18,
      prUrl: 'https://github.com/campus-ledger/ai-lab-monitor/pull/18',
      tags: ['WebSockets', 'Chart.js', 'Python'],
      hours: 4,
      reward: '$100 USD',
      peerReviewer: 'Dr. Elena Rostova (AI Lead)'
    },
    {
      id: 'BADGE-SHA256-088',
      bountyId: 'BOUNTY-2026-088',
      title: 'Library RFID Book Return Webhook Listener & Alert Daemon',
      department: 'Campus Library Systems',
      date: 'Sept 10, 2026',
      hash: '0x3c11e74a980b1df36e09a4713c72b5f629d8a541',
      prNumber: 9,
      prUrl: 'https://github.com/campus-ledger/library-rfid-daemon/pull/9',
      tags: ['Go', 'Twilio API', 'Docker'],
      hours: 3,
      reward: '$60 USD',
      peerReviewer: 'Marcus Vance (Library Chief Tech)'
    },
    {
      id: 'BADGE-SHA256-072',
      bountyId: 'BOUNTY-2026-072',
      title: 'CS Society Alumni Mentorship Matching Engine Optimization',
      department: 'Computer Science Society',
      date: 'Aug 29, 2026',
      hash: '0x5e998a12d46e7f0931ba12543c879f9024bc910a',
      prNumber: 64,
      prUrl: 'https://github.com/campus-ledger/mentorship-engine/pull/64',
      tags: ['TypeScript', 'Graph Algorithms', 'PostgreSQL'],
      hours: 5,
      reward: '$85 USD',
      peerReviewer: 'K. Patel (VP Tech, CS Society)'
    }
  ]
};

export const MOCK_STUDENT_PRESETS: StudentProfile[] = [
  INITIAL_STUDENT_PROFILE,
  {
    githubUsername: 'sarahchen-swe',
    name: 'Sarah Chen',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=80',
    university: 'Imperial University of Technology',
    major: 'Electrical & Computer Engineering',
    year: 'Junior (Class of 2027)',
    earnedUSD: 180,
    earnedGiftCards: 200,
    tasksCompleted: 4,
    reputationScore: 94,
    bio: 'Embedded systems tinkerer & frontend developer. Building accessible web apps and IoT sensors.',
    publicRepos: 22,
    commitStreakDays: 19,
    verifiedBadges: [
      {
        id: 'BADGE-SHA256-061',
        bountyId: 'BOUNTY-2026-061',
        title: 'Robotics Arena Obstacle Sensor Calibration Script',
        department: 'AI & Robotics Institute',
        date: 'Sept 04, 2026',
        hash: '0x1b4a92ef8801c3de57a6299104cde78a994101e4',
        prNumber: 31,
        prUrl: 'https://github.com/campus-ledger/robotics-arena/pull/31',
        tags: ['C++', 'Sensors', 'ROS2'],
        hours: 3,
        reward: '$75 USD',
        peerReviewer: 'Dr. Elena Rostova'
      }
    ]
  },
  {
    githubUsername: 'dev-alex-rivera',
    name: 'Alex Rivera',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80',
    university: 'Imperial University of Technology',
    major: 'Data Science & Cybersecurity',
    year: 'Sophomore (Class of 2028)',
    earnedUSD: 95,
    earnedGiftCards: 450,
    tasksCompleted: 3,
    reputationScore: 91,
    bio: 'Security researcher and backend enthusiast. Love audit trails, cryptographic signatures, and micro-benchmarks.',
    publicRepos: 18,
    commitStreakDays: 14,
    verifiedBadges: [
      {
        id: 'BADGE-SHA256-044',
        bountyId: 'BOUNTY-2026-044',
        title: 'Registrar Form SQL Injection Sanitizer Audit',
        department: 'University Registrar',
        date: 'Aug 18, 2026',
        hash: '0x77c22e9a01f84b6510e9014523a8e919df0284ab',
        prNumber: 12,
        prUrl: 'https://github.com/campus-ledger/registrar-portal/pull/12',
        tags: ['Security', 'SQL', 'FastAPI'],
        hours: 4,
        reward: '$95 USD',
        peerReviewer: 'InfoSec Audit Board'
      }
    ]
  }
];

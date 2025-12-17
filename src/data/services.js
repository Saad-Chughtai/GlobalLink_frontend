export const mbaServices = {
  popular: [
    {
      id: 1,
      name: 'All-Inclusive Package',
      description: 'Start-to-finish, unlimited support through every stage of the MBA application process.',
      features: [
        'Strategic positioning & goal development',
        'Essay strategy, story ideation & iterative editing',
        'Résumé review & optimization',
        'Recommender strategy & support',
        'Mid-point application review by a senior Fortuna advisor',
        'Application form review & final polish',
        'Interview coaching & mock sessions',
      ],
      pricing: 'Starting at $6,200',
      featured: true,
    },
    {
      id: 2,
      name: 'Hourly Coaching',
      description: 'Targeted, on-demand support to strengthen key areas of your MBA application for maximum impact.',
      features: [
        'Strategic profile positioning & application strategy',
        'Essay review & refinement',
        'Interview coaching & mock sessions',
        'Final app review before submission',
      ],
      pricing: 'Starting at $375/hour',
    },
    {
      id: 3,
      name: 'MBA Interview Prep',
      description: 'Personalized coaching to sharpen your responses, refine your delivery, and make a lasting impression.',
      features: [
        '1:1 coaching on delivery & adapting to interview styles',
        'Mock interviews with real-time feedback',
        'Strategies for tough questions & pivoting to strengths',
      ],
      pricing: 'Starting at $830',
    },
  ],
  schoolSpecific: [
    {
      id: 4,
      name: 'HBS Prep',
      school: 'Harvard Business School',
      logo: '/images/logos/harvard.png',
      description: 'Excel in HBS\'s fast-paced interview and post-interview reflection.',
      features: [
        'Make the most of your 30 minutes',
        'What to expect & how to prepare',
        'Craft strong post-interview reflection',
      ],
      pricing: 'Starting at $1,245',
    },
    {
      id: 5,
      name: 'Wharton Prep',
      school: 'Wharton',
      logo: '/images/logos/wharton.png',
      description: 'Coaching for Wharton\'s interactive group interview setting.',
      features: [
        'Simulated team-based discussion',
        'Expert feedback from former Wharton Adcom',
        '1:1 interview guidance',
      ],
      pricing: 'Starting at $830',
    },
    {
      id: 6,
      name: 'MIT Sloan Prep',
      school: 'MIT Sloan',
      logo: '/images/logos/mit.png',
      description: 'Master Sloan\'s unique interview process and behavioral questions.',
      features: [
        'Strategy for pre-interview essays',
        'Behavioral interview prep',
        'Improve content, delivery, confidence',
      ],
      pricing: 'Starting at $1,245',
    },
  ],
};

// Keep old exports for backward compatibility
export const lawServices = [
  {
    title: 'LSAT Preparation',
    description: 'Strategic LSAT prep to maximize your score.',
    features: ['Study plans', 'Practice tests', 'Score improvement'],
    icon: '📚',
  },
  {
    title: 'Application Support',
    description: 'Complete guidance through the law school application process.',
    features: ['Personal statements', 'Resume review', 'Letters of recommendation'],
    icon: '📝',
  },
  {
    title: 'School Selection',
    description: 'Data-driven approach to finding your best-fit law schools.',
    features: ['School matching', 'Admission probability', 'Career outcomes'],
    icon: '🎯',
  },
];

export const collegeServices = [
  {
    title: 'College Counseling',
    description: 'Personalized guidance for undergraduate admissions.',
    features: ['School selection', 'Application strategy', 'Timeline planning'],
    icon: '🎓',
  },
  {
    title: 'Essay Support',
    description: 'Expert help crafting compelling college essays.',
    features: ['Common App essay', 'Supplemental essays', 'Multiple revisions'],
    icon: '✍️',
  },
  {
    title: 'Test Prep Strategy',
    description: 'Strategic approach to SAT/ACT preparation.',
    features: ['Test planning', 'Score goals', 'Study strategies'],
    icon: '📊',
  },
];

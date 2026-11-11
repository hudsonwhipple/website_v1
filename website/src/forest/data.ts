export type Project = {
  id: string;
  title: string;
  /** Where the work happened and when, shown under the title. */
  context: string;
  description: string;
  metric: { value: string; label: string };
  /** Shown on the project row. */
  stack: string[];
  /** Extra skill names (from SKILL_GROUPS) this project maps to, beyond `stack`. */
  skills?: string[];
  link?: { label: string; href: string };
  /** CSS colour used for this row's metric, visual and hover tint. */
  accent: string;
};

export const PROJECTS: Project[] = [
  {
    id: 'shrinkwrap',
    accent: 'var(--accent)',
    title: 'Shrinkwrap',
    context: 'Personal · 2026',
    description:
      'Post-training a 1.7B-parameter model for text-to-SQL on a laptop, with LoRA, GRPO, and GPTQ quantization written from scratch. About two-thirds of the fine-tuning gain survives 4-bit quantization, in a model under 1 GB.',
    metric: { value: '58.9 → 72.0%', label: 'Spider execution accuracy' },
    stack: ['Python', 'MLX', 'LoRA', 'GRPO', 'GPTQ'],
    link: { label: 'GitHub', href: 'https://github.com/hudsonwhipple/shrinkwrap-sql' },
  },
  {
    id: 'drone',
    accent: 'var(--amber)',
    title: 'Autonomous drone racing',
    context: 'Personal · 2026',
    description:
      'A PPO policy that flies a simulated quadrotor through race gates, warm-started by imitating an expert pilot. My own evaluation caught it clipping gates the simulator could not detect, so I made the gates solid and retrained.',
    metric: { value: '100 / 100', label: 'laps, zero collisions' },
    stack: ['Python', 'PyTorch', 'Stable-Baselines3', 'PyBullet'],
    skills: ['pytest', 'Docker'],
    link: { label: 'GitHub', href: 'https://github.com/hudsonwhipple/golden_snitch' },
  },
  {
    id: 'pirho',
    accent: 'var(--coral)',
    title: 'PiRho',
    context: 'Co-founder · 2025 – present',
    description:
      'A recipe and meal-planning app for iPhone, iPad, and Android that I built end to end. It imports recipes from links, Instagram, and photos, matches ingredients to USDA nutrition data, and works offline.',
    metric: { value: 'App Store', label: 'live, 850+ commits' },
    stack: ['React Native', 'Expo', 'TypeScript', 'Supabase', 'PostgreSQL'],
    skills: ['GitHub Actions', 'Vercel', 'React', 'Tailwind CSS', 'Node.js'],
    link: { label: 'pirho.app', href: 'https://pirho.app' },
  },
  {
    id: 'bench',
    accent: 'var(--sky)',
    title: 'Bench',
    context: 'Gmango AI · 2026',
    description:
      'The LLM evaluation platform behind our model decisions. It runs clinical benchmarks against any model backend with an LLM-as-a-judge core, per-run cost tracking, and live metrics.',
    metric: { value: '9 × 6', label: 'benchmarks × model backends' },
    stack: ['Python', 'SageMaker', 'vLLM', 'RAG'],
    skills: ['AWS', 'LLM evaluation'],
  },
  {
    id: 'voice',
    accent: 'var(--violet)',
    title: 'Voice agent',
    context: 'Gmango AI · 2026',
    description:
      'A real-time voice agent with single- and multi-agent modes. Audio streams over WebSockets, and every turn is broken down by latency and cost per service, so picking a model is a measured decision.',
    metric: { value: '3,000+', label: 'users' },
    stack: ['React', 'TypeScript', 'FastAPI', 'WebSockets'],
  },
  {
    id: 'aa',
    accent: 'var(--amber)',
    title: 'Crew connection model',
    context: 'American Airlines · 2025',
    description:
      'Rebuilt the model behind live crew-connection delay predictions at 7 hubs. It beat the old one in a week-long side-by-side test on live data, and in production it saved about 100 flight delays a month.',
    metric: { value: '5.5 → 3.6 min', label: 'mean absolute error' },
    stack: ['Python', 'CatBoost', 'Databricks', 'SQL'],
  },
  {
    id: 'climate',
    accent: 'var(--sky)',
    title: 'Climate data warehouse',
    context: 'UT Austin · 2024',
    description:
      'A warehouse that reconciles 7 large climate datasets with no shared naming system. Layered dbt models clean the data and process only new records on each run.',
    metric: { value: '7', label: 'datasets, one schema' },
    stack: ['SQL', 'Python', 'dbt', 'BigQuery'],
  },
];

export type Experience = {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  blurb: string;
  /**
   * Where the bar sits on the timeline, as 'YYYY-MM' (end is exclusive; null
   * means still going). Where `period` only names years, the bar starts in
   * January, so tighten these if you want month accuracy.
   */
  span: [string, string | null];
  /**
   * Splits the bar into stages (intern, part-time, full-time). Each stage is
   * drawn in its own style and listed in the detail panel.
   */
  phases?: { kind: 'intern' | 'part' | 'full'; label: string; when: string; span: [string, string | null] }[];
  /** CSS colour for this role's bar and detail panel. */
  accent: string;
  highlights?: { value: string; label: string }[];
  /** Skill names (from SKILL_GROUPS) used in this role. */
  skills?: string[];
};

export const EXPERIENCES: Experience[] = [
  {
    id: 'gmango',
    company: 'Gmango AI',
    role: 'Research & ML Engineer',
    period: '2024 – present',
    location: 'Remote',
    blurb:
      'LLM systems for healthcare: a voice agent, an evaluation platform, and the Java services behind the patient health profile. Started on the Flutter patient app.',
    span: ['2024-06', null],
    phases: [
      { kind: 'intern', label: 'Intern', when: 'Summer 2024', span: ['2024-06', '2024-09'] },
      { kind: 'part', label: 'Part-time', when: 'Spring 2025', span: ['2025-01', '2025-06'] },
      { kind: 'part', label: 'Part-time', when: 'Fall 2025', span: ['2025-09', '2025-12'] },
      { kind: 'full', label: 'Full-time', when: 'Dec 2025 – present', span: ['2025-12', null] },
    ],
    accent: 'var(--accent)',
    highlights: [
      { value: '3,000+', label: 'voice agent users' },
      { value: '9 × 6', label: 'benchmarks × model backends' },
      { value: '0.811 F1', label: 'best of 9 extraction methods' },
    ],
    skills: ['Flutter', 'Dart', 'Java', 'Spring Boot', 'AWS', 'Python', 'FastAPI', 'scikit-learn', 'Docker'],
  },
  {
    id: 'aa',
    company: 'American Airlines',
    role: 'Data Scientist Intern',
    period: 'Summer 2025',
    location: 'Fort Worth, TX',
    blurb:
      'Improved the live crew-connection delay model for 7 hubs and doubled the speed of the Databricks job that feeds it.',
    span: ['2025-06', '2025-09'],
    accent: 'var(--amber)',
    highlights: [
      { value: '5.5 → 3.6 min', label: 'mean absolute error' },
      { value: '~100', label: 'flight delays saved a month' },
      { value: '2×', label: 'faster Databricks job' },
    ],
    skills: ['Python', 'SQL', 'Databricks', 'CatBoost'],
  },
  {
    id: 'ut-code',
    company: 'Code Assist, UT Austin',
    role: 'Undergraduate Researcher',
    period: '2023',
    location: 'Austin, TX',
    blurb:
      'Wrote unit tests, including multi-threaded cases, and user-management API endpoints for an AI auto-grader.',
    span: ['2023-01', '2024-01'],
    accent: 'var(--sky)',
    skills: ['Python', 'PostgreSQL'],
  },
];

/** `span` as in Experience; a null start means it began before the timeline does. */
export const EDUCATION: {
  degree: string;
  short: string;
  school: string;
  period: string;
  span: [string | null, string | null];
}[] = [
  { degree: 'BS Computer Science', short: 'BS', school: 'UT Austin', period: '2025', span: [null, '2026-01'] },
  { degree: 'MS Computer Science', short: 'MS', school: 'UT Austin', period: '2026 – 2028', span: ['2026-08', '2028-06'] },
];

export const SKILL_GROUPS: { id: string; title: string; accent: string; skills: string[] }[] = [
  {
    id: 'lang',
    accent: 'var(--accent)',
    title: 'Languages',
    skills: ['Python', 'TypeScript', 'JavaScript', 'Java', 'SQL', 'C', 'Dart'],
  },
  {
    id: 'ml',
    accent: 'var(--amber)',
    title: 'ML & AI',
    skills: [
      'PyTorch',
      'MLX',
      'Stable-Baselines3',
      'CatBoost',
      'scikit-learn',
      'LoRA',
      'GRPO',
      'GPTQ',
      'RAG',
      'LLM evaluation',
      'vLLM',
    ],
  },
  {
    id: 'be',
    accent: 'var(--sky)',
    title: 'Backend & data',
    skills: [
      'FastAPI',
      'Spring Boot',
      'Node.js',
      'PostgreSQL',
      'Supabase',
      'DynamoDB',
      'Databricks',
      'dbt',
      'WebSockets',
    ],
  },
  {
    id: 'fe',
    accent: 'var(--coral)',
    title: 'Frontend & mobile',
    skills: ['React', 'React Native', 'Expo', 'Flutter', 'Tailwind CSS'],
  },
  {
    id: 'cloud',
    accent: 'var(--violet)',
    title: 'Cloud & tooling',
    skills: ['AWS', 'Docker', 'GitHub Actions', 'Vercel', 'pytest'],
  },
];

/** Skill name -> where it was used (project titles first, then employers). */
export const SKILL_USES: Record<string, string[]> = (() => {
  const uses: Record<string, string[]> = {};
  const add = (skill: string, where: string) => {
    const list = uses[skill] || (uses[skill] = []);
    if (!list.includes(where)) list.push(where);
  };
  PROJECTS.forEach((p) => [...p.stack, ...(p.skills || [])].forEach((s) => add(s, p.title)));
  EXPERIENCES.forEach((e) => (e.skills || []).forEach((s) => add(s, e.company)));
  return uses;
})();

export const CONTACT = {
  email: 'ldshudsonw@gmail.com',
  phone: '(602) 505-5220',
  location: 'Austin, Texas',
  social: [
    { label: 'GitHub', handle: '@hudsonwhipple', href: 'https://github.com/hudsonwhipple' },
    {
      label: 'LinkedIn',
      handle: 'hudson-whipple',
      href: 'https://www.linkedin.com/in/hudson-whipple-864565286/',
    },
  ],
};

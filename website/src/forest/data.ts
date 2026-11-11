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
  /** Skill names (from SKILL_GROUPS) used in this role. */
  skills?: string[];
};

export const EXPERIENCES: Experience[] = [
  {
    id: 'gmango',
    company: 'Gmango AI',
    role: 'Research & ML Engineer',
    period: '2023 – present',
    location: 'Remote',
    blurb:
      'LLM systems for healthcare: a voice agent, an evaluation platform, and the Java services behind the patient health profile. Started on the Flutter patient app.',
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
    skills: ['Python', 'SQL', 'Databricks', 'CatBoost'],
  },
  {
    id: 'ut-ca',
    company: 'Curricular Analytics, UT Austin',
    role: 'Data Analyst / Software Engineer',
    period: '2024 – 2026',
    location: 'Austin, TX',
    blurb:
      'Led developers on a web app that checks degree plans against live course data to find bottlenecks. Demoed it to 60+ faculty administrators.',
    skills: ['React', 'Python', 'PostgreSQL'],
  },
  {
    id: 'ut-code',
    company: 'Code Assist, UT Austin',
    role: 'Undergraduate Researcher',
    period: '2023',
    location: 'Austin, TX',
    blurb:
      'Wrote unit tests, including multi-threaded cases, and user-management API endpoints for an AI auto-grader.',
    skills: ['Python', 'PostgreSQL'],
  },
];

export const EDUCATION = [
  { degree: 'MS Computer Science', school: 'UT Austin', period: '2026 – 2028' },
  { degree: 'BS Computer Science', school: 'UT Austin', period: '2025' },
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

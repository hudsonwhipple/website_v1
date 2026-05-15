export const TECH_CATEGORIES = [
  {
    id: 'lang',
    title: 'Languages',
    skills: [
      { name: 'Python', slug: 'python' },
      { name: 'Java', slug: 'openjdk' },
      { name: 'JavaScript', slug: 'javascript' },
      { name: 'TypeScript', slug: 'typescript' },
      { name: 'C', slug: 'c' },
      { name: 'Dart', slug: 'dart' },
      { name: 'SQL', slug: 'postgresql' },
    ],
  },
  {
    id: 'fe',
    title: 'Frontend & Mobile',
    skills: [
      { name: 'React', slug: 'react' },
      { name: 'React Native', slug: 'react' },
      { name: 'Flutter', slug: 'flutter' },
    ],
  },
  {
    id: 'be',
    title: 'Backend & DB',
    skills: [
      { name: 'Flask', slug: 'flask' },
      { name: 'PostgreSQL', slug: 'postgresql' },
      { name: 'MongoDB', slug: 'mongodb' },
    ],
  },
  {
    id: 'cloud',
    title: 'Cloud & DevOps',
    skills: [
      { name: 'GCP', slug: 'googlecloud' },
      { name: 'AWS', slug: 'awslambda' },
      { name: 'Docker', slug: 'docker' },
      { name: 'Databricks', slug: 'databricks' },
    ],
  },
  {
    id: 'ml',
    title: 'ML & AI',
    skills: [
      { name: 'PyTorch', slug: 'pytorch' },
      { name: 'NumPy', slug: 'numpy' },
      { name: 'Pandas', slug: 'pandas' },
      { name: 'Colab', slug: 'googlecolab' },
    ],
  },
];

export const EXPERIENCES = [
  {
    id: 'gmango',
    role: 'Founding Engineer',
    company: 'Gmango AI',
    period: '2023 — Present',
    location: 'Remote',
    blurb:
      'Built the full mobile frontend in Flutter — checkout, user management, marketplace. Backend streaming services and research on ML models for medical diagnosis.',
    image: 'Gmango_logo.png',
    tags: ['Flutter', 'Dart', 'Python', 'Backend', 'AI/ML', 'REST API'],
  },
  {
    id: 'aa',
    role: 'Data Scientist Intern',
    company: 'American Airlines',
    period: 'Summer 2025',
    location: 'Fort Worth, TX',
    blurb:
      'Expanded the Flight Attendant Standby Tool — an ML model preventing hundreds of crew delays across every monitor at the IOC. Built model performance monitoring and live-tested before production.',
    image: 'american_airlines_logo.webp',
    tags: ['ML', 'Python', 'Databricks', 'SQL', 'MLOps'],
  },
  {
    id: 'ut-ca',
    role: 'Data Analyst / SWE',
    company: 'Curricular Analytics — UT Austin CTL',
    period: '2024 — 2026',
    location: 'Austin, TX',
    blurb:
      'Led developers on a web app that analyzes degree plans against live data to find bottlenecks in college majors. Demoed a prototype to 60+ faculty administrators.',
    image: 'longhorn_logo.png',
    tags: ['React', 'Python', 'PostgreSQL', 'Data Analysis'],
  },
  {
    id: 'ut-code',
    role: 'Undergraduate Researcher',
    company: 'Code Assist — UT Austin',
    period: '2023',
    location: 'Austin, TX',
    blurb:
      'Built unit tests (including multi-threading) for an AI auto-grading application. Implemented backend API endpoints for user management against PostgreSQL.',
    image: 'longhorn_logo.png',
    tags: ['Python', 'PostgreSQL', 'Testing', 'REST API'],
  },
];

export const PROJECTS = [
  {
    id: 'climate',
    title: 'Climate Data Warehouse',
    description:
      'Built a GCP + dbt data warehouse stitching together climate datasets through transformation layers to study how environmental policy reshapes climate patterns.',
    image: 'glass-cloud-icon.png',
    tags: ['GCP', 'dbt', 'SQL', 'ETL'],
  },
  {
    id: 'grocery',
    title: 'Grocery Recommender',
    description:
      'Feature-engineered an imbalanced dataset with SMOTE and trained classical ML models to recommend products to likely customers.',
    image: 'fluid-shopping-basket.png',
    tags: ['Python', 'ML', 'SMOTE', 'scikit-learn'],
  },
  {
    id: 'rag',
    title: 'Medical RAG',
    description:
      'Built a RAG pipeline over medical documents with embedding models and a vector DB — grounding answers in source material for clinical queries.',
    image: 'Gmango_logo.png',
    tags: ['RAG', 'VectorDB', 'Embeddings'],
  },
  {
    id: 'drone',
    title: 'Autonomous Drone',
    description:
      'Trained and evaluated RL policies for autonomous drone control in PyTorch, using TensorBoard to compare rewards and debug policy behavior.',
    image: 'Google_Co_Lab.png',
    tags: ['PyTorch', 'RL', 'TensorBoard'],
  },
  {
    id: 'tickets',
    title: 'Cheap Cheap Tickets',
    description:
      'Shipped a full-stack ticket marketplace in React, Flask, and PostgreSQL with secure auth, real-time availability, and integrated payments.',
    image: 'music-app.png',
    tags: ['React', 'Flask', 'PostgreSQL'],
  },
  {
    id: 'pintos',
    title: 'PintOS',
    description:
      'Built an OS from scratch — priority donation, page replacement, synchronization, thread scheduling, and a small file system.',
    image: 'binary-coding.png',
    tags: ['C', 'OS', 'Concurrency'],
  },
  {
    id: 'emulator',
    title: 'System Emulator',
    description:
      'Wrote a processor emulator under the PIPE- optimization technique with pipelining, hazard detection, and forwarding logic.',
    image: 'system.png',
    tags: ['C', 'Assembly', 'Architecture'],
  },
  {
    id: 'website',
    title: 'Personal Website',
    description:
      'Designed and built this site from scratch in React + TS — particles, 3D tilt cards, typewriter, and scroll-triggered animations throughout.',
    image: 'comp_setup.png',
    tags: ['React', 'TypeScript', 'CSS'],
  },
];

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

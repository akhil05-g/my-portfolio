/**
 * Central portfolio data — generated for Gujjarlapudi Akhil Babu.
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Gujjarlapudi Akhil Babu',
  displayName: 'Akhil Babu',
  firstName: 'AKHIL',
  seriesTag: 'THE SERIES',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'AN AKHIL ORIGINAL',
  role: 'Full-Stack Developer & AI Engineer',
  tagline: ['Full-Stack Architect', 'Agentic AI', 'Java SE 17'],
  intro:
    'CS undergraduate at SRM University, published Agentic AI researcher (MARLF), and Oracle Certified Java SE 17 Developer building scalable distributed systems, NLP pipelines, and modular full-stack applications with React, Node.js, and MySQL.',
  location: 'Mangalagiri, Andhra Pradesh',
  email: 'akhilbabu7710@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/akhil-gujjarlapudi-409390363',
    github: 'https://github.com/akhil05-g',
    leetcode: 'https://leetcode.com/u/gradientlasso/',
    paper: 'https://doi.org/10.5281/zenodo.19998804',
    portfolio: 'https://kaleidoscopic-begonia-c80c1d.netlify.app/',
  },
  resumePdf: '/assets/Akhil_Gujjarlapudi_Resume.pdf',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Gujjarlapudi Akhil Babu',
  },
  interests: ['Distributed Systems', 'System Design', 'Agentic AI & LLMs', 'Competitive Programming', 'Mentalism & Inner Peace', 'Badminton'],
};

export const education = [
  {
    school: 'S.R.M University',
    place: 'Mangalagiri, AP',
    degree: 'B.Tech in Computer Science and Engineering',
    period: 'August 2023 – August 2027',
    score: 'CGPA 8.0/10.0',
    coursework: 'Data Structures & Algorithms, OOP with Java, DBMS, Operating Systems, Generative AI, ERP Solutions',
  },
  {
    school: 'NRI Junior College',
    place: 'Tenali, AP',
    degree: 'Intermediate (MPC) — Board of Intermediate Education',
    period: 'June 2021 – April 2023',
    score: 'Score 90%',
  },
];

export const experience = [
  {
    company: 'Infosys Springboard',
    role: 'Artificial Intelligence Intern',
    place: 'Remote',
    period: 'June 2025 – August 2025',
    points: [
      'Built end-to-end ML classification and regression pipelines using Python and scikit-learn; optimized model performance via systematic feature engineering and hyperparameter tuning.',
      'Conducted exploratory data analysis (EDA) on real-world datasets and communicated technical findings and model metrics to cross-functional stakeholders through structured reports.',
    ],
  },
  {
    company: 'SmartBridge',
    role: 'Salesforce CRM Intern',
    place: 'Remote',
    period: 'June 2025 – August 2025',
    points: [
      'Designed and automated 5+ enterprise workflows using Salesforce CRM, leveraging Process Builder and Flow to streamline pipeline operations.',
      'Constructed custom objects, validation rules, and relationship models that boosted data integrity across CRM pipelines by 30%.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'marlf-agentic-ai',
    title: 'MARLF — Agentic AI Framework',
    year: '2026',
    genre: 'Research • Multi-Agent RL • LLM',
    logline: 'Memory-Augmented Multi-Agent RL with LLM Feedback published on Zenodo (DOI: 10.5281/zenodo.19998804).',
    stack: ['Python', 'MAPPO', 'PettingZoo', 'LLM', 'Reinforcement Learning'],
    build: [
      'Co-authored a published framework augmenting multi-agent PPO with semantic episodic memory and LLM-guided reward shaping.',
      'Achieved 59.9%–65.4% improvement over baselines across 3 Multi-Agent Particle Environment (MPE) benchmarks (Cohen’s d > 7.0), validating agentic coordination gains.',
    ],
    features: [
      'Semantic episodic memory retention',
      'LLM-guided reward shaping feedback loop',
      'Multi-agent PPO (MAPPO) coordination',
      '3 MPE environment benchmark validations',
      'Published conference proceeding on Zenodo',
    ],
    metrics: [
      { value: '+65.4%', label: 'improvement over baseline' },
      { value: '> 7.0', label: "Cohen's d effect size" },
      { value: '3', label: 'MPE benchmarks' },
      { value: '2026', label: 'published proceeding' },
    ],
    github: 'https://github.com/akhil05-g/MARLF',
    palette: { from: '#2a0610', via: '#7a0f24', to: '#0b0710', accent: '#ff3d5a' },
    motif: 'shield',
  },
  {
    id: 'summai',
    title: 'SUMMAI — AI Summarization Engine',
    year: '2026',
    genre: 'AI • NLP • Transformers • REST API',
    logline: 'Dual-mode NLP pipeline (TextRank extractive + BART abstractive) evaluated on 300K+ CNN/DailyMail articles.',
    stack: ['Python', 'NLP', 'BART', 'TextRank', 'REST API'],
    build: [
      'Built a dual-mode NLP pipeline (TextRank extractive + BART abstractive) to solve information overload; evaluated on 300K+ CNN/DailyMail articles using ROUGE metrics.',
      'Exposed summarization as a REST API endpoint, demonstrating modular pipeline architecture and web service design.',
    ],
    features: [
      'Dual-mode summarization (Extractive + Abstractive)',
      'BART transformer neural abstractive model',
      'TextRank graph-based key sentence extraction',
      'ROUGE-1, ROUGE-2, and ROUGE-L metric evaluation',
      'Modular REST API web service design',
    ],
    metrics: [
      { value: '300K+', label: 'articles evaluated' },
      { value: '2', label: 'hybrid NLP modes' },
      { value: 'ROUGE', label: 'metric validated' },
      { value: 'REST', label: 'API endpoint live' },
    ],
    github: 'https://github.com/akhil05-g/SUMMAI',
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'flow',
  },
  {
    id: 'vyuha-platform',
    title: 'Vyuha — Sports Management Platform',
    year: '2025',
    genre: 'Full-Stack • Modular MVC • Cloud',
    logline: 'Modular MVC architecture separating presentation, business logic, and persistence for tournament scheduling and dashboards.',
    stack: ['React.js', 'Node.js', 'MySQL', 'MongoDB', 'JWT Auth'],
    build: [
      'Designed a modular MVC architecture separating data, business logic, and presentation layers to support independent horizontal scaling of API and dashboard services.',
      'Optimized MySQL schema for multi-entity CRUD at scale; decoupled data, business logic, and UI layers for independent scaling.',
    ],
    features: [
      'Decoupled multi-tier MVC architecture',
      'JWT authentication with role-based access control',
      'Optimized database schema for tournament CRUD',
      'Real-time tournament dashboards and match brackets',
      'Production REST API with structured service layer',
    ],
    metrics: [
      { value: '100%', label: 'decoupled MVC' },
      { value: 'JWT', label: 'secure role auth' },
      { value: 'CRUD', label: 'optimized query latency' },
      { value: 'Live', label: 'tournament management' },
    ],
    github: 'https://github.com/akhil05-g/Vyuha',
    palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
    motif: 'tenants',
  },
  {
    id: 'ecommerce-dbms',
    title: 'E-Commerce Database Architecture',
    year: '2025',
    genre: 'Databases • Java • Enterprise Architecture',
    logline: 'Production-grade enterprise schema with 15+ normalized tables, ACID compliance, and parameterized JDBC queries.',
    stack: ['Java', 'MySQL', 'JDBC', 'SQL Server', 'ACID'],
    build: [
      'Designed a production-grade relational schema with 15+ normalized tables enforcing ACID compliance, foreign key constraints, and indexing for full order lifecycle tracking and revenue reporting.',
      'Used JDBC with parameterized queries for all CRUD operations, eliminating SQL injection risk and ensuring data consistency under concurrent transactions.',
    ],
    features: [
      '15+ normalized relational tables (3NF)',
      'Strict ACID transactional compliance',
      'JDBC data layer with parameterized queries (zero SQL injection)',
      'Composite indexing and query execution planning',
      'Full order lifecycle and financial ledger tracking',
    ],
    metrics: [
      { value: '15+', label: 'normalized tables' },
      { value: '100%', label: 'ACID compliance' },
      { value: '0', label: 'SQL injection risk' },
      { value: '3NF', label: 'schema design' },
    ],
    github: 'https://github.com/akhil05-g/E-Commerce-Management-System',
    palette: { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' },
    motif: 'shield',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'marlf-research',
    title: 'Published Researcher',
    org: 'Zenodo / Conference Proceeding',
    detail: 'Co-authored MARLF (Memory-Augmented Multi-Agent RL with LLM Feedback) published on Zenodo (DOI: 10.5281/zenodo.19998804). 59.9%–65.4% improvement over MAPPO baselines.',
    laurel: 'Agentic AI Paper',
    link: 'https://doi.org/10.5281/zenodo.19998804',
  },
  {
    id: 'leetcode-knight',
    title: 'LeetCode Knight',
    org: 'LeetCode',
    detail: 'Knight Badge holder with extensive problem solving across Arrays, Hashing, Two-Pointers, and Sliding Window.',
    laurel: 'Knight Badge',
    link: 'https://leetcode.com/u/gradientlasso/',
  },
  {
    id: 'oracle-certified',
    title: 'Oracle Certified Professional',
    org: 'Java SE 17 Developer',
    detail: 'Industry-standard certification validating enterprise Java mastery — OOP, Streams, Concurrency, JDBC, and Modular Architecture.',
    laurel: 'Java SE 17',
  },
  {
    id: 'infosys-qualifier',
    title: 'Round 2 Qualifier',
    org: 'Infosys Springboard 6.0',
    detail: 'Cleared Round 2 of the Infosys Springboard certification challenge — demonstrating strong AI/ML fundamentals and analytical problem-solving.',
    laurel: 'Infosys 6.0',
  },
  {
    id: 'badminton-academy',
    title: 'District Sports Trainee',
    org: 'District Sports Academy',
    detail: '3 months of rigorous training in competitive badminton — advanced court footwork, endurance, reflexes, and strategic play.',
    laurel: 'Badminton Court',
  },
];

export type Certification = { issuer: string; name: string; link?: string };

export const certifications: Certification[] = [
  { issuer: 'Oracle', name: 'Oracle Certified Professional: Java SE 17 Developer' },
  { issuer: 'SAP', name: 'Solving Business Problems using Generative AI Hub (SAP S/4 HANA)' },
  { issuer: 'Infosys', name: 'Artificial Intelligence Internship Certification (Infosys Springboard)' },
  { issuer: 'Cisco', name: 'Introduction to Cybersecurity (Cisco Networking Academy)' },
  { issuer: 'Cisco', name: 'Cybersecurity Essentials' },
  { issuer: 'Coursera', name: 'Machine Learning with Python' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    subtitle: 'Java & Python first',
    skills: [
      { name: 'Java', mono: 'Jv', note: 'Certified' },
      { name: 'Python', mono: 'Py', note: 'AI / ML' },
      { name: 'JavaScript', mono: 'Js' },
      { name: 'TypeScript', mono: 'Ts' },
      { name: 'C++', mono: 'C+' },
    ],
  },
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    subtitle: 'Research & intelligent pipelines',
    skills: [
      { name: 'Agentic AI', mono: 'Ag', note: 'Published' },
      { name: 'Multi-Agent RL', mono: 'Rl' },
      { name: 'LLMs & Feedback', mono: 'Lm' },
      { name: 'Transformers & BART', mono: 'Bt' },
      { name: 'NLP & TextRank', mono: 'Tr' },
      { name: 'scikit-learn', mono: 'Sk' },
      { name: 'PyTorch', mono: 'Pt' },
    ],
  },
  {
    id: 'fullstack',
    title: 'Full-Stack & Web',
    subtitle: 'Modular architecture & interfaces',
    skills: [
      { name: 'React.js', mono: 'Re' },
      { name: 'Node.js', mono: 'No' },
      { name: 'Express.js', mono: 'Ex' },
      { name: 'REST APIs', mono: 'Ap' },
      { name: 'Tailwind CSS', mono: 'Tw' },
      { name: 'MVC Architecture', mono: 'Mv' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    subtitle: 'ACID compliance & relational modeling',
    skills: [
      { name: 'MySQL', mono: 'My' },
      { name: 'PostgreSQL', mono: 'Pg' },
      { name: 'MongoDB', mono: 'Mg' },
      { name: 'SQL Server', mono: 'Ss' },
      { name: 'JDBC', mono: 'Jb' },
      { name: 'ACID Compliance', mono: 'Ac' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & DevOps',
    subtitle: 'Workflows & enterprise automation',
    skills: [
      { name: 'Git / GitHub', mono: 'Gt' },
      { name: 'JWT Auth', mono: 'Jw' },
      { name: 'Salesforce CRM', mono: 'Sf' },
      { name: 'SOLID Principles', mono: 'So' },
      { name: 'Agile SDLC', mono: 'Ag' },
    ],
  },
  {
    id: 'fundamentals',
    title: 'CS Fundamentals',
    subtitle: 'The foundations & problem solving',
    skills: [
      { name: 'DSA', mono: 'Ds', note: 'Knight' },
      { name: 'OOPs with Java', mono: 'Oo' },
      { name: 'DBMS', mono: 'Db' },
      { name: 'Operating Systems', mono: 'Os' },
      { name: 'System Design', mono: 'Sd' },
      { name: 'Computer Networks', mono: 'Cn' },
    ],
  },
];

/**
 * Cross-references shown when a skill card is hovered/tapped:
 * where the skill appears in projects, research or achievements.
 */
export const skillEvidence: Record<string, string[]> = {
  Java: ['Oracle Certified Professional: Java SE 17', 'E-Commerce Database Architecture', 'OOP with Java'],
  Python: ['MARLF Research Framework', 'SUMMAI Summarization Engine', 'Infosys AI Internship'],
  JavaScript: ['Vyuha Sports Management Platform', 'Modern Web UIs'],
  TypeScript: ['Next.js Starter Template', 'Full-Stack Types'],
  'C++': ['DSA & Competitive Programming'],
  'Agentic AI': ['MARLF Zenodo Publication (DOI: 10.5281/zenodo.19998804)'],
  'Multi-Agent RL': ['MARLF MAPPO + PettingZoo Framework'],
  'LLMs & Feedback': ['LLM-Guided Reward Shaping in MARLF', 'SAP GenAI Hub'],
  'Transformers & BART': ['SUMMAI Abstractive Summarizer'],
  'NLP & TextRank': ['SUMMAI Dual-Mode Pipeline'],
  'scikit-learn': ['Infosys Springboard AI Internship'],
  'React.js': ['Vyuha Sports Platform', 'Portfolio Series UI'],
  'Node.js': ['Vyuha Sports Management Backend', 'REST API Layer'],
  'REST APIs': ['SUMMAI REST API Endpoint', 'Vyuha Service Layer'],
  'Tailwind CSS': ['Vyuha Platform', 'Modern Responsive Portfolios'],
  'MVC Architecture': ['Vyuha Full-Stack Decoupled Architecture'],
  MySQL: ['E-Commerce DBMS Architecture', 'Vyuha Platform Database'],
  PostgreSQL: ['Relational Data Modeling', 'Enterprise Databases'],
  MongoDB: ['Vyuha Real-Time Match Data', 'Document Stores'],
  JDBC: ['E-Commerce Management System Parameterized Queries'],
  'ACID Compliance': ['E-Commerce 15+ Normalized Relational Schema'],
  'Git / GitHub': ['akhil05-g Repositories & Open Source'],
  'JWT Auth': ['Vyuha Role-Based Authentication'],
  'Salesforce CRM': ['SmartBridge Salesforce CRM Internship'],
  DSA: ['LeetCode Knight Badge', 'Arrays, Hashing, Two-Pointer, Sliding Window'],
  DBMS: ['E-Commerce Database Architecture', 'SRM Coursework'],
  'System Design': ['Modular Service Layers', 'Distributed Systems'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Foundation',
    period: '2021 – 2023',
    synopsis: 'Junior College years at NRI Junior College, Tenali — building mathematical discipline and algorithmic foundations.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Discipline',
        description: 'Intermediate MPC at NRI Junior College, Tenali — graduating with an outstanding 90% score.',
        tags: ['MPC', 'Tenali', '90%'],
        runtime: 'Jun 2021 – Apr 2023',
        palette: amber,
      },
    ],
  },
  {
    number: 2,
    title: 'The Core Arc — SRM University',
    period: '2023 – Present',
    synopsis: 'Computer Science and Engineering at SRM University, Mangalagiri — Data Structures, Algorithms, OOP, and Competitive Coding.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Undergrad',
        description: 'Bachelor of Technology in Computer Science & Engineering at SRM University AP — CGPA 8.0/10.0.',
        tags: ['B.Tech CSE', 'SRM AP', 'CGPA 8.0'],
        runtime: 'Aug 2023 – Present',
        palette: violet,
      },
      {
        code: 'S02 E02',
        title: 'The Knight',
        description: 'Achieved the coveted Knight Badge on LeetCode through consistent problem-solving across Arrays, Two-Pointer, and Sliding Window.',
        tags: ['LeetCode', 'Knight Badge', 'Algorithms'],
        runtime: 'Competitive Coding',
        palette: crimson,
      },
      {
        code: 'S02 E03',
        title: 'The Certified Engineer',
        description: 'Earned the Oracle Certified Professional: Java SE 17 Developer credential, mastering enterprise OOP and concurrency.',
        tags: ['Java 17', 'Oracle Certified', 'Enterprise'],
        runtime: 'Oracle Certified',
        palette: jade,
      },
    ],
  },
  {
    number: 3,
    title: 'Industry & Enterprise Practice',
    period: '2025',
    synopsis: 'Real-world impact across AI pipelines at Infosys Springboard and CRM automation at SmartBridge.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'The AI Intern',
        description: 'Built ML pipelines at Infosys Springboard — feature engineering, classification models, and stakeholder analytics.',
        tags: ['Infosys', 'AI / ML', 'scikit-learn'],
        runtime: 'Jun – Aug 2025',
        palette: ocean,
      },
      {
        code: 'S03 E02',
        title: 'The Workflow Architect',
        description: 'Salesforce CRM Intern at SmartBridge — engineered 5+ automated business flows improving pipeline data integrity by 30%.',
        tags: ['Salesforce', 'Flow Automation', 'CRM'],
        runtime: 'SmartBridge',
        palette: amber,
      },
    ],
  },
  {
    number: 4,
    title: 'Research & The Originals',
    period: '2025 – 2026',
    synopsis: 'Breakthrough research in Agentic AI published on Zenodo alongside production-grade full-stack and database systems.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'The Published Researcher',
        description: 'Co-authored MARLF: Memory-Augmented Multi-Agent RL with LLM Feedback, achieving +59–65% over MAPPO baselines (Zenodo DOI: 10.5281/zenodo.19998804).',
        tags: ['Agentic AI', 'MARLF', 'Zenodo DOI'],
        runtime: 'Published 2026',
        palette: crimson,
      },
      {
        code: 'S04 E02',
        title: 'The Summarization Engine',
        description: 'Engineered SUMMAI — hybrid BART transformer and TextRank summarizer evaluated on 300K+ CNN/DailyMail articles.',
        tags: ['SUMMAI', 'NLP', 'BART', 'REST API'],
        runtime: '300K+ Articles',
        palette: ocean,
      },
      {
        code: 'S04 E03',
        title: 'Vyuha & Enterprise DBMS',
        description: 'Built Vyuha sports tournament platform (React, Node, MySQL, JWT) and a 15+ table ACID-compliant E-Commerce database.',
        tags: ['Vyuha', 'E-Commerce', 'MySQL', 'JDBC'],
        runtime: 'Full-Stack & Data',
        palette: violet,
      },
    ],
  },
  {
    number: 5,
    title: 'Discipline, Flow & What’s Next',
    period: 'Now streaming',
    synopsis: 'Distributed systems, system design, open-source engineering, badminton training, and the philosophy of mentalism.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'Court & Mind',
        description: '3 months of competitive training at District Sports Academy badminton court paired with mentalism and inner calm.',
        tags: ['Badminton', 'Mentalism', 'Stillness & Flow'],
        runtime: 'Daily discipline',
        palette: jade,
      },
      {
        code: 'S05 E02',
        title: 'The Next Architecture',
        description: 'Advancing distributed systems, scalable microservices, and next-generation agentic workflows.',
        tags: ['Distributed Systems', 'System Design', 'Open Source'],
        runtime: 'In production',
        palette: amber,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Primary Language', title: 'Java SE 17', detail: 'Oracle Certified Professional Developer', palette: amber },
  { label: 'Agentic Research', title: 'MARLF', detail: 'Published paper • +65.4% over baseline (Zenodo)', palette: crimson },
  { label: 'The AI Original', title: 'SUMMAI', detail: 'Hybrid BART + TextRank • 300K+ articles', palette: ocean },
  { label: 'Full-Stack Platform', title: 'Vyuha', detail: 'Sports Management • Modular MVC & JWT', palette: violet },
  { label: 'Enterprise Database', title: 'E-Commerce DB', detail: '15+ normalized tables • ACID compliance', palette: jade },
  { label: 'Competitive Coding', title: 'Knight Badge', detail: 'LeetCode • Arrays, Two-Pointer, Sliding Window', palette: crimson },
  { label: 'Academic High', title: 'SRM University', detail: 'B.Tech CSE • CGPA 8.0/10.0', palette: ocean },
  { label: 'AI Industry Arc', title: 'Infosys Intern', detail: 'Machine Learning & EDA pipelines', palette: amber },
  { label: 'Enterprise Flow', title: 'Salesforce CRM', detail: 'SmartBridge • 30% data integrity boost', palette: violet },
  { label: 'Discipline & Court', title: 'Badminton & Mind', detail: 'District Sports Academy • Mentalism', palette: jade },
];

export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Identity',
    title: 'Gujjarlapudi Akhil Babu',
    lines: ['CS Undergraduate @ SRM University, Mangalagiri', 'Full-Stack Architect • Agentic AI Researcher • Oracle Certified'],
    chips: ['CGPA 8.0', 'SRM AP'],
  },
  {
    kicker: 'Research',
    title: 'Published in 2026',
    lines: ['MARLF: Memory-Augmented Multi-Agent RL with LLM Feedback', '+59.9% to 65.4% improvement across 3 MPE benchmarks', 'DOI: 10.5281/zenodo.19998804'],
    chips: ['PettingZoo', 'MAPPO', 'LLM Feedback'],
  },
  {
    kicker: 'Engineering',
    title: 'Four Originals',
    lines: ['MARLF — Agentic AI framework with semantic memory', 'SUMMAI — Hybrid BART + TextRank NLP engine (300K+ articles)', 'Vyuha — Modular MVC sports management platform', 'E-Commerce DBMS — 15+ normalized tables with ACID compliance'],
  },
  {
    kicker: 'Credentials',
    title: 'Industry Certified',
    lines: ['Oracle Certified Professional: Java SE 17 Developer', 'SAP Generative AI Hub • Cisco Cybersecurity • Infosys AI'],
  },
  {
    kicker: 'Problem Solving',
    title: 'LeetCode Knight',
    lines: ['Knight Badge on LeetCode', 'Arrays, Hashing, Two-Pointer, Sliding Window mastery'],
    chips: ['Knight Badge', 'Algorithms'],
  },
  {
    kicker: 'Beyond Code',
    title: 'Court & Mentalism',
    lines: ['District Sports Academy Badminton Trainee', 'The art of stillness, flow, and inner resilience'],
  },
];

export type ProfileId = 'akhil' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'akhil',
    name: 'Akhil',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, research & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, architecture & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc, mentalism & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • SRM AP & Credentials', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • Research & Platforms`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from the resume', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Moments • ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};

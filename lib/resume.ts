// Content transcribed and condensed from Resume_SWE_2026_09_06.pdf.
// All three design demos consume this single source of truth.
export const profile = {
  name: "Boyu Liu",
  initials: "BL",
  title: "Software engineer & AI researcher",
  email: "liuboyu1110@gmail.com", // Preferred website contact; the résumé PDF stays original.
  phone: "+1 (217) 418-6501",
  github: "https://github.com/Ender-600",
  linkedin: "https://linkedin.com/in/boyu-liu",
  website: "https://ender600.com",
  resume: "/resume/Boyu-Liu-Resume-2026-09.pdf",
  portrait: "/boyu-liu.jpg",
  intro: "I build intelligent systems that work in the real world — from dependable agent runtimes to thoughtful software products.",
  bio: "I’m pursuing an M.S. in Information Networking at Carnegie Mellon University, after graduating from UIUC with Highest Distinction in Mathematics and Computer Science. My work connects AI agents, distributed systems, and end-to-end product engineering.",
  updated: "September 2026",
};

export const education = [
  {
    school: "Carnegie Mellon University",
    short: "CMU",
    degree: "M.S. in Information Networking",
    period: "Aug 2026 – May 2028",
    note: "Graduate studies",
    courses: [] as string[],
  },
  {
    school: "University of Illinois Urbana-Champaign",
    short: "UIUC",
    degree: "B.S. in Mathematics and Computer Science",
    period: "Aug 2022 – May 2026",
    note: "GPA 3.88 / 4.0 · Highest Distinction",
    courses: ["Data Structures", "Linear Algebra", "Computer Systems", "Algorithms", "Numerical Methods", "Machine Learning", "Database Systems", "Machine Learning Systems", "Distributed Systems", "AI Agent", "Compilers"],
  },
];

export const experiences = [
  {
    id: "tetrabot",
    company: "TetraBot",
    role: "R&D Intern",
    location: "Nanjing, China",
    period: "Jun 2026 – Aug 2026",
    summary: "Rebuilt an AI fire-response platform around a deterministic runtime, from agent orchestration to edge vision and a live 3D interface.",
    metric: "66%",
    metricLabel: "less incident-handling time",
    tags: ["Python", "asyncio", "Redis Streams", "React", "Three.js", "Edge AI"],
    bullets: [
      "Re-architected a legacy LLM-agent-orchestrated fire-response system into a deterministic state-machine kernel with deploy-time AI agents in Python, reducing incident handling from 497.5s to 167.9s (66%).",
      "Built a runtime on Python asyncio, Redis Streams, and SQLite: first-response latency fell from 19s to 36ms, with 3.7× throughput under concurrent alarms, zero-loss kill -9 crash recovery, and SLA-timeout red lines.",
      "Implemented a lightweight agent runtime with bounded tool-calling loops, JSON Schema validation, per-persona permission whitelists, resumable on-disk sessions, and audit logging.",
      "Designed a workflow DSL and LLM compiler to write building emergency-response plans, then verify them against safety rules and simulated fire drills in a generate–verify–repair loop.",
      "Built a conversational ingestion agent for device sheets, floor-plan images, and CAD drawings, reducing onboarding from days of scripting to one human-confirmed dialogue session. Shipped a voice copilot and a React + Three.js building view with live fire localization.",
      "Deployed YOLOv8n fire/smoke detection on the RK3588 NPU using ONNX → RKNN INT8 quantization, increasing inference from 2 to 41 FPS at FP16-equivalent accuracy and serving detections over HTTP into a multi-frame analysis chain.",
    ],
  },
  {
    id: "westlake",
    company: "Machine Intelligence Lab · Westlake University",
    role: "Research Intern",
    location: "Hangzhou, China",
    period: "Jul 2025 – Sep 2025",
    summary: "Explored offline reinforcement learning for long-horizon, high-precision robotic assembly on FurnitureBench.",
    metric: "Offline RL",
    metricLabel: "for robotic manipulation",
    tags: ["Python", "PyTorch", "IsaacGym", "Reinforcement Learning"],
    bullets: [
      "Researched offline reinforcement learning for long-horizon, high-precision robotic manipulation on FurnitureBench furniture-assembly tasks.",
      "Built an end-to-end training and evaluation pipeline with Python, PyTorch, and IsaacGym, adapting the Reinformer sequence-modeling architecture and fusing multimodal inputs for high-dimensional control.",
      "Implemented Max-Return Sequence Modeling with expectile regression to address trajectory stitching failures in standard Decision Transformers; stabilized optimization with entropy-temperature tuning and gradient clipping.",
    ],
  },
  {
    id: "ncsa",
    company: "National Center for Supercomputing Applications",
    role: "Full-Stack Software Engineer",
    location: "Champaign, IL",
    period: "Oct 2024 – Dec 2024",
    summary: "Built EACUE, a mobile-first platform that makes physical accessibility evaluations easier to collect and manage.",
    metric: "EACUE",
    metricLabel: "accessibility evaluation platform",
    tags: ["Next.js", "Node.js", "MongoDB", "Full-Stack"],
    bullets: [
      "Built EACUE, a mobile-first survey platform for recording accessibility evaluations across physical venues, replacing fragmented manual collection with a centralized digital system.",
      "Engineered a Next.js, Node.js, and MongoDB architecture for end-to-end survey delivery, structured storage, and CRUD workflows for users, venues, and evaluation records.",
      "Designed a dynamic question-routing engine that adapts survey flow to real-time user selections, improving form efficiency and reducing unnecessary input steps.",
    ],
  },
];

export type ProjectCategory = "AI & Research" | "Product" | "Systems";
export const projects: {
  id: string; name: string; eyebrow: string; category: ProjectCategory;
  summary: string; metric: string; metricLabel: string; tags: string[];
  href: string | null; linkLabel: string; bullets: string[];
}[] = [
  {
    id: "irts",
    name: "IRTS-ToolBench + TSIR-Agent",
    eyebrow: "Verifiable reasoning for irregular time series",
    category: "AI & Research",
    summary: "A 20K-question benchmark and a process-verifiable agent that turn irregular time-series data into auditable answers.",
    metric: "+40 pp",
    metricLabel: "over baseline LLMs on the proposed benchmark",
    tags: ["Multi-Agent Systems", "Time Series", "Tool Calling", "Benchmarking"],
    href: "https://arxiv.org/abs/2606.15107",
    linkLabel: "Read paper",
    bullets: [
      "Built IRTS-ToolBench, a benchmark for irregular time-series QA agents with 20K questions across 10 task types and 13 domains, covering asynchronous sampling, missingness, and structural irregularity.",
      "Developed an irregularity-aware tool library for alignment, missingness handling, regularity recovery, and downstream time-series analysis.",
      "Designed TSIR-Agent with Observation, Planning, Execution, and Verification stages and schema-constrained tool use for process-verifiable, auditable reasoning.",
      "Outperformed baseline LLMs by 40 percentage points on the proposed irregular time-series QA benchmark.",
    ],
  },
  {
    id: "rhythm",
    name: "Rhythm",
    eyebrow: "A little less friction. A little more flow.",
    category: "Product",
    summary: "A voice-first iOS productivity app that turns natural-language thoughts into tasks, with offline-first sync and agent-powered workflows.",
    metric: "100%",
    metricLabel: "offline functionality with automatic reconciliation",
    tags: ["SwiftUI", "FastAPI", "Supabase", "Swift Concurrency"],
    href: null,
    linkLabel: "Project details",
    bullets: [
      "Built a voice-first iOS task manager with SwiftUI and MVVM, supporting natural-language speech capture and a flexible planning workflow.",
      "Architected a modular Python/FastAPI backend with separate API, tool-runtime, service, and repository layers for structured task creation, context retrieval, and status updates.",
      "Designed Supabase/PostgreSQL infrastructure with Row Level Security, JWT authentication, and RESTful APIs for user data isolation.",
      "Built background synchronization with conflict resolution, retries, and network monitoring, enabling 100% offline functionality and automatic reconciliation on reconnect.",
      "Used Swift Concurrency, AppIntents, and Apple Speech APIs for responsive voice interaction, background work, and Siri-triggered capture.",
    ],
  },
  {
    id: "raft",
    name: "Raft Distributed Log",
    eyebrow: "Consensus under imperfect conditions",
    category: "Systems",
    summary: "A fault-tolerant log replication system in Go, designed to keep distributed nodes in agreement through crashes and network partitions.",
    metric: "Raft",
    metricLabel: "leader election · replication · fault recovery",
    tags: ["Go", "Distributed Systems", "RPC", "Consensus"],
    href: null,
    linkLabel: "Project details",
    bullets: [
      "Implemented a fault-tolerant Raft consensus module in Go with leader election, randomized election timeouts, heartbeats, and term-based state transitions.",
      "Built log replication and commitment using RequestVote and AppendEntries RPCs, per-follower replication state, majority-based commit advancement, and ordered ApplyMsg delivery.",
      "Validated correctness under leader crashes, follower disconnections, network partitions, delayed/reordered/dropped RPCs, concurrent client commands, and rejoining nodes with inconsistent logs.",
    ],
  },
  {
    id: "e3",
    name: "E3 Mini-Benchmark",
    eyebrow: "Efficiency. Energy. Effectiveness.",
    category: "AI & Research",
    summary: "A hardware-aware framework for comparing small language models across quality, latency, memory, and energy per token.",
    metric: "80%",
    metricLabel: "lower GPU memory with LoRA fine-tuning",
    tags: ["Python", "PyTorch", "LoRA", "SuperGLUE", "MMLU"],
    href: "https://ender-600.github.io/llm-arch-compare/",
    linkLabel: "Explore benchmark",
    bullets: [
      "Designed a benchmarking framework for small language models centered on the Efficiency–Energy–Effectiveness triad.",
      "Implemented LoRA parameter-efficient continuous pretraining and fine-tuning with architecture-specific target modules, reducing trainable parameters to 2.4% and GPU memory by 80%.",
      "Engineered a hardware-aware inference engine measuring TTFT, TBT, throughput, and VRAM, with an nvidia-smi power monitor for energy-per-token metrics.",
      "Built an automated evaluation suite combining SuperGLUE fine-tuning for classification and Seq2Seq heads with MMLU few-shot tasks.",
      "Compared encoder-only, decoder-only, and encoder–decoder architectures across performance, speed, and energy consumption.",
    ],
  },
];

export const publications = [
  {
    title: "Towards Verifiable Agentic Data Science: Solving Irregular TSQA Via Tool-Grounded Reasoning",
    authors: "Sanhorn Chen, Xiaoyang Chen, Boyu Liu, Roy Zhao",
    venue: "arXiv preprint · 2026",
    detail: "IRTS-ToolBench & TSIR-Agent · Posted June 13, 2026",
    year: "2026",
    href: "https://arxiv.org/abs/2606.15107",
  },
  {
    title: "TSAQA: Time Series Analysis Question and Answering Benchmark",
    authors: "Baoyu Jing, Sanhorn Chen, Lecheng Zheng, Boyu Liu, Zihao Li, et al.",
    venue: "GEM 2026 · ACL 2026",
    detail: "The 5th Workshop on Generation, Evaluation & Metrics",
    year: "2026",
    href: "https://arxiv.org/abs/2601.23204",
  },
  {
    title: "Comparative Analysis of Encoder-Only, Decoder-Only, and Encoder-Decoder Language Models",
    authors: "Boyu Liu",
    venue: "DOI: 10.5220/0012829800004547",
    detail: "Language model architectures",
    year: "2024",
    href: "https://doi.org/10.5220/0012829800004547",
  },
];

export const skillGroups = [
  { name: "Languages", items: ["Python", "C++", "C", "Java", "JavaScript", "TypeScript", "Swift", "Go", "SQL", "CUDA"] },
  { name: "ML & Data", items: ["PyTorch", "TensorFlow", "TensorBoard", "NumPy", "Pandas", "Matplotlib", "LangChain", "W&B", "Verl", "SGLang"] },
  { name: "Web & Databases", items: ["React", "Svelte", "HTML/CSS", "Spring Boot", "FastAPI", "Express.js", "Node.js", "Next.js", "MongoDB", "MySQL", "PostgreSQL"] },
  { name: "Cloud & Tools", items: ["AWS", "GCP", "Postman", "Git", "GitHub", "Docker", "Vercel", "Supabase", "Notion"] },
];

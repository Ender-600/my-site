import { projects as resumeProjects } from "@/lib/resume";

export type PortfolioProject = {
  id: string;
  name: string;
  eyebrow: string;
  category: string;
  summary: string;
  metric?: string;
  metricLabel?: string;
  tags: string[];
  href: string | null;
  linkLabel: string;
  demo?: string;
  bullets: string[];
  preview?: {
    src: string;
    poster?: string;
    alt: string;
    animated: boolean;
  };
};

// Latest résumé entries remain sourced from resume.ts; the additional projects
// and their real media come from the existing portfolio's projects section.
function resumeProject(id: string): PortfolioProject {
  const project = resumeProjects.find((entry) => entry.id === id);
  if (!project) throw new Error(`Missing résumé project: ${id}`);
  return project;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "pulse-ai",
    name: "PulseAI",
    eyebrow: "A new perspective on your next idea",
    category: "AI & Product",
    summary: "An AI stakeholder simulation platform that helps validate product ideas through conversations with diverse synthetic personas.",
    metric: "90%",
    metricLabel: "lower simulation latency with parallel persona generation",
    tags: ["Next.js", "LLMs", "PostgreSQL", "ReadableStream", "Zod"],
    href: "https://github.com/Ender-600/pulse-ai",
    linkLabel: "View source",
    demo: "https://x.com/Cobbi17859341/status/2017990474594689126",
    bullets: [
      "Built a full-stack platform that simulates AI stakeholder reactions to validate product ideas.",
      "Designed a multi-agent LLM pipeline that generates diverse synthetic personas in parallel, reducing simulation latency by 90%.",
      "Implemented streaming chat APIs for real-time conversations with AI personas, with conversations persisted to PostgreSQL.",
    ],
    preview: { src: "/project_preview/pulse-ai.png", alt: "Screenshot of the PulseAI stakeholder simulation platform", animated: false },
  },
  resumeProject("irts"),
  resumeProject("rhythm"),
  {
    id: "pathforms",
    name: "PathForms",
    eyebrow: "Mathematics you can play with",
    category: "Interactive Learning",
    summary: "An interactive web game for exploring mathematical paths and forms, developed for the Illinois Mathematics Lab.",
    tags: ["React", "TypeScript", "Next.js", "D3.js"],
    href: "https://play.math.illinois.edu/PathForms/",
    linkLabel: "Play PathForms",
    bullets: ["Developed a web game for visualizing mathematical path and form concepts for the Illinois Mathematics Lab, using React, TypeScript, Next.js, and D3.js."],
    preview: { src: "/project_preview/PathForms.gif", poster: "/project_preview/PathForms-poster.webp", alt: "Actual PathForms gameplay preview from the original portfolio", animated: true },
  },
  {
    id: "colortaiko",
    name: "ColorTaiko",
    eyebrow: "Where color, rhythm, and mathematics meet",
    category: "Interactive Learning",
    summary: "An interactive web game that brings mathematical concepts to life through color and rhythm, developed for the Illinois Mathematics Lab.",
    tags: ["React", "TypeScript", "Next.js", "D3.js"],
    href: "https://play.math.illinois.edu/ColorTaiko!/",
    linkLabel: "Play ColorTaiko",
    bullets: ["Developed a web game for the Illinois Mathematics Lab that visualizes mathematical concepts through color and rhythm mechanics, using React, TypeScript, Next.js, and D3.js."],
    preview: { src: "/project_preview/ColorTaiko.gif", poster: "/project_preview/ColorTaiko-poster.webp", alt: "Actual ColorTaiko gameplay preview from the original portfolio", animated: true },
  },
  {
    ...resumeProject("e3"),
    preview: { src: "/project_preview/E3-mini-bench.gif", poster: "/project_preview/E3-mini-bench-poster.webp", alt: "Actual E3 Mini-Benchmark interface preview from the original portfolio", animated: true },
  },
  {
    id: "twitch-plus",
    name: "Twitch+",
    eyebrow: "A more personal way to discover Twitch",
    category: "Full-Stack Product",
    summary: "A Twitch resource search app with personalized, content-based recommendations and a full-stack Spring Boot architecture.",
    tags: ["Spring Boot", "React", "MySQL", "AWS", "Spring Security"],
    href: "https://u5v6gtkbrw.us-east-2.awsapprunner.com/",
    linkLabel: "Visit Twitch+",
    bullets: [
      "Built a full-stack Spring Boot application for searching Twitch resources with personalized content-based recommendations.",
      "Implemented a React and Ant Design frontend, MySQL on AWS RDS, RESTful APIs through OpenFeign, Spring Security authentication, and deployment on AWS App Runner.",
    ],
    preview: { src: "/project_preview/twitch+.png", alt: "Screenshot of the Twitch+ personalized recommendation application", animated: false },
  },
  resumeProject("raft"),
  {
    id: "isis",
    name: "ISIS Distributed Transaction System",
    eyebrow: "Consistent ordering across a distributed cluster",
    category: "Systems",
    summary: "A distributed transaction processor in Go, using ISIS-style totally ordered multicast to keep live nodes in agreement.",
    metric: "1 ms",
    metricLabel: "p95 latency in a three-node cluster",
    tags: ["Go", "Distributed Systems", "TCP", "ISIS Multicast"],
    href: null,
    linkLabel: "Project details",
    bullets: [
      "Built a distributed transaction processing system in Go across multiple cluster VMs using TCP peer communication.",
      "Implemented ISIS-style totally ordered multicast to ensure consistent global ordering across live nodes.",
      "Achieved 1 ms p95 latency in three-node clusters and 3 ms p95 / 10 ms p99 latency at eight nodes.",
    ],
  },
];

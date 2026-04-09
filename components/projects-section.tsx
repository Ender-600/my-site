"use client";

import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    name: "PulseAI",
    tagline: "AI Stakeholder Simulation Platform",
    description:
      "Full-stack platform that simulates AI stakeholder reactions to validate product ideas. Multi-agent LLM pipeline generates diverse synthetic personas in parallel, reducing simulation latency by 90%. Streaming chat APIs for real-time conversations with AI personas persisted to PostgreSQL.",
    skills: ["Next.js", "LLMs", "PostgreSQL", "ReadableStream", "Zod"],
    href: "https://github.com/Ender-600/pulse-ai",
    demo: "https://x.com/Cobbi17859341/status/2017990474594689126",
    preview: "/project_preview/pulse-ai.png",
  },
  {
    name: "Rhythm",
    tagline: "Voice-First iOS Productivity App",
    description:
      "Voice-first task management iOS app using SwiftUI and MVVM. Modular Python/FastAPI backend for agent orchestration with structured tool calling. Supabase + PostgreSQL with Row Level Security, JWT auth, and 100% offline functionality with background sync.",
    skills: ["SwiftUI", "FastAPI", "Supabase", "PostgreSQL", "Swift Concurrency"],
    href: null,
    demo: null,
    preview: null,
  },
  {
    name: "ISIS Distributed Transaction System",
    tagline: "Distributed Systems",
    description:
      "Distributed transaction processing system in Go across multiple cluster VMs using TCP peer communication. ISIS-style totally ordered multicast ensuring consistent global ordering across live nodes. Achieved 1ms p95 latency in 3-node and 3ms p95 / 10ms p99 at 8 nodes.",
    skills: ["Go", "Distributed Systems", "TCP", "ISIS Multicast"],
    href: null,
    demo: null,
    preview: null,
  },
  {
    name: "Twitch+",
    tagline: "Personalized Twitch Recommender",
    description:
      "Full-stack Spring Boot application for searching Twitch resources with personalized content-based recommendations. React + Ant Design frontend, MySQL on AWS RDS, RESTful APIs via OpenFeign, Spring Security for auth, and AWS App Runner deployment.",
    skills: ["Spring Boot", "React", "MySQL", "AWS", "Spring Security"],
    href: "https://u5v6gtkbrw.us-east-2.awsapprunner.com/",
    demo: null,
    preview: "/project_preview/twitch+.png",
  },
  {
    name: "PathForms",
    tagline: "Interactive Math Visualization Game",
    description:
      "Web game for visualizing mathematical path and form concepts, developed for the Illinois Mathematics Lab. Built with React, TypeScript, Next.js, and D3.js.",
    skills: ["React", "TypeScript", "Next.js", "D3.js"],
    href: "https://play.math.illinois.edu/PathForms/",
    demo: null,
    preview: "/project_preview/PathForms.gif",
  },
  {
    name: "ColorTaiko",
    tagline: "Interactive Math Visualization Game",
    description:
      "Web game that visualizes mathematical concepts through color and rhythm mechanics, developed for the Illinois Mathematics Lab. Built with React, TypeScript, Next.js, and D3.js.",
    skills: ["React", "TypeScript", "Next.js", "D3.js"],
    href: "https://play.math.illinois.edu/ColorTaiko!/",
    demo: null,
    preview: "/project_preview/ColorTaiko.gif",
  },
  {
    name: "E3 Mini-Benchmark",
    tagline: "LLM Benchmarking Framework",
    description:
      "Benchmarking framework for Small Language Models on the Efficiency-Energy-Effectiveness triad. LoRA fine-tuning reducing trainable parameters to 2.4% and GPU memory by 80%. Hardware-aware inference engine measuring TTFT, throughput, and energy-per-token.",
    skills: ["Python", "PyTorch", "LoRA", "SuperGLUE", "MMLU"],
    href: "https://ender-600.github.io/llm-arch-compare/",
    demo: null,
    preview: "/project_preview/E3-mini-bench.gif",
  },
];

export function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    const el = document.getElementById("projects");
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-32 bg-[#eeedea] dark:bg-gray-950">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div
            className={`text-center mb-20 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-6xl md:text-7xl font-thin tracking-tight mb-6 text-black dark:text-white relative">
              Projects
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-gray-400 to-transparent dark:via-gray-600"></div>
            </h2>
          </div>

          <div className="flex flex-col gap-5">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`group flex flex-col sm:flex-row gap-0 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-black hover:border-gray-400 dark:hover:border-gray-600 transition-all duration-300 hover-lift overflow-hidden ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${200 + index * 80}ms` }}
              >
                {/* Preview image */}
                {project.preview && (
                  <div className="sm:w-80 sm:shrink-0 bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-3">
                    <img
                      src={project.preview}
                      alt={`${project.name} preview`}
                      className="w-full h-auto object-contain rounded"
                    />
                  </div>
                )}

                {/* Text content */}
                <div className={`flex flex-col justify-between p-6 flex-1 ${!project.preview ? "sm:pl-6" : ""}`}>
                  <div>
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div>
                        <h3 className="text-lg font-medium text-black dark:text-white">
                          {project.name}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-500">{project.tagline}</p>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-gray-400 dark:text-gray-600 hover:text-black dark:hover:text-white transition-colors duration-200 flex items-center gap-1"
                          >
                            <ExternalLink className="h-3.5 w-3.5" />
                            <span>Demo</span>
                          </a>
                        )}
                        {project.href && (
                          <a
                            href={project.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 dark:text-gray-600 hover:text-black dark:hover:text-white transition-colors duration-200"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        )}
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed font-light">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.skills.map((skill, si) => (
                      <Badge
                        key={si}
                        variant="outline"
                        className="text-xs border-gray-200 dark:border-gray-800 text-gray-500 dark:text-gray-500"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

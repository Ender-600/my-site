"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Brain } from "lucide-react";

const experiences = [
  {
    title: "Research Intern",
    company: "Machine Intelligence Lab @ Westlake University",
    period: "Jul 2025 – Sept 2025",
    description:
      "Extended Reinforce (ICML 2024) with visual perception (R3M + proprioception) for policy learning on FurnitureBench robotic assembly tasks. Built an end-to-end offline RL training pipeline enabling 50K+ step runs on variable-length trajectory data.",
    skills: ["Python", "PyTorch", "Reinforcement Learning", "Computer Vision", "W&B"],
    icon: <Brain className="h-5 w-5" />,
  },
  {
    title: "Full-Stack Software Engineer",
    company: "National Center for Supercomputing Applications",
    period: "Oct 2024 – Dec 2024",
    description:
      "Built EACUE, a mobile-first survey platform for accessibility evaluations using Next.js + Node.js + MongoDB, with a dynamic question-routing engine and Docker containerization.",
    skills: ["Next.js", "React", "TypeScript", "MongoDB", "Docker"],
    icon: <Code className="h-5 w-5" />,
  },
];

export function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="about"
      className="py-32 bg-[#f5f4f0] dark:bg-black relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-64 h-64 border border-gray-200 dark:border-gray-800 rotate-45 animate-spin-slow opacity-10"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-gray-100 dark:bg-gray-900 rounded-full animate-pulse-glow opacity-20"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div
            className={`text-center mb-20 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-6xl md:text-7xl font-thin tracking-tight mb-6 text-black dark:text-white relative">
              About
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-gray-400 to-transparent dark:via-gray-600"></div>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left — Bio */}
            <div
              className={`transition-all duration-1000 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="space-y-6 text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                <p className="text-lg">
                  Hi, I&apos;m Boyu Liu — a Math &amp; CS student at UIUC, incoming M.Eng. EECS at UC Berkeley. I build at the intersection of machine learning research and software engineering.
                </p>
                <p>
                  I&apos;m genuinely excited by new technology, and one of my favorite things to do is turn ideas into real products — from the first line of code to something people can actually use. There&apos;s something uniquely satisfying about shipping something end-to-end.
                </p>
                <p>
                  My research interests includes Robotics that generalizes in the physical world, reinforcement learning, time series question answering, AI agents, and LLM routing. On the engineering side, I care about systems and infrastructures that are reliable and well-designed for fast iteration.
                </p>
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                {["Robotics", "Reinforcement Learning", "Time Series QA", "AI Agents", "LLM Routing", "Full-Stack"].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1.5 border border-gray-300 dark:border-gray-700 text-gray-500 dark:text-gray-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right — Experience */}
            <div
              className={`transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <h3 className="text-2xl font-light text-black dark:text-white mb-8">Work Experience</h3>
              <div className="space-y-5">
                {experiences.map((exp, index) => (
                  <Card
                    key={index}
                    className="group border border-gray-200 dark:border-gray-800 bg-white dark:bg-black hover:border-gray-400 dark:hover:border-gray-600 transition-all duration-300"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <CardContent className="p-5">
                      <div className="flex items-start gap-4">
                        <div className="p-2.5 border border-gray-200 dark:border-gray-800 group-hover:border-gray-400 dark:group-hover:border-gray-600 transition-colors duration-300 shrink-0">
                          {exp.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-start gap-2 mb-0.5">
                            <h4 className="text-sm font-medium text-black dark:text-white">
                              {exp.title}
                            </h4>
                            <Badge className="bg-gray-100 dark:bg-gray-900 text-gray-500 dark:text-gray-500 border-gray-200 dark:border-gray-800 text-xs shrink-0 font-normal">
                              {exp.period}
                            </Badge>
                          </div>
                          <p className="text-xs text-gray-500 dark:text-gray-500 mb-3">
                            {exp.company}
                          </p>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 leading-relaxed font-light">
                            {exp.description}
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            {exp.skills.map((skill, si) => (
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
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

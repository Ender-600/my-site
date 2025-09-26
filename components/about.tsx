"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Code,
  Brain,
  Database,
  Award,
  Users,
  ArrowRight,
  GraduationCap,
  Cpu,
  Globe,
} from "lucide-react";

const experiences = [
  {
    title: "Software Developer",
    company: "National Center for Supercomputing Application",
    period: "Oct 2024 - Dec 2024",
    description:
      "Developed a Next.js full-stack accessibility mobile web survey app to assess and record accessibility evaluation of different venues, streamlining evaluation processes.",
    skills: ["Next.js", "React", "TypeScript", "MongoDB", "Docker"],
    icon: <Code className="h-5 w-5" />,
    color: "from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700",
  },
  {
    title: "Research & Development Intern",
    company: "MiLab",
    period: "July 2025 - Present",
    description:
      "Implemented a transformer-based RL policy (ReinFormer) for FurnitureBench tasks, integrating dual-camera VIP/R3M features with proprioception and returns-to-go.",
    skills: [
      "Python",
      "PyTorch",
      "Reinforcement Learning",
      "Computer Vision",
      "Robotics",
    ],
    icon: <Brain className="h-5 w-5" />,
    color: "from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600",
  },
  {
    title: "Research Assistant",
    company: "Intelligent Motion Lab",
    period: "Feb 2025 - April 2025",
    description:
      "Designing and developing a Python 'Omnimorphism' SDK that dynamically wraps third-party objects, transforms programming languages, and bridges libraries.",
    skills: ["Python", "LLMs", "Langchain", "SDK Development", "AI"],
    icon: <Cpu className="h-5 w-5" />,
    color: "from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-500",
  },
  {
    title: "Frontend Software Developer",
    company: "Illinois Mathematics Lab",
    period: "Aug 2024 - Present",
    description:
      "Developed web games ColorTaiko and PathForms for visualizing mathematical concepts using React, TypeScript, Next.js, and D3.js.",
    skills: ["React", "TypeScript", "Next.js", "D3.js", "Game Development"],
    icon: <Globe className="h-5 w-5" />,
    color: "from-gray-400 to-gray-500 dark:from-gray-500 dark:to-gray-400",
  },
];

const achievements = [
  {
    icon: <GraduationCap className="h-5 w-5" />,
    title: "UIUC Student",
    description: "Mathematics & Computer Science",
    detail: "GPA: 3.88/4.00",
    color: "bg-gray-100 dark:bg-gray-900",
  },
  {
    icon: <Award className="h-5 w-5" />,
    title: "Published Researcher",
    description: "ICDSE Conference",
    detail: "Language Models Analysis",
    color: "bg-gray-200 dark:bg-gray-800",
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: "Open Source Contributor",
    description: "Active Developer",
    detail: "GitHub: Ender-600",
    color: "bg-gray-300 dark:bg-gray-700",
  },
  {
    icon: <Database className="h-5 w-5" />,
    title: "Full-Stack Developer",
    description: "Multiple Projects",
    detail: "React, Python, ML",
    color: "bg-gray-400 dark:bg-gray-600",
  },
];

const skills = [
  { name: "Python", level: 95, color: "bg-gray-800 dark:bg-gray-200" },
  {
    name: "JavaScript/TypeScript",
    level: 90,
    color: "bg-gray-700 dark:bg-gray-300",
  },
  { name: "React/Next.js", level: 88, color: "bg-gray-600 dark:bg-gray-400" },
  {
    name: "Machine Learning",
    level: 85,
    color: "bg-gray-500 dark:bg-gray-500",
  },
  { name: "C++", level: 80, color: "bg-gray-400 dark:bg-gray-600" },
  { name: "Java", level: 75, color: "bg-gray-300 dark:bg-gray-700" },
];

export function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="about"
      className="py-32 bg-white dark:bg-black relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-64 h-64 border border-gray-200 dark:border-gray-800 rotate-45 animate-spin-slow opacity-10"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-gray-100 dark:bg-gray-900 rounded-full animate-pulse-glow opacity-20"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 border-2 border-gray-300 dark:border-gray-700 rotate-12 animate-float opacity-15"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div
            className={`text-center mb-24 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-6xl md:text-7xl font-thin tracking-tight mb-8 text-black dark:text-white relative">
              About Me
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-0.5 bg-gradient-to-r from-transparent via-gray-400 to-transparent dark:via-gray-600"></div>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
              A passionate software developer and AI researcher with a strong
              foundation in mathematics and computer science
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-start">
            {/* Left Column - Personal Info */}
            <div className="space-y-12">
              {/* Personal Card */}
              <Card
                className={`border border-gray-200 dark:border-gray-800 bg-white dark:bg-black hover-lift transition-all duration-1000 ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-10"
                }`}
              >
                <CardContent className="p-12 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-full -translate-y-16 translate-x-16 opacity-20"></div>

                  <h3 className="text-3xl font-light mb-8 text-black dark:text-white relative z-10">
                    Personal Profile
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed font-light text-lg relative z-10">
                    I&apos;m a Mathematics and Computer Science student at the
                    University of Illinois Urbana-Champaign with a passion for
                    building intelligent systems and creating exceptional
                    digital experiences. My work spans across machine learning,
                    full-stack development, and AI research, with a particular
                    focus on transformer-based models and reinforcement
                    learning.
                  </p>

                  <div className="grid grid-cols-2 gap-6 mb-8 relative z-10">
                    {achievements.map((achievement, index) => (
                      <div
                        key={index}
                        className={`group p-6 border border-gray-100 dark:border-gray-900 hover:border-gray-200 dark:hover:border-gray-800 transition-all duration-500 hover-lift ${achievement.color} rounded-sm`}
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div className="flex items-start space-x-4">
                          <div className="text-gray-800 dark:text-gray-200 mt-1 group-hover:scale-110 transition-transform duration-300">
                            {achievement.icon}
                          </div>
                          <div>
                            <h4 className="font-medium text-sm text-black dark:text-white mb-1">
                              {achievement.title}
                            </h4>
                            <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                              {achievement.description}
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-500 font-medium">
                              {achievement.detail}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Button className="w-full group bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 font-medium py-4 transition-all duration-500 hover-lift relative z-10 overflow-hidden">
                    <span className="relative z-10 flex items-center justify-center">
                      View Full Resume
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </Button>
                </CardContent>
              </Card>

              {/* Skills Section */}
              <Card
                className={`border border-gray-200 dark:border-gray-800 bg-white dark:bg-black hover-lift transition-all duration-1000 delay-300 ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-10"
                }`}
              >
                <CardContent className="p-12 relative overflow-hidden">
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-full translate-y-12 -translate-x-12 opacity-20"></div>

                  <h3 className="text-3xl font-light mb-8 text-black dark:text-white relative z-10">
                    Technical Skills
                  </h3>
                  <div className="space-y-8 relative z-10">
                    {skills.map((skill, index) => (
                      <div key={index} className="space-y-3 group">
                        <div className="flex justify-between items-center">
                          <span className="text-black dark:text-white font-medium group-hover:text-gray-600 dark:group-hover:text-gray-400 transition-colors duration-300">
                            {skill.name}
                          </span>
                          <span className="text-gray-500 dark:text-gray-500 text-sm">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-100 dark:bg-gray-900 h-2 rounded-full overflow-hidden">
                          <div
                            className={`h-2 transition-all duration-1000 ease-out ${skill.color} relative overflow-hidden`}
                            style={{ width: `${skill.level}%` }}
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Experience */}
            <div className="space-y-8">
              <h3
                className={`text-4xl font-thin mb-12 text-black dark:text-white transition-all duration-1000 delay-500 ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-10"
                }`}
              >
                Work Experience
              </h3>
              {experiences.map((exp, index) => (
                <Card
                  key={index}
                  className={`group border border-gray-200 dark:border-gray-800 bg-white dark:bg-black hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-500 hover-lift overflow-hidden ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-10"
                  }`}
                  style={{ animationDelay: `${600 + index * 200}ms` }}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <CardContent className="p-8 relative">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                    ></div>

                    <div className="flex items-start space-x-6 relative z-10">
                      <div
                        className={`p-4 border border-gray-200 dark:border-gray-800 group-hover:border-gray-400 dark:group-hover:border-gray-600 transition-all duration-300 ${
                          hoveredCard === index ? "scale-110" : "scale-100"
                        }`}
                      >
                        {exp.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h4 className="text-xl font-medium group-hover:text-gray-600 dark:group-hover:text-gray-400 transition-colors text-black dark:text-white">
                              {exp.title}
                            </h4>
                            <p className="text-gray-600 dark:text-gray-400 font-medium">
                              {exp.company}
                            </p>
                          </div>
                          <Badge className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-800 group-hover:bg-gray-200 dark:group-hover:bg-gray-800 transition-colors duration-300">
                            {exp.period}
                          </Badge>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed font-light">
                          {exp.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, skillIndex) => (
                            <Badge
                              key={skillIndex}
                              variant="outline"
                              className="text-xs bg-white dark:bg-black border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 hover:border-gray-300 dark:hover:border-gray-700 transition-colors duration-200 group-hover:scale-105"
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
    </section>
  );
}

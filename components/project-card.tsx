"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  Github,
  Eye,
  Calendar,
  Tag,
  Brain,
  Database,
  Globe,
  Cpu,
  ChevronRight,
  Play,
} from "lucide-react";

const projects = [
  {
    id: 1,
    title: "EACUE Accessibility Survey App",
    description:
      "Developed a Next.js full-stack accessibility mobile web survey app to assess and record accessibility evaluation of different venues, streamlining evaluation processes.",
    image: "/api/placeholder/600/400",
    category: "Full-Stack Web App",
    status: "Completed",
    technologies: ["Next.js", "TypeScript", "MongoDB", "Docker", "Node.js"],
    githubUrl: "https://github.com/Ender-600",
    liveUrl: "https://eacue.visari.org/",
    startDate: "2024-10",
    endDate: "2024-12",
    features: [
      "Responsive Mobile Design",
      "Dynamic Survey Forms",
      "Real-time Data Collection",
      "MongoDB Integration",
      "Docker Deployment",
    ],
    icon: <Globe className="h-5 w-5" />,
    color: "from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700",
  },
  {
    id: 2,
    title: "ReinFormer RL Policy",
    description:
      "Implemented a transformer-based RL policy (ReinFormer) for FurnitureBench tasks, integrating dual-camera VIP/R3M features with proprioception and returns-to-go.",
    image: "/api/placeholder/600/400",
    category: "AI Research",
    status: "In Progress",
    technologies: [
      "Python",
      "PyTorch",
      "Reinforcement Learning",
      "Computer Vision",
      "Robotics",
    ],
    githubUrl: "https://github.com/Ender-600",
    liveUrl: "#",
    startDate: "2025-07",
    endDate: "Present",
    features: [
      "Transformer Architecture",
      "Dual-Camera Integration",
      "Offline RL Pipeline",
      "Isaac Gym Integration",
      "Real-world Deployment",
    ],
    icon: <Brain className="h-5 w-5" />,
    color: "from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600",
  },
  {
    id: 3,
    title: "Omnimorphism SDK",
    description:
      "Designing and developing a Python 'Omnimorphism' SDK that dynamically wraps third-party objects, transforms programming languages, and bridges libraries.",
    image: "/api/placeholder/600/400",
    category: "Developer Tools",
    status: "In Progress",
    technologies: ["Python", "LLMs", "Langchain", "SDK Development", "AI"],
    githubUrl: "https://github.com/Ender-600",
    liveUrl: "#",
    startDate: "2025-02",
    endDate: "2025-04",
    features: [
      "Dynamic Object Wrapping",
      "Language Translation",
      "Library Bridging",
      "LLM Integration",
      "Auto Code Generation",
    ],
    icon: <Cpu className="h-5 w-5" />,
    color: "from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-500",
  },
  {
    id: 4,
    title: "ColorTaiko Math Game",
    description:
      "Developed a web game ColorTaiko based on 'Topological Geometry of Units and Zero-divisors Origami' using React.js and Vite.",
    image: "/api/placeholder/600/400",
    category: "Educational Game",
    status: "Completed",
    technologies: ["React", "JavaScript", "Vite", "CSS Animations", "SVG"],
    githubUrl: "https://github.com/Ender-600",
    liveUrl: "https://play.math.illinois.edu/ColorTaiko!/",
    startDate: "2024-08",
    endDate: "2024-10",
    features: [
      "Interactive Animations",
      "Mathematical Concepts",
      "SVG Rendering",
      "Responsive Design",
      "Educational Content",
    ],
    icon: <Globe className="h-5 w-5" />,
    color: "from-gray-400 to-gray-500 dark:from-gray-500 dark:to-gray-400",
  },
  {
    id: 5,
    title: "PathForms Visualization",
    description:
      "Developed a web game PathForms for visualizing Nielsen Transformation in combinatorial group theory using TypeScript, Next.js, and D3.js.",
    image: "/api/placeholder/600/400",
    category: "Data Visualization",
    status: "Completed",
    technologies: [
      "TypeScript",
      "Next.js",
      "D3.js",
      "React",
      "Mathematical Visualization",
    ],
    githubUrl: "https://github.com/Ender-600",
    liveUrl: "https://play.math.illinois.edu/PathForms/",
    startDate: "2024-08",
    endDate: "2024-12",
    features: [
      "D3.js Visualization",
      "Interactive Graphs",
      "Mathematical Algorithms",
      "Mouse Interactions",
      "Educational Interface",
    ],
    icon: <Database className="h-5 w-5" />,
    color: "from-gray-500 to-gray-600 dark:from-gray-400 dark:to-gray-300",
  },
  {
    id: 6,
    title: "2025 Illini Datathon",
    description:
      "Developed a predictive framework that leverages recent 8-month spending trends to forecast customer spending for Q4, segment customers into 4 levels of risks.",
    image: "/api/placeholder/600/400",
    category: "Data Science",
    status: "Completed",
    technologies: [
      "Python",
      "LightGBM",
      "Machine Learning",
      "Data Analysis",
      "Clustering",
    ],
    githubUrl: "https://github.com/Ender-600",
    liveUrl: "#",
    startDate: "2025-01",
    endDate: "2025-02",
    features: [
      "LightGBM Regression",
      "Customer Segmentation",
      "Risk Assessment",
      "Feature Engineering",
      "Predictive Modeling",
    ],
    icon: <Brain className="h-5 w-5" />,
    color: "from-gray-600 to-gray-700 dark:from-gray-300 dark:to-gray-200",
  },
];

const categories = [
  "All",
  "Full-Stack Web App",
  "AI Research",
  "Developer Tools",
  "Educational Game",
  "Data Visualization",
  "Data Science",
];

export function ProjectCard() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto">
      {/* Enhanced Category Filter */}
      <div
        className={`flex flex-wrap justify-center gap-4 mb-20 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {categories.map((category, index) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            onClick={() => setSelectedCategory(category)}
            className={`group relative transition-all duration-500 hover-lift overflow-hidden ${
              selectedCategory === category
                ? "bg-black dark:bg-white text-white dark:text-black border-black dark:border-white"
                : "bg-white dark:bg-black text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600"
            }`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <span className="relative z-10 flex items-center">
              {category}
              {selectedCategory === category && (
                <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              )}
            </span>
            {selectedCategory === category && (
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            )}
          </Button>
        ))}
      </div>

      {/* Enhanced Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <Card
            key={project.id}
            className={`group border border-gray-200 dark:border-gray-800 bg-white dark:bg-black hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-500 overflow-hidden hover-lift relative ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ animationDelay: `${200 + index * 100}ms` }}
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            {/* Background Gradient */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
            ></div>

            <div className="relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />

              {/* Floating Elements */}
              <div className="absolute top-4 left-4 flex gap-2">
                <Badge className="bg-white/90 dark:bg-black/90 text-gray-900 dark:text-gray-100 border-gray-200 dark:border-gray-800 group-hover:scale-105 transition-transform duration-300">
                  {project.category}
                </Badge>
                <Badge
                  variant={
                    project.status === "Completed" ? "default" : "outline"
                  }
                  className={`${
                    project.status === "Completed"
                      ? "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 border-gray-200 dark:border-gray-700"
                      : "bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-200 border-yellow-200 dark:border-yellow-800"
                  } group-hover:scale-105 transition-transform duration-300`}
                >
                  {project.status}
                </Badge>
              </div>

              {/* Icon with Animation */}
              <div className="absolute top-4 right-4">
                <div
                  className={`p-3 border border-gray-200 dark:border-gray-800 bg-white/90 dark:bg-black/90 group-hover:border-gray-300 dark:group-hover:border-gray-700 transition-all duration-300 ${
                    hoveredProject === project.id
                      ? "scale-110 rotate-12"
                      : "scale-100 rotate-0"
                  }`}
                >
                  {project.icon}
                </div>
              </div>

              {/* Play Button for Live Projects */}
              {project.liveUrl !== "#" && (
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button
                    size="sm"
                    className="bg-white/90 dark:bg-black/90 text-gray-900 dark:text-gray-100 hover:bg-white dark:hover:bg-black border border-gray-200 dark:border-gray-800"
                  >
                    <Play className="h-4 w-4 mr-2" />
                    View Demo
                  </Button>
                </div>
              )}
            </div>

            <CardContent className="p-8 relative z-10">
              <h3 className="text-xl font-medium mb-3 group-hover:text-gray-600 dark:group-hover:text-gray-400 transition-colors text-black dark:text-white">
                {project.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed font-light">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.slice(0, 3).map((tech) => (
                  <Badge
                    key={tech}
                    variant="outline"
                    className="text-xs bg-white dark:bg-black border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 group-hover:scale-105 transition-transform duration-200"
                  >
                    {tech}
                  </Badge>
                ))}
                {project.technologies.length > 3 && (
                  <Badge
                    variant="outline"
                    className="text-xs bg-white dark:bg-black border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 group-hover:scale-105 transition-transform duration-200"
                  >
                    +{project.technologies.length - 3}
                  </Badge>
                )}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setSelectedProject(project)}
                    className="bg-white dark:bg-black border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-700 group-hover:scale-105 transition-transform duration-200"
                  >
                    <Eye className="h-4 w-4 mr-1" />
                    Details
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    asChild
                    className="bg-white dark:bg-black border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-700 group-hover:scale-105 transition-transform duration-200"
                  >
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    asChild
                    className="bg-white dark:bg-black border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-700 group-hover:scale-105 transition-transform duration-200"
                  >
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Enhanced Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 dark:bg-white/10 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <Card className="max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-200 dark:border-gray-800 bg-white dark:bg-black animate-scale-in">
            <CardContent className="p-8">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-3xl font-light text-black dark:text-white">
                  {selectedProject.title}
                </h2>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:scale-110 transition-transform duration-200"
                >
                  ×
                </Button>
              </div>

              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-sm mb-6"
              />

              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed font-light text-lg">
                {selectedProject.description}
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-medium mb-3 flex items-center text-black dark:text-white">
                    <Calendar className="h-4 w-4 mr-2" />
                    Project Timeline
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {selectedProject.startDate} - {selectedProject.endDate}
                  </p>
                </div>

                <div>
                  <h4 className="font-medium mb-3 flex items-center text-black dark:text-white">
                    <Tag className="h-4 w-4 mr-2" />
                    Technology Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="text-xs bg-white dark:bg-black border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="font-medium mb-4 text-black dark:text-white">
                  Key Features
                </h4>
                <ul className="grid grid-cols-2 gap-3 text-sm">
                  {selectedProject.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center text-gray-600 dark:text-gray-400"
                    >
                      <span className="w-1.5 h-1.5 bg-black dark:bg-white rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-4">
                <Button
                  asChild
                  className="flex-1 bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 group"
                >
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    View Demo
                  </a>
                </Button>
                <Button
                  variant="outline"
                  asChild
                  className="flex-1 bg-white dark:bg-black border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-700 group"
                >
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                    View Code
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}

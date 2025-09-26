"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  ExternalLink, 
  Calendar,
  Users,
  Brain,
  Database,
  Cpu,
  Award,
  FileText,
  Download
} from "lucide-react";

const publications = [
  {
    id: 1,
    title: "Comparative Analysis of Encoder-Only, Decoder-Only, and Encoder-Decoder Language Models",
    authors: "Liu, B.",
    venue: "Proceedings of the 1st International Conference on Data Science and Engineering - ICDSE",
    year: "2024",
    doi: "10.5220/0012829800004547",
    description: "A comprehensive analysis comparing different transformer architectures in language modeling tasks, examining their performance across various benchmarks and use cases.",
    keywords: ["Language Models", "Transformer Architecture", "NLP", "Machine Learning"],
    pdfUrl: "#",
    icon: <FileText className="h-6 w-6" />,
    color: "from-blue-500 to-cyan-500"
  }
];

const researchAreas = [
  {
    title: "Reinforcement Learning",
    description: "Developing transformer-based RL policies for robotics and decision-making tasks",
    projects: ["ReinFormer", "FurnitureBench", "Offline RL Pipeline"],
    icon: <Brain className="h-8 w-8" />,
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Computer Vision",
    description: "Integrating dual-camera systems with proprioception for enhanced robotic perception",
    projects: ["VIP/R3M Features", "Multi-modal Learning", "Real-world Deployment"],
    icon: <Cpu className="h-8 w-8" />,
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Natural Language Processing",
    description: "Exploring transformer architectures and their applications in various NLP tasks",
    projects: ["Language Model Analysis", "Text Classification", "Transfer Learning"],
    icon: <Database className="h-8 w-8" />,
    color: "from-orange-500 to-red-500"
  },
  {
    title: "Mathematical Visualization",
    description: "Creating interactive tools for visualizing complex mathematical concepts",
    projects: ["ColorTaiko", "PathForms", "D3.js Integration"],
    icon: <BookOpen className="h-8 w-8" />,
    color: "from-cyan-500 to-blue-500"
  }
];

const currentResearch = [
  {
    title: "Omnimorphism SDK Development",
    institution: "Intelligent Motion Lab, UIUC",
    period: "Feb 2025 - April 2025",
    description: "Designing and developing a Python SDK that dynamically wraps third-party objects, transforms programming languages, and bridges libraries using LLMs.",
    technologies: ["Python", "LLMs", "Langchain", "SDK Development"],
    status: "In Progress",
    icon: <Cpu className="h-6 w-6" />,
    color: "from-indigo-500 to-purple-500"
  },
  {
    title: "ReinFormer RL Policy",
    institution: "MiLab, Hangzhou",
    period: "July 2025 - Present",
    description: "Implementing transformer-based RL policies for FurnitureBench tasks with dual-camera VIP/R3M features and offline RL pipeline.",
    technologies: ["PyTorch", "Reinforcement Learning", "Computer Vision", "Robotics"],
    status: "In Progress",
    icon: <Brain className="h-6 w-6" />,
    color: "from-pink-500 to-rose-500"
  }
];

export function ResearchSection() {
  return (
    <div className="max-w-7xl mx-auto space-y-16">
      {/* Publications Section */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-white flex items-center">
          <Award className="h-8 w-8 mr-3 text-cyan-400" />
          Publications
        </h2>
        <div className="grid gap-6">
          {publications.map((pub) => (
            <Card key={pub.id} className="bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${pub.color} text-white shadow-lg`}>
                    {pub.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors">
                      {pub.title}
                    </h3>
                    <p className="text-cyan-400 mb-2 font-medium">{pub.authors}</p>
                    <p className="text-gray-300 mb-3">{pub.venue}, {pub.year}</p>
                    <p className="text-gray-300 mb-4 leading-relaxed">{pub.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {pub.keywords.map((keyword) => (
                        <Badge key={keyword} variant="outline" className="text-xs bg-white/5 border-white/20 text-gray-300">
                          {keyword}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <span>DOI: {pub.doi}</span>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline" className="bg-white/5 border-white/20 text-white hover:bg-white/10">
                          <ExternalLink className="h-4 w-4 mr-1" />
                          View Paper
                        </Button>
                        <Button size="sm" variant="outline" className="bg-white/5 border-white/20 text-white hover:bg-white/10">
                          <Download className="h-4 w-4 mr-1" />
                          PDF
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Research Areas */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-white flex items-center">
          <Brain className="h-8 w-8 mr-3 text-purple-400" />
          Research Areas
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {researchAreas.map((area, index) => (
            <Card key={index} className="group bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${area.color} text-white shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                    {area.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-cyan-400 transition-colors">
                      {area.title}
                    </h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">{area.description}</p>
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-cyan-400">Key Projects:</h4>
                      <ul className="space-y-1">
                        {area.projects.map((project, projectIndex) => (
                          <li key={projectIndex} className="text-sm text-gray-300 flex items-center">
                            <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2" />
                            {project}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Current Research */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-white flex items-center">
          <Calendar className="h-8 w-8 mr-3 text-green-400" />
          Current Research
        </h2>
        <div className="space-y-6">
          {currentResearch.map((research, index) => (
            <Card key={index} className="bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${research.color} text-white shadow-lg`}>
                    {research.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold text-white">{research.title}</h3>
                      <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30">
                        {research.status}
                      </Badge>
                    </div>
                    <p className="text-cyan-400 font-medium mb-2">{research.institution}</p>
                    <p className="text-gray-400 text-sm mb-4">{research.period}</p>
                    <p className="text-gray-300 mb-4 leading-relaxed">{research.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {research.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs bg-white/5 border-white/20 text-gray-300">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Research Philosophy */}
      <section className="text-center">
        <Card className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-md border border-white/20">
          <CardContent className="p-12">
            <h2 className="text-3xl font-bold mb-6 text-white">Research Philosophy</h2>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
              My research is driven by the belief that artificial intelligence should enhance human capabilities 
              rather than replace them. I focus on developing interpretable, robust, and efficient systems that 
              can be deployed in real-world scenarios. Through interdisciplinary collaboration and rigorous 
              experimentation, I aim to contribute to the advancement of AI technologies that benefit society.
            </p>
            <div className="mt-8 flex justify-center">
              <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold px-8 py-3 rounded-xl">
                View Full Research Portfolio
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}


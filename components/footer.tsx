"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Github,
  Linkedin,
  Mail,
  Heart,
  Code,
  Brain,
  ArrowUp,
  ChevronRight,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 border border-gray-200 dark:border-gray-800 rotate-45 animate-spin-slow opacity-5"></div>
        <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-gray-100 dark:bg-gray-900 rounded-full animate-pulse-glow opacity-10"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-gray-200 dark:border-gray-800 rounded-full opacity-5 animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 py-20 relative z-10">
        <div className="grid md:grid-cols-4 gap-16">
          {/* Enhanced Brand */}
          <div className="space-y-8">
            <Link href="/" className="group flex items-center space-x-4">
              <div className="relative">
                <div className="w-12 h-12 bg-black dark:bg-white rounded-sm flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 relative overflow-hidden">
                  <span className="text-white dark:text-black font-bold text-lg relative z-10">
                    BL
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
                <div className="absolute -inset-2 border border-gray-300 dark:border-gray-700 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="flex flex-col">
                <span className="font-medium text-xl tracking-tight group-hover:text-gray-600 dark:group-hover:text-gray-400 transition-colors duration-300">
                  Boyu Liu
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-500 font-light">
                  Software Developer & AI Researcher
                </span>
                <div className="w-0 group-hover:w-full h-0.5 bg-gray-400 dark:bg-gray-600 transition-all duration-500 mt-2"></div>
              </div>
            </Link>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed font-light max-w-xs">
              Passionate about building intelligent systems and creating
              exceptional digital experiences.
            </p>
            <div className="flex space-x-4">
              {[
                {
                  href: "https://github.com/Ender-600",
                  icon: Github,
                  label: "GitHub",
                },
                {
                  href: "https://linkedin.com/in/boyu-liu",
                  icon: Linkedin,
                  label: "LinkedIn",
                },
                {
                  href: "mailto:boyul5@illinois.edu",
                  icon: Mail,
                  label: "Email",
                },
              ].map((social, index) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="group p-4 border border-gray-200 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-600 transition-all duration-500 hover-lift relative overflow-hidden"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <social.icon className="h-5 w-5 text-gray-600 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors duration-300" />
                  <div className="absolute inset-0 bg-black dark:bg-white scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <social.icon className="h-5 w-5 text-white dark:text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Enhanced Quick Links */}
          <div>
            <h3 className="font-medium mb-8 text-black dark:text-white flex items-center group">
              <Code className="h-5 w-5 mr-3 text-gray-600 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors duration-300" />
              Quick Links
              <div className="w-0 group-hover:w-8 h-0.5 bg-gray-400 dark:bg-gray-600 transition-all duration-500 ml-2"></div>
            </h3>
            <ul className="space-y-4">
              {[
                { href: "/about", name: "About Me" },
                { href: "/projects", name: "Projects" },
                { href: "/research", name: "Research" },
                { href: "/contact", name: "Contact" },
              ].map((link, index) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-all duration-300 font-light flex items-center"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <span className="relative z-10 flex items-center">
                      {link.name}
                      <ChevronRight className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                    <div className="absolute inset-0 bg-gray-100 dark:bg-gray-900 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Enhanced Expertise */}
          <div>
            <h3 className="font-medium mb-8 text-black dark:text-white flex items-center group">
              <Brain className="h-5 w-5 mr-3 text-gray-600 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors duration-300" />
              Expertise
              <div className="w-0 group-hover:w-8 h-0.5 bg-gray-400 dark:bg-gray-600 transition-all duration-500 ml-2"></div>
            </h3>
            <ul className="space-y-4">
              {[
                "Machine Learning",
                "Full-Stack Development",
                "AI Research",
                "Data Science",
              ].map((skill, index) => (
                <li key={skill}>
                  <span
                    className="text-sm text-gray-600 dark:text-gray-400 font-light group-hover:text-black dark:group-hover:text-white transition-colors duration-300 cursor-pointer"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {skill}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Enhanced Contact */}
          <div>
            <h3 className="font-medium mb-8 text-black dark:text-white flex items-center group">
              <Mail className="h-5 w-5 mr-3 text-gray-600 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors duration-300" />
              Contact Info
              <div className="w-0 group-hover:w-8 h-0.5 bg-gray-400 dark:bg-gray-600 transition-all duration-500 ml-2"></div>
            </h3>
            <div className="space-y-4 text-sm text-gray-600 dark:text-gray-400 font-light">
              <p className="flex items-center group hover:text-black dark:hover:text-white transition-colors duration-300">
                <Mail className="h-4 w-4 mr-3 text-gray-500 dark:text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300" />
                boyul5@illinois.edu
              </p>
              <p className="flex items-center group hover:text-black dark:hover:text-white transition-colors duration-300">
                <Github className="h-4 w-4 mr-3 text-gray-500 dark:text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300" />
                github.com/Ender-600
              </p>
              <p className="flex items-center group hover:text-black dark:hover:text-white transition-colors duration-300">
                <Linkedin className="h-4 w-4 mr-3 text-gray-500 dark:text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300" />
                linkedin.com/in/boyu-liu
              </p>
              <p className="text-gray-500 dark:text-gray-500 group hover:text-black dark:hover:text-white transition-colors duration-300">
                Champaign, IL
              </p>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom Section */}
        <div className="border-t border-gray-200 dark:border-gray-800 mt-16 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 dark:text-gray-500 font-light">
            © 2024 Boyu Liu. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            <p className="text-sm text-gray-500 dark:text-gray-500 flex items-center font-light">
              Made with{" "}
              <Heart className="h-4 w-4 mx-1 text-red-500 animate-pulse" /> by
              Boyu Liu
            </p>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="group p-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 hover-lift"
            >
              <ArrowUp className="h-4 w-4 group-hover:-translate-y-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}

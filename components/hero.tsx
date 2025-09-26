"use client";

import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const skills = [
  "Machine Learning",
  "Full-Stack Development",
  "AI Research",
  "Python",
  "React/Next.js",
  "Computer Vision",
  "Deep Learning",
  "Data Science",
];

export function Hero() {
  const [currentSkill, setCurrentSkill] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    setIsVisible(true);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center bg-white dark:bg-black overflow-hidden pt-20"
    >
      {/* 背景元素 */}
      <div className="absolute inset-0">
        {/* 几何图形 */}
        <div className="absolute top-20 left-10 w-32 h-32 border border-gray-200 dark:border-gray-800 rotate-45 animate-spin-slow opacity-20"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gray-100 dark:bg-gray-900 rounded-full animate-pulse opacity-30"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 border-2 border-gray-300 dark:border-gray-700 rotate-12 animate-bounce-slow opacity-25"></div>
        <div className="absolute bottom-20 right-1/3 w-20 h-20 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-700 rounded-sm rotate-45 animate-float opacity-20"></div>

        {/* 动态网格 */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23000000' stroke-width='0.5'%3E%3Cpath d='M0 0h100v100H0z'/%3E%3Cpath d='M0 0v100M100 0v100M0 0h100M0 100h100'/%3E%3Cpath d='M0 0l100 100M100 0l-100 100'/%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: "100px 100px",
            }}
          />
        </div>

        {/* 鼠标跟随元素 */}
        <div
          className="absolute w-96 h-96 rounded-full opacity-5 dark:opacity-10 transition-all duration-1000 ease-out"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            background:
              "radial-gradient(circle, rgba(0,0,0,0.1) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute w-64 h-64 rounded-full opacity-10 dark:opacity-5 transition-all duration-700 ease-out"
          style={{
            left: mousePosition.x - 128,
            top: mousePosition.y - 128,
            background:
              "radial-gradient(circle, rgba(0,0,0,0.05) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-8 text-center">
        <div className="max-w-6xl mx-auto">
          {/* 问候语 */}
          <div
            className={`mb-16 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="inline-block mb-8 relative">
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400 tracking-wider uppercase relative z-10">
                Hello, I'm
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gray-400 to-transparent dark:via-gray-600"></div>
            </div>

            <h1 className="text-7xl md:text-8xl lg:text-9xl font-thin tracking-tight mb-8 leading-none">
              <span className="block text-black dark:text-white relative">
                <span className="relative inline-block">
                  Boyu Liu
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-black dark:bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </span>
              </span>
              <span className="block text-gray-300 dark:text-gray-700 text-5xl md:text-6xl lg:text-7xl mt-6 font-light">
                Software Developer
              </span>
              <span className="block text-gray-200 dark:text-gray-800 text-4xl md:text-5xl lg:text-6xl mt-4 font-extralight">
                & AI Researcher
              </span>
              <span className="block text-gray-200 dark:text-gray-800 text-4xl md:text-5xl lg:text-6xl mt-4 font-extralight">
                & Designer
              </span>
            </h1>
          </div>

          {/* 个人照片 - 更自然的呈现方式 */}
          <div
            className={`mb-20 flex justify-center transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative group">
              {/* 主照片容器 */}
              <div className="relative w-56 h-72 md:w-64 md:h-80 overflow-hidden">
                {/* 照片 */}
                <div className="w-full h-full relative overflow-hidden rounded-lg shadow-2xl group-hover:shadow-3xl transition-all duration-700 group-hover:scale-105">
                  <Image
                    src="/boyu-liu.jpg"
                    alt="Boyu Liu"
                    width={320}
                    height={400}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                    priority
                    unoptimized
                  />
                  {/* 渐变遮罩 */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* 装饰性边框 */}
                <div className="absolute inset-0 border-2 border-gray-200 dark:border-gray-700 rounded-lg opacity-60 group-hover:opacity-100 group-hover:border-gray-400 dark:group-hover:border-gray-500 transition-all duration-500"></div>

                {/* 浮动装饰元素 */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-gray-300 dark:bg-gray-600 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100"></div>
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-gray-400 dark:bg-gray-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200"></div>
                <div className="absolute top-1/2 -left-3 w-2 h-2 bg-gray-500 dark:bg-gray-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300"></div>
              </div>

              {/* 背景装饰 */}
              <div className="absolute inset-0 -z-10">
                <div className="absolute top-4 left-4 w-full h-full border border-gray-200 dark:border-gray-800 rounded-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                <div className="absolute top-8 left-8 w-full h-full border border-gray-100 dark:border-gray-900 rounded-lg opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>

          {/* 动态技能 */}
          <div
            className={`mb-20 transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 font-light tracking-wide">
              Specializing in
            </p>
            <div className="h-20 flex items-center justify-center relative">
              <div className="relative overflow-hidden w-96">
                <div className="flex flex-col items-center">
                  <span className="text-3xl md:text-4xl font-light text-gray-800 dark:text-gray-200 transition-all duration-700 transform">
                    {skills[currentSkill]}
                  </span>
                  <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-gray-400 to-transparent dark:via-gray-600 mt-4"></div>
                </div>
              </div>
            </div>
          </div>

          {/* 描述 */}
          <p
            className={`text-xl text-gray-600 dark:text-gray-400 mb-20 max-w-3xl mx-auto leading-relaxed font-light transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Passionate about building intelligent systems and creating
            exceptional digital experiences. Currently pursuing Mathematics and
            Computer Science at UIUC.
          </p>

          {/* CTA 按钮 */}
          <div
            className={`flex flex-col sm:flex-row gap-8 justify-center items-center mb-24 transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <Button
              size="lg"
              className="group relative bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 px-12 py-6 text-lg font-medium transition-all duration-500 hover-lift overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                View My Work
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="group relative border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-gray-400 dark:hover:border-gray-600 px-12 py-6 text-lg font-medium transition-all duration-500 hover-lift overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                <Download className="mr-3 h-5 w-5 group-hover:animate-bounce" />
                Download Resume
              </span>
              <div className="absolute inset-0 bg-gray-100 dark:bg-gray-900 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </Button>
          </div>

          {/* 社交链接 */}
          <div
            className={`flex justify-center space-x-8 transition-all duration-1000 delay-600 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
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
                className="group relative p-4 border border-gray-200 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-600 transition-all duration-500 hover-lift overflow-hidden"
                style={{ animationDelay: `${700 + index * 200}ms` }}
              >
                <social.icon className="h-6 w-6 text-gray-600 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors duration-300" />
                <div className="absolute inset-0 bg-black dark:bg-white scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <social.icon className="h-6 w-6 text-white dark:text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* 滚动指示器 */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-xs text-gray-500 dark:text-gray-500 font-light tracking-wider uppercase">
            Scroll
          </span>
          <div className="w-6 h-10 border-2 border-gray-300 dark:border-gray-700 rounded-full flex justify-center relative">
            <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>

      {/* 浮动元素 */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-gray-400 dark:bg-gray-600 rounded-full animate-ping opacity-20"></div>
      <div
        className="absolute top-3/4 right-1/4 w-1 h-1 bg-gray-500 dark:bg-gray-500 rounded-full animate-ping opacity-30"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-gray-300 dark:bg-gray-700 rounded-full animate-ping opacity-25"
        style={{ animationDelay: "2s" }}
      ></div>
    </section>
  );
}

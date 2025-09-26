"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, Sun, Moon, ChevronDown } from "lucide-react";
import { useTheme } from "next-themes";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Research", href: "/research" },
  { name: "Contact", href: "/contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setIsScrolled(currentScrollY > 100); // 滚动超过100px才显示导航栏
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // 计算导航栏的透明度和位置
  const navOpacity = Math.min(scrollY / 200, 1); // 0-1之间
  const navTranslateY = scrollY > 100 ? 0 : -100; // 向上隐藏

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled
          ? "bg-white/90 dark:bg-black/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 shadow-lg"
          : "bg-transparent"
      }`}
      style={{
        opacity: navOpacity,
        transform: `translateY(${navTranslateY}px)`,
      }}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Enhanced Logo */}
          <Link href="/" className="group flex items-center space-x-4">
            <div className="relative">
              <div className="w-10 h-10 bg-black dark:bg-white rounded-sm flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 relative overflow-hidden">
                <span className="text-white dark:text-black font-bold text-lg relative z-10">
                  BL
                </span>
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
              <div className="absolute -inset-2 border border-gray-300 dark:border-gray-700 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div className="hidden sm:block">
              <span className="font-medium text-xl tracking-tight group-hover:text-gray-600 dark:group-hover:text-gray-400 transition-colors duration-300">
                Boyu Liu
              </span>
              <div className="w-0 group-hover:w-full h-0.5 bg-gray-400 dark:bg-gray-600 transition-all duration-500 mt-1"></div>
            </div>
          </Link>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative text-sm font-medium transition-all duration-500 group ${
                  activeSection === item.name
                    ? "text-black dark:text-white"
                    : "text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
                }`}
                onMouseEnter={() => setActiveSection(item.name)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="relative z-10">{item.name}</span>
                {activeSection === item.name && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-black dark:bg-white transition-all duration-500"></div>
                )}
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gray-400 dark:bg-gray-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </Link>
            ))}
          </div>

          {/* Enhanced Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-10 h-10 p-0 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 group relative overflow-hidden"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 group-hover:scale-110" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 group-hover:scale-110" />
              <span className="sr-only">Toggle theme</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-200/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </Button>

            {/* Enhanced Mobile Menu */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="lg:hidden w-10 h-10 p-0 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 group relative overflow-hidden"
                >
                  <Menu className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                  <span className="sr-only">Open menu</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-200/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-80 bg-white dark:bg-black border-l border-gray-200 dark:border-gray-800"
              >
                <div className="flex flex-col space-y-8 mt-16">
                  {navItems.map((item, index) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="group text-2xl font-light text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-400 transition-all duration-500 hover-lift relative overflow-hidden"
                      onClick={() => setIsMobileMenuOpen(false)}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <span className="relative z-10 flex items-center">
                        {item.name}
                        <ChevronDown className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </span>
                      <div className="absolute inset-0 bg-gray-100 dark:bg-gray-900 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-32 h-32 border border-gray-200 dark:border-gray-800 rotate-45 animate-spin-slow opacity-5"></div>
        <div className="absolute top-0 right-1/4 w-16 h-16 bg-gray-100 dark:bg-gray-900 rounded-full animate-pulse-glow opacity-10"></div>
      </div>
    </nav>
  );
}

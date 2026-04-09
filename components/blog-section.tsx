"use client";

import { useState, useEffect } from "react";

export function BlogSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    const el = document.getElementById("blog");
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="blog" className="py-32 bg-[#eeedea] dark:bg-gray-950">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div
            className={`text-center mb-20 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-6xl md:text-7xl font-thin tracking-tight mb-6 text-black dark:text-white relative">
              Blog
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-gray-400 to-transparent dark:via-gray-600"></div>
            </h2>
          </div>

          <div
            className={`text-center transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-gray-500 dark:text-gray-500 font-light text-lg">
              Coming soon.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

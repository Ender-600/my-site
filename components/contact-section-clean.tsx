"use client";

import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";

const links = [
  {
    icon: <Mail className="h-5 w-5" />,
    label: "Email",
    value: "liuboyu1110@gmail.com",
    href: "mailto:liuboyu1110@gmail.com",
  },
  {
    icon: <Github className="h-5 w-5" />,
    label: "GitHub",
    value: "github.com/Ender-600",
    href: "https://github.com/Ender-600",
  },
  {
    icon: <Linkedin className="h-5 w-5" />,
    label: "LinkedIn",
    value: "linkedin.com/in/boyu-liu",
    href: "https://linkedin.com/in/boyu-liu",
  },
  {
    icon: <MapPin className="h-5 w-5" />,
    label: "Location",
    value: "Champaign, IL",
    href: null,
  },
];

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    const el = document.getElementById("contact");
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="py-32 bg-[#f5f4f0] dark:bg-black">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div
            className={`text-center mb-20 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-6xl md:text-7xl font-thin tracking-tight mb-6 text-black dark:text-white relative">
              Contact
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-gray-400 to-transparent dark:via-gray-600"></div>
            </h2>
            <p className="text-gray-500 dark:text-gray-500 font-light text-lg mt-8 max-w-xl mx-auto">
              Open to research collaborations, full-time roles, and interesting conversations.
            </p>
          </div>

          <div
            className={`max-w-lg mx-auto space-y-0 transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {links.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-5 py-5 border-b border-gray-100 dark:border-gray-900 group"
              >
                <div className="text-gray-400 dark:text-gray-600 group-hover:text-black dark:group-hover:text-white transition-colors duration-200">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <span className="text-xs text-gray-400 dark:text-gray-600 uppercase tracking-wider">
                    {item.label}
                  </span>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("mailto") ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      className="block text-sm text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-400 transition-colors duration-200"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm text-black dark:text-white">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

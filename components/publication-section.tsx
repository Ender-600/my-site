"use client";

import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const publications = [
  {
    title: "TSAQA: Time Series Analysis Question and Answering Benchmark",
    authors: "B. Liu, et al.",
    venue: "Under Review, ACL 2026",
    year: "2026",
    tags: ["Time Series", "LLMs", "Benchmark", "NLP"],
    href: "https://arxiv.org/abs/2601.23204",
    doi: null,
  },
  {
    title:
      "Comparative Analysis of Encoder-Only, Decoder-Only, and Encoder-Decoder Language Models",
    authors: "B. Liu",
    venue: "ICDSE 2024",
    year: "2024",
    tags: ["Language Models", "Transformer", "NLP", "Benchmark"],
    href: "https://doi.org/10.5220/0012829800004547",
    doi: "10.5220/0012829800004547",
  },
];

export function PublicationSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    const el = document.getElementById("publication");
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="publication" className="py-32 bg-[#f5f4f0] dark:bg-black">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div
            className={`text-center mb-20 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-6xl md:text-7xl font-thin tracking-tight mb-6 text-black dark:text-white relative">
              Publication
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-gray-400 to-transparent dark:via-gray-600"></div>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {publications.map((pub, index) => (
              <div
                key={index}
                className={`group border border-gray-200 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-600 p-8 transition-all duration-300 hover-lift ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${200 + index * 150}ms` }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-base font-medium text-black dark:text-white mb-2 leading-snug">
                      {pub.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-500 mb-1">
                      {pub.authors}
                    </p>
                    <p className="text-sm text-gray-400 dark:text-gray-600 mb-4">
                      {pub.venue}
                      {pub.doi && (
                        <span className="ml-2 text-xs">· DOI: {pub.doi}</span>
                      )}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {pub.tags.map((tag, ti) => (
                        <Badge
                          key={ti}
                          variant="outline"
                          className="text-xs border-gray-200 dark:border-gray-800 text-gray-500 dark:text-gray-500"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  {pub.href && (
                    <a
                      href={pub.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 dark:text-gray-600 hover:text-black dark:hover:text-white transition-colors duration-200 shrink-0 mt-1"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
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

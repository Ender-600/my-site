"use client";

import {
  SiPython, SiCplusplus, SiJavascript, SiTypescript, SiSwift, SiGo,
  SiPytorch, SiTensorflow, SiNumpy, SiPandas, SiLangchain,
  SiReact, SiNextdotjs, SiSpringboot, SiFastapi, SiNodedotjs, SiSvelte,
  SiMongodb, SiMysql, SiPostgresql, SiSqlite,
  SiGit, SiGithub, SiDocker, SiVercel, SiSupabase, SiPostman,
} from "react-icons/si";

const skills = [
  { name: "Python", Icon: SiPython },
  { name: "C++", Icon: SiCplusplus },
  { name: "JavaScript", Icon: SiJavascript },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "Swift", Icon: SiSwift },
  { name: "Go", Icon: SiGo },
  { name: "PyTorch", Icon: SiPytorch },
  { name: "TensorFlow", Icon: SiTensorflow },
  { name: "NumPy", Icon: SiNumpy },
  { name: "Pandas", Icon: SiPandas },
  { name: "LangChain", Icon: SiLangchain },
  { name: "React", Icon: SiReact },
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "Node.js", Icon: SiNodedotjs },
  { name: "FastAPI", Icon: SiFastapi },
  { name: "Spring Boot", Icon: SiSpringboot },
  { name: "Svelte", Icon: SiSvelte },
  { name: "PostgreSQL", Icon: SiPostgresql },
  { name: "MongoDB", Icon: SiMongodb },
  { name: "MySQL", Icon: SiMysql },
  { name: "SQLite", Icon: SiSqlite },
  { name: "Docker", Icon: SiDocker },
  { name: "Git", Icon: SiGit },
  { name: "GitHub", Icon: SiGithub },
  { name: "Vercel", Icon: SiVercel },
  { name: "Supabase", Icon: SiSupabase },
  { name: "Postman", Icon: SiPostman },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-12 bg-[#eeedea] dark:bg-gray-950 overflow-hidden">
      <div className="flex gap-8 animate-marquee whitespace-nowrap">
        {[...skills, ...skills].map(({ name, Icon }, i) => (
          <div
            key={i}
            className="inline-flex flex-col items-center gap-2 px-4 shrink-0 group"
          >
            <Icon className="h-7 w-7 text-gray-400 dark:text-gray-600 group-hover:text-black dark:group-hover:text-white transition-colors duration-200" />
            <span className="text-xs text-gray-400 dark:text-gray-600 group-hover:text-black dark:group-hover:text-white transition-colors duration-200 font-light">
              {name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

import type { IconType } from "react-icons";
import { FaAws, FaJava } from "react-icons/fa6";
import {
  SiC,
  SiCplusplus,
  SiDocker,
  SiExpress,
  SiFastapi,
  SiGit,
  SiGithub,
  SiGo,
  SiGooglecloud,
  SiHtml5,
  SiJavascript,
  SiLangchain,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiNotion,
  SiNumpy,
  SiNvidia,
  SiPandas,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiPytorch,
  SiReact,
  SiSpringboot,
  SiSupabase,
  SiSvelte,
  SiSwift,
  SiTensorflow,
  SiTypescript,
  SiVercel,
  SiWeightsandbiases,
} from "react-icons/si";
import { ArrowUpRight, ChartNoAxesCombined, Database, Network, Workflow, type LucideIcon } from "lucide-react";
import { skillGroups } from "@/lib/resume";
import styles from "./editorial-toolkit.module.css";

type SkillResource = {
  icon: IconType | LucideIcon;
  href: string;
  destination?: string;
};

// Brand marks come from react-icons. SQL, Matplotlib, TensorBoard, Verl, and
// SGLang use decorative subject icons where no matching brand mark is bundled.
const skillResources: Record<string, SkillResource> = {
  Python: { icon: SiPython, href: "https://docs.python.org/3/" },
  "C++": { icon: SiCplusplus, href: "https://isocpp.org/", destination: "Standard C++ Foundation" },
  C: { icon: SiC, href: "https://www.open-std.org/jtc1/sc22/wg14/", destination: "C standards committee" },
  Java: { icon: FaJava, href: "https://dev.java/learn/" },
  JavaScript: { icon: SiJavascript, href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", destination: "MDN JavaScript documentation" },
  TypeScript: { icon: SiTypescript, href: "https://www.typescriptlang.org/docs/" },
  Swift: { icon: SiSwift, href: "https://www.swift.org/documentation/" },
  Go: { icon: SiGo, href: "https://go.dev/doc/" },
  SQL: { icon: Database, href: "https://www.postgresql.org/docs/current/tutorial-sql.html", destination: "PostgreSQL SQL tutorial" },
  CUDA: { icon: SiNvidia, href: "https://docs.nvidia.com/cuda/" },
  PyTorch: { icon: SiPytorch, href: "https://pytorch.org/docs/stable/" },
  TensorFlow: { icon: SiTensorflow, href: "https://www.tensorflow.org/learn" },
  TensorBoard: { icon: ChartNoAxesCombined, href: "https://www.tensorflow.org/tensorboard" },
  NumPy: { icon: SiNumpy, href: "https://numpy.org/doc/" },
  Pandas: { icon: SiPandas, href: "https://pandas.pydata.org/docs/" },
  Matplotlib: { icon: ChartNoAxesCombined, href: "https://matplotlib.org/stable/" },
  LangChain: { icon: SiLangchain, href: "https://docs.langchain.com/" },
  "W&B": { icon: SiWeightsandbiases, href: "https://docs.wandb.ai/" },
  Verl: { icon: Workflow, href: "https://verl.readthedocs.io/en/latest/" },
  SGLang: { icon: Network, href: "https://docs.sglang.io/" },
  React: { icon: SiReact, href: "https://react.dev/learn" },
  Svelte: { icon: SiSvelte, href: "https://svelte.dev/docs" },
  "HTML/CSS": { icon: SiHtml5, href: "https://developer.mozilla.org/en-US/docs/Web", destination: "MDN web documentation" },
  "Spring Boot": { icon: SiSpringboot, href: "https://docs.spring.io/spring-boot/" },
  FastAPI: { icon: SiFastapi, href: "https://fastapi.tiangolo.com/" },
  "Express.js": { icon: SiExpress, href: "https://expressjs.com/" },
  "Node.js": { icon: SiNodedotjs, href: "https://nodejs.org/docs/latest/api/" },
  "Next.js": { icon: SiNextdotjs, href: "https://nextjs.org/docs" },
  MongoDB: { icon: SiMongodb, href: "https://www.mongodb.com/docs/" },
  MySQL: { icon: SiMysql, href: "https://dev.mysql.com/doc/" },
  PostgreSQL: { icon: SiPostgresql, href: "https://www.postgresql.org/docs/" },
  AWS: { icon: FaAws, href: "https://docs.aws.amazon.com/" },
  GCP: { icon: SiGooglecloud, href: "https://cloud.google.com/docs" },
  Postman: { icon: SiPostman, href: "https://learning.postman.com/docs/" },
  Git: { icon: SiGit, href: "https://git-scm.com/doc" },
  GitHub: { icon: SiGithub, href: "https://docs.github.com/" },
  Docker: { icon: SiDocker, href: "https://docs.docker.com/" },
  Vercel: { icon: SiVercel, href: "https://vercel.com/docs" },
  Supabase: { icon: SiSupabase, href: "https://supabase.com/docs" },
  Notion: { icon: SiNotion, href: "https://www.notion.com/help" },
};

export function EditorialToolkit() {
  return (
    <div className={styles.grid}>
      {skillGroups.map((group, index) => (
        <div className={styles.group} key={group.name}>
          <div className={styles.groupHeading}>
            <h3 className={styles.groupTitle}>{group.name}</h3>
            <span className={styles.groupIndex} aria-hidden="true">0{index + 1}</span>
          </div>
          <ul className={styles.items} aria-label={group.name}>
            {group.items.map((skill) => {
              const { icon: Icon, href, destination } = skillResources[skill];

              return (
                <li key={skill}>
                  <a
                    className={styles.skill}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${skill} — ${destination ?? "documentation"} (opens in a new tab)`}
                    title={destination ?? `${skill} documentation`}
                  >
                    <Icon className={styles.icon} aria-hidden="true" />
                    <span>{skill}</span>
                    <ArrowUpRight className={styles.linkArrow} aria-hidden="true" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
}

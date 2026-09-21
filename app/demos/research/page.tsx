import Image from "next/image";
import type { Metadata } from "next";
import { ArrowDown, ArrowDownRight, ArrowUpRight, ChevronDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { education, experiences, profile, projects, publications, skillGroups } from "@/lib/resume";
import styles from "./research.module.css";

export const metadata: Metadata = {
  title: "Research portfolio",
};

const researchProjects = projects.filter((project) => project.category === "AI & Research");
const engineeringProjects = projects.filter((project) => project.category !== "AI & Research");

function ProjectDetails({ bullets }: { bullets: string[] }) {
  return (
    <details className={styles.details}>
      <summary>Explore the work <ChevronDown size={14} aria-hidden="true" /></summary>
      <ul>{bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
    </details>
  );
}

function SignalPlot() {
  return (
    <div className={styles.signal}>
      <div className={styles.signalHeading}><span>OBSERVE / REASON / VERIFY</span><span>FIG. 01</span></div>
      <svg viewBox="0 0 670 164" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id="research-signal-fill" x1="0" y1="0" x2="0" y2="164" gradientUnits="userSpaceOnUse">
            <stop stopColor="#2454E8" stopOpacity="0.14" />
            <stop offset="1" stopColor="#2454E8" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[30, 70, 110, 150].map((y) => <path key={y} d={`M0 ${y}H670`} stroke="#DDE3EE" strokeDasharray="2 5" />)}
        {[10, 110, 210, 310, 410, 510, 610].map((x) => <path key={x} d={`M${x} 10V150`} stroke="#E8ECF3" />)}
        <path d="M0 120C18 120 20 92 38 100S69 128 85 97S111 104 128 74S150 140 170 113S189 114 210 63S239 67 252 44S275 91 295 71S317 42 340 58S366 38 386 24S415 83 435 69S453 89 473 42S490 65 514 34S540 65 560 44S598 63 614 27S647 41 670 14V164H0Z" fill="url(#research-signal-fill)" />
        <path d="M0 120C18 120 20 92 38 100S69 128 85 97S111 104 128 74S150 140 170 113S189 114 210 63S239 67 252 44S275 91 295 71S317 42 340 58S366 38 386 24S415 83 435 69S453 89 473 42S490 65 514 34S540 65 560 44S598 63 614 27S647 41 670 14" stroke="#2454E8" strokeWidth="2" />
        {[[38, 100], [85, 97], [128, 74], [170, 113], [210, 63], [252, 44], [295, 71], [340, 58], [386, 24], [435, 69], [473, 42], [514, 34], [560, 44], [614, 27]].map(([x, y]) => <circle key={x} cx={x} cy={y} r="3.5" fill="#2454E8" stroke="#F6F8FC" strokeWidth="2" />)}
      </svg>
      <div className={styles.signalCaption}><span>Illustrative signal</span><span>Irregular inputs. Auditable answers.</span></div>
    </div>
  );
}

export default function ResearchDemo() {
  return (
    <div className={styles.page} lang="en">
      <a href="#research-content" className={styles.skipLink}>Skip to content</a>
      <aside className={styles.sidebar}>
        <div>
          <a className={styles.monogram} href="#top" aria-label="Boyu Liu, back to top">b<span>l</span><span className={styles.monogramDot}>.</span></a>
          <div className={styles.identity}>
            <div className={styles.portrait}><Image src={profile.portrait} alt="Boyu Liu" fill sizes="104px" priority unoptimized /></div>
            <div><a href="#top" className={styles.name}>{profile.name}</a><p>Engineer. Researcher. <br />Perpetually curious.</p></div>
          </div>
          <p className={styles.affiliation}>M.S. Information Networking<br /><strong>Carnegie Mellon University</strong></p>
          <nav className={styles.navigation} aria-label="Portfolio sections">
            <a href="#research"><span>01</span>Research <ArrowUpRight size={14} aria-hidden="true" /></a>
            <a href="#publications"><span>02</span>Publications <ArrowUpRight size={14} aria-hidden="true" /></a>
            <a href="#experience"><span>03</span>Experience <ArrowUpRight size={14} aria-hidden="true" /></a>
            <a href="#engineering"><span>04</span>Engineering <ArrowUpRight size={14} aria-hidden="true" /></a>
            <a href="#background"><span>05</span>Background <ArrowUpRight size={14} aria-hidden="true" /></a>
          </nav>
        </div>
        <div className={styles.sidebarBottom}>
          <a href={profile.resume} download className={styles.resume}>Download résumé <Download size={15} aria-hidden="true" /></a>
          <div className={styles.socials}>
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
            <a href={`mailto:${profile.email}`} aria-label="Email Boyu Liu"><Mail size={18} /></a>
          </div>
          <p>PORTFOLIO / {profile.updated.toUpperCase()}</p>
        </div>
      </aside>

      <main id="research-content" className={styles.main}>
        <header className={styles.hero} id="top">
          <div className={styles.heroTop}><p><span className={styles.statusDot} /> SOFTWARE × INTELLIGENCE</p><a href="#contact">Let’s connect <ArrowUpRight size={15} aria-hidden="true" /></a></div>
          <h1>Making sense.<br /><span>Building what’s next.</span></h1>
          <div className={styles.heroIntro}><p>I’m Boyu, a software engineer and AI researcher exploring how intelligent systems can become more useful, dependable, and human.</p><a href="#research" aria-label="Explore selected research"><ArrowDown size={25} aria-hidden="true" /></a></div>
          <SignalPlot />
          <div className={styles.researchAreas}><span>AREAS OF INTEREST</span><p>AI agents <span>/</span> Time-series reasoning <span>/</span> Distributed systems</p></div>
        </header>

        <section id="research" className={styles.section}>
          <div className={styles.sectionHeading}><p>01 / SELECTED RESEARCH</p><h2>Questions worth pursuing.</h2></div>
          {researchProjects.map((project, index) => (
            <article key={project.id} className={styles.researchArticle}>
              <div className={styles.articleMeta}><span>{index === 0 ? "FEATURED INVESTIGATION" : "MODEL EVALUATION"}</span><span>{String(index + 1).padStart(2, "0")}</span></div>
              <div className={styles.researchBody}>
                <div><h3>{project.name}</h3><p className={styles.projectEyebrow}>{project.eyebrow}</p><p className={styles.description}>{project.summary}</p><p className={styles.tags}>{project.tags.join(" · ")}</p></div>
                <div className={styles.projectMetric}><strong>{project.metric}</strong><span>{project.metricLabel}</span></div>
              </div>
              {project.id === "irts" && <div className={styles.benchmarkNumbers}><p><strong>20K</strong><span>questions</span></p><p><strong>13</strong><span>domains</span></p><p><strong>10</strong><span>task types</span></p><span>IRTS-ToolBench<br />Proposed benchmark</span></div>}
              <div className={styles.projectBottom}><ProjectDetails bullets={project.bullets} />{project.href && <a className={styles.textLink} href={project.href} target="_blank" rel="noreferrer">{project.linkLabel} <ArrowUpRight size={16} aria-hidden="true" /></a>}</div>
            </article>
          ))}
        </section>

        <section id="publications" className={styles.section}>
          <div className={styles.sectionHeading}><p>02 / PUBLICATIONS</p><h2>Ideas, in writing.</h2></div>
          <div className={styles.publications}>
            {publications.map((publication) => (
              <article key={publication.title} className={styles.publication}>
                <span className={styles.year}>{publication.year}</span>
                <div><span className={styles.venue}>{publication.venue}</span><h3><a href={publication.href} target="_blank" rel="noreferrer">{publication.title}<ArrowUpRight size={19} aria-hidden="true" /></a></h3><p>{publication.authors}</p><p className={styles.publicationDetail}>{publication.detail}</p></div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className={styles.section}>
          <div className={styles.sectionHeading}><p>03 / EXPERIENCE</p><h2>Research meets the real world.</h2></div>
          {experiences.map((experience) => (
            <article className={styles.experience} key={experience.id}>
              <div className={styles.experienceMeta}><span>{experience.period}</span><p>{experience.location}</p></div>
              <div className={styles.experienceBody}><p className={styles.role}>{experience.role}</p><h3>{experience.company}</h3><p className={styles.description}>{experience.summary}</p><div className={styles.result}><span className={styles.resultMark}>↗</span><strong>{experience.metric}</strong><span>{experience.metricLabel}</span></div><p className={styles.tags}>{experience.tags.join(" · ")}</p><ProjectDetails bullets={experience.bullets} /></div>
            </article>
          ))}
        </section>

        <section id="engineering" className={styles.section}>
          <div className={styles.sectionHeading}><p>04 / ENGINEERING</p><h2>Built with intention.</h2></div>
          {engineeringProjects.map((project) => (
            <article className={styles.engineering} key={project.id}>
              <div className={styles.projectGlyph} aria-hidden="true">{project.id === "rhythm" ? <svg viewBox="0 0 80 80" fill="none"><path d="M12 41H21L26 23L33 57L41 14L49 64L56 31L62 41H70" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg> : <svg viewBox="0 0 80 80" fill="none"><path d="M40 18L16 58H64L40 18ZM40 18V46L16 58M40 46L64 58" stroke="currentColor" strokeWidth="1.5" />{[[40, 18], [16, 58], [64, 58], [40, 46]].map(([x, y]) => <circle key={`${x}-${y}`} cx={x} cy={y} r="5" fill="#FAFBFD" stroke="currentColor" strokeWidth="1.5" />)}</svg>}</div>
              <div className={styles.engineeringBody}><span className={styles.articleMeta}>{project.category}</span><h3>{project.name}</h3><p className={styles.description}>{project.summary}</p><p className={styles.tags}>{project.tags.join(" · ")}</p><ProjectDetails bullets={project.bullets} /></div>
            </article>
          ))}
        </section>

        <section id="background" className={styles.section}>
          <div className={styles.sectionHeading}><p>05 / BACKGROUND</p><h2>A foundation for what’s next.</h2></div>
          <p className={styles.bio}>{profile.bio}</p>
          <h3 className={styles.subheading}>Education</h3>
          {education.map((school) => <article className={styles.school} key={school.short}><span className={styles.schoolShort}>{school.short}</span><div><div className={styles.schoolHeading}><h4>{school.school}</h4><span>{school.period}</span></div><p>{school.degree}</p><p className={styles.schoolNote}>{school.note}</p>{school.courses.length > 0 && <details className={styles.details}><summary>Selected coursework <ChevronDown size={14} aria-hidden="true" /></summary><p className={styles.coursework}>{school.courses.join(" · ")}</p></details>}</div></article>)}
          <h3 className={styles.subheading}>Technical toolkit</h3>
          <div className={styles.skills}>{skillGroups.map((group) => <div key={group.name}><h4>{group.name}</h4><p>{group.items.join(" · ")}</p></div>)}</div>
        </section>

        <footer id="contact" className={styles.footer}>
          <p className={styles.footerLabel}>GOOD WORK STARTS WITH A CONVERSATION.</p>
          <a className={styles.contactHeading} href={`mailto:${profile.email}`}>Let’s build<br />something meaningful.<ArrowDownRight size={60} strokeWidth={1} aria-hidden="true" /></a>
          <div className={styles.contactLinks}><a href={`mailto:${profile.email}`}>{profile.email} <ArrowUpRight size={15} aria-hidden="true" /></a><a href={profile.resume} download>Résumé <Download size={15} aria-hidden="true" /></a></div>
          <div className={styles.colophon}><span>© 2026 {profile.name}</span><span>Always learning. Always building.</span><a href="#top">Back to top ↑</a></div>
        </footer>
      </main>
    </div>
  );
}

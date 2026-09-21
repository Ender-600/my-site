"use client";

import { useState } from "react";
import { ArrowDown, ArrowDownToLine, ArrowRight, ArrowUpRight, AudioLines, Check, ChevronDown, Code2, Github, Linkedin, Mail } from "lucide-react";
import { education, experiences, profile, projects, publications, skillGroups } from "@/lib/resume";
import styles from "./studio.module.css";

const filters = ["All", "AI & Research", "Product", "Systems"] as const;

function SystemArtwork() {
  return (
    <div className={styles.systemArtwork}>
      <div className={styles.artworkTop}><span>FROM IDEA TO EXECUTION</span><span>FIG. 001</span></div>
      <svg viewBox="0 0 520 390" role="img" aria-label="Concept illustration of connected software layers, from input to a verified result">
        <defs>
          <pattern id="studio-grid" width="26" height="26" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r="1" fill="#44483f" /></pattern>
          <linearGradient id="studio-surface" x1="0" x2="1" y1="0" y2="1"><stop stopColor="#353a2d" /><stop offset="1" stopColor="#1a1d19" /></linearGradient>
        </defs>
        <rect width="520" height="390" fill="url(#studio-grid)" />
        <g stroke="#41463b" strokeWidth="1" fill="none">
          <path d="M260 92 459 205 260 318 61 205Z" />
          <path d="M260 130 459 243 260 356 61 243Z" />
          <path d="M61 205v38m199 75v38m199-151v38M260 92v38" strokeDasharray="4 5" />
          <path d="m121 238 139 79 139-79M121 260l139 79 139-79" />
        </g>
        <g className={styles.floatingLayer}>
          <path d="m260 57 156 89-156 89-156-89Z" fill="url(#studio-surface)" stroke="#626950" />
          <path d="m104 146 156 89 156-89v25l-156 89-156-89Z" fill="#1d211a" stroke="#49503e" />
          <path d="M260 235v25" stroke="#626950" />
          <path d="m181 146 79-45 79 45-79 45Z" fill="#ccf58b" stroke="#e4ffb7" />
          <path d="m181 146 79 45 79-45v17l-79 45-79-45Z" fill="#8ead63" stroke="#ccf58b" />
          <path d="m231 149 21-12m17 23 21-12m-39 23 20-46" fill="none" stroke="#243019" strokeWidth="5" />
          <path d="m140 150 36 20m170-66 34 20m-174 63 35 20m-65-84 35-20" fill="none" stroke="#727d5d" />
        </g>
        <g fill="none" stroke="#a8cc76" strokeWidth="1.3">
          <path d="M61 205v-78l42-24" /><path d="m459 243 32-18v-74l-39-23" /><path d="M260 356v21h137" />
        </g>
        <g fill="#ccf58b"><circle cx="61" cy="205" r="5" /><circle cx="459" cy="243" r="5" /><circle cx="260" cy="356" r="5" /></g>
        <g fontFamily="monospace" fontSize="10" letterSpacing="1.5" fill="#b2b9a7">
          <text x="31" y="87">01 / OBSERVE</text><text x="388" y="111">02 / BUILD</text><text x="340" y="365">03 / VERIFY</text>
        </g>
      </svg>
      <div className={styles.artworkBottom}><span><i /> Intent → reliable systems</span><span>Concept illustration</span></div>
    </div>
  );
}

function ProjectArtwork({ id }: { id: string }) {
  if (id === "rhythm") return (
    <div className={`${styles.projectArt} ${styles.rhythmArt}`} aria-hidden="true">
      <span className={styles.artIndex}>02 / VOICE → ACTION</span>
      <div className={styles.wave}>{[18, 28, 18, 48, 66, 42, 88, 112, 68, 100, 58, 36, 74, 50, 28, 40, 18].map((height, i) => <i key={i} style={{ height }} />)}</div>
      <div className={styles.voicePill}><AudioLines size={17} /><span>A thought. A plan.</span><Check size={15} /></div>
      <span className={styles.artCaption}>Concept illustration</span>
    </div>
  );
  if (id === "raft") return (
    <div className={`${styles.projectArt} ${styles.raftArt}`} aria-hidden="true">
      <span className={styles.artIndex}>03 / DISTRIBUTED BY DESIGN</span>
      <svg viewBox="0 0 420 220"><g fill="none" stroke="#778381" strokeDasharray="4 5"><path d="M210 51 90 116 147 184 274 184 330 116 210 51 147 184M90 116h240M210 51l64 133" /></g><g fill="#21312e" stroke="#72938b"><rect x="179" y="22" width="62" height="58" rx="12" fill="#b7d9cf" /><rect x="60" y="88" width="60" height="58" rx="12" /><rect x="300" y="88" width="60" height="58" rx="12" /><rect x="117" y="154" width="60" height="58" rx="12" /><rect x="244" y="154" width="60" height="58" rx="12" /></g><g fill="none" stroke="#72938b" strokeWidth="2"><path d="M196 44h28m-28 9h28m-28 9h18M76 109h28m-28 9h28M316 109h28m-28 9h28M133 175h28m-28 9h28M260 175h28m-28 9h28" /></g></svg>
      <span className={styles.artCaption}>Concept illustration</span>
    </div>
  );
  if (id === "e3") return (
    <div className={`${styles.projectArt} ${styles.e3Art}`} aria-hidden="true">
      <span className={styles.artIndex}>04 / THE EFFICIENCY EQUATION</span>
      <div className={styles.e3Rings}><i /><i /><i /><strong>E³</strong></div>
      <span className={styles.artCaption}>Efficiency · Energy · Effectiveness</span>
    </div>
  );
  return (
    <div className={`${styles.projectArt} ${styles.irtsArt}`} aria-hidden="true">
      <span className={styles.artIndex}>01 / MAKING SENSE OF THE SIGNAL</span>
      <svg viewBox="0 0 440 210"><g stroke="#3c4432" strokeWidth="1"><path d="M30 50h380M30 100h380M30 150h380M80 25v160M150 25v160M220 25v160M290 25v160M360 25v160" /></g><path d="m30 144 37-12 19 13 48-73 34 21 14-26 36 45 30-67 23 33 35-22 20 44 48-15 36-42" stroke="#d0f398" strokeWidth="2" fill="none" />{[[30,144],[67,132],[86,145],[134,72],[168,93],[182,67],[218,112],[248,45],[271,78],[306,56],[326,100],[374,85],[410,43]].map(([x,y], i) => <circle key={i} cx={x} cy={y} r={i === 7 ? 6 : 3} fill="#d0f398" />)}</svg>
      <span className={styles.artCaption}>Concept illustration · Irregular time series</span>
    </div>
  );
}

export default function StudioDemo() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const visibleProjects = projects.filter(project => filter === "All" || project.category === filter);

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <a className={styles.wordmark} href="#studio-top" aria-label="Boyu Liu, back to top"><span className={styles.mark}>b.</span><span>Boyu Liu</span></a>
        <nav aria-label="Studio demo navigation"><a href="#studio-work">Work</a><a href="#studio-about">About</a><a href="#studio-contact">Contact <ArrowUpRight size={13} /></a></nav>
        <a className={styles.resumeLink} href={profile.resume} download>Résumé <ArrowDownToLine size={14} /></a>
      </header>

      <main>
        <section className={styles.hero} id="studio-top">
          <div className={styles.heroText}>
            <div className={styles.eyebrow}><span className={styles.statusDot} /> SOFTWARE ENGINEER & AI RESEARCHER</div>
            <h1>Ideas into<br />systems.<br /><span>Built to matter.</span></h1>
            <p>I’m Boyu. I connect intelligent agents, dependable infrastructure, and thoughtful products.</p>
            <div className={styles.heroActions}><a className={styles.primaryButton} href="#studio-work">Explore my work <ArrowDown size={16} /></a><a className={styles.textLink} href={profile.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={16} /></a></div>
            <div className={styles.heroFootnote}><span>BASED IN THE U.S.</span><span>MS @ CARNEGIE MELLON</span></div>
          </div>
          <SystemArtwork />
        </section>

        <div className={styles.focusStrip}><span>THINK END TO END.</span><div><span><Code2 size={17} /> Systems that hold up</span><span><span className={styles.focusAsterisk}>✳</span> Intelligence with purpose</span><span><span className={styles.focusCircle} /> Products that feel right</span></div></div>

        <section className={styles.workSection} id="studio-work">
          <div className={styles.sectionHeading}><div><span className={styles.sectionLabel}>01 / SELECTED WORK</span><h2>Less friction.<br />More possibility.</h2></div><p>A few things I’ve built,<br />from the kernel to the interface.</p></div>
          <article className={styles.featured}>
            <div className={styles.featuredCopy}><span className={styles.featuredLabel}>FEATURED EXPERIENCE / 2026</span><h3>When every<br />millisecond matters.</h3><p>At TetraBot, I rebuilt an AI fire-response platform around a deterministic runtime—connecting agent orchestration, edge vision, and live 3D visualization.</p><div className={styles.tags}>{["Agent infrastructure", "Edge AI", "Python + React"].map(tag => <span key={tag}>{tag}</span>)}</div><a href="#studio-experience" className={styles.textLink}>Inside the work <ArrowUpRight size={17} /></a></div>
            <div className={styles.featuredVisual}><div className={styles.graphHeader}><span>FIRST-RESPONSE LATENCY</span><span>TETRABOT</span></div><div className={styles.latencyBefore}><span>19<span>s</span></span><div /><small>BEFORE</small></div><div className={styles.latencyAfter}><span>36<span>ms</span></span><div /><small>AFTER</small></div><div className={styles.featuredMetric}><strong>66% <ArrowDown size={23} /></strong><span>less incident-handling time<br /><small>497.5s → 167.9s</small></span></div></div>
          </article>

          <div className={styles.projectToolbar}><div className={styles.filters} role="group" aria-label="Filter selected projects">{filters.map(item => <button key={item} type="button" onClick={() => setFilter(item)} aria-pressed={filter === item} className={filter === item ? styles.filterActive : undefined}>{item}</button>)}</div><span aria-live="polite">{String(visibleProjects.length).padStart(2, "0")} PROJECTS</span></div>
          <div className={styles.projectGrid}>
            {visibleProjects.map(project => <article className={styles.projectCard} key={project.id}>
              <ProjectArtwork id={project.id} />
              <div className={styles.projectBody}><div className={styles.projectMeta}><span>{project.category}</span><span>{project.id === "irts" ? "20K QUESTIONS" : project.id === "rhythm" ? "iOS APP" : project.id === "raft" ? "DISTRIBUTED SYSTEMS" : "MODEL EVALUATION"}</span></div><h3>{project.name}</h3><p>{project.summary}</p><div className={styles.projectMetric}><strong>{project.metric}</strong><span>{project.metricLabel}</span></div><div className={styles.tags}>{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><details className={styles.projectDetails}><summary>Engineering details <ChevronDown size={16} /></summary><ul>{project.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul></details>{project.href && <a className={styles.projectExternal} href={project.href} target="_blank" rel="noreferrer">{project.linkLabel} <ArrowUpRight size={16} /></a>}</div>
            </article>)}
          </div>
        </section>

        <section className={styles.experienceSection} id="studio-experience">
          <div className={styles.sectionHeading}><div><span className={styles.sectionLabel}>02 / EXPERIENCE</span><h2>In good company.</h2></div><a className={styles.textLink} href={profile.resume} download>Full résumé <ArrowDownToLine size={15} /></a></div>
          <div className={styles.experienceList}>{experiences.map((experience, index) => <article className={styles.experienceRow} key={experience.id}><div className={styles.experienceNumber}>0{index + 1}</div><div className={styles.experienceMain}><div className={styles.experienceTitle}><div><h3>{experience.company}</h3><span>{experience.role}</span></div><span>{experience.period}</span></div><p>{experience.summary}</p><details className={styles.experienceDetails}><summary>What I built <ChevronDown size={15} /></summary><ul>{experience.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul></details></div><ArrowUpRight className={styles.experienceArrow} size={23} aria-hidden="true" /></article>)}</div>
        </section>

        <section className={styles.aboutSection} id="studio-about">
          <div className={styles.aboutIntro}><span className={styles.sectionLabel}>03 / A LITTLE CONTEXT</span><h2>Curious by default.<br /><span>Engineer by practice.</span></h2><p>{profile.bio}</p><a className={styles.textLink} href={profile.linkedin} target="_blank" rel="noreferrer">More about me <ArrowUpRight size={16} /></a><div className={styles.educationList}>{education.map(item => <div className={styles.educationCard} key={item.short}><div className={styles.schoolBadge}>{item.short}</div><div><h3>{item.school}</h3><p>{item.degree}</p><span>{item.period}</span><strong>{item.note}</strong>{item.courses.length > 0 && <details className={styles.courseDetails}><summary>Relevant coursework <ChevronDown size={13} /></summary><p>{item.courses.join(" · ")}</p></details>}</div></div>)}</div></div>
          <div className={styles.toolbox}><div className={styles.toolboxHeading}><span>THE TOOLBOX</span><Code2 size={20} /></div><p>The right tool, for the right problem.</p>{skillGroups.map(group => <div className={styles.skillGroup} key={group.name}><h3>{group.name}</h3><div>{group.items.map(skill => <span key={skill}>{skill}</span>)}</div></div>)}</div>
        </section>

        <section className={styles.publicationsSection}>
          <div className={styles.sectionHeading}><div><span className={styles.sectionLabel}>04 / RESEARCH & WRITING</span><h2>Ideas worth sharing.</h2></div><span className={styles.paperCount}>02 PUBLICATIONS</span></div>
          {publications.map(paper => <a className={styles.paper} key={paper.title} href={paper.href} target="_blank" rel="noreferrer"><span className={styles.paperYear}>{paper.year}</span><div><span className={styles.paperVenue}>{paper.venue}</span><h3>{paper.title}</h3><p>{paper.authors}</p></div><ArrowUpRight size={24} /></a>)}
        </section>

        <section className={styles.contactSection} id="studio-contact"><div><span className={styles.sectionLabel}>HAVE SOMETHING IN MIND?</span><h2>Let’s build<br /><span>what’s next.</span></h2><a className={styles.contactEmail} href={`mailto:${profile.email}`}>{profile.email} <ArrowUpRight size={25} /></a></div><a className={styles.contactCircle} href={`mailto:${profile.email}`} aria-label="Email Boyu Liu"><ArrowUpRight strokeWidth={1} /></a></section>
      </main>
      <footer className={styles.footer}><a className={styles.wordmark} href="#studio-top"><span className={styles.mark}>b.</span><span>Boyu Liu</span></a><span>THOUGHTFULLY ENGINEERED. © 2026</span><div><a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a><a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a><a href={`mailto:${profile.email}`} aria-label="Email"><Mail size={18} /></a><a href="#studio-top" aria-label="Back to top"><ArrowRight size={18} className={styles.backTop} /></a></div></footer>
    </div>
  );
}

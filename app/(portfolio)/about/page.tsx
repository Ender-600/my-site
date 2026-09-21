import type { Metadata } from "next";
import Image from "next/image";
import { ArrowDown, Plus } from "lucide-react";
import { EditorialPageHeading } from "@/components/portfolio/editorial-page-heading";
import { EditorialToolkit } from "@/components/portfolio/editorial-toolkit";
import { education, experiences, profile } from "@/lib/resume";
import s from "@/components/portfolio/editorial.module.css";

export const metadata: Metadata = {
  alternates: { canonical: "/about" },
  title: "About",
  description: "Boyu Liu’s education, engineering experience, and technical toolkit.",
};

export default function EditorialAboutPage() {
  return (
    <>
      <EditorialPageHeading
        label="A LITTLE CONTEXT"
        title="About"
        description={profile.bio}
      />

      <div className={s.aboutSection}>
        <a className={s.textLink} href={profile.resume} download>
          Download my full résumé
          <ArrowDown size={16} aria-hidden="true" />
        </a>

        <section className={s.educationLayout} aria-labelledby="editorial-education-title">
          <h2 className={s.sideHeading} id="editorial-education-title">
            A foundation<br /><em>for what’s next.</em>
          </h2>
          <div className={s.educationList}>
            {education.map((school) => (
              <article className={s.education} key={school.short}>
                <a
                  className={s.schoolLogo}
                  href={school.short === "CMU" ? "https://www.cmu.edu/" : "https://illinois.edu/"}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Visit ${school.school}`}
                >
                  <Image
                    src={school.short === "CMU" ? "/education/cmu.png" : "/education/uiuc.svg"}
                    alt={`${school.school} logo`}
                    width={76}
                    height={76}
                    unoptimized
                  />
                </a>
                <div>
                  <p className={s.experiencePeriod}>{school.period}</p>
                  <h3>{school.school}</h3>
                  <p>{school.degree}</p>
                  <p className={s.educationNote}>{school.note}</p>
                  {school.courses.length > 0 && (
                    <details className={s.details}>
                      <summary>
                        Selected coursework
                        <Plus size={15} aria-hidden="true" />
                        <span className={s.srOnly}>: {school.school}</span>
                      </summary>
                      <p className={s.coursework}>{school.courses.join(" · ")}</p>
                    </details>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={s.experienceLayout} aria-labelledby="editorial-experience-title">
          <h2 className={s.sideHeading} id="editorial-experience-title">
            Where I’ve<br /><em>been building.</em>
          </h2>
          <div className={s.experienceList}>
            {experiences.map((job) => (
              <article className={s.experience} key={job.id}>
                <p className={s.experiencePeriod}>
                  {job.period}<span>{job.location}</span>
                </p>
                <h3>{job.company}</h3>
                <p className={s.role}>{job.role}</p>
                <p className={s.experienceSummary}>{job.summary}</p>
                <div className={s.jobMetric}>
                  <strong>{job.metric}</strong><span>{job.metricLabel}</span>
                </div>
                <details className={s.details}>
                  <summary>
                    Read the full story
                    <Plus size={15} aria-hidden="true" />
                    <span className={s.srOnly}>: {job.company}</span>
                  </summary>
                  <ul>{job.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
                  <div className={s.tags}>
                    {job.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                </details>
              </article>
            ))}
          </div>
        </section>
      </div>

      <section className={`${s.section} ${s.skillsSection}`} aria-labelledby="editorial-toolkit-title">
        <div className={s.sectionHeading}>
          <p className={s.eyebrow}>THE TOOLKIT</p>
          <h2 id="editorial-toolkit-title">Different tools. Same care.</h2>
        </div>
        <EditorialToolkit />
      </section>
    </>
  );
}

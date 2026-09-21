import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { EditorialPageHeading } from "@/components/demos/editorial-page-heading";
import { EditorialProjectGallery } from "@/components/demos/editorial-project-gallery";
import { publications } from "@/lib/resume";
import s from "../editorial.module.css";

export const metadata: Metadata = {
  title: "My Work",
  description: "Selected software projects and published research by Boyu Liu.",
};

export default function EditorialWorkPage() {
  return (
    <>
      <EditorialPageHeading
        label="PROJECTS & RESEARCH"
        title="My Work"
        description="Software projects, intelligent systems, and questions worth exploring."
      />

      <section className={s.section} id="editorial-work" aria-labelledby="editorial-projects-title">
        <div className={s.sectionTop}>
          <div className={s.sectionHeading}>
            <p className={s.eyebrow}><span>01</span> SELECTED WORK</p>
            <h2 id="editorial-projects-title">Selected projects</h2>
          </div>
          <p className={s.sectionAside}>From a better question<br />to a working system.</p>
        </div>
        <EditorialProjectGallery />
      </section>

      <section className={s.section} id="editorial-research" aria-labelledby="editorial-research-title">
        <div className={s.sectionTop}>
          <div className={s.sectionHeading}>
            <p className={s.eyebrow}><span>02</span> RESEARCH & WRITING</p>
            <h2 id="editorial-research-title">Research</h2>
          </div>
          <p className={s.sectionAside}>A few contributions<br />to a much bigger conversation.</p>
        </div>
        <div className={s.publicationList}>
          {publications.map((publication, index) => (
            <article className={s.publication} key={publication.href}>
              <span className={s.publicationYear}>{publication.year}<span>{String(index + 1).padStart(2, "0")}</span></span>
              <div>
                <p className={s.eyebrow}>{publication.venue}</p>
                <h3>
                  <a href={publication.href} target="_blank" rel="noreferrer">
                    {publication.title}<ArrowUpRight size={23} aria-hidden="true" />
                  </a>
                </h3>
                <p>{publication.authors}</p>
                <span className={s.paperDetail}>{publication.detail}</span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

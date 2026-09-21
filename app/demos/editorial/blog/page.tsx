import type { Metadata } from "next";
import { BookOpen } from "lucide-react";
import { EditorialPageHeading } from "@/components/demos/editorial-page-heading";
import s from "../editorial.module.css";

export const metadata: Metadata = {
  title: "Blog",
  description: "Notes on software, intelligent systems, and the ideas in between. Coming soon.",
};

export default function EditorialBlog() {
  return (
    <>
      <EditorialPageHeading label="FIELD NOTES" title="Blog" />
      <section className={s.blogLanding} aria-labelledby="blog-coming-soon">
        <div className={s.blogContent}>
          <div className={s.blogIllustration} aria-hidden="true">
            <BookOpen size={38} strokeWidth={1} />
            <span>NOTES IN PROGRESS</span>
          </div>
          <div>
            <p className={s.blogStatus}><span />Coming soon</p>
            <h2 id="blog-coming-soon">A space for things I’m learning.</h2>
            <p>Notes on building software, exploring intelligent systems, and the ideas in between.</p>
          </div>
        </div>
      </section>
    </>
  );
}

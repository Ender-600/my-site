import { EditorialHeader } from "@/components/portfolio/editorial-header";
import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";
import { profile } from "@/lib/resume";
import s from "@/components/portfolio/editorial.module.css";

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={s.page} id="editorial-top">
      <a className={s.skip} href="#editorial-main">Skip to content</a>
      <EditorialHeader />
      <main id="editorial-main">
        {children}
        <section className={s.contact} id="editorial-contact"><div><p className={s.eyebrow}>GOOD WORK STARTS WITH A CONVERSATION.</p><h2>Let’s build<br /><em>something good.</em></h2></div><div className={s.contactLinks}><a className={s.emailLink} href={`mailto:${profile.email}`}>{profile.email}<ArrowUpRight size={24} aria-hidden="true"/></a><div><a href={profile.github} target="_blank" rel="noreferrer">GitHub<ArrowUpRight size={14} aria-hidden="true"/></a><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn<ArrowUpRight size={14} aria-hidden="true"/></a><a href={profile.resume} download>Résumé<ArrowDown size={14} aria-hidden="true"/></a></div><a className={s.phoneLink} href={`tel:${profile.phone.replace(/[^+\d]/g, "")}`}>{profile.phone}</a></div></section>
      </main>
      <footer className={s.footer}><span>© 2026 {profile.name}</span><span>MADE WITH INTENTION.</span><a href="#editorial-top">Back to top<ArrowRight size={14} aria-hidden="true"/></a></footer>
    </div>
  );
}

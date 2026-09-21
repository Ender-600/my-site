import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { profile } from "@/lib/resume";
import s from "@/components/portfolio/editorial.module.css";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  title: { absolute: "Boyu Liu — Software Engineer & AI Researcher" },
  description: "Software engineering, intelligent systems, and the work of Boyu Liu.",
};

const destinations = [
  { href: "/work", title: "My Work", description: "Projects, experiments, and research — from an idea to a working system.", note: "PROJECTS & RESEARCH" },
  { href: "/about", title: "About", description: "The places I’ve learned, the teams I’ve joined, and the tools I work with.", note: "EDUCATION & EXPERIENCE" },
  { href: "/blog", title: "Blog", description: "Notes on software, intelligent systems, and things I’m learning along the way.", note: "COMING SOON" },
];

export default function EditorialHome() {
  return (
    <>
        <section className={s.hero} aria-labelledby="editorial-title">
          <div className={s.heroCopy}>
            <p className={s.eyebrow}><span className={s.statusDot} /> SOFTWARE ENGINEER & AI RESEARCHER</p>
            <h1 id="editorial-title">Thoughtful code.<br /><em>Real-world</em><br />impact.</h1>
            <p className={s.heroIntro}>I’m Boyu. I build intelligent systems that work in the real world — with curiosity, care, and a little ambition.</p>
            <div className={s.heroActions}><Link className={s.primaryLink} href="/work">Explore my work <ArrowUpRight size={18} aria-hidden="true" /></Link><a className={s.textLink} href={profile.resume} download>Résumé <ArrowDown size={15} aria-hidden="true" /></a></div>
          </div>
          <figure className={s.portraitFigure}>
            <div className={s.portraitFrame}><Image src={profile.portrait} alt="Boyu Liu outdoors" fill priority unoptimized sizes="(max-width: 700px) 90vw, 40vw" className={s.portrait} /><span className={s.portraitNote}>Always exploring.</span></div>
            <figcaption><span>ENGINEERING × INTELLIGENCE</span><span>01 / BOYU, OUTSIDE</span></figcaption>
          </figure>
        </section>

        <div className={s.credentials}><p>CURRENTLY AT <strong>Carnegie Mellon</strong></p><span className={s.credentialDivider}/><p>PREVIOUSLY <strong>UIUC <span>·</span> TetraBot <span>·</span> Westlake <span>·</span> NCSA</strong></p><Link href="/about" aria-label="More about Boyu"><ArrowUpRight size={20} aria-hidden="true" /></Link></div>


      <nav className={s.homeDestinations} aria-label="Explore the portfolio">
        {destinations.map((destination, index) => (
          <Link key={destination.href} href={destination.href} className={s.destination}>
            <div className={s.destinationMeta}><span>0{index + 1}</span><ArrowUpRight size={20} aria-hidden="true" /></div>
            <h2>{destination.title}</h2>
            <p>{destination.description}</p>
            <span className={s.destinationNote}>{destination.note}</span>
          </Link>
        ))}
      </nav>
    </>
  );
}

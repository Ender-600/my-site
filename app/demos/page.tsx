import Link from "next/link";
import { ArrowUpRight, ArrowDown, Check } from "lucide-react";
import { profile } from "@/lib/resume";
import styles from "./demos.module.css";

const concepts = [
  { id: "editorial", href: "/", number: "01", title: "The Editorial", chinese: "编辑感极简 · 正式网站", description: "现已作为正式个人网站启用。暖米白、森林绿、衬线大标题，以独立页面展示作品、研究与个人经历。", tags: ["正式网站", "人物叙事", "克制动效"], previewTitle: <>Thoughtful code.<br /><em>Real-world impact.</em></>, previewNote: "SOFTWARE ENGINEER & AI RESEARCHER" },
  { id: "studio", href: "/demos/studio", number: "02", title: "The Builder", chinese: "产品工程师", description: "石墨黑、荧光绿、清晰的系统图形。突出工程成果与产品能力，展示从想法到落地的过程。", tags: ["深色界面", "成果导向", "项目筛选"], previewTitle: <>Ideas into systems.<br /><em>Built to matter.</em></>, previewNote: "AGENTS / SYSTEMS / PRODUCTS" },
  { id: "research", href: "/demos/research", number: "03", title: "The Researcher", chinese: "现代学术", description: "纸白、钴蓝、严谨的网格与目录。研究与论文优先，同时保留工程实践的完整故事。", tags: ["浅色界面", "研究优先", "清晰目录"], previewTitle: <>Making sense.<br /><em>Building what’s next.</em></>, previewNote: "CARNEGIE MELLON UNIVERSITY" },
];

export default function DemosPage() {
  return (
    <main className={styles.gallery}>
      <header className={styles.galleryHeader}>
        <p className={styles.eyebrow}>BOYU LIU / PORTFOLIO EXPLORATIONS / 2026</p>
        <div className={styles.galleryHeading}>
          <h1>One story.<br /><span>Three perspectives.</span></h1>
          <div className={styles.galleryIntro} lang="zh-CN">
            <p>同一份最新经历，三种不同的表达。</p>
            <p>编辑感版本已成为正式网站，另外两个演示版本仍可浏览，对比排版、配色与交互。</p>
            <a href="#concepts">探索三个方向 <ArrowDown size={16} /></a>
          </div>
        </div>
      </header>
      <section className={styles.concepts} id="concepts" aria-label="Three design concepts">
        {concepts.map((concept) => (
          <article key={concept.id} className={styles.concept}>
            <Link href={concept.href} className={`${styles.preview} ${styles[concept.id]}`} aria-label={concept.id === "editorial" ? "Open the official portfolio" : `Open ${concept.title} demo`}>
              <div className={styles.previewNav}><b>Boyu Liu<span>✳</span></b><span>Work &nbsp; About &nbsp; ↗</span></div>
              <div className={styles.previewBody}>
                <span className={styles.previewMeta}>{concept.previewNote}</span>
                <h2>{concept.previewTitle}</h2>
                <span className={styles.previewCta}>Explore my work <ArrowUpRight size={12} /></span>
              </div>
              <div className={styles.previewArt} aria-hidden="true">
                {concept.id === "editorial" ? <><span className={styles.editorialCircle} /><span className={styles.editorialLine} /></> : concept.id === "studio" ? <><span className={styles.studioOrbit} /><span className={styles.studioCore}>B.</span><span className={styles.studioDot} /></> : <svg viewBox="0 0 220 90"><path d="M0 60L20 60L30 25L45 77L64 44L76 52L97 12L112 60L128 36L150 49L170 9L184 63L199 40L220 40" fill="none" stroke="currentColor" strokeWidth="2" /><path d="M0 45H220M0 70H220M0 20H220" stroke="currentColor" opacity=".15" /></svg>}
              </div>
              <span className={styles.previewBottom}>EST. IN CURIOSITY <span>2026 / {concept.number}</span></span>
            </Link>
            <div className={styles.conceptHeading}><span>{concept.number}</span><h2>{concept.title}</h2><Link href={concept.href} aria-label={`Open ${concept.title}`}><ArrowUpRight size={22} /></Link></div>
            <p className={styles.conceptChinese} lang="zh-CN">{concept.chinese}</p>
            <p className={styles.conceptDescription} lang="zh-CN">{concept.description}</p>
            <div className={styles.tags} lang="zh-CN">{concept.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
            <Link className={styles.openDemo} href={concept.href}>{concept.id === "editorial" ? "访问正式网站" : "打开完整 Demo"} <ArrowUpRight size={16} /></Link>
          </article>
        ))}
      </section>
      <section className={styles.contentNote} lang="zh-CN">
        <div><p className={styles.eyebrow}>CONTENT / SEPTEMBER 2026</p><h2>最新内容，已同步。</h2><p>正式网站与两个演示版本共用最新简历内容，均可展开阅读完整经历。</p></div>
        <ul>{["CMU 硕士 · UIUC 本科与荣誉", "TetraBot、Westlake、NCSA 工作经历", "IRTS、Rhythm、Raft、E3 等项目", "最新论文、技能和联系方式"].map(item => <li key={item}><Check size={16} />{item}</li>)}</ul>
        <a href={profile.resume} download className={styles.resumeLink}>下载最新简历 <ArrowDown size={16} /></a>
      </section>
      <footer className={styles.galleryFooter}><span>BOYU LIU — DESIGN STUDIES</span><span>SEPTEMBER 2026</span></footer>
    </main>
  );
}

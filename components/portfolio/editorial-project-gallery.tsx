"use client";

import { useCallback, useEffect, useRef, useState, type KeyboardEvent } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ArrowUpRight, Plus } from "lucide-react";
import { portfolioProjects, type PortfolioProject } from "@/lib/portfolio-projects";
import s from "./editorial-project-gallery.module.css";

function ProjectPreview({ project }: { project: PortfolioProject }) {
  const preview = project.preview;

  if (!preview) return (
    <div className={`${s.stage} ${s.overview}`} data-preview-kind="project-overview">
      <span className={s.overviewLabel}>PROJECT OVERVIEW</span>
      <div className={s.overviewMain}>
        <p>{project.eyebrow}</p>
        <span>{project.category}</span>
      </div>
      <div className={s.overviewFoot}><span>{project.tags.slice(0, 2).join(" / ")}</span><span>{project.metric}</span></div>
    </div>
  );

  return (
    <figure className={s.media} data-preview-kind={preview.animated ? "animated-preview" : "screenshot"}>
      <div className={s.stage}>
        <Image
          src={preview.src}
          alt={preview.alt}
          fill
          unoptimized
          loading="lazy"
          sizes="(max-width: 700px) 90vw, 760px"
          className={s.previewImage}
          data-preview-state={preview.animated ? "playing" : "still"}
        />
      </div>
      <figcaption className={s.mediaCaption}>
        <span>{preview.animated ? "Original project demo" : "Original project screenshot"}</span>
      </figcaption>
    </figure>
  );
}

export function EditorialProjectGallery() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const updatePosition = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const cards = Array.from(track.querySelectorAll<HTMLElement>("[data-project-card]"));
    const maxScroll = track.scrollWidth - track.clientWidth;
    if (track.scrollLeft >= maxScroll - 3 && maxScroll > 0) {
      setActiveIndex(portfolioProjects.length - 1);
      return;
    }
    const firstOffset = cards[0]?.offsetLeft ?? 0;
    const nearest = cards.reduce((best, card, index) => {
      const distance = Math.abs(card.offsetLeft - firstOffset - track.scrollLeft);
      return distance < best.distance ? { index, distance } : best;
    }, { index: 0, distance: Infinity });
    setActiveIndex(nearest.index);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const observer = new ResizeObserver(updatePosition);
    observer.observe(track);
    return () => observer.disconnect();
  }, [updatePosition]);

  function goTo(index: number) {
    const track = trackRef.current;
    if (!track) return;
    const safeIndex = Math.max(0, Math.min(portfolioProjects.length - 1, index));
    const cards = track.querySelectorAll<HTMLElement>("[data-project-card]");
    const target = cards[safeIndex];
    if (!target || !cards[0]) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    track.scrollTo({ left: target.offsetLeft - cards[0].offsetLeft, behavior: reduceMotion ? "instant" : "smooth" });
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.target !== event.currentTarget || event.altKey || event.ctrlKey || event.metaKey) return;
    const keyTargets: Record<string, number> = { ArrowLeft: activeIndex - 1, ArrowRight: activeIndex + 1, Home: 0, End: portfolioProjects.length - 1 };
    if (event.key in keyTargets) {
      event.preventDefault();
      goTo(keyTargets[event.key]);
    }
  }

  return (
    <div className={s.gallery} data-project-gallery="editorial">
      <div className={s.toolbar}>
        <p className={s.browseHint} id="editorial-gallery-help">A collection of {portfolioProjects.length} projects <span>·</span> Swipe or use the arrows</p>
        <div className={s.controls}>
          <span className={s.counter} aria-live="polite" aria-atomic="true"><span className={s.srOnly}>Project </span>{String(activeIndex + 1).padStart(2, "0")}<span> / {String(portfolioProjects.length).padStart(2, "0")}</span></span>
          <button type="button" onClick={() => goTo(activeIndex - 1)} disabled={activeIndex === 0} aria-label="Previous project" aria-controls="editorial-project-track" data-gallery-previous><ArrowLeft size={18} aria-hidden="true" /></button>
          <button type="button" onClick={() => goTo(activeIndex + 1)} disabled={activeIndex === portfolioProjects.length - 1} aria-label="Next project" aria-controls="editorial-project-track" data-gallery-next><ArrowRight size={18} aria-hidden="true" /></button>
        </div>
      </div>

      <div className={s.track} ref={trackRef} id="editorial-project-track" role="region" aria-roledescription="carousel" aria-label="Selected projects" aria-describedby="editorial-gallery-help" tabIndex={0} onScroll={updatePosition} onKeyDown={handleKeyDown} data-gallery-track>
        {portfolioProjects.map((project, index) => (
          <article className={s.card} key={project.id} data-project-card={project.id} aria-roledescription="slide" aria-label={`${index + 1} of ${portfolioProjects.length}: ${project.name}`}>
            <ProjectPreview project={project} />
            <div className={s.cardBody}>
              <div className={s.projectMeta}><span>{project.category}</span><span>{String(index + 1).padStart(2, "0")}</span></div>
              <h3>{project.name}</h3>
              <p className={s.summary}>{project.summary}</p>
              {project.metric && <div className={s.metric}><strong>{project.metric}</strong><span>{project.metricLabel}</span></div>}
              <div className={s.tags}>{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              <div className={s.projectLinks}>
                {project.href && <a href={project.href} target="_blank" rel="noopener noreferrer">{project.linkLabel}<ArrowUpRight size={15} aria-hidden="true" /></a>}
                {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer">Watch demo<ArrowUpRight size={15} aria-hidden="true" /></a>}
              </div>
              <details className={s.details}><summary>Inside the project<Plus size={14} aria-hidden="true" /><span className={s.srOnly}>: {project.name}</span></summary><ul>{project.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul></details>
            </div>
          </article>
        ))}
      </div>

      <div className={s.bottomBar}><span>EXPLORE THE COLLECTION <ArrowRight size={13} aria-hidden="true" /></span><div className={s.dots} role="group" aria-label="Choose a project">{portfolioProjects.map((project, index) => <button key={project.id} type="button" onClick={() => goTo(index)} className={index === activeIndex ? s.activeDot : undefined} aria-label={`Show project ${index + 1}: ${project.name}`} aria-current={index === activeIndex ? "true" : undefined}><span /></button>)}</div></div>
    </div>
  );
}

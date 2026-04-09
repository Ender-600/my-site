import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { SkillsSection } from "@/components/skills-section";
import { ProjectsSection } from "@/components/projects-section";
import { PublicationSection } from "@/components/publication-section";
import { BlogSection } from "@/components/blog-section";
import { ContactSection } from "@/components/contact-section-clean";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5f4f0] dark:bg-black">
      <Navigation />
      <Hero />
      <About />
      <SkillsSection />
      <ProjectsSection />
      <PublicationSection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

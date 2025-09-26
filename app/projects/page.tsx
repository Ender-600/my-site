import { Navigation } from "@/components/navigation";
import { ProjectCard } from "@/components/project-card";
import { Footer } from "@/components/footer";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Navigation />
      <div className="pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-light tracking-tight mb-8 text-black dark:text-white">
              My Projects
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed font-light">
              Showcasing my work in full-stack development, AI research, and
              innovative software solutions
            </p>
          </div>

          <ProjectCard />
        </div>
      </div>
      <Footer />
    </div>
  );
}

import { Navigation } from "@/components/navigation";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Navigation />
      <div className="pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-light tracking-tight mb-8 text-black dark:text-white">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed font-light">
              Let's collaborate on innovative projects and explore the
              possibilities of AI and technology
            </p>
          </div>

          <ContactSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}

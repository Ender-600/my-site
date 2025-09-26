import { Navigation } from "@/components/navigation";
import { About } from "@/components/about";
import { Footer } from "@/components/footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Navigation />
      <div className="pt-20">
        <About />
      </div>
      <Footer />
    </div>
  );
}

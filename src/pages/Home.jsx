import { HeroSection } from "../components/HeroSection";
import { ProjectsPreview } from "../components/ProjectsPreview";
import { ServicesPreview } from "../components/ServicesPreview";
import { StatsSection } from "../components/StatsSection";
import { WhyPreview } from "../components/WhyPreview";

export default function Home() {
  return (
    <main id="top" className="bg-black text-white">
      <HeroSection />
      <StatsSection />
      <ServicesPreview />
      <ProjectsPreview />
      <WhyPreview />
    </main>
  );
}

export { ProjectCard } from "../components/ProjectCard";
export { ServiceCard } from "../components/ServiceCard";

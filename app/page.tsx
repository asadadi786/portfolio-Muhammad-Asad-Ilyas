import { aboutMe, skills, professionalData } from "../data/page-data";
import ProfessionalExperience from "./components/professional-experience";

import AboutSection from "./components/AboutSection";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ProfessionalExperience data={professionalData} />
    </main>
  );
}

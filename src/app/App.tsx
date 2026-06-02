import { HeroSection } from "./components/HeroSection";
import { UberMichSection } from "./components/UberMichSection";
import { SkillsSection } from "./components/SkillsSection";
import { TimelineSection } from "./components/TimelineSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { QuoteSection } from "./components/QuoteSection";
import { ContactSection } from "./components/ContactSection";

export default function App() {
  return (
    <div
      style={{
        background: "#F6F3F0",
        fontFamily: "'Inter', sans-serif",
        overflowX: "hidden",
      }}
    >
      <HeroSection />
      <UberMichSection />
      <SkillsSection />
      <TimelineSection />
      <ProjectsSection />
      <QuoteSection />
      <ContactSection />
    </div>
  );
}

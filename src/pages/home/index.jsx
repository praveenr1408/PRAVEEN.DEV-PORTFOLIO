import React from "react";
import HeroSection from "./sections/HeroSection/HeroSection";
import AboutSection from "./sections/AboutSection/AboutSection";
import SkillSection from "./sections/SkillsSection/SkillSection";
import ContactSection from "./sections/ContactSection/ContactSection";
import EducationSection from "./sections/EducationSection/EducationSection";

export default function HomePage() {
  return (
    // Home Page
    <main>
      <HeroSection />
      <AboutSection />
      <SkillSection />
      <EducationSection />
      <ContactSection />
    </main>
  );
}

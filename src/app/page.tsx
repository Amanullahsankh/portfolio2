"use client";

import ScrollyCanvas from "@/components/ScrollyCanvas";
import About from "@/components/About";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFFFFF] text-[#1A1A1A]">
      <ScrollyCanvas />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Achievements />
      <Contact />
    </main>
  );
}

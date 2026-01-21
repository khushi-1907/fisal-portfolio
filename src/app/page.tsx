"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main className="relative min-h-screen bg-white text-slate-soft overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Education />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  );
}

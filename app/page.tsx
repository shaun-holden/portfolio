// This is the homepage. Each section is a separate component imported here.
// As we build each section, we'll uncomment the import and add it to the page.

import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Services />
      <Contact />
    </main>
  );
}

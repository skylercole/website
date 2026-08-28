import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Experience from "@/components/sections/Experience";
import Metrics from "@/components/sections/Metrics";
import About from "@/components/sections/About";
import Doctrine from "@/components/sections/Doctrine";
import Patronage from "@/components/sections/Patronage";
import Capabilities from "@/components/sections/Capabilities";
import TechStack from "@/components/sections/TechStack";
import CaseStudies from "@/components/sections/CaseStudies";
import ClientLogos from "@/components/sections/ClientLogos";
import Labs from "@/components/sections/Labs";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Metrics />
        <CaseStudies />
        <About />
        <Capabilities />
        <TechStack />
        <ClientLogos />
        <Labs />
        <Doctrine />
        <Patronage />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

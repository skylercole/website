"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Metrics from "@/components/sections/Metrics";
import About from "@/components/sections/About";
import Doctrine from "@/components/sections/Doctrine";
import Capabilities from "@/components/sections/Capabilities";
import TechStack from "@/components/sections/TechStack";
import CaseStudies from "@/components/sections/CaseStudies";
import ClientLogos from "@/components/sections/ClientLogos";
import Contact from "@/components/sections/Contact";

const LenisProvider = dynamic(
  () => import("@/components/ui/LenisProvider"),
  { ssr: false }
);

const CustomCursor = dynamic(
  () => import("@/components/ui/CustomCursor"),
  { ssr: false }
);

export default function Home() {
  return (
    <>
      <LenisProvider />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Metrics />
        <CaseStudies />
        <Doctrine />
        <About />
        <Capabilities />
        <TechStack />
        <ClientLogos />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

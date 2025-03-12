import Certifications from "@/components/industries/certi";
import Hero from "@/components/industries/Hero";
import IndusList from "@/components/industries/indusList";
import FAQ from "@/components/layout/FAQ";
import Footer from "@/components/layout/Footer";
import NavBar from "@/components/NavBar";
import { generateMetadata } from "@/lib/metadata";
import { Metadata } from "next/types";
export const metadata: Metadata = generateMetadata({
  title: "Jolly Pipes Limited | Industries",
  description:
    "Specializing in CPVC, UPVC, SWR, and agricultural piping systems for reliable performance and durability.",
  openGraph: {
    type: "website", // or any other valid OpenGraph type
    // ... other OpenGraph properties
  },
  canonical:
    "Jolly Pipes Limited: Specializing in CPVC, UPVC, SWR, and agricultural piping systems for reliable performance and durability.",
  // ... other metadata properties
});
export default function Home() {
  
  return (
    <>
    <NavBar />
      <Hero /> 
      <IndusList />
      <Certifications />
      <FAQ />
      <Footer/>
    </>
  );
}

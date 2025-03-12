import AboutUsimages from "@/components/about-us/AboutUsimages";
import ReviewsCourausel from "@/components/about-us/ReviewsCourausel";
import FAQ from "@/components/layout/FAQ";
import Footer from "@/components/layout/Footer";
import NavBar from "@/components/NavBar";
import InfiniteCarousel from "@/components/ui/iamges";
import { generateMetadata } from "@/lib/metadata";
import { Metadata } from "next/types";
export const metadata: Metadata = generateMetadata({
  title: "Jolly Pipes Limited | About Us",
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
  const images = [
    '/about-us/2.png',    
    '/about-us/a-2.png',    
    '/about-us/a-3.png',    
    // Add more image URLs as needed
  ];
  return (
    <> 
    <NavBar />
      <InfiniteCarousel images={images} interval={3000} />
      <ReviewsCourausel />
      <AboutUsimages />
      <FAQ />
      <Footer />
    </>
  );
}

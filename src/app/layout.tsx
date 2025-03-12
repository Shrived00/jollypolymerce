import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { generateMetadata } from "@/lib/metadata";

export const metadata: Metadata = generateMetadata({
  title: "Jolly Pipes Limited | Home",
  description:
    "Specializing in CPVC, UPVC, SWR, and agricultural piping systems for reliable performance and durability.",
  openGraph: {
    type: "website", // or any other valid OpenGraph type
    // ... other OpenGraph properties
  },
  canonical: "https://www.jollypipes.com/",
});

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className=" antialiased bg-b scroll-smooth">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}

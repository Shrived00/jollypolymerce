"use client";
import Image from "next/image";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@react-email/components";
import { useState } from "react";
const applications = [
  {
    id: "residential",
    title: "Residential",
    content: {
      usage:
        "UPVC And CPVC Pipes For Plumbing Systems, Water Supply, And Drainage In Homes, Apartments, And Residential Complexes.",
      benefits:
        "Corrosion Resistance, Long-Lasting Durability, And Cost-Effectiveness Make These Pipes Ideal For Residential Water Distribution And Waste Management.",
      solutions:
        "Leak-Proof SWR Pipes For Managing Household Waste And Rainwater Efficiently, Preventing Blockages And Leaks.",
      image: "/ind/2.png",
    },
  },
  {
    id: "commercial",
    title: "Commercial & Industrial",
    content: {
      usage:
        "Usage: Pipes for plumbing, drainage, and electrical conduits in residential, commercial, and industrial buildings.",
      benefits:
        "UPVC and CPVC pipes are ideal for water distribution, SWR systems, and concealed wiring due to their corrosion resistance and ease of installation.",
      solutions:
        "Ensures smooth water flow and waste management, reducing leakage and maintenance costs.",
      image: "/ind/3.png",
    },
  },
  {
    id: "waste-management",
    title: "Waste Management",
    content: {
      usage:
        "SWR pipes for sewage and waste management systems in cities and rural areas.",
      benefits:
        "Leak-proof, lightweight, and resistant to chemicals, ensuring clean and efficient water supply and waste removal.",
      solutions:
        "Improves sanitation systems and reduces the risk of contamination and water-borne diseases.",
      image: "/ind/4.png",
    },
  },
  {
    id: "agriculture",
    title: "Agriculture",
    content: {
      usage:
        "Agricultural pipes are essential for irrigation systems, drainage, and water distribution.",
      benefits:
        "Durability, resistance to corrosion, and lightweight nature, ensuring long-lasting performance in harsh outdoor conditions.",
      solutions:
        "Efficient water management for drip irrigation, flood irrigation, and drainage.",
      image: "/ind/1.png",
    },
  },
];
const data = [
  {
    id: 1,
    name: "Waste Management",
    sub: "SWR systems for efficient waste and rainwater management.",
    img: "/ind/4.png",
  },
  {
    id: 2,
    name: "Agriculture",
    sub: "Irrigation and water distribution solutions.",
    img: "/ind/1.png",
  },
  {
    id: 3,
    name: "Commercial & Industrial",
    sub: "High-performance piping for large-scale projects.",
    img: "/ind/3.png",
  },
  {
    id: 4,
    name: "Residential",
    sub: "Pluwmbing and drainage systems.",
    img: "/ind/2.png",
  },
];
export default function IndusList() {
  const [activeTab, setActiveTab] = useState("residential");
  const [direction, setDirection] = useState(0);

  const handleTabChange = (tabId: string) => {
    const currentIndex = applications.findIndex((app) => app.id === activeTab);
    const newIndex = applications.findIndex((app) => app.id === tabId);
    setDirection(newIndex > currentIndex ? 1 : -1);
    setActiveTab(tabId);
  };

  const handleNext = () => {
    const currentIndex = applications.findIndex((app) => app.id === activeTab);
    const nextIndex = (currentIndex + 1) % applications.length;
    setDirection(1);
    setActiveTab(applications[nextIndex].id);
  };

  return (
    <div className="bg-b py-4">
      <MaxWidthWrapper>
        <div className="min-h-screen bg-navy-900 text-white md:p-8">
          <h1 className="text-white text-[28px] md:text-[54px] font-medium">
            Key <br className="md:hidden" />
            Industry Applications
          </h1>
          <div className="mb-6 flex space-x-4 mt-6 overflow-x-scroll no-scrollbar">
            {applications.map((app) => (
              <button
                key={app.id}
                onClick={() => handleTabChange(app.id)}
                className={`${
                  activeTab === app.id
                    ? "bg-blue-600 text-white"
                    : "bg-transparent text-white"
                } rounded-full transition-colors duration-300 whitespace-nowrap min-w-max border border-[#a8a8a86a] py-3 px-5 md:px-10 md:py-3`}
              >
                {app.title}
              </button>
            ))}
          </div>
          <AnimatePresence mode="wait" custom={direction}>
            {applications.map(
              (app) =>
                activeTab === app.id && (
                  <motion.div
                    key={app.id}
                    custom={direction}
                    initial={{ opacity: 0, x: direction * 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: direction * -50 }}
                    transition={{ duration: 0.3 }}
                    className="bg-navy-800 w-full flex flex-col md:flex-row justify-between border border-[#a8a8a86a] p-3 md:p-7 rounded-3xl gap-6"
                  >
                    <div className="flex">
                      <img
                        src={app.content.image}
                        alt={app.title}
                        className="rounded-lg md:w-96 h-auto aspect-square"
                      />
                    </div>
                    <div className="flex-1 flex  flex-col justify-between pr-6">
                      <div className="">
                        <h2 className="text-2xl font-bold mb-4">{app.title}</h2>
                        <p className="mb-4 text-[#FAD4C0]">
                          <strong>Usage:</strong> {app.content.usage}
                        </p>
                        <p className="mb-4 text-[#C2C5F6]">
                          <strong>Benefits:</strong> {app.content.benefits}
                        </p>
                        <p className="mb-4 text-[#C7EECF]">
                          <strong>Solutions:</strong> {app.content.solutions}
                        </p>
                      </div>
                      <div className="">
                        <button
                          onClick={handleNext}
                          className="bg-blue-600 hover:bg-blue-700 transition-colors duration-300 px-10 py-3 rounded-full"
                        >
                          Next
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )
            )}
          </AnimatePresence>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}

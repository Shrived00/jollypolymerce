"use client";
import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import { Phone } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const data = [
  {
    id: "1",
    q: "What types of plastic pipes and fittings do you offer?",
    a: "At Jolly, we offer a wide range of high-quality plastic pipes and fittings, including PVC, CPVC, UPVC pipes, and specialized solutions for residential, commercial, and industrial sectors.",
  },
  {
    id: "2",
    q: "How can I purchase your products?",
    a: "You can buy our products through our extensive distribution network or by contacting us directly for large orders. We ensure that our products are easily accessible to meet your needs.",
  },
  {
    id: "3",
    q: "What makes Jolly Pipes different from other manufacturers?",
    a: "Jolly stands out due to our commitment to quality, innovation, and customer satisfaction. We consistently improve our manufacturing processes and product offerings to ensure efficiency, durability, and value for our customers.",
  },
  {
    id: "4",
    q: "What industries do you serve?",
    a: "We provide piping solutions for various industries, including residential, commercial, industrial, and agricultural sectors, ensuring reliable performance across all applications.",
  },
];
export default function FAQ() {
  return (
    <div className="bg-b py-12 ">
      <MaxWidthWrapper>
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 100,
          }}
          viewport={{ once: true }}
          className=""
        >
          <h1 className="text-white text-3xl md:text-[54px] font-medium">
            FAQ
          </h1>
          <Accordion type="single" defaultValue="1" collapsible>
            {data.map((items) => (
              <AccordionItem value={items.id} className="py-3" key={items.id}>
                <AccordionTrigger>{items.q}</AccordionTrigger>
                <AccordionContent>{items.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
        <div className="bg-[#4967E2] rounded-[20px] grid grid-cols-10 mt-20 md:mt-32 px-4 md:px-10 relative overflow-hidden">
          <div className="col-span-10 md:col-span-8  flex flex-col justify-center items-start  gap-3 md:gap-6 py-5 ">
            <h1 className="text-white text-2xl md:text-[60px] font-semibold">
              Trusted by  <span className="text-yellow-200"></span>
            </h1>
            <h1 className="text-white text-[15px] md:text-[20px] font-normal">
              hot and cold water piping, specializing in CPVC, UPVC, SWR, and
              agricultural systems.
            </h1>
            <Link
              href={"/contact-us"}
              className="  group hover:bg-b shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] text-[#4967E2] hover:text-white  bg-white transition-all duration-500 py-2 pr-3 md:py-5 flex flex-row gap-2 px-2 md:px-10 font-medium rounded-full justify-center items-center text-[10px] md:text-2xl"
            >
              <Phone
                size={32}
                className="h-4 md:h-6 fill-[#4967E2] group-hover:fill-white transition-all duration-500" 
              />
              <span className="text-sm md:text-xl">Contact Us</span>
            </Link>
          </div>
          <div className="col-span-2 mt-3 hidden md:block"> 
            <Image
              src={"/products/cta.png"}
              alt=""
              height={1200}
              width={1200}
              className="  md:w-[243px]"
            />
          </div>
          
        </div>
      </MaxWidthWrapper>
    </div>
  );
}

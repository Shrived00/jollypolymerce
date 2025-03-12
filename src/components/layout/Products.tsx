import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const data = [
  {
    id: 1,
    name: "CPVC pipes",
    sub:
      "Ideal for hot and cold water applications, offering excellent heat resistance and durability.",
    img: "1.png",
    color: "#FAD4C0",
  },
  {
    id: 2,
    name: "UPVC pipes",
    sub:
      "UPVC pipes Strong, lightweight, and corrosion-resistant, perfect for cold water supply and drainage systems.",
    img: "2.png",
    color: "#A8DADC",
  },
  {
    id: 3,
    name: "SWR pipes",
    sub:
      "Specialized for soil, waste, and rainwater management, ensuring efficient flow and durability.",
    img: "3.png",
    color: "#EAEAEA",
  },
  {
    id: 4,
    name: "AGRI pipes",
    sub:
      "Designed for irrigation and water distribution in agriculture, providing strength and longevity in the field.",
    img: "4.png",
    color: "#C7EECF",
  },
];
export default function Products() {
  return (
    <div className="bg-b py-16" id="products">
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
        >
          <h1 className="text-white text-4xl md:text-[54px] font-medium">
            Products
          </h1>
          <div className="grid md:grid-cols-4 gap-10 py-10 mx-8 md:mx-0">
            {data.map((items) => (
              <a
                href="/Brochure.pdf"
                target="_blank"
                aria-label="Brochure"
                key={items.id}
                className={cn(
                  "grid grid-col-1 rounded-[20px] text-black hover:scale-105 transition-all place-content-start duration-500",
                  `bg-[${items.color}]`
                )}
                style={{ backgroundColor: items.color }}
              >
                <div className="   flex justify-center items-center  aspect-auto ove mt-5 md:mt-1">
                  <Image
                    src={`/products/${items.img}`}
                    alt=""
                    height={1000}
                    width={1000}
                    className="p-5"
                  />
                </div>
                <div className="flex flex-col gap-3 p-3 mb-10   ">
                  <h1 className="text-2xl md:text-[32px] font-semibold">
                    {items.name}
                  </h1>
                  <span className=" text-sm md:text-base font-normal">
                    {items.sub}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </motion.div>
      </MaxWidthWrapper>
    </div>
  );
}

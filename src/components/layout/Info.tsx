import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Image from "next/image";
import { motion } from "framer-motion";
import NumberTicker from "../magicui/number-ticker";

export default function Info() {
  return (
    <div className=" bg-white py-10 md:py-3 text-black">
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
          className="grid md:grid-cols-2"
        >
          <div className="  flex flex-col gap-2 md:gap-6 justify-center">
            <div className="flex flex-col md:gap-5">
              <div className="text-3xl md:text-[60px] font-semibold text-[#5467b6]">

                <NumberTicker value={120} className="text-3xl md:text-[60px] font-semibold text-[#5467b6]" /><span className="text-[#010f48]">K+</span>
              </div>
              <h1 className="text-sm  md:text-[24px] font-medium text-[#363636]">
                satisfied customer globally
              </h1>
            </div>
            <div className="max-w-lg">
              <h1 className="text-[#767676] text-[12px]  md:text-[20px] font-normal">
                Your one-stop solution for all hot and cold water piping needs.
                Specializing in{" "}
                <span className="text-[#010f48] font-semibold">
                  CPVC, UPVC, SWR, and agricultural
                </span>{" "}
                piping systems for reliable performance and durability.
              </h1>
            </div>
          </div>
          <div className="  flex justify-end items-center ">
            <Image
              src={"/hero.png"}
              priority
              alt=""
              height={1080}
              width={1920}
              className="max-w-xs mt-10"
            />
          </div>
        </motion.div>
      </MaxWidthWrapper>
    </div>
  );
}

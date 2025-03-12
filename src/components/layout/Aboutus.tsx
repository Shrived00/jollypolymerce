import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Image from "next/image";
import {
  ChartSpline,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Target,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Aboutus() {
  const companies = [
    { name: "Deloitte", logo: "/client/c1.png" },
    { name: "eBay", logo: "/client/c2.png" },
    { name: "Google", logo: "/client/c3.png" },
    { name: "Facebook", logo: "/client/c4.png" },
    { name: "Microsoft", logo: "/client/c5.png" },
    { name: "Microsoft", logo: "/client/c6.png" },
    { name: "Microsoft", logo: "/client/c7.png" },
    { name: "Microsoft", logo: "/client/c8.png" },
  ];


  const data = [
    { name: "Shreeji Polymers, Bhuj" },
    { name: "Mahesvari Polymers, Mehsana" },
    { name: "M.D. Sales, Jaipur" },
    { name: "Angel Tiles, Udaipur" },
    { name: "N.K. Polymers, Ahmedabad" },
    { name: "Sanghvi Bafna, Pune" },
    { name: "D.K. Enterprise, Ahmedabad" },
    { name: "Govinda Enterprise, Vadodara" },
  ]
  return (
    <div className="py-[100px] flex flex-col gap-14 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 100,
        }}
        viewport={{ once: true }}
        className="py-10 md:py-20 bg-[#F5F5F5] md:flex flex-row items-center justify-center"
      >
        <div className="w-full   ">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex overflow-hidden space-x-16 group">
              <div className="flex space-x-6 animate-infinite-scroll group-hover:paused">
                {[...companies, ...companies].map((items) => (
                  <img
                    key={items.name + "h"}
                    loading="lazy"
                    src={items.logo}
                    className="max-w-none h-7 md:h-10"
                    alt="Image 1"
                  />
                ))}
              </div>
              <div
                className="flex space-x-16 animate-infinite-scroll group-hover:paused"
                aria-hidden="true"
              >
                {[...companies, ...companies].map((items) => (
                  <img
                    key={items.name + "sdf"}
                    loading="lazy"
                    src={items.logo}
                    className="max-w-none h-7 md:h-10"
                    alt="Image 1"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

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
        <MaxWidthWrapper>
          <div className=" grid md:grid-cols-2 gap-[40px]">
            <div className="bg-[#E5E8FF] hover:bg-[#BFC7FF] group  rounded-3xl grid grid-cols-2 col-span-1 overflow-hidden">
              <div className=" px-4 py-5 flex flex-col gap-3 justify-between">
                <div className="h-8 w-8 md:h-16 md:w-16 bg-white rounded-full flex justify-center items-center">
                  <svg
                    width="41"
                    height="41"
                    viewBox="0 0 41 41"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="antialiased h-8 md:h-16"
                  >
                    <path
                      d="M30.5013 4.27075C29.5813 4.27075 28.8346 5.01742 28.8346 5.93742V10.2091L21.338 17.7041C21.338 17.7041 20.763 17.6041 20.5013 17.6041C18.6596 17.6041 17.168 19.0958 17.168 20.9374C17.168 22.7791 18.6596 24.2708 20.5013 24.2708C22.343 24.2708 23.8346 22.7791 23.8346 20.9374C23.8346 20.6758 23.728 20.1058 23.728 20.1058L31.2313 12.6041H35.5013C36.4213 12.6041 37.168 11.8574 37.168 10.9374C37.168 10.0174 36.4213 9.27075 35.5013 9.27075H32.168V5.93742C32.168 5.01742 31.4213 4.27075 30.5013 4.27075Z"
                      fill="#010F48"
                    />
                    <path
                      d="M20.4987 4.27075C11.2937 4.27075 3.83203 11.7324 3.83203 20.9374C3.83203 30.1424 11.2937 37.6041 20.4987 37.6041C29.7037 37.6041 37.1653 30.1424 37.1653 20.9374C37.1653 19.6808 37.022 18.4458 36.7487 17.2391C36.5453 16.3424 35.667 15.7858 34.7687 15.9891C33.872 16.1924 33.3153 17.0707 33.5187 17.9691C33.7387 18.9324 33.832 19.9291 33.832 20.9374C33.832 28.3008 27.862 34.2708 20.4987 34.2708C13.1354 34.2708 7.16536 28.3008 7.16536 20.9374C7.16536 13.5741 13.1354 7.60409 20.4987 7.60409C21.5054 7.60409 22.5037 7.6974 23.467 7.9174C24.3654 8.12073 25.2437 7.56407 25.447 6.6674C25.6503 5.76907 25.0937 4.89075 24.197 4.68742C22.992 4.41409 21.7537 4.27075 20.4987 4.27075ZM20.4987 10.9374C14.9754 10.9374 10.4987 15.4141 10.4987 20.9374C10.4987 26.4608 14.9754 30.9374 20.4987 30.9374C26.022 30.9374 30.4987 26.4608 30.4987 20.9374C30.4987 20.0174 29.752 19.2708 28.832 19.2708C27.912 19.2708 27.1653 20.0174 27.1653 20.9374C27.1653 24.6191 24.1804 27.6041 20.4987 27.6041C16.817 27.6041 13.832 24.6191 13.832 20.9374C13.832 17.2558 16.817 14.2708 20.4987 14.2708C21.4187 14.2708 22.1654 13.5241 22.1654 12.6041C22.1654 11.6841 21.4187 10.9374 20.4987 10.9374Z"
                      fill="#4967E2"
                    />
                  </svg>
                </div>
                <div className="text-xl md:text-[24px] text-[#363636]">
                  <h1 className="font-medium">Mission</h1>
                </div>
                <div className="text-[10px] md:text-[18px] text-[#363636] ">
                  <h1 className="font-normal">
                    To continually innovate, develop & provide water storage
                    solutions to society for enhanced living.
                  </h1>
                </div>
              </div>
              <div className="col-span-1 overflow-hidden max-h-[280px]  transition-all duration-300">
                <Image
                  src={"/about-us/11.png"}
                  width={600}
                  height={600}
                  className="object-cover  h-full grayscale object-right group-hover:scale-110  transition-all duration-300"
                  alt=""
                />
              </div>
            </div>
            <div className="bg-[#FFF3DD] hover:bg-[#FFE7BB] group transition-all duration-300 rounded-3xl grid grid-cols-2 col-span-1 overflow-hidden">
              <div className=" px-4 py-5 flex flex-col gap-3 justify-between">
                <div className="h-8 w-8 md:h-16 md:w-16 bg-white rounded-full flex justify-center items-center">
                  <svg
                    width="41"
                    height="41"
                    viewBox="0 0 41 41"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="antialiased h-8 md:h-16"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.16667 5.93726C8.08714 5.93726 8.83333 6.68345 8.83333 7.60392V29.2706C8.83333 31.1115 10.3257 32.6039 12.1667 32.6039H33.8333C34.7538 32.6039 35.5 33.3501 35.5 34.2706C35.5 35.1911 34.7538 35.9373 33.8333 35.9373H12.1667C8.48477 35.9373 5.5 32.9525 5.5 29.2706V7.60392C5.5 6.68345 6.24619 5.93726 7.16667 5.93726Z"
                      fill="#4967E2"
                    />
                    <path
                      d="M23.8444 9.27075V12.6041H29.7761L25.1449 17.2391C24.9951 17.3908 24.5271 17.6041 24.3123 17.6041H21.7111C20.6137 17.6041 19.2598 18.1291 18.4838 18.9058L12.6557 24.7391C12.0054 25.3908 12.0054 26.4841 12.6557 27.1357C12.9809 27.4607 13.4265 27.6041 13.8527 27.6041C14.2788 27.6041 14.7245 27.4607 15.0497 27.1357L20.8785 21.3024C21.0284 21.1507 21.4963 20.9374 21.7111 20.9374H24.3123C25.4097 20.9374 26.7636 20.4124 27.5396 19.6357L32.1707 15.0007V20.9374H35.5013V10.9374C35.5013 10.0174 34.7553 9.27075 33.836 9.27075H23.8444Z"
                      fill="#010F48"
                    />
                  </svg>
                </div>
                <div className="text-xl md:text-[24px] text-[#363636]">
                  <h1 className="font-medium">Vision</h1>
                </div>
                <div className="text-[10px] md:text-[18px] text-[#363636] ">
                  <h1 className="font-normal">
                    The company creates sustainable value for employees,
                    customers, and stakeholders, driving long-term growth.
                  </h1>
                </div>
              </div>
              <div className="col-span-1 overflow-hidden max-h-[280px]  transition-all duration-300">
                <Image
                  src={"/about-us/1.png"}
                  width={600}
                  className="object-cover  h-full grayscale object-right group-hover:scale-110  transition-all duration-300"
                  height={600}
                  alt=""
                />
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </motion.div>
      <div className="">
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
            className="flex flex-col gap-6"
          >
            <h1 className="text-[#010F48] text-4xl  md:text-[54px] font-medium">
              About Us
            </h1>
            <h1 className=" text-[#767676] text-[13px] md:text-[20px] font-normal">
              At Jolly, we deliver high-quality plastic pipes and fittings for
              residential, commercial, and industrial needs. Through a vast
              distribution network and continuous improvement, we ensure
              exceptional customer service and satisfaction.
            </h1>
            <div className="flex gap-6">
              <a
                href="https://www.facebook.com/share/1CyUS7c5aG/?mibextid=wwXIfr"
                aria-label="Share on Facebook"
                target="_blank"
                className="bg-b hover:bg-[#4967E2] transition-all duration-300 h-10 w-10   md:h-10 md:w-10 rounded-full flex items-center justify-center"
              >
                <Facebook color="white" fill="white" />
              </a>
              <a
                href="https://www.instagram.com/jolly_pipes?igsh=MTRpcjYxaWFjdXZsMw%3D%3D&utm_source=qr"
                target="_blank"
                aria-label="Share on Instagram"
                className="bg-b  hover:bg-[#4967E2] transition-all duration-300 h-10 w-10   md:h-10 md:w-10 rounded-full flex items-center justify-center"
              >
                <Instagram
                  color="white"
                  className="hover:bg-[#4967E2] transition-all duration-300"
                />
              </a>

              <a
                href="mailto:info@jollypipes.in"
                target="_blank"
                aria-label="Share on Email"
                className="bg-b  hover:bg-[#4967E2] transition-all duration-300 h-10 w-10   md:h-10 md:w-10 rounded-full flex items-center justify-center"
              >
                <Mail
                  color="white"
                  className="hover:bg-[#4967E2] transition-all duration-300"
                />
              </a>
            </div>
          </motion.div>
        </MaxWidthWrapper>
      </div>
    </div>
  );
}

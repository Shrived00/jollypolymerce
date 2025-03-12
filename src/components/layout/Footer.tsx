import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="bg-white py-8 text-[#010F48]">
      <MaxWidthWrapper>
        <div className="grid md:grid-cols-10">
          <div className="col-span-4   flex flex-col gap-6 px-3">
            <div className="">
              <Image
                src="/logo-d.png"
                alt=""
                height={1000}
                width={1000}
                className="h-20 w-32"
              />
            </div>
            <div className=" flex flex-col gap-3">
              <div className="grid grid-cols-6 gap-2  ">
                <input
                  type="text"
                  name=""
                  id=" "
                  className="col-span-6 md:col-span-4 border-2 rounded-full border-[#010F48] px-4 h-12"
                  placeholder="Enter you email"
                />
                <button className="col-span-6 md:col-span-2 rounded-full text-white bg-[#4967E2] h-12 ">
                  Subscribe now
                </button>
              </div>
              <div className="">
                <h1 className="text-[14px] font-normal">
                  Your one-stop solution for all hot and cold water piping
                  needs. Specializing in CPVC, UPVC, SWR, and agricultural
                  piping systems for reliable performance and durability.
                </h1>
              </div>
            </div>
          </div>
          <div className="col-span-3  grid grid-cols-2 px-3 md:px-0 md:ml-14 place-content-center place-items-start pt-10">
            <div className="flex flex-col gap-7 text-left ">
              <h1 className="font-medium text-[20px]">Website Link</h1>
              <Link href={""} className="font-normal text-[14px]">
                Home
              </Link>
              <Link href={""} className="font-normal text-[14px]">
                Industries
              </Link>
              <Link href={""} className="font-normal text-[14px]">
                Get in touch
              </Link>
              <Link href={""} className="font-normal text-[14px]">
                FAQs
              </Link>
            </div>
            <div className="flex flex-col  gap-7">
              <h1 className="font-medium text-[20px]">Product</h1>
              <Link href={""} className="font-normal text-[14px]">
                CPVC
              </Link>
              <Link href={""} className="font-normal text-[14px]">
                UPVC
              </Link>
              <Link href={""} className="font-normal text-[14px]">
                SWR
              </Link>
              <Link href={""} className="font-normal text-[14px]">
                AGRI
              </Link>
            </div>
          </div>
          <div className="col-span-3 flex items-end justify-end mt-10  md:ml-5">
            <div className="rounded-3xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d823.3946411387732!2d70.44912434304715!3d21.71686867652872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39581f574ea41af3%3A0x77c22a21fe06efd3!2sRAJLAXMI%20PETROLIUM!5e0!3m2!1sen!2sin!4v1726769617414!5m2!1sen!2sin"
                width="340"
                height="230"
                loading="lazy"
                title="Google Map showing our location"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="p-[.5px] bg-b mt-12"></div>
        <div className="flex flex-col md:flex-row items-center gap-5 justify-between py-5 ">
          <div className="flex gap-6">
            <a
              href="https://www.facebook.com/share/1CyUS7c5aG/?mibextid=wwXIfr"
              target="_blank"
              aria-label="Share on Facebook"
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
              aria-label="Share on Mail"
              className="bg-b  hover:bg-[#4967E2] transition-all duration-300 h-10 w-10   md:h-10 md:w-10 rounded-full flex items-center justify-center"
            >
              <Mail
                color="white"
                className="hover:bg-[#4967E2] transition-all duration-300"
              />
            </a>
          </div>
          <div className="">
            <h1>Copyrighted © 2024 JOLLY Pipes Industry.</h1>
          </div>
          <div className=""></div>
          <div className=""></div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}

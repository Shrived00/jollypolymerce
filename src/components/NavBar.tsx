"use client";
import { ChartNoAxesColumnIncreasing, Mail, Phone } from "lucide-react";
import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import MobileNavContent from "./layout/MobileNavContent";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function NavBar() {
  const currentPage = usePathname();
  return (
    <div className="bg-b  ">
      {/* sticky top-0 z-50 */}
      <MaxWidthWrapper>
        <div className="flex flex-col">
          <div className="hidden md:flex flex-row justify-end items-center bg-pink gap-10 text-xs py-[8px]">
            <div className="flex flex-row gap-[10px] items-center">
              <Mail size={15} />
              <span className="font-light">info@jollypipes.in</span>
            </div>
            <div className="flex flex-row gap-[10px] items-center">
              <Phone size={15} />
              <span className="font-light">+91 97259 86060</span>
            </div>
          </div>
          <div className="flex flex-row justify-between items-center">
            <Link href={"/"} className="">
              {/* <Image src={"/logo.png"} height={100} width={160} alt="" /> */}
              <div className="hidden md:block">

                <Image src="/logo-w.png" alt="" height={100} width={130} />
              </div>
              <div className=" md:hidden py-4">

                <Image src="/logo-w.png" alt="" height={55} width={100} />

              </div>
            </Link>
            <div className="hidden md:flex flex-row gap-[70px]">
              <Link
                href={"/"}
                className={cn(
                  "text-xl hover:text-white transition-all duration-500",
                  currentPage == "/"
                    ? "font-semibold"
                    : "font-medium text-[#C5C5C5]"
                )}
              >
                Home
              </Link>
              <Link
                href={"/#products"}
                className={cn(
                  "text-xl hover:text-white transition-all duration-500",
                  currentPage == "/#products"
                    ? "font-semibold"
                    : "font-medium text-[#C5C5C5]"
                )}
              >
                Products
              </Link>{" "}
              <Link
                href={"/about-us"}
                className={cn(
                  "text-xl hover:text-white transition-all duration-500",
                  currentPage == "/about-us"
                    ? "font-semibold"
                    : "font-medium text-[#C5C5C5]"
                )}
              >
                About Us
              </Link>
              <Link
                href={"/industries"}
                className={cn(
                  "text-xl hover:text-white transition-all duration-500 ",
                  currentPage == "/industries"
                    ? "font-semibold"
                    : "font-medium text-[#C5C5C5]"
                )}
              >
                Industries
              </Link>
            </div>
            <div className="flex justify-center items-center md:hidden">
              <Sheet>
                <SheetTrigger>
                  <button>
                    <ChartNoAxesColumnIncreasing
                      size={24}
                      className="rotate-[270deg]"
                    />
                  </button>
                </SheetTrigger>
                <SheetContent side={"left"} className="w-[85%]">
                  <MobileNavContent />
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}

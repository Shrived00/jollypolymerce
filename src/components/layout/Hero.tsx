
import { Box } from "lucide-react";
import Image from "next/image";
import MaxWidthWrapper from "../MaxWidthWrapper";
function Hero() {
  return (
    <div className="bg-b relative md:min-h-[20rem]  py-9 ">
      <MaxWidthWrapper>
        <div className="hidden md:block">
          <div className="flex flex-row gap-[28px] items-center justify-between  ">
            <h1 className="text-[60px] uppercase font-medium">
              Expert Piping Systems for
            </h1>
            <a
              href="/Brochure.pdf"
              target="_blank"
              aria-label="Brochure"
              className="group border-[2px] font-medium shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]   hover:border-[#4967E2] border-white hover:bg-white hover:text-[#4967E2]  bg-[#4967E2] py-5 flex flex-row gap-3 px-10 rounded-full justify-center items-center text-2xl transition-all duration-500"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                className="group-hover:fill-black"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.99902 0.499575C5.58321 0.499574 4.26839 1.23519 3.52637 2.44098L0.719727 7.00153H1.89453L1.89356 7.00342H12.5381L12.96 1.49951H12.9541L13.0293 0.499512L6.99902 0.499575ZM18.9629 0.499575L19.04 1.49957L19.4619 7.00348H30.1064L30.1055 7.00159H31.2793L28.4736 2.44098C27.7316 1.23519 26.4158 0.499575 25 0.499575H18.9629ZM0.5 7.99762V17.5005V29.0015C0.5 30.3763 1.62326 31.4996 2.99804 31.4996H29.001C30.3758 31.4996 31.5 30.3763 31.5 29.0015V7.99762H19.501V15.0015C19.5008 15.0866 19.4789 15.1703 19.4373 15.2446C19.3958 15.3189 19.3359 15.3814 19.2634 15.4261C19.1909 15.4708 19.1083 15.4962 19.0232 15.5C18.9381 15.5038 18.8535 15.4858 18.7773 15.4478C18.7864 15.4503 18.7955 15.4525 18.8047 15.4546C18.7955 15.4519 18.7864 15.4489 18.7773 15.4457L16.0019 14.058L13.2227 15.4457C13.2133 15.4492 13.2039 15.4525 13.1943 15.4555C13.2038 15.4532 13.2133 15.4506 13.2227 15.4478C13.1465 15.4858 13.0619 15.5038 12.9768 15.5C12.8917 15.4962 12.8091 15.4708 12.7366 15.4261C12.6641 15.3814 12.6042 15.3189 12.5627 15.2446C12.5211 15.1703 12.4992 15.0866 12.499 15.0015V7.99951L0.5 7.99762ZM3.5 25.0006H5.95507H6.45703H6.95507H12.001C12.1336 25.0011 12.2605 25.0543 12.3539 25.1484C12.4473 25.2425 12.4995 25.3699 12.499 25.5025V28.5025C12.4987 28.6346 12.4462 28.7612 12.3529 28.8547C12.2596 28.9482 12.1331 29.001 12.001 29.0015H3.5C3.43425 29.0018 3.36911 28.9891 3.30829 28.9641C3.24747 28.9392 3.19216 28.9025 3.14554 28.8561C3.09892 28.8098 3.0619 28.7547 3.03659 28.694C3.01128 28.6333 2.99818 28.5682 2.99804 28.5025V25.5025C2.99779 25.4365 3.0106 25.3711 3.03574 25.3101C3.06087 25.2491 3.09784 25.1937 3.1445 25.147C3.19117 25.1003 3.2466 25.0634 3.30761 25.0382C3.36863 25.0131 3.43401 25.0003 3.5 25.0006Z"
                  className="fill-white group-hover:fill-[#4967E2]"
                />
              </svg>

              <span className="">View Our Range</span>
            </a>
          </div>
          <div className="flex relative flex-row  items-center justify-between ">
            <div className="flex flex-row gap-5">
              <div className="flex flex-row gap-3 items-center">
                <div className="bg-[#4967E2] h-[68px] w-[68px] rounded-full border flex justify-center items-center border-white z-[10]">
                  <Image
                    src={"/hero/1.png"}
                    alt=""
                    height={100}
                    width={100}
                    className="z-0 o object-cover  w-9"
                  />
                </div>
              </div>
              <div className="flex flex-row gap-3 items-center">
                <div className="bg-[#4967E2] h-[68px] w-[68px] rounded-full border flex justify-center items-center border-white z-[10]">
                  <Image
                    src={"/hero/2.png"}
                    alt=""
                    height={100}
                    width={100}
                    className="z-0 o object-cover  w-14"
                  />
                </div>
              </div>
              <div className="flex flex-row gap-3 items-center">
                <div className="bg-[#4967E2] h-[68px] w-[68px] rounded-full border flex justify-center items-center border-white z-[10]">
                  <Image
                    src={"/hero/3.png"}
                    alt=""
                    height={100}
                    width={100}
                    className="z-0 o object-cover  w-14"
                  />
                </div>
              </div>
              <div className="flex flex-row gap-3 items-center">
                <div className="bg-[#4967E2] h-[68px] w-[68px] rounded-full border flex justify-center items-center border-white z-[10]">
                  <Image
                    src={"/hero/4.png"}
                    alt=""
                    height={100}
                    width={100}
                    className="z-0 o object-cover  w-16"
                  />
                </div>
              </div>
              <div className="flex flex-row gap-3 items-center">
                <div className="bg-[#4967E2] h-[68px] w-[68px] rounded-full border flex justify-center items-center border-white z-[10]">
                  <Image
                    src={"/hero/5.png"}
                    alt=""
                    height={100}
                    width={100}
                    className="z-0 o object-cover  w-16"
                  />
                </div>
              </div>
            </div>
            <h1 className="text-[60px] uppercase font-medium">
              Agri
              <span className="text-[#ffb271]"> Hot</span> &{" "}
              <span className="text-[#77ccff]">Cold </span> Water.
            </h1>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center md:hidden">
          <div className="flex flex-col justify-center items-end max-w-sm">
            <Image
              src="/mhero-1.png"
              priority
              alt=""
              width={600}
              height={500}
              className=""
            />
          </div>
          <div className="flex relative flex-row mt-3 items-center justify-between ">
            <div className="flex flex-row justify-between gap-3">
              <div className="flex flex-row gap-1 items-center">
                <div className="bg-[#4967E2] h-9 w-9 rounded-full border flex justify-center items-center border-white z-[10]">
                  <Image
                    src={"/hero/1.png"}
                    alt=""
                    height={100}
                    width={100}
                    className="z-0 o object-cover  w-5"
                  />
                </div>
              </div>
              <div className="flex flex-row gap-1 items-center">
                <div className="bg-[#4967E2] h-9 w-9 rounded-full border flex justify-center items-center border-white z-[10]">
                  <Image
                    src={"/hero/2.png"}
                    alt=""
                    height={100}
                    width={100}
                    className="z-0 o object-cover  w-14"
                  />
                </div>
              </div>
              <div className="flex flex-row gap-3 items-center">
                <div className="bg-[#4967E2] h-9 w-9 rounded-full border flex justify-center items-center border-white z-[10]">
                  <Image
                    src={"/hero/3.png"}
                    alt=""
                    height={100}
                    width={100}
                    className="z-0 o object-cover  w-14"
                  />
                </div>
              </div>
              <div className="flex flex-row gap-3 items-center">
                <div className="bg-[#4967E2] h-9 w-9 rounded-full border flex justify-center items-center border-white z-[10]">
                  <Image
                    src={"/hero/4.png"}
                    alt=""
                    height={100}
                    width={100}
                    className="z-0 o object-cover  w-16"
                  />
                </div>
              </div>
              <a
                target="_blank"
                href="/Brochure.pdf"
                aria-label="Brochure"
                className="border-[2px] shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] border-white bg-[#4967E2] py-2 flex flex-row gap-3 px-2 rounded-full justify-center w-full items-center text-xs "
              >
                <Box size={15} />
                <span>View Our Range</span>
              </a>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}

export default Hero;

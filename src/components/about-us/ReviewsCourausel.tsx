"use client";
import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

const data = [
  {
    id: 1,
    name: "Quality Assurance",
    sub:
      "Jolly Pipes makes strong and durable pipes that never fail. Their quality ensures our work is always perfect. We are happy with their products.",
    img: "1.png",
    color: "#FAD4C0",
    svg: (
      <svg
        width="54"
        height="55"
        viewBox="0 0 54 55"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M28.8896 8.2666C28.0029 6.89649 25.9983 6.89649 25.1117 8.2666L23.1267 11.3338C22.5481 12.228 21.4218 12.5939 20.4281 12.2107L17.0194 10.8959C15.4967 10.3086 13.875 11.4869 13.963 13.1165L14.16 16.7647C14.2175 17.8282 13.5214 18.7863 12.4922 19.0603L8.96168 20.0002C7.38464 20.4201 6.76517 22.3266 7.79423 23.5933L10.098 26.4289C10.7696 27.2555 10.7696 28.4398 10.098 29.2664L7.79423 32.102C6.76517 33.3686 7.38464 35.2752 8.96168 35.695L12.4922 36.635C13.5214 36.909 14.2175 37.8671 14.16 38.9306L13.963 42.5787C13.875 44.2083 15.4967 45.3866 17.0194 44.7993L20.4281 43.4846C21.4218 43.1013 22.5481 43.4673 23.1267 44.3614L25.1117 47.4287C25.9983 48.7988 28.0029 48.7988 28.8896 47.4287L30.8745 44.3614C31.4531 43.4673 32.5795 43.1013 33.5732 43.4846L36.9819 44.7993C38.5045 45.3866 40.1263 44.2083 40.0383 42.5787L39.8412 38.9306C39.7838 37.8671 40.4799 36.909 41.5091 36.635L45.0396 35.695C46.6166 35.2752 47.2361 33.3686 46.207 32.102L43.9033 29.2664C43.2317 28.4398 43.2317 27.2555 43.9033 26.4289L46.207 23.5933C47.2361 22.3266 46.6166 20.4201 45.0396 20.0002L41.5091 19.0603C40.4799 18.7863 39.7838 17.8282 39.8412 16.7647L40.0383 13.1165C40.1263 11.4869 38.5045 10.3086 36.9819 10.8959L33.5732 12.2107C32.5795 12.5939 31.4531 12.228 30.8745 11.3338L28.8896 8.2666ZM34.9439 24.5406C35.6029 23.8816 35.6029 22.8132 34.9439 22.1541C34.2849 21.4951 33.2164 21.4951 32.5574 22.1541L24.7506 29.9609L21.4439 26.6541C20.7849 25.9951 19.7164 25.9951 19.0574 26.6541C18.3984 27.3132 18.3984 28.3816 19.0574 29.0406L22.7619 32.7451C23.8602 33.8435 25.641 33.8435 26.7394 32.7451L34.9439 24.5406Z"
          fill="#62AA49"
        />
      </svg>
    ),
  },
  {
    id: 2,
    name: "- Mahesvari Polymers, Mehsana",
    sub:
      "Jolly Pipes delivers the best pipes for all our needs. Their quality and service are excellent. We trust them for every project.",
    img: "2.png",
    color: "#A8DADC",
    svg: (
      <svg
        width="54"
        height="55"
        viewBox="0 0 54 55"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M28.8045 48.398C32.9436 43.7585 42.7441 31.6709 42.7441 21.2305C42.7441 12.4589 35.6926 5.34814 26.9941 5.34814C18.2957 5.34814 11.2441 12.4589 11.2441 21.2305C11.2441 31.6709 21.0447 43.7585 25.1838 48.398C26.1628 49.4953 27.8255 49.4953 28.8045 48.398ZM26.9902 27.8486C30.7182 27.8486 33.7402 24.8266 33.7402 21.0986C33.7402 17.3707 30.7182 14.3486 26.9902 14.3486C23.2623 14.3486 20.2402 17.3707 20.2402 21.0986C20.2402 24.8266 23.2623 27.8486 26.9902 27.8486Z"
          fill="#CD2727"
        />
      </svg>
    ),
  },
  {
    id: 3,
    name: "- M.D. Sales, Jaipur",
    sub:
      "Jolly Pipes pipes are reliable and long-lasting. They make our work smooth and hassle-free. We are very satisfied with their performance.",
    img: "3.png",
    color: "#EAEAEA",
    svg: (
      <svg
        width="54"
        height="55"
        viewBox="0 0 54 55"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M26.998 50.3479C39.4245 50.3479 49.498 40.2743 49.498 27.8479C49.498 15.4215 39.4245 5.3479 26.998 5.3479C14.5716 5.3479 4.49805 15.4215 4.49805 27.8479C4.49805 40.2743 14.5716 50.3479 26.998 50.3479ZM17.057 33.5328C16.4688 32.8099 15.4059 32.7008 14.683 33.289C13.9601 33.8772 13.8509 34.9401 14.4391 35.663C17.1028 38.9365 21.8711 40.655 26.5316 40.7782C31.221 40.9021 36.2778 39.4258 39.52 35.7068C40.1325 35.0043 40.0595 33.9384 39.357 33.3259C38.6545 32.7135 37.5885 32.7865 36.9761 33.489C34.5933 36.222 30.6501 37.5109 26.6208 37.4044C22.5625 37.2971 18.8933 35.7896 17.057 33.5328ZM22.498 22.2229C22.498 24.0869 20.987 25.5979 19.123 25.5979C17.2591 25.5979 15.748 24.0869 15.748 22.2229C15.748 20.3589 17.2591 18.8479 19.123 18.8479C20.987 18.8479 22.498 20.3589 22.498 22.2229ZM34.873 25.5979C36.737 25.5979 38.248 24.0869 38.248 22.2229C38.248 20.3589 36.737 18.8479 34.873 18.8479C33.0091 18.8479 31.498 20.3589 31.498 22.2229C31.498 24.0869 33.0091 25.5979 34.873 25.5979Z"
          fill="#ECB21B"
        />
      </svg>
    ),
  },
  {
    id: 4,
    name: "- Angel Tiles, Udaipur",
    sub:
      "Jolly Pipes provides high-quality pipes for every requirement. Their products are strong and easy to use. We always choose Jolly Pipes for our work.",
    img: "3.png",
    color: "#EAEAEA",
    svg: (
      <svg
        width="54"
        height="55"
        viewBox="0 0 54 55"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M26.998 50.3479C39.4245 50.3479 49.498 40.2743 49.498 27.8479C49.498 15.4215 39.4245 5.3479 26.998 5.3479C14.5716 5.3479 4.49805 15.4215 4.49805 27.8479C4.49805 40.2743 14.5716 50.3479 26.998 50.3479ZM17.057 33.5328C16.4688 32.8099 15.4059 32.7008 14.683 33.289C13.9601 33.8772 13.8509 34.9401 14.4391 35.663C17.1028 38.9365 21.8711 40.655 26.5316 40.7782C31.221 40.9021 36.2778 39.4258 39.52 35.7068C40.1325 35.0043 40.0595 33.9384 39.357 33.3259C38.6545 32.7135 37.5885 32.7865 36.9761 33.489C34.5933 36.222 30.6501 37.5109 26.6208 37.4044C22.5625 37.2971 18.8933 35.7896 17.057 33.5328ZM22.498 22.2229C22.498 24.0869 20.987 25.5979 19.123 25.5979C17.2591 25.5979 15.748 24.0869 15.748 22.2229C15.748 20.3589 17.2591 18.8479 19.123 18.8479C20.987 18.8479 22.498 20.3589 22.498 22.2229ZM34.873 25.5979C36.737 25.5979 38.248 24.0869 38.248 22.2229C38.248 20.3589 36.737 18.8479 34.873 18.8479C33.0091 18.8479 31.498 20.3589 31.498 22.2229C31.498 24.0869 33.0091 25.5979 34.873 25.5979Z"
          fill="#ECB21B"
        />
      </svg>
    ),
  },
  {
    id: 5,
    name: "- N.K. Polymers, Ahmedabad",
    sub:
      "Jolly Pipes offers smooth and dependable products. Their pipes make our work easier and more efficient. We are happy to use their products.",
    img: "3.png",
    color: "#EAEAEA",
    svg: (
      <svg
        width="54"
        height="55"
        viewBox="0 0 54 55"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M26.998 50.3479C39.4245 50.3479 49.498 40.2743 49.498 27.8479C49.498 15.4215 39.4245 5.3479 26.998 5.3479C14.5716 5.3479 4.49805 15.4215 4.49805 27.8479C4.49805 40.2743 14.5716 50.3479 26.998 50.3479ZM17.057 33.5328C16.4688 32.8099 15.4059 32.7008 14.683 33.289C13.9601 33.8772 13.8509 34.9401 14.4391 35.663C17.1028 38.9365 21.8711 40.655 26.5316 40.7782C31.221 40.9021 36.2778 39.4258 39.52 35.7068C40.1325 35.0043 40.0595 33.9384 39.357 33.3259C38.6545 32.7135 37.5885 32.7865 36.9761 33.489C34.5933 36.222 30.6501 37.5109 26.6208 37.4044C22.5625 37.2971 18.8933 35.7896 17.057 33.5328ZM22.498 22.2229C22.498 24.0869 20.987 25.5979 19.123 25.5979C17.2591 25.5979 15.748 24.0869 15.748 22.2229C15.748 20.3589 17.2591 18.8479 19.123 18.8479C20.987 18.8479 22.498 20.3589 22.498 22.2229ZM34.873 25.5979C36.737 25.5979 38.248 24.0869 38.248 22.2229C38.248 20.3589 36.737 18.8479 34.873 18.8479C33.0091 18.8479 31.498 20.3589 31.498 22.2229C31.498 24.0869 33.0091 25.5979 34.873 25.5979Z"
          fill="#ECB21B"
        />
      </svg>
    ),
  },
  {
    id: 6,
    name: "- Sanghvi Bafna, Pune",
    sub:
      "Jolly Pipes makes strong and long-lasting pipes that perform well. Their quality has never disappointed us. We recommend them to everyone.",
    img: "3.png",
    color: "#EAEAEA",
    svg: (
      <svg
        width="54"
        height="55"
        viewBox="0 0 54 55"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M26.998 50.3479C39.4245 50.3479 49.498 40.2743 49.498 27.8479C49.498 15.4215 39.4245 5.3479 26.998 5.3479C14.5716 5.3479 4.49805 15.4215 4.49805 27.8479C4.49805 40.2743 14.5716 50.3479 26.998 50.3479ZM17.057 33.5328C16.4688 32.8099 15.4059 32.7008 14.683 33.289C13.9601 33.8772 13.8509 34.9401 14.4391 35.663C17.1028 38.9365 21.8711 40.655 26.5316 40.7782C31.221 40.9021 36.2778 39.4258 39.52 35.7068C40.1325 35.0043 40.0595 33.9384 39.357 33.3259C38.6545 32.7135 37.5885 32.7865 36.9761 33.489C34.5933 36.222 30.6501 37.5109 26.6208 37.4044C22.5625 37.2971 18.8933 35.7896 17.057 33.5328ZM22.498 22.2229C22.498 24.0869 20.987 25.5979 19.123 25.5979C17.2591 25.5979 15.748 24.0869 15.748 22.2229C15.748 20.3589 17.2591 18.8479 19.123 18.8479C20.987 18.8479 22.498 20.3589 22.498 22.2229ZM34.873 25.5979C36.737 25.5979 38.248 24.0869 38.248 22.2229C38.248 20.3589 36.737 18.8479 34.873 18.8479C33.0091 18.8479 31.498 20.3589 31.498 22.2229C31.498 24.0869 33.0091 25.5979 34.873 25.5979Z"
          fill="#ECB21B"
        />
      </svg>
    ),
  },
  {
    id: 7,
    name: "- Govinda Enterprise, Vadodara",
    sub:
      "Jolly Pipes makes strong and durable pipes that last long. Their products always ensure smooth and easy work. We are proud to be their customers.",
    img: "3.png",
    color: "#EAEAEA",
    svg: (
      <svg
        width="54"
        height="55"
        viewBox="0 0 54 55"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M26.998 50.3479C39.4245 50.3479 49.498 40.2743 49.498 27.8479C49.498 15.4215 39.4245 5.3479 26.998 5.3479C14.5716 5.3479 4.49805 15.4215 4.49805 27.8479C4.49805 40.2743 14.5716 50.3479 26.998 50.3479ZM17.057 33.5328C16.4688 32.8099 15.4059 32.7008 14.683 33.289C13.9601 33.8772 13.8509 34.9401 14.4391 35.663C17.1028 38.9365 21.8711 40.655 26.5316 40.7782C31.221 40.9021 36.2778 39.4258 39.52 35.7068C40.1325 35.0043 40.0595 33.9384 39.357 33.3259C38.6545 32.7135 37.5885 32.7865 36.9761 33.489C34.5933 36.222 30.6501 37.5109 26.6208 37.4044C22.5625 37.2971 18.8933 35.7896 17.057 33.5328ZM22.498 22.2229C22.498 24.0869 20.987 25.5979 19.123 25.5979C17.2591 25.5979 15.748 24.0869 15.748 22.2229C15.748 20.3589 17.2591 18.8479 19.123 18.8479C20.987 18.8479 22.498 20.3589 22.498 22.2229ZM34.873 25.5979C36.737 25.5979 38.248 24.0869 38.248 22.2229C38.248 20.3589 36.737 18.8479 34.873 18.8479C33.0091 18.8479 31.498 20.3589 31.498 22.2229C31.498 24.0869 33.0091 25.5979 34.873 25.5979Z"
          fill="#ECB21B"
        />
      </svg>
    ),
  },
];

export default function ReviewsCourausel() {
  return (
    <div className="bg-white py-16">
      <MaxWidthWrapper>
        <div className="flex flex-col gap">
          <motion.h1
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 100,
            }}
            viewport={{ once: true }}
            className="text-[#010F48] text-[28px] md:text-[54px] font-medium"
          >
            What Our Clients Say
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 100,
              delay: 0.3,
            }}
            viewport={{ once: true }}
            className=" text-[#767676] text-[12px] md:text-[20px] font-normal"
          >
            Our clients trust Jolly Pipes for high-quality products and
            exceptional service, tailored to meet their needs
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 100,
              delay: 0.6,
            }}
            viewport={{ once: true }}
            className="flex gap-6   overflow-hidden space-x-16 group"
          >
            <div className="flex gap-10 py-10 animate-infinite-scroll  ">
              {[...data, ...data].map((items) => (
                <div
                  key={items.id}
                  className={cn(
                    " rounded-[20px] w-[400px] text-black odd:bg-[#E8EDFF] border border-[#8EA5FF]"
                  )}
                >
                  <div className="flex flex-col gap-4 px-5  py-3">
                    <div className="flex flex-col gap-2">
                      <span className=" text-[14px] text-[#363636] font-normal">
                        {items.sub}
                      </span>
                      <div className="flex flex-row items-center justify-between">
                        <div className="flex gap-1">
                          <Star size={20} fill="#F4CD00" color="#F4CD00" />
                          <Star size={20} fill="#F4CD00" color="#F4CD00" />
                          <Star size={20} fill="#F4CD00" color="#F4CD00" />
                          <Star size={20} fill="#F4CD00" color="#F4CD00" />
                          <Star size={20} fill="#F4CD00" color="#F4CD00" />
                        </div>
                        <div className="">
                          <h1 className="text-[16px] text-black font-medium">
                            {items.name}
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}

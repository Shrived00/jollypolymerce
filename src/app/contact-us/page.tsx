import ContactForm from "@/components/layout/ContactForm";
import Footer from "@/components/layout/Footer";
import NavBar from "@/components/NavBar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { generateMetadata } from "@/lib/metadata";
import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import { Metadata } from "next/types";
export const metadata: Metadata = generateMetadata({
  title: "Jolly Pipes Limited | Contact-us ",
  description:
    "Specializing in CPVC, UPVC, SWR, and agricultural piping systems for reliable performance and durability.",
  openGraph: {
    type: "website", // or any other valid OpenGraph type
    // ... other OpenGraph properties
  },
  canonical:
    "Jolly Pipes Limited: Specializing in CPVC, UPVC, SWR, and agricultural piping systems for reliable performance and durability.",
  // ... other metadata properties
});
export default function page() {
  return (
    <>
      <NavBar />
      <div className="bg-white grid grid-cols-5 bg-b  ">
        <div className="bg-b flex flex-col col-span-5 md:col-span-2 text-white px-10 md:px-20 justify-start gap-14 py-10   md:rounded-ee-xl ">
          <div className="flex flex-col">
            <h1 className="text-[28px]">Contact Information</h1>
            <h1>Say something to start a live chat!</h1>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex flex-row gap-[16px] items-center">
              <Mail size={24} />
              <span className="font-light">info@jollypipes.in</span>
            </div>
            <div className="flex flex-row gap-[16px] items-center">
              <Phone size={24} />
              <span className="font-light">+91 97259 86060</span>
            </div>
          </div>
          <div className="col-span-5 md:col-span-3 flex  ">
            <div className="rounded-3xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d823.3946411387732!2d70.44912434304715!3d21.71686867652872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39581f574ea41af3%3A0x77c22a21fe06efd3!2sRAJLAXMI%20PETROLIUM!5e0!3m2!1sen!2sin!4v1726769617414!5m2!1sen!2sin"
                width="410"
                height="230"
                loading="lazy"
              ></iframe>
            </div>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-3 md:gap-6">
            <a
              href="https://www.facebook.com/share/1CyUS7c5aG/?mibextid=wwXIfr"
              target="_blank"
              className="bg-white h-10 w-10   md:h-10 md:w-10 rounded-full flex items-center justify-center"
            >
              <Facebook color="#010F48" fill="#010F48" />
            </a>
            <a
              href="https://www.instagram.com/jolly_pipes?igsh=MTRpcjYxaWFjdXZsMw%3D%3D&utm_source=qr"
              target="_blank"
              className="bg-white h-10 w-10   md:h-10 md:w-10 rounded-full flex items-center justify-center"
            >
              <Instagram color="white" fill="#010F48" />
            </a>

            <a
              href="mailto:info@jollypipes.in"
              target="_blank"
              className="bg-white h-10 w-10   md:h-10 md:w-10 rounded-full flex items-center justify-center"
            >
              <Mail color="white" fill="#010F48" />
            </a>
          </div>
        </div>
        <ContactForm />
      </div>
      <Footer />
    </>
  );
}

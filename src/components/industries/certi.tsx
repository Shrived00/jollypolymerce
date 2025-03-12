import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";

interface CertificationCardProps {
  logo: string;
  title: string;
  description: string;
}

const CertificationCard: React.FC<CertificationCardProps> = ({
  logo,
  title,
  description,
}) => (
  <div className="border rounded-lg p-6 flex flex-col items-center text-center md:px-32">
    <img src={logo} alt={`${title} logo`} className="w-20 h-20 mb-4" />
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-sm">{description}</p>
  </div>
);

const Certifications = () => {
  return (
    <div className="bg-white text-black pb-10">
      <MaxWidthWrapper>
        <div className="container mx-auto px-4 py-8">
          <h1 className=" text-[28px] md:text-[50px] font-medium mb-6">
            Certifications
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <CertificationCard
              logo="/isoo.png"
              title="ISO 9001"
              description="Our Products Meet International Standards For Quality Management, Ensuring Consistency And Reliability."
            />
            <CertificationCard
              logo="/isi.png"
              title="BIS IS 4985"
              description="Certified By The Bureau Of Indian Standards For Safe And Effective Use In Agriculture And Construction."
            />
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Certifications;

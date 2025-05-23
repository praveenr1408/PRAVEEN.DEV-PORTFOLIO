import React from "react";
import EducationCard from "../../../../components/home/EducationSection/EducationCard";
import { QUALIFICATIONS } from "../../../../utils/home/educationSection/constant";

export default function EducationSection() {
  return (
    // Main Section
    <section
      id="education"
      className="w-full px-6 md:px-10 lg:px-26 py-10 md:py-14"
    >
      {/* Conatiner Section */}
      <section className="container mx-auto h-full flex items-center">
        {/* Wrap Heading and Card Section */}
        <div className="w-full flex flex-col gap-y-10">
          {/* Heading Section */}
          <div className="w-full flex justify-center ">
            <h1 className="text-3xl md:text-4xl font-bold">Education</h1>
          </div>

          {/* Card Section */}
          <div className="w-full flex flex-col justify-center gap-6">
            {QUALIFICATIONS.map((qualification, index) => (
              <EducationCard key={index} qualification={qualification} />
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}

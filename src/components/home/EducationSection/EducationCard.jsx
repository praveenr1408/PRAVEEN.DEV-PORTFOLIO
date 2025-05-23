import React from "react";
import { GraduationCap, Cog, School, University } from "lucide-react";

// Component to render a single education qualification card
export default function EducationCard({ qualification }) {
  return (
    <div className="w-full flex">
      {/* Left side: Icon and vertical timeline line */}
      <div className="flex flex-col justify-center items-center pr-4">
        {/* Icon wrapper */}
        <div className="p-2 border-2 border-main bg-white rounded-full">
          {/* Conditional rendering of icons based on the year */}
          {qualification.year === "2022-2025" && <GraduationCap />}
          {qualification.year === "2020-2022" && <Cog />}
          {qualification.year === "2019-2020" && <School />}
          {qualification.year === "2017-2018" && <University />}
        </div>

        {/* Vertical line connecting timeline steps */}
        <div className="w-[2px] h-full bg-gray-400"></div>
      </div>

      {/* Right side: Qualification details */}
      <div className="w-full flex flex-col gap-2 p-6 rounded-lg bg-white border-1 border-gray-300 ">
        {/* Course name and duration */}
        <h1 className="md:text-[1.3rem] font-bold text-main">
          {qualification.course + "  " + qualification.year}
        </h1>

        {/* Institute name */}
        <p className="text-gray-500">{qualification.institute}</p>

        {/* Marks or grade */}
        <p className="text-gray-500">{qualification.mark}</p>
      </div>
    </div>
  );
}

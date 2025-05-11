import React from "react";
import {
  frontendSkills,
  tools,
} from "../../../../utils/home/skillSection/constants"; // Importing skill data
import RadialProgress from "../../../../components/home/SkillSection/RadialProgress/RadialProgress"; // Importing RadialProgress component

export default function SkillSection() {
  return (
    // Main section for the Skills & Expertise
    <section className="w-full px-6 md:px-10 lg:px-26 py-10 md:py-14 bg-white">
      {/* Container for the skill section */}
      <section className="container mx-auto h-full flex items-center">
        {/* Wrapper for heading and skill details */}
        <div className="w-full flex flex-col gap-y-10">
          {/* Section heading */}
          <div className="w-full flex justify-center">
            <h1 className="text-3xl md:text-4xl font-bold">
              Skills & Expertise
            </h1>
          </div>

          {/* Skill details */}
          <div className="w-full flex flex-col items-center gap-y-6 ">
            {/* Frontend Skills Section */}
            <h1 className="text-2xl font-semibold">Frontend Skills</h1>
            <p className="text-gray-500 text-center">
              These are the technologies I use to build web applications.
            </p>

            {/* Displaying frontend skills using RadialProgress component */}
            <div className="w-full flex flex-row justify-center items-center flex-wrap gap-6 md:gap-15">
              {frontendSkills.map((frontendSkill, index) => (
                <RadialProgress key={index} data={frontendSkill} />
              ))}
            </div>

            {/* Tools Section */}
            <h1 className="text-2xl font-semibold">Tools</h1>
            <p className="text-gray-500 text-center">
              Here are the tools I use to streamline my development workflow.
            </p>

            {/* Displaying tools using RadialProgress component */}
            <div className="w-full flex flex-row justify-center items-center flex-wrap gap-6 md:gap-15">
              {tools.map((tool, index) => (
                <RadialProgress key={index} data={tool} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

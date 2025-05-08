import React from "react";
import Praveen from "../../../../assets/images/Praveen.png";
import HTMLIcon from "../../../../assets/icons/html.png";
import CSSIcon from "../../../../assets/icons/css.png";
import JSIcon from "../../../../assets/icons/js.png";
import ReactIcon from "../../../../assets/icons/react.png";
import Typewriter from "typewriter-effect";
import { BriefcaseBusiness, Linkedin, Github, Mail } from "lucide-react";
import { MdWavingHand } from "react-icons/md";
import { motion } from "framer-motion";
import BorderButton from "../../../../components/common/Button/BorderButton";

export default function HeroSection() {
  return (
    // Hero main section
    <section className="w-full md:h-screen px-6 md:px-10 lg:px-26 py-10 md:py-0 bg-black relative -z-2">
      {/* Hero container section */}
      <section className="container mx-auto h-full flex items-center z-1">
        {/* Wrap Content and Image section */}
        <div className="w-full flex flex-col-reverse md:flex-row gap-y-16 md:gap-y-0">
          {/* Content section */}
          <div className="w-full md:w-1/2 space-y-6 md:space-y-6 flex flex-col items-center md:items-start">
            <h2 className="text-2xl md:text-3xl font-semibold text-white flex items-center gap-x-4">
              Hi!
              {/* Hand Animation */}
              <motion.span
                animate={{
                  rotate: [0, -25, 25, -10, 10, -5, 5, 0], // Shake sequence
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  repeatDelay: 2, // Pause between shakes
                  ease: "easeInOut",
                }}
                className="text-main -rotate-20"
              >
                <MdWavingHand size={38} />
              </motion.span>
              I'm
            </h2>

            {/* Typewritter effect*/}
            <h1 className="text-3xl md:text-4xl font-bold text-white text-center md:text-start">
              <Typewriter
                options={{
                  strings: [
                    "Praveen",
                    "a UI Developer",
                    "a Frontend Developer",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>

            {/* Description */}
            <p className="text-justify text-gray-400 leading-8">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum,
              tempora architecto assumenda fuga, corporis delectus perspiciatis
              accusamus a tenetur vitae ullam nobis, veritatis magni nemo. Ea
              amet optio consectetur perferendis! perferendis!
            </p>
            {/* Wrap Button and Social media */}
            <div className="flex flex-col md:flex-row items-center md:gap-x-4 gap-y-6">
              {/* Button component */}
              <BorderButton icon={<BriefcaseBusiness />} label="Hire Me!" />
              <div className="text-white flex items-center gap-x-4">
                <Linkedin className="hover:text-main" />
                <Github className="hover:text-main" />
                <Mail className="hover:text-main" />
              </div>
            </div>
          </div>

          {/* Images section */}
          <div className="w-full md:w-1/2 flex justify-center pt-20 md:pt-0 md:justify-end">
            {/* Wrap Images and icons */}
            <div className="relative w-[220px] h-[220px] md:w-[340px] md:h-[340px] flex justify-center items-center">
              {/* HTML icon */}
              <img
                className="absolute left-0 top-15 w-6 md:w-10 -rotate-40"
                src={HTMLIcon}
                alt="html-icon"
              />

              {/* CSS icon */}
              <img
                className="absolute right-0 top-0 w-10 md:w-20 rotate-40 "
                src={CSSIcon}
                alt="css-icon"
              />

              {/* Javascript icon */}
              <img
                className="absolute left-0 bottom-0 w-6 md:w-10 -rotate-20 "
                src={JSIcon}
                alt="javascript-icon"
              />

              {/* React icon */}
              <img
                className="absolute right-0 -bottom-10  w-14 md:w-16 rotate-10"
                src={ReactIcon}
                alt="react-icon"
              />

              {/* My Image */}
              <img
                src={Praveen}
                className="hover:scale-106 transition-transform duration-500 drop-shadow-[0_15px_50px_rgba(57,181,74,0.40)]"
                alt="praveen-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Wave divider */}
      <div className="absolute -bottom-1 left-0 w-full rotate-180 overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100">
          <g fill="#FFFFFF">
            <path d="M0 0v74.7C62 44 122.4 28.7 205 46c83.8 17.6 160.5 25.4 240-7 54-22 110-21 173-5 76.5 19.4 146.5 23.3 222 0 55-17 110.3-31.9 160-22.2V0H0Z"></path>
          </g>
        </svg>

        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100">
          <path d="M0 0v36L250 4l750 96V0H0z" fill="#FFFFFF"></path>
        </svg> */}

        {/* <svg viewBox="0 186.5 1920 113.5" x="0px" y="0px">
          <polygon
            fill="#FFFFFF"
            points="-30,300 355.167,210.5 1432.5,290 1920,198.5 1920,300"
          ></polygon>
        </svg> */}
      </div>

      {/* Wrap grid lines and radial gradient */}
      <div>
        <div className="absolute opacity-50 -z-1 inset-0 [background-size:50px_50px] [background-image:linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] "></div>
        <div className="pointer-events-none -z-1 absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)] md:bg-black"></div>
      </div>
    </section>
  );
}

import React from "react";
import Praveen from "../../../assets/images/Praveen.png";
import HTMLIcon from "../../../assets/icons/html.png";
import CSSIcon from "../../../assets/icons/css.png";
import JSIcon from "../../../assets/icons/js.png";
import ReactIcon from "../../../assets/icons/react.png";
import Typewriter from "typewriter-effect";
import { BriefcaseBusiness, Linkedin, Github, Mail } from "lucide-react";
import { MdWavingHand } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import BorderButton from "../../../components/common/Button/BorderButton";
import { label } from "framer-motion/client";

export default function HeroSection() {
  return (
    // Hero main section
    <section className="w-full md:h-screen px-6 md:px-10 lg:px-26 py-10 md:py-0 bg-black">
      {/* Hero container section */}
      <section className="container mx-auto h-full flex items-center">
        {/* Content and Image section */}
        <div className="w-full flex flex-col-reverse md:flex-row gap-y-16 md:gap-y-0">
          {/* Content section */}
          <div className="w-full md:w-1/2 space-y-4 md:space-y-6 flex flex-col items-center md:items-start">
            <h2 className="text-2xl md:text-3xl font-semibold text-white flex items-center gap-x-4">
              Hi!
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
            <p className="text-justify text-gray-400 leading-8">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum,
              tempora architecto assumenda fuga, corporis delectus perspiciatis
              accusamus a tenetur vitae ullam nobis, veritatis magni nemo. Ea
              amet optio consectetur perferendis! perferendis!
            </p>
            {/* Button and Social media */}
            <div className="flex flex-col md:flex-row items-center md:gap-x-4 gap-y-6">
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
            <div className="relative w-[220px] h-[220px] md:w-[360px] md:h-[360px] flex justify-center items-center">
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
    </section>
  );
}

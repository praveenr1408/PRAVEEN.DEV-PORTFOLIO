import React from "react";
import Praveen from "../../../../assets/images/Praveen.png";
import { Download } from "lucide-react";

export default function AboutSection() {
  return (
    // Anout Main section
    <section
      id="about"
      className="w-full px-6 md:px-10 lg:px-26 py-10 md:py-14 bg-white"
    >
      {/* About container section */}
      <section className="container mx-auto h-full flex items-center">
        {/* Wrap Heading division and Image, content division */}
        <div className="w-full flex flex-col gap-y-10">
          {/* About Heading division */}
          <div className="w-full flex justify-center">
            <h1 className="text-3xl md:text-4xl font-bold">About Me</h1>
          </div>

          {/* Wrap Image and content division */}
          <div className="w-full flex flex-col md:flex-row gap-y-10">
            {/* Image division */}
            <div className="w-full md:w-1/2 flex justify-center items-center">
              <img
                className="w-[220px] h-[220px] md:w-[340px] md:h-[340px]"
                src={Praveen}
                alt="Praveen"
              />
            </div>

            {/* Wrap Content and button division */}
            <div className="w-full md:w-1/2 md:px-10 flex flex-col justify-center items-center gap-y-6">
              <div className="w-full">
                <p className="text-justify text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                  iusto molestiae ab ducimus commodi, nobis illum obcaecati
                  minus ullam hic rem cum soluta dignissimos fugit asperiores
                  odit animi facilis nemo!Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Rerum iusto molestiae ab ducimus commodi,
                  nobis illum obcaecati minus ullam hic rem cum soluta
                  dignissimos fugit asperiores odit animi facilis nemo!Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Rerum iusto
                  molestiae ab ducimus commodi, nobis illum obcaecati minus
                  ullam hic rem cum soluta dignissimos fugit asperiores odit
                  animi facilis nemo!
                </p>
              </div>

              {/* Button division */}
              <div className="w-full flex justify-center">
                <button className="w-full flex justify-center items-center gap-x-2 bg-main py-4 rounded-sm hover:bg-black hover:text-white transition-all duration-200 hover:-skew-2">
                  Dowload Resume
                  <span>
                    <Download />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

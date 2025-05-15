import React from "react";
import Praveen from "../../../../assets/images/Praveen.png";

export default function ContactSection() {
  return (
    // Contact Main Section
    <section
      id="contact"
      className="w-full px-6 md:px-10 lg:px-26 py-10 md:py-14 bg-red-400"
    >
      {/* Contact Container Section */}
      <section className="container mx-auto h-full flex items-center bg-blue-600">
        {/* Wrap Heading and Contact information,Form Section */}
        <div className="w-full flex flex-col gap-y-10">
          {/* Contact Heading Division */}
          <div className="w-full flex justify-center">
            <h1 className="text-3xl md:text-4xl font-bold">Contact</h1>
          </div>
          {/* Wrap with Contact Information and Form */}
          <div className="w-full flex flex-col md:flex-row gap-y-10">
            {/* Contact Information division */}
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center">
              <h1>Contact Infonmetion</h1>
            </div>

            {/* Form Division */}
            <div className="w-full md:w-1/2 md:px-10 flex flex-col justify-center items-center gap-y-6 bg-yellow-500">
              <h1>Hello</h1>
              <input type="text" />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

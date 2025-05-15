import React from "react";
import ContactMe from "../../../../assets/images/contact-me.png";
import { Mail, Phone, MapPinHouse } from "lucide-react";

export default function ContactSection() {
  return (
    // Contact Main Section
    <section
      id="contact"
      className="w-full px-6 md:px-10 lg:px-26 py-10 md:py-14 "
    >
      {/* Contact Container Section */}
      <section className="container mx-auto h-full flex items-center ">
        {/* Wrap Heading and Image,Form Section */}
        <div className="w-full flex flex-col gap-y-10">
          {/* Contact Heading Division */}
          <div className="w-full flex justify-center">
            <h1 className="text-3xl md:text-4xl font-bold">Contact</h1>
          </div>
          {/* Wrap with Image and Form */}
          <div className="w-full flex flex-col md:flex-row gap-y-10">
            {/* Image division */}
            <div className="w-full md:w-1/2 flex flex-col items-center gap-y-6">
              <div className="w-[220px] h-[220px] md:w-[340px] md:h-[340px]">
                <img src={ContactMe} alt="" />
              </div>
            </div>

            {/* Form Division */}
            <div className="w-full md:w-1/2 flex justify-center">
              <form className="flex flex-col w-full md:w-3/4 gap-y-4 p-0 md:p-6 rounded-md border-0 md:border md:border-gray-300">
                <fieldset className="flex flex-col">
                  <label
                    htmlFor="name"
                    className="text-gray-600 font-semibold mb-1"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="w-full border border-gray-300 rounded-sm p-3 focus:outline-1 focus:outline-main"
                  />
                </fieldset>

                <fieldset className="flex flex-col">
                  <label
                    htmlFor="email"
                    className="text-gray-600 font-semibold mb-1"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full border border-gray-300 rounded-sm p-3 focus:outline-1 focus:outline-main"
                  />
                </fieldset>

                <fieldset className="flex flex-col">
                  <label
                    htmlFor="subject"
                    className="text-gray-600 font-semibold mb-1"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    className="w-full border border-gray-300 rounded-sm p-3 focus:outline-1 focus:outline-main"
                  />
                </fieldset>

                <fieldset className="flex flex-col">
                  <label
                    htmlFor="message"
                    className="text-gray-600 font-semibold mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    className="w-full border border-gray-300 rounded-sm p-3 focus:outline-1 focus:outline-main"
                  />
                </fieldset>

                <button
                  type="submit"
                  className="mt-4 bg-main text-white py-3 px-6 rounded-md hover:bg-black transition"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

import React from "react";
import {
  Menu,
  Webhook,
  X,
  User,
  Code,
  FolderOpenDot,
  GraduationCap,
  Phone,
  Mail,
  Linkedin,
  GithubIcon,
} from "lucide-react";
import { Link } from "react-scroll";

// Footer navigation menu items with icons and scroll links
const menuItems = [
  { item: "About", icon: <User />, link: "about" },
  { item: "Skills", icon: <Code />, link: "skills" },
  { item: "Projects", icon: <FolderOpenDot />, link: "#" }, // Placeholder link
  { item: "Education", icon: <GraduationCap />, link: "#" }, // Placeholder link
  { item: "Contact", icon: <Phone />, link: "contact" },
];

export default function Footer() {
  return (
    // Footer Main Section
    <footer className="w-full relative px-6 md:px-10 lg:px-26 py-15 md:py-40 bg-black text-white">
      {/* Footer Container Section */}
      <section className="container mx-auto h-full flex items-center justify-center">
        {/* Wrapper for Footer Nav and Social Media Icons */}
        <div className="flex flex-col gap-y-8 items-center">
          {/* Logo/Brand Name */}
          <div>
            <Link
              to="hero" // Scroll to Hero Section
              smooth={true}
              duration={500}
              className="font-bold tracking-wide cursor-pointer text-2xl text-main"
            >
              PRAVEEN.DEV
            </Link>
          </div>

          {/* Footer Navigation Menu */}
          <nav>
            <ul className="flex flex-col md:flex-row items-center gap-y-6 md:gap-y-0 gap-x-10">
              {menuItems.map((menuItem, index) => (
                <li
                  key={index}
                  className="hover:text-main transition-colors duration-500 cursor-pointer font-semibold"
                >
                  <Link
                    to={menuItem.link} // Scroll to destination section
                    smooth={true}
                    duration={500}
                    offset={-55} // Offset for scroll position
                  >
                    {menuItem.item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Media and Contact Icons */}
          <div className="flex gap-x-8">
            <a
              className="hover:text-main transition-colors duration-300"
              href="#"
            >
              <Phone />
            </a>
            <a
              className="hover:text-main transition-colors duration-300"
              href="#"
            >
              <Mail />
            </a>
            <a
              className="hover:text-main transition-colors duration-300"
              href="#"
            >
              <Linkedin />
            </a>
            <a
              className="hover:text-main transition-colors duration-300"
              href="#"
            >
              <GithubIcon />
            </a>
          </div>

          {/* Copyright Text */}
          <div>
            <p className="text-main">© Copyrights All rights reserved</p>
          </div>
        </div>
      </section>
      {/* Decorative SVG Wave at the Top of Footer */}
      <div className="absolute w-full top-0 left-0 ">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100">
          <g fill="#FFFFFF">
            <path d="M0 0v74.7C62 44 122.4 28.7 205 46c83.8 17.6 160.5 25.4 240-7 54-22 110-21 173-5 76.5 19.4 146.5 23.3 222 0 55-17 110.3-31.9 160-22.2V0H0Z"></path>
          </g>
        </svg>
      </div>
    </footer>
  );
}

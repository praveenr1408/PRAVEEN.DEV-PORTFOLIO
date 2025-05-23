import {
  Menu,
  Webhook,
  X,
  User,
  Code,
  FolderOpenDot,
  GraduationCap,
  Phone,
} from "lucide-react";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";

const menuItems = [
  { item: "About", icon: <User />, link: "about" },
  { item: "Skills", icon: <Code />, link: "skills" },
  { item: "Projects", icon: <FolderOpenDot />, link: "#" },
  { item: "Education", icon: <GraduationCap />, link: "education" },
  { item: "Contact", icon: <Phone />, link: "contact" },
];

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  console.log(toggle);

  return (
    // Navbar main section
    <nav className=" w-full fixed top-0 z-5 px-6 md:px-10 lg:px-26 py-4 md:py-6 bg-black/80 backdrop-blur-md text-white">
      {/* Navbar contianer section */}
      <section className="container mx-auto">
        {/* wrap logo, name, menu and icon */}
        <div className="flex justify-between items-center">
          {/* Logo and Name section */}
          <div className="flex space-x-4 items-center">
            <Link
              to="hero" // Scroll to Hero Section
              smooth={true}
              duration={500}
            >
              <Webhook className="animate-spin" size={36} />
            </Link>

            <Link
              to="hero" // Scroll to Hero Section
              smooth={true}
              duration={500}
              className="hidden md:block font-bold tracking-wide cursor-pointer"
            >
              PRAVEEN.DEV
            </Link>
          </div>

          {/* Menu section for large screen*/}
          <div className="flex items-center">
            <ul className="hidden lg:flex space-x-10">
              {menuItems.map((menuItem, index) => (
                <li
                  className="hover:text-main transition-colors duration-500 cursor-pointer font-semibold"
                  key={index}
                  onClick={() => setToggle(false)}
                >
                  <Link
                    to={menuItem.link} // Scroll to destination section
                    smooth={true}
                    duration={500}
                    offset={-55} // Offset
                    spy={true}
                    activeClass="text-main transition-colors duration-500" // Apply this class when active
                  >
                    {menuItem.item}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Menu Icon with animation form mobile screen */}
            <div
              onClick={() => setToggle(!toggle)}
              className="lg:hidden block cursor-pointer"
            >
              <AnimatePresence mode="wait">
                {toggle ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="hover:text-main"
                  >
                    <X size={32} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="hover:text-main"
                  >
                    <Menu size={32} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Mobile menu item with animation */}
        <AnimatePresence mode="wait">
          {toggle && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="py-10 z-5 lg:hidden h-screen"
              onClick={() => setToggle(false)}
            >
              <ul className="space-y-8">
                {menuItems.map((menuItem, index) => (
                  <li className="hover:text-main" key={index}>
                    <Link
                      to={menuItem.link} // Scroll to destination section
                      smooth={true}
                      duration={500}
                      offset={-55} // Offset
                      className="flex items-center gap-x-4"
                      onClick={() => setToggle(!toggle)}
                    >
                      <span>{menuItem.icon}</span>
                      {menuItem.item}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </nav>
  );
}

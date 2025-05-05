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

const menuItems = [
  { item: "About", icon: <User />, link: "#" },
  { item: "Skills", icon: <Code />, link: "#" },
  { item: "Projects", icon: <FolderOpenDot />, link: "#" },
  { item: "Educaion", icon: <GraduationCap />, link: "#" },
  { item: "Contact", icon: <Phone />, link: "#" },
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
            <Webhook className="animate-spin" size={36} />
            <h1 className="hidden md:block font-bold tracking-wide">
              PRAVEEN.DEV
            </h1>
          </div>

          {/* Menu section for large screen*/}
          <div className="flex items-center">
            <ul className="hidden lg:flex space-x-10">
              {menuItems.map((menuItem, index) => (
                <li
                  className="hover:text-main transition-colors duration-500"
                  key={index}
                  onClick={() => setToggle(false)}
                >
                  <a href={menuItem.link}>{menuItem.item}</a>
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
                  <li
                    className="hover:text-main"
                    key={index}
                    onClick={() => setToggle(false)}
                  >
                    <a
                      className="flex items-center gap-x-4"
                      href={menuItem.link}
                    >
                      <span>{menuItem.icon}</span>
                      {menuItem.item}
                    </a>
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

import React from "react";
import { motion } from "framer-motion";

export default function RadialProgress({ data }) {
  // Destructuring data object to extract properties
  const { icon, color, label, progress } = data;

  // Circle properties for radial progress
  const radius = 40; // Radius of the circle
  const circumference = 2 * Math.PI * radius; // Circumference of the circle
  const offset = circumference - (progress / 100) * circumference; // Offset for progress

  // Variants for scroll-triggered animation
  const containerVariants = {
    offscreen: { opacity: 0 }, // Initial state (hidden)
    onscreen: {
      opacity: 1, // Final state (visible)
      transition: {
        type: "spring", // Smooth spring animation
        duration: 1, // Duration of the animation
      },
    },
  };

  // Variants for animating the progress circle
  const circleVariants = {
    offscreen: { strokeDashoffset: circumference }, // Initial state (no progress)
    onscreen: {
      strokeDashoffset: offset, // Final state (progress based on value)
      transition: { duration: 1.5, ease: "easeOut" }, // Smooth animation
    },
  };

  return (
    <motion.div
      className="flex flex-col justify-center items-center"
      variants={containerVariants} // Animation variants for the container
      initial="offscreen" // Initial animation state
      whileInView="onscreen" // Trigger animation when in view
      viewport={{ once: true, amount: 0.5 }} // Trigger when 50% of the element is in view
      whileHover={{ scale: 1.05 }} // Slight scale effect on hover
    >
      {/* Wrapper for the radial progress circle */}
      <div className="relative w-32 h-32">
        <svg className="transform -rotate-90" viewBox="0 0 100 100">
          {/* Background circle */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            stroke={color} // Circle color
            strokeWidth="3" // Circle stroke width
            fill="none" // No fill color
            opacity="0.2" // Reduced opacity for background
          />
          {/* Animated progress circle */}
          <motion.circle
            cx="50"
            cy="50"
            r={radius}
            stroke={color} // Circle color
            strokeWidth="3" // Circle stroke width
            fill="none" // No fill color
            strokeDasharray={circumference} // Total length of the circle
            strokeLinecap="round" // Rounded ends for the stroke
            variants={circleVariants} // Animation variants for the circle
          />
        </svg>
        {/* Icon and label inside the circle */}
        <div className="absolute inset-0 flex flex-col items-center justify-center font-semibold">
          <img className="w-10" src={icon} alt={label} />{" "}
          {/* Skill/tool icon */}
        </div>
      </div>
      {/* Label for the skill/tool */}
      <div>
        <h1 className="font-semibold text-gray-500">{label}</h1>
      </div>
    </motion.div>
  );
}

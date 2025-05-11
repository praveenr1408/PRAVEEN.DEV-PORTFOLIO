import React from "react";

export default function RadialProgress({ data }) {
  const { icon, color, label, progress } = data;

  const radius = 40; // Radius of the progress
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;
  return (
    // Wrap Radial Progess and Label
    <div className="flex flex-col justify-center items-center hover:scale-105 transition-transform duration-200">
      {/* Wrap Radial Progress and Icons */}
      <div className="relative w-32 h-32">
        {/* Radial Progress */}
        <svg className="transform -rotate-90" viewBox="0 0 100 100">
          {/* Background circle */}
          <circle
            className="drop-shadow-2xlinset-shadow-indigo-500"
            cx="50"
            cy="50"
            r={radius}
            stroke={color}
            strokeWidth="3"
            fill="none"
            opacity="0.2"
          />
          {/* Progress circle */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            stroke={color}
            strokeWidth="3"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
          />
        </svg>

        {/* Icon */}
        <div className="absolute inset-0 flex flex-col items-center justify-center font-semibold">
          <img className="w-10" src={icon} />
        </div>
      </div>

      {/* Label */}
      <div>
        <h1 className="font-semibold">{label}</h1>
      </div>
    </div>
  );
}

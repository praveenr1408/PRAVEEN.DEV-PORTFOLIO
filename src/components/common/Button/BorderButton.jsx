import React from "react";
import { BriefcaseBusiness, Frown } from "lucide-react";

export default function BorderButton({
  icon = <Frown />, // Default icon
  label = "PassProp", // Default text
}) {
  return (
    <button className="flex items-center gap-x-3 px-6 py-4 text-white border-2 border-main rounded-full hover:bg-main cursor-pointer transition-colors duration-300 hover:text-black">
      <span>{icon}</span>
      {label}
    </button>
  );
}

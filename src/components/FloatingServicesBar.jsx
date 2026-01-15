import React from "react";
import { SPA_SERVICES } from "@/constants/services";

export default function FloatingServicesBar() {
  // Get all service categories
  const allCategories = Object.keys(SPA_SERVICES);

  // Define which categories to show in the floating bar (exclude Sauna, Packages)
  const floatingBarCategories = allCategories.filter(
    (category) => !["Sauna", "Packages"].includes(category)
  );

  return (
    <div className="absolute bottom-0 translate-y-1/2 w-[90%] max-w-5xl left-1/2 -translate-x-1/2 z-20">
      <div className="bg-[#D4AF37] py-4 px-4 sm:py-5 sm:px-8 shadow-2xl border border-[#D4AF37]/30">
        <ul className="flex justify-between items-center text-[9px] sm:text-[10px] md:text-[11px] uppercase tracking-[0.15em] sm:tracking-[0.2em] font-bold text-white">
          {/* First 2 services - always visible */}
          {floatingBarCategories.slice(0, 2).map((category) => (
            <li
              key={category}
              className="hover:text-[#333] cursor-pointer transition-colors whitespace-nowrap"
            >
              {category}
            </li>
          ))}

          {/* Middle services - hidden on mobile, visible on sm and above */}
          {floatingBarCategories.slice(2, -1).map((category) => (
            <li
              key={category}
              className="hidden sm:block hover:text-[#333] cursor-pointer transition-colors whitespace-nowrap"
            >
              {category}
            </li>
          ))}

          {/* Last service - always visible with border on larger screens */}
          {floatingBarCategories.length > 0 && (
            <li
              key={floatingBarCategories[floatingBarCategories.length - 1]}
              className="hover:text-[#333] cursor-pointer transition-colors whitespace-nowrap sm:border-l sm:border-white/20 sm:pl-4"
            >
              {floatingBarCategories[floatingBarCategories.length - 1]}
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

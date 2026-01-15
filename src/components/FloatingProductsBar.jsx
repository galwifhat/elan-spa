import { ELAN_PRODUCTS } from "@/constants/products";
import React from "react";

export default function FloatingProductsBar() {
  // Extract product names from the array of objects
  const productCategories = ELAN_PRODUCTS.map((product) => product.category);

  return (
    <div className="absolute bottom-0 translate-y-1/2 w-[90%] max-w-5xl left-1/2 -translate-x-1/2 z-20">
      <div className="bg-[#D4AF37] py-4 px-4 sm:py-5 sm:px-8 shadow-2xl border border-[#D4AF37]/30">
        <ul className="flex justify-between items-center text-[9px] sm:text-[10px] md:text-[11px] uppercase tracking-[0.15em] sm:tracking-[0.2em] font-bold text-white">
          {/* First 2 products - always visible */}
          {productCategories.slice(0, 2).map((product) => (
            <li
              key={product}
              className="hover:text-[#333] cursor-pointer transition-colors whitespace-nowrap"
            >
              {product}
            </li>
          ))}

          {/* Middle products - hidden on mobile, visible on sm and above */}
          {productCategories.slice(2, -1).map((product) => (
            <li
              key={product}
              className="hidden sm:block hover:text-[#333] cursor-pointer transition-colors whitespace-nowrap"
            >
              {product}
            </li>
          ))}

          {/* Last product - always visible with border on larger screens */}
          {productCategories.length > 0 && (
            <li
              key={productCategories[productCategories.length - 1]}
              className="hover:text-[#333] cursor-pointer transition-colors whitespace-nowrap sm:border-l sm:border-white/20 sm:pl-4"
            >
              {productCategories[productCategories.length - 1]}
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

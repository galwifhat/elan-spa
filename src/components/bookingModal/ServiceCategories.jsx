// ServiceCategories.jsx
import React from "react";

export default function ServiceCategories({
  categories,
  activeCategory,
  onSelectCategory,
}) {
  return (
    <div className="flex flex-col gap-3 w-1/3">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelectCategory(cat)}
          className={`text-left px-4 py-2 rounded-lg font-serif text-xs uppercase tracking-widest transition-all
          ${
            activeCategory === cat
              ? "bg-[#9E8B7A] text-white shadow-md"
              : "bg-[#F8F1E4] border border-[#9E8B7A] hover:bg-[#D4AF37] hover:text-white hover:shadow-sm"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

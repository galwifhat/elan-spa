import React, { useState } from "react";
import { ELAN_PRODUCTS } from "@/constants/products";
import { ShoppingBag, Star, ArrowRight } from "lucide-react";
import AppointmentButton from "../components/buttons/AppointmentButton";

export default function Shop() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", ...new Set(ELAN_PRODUCTS.map((p) => p.category))];
  const filteredProducts =
    filter === "All"
      ? ELAN_PRODUCTS
      : ELAN_PRODUCTS.filter((p) => p.category === filter);

  return (
    <div className="w-full bg-[#FAF9F6]">
      {/* 1. Header Section (Already handled by your Conditional Header) */}

      <div className="container mx-auto px-6 py-16">
        {/* 2. Category Filter Bar */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold transition-all border
                ${
                  filter === cat
                    ? "bg-[#D4AF37] border-[#D4AF37] text-white shadow-lg"
                    : "bg-white border-gray-100 text-gray-400 hover:border-[#E3C5A8]"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 3. Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-3xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500"
            >
              {/* Image Area */}
              <div className="relative h-80 bg-[#F5EFDF] overflow-hidden">
                <img
                  src={`https://via.placeholder.com/600x800?text=${product.name}`}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                  <Star size={12} className="fill-[#D4AF37] text-[#D4AF37]" />
                  <span className="text-[10px] font-bold tracking-tighter">
                    4.9
                  </span>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-8 space-y-4">
                <div className="space-y-1">
                  <p className="text-[10px] uppercase tracking-widest text-[#A67B7B] font-bold">
                    {product.category}
                  </p>
                  <h3 className="font-serif text-2xl text-[#333]">
                    {product.name}
                  </h3>
                </div>

                <p className="text-sm text-gray-500 line-clamp-2 italic font-serif">
                  {product.description}
                </p>

                <div className="pt-4 flex items-center justify-between">
                  <span className="text-xl font-serif text-[#D4AF37]">
                    {product.price}
                  </span>
                  <div className="w-32">
                    <AppointmentButton
                      onClick={() =>
                        window.open(
                          `https://wa.me/254722947807?text=Hi! I'm interested in the ${product.name} (${product.price}).`,
                          "_blank"
                        )
                      }
                    >
                      Buy Now
                    </AppointmentButton>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Bottom CTA: Boutique Experience */}
      <section className="bg-[#2D2D2D] py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-serif text-white uppercase tracking-widest">
            The Elan Collection
          </h2>
          <p className="text-gray-400 font-serif italic text-lg max-w-2xl mx-auto">
            Bring the spa experience home. Every product is hand-selected and
            used in our professional treatments.
          </p>
          <div className="pt-4">
            <a
              href="https://wa.me/254700252055?text=Hi!%20I%20was%20going%20through%20your%20website%20and%20I%E2%80%99m%20interested%20in%20your%20products."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Consult with a Specialist on WhatsApp"
              className="inline-flex items-center gap-3 text-[#D4AF37] uppercase tracking-[0.3em] text-xs font-bold hover:gap-6 transition-all"
            >
              Consult with a Specialist <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

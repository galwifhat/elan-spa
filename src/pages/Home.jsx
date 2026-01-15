// src/pages/Home.jsx
import { Link } from "react-router-dom";
import TreatmentImageCard from "../components/treatment/TreatmentImageCard";
import PromoCard from "../components/promo/PromoCard";
import TestimonialCard from "../components/testimonial/TestimonialCard";
import {
  treatmentImages,
  promoImages,
  testimonials,
} from "../data/treatmentImages";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#FAF9F6]">
      <div className="container mx-auto px-4 py-16 space-y-20">
        {/* Hero Section */}
        <section className="text-center space-y-6 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif text-gray-900">
            Luxury Spa & Wellness
          </h1>
          <p className="text-gray-600 text-lg">
            Experience tranquility and rejuvenation at Nairobi's premier spa
            destination
          </p>
          <Link
            to="/book"
            className="inline-block px-8 py-4 bg-[#D4AF37] text-white text-lg uppercase tracking-widest rounded-lg hover:bg-[#B8941F] transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Book Your Spa Experience
          </Link>
        </section>

        {/* Treatment Showcase Grid */}
        <section>
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-800 uppercase tracking-widest">
            Our Treatments
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">
            {treatmentImages.map((treatment) => (
              <TreatmentImageCard key={treatment.id} treatment={treatment} />
            ))}
          </div>
        </section>

        {/* Promotional Packages */}
        <section>
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-800 uppercase tracking-widest">
            Special Packages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {promoImages.map((promo) => (
              <PromoCard key={promo.id} promo={promo} />
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section>
          <div className="text-center mb-8">
            <span className="inline-block px-3 py-1 bg-[#D4AF37]/10 rounded-full uppercase tracking-[0.4em] text-xs text-[#D4AF37] font-semibold">
              What Our Clients Say
            </span>
            <h2 className="text-2xl font-bold mt-4 text-gray-800">
              Customer Testimonials
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center py-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Ready to Experience True Relaxation?
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/services"
              className="px-8 py-3 border-2 border-[#D4AF37] text-[#D4AF37] uppercase tracking-widest rounded-lg hover:bg-[#D4AF37] hover:text-white transition-colors duration-300"
            >
              View All Services
            </Link>
            <Link
              to="/book"
              className="px-8 py-3 bg-gray-900 text-white uppercase tracking-widest rounded-lg hover:bg-gray-800 transition-colors duration-300"
            >
              Book Appointment
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

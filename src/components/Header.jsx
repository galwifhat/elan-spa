import { MapPin, MessageCircle, Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import FloatingServicesBar from "./FloatingServicesBar";
import FloatingProductsBar from "./FloatingProductsBar";

export default function Header() {
  const location = useLocation();

  // Logic to check if we are currently on the Home page
  const isHomePage = location.pathname === "/";
  const isServicesPage = location.pathname === "/services";
  const isProductsPage = location.pathname === "/products";

  // Logic to format the Page Title for the Hero (e.g., "/services" becomes "Services")
  const pageTitle = location.pathname.substring(1).replace("-", " ");

  return (
    <header className="w-full flex flex-col bg-[#FAF9F6]">
      {/* 1. TOP BAR: Visit | Logo | Call */}
      <div className="container mx-auto px-6 py-8 flex justify-between items-center">
        {/* Location Section */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="p-2 rounded-full bg-[#D4AF37] text-white group-hover:bg-[#B8941F] transition-colors">
            <MapPin size={18} />
          </div>
          <div className="text-xs uppercase tracking-tighter hidden md:block">
            <p className="font-bold">Visit Us</p>
            <p className="text-gray-500">Jewel Complex, 1st Floor</p>
          </div>
        </div>

        {/* LOGO: ELAN SPA */}
        <Link to="/" className="text-center">
          <h1 className="text-4xl font-serif tracking-widest uppercase font-light text-[#333333]">
            Elan{" "}
            <span className="block text-xs tracking-[0.5em] mt-1 text-[#D4AF37]">
              Spa
            </span>
          </h1>
        </Link>

        {/* Contact Section */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="text-xs uppercase tracking-tighter text-right hidden md:block">
            <p className="font-bold">Call Us</p>
            <p className="text-gray-500">+254 722 947 807</p>
          </div>
          <div className="p-2 rounded-full bg-[#D4AF37] text-white group-hover:bg-[#B8941F] transition-colors">
            <Phone size={18} />
          </div>
        </div>
      </div>

      {/* 2. NAVIGATION BAR - Visible on all pages */}
      <nav className="border-y border-gray-100 py-4">
        <ul className="flex justify-center items-center gap-4 sm:gap-6 md:gap-10 text-[10px] sm:text-[11px] uppercase tracking-[0.3em] font-semibold text-[#333333]">
          <li>
            <Link
              to="/"
              className={`hover:text-[#D4AF37] transition-colors ${
                isHomePage ? "text-[#D4AF37]" : ""
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className={`hover:text-[#D4AF37] transition-colors ${
                location.pathname === "/services" ? "text-[#D4AF37]" : ""
              }`}
            >
              <span className="hidden sm:inline">Services</span>
              <span className="sm:hidden" aria-label="Services">
                Services
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              className={`hover:text-[#D4AF37] transition-colors ${
                location.pathname === "/products" ? "text-[#D4AF37]" : ""
              }`}
            >
              <span className="hidden sm:inline">Shop</span>
              <span className="sm:hidden" aria-label="Shop">
                Shop
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="/book"
              className={`hover:text-[#D4AF37] transition-colors ${
                location.pathname === "/book" ? "text-[#D4AF37]" : ""
              }`}
            >
              <span className="hidden sm:inline">Book Now</span>
              <span className="sm:hidden" aria-label="Book Now">
                Book
              </span>
            </Link>
          </li>
          <li>
            <a
              href="https://wa.me/254722947807?text=Hi!%20I%20was%20going%20through%20your%20website%20and%20I%E2%80%99m%20interested%20in%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-[#D4AF37] transition-colors"
              aria-label="Chat With Us on WhatsApp"
            >
              <MessageCircle size={16} className="min-w-4" />
              <span className="hidden sm:inline">Chat With Us</span>
            </a>
          </li>
        </ul>
      </nav>

      {/* 3. CONDITIONAL HERO AREA: Hidden on Home Page, Visible on Others */}
      {!isHomePage && isServicesPage && (
        <>
          <div className="relative h-[350px] w-full bg-[#A67B7B] flex items-center justify-center">
            {/* Background Image */}
            <img
              src="/elan-spa/heroimage.jpg"
              alt="Hero"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Page Title display */}
            <div className="text-center text-white z-10">
              <h2 className="text-5xl font-serif mb-4 uppercase tracking-tight">
                {pageTitle}
              </h2>
              <p className="text-sm tracking-[0.3em] uppercase opacity-80">
                Home | {pageTitle}
              </p>
            </div>

            {/*FLOATING QUICK SERVICE BAR (Straddles the hero and content) */}
            <FloatingServicesBar />
          </div>
          {/* Spacer so the floating bar doesn't overlap content below */}
          <div className="h-16 w-full bg-[#FAF9F6]"></div>
        </>
      )}

      {!isHomePage && isProductsPage && (
        <>
          <div className="relative h-[350px] w-full bg-[#A67B7B] flex items-center justify-center">
            {/* Background Image */}
            <img
              src="/elan-spa/heroimage.jpg"
              alt="Hero"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Page Title display */}
            <div className="text-center text-white z-10">
              <h2 className="text-5xl font-serif mb-4 uppercase tracking-tight">
                {pageTitle}
              </h2>
              <p className="text-sm tracking-[0.3em] uppercase opacity-80">
                Home | {pageTitle}
              </p>
            </div>

            {/*FLOATING QUICK PRODUCTS BAR (Straddles the hero and content) */}
            <FloatingProductsBar />
          </div>
          {/* Spacer so the floating bar doesn't overlap content below */}
          <div className="h-16 w-full bg-[#FAF9F6]"></div>
        </>
      )}
    </header>
  );
}

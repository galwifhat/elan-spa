// Footer.jsx
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTiktok,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className="w-full mt-4">
      {/* 1. MAP SECTION (As seen in your wireframe) */}
      <div className="w-full h-[400px] bg-gray-200 grayscale hover:grayscale-0 transition-all duration-700">
        {/* Replace the src with your actual Google Maps Embed link */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.9146130667227!2d36.88735537568015!3d-1.219503798768859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f3fb31144be53%3A0x23ec136503d8148!2sElan%20Chic%20Spa!5e0!3m2!1sen!2ske!4v1768384574809!5m2!1sen!2ske"
          className="w-full h-full border-0"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      {/* 2. MAIN FOOTER CONTENT */}
      <div className="bg-[#2D2D2D] text-white pt-16 pb-8 px-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-center text-center">
          {/* Column 1: Address */}
          <div className="space-y-4">
            <h4 className="text-[#D4AF37] uppercase tracking-widest text-sm font-bold">
              Address
            </h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              Roysambu, Nairobi <br />
              Lumumba 1st Avenue (Near TRM)
            </p>
          </div>

          {/* Column 2: Logo Center */}
          <div className="flex flex-col items-center">
            <div className="mb-4">
              <h1 className="text-3xl font-serif tracking-widest uppercase font-light text-white">
                Elan{" "}
                <span className="block text-[10px] tracking-[0.5em] mt-1 text-[#D4AF37]">
                  Spa
                </span>
              </h1>
            </div>
            {/* Social Icons */}
            <div className="flex gap-6 mt-4">
              <FontAwesomeIcon
                icon={faTiktok}
                className="hover:text-[#D4AF37] cursor-pointer transition-colors"
                size="lg"
              />
              <FontAwesomeIcon
                icon={faFacebook}
                className="hover:text-[#D4AF37] cursor-pointer transition-colors"
                size="lg"
              />
              <FontAwesomeIcon
                icon={faInstagram}
                className="hover:text-[#D4AF37] cursor-pointer transition-colors"
                size="lg"
              />
              <FontAwesomeIcon
                icon={faEnvelope}
                className="hover:text-[#D4AF37] cursor-pointer transition-colors"
                size="lg"
              />
            </div>
          </div>

          {/* Column 3: Contacts */}
          <div className="space-y-4">
            <h4 className="text-[#D4AF37] uppercase tracking-widest text-sm font-bold">
              Contacts
            </h4>
            <div className="text-gray-300 text-sm space-y-2">
              <p className="hover:text-white cursor-pointer">
                elanchicspa@gmail.com
              </p>
              <p className="text-lg font-serif text-[#D4AF37]">
                +254 722 947 807
              </p>
            </div>
          </div>
        </div>

        {/* 3. COPYRIGHT BAR */}
        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500">
            ElanSpa © 2026. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

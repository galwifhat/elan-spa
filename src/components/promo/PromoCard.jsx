// src/components/promo/PromoCard.jsx
import { Link } from "react-router-dom";
import BookingModal from "../bookingModal/BookingModal";
import AppointmentButton from "../buttons/AppointmentButton";

const PromoCard = ({ promo }) => {
  return (
    <div className="flex flex-col items-center border border-black/5 p-6 space-y-4 shadow-sm bg-white hover:shadow-md transition-all duration-300 rounded-xl hover:-translate-y-1">
      <div className="w-full h-48 overflow-hidden rounded-lg">
        <img
          src={promo.src}
          alt={promo.alt}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      <div className="text-center space-y-3 flex-grow">
        <h3 className="font-bold text-xl text-gray-900">{promo.title}</h3>
        <p className="text-gray-600">{promo.description}</p>
        {promo.price && promo.duration && (
          <div className="flex justify-between items-center pt-3 border-t border-gray-100">
            <span className="font-bold text-[#D4AF37]">{promo.price}</span>
            <span className="text-sm text-gray-500">{promo.duration}</span>
          </div>
        )}
      </div>
      <div className="w-full">
        <Link
          to="/book"
          className="
            inline-flex w-full items-center justify-center
            rounded-lg
            bg-[#D4AF37] text-white
            font-medium uppercase
            shadow-md
            transition-all duration-300

            /* balanced sizing */
            px-5 py-3 text-sm
            sm:px-6 sm:py-3 sm:text-base
            lg:px-7 lg:py-3.5 lg:text-lg

            tracking-wide

            hover:bg-[#B8941F]
            hover:shadow-lg
            active:scale-[0.98]

            focus:outline-none
            focus:ring-2 focus:ring-[#D4AF37]/50
          "
        >
          Book This Package
        </Link>

        {/* <BookingModal
          trigger={
            <AppointmentButton className="w-full justify-center py-3">
              Book This Package
            </AppointmentButton>
          }
        /> */}
      </div>
    </div>
  );
};

export default PromoCard;

// src/components/promo/PromoCard.jsx
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
        <BookingModal
          trigger={
            <AppointmentButton className="w-full justify-center py-3">
              Book This Package
            </AppointmentButton>
          }
        />
      </div>
    </div>
  );
};

export default PromoCard;

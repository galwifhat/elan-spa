import React from "react";
import {
  Check,
  Calendar,
  Clock,
  MapPin,
  User,
  ChevronLeft,
} from "lucide-react";

export default function Step4ReviewConfirm({
  selectedServices,
  selectedDate,
  selectedTime,
  customerInfo,
  onPrevious,
  onConfirm,
}) {
  const totalPrice = selectedServices.reduce(
    (sum, s) => sum + (parseInt(s.price.replace(/\D/g, "")) || 0),
    0
  );

  return (
    <div className="space-y-10 animate-in fade-in zoom-in-95 duration-500">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* LEFT: The Details Board (7 Cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-8">
            <h3 className="font-serif text-2xl text-[#333] border-b border-gray-50 pb-4">
              Appointment Summary
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Date & Time */}
              <div className="flex gap-4">
                <div className="h-12 w-12 bg-[#FAF9F6] rounded-2xl flex items-center justify-center text-[#D4AF37] shrink-0">
                  <Calendar size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-gray-400">
                    When
                  </p>
                  <p className="font-serif text-lg text-[#333]">
                    {selectedDate?.toLocaleDateString("en-US", {
                      weekday: "long",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                  <p className="flex items-center gap-1 text-sm text-[#A67B7B] font-medium mt-1">
                    <Clock size={14} /> {selectedTime}
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex gap-4">
                <div className="h-12 w-12 bg-[#FAF9F6] rounded-2xl flex items-center justify-center text-[#D4AF37] shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-gray-400">
                    Where
                  </p>
                  <p className="font-serif text-lg text-[#333]">
                    Elan Chic Spa
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    Jewel Complex, 1st Floor
                  </p>
                </div>
              </div>

              {/* Client Info */}
              <div className="flex gap-4 md:col-span-2">
                <div className="h-12 w-12 bg-[#FAF9F6] rounded-2xl flex items-center justify-center text-[#D4AF37] shrink-0">
                  <User size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-gray-400">
                    Reserved For
                  </p>
                  <p className="font-serif text-lg text-[#333]">
                    {customerInfo.firstName} {customerInfo.lastName}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    {customerInfo.email} • {customerInfo.phone}
                  </p>
                </div>
              </div>
            </div>

            {/* Special Notes */}
            {customerInfo.notes && (
              <div className="p-4 bg-[#FAF9F6] rounded-2xl border border-gray-100">
                <p className="text-[10px] uppercase tracking-widest font-bold text-[#A67B7B] mb-2">
                  Note to Therapist
                </p>
                <p className="text-sm italic text-gray-600">
                  "{customerInfo.notes}"
                </p>
              </div>
            )}
          </div>
        </div>

        {/* RIGHT: The "Luxury Receipt" (5 Cols) */}
        <div className="lg:col-span-5">
          <div className="bg-[#2D2D2D] text-white p-8 rounded-3xl shadow-2xl relative overflow-hidden">
            {/* Elegant Background Pattern Element */}
            <div className="absolute top-[-20px] right-[-20px] h-32 w-32 bg-[#D4AF37] opacity-10 rounded-full blur-3xl"></div>

            <h4 className="text-center font-serif text-xl tracking-widest text-[#D4AF37] mb-8">
              Service Folio
            </h4>

            <div className="space-y-4 mb-10">
              {selectedServices.map((s) => (
                <div
                  key={s.id}
                  className="flex justify-between items-center group animate-in slide-in-from-right duration-300"
                >
                  <span className="text-xs uppercase tracking-widest font-medium group-hover:text-[#D4AF37] transition-colors">
                    {s.name}
                  </span>
                  <div className="flex-1 border-b border-white/10 mx-4 border-dotted"></div>
                  <span className="text-sm font-serif">{s.price}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-white/10 pt-6 space-y-2">
              <div className="flex justify-between text-xs text-gray-400 uppercase tracking-widest">
                <span>Subtotal</span>
                <span>Ksh {totalPrice.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-baseline pt-4">
                <span className="font-serif text-lg tracking-widest uppercase">
                  Total due
                </span>
                <span className="text-3xl font-serif text-[#D4AF37]">
                  Ksh {totalPrice.toLocaleString()}
                </span>
              </div>
            </div>

            <div className="mt-8 p-4 bg-white/5 rounded-xl border border-white/10">
              <p className="text-[9px] leading-relaxed text-gray-400 uppercase tracking-widest text-center">
                * Our front office will contact you within 24 hours to confirm
                your final booking.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-8 border-t border-gray-100">
        <button
          onClick={onPrevious}
          className="flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-black transition-colors"
        >
          <ChevronLeft size={16} /> Edit Details
        </button>
        <button
          onClick={onConfirm}
          className="flex items-center gap-3 px-12 py-5 bg-[#25D366] text-white rounded-2xl font-bold uppercase tracking-widest text-sm hover:bg-[#1ebd5a] transition-all shadow-xl shadow-[#25D366]/20"
        >
          <Check size={20} /> Confirm My Spa Visit
        </button>
      </div>
    </div>
  );
}

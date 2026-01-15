import React from "react";
import { User, Mail, Phone, MessageSquare, ChevronLeft } from "lucide-react";

export default function Step3YourDetails({
  selectedServices,
  customerInfo,
  onCustomerInfoChange,
  onPrevious,
  onNext,
}) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onCustomerInfoChange({ ...customerInfo, [name]: value });
  };

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* LEFT: The Form (8 Cols) */}
        <div className="lg:col-span-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* First Name */}
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#A67B7B] ml-1">
                First Name
              </label>
              <div className="relative">
                <User
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#E3C5A8]"
                  size={18}
                />
                <input
                  type="text"
                  name="firstName"
                  placeholder="Jane"
                  value={customerInfo.firstName}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-4 bg-[#FAF9F6] border-2 border-transparent focus:border-[#D4AF37] focus:bg-white rounded-2xl outline-none transition-all font-medium"
                />
              </div>
            </div>

            {/* Last Name */}
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#A67B7B] ml-1">
                Last Name
              </label>
              <div className="relative">
                <User
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#E3C5A8]"
                  size={18}
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Doe"
                  value={customerInfo.lastName}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-4 bg-[#FAF9F6] border-2 border-transparent focus:border-[#D4AF37] focus:bg-white rounded-2xl outline-none transition-all font-medium"
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#A67B7B] ml-1">
                Email Address
              </label>
              <div className="relative">
                <Mail
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#E3C5A8]"
                  size={18}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="jane@example.com"
                  value={customerInfo.email}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-4 bg-[#FAF9F6] border-2 border-transparent focus:border-[#D4AF37] focus:bg-white rounded-2xl outline-none transition-all font-medium"
                />
              </div>
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#A67B7B] ml-1">
                Phone Number
              </label>
              <div className="relative">
                <Phone
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#E3C5A8]"
                  size={18}
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="+254 ..."
                  value={customerInfo.phone}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-4 bg-[#FAF9F6] border-2 border-transparent focus:border-[#D4AF37] focus:bg-white rounded-2xl outline-none transition-all font-medium"
                />
              </div>
            </div>

            {/* Notes */}
            <div className="md:col-span-2 space-y-2">
              <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#A67B7B] ml-1">
                Special Requests or Allergies
              </label>
              <div className="relative">
                <MessageSquare
                  className="absolute left-4 top-4 text-[#E3C5A8]"
                  size={18}
                />
                <textarea
                  name="notes"
                  rows="4"
                  placeholder="Please let us know if you have any preferences or skin sensitivities..."
                  value={customerInfo.notes}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-4 bg-[#FAF9F6] border-2 border-transparent focus:border-[#D4AF37] focus:bg-white rounded-2xl outline-none transition-all font-medium resize-none"
                />
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: Mini Summary Card (4 Cols) */}
        <div className="lg:col-span-4">
          <div className="bg-[#FAF9F6] p-8 rounded-3xl border-2 border-dashed border-[#E3C5A8] sticky top-4">
            <h4 className="font-serif italic text-lg text-center mb-6">
              Booking for
            </h4>
            <div className="space-y-4">
              {selectedServices.map((s) => (
                <div
                  key={s.id}
                  className="flex justify-between text-[11px] font-bold uppercase tracking-wider text-[#A67B7B]"
                >
                  <span>{s.name}</span>
                  <span>{s.price}</span>
                </div>
              ))}
              <div className="pt-4 border-t border-[#E3C5A8]/30 flex justify-between items-center font-serif text-xl">
                <span>Total</span>
                <span className="text-[#D4AF37]">
                  Ksh{" "}
                  {selectedServices
                    .reduce(
                      (sum, s) =>
                        sum + (parseInt(s.price.replace(/\D/g, "")) || 0),
                      0
                    )
                    .toLocaleString()}
                </span>
              </div>
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
          <ChevronLeft size={16} /> Back
        </button>
        <button
          onClick={onNext}
          disabled={
            !customerInfo.firstName ||
            !customerInfo.phone ||
            !customerInfo.email
          }
          className="px-12 py-4 bg-[#D4AF37] text-white rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-[#B8941F] disabled:opacity-30 transition-all shadow-xl shadow-[#D4AF37]/20"
        >
          Review My Booking
        </button>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Clock,
  Calendar as CalIcon,
} from "lucide-react";

export default function Step2DateTime({
  selectedServices,
  onRemoveService,
  selectedDate,
  selectedTime,
  onDateSelect,
  onTimeSelect,
  onPrevious,
  onNext,
}) {
  // Start the calendar on the current month of 2026
  const [currentMonth, setCurrentMonth] = useState(new Date(2026, 0, 1));

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const daysInMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth() + 1,
    0
  ).getDate();
  const firstDay = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth(),
    1
  ).getDay();

  const timeSlots = [
    "09:00 AM",
    "10:30 AM",
    "12:00 PM",
    "01:30 PM",
    "03:00 PM",
    "04:30 PM",
    "06:00 PM",
  ];

  const handleMonthChange = (offset) => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + offset, 1)
    );
  };

  return (
    <div className="space-y-10 animate-in fade-in duration-500">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* LEFT: Calendar Section (7 Cols) */}
        <div className="lg:col-span-7 bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
          <div className="flex justify-between items-center mb-8 px-2">
            <h3 className="font-serif text-xl text-[#333] uppercase tracking-widest">
              {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
            </h3>
            <div className="flex gap-2">
              <button
                onClick={() => handleMonthChange(-1)}
                className="p-2 hover:bg-[#FAF9F6] rounded-full transition-colors border border-gray-100"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => handleMonthChange(1)}
                className="p-2 hover:bg-[#FAF9F6] rounded-full transition-colors border border-gray-100"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-1 mb-4">
            {dayNames.map((day) => (
              <div
                key={day}
                className="text-center text-[10px] font-bold text-[#A67B7B] uppercase tracking-tighter"
              >
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-2">
            {Array.from({ length: firstDay }).map((_, i) => (
              <div key={`e-${i}`} />
            ))}
            {Array.from({ length: daysInMonth }).map((_, i) => {
              const day = i + 1;
              const date = new Date(
                currentMonth.getFullYear(),
                currentMonth.getMonth(),
                day
              );
              const isSelected =
                selectedDate?.toDateString() === date.toDateString();
              const isPast = date < new Date().setHours(0, 0, 0, 0);

              return (
                <button
                  key={day}
                  disabled={isPast}
                  onClick={() => onDateSelect(date)}
                  className={`h-12 w-full rounded-2xl flex items-center justify-center text-sm font-medium transition-all
                    ${
                      isSelected
                        ? "bg-[#D4AF37] text-white shadow-lg scale-105"
                        : "hover:bg-[#FAF9F6] text-[#333]"
                    }
                    ${
                      isPast
                        ? "opacity-10 cursor-not-allowed"
                        : "cursor-pointer"
                    }`}
                >
                  {day}
                </button>
              );
            })}
          </div>
        </div>

        {/* RIGHT: Time Slot Picker (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-[#FAF9F6] p-6 rounded-3xl border border-[#E3C5A8]/50 min-h-[400px]">
            <h4 className="text-center font-serif italic text-lg mb-6 flex items-center justify-center gap-2">
              <Clock size={18} className="text-[#D4AF37]" /> Available Times
            </h4>

            {!selectedDate ? (
              <div className="flex flex-col items-center justify-center h-64 text-gray-400 space-y-2">
                <CalIcon size={32} strokeWidth={1} />
                <p className="text-xs uppercase tracking-widest text-center">
                  Please select a date first
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-3 max-h-[350px] overflow-y-auto pr-2 custom-scrollbar">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    onClick={() => onTimeSelect(time)}
                    className={`w-full py-4 px-6 rounded-2xl border-2 text-sm font-bold tracking-widest transition-all
                      ${
                        selectedTime === time
                          ? "bg-[#D4AF37] border-[#D4AF37] text-white shadow-md"
                          : "bg-white border-gray-50 text-gray-400 hover:border-[#E3C5A8] hover:text-[#333]"
                      }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* FOOTER NAVIGATION */}
      <div className="flex justify-between items-center pt-8 border-t border-gray-100">
        <button
          onClick={onPrevious}
          className="px-8 py-3 text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-black transition-colors"
        >
          Previous Step
        </button>
        <button
          onClick={onNext}
          disabled={!selectedDate || !selectedTime}
          className="px-10 py-4 bg-[#D4AF37] text-white rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-[#B8941F] disabled:opacity-30 transition-all shadow-xl shadow-[#D4AF37]/20"
        >
          Confirm Date & Time
        </button>
      </div>
    </div>
  );
}

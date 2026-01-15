// Calendar.jsx
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Calendar({ onDateSelect }) {
  const [currentDate, setCurrentDate] = useState(new Date(2026, 0, 1)); // Jan 1, 2026
  const [selectedDate, setSelectedDate] = useState(null);

  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();

  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ).getDay();

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

  const handleDateClick = (day) => {
    const date = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      day
    );
    setSelectedDate(date);
    if (onDateSelect) {
      onDateSelect(date);
    }
  };

  const goToPreviousMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  const goToNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  // Generate days array
  const days = [];
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  // Generate empty cells for days before first day of month
  const emptyCells = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    emptyCells.push(<div key={`empty-${i}`} className="h-10"></div>);
  }

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-[#E3C5A8]/30">
      {/* Calendar Header */}
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={goToPreviousMonth}
          className="p-2 hover:bg-gray-100 rounded-full"
        >
          <ChevronLeft size={20} />
        </button>
        <h3 className="text-lg font-serif uppercase tracking-widest">
          {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
        </h3>
        <button
          onClick={goToNextMonth}
          className="p-2 hover:bg-gray-100 rounded-full"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Day Names */}
      <div className="grid grid-cols-7 gap-2 mb-4">
        {dayNames.map((day) => (
          <div
            key={day}
            className="text-center text-xs font-bold text-gray-500 uppercase"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-2">
        {emptyCells}
        {days.map((day) => {
          const isToday =
            day === new Date().getDate() &&
            currentDate.getMonth() === new Date().getMonth() &&
            currentDate.getFullYear() === new Date().getFullYear();

          const isSelected =
            selectedDate &&
            day === selectedDate.getDate() &&
            currentDate.getMonth() === selectedDate.getMonth() &&
            currentDate.getFullYear() === selectedDate.getFullYear();

          return (
            <button
              key={day}
              onClick={() => handleDateClick(day)}
              className={`
                h-10 rounded-lg flex items-center justify-center text-sm font-medium
                transition-all hover:scale-105
                ${isToday ? "bg-[#E3C5A8]/20 text-[#A67B7B]" : ""}
                ${isSelected ? "bg-[#D4AF37] text-white" : "hover:bg-gray-100"}
                ${!isSelected && !isToday ? "text-gray-700" : ""}
              `}
            >
              {day}
            </button>
          );
        })}
      </div>

      {/* Selected Date Display */}
      {selectedDate && (
        <div className="mt-6 pt-6 border-t text-center">
          <p className="text-sm text-gray-500">Selected Date</p>
          <p className="font-serif text-lg">
            {selectedDate.toLocaleDateString("en-US", {
              weekday: "long",
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </p>
        </div>
      )}
    </div>
  );
}

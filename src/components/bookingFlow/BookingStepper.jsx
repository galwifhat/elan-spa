import React from "react";

export default function BookingStepper({ currentStep }) {
  const steps = [
    { number: 1, label: "Treatment Selection" },
    { number: 2, label: "Date & Time" },
    { number: 3, label: "Your Details" },
    { number: 4, label: "Review & Confirm" },
    { number: 5, label: "Booking Complete" },
  ];

  return (
    <div className="mb-12">
      <div className="flex justify-between items-center relative">
        {/* Progress line */}
        <div className="absolute top-4 left-0 right-0 h-0.5 bg-gray-200 -z-10" />

        {steps.map((step) => (
          <div key={step.number} className="flex flex-col items-center">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold border-2 ${
                currentStep >= step.number
                  ? "bg-[#D4AF37] border-[#D4AF37] text-white"
                  : "bg-white border-gray-300 text-gray-400"
              }`}
            >
              {step.number}
            </div>

            <span
              className={`mt-2 text-xs font-medium hidden md:block ${
                currentStep >= step.number ? "text-[#D4AF37]" : "text-gray-400"
              }`}
            >
              {step.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

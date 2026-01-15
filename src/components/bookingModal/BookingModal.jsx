// BookingModal.jsx (updated)
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Calendar from "./Calendar";
import TimeSlotDialog from "./TimeSlotDialog";
import ServiceSelectionStep from "./ServiceSelectionStep";

export default function BookingModal({ trigger }) {
  const [step, setStep] = useState(1); // 1: Calendar, 2: TimeSlotDialog, 3: Services
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [activeCategory, setActiveCategory] = useState("Waxing");
  const [selectedServices, setSelectedServices] = useState([]);
  const [isTimeSlotDialogOpen, setIsTimeSlotDialogOpen] = useState(false);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setStep(2);
    setIsTimeSlotDialogOpen(true);
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    setIsTimeSlotDialogOpen(false);
    setStep(3); // Go to service selection
  };

  const toggleService = (service) => {
    setSelectedServices((prev) =>
      prev.find((s) => s.id === service.id)
        ? prev.filter((s) => s.id !== service.id)
        : [...prev, service]
    );
  };

  const handleOpenChange = (open) => {
    if (!open) {
      setStep(1);
      setSelectedDate(null);
      setSelectedTime(null);
      setSelectedServices([]);
      setIsTimeSlotDialogOpen(false);
    }
  };

  const handleBackToCalendar = () => {
    setStep(1);
    setSelectedTime(null);
    setSelectedServices([]);
  };

  const handleBackFromTimeSlots = () => {
    setStep(1); // Go back to calendar step
    setIsTimeSlotDialogOpen(false);
    setSelectedTime(null);
  };
  const handleBackToTimeSlots = () => {
    setStep(2);
    setIsTimeSlotDialogOpen(true);
    setSelectedServices([]);
  };

  const formatDateForDisplay = (date) => {
    if (!date) return "";
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const handleFinalBooking = () => {
    if (!selectedDate || !selectedTime || selectedServices.length === 0) return;

    const dateStr = formatDateForDisplay(selectedDate);
    const servicesText = selectedServices.map((s) => s.name).join(", ");

    window.open(
      `https://wa.me/254722947807?text=Hi! I want to book:\n\nDate: ${dateStr}\nTime: ${selectedTime}\nServices: ${servicesText}`,
      "_blank"
    );
  };

  return (
    <Dialog onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        {trigger || <button>Book Now</button>}
      </DialogTrigger>

      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-white border-2 border-[#9E8B7A] rounded-xl shadow-2xl">
        <DialogHeader>
          <DialogTitle className="text-center font-serif text-lg tracking-wide">
            {step === 1
              ? "Select a Date"
              : step === 2
              ? "Choose a Time"
              : "Select Services"}
          </DialogTitle>
        </DialogHeader>

        {step === 1 && (
          <div className="mt-4">
            <Calendar onDateSelect={handleDateSelect} />
          </div>
        )}

        {step === 2 && (
          <TimeSlotDialog
            open={isTimeSlotDialogOpen}
            onOpenChange={setIsTimeSlotDialogOpen}
            selectedDate={selectedDate}
            onTimeSelect={handleTimeSelect}
            onBack={handleBackFromTimeSlots} 
          />
        )}

        {step === 3 && (
          <div className="space-y-4">
            {/* Header with selected date and time */}
            <div className="bg-[#F8F1E4] border border-[#9E8B7A] rounded-lg p-4 shadow-sm">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500">Selected Appointment</p>
                  <p className="font-serif font-bold">
                    {formatDateForDisplay(selectedDate)} • {selectedTime}
                  </p>
                </div>
                <button
                  onClick={handleBackToTimeSlots}
                  className="text-xs uppercase font-bold text-gray-400 hover:text-black"
                >
                  Change Time
                </button>
              </div>
            </div>

            {/* Service Selection */}
            <ServiceSelectionStep
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
              selectedServices={selectedServices}
              toggleService={toggleService}
              onNext={handleFinalBooking}
              onBack={handleBackToCalendar}
            />
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

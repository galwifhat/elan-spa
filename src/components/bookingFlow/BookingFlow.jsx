// src/components/bookingFlow/BookingFlow.jsx
import React, { useState } from "react";
import BookingStepper from "./BookingStepper";
import Step1TreatmentSelection from "./Step1TreatmentSelection";
import Step2DateTime from "./Step2DateTime";
import Step3YourDetails from "./Step3YourDetails";
import Step4ReviewConfirm from "./Step4ReviewConfirm";
import Step5BookingComplete from "./Step5BookingComplete";

export default function BookingFlow() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [customerInfo, setCustomerInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    notes: "",
  });
  const [bookingReference, setBookingReference] = useState("");

  const addService = (service) => {
    if (!selectedServices.find((s) => s.id === service.id)) {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const removeService = (service) => {
    setSelectedServices(selectedServices.filter((s) => s.id !== service.id));
  };

  const handleNext = () => {
    if (currentStep < 5) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleConfirmBooking = () => {
    const ref = "ELAN-" + Date.now().toString().slice(-8);
    setBookingReference(ref);

    // 1. Prepare the Data
    const servicesList = selectedServices
      .map((s) => `• ${s.name} (${s.price})`)
      .join("\n");
    const dateStr = selectedDate
      ? selectedDate.toLocaleDateString("en-US", {
          weekday: "long",
          month: "long",
          day: "numeric",
          year: "numeric",
        })
      : "";

    const totalPrice = selectedServices
      .reduce((sum, s) => sum + (parseInt(s.price.replace(/\D/g, "")) || 0), 0)
      .toLocaleString();

    // 2. Construct the WhatsApp Message
    const message =
      `*New Booking Request: ${ref}* \n\n` +
      `*Client:* ${customerInfo.firstName} ${customerInfo.lastName}\n` +
      `*Phone:* ${customerInfo.phone}\n` +
      `*Email:* ${customerInfo.email}\n\n` +
      `*Services:* \n${servicesList}\n\n` +
      `*Date:* ${dateStr}\n` +
      `*Time:* ${selectedTime}\n` +
      `*Total:* Ksh ${totalPrice}\n\n` +
      (customerInfo.notes ? `*Note:* ${customerInfo.notes}\n\n` : "") +
      `Please confirm my appointment. Thank you!`;

    // 3. Encode and Open WhatsApp
    const whatsappUrl = `https://wa.me/254700252055?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");

    // 4. Move to "Booking Complete" screen
    setCurrentStep(5);
  };

  const handleCustomerInfoChange = (info) => {
    setCustomerInfo(info);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <Step1TreatmentSelection
            selectedServices={selectedServices}
            onAddService={addService}
            onRemoveService={removeService}
            onNext={handleNext}
          />
        );

      case 2:
        return (
          <Step2DateTime
            selectedServices={selectedServices}
            onRemoveService={removeService}
            selectedDate={selectedDate}
            selectedTime={selectedTime}
            onDateSelect={setSelectedDate}
            onTimeSelect={setSelectedTime}
            onPrevious={handlePrevious}
            onNext={handleNext}
          />
        );

      case 3:
        return (
          <Step3YourDetails
            selectedServices={selectedServices}
            onRemoveService={removeService}
            customerInfo={customerInfo}
            onCustomerInfoChange={handleCustomerInfoChange}
            onPrevious={handlePrevious}
            onNext={handleNext}
          />
        );

      case 4:
        return (
          <Step4ReviewConfirm
            selectedServices={selectedServices}
            selectedDate={selectedDate}
            selectedTime={selectedTime}
            customerInfo={customerInfo}
            onRemoveService={removeService}
            onPrevious={handlePrevious}
            onConfirm={handleConfirmBooking}
          />
        );

      case 5:
        return <Step5BookingComplete bookingReference={bookingReference} />;

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#A67B7B]  pt-20 pb-24">
      {/* Added more padding */}
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif text-white mb-2 uppercase tracking-widest">
            Reserve Your Moment
          </h1>
          <p className="text-[#A67B7B] font-serif italic">
            Step {currentStep} of 5
          </p>
        </div>

        {currentStep < 5 && <BookingStepper currentStep={currentStep} />}

        <div className="bg-white rounded-3xl shadow-xl shadow-[#E3C5A8]/20 border border-[#E3C5A8]/30 overflow-hidden">
          <div className="p-8 md:p-12">{renderStep()}</div>
        </div>
      </div>
    </div>
  );
}

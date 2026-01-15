// ServicesSummary.jsx
import React from "react";
import { X } from "lucide-react";
import AppointmentButton from "@/components/buttons/AppointmentButton";

export default function ServicesSummary({
  selectedServices,
  onRemoveService,
  onNext,
}) {
  return (
    <div className="mt-6 bg-[#F8F1E4] rounded-lg p-4 border border-[#9E8B7A] shadow-lg">
      <h4 className="text-center font-serif italic text-sm mb-4 tracking-wide">
        Services I Want
      </h4>
      <div className="max-h-40 overflow-y-auto space-y-2">
        {selectedServices.length === 0 && (
          <p className="text-center text-sm text-gray-500 italic">
            No services selected
          </p>
        )}
        {selectedServices.map((service) => (
          <ServiceSummaryItem
            key={service.id}
            service={service}
            onRemove={() => onRemoveService(service)}
          />
        ))}
      </div>

      <div className="mt-6 flex justify-end">
        <AppointmentButton
          disabled={selectedServices.length === 0}
          onClick={onNext}
          className="w-48"
        >
          Book Appointment
        </AppointmentButton>
      </div>
    </div>
  );
}

function ServiceSummaryItem({ service, onRemove }) {
  return (
    <div className="flex justify-between items-center p-2 bg-[#FAF9F6] border border-[#9E8B7A] rounded-md">
      <span className="text-xs font-serif uppercase truncate">
        {service.name}
      </span>
      <X
        size={16}
        className="text-red-500 cursor-pointer hover:text-red-700 transition-colors"
        onClick={onRemove}
      />
    </div>
  );
}

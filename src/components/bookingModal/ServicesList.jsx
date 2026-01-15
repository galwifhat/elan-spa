// ServicesList.jsx
import React from "react";
import { Check } from "lucide-react";

export default function ServicesList({
  services,
  selectedServices,
  onToggleService,
}) {
  return (
    <div className="w-2/3 max-h-[180px] overflow-y-auto border border-[#9E8B7A] rounded-lg bg-[#F8F1E4] p-4 shadow-inner">
      {services.map((service) => {
        const selected = selectedServices.find((s) => s.id === service.id);
        return (
          <ServiceItem
            key={service.id}
            service={service}
            selected={selected}
            onToggle={() => onToggleService(service)}
          />
        );
      })}
    </div>
  );
}

function ServiceItem({ service, selected, onToggle }) {
  return (
    <div
      onClick={onToggle}
      className="flex justify-between items-center p-2 mb-2 bg-white rounded-md cursor-pointer hover:shadow-md border border-transparent hover:border-[#9E8B7A]/30 transition-all"
    >
      <span className="text-sm font-serif">{service.name}</span>
      <div
        className={`w-5 h-5 border rounded flex items-center justify-center ${
          selected ? "bg-green-500 border-green-500" : "border-gray-300"
        }`}
      >
        {selected && <Check size={14} className="text-white" />}
      </div>
    </div>
  );
}

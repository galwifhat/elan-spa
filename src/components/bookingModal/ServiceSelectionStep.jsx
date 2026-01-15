// Add to ServiceSelectionStep.jsx
import { ChevronLeft } from "lucide-react";
import ServiceCategories from "./ServiceCategories";
import ServicesList from "./ServicesList";
import ServicesSummary from "./ServicesSummary";
import { SPA_SERVICES } from "@/constants/services";

export default function ServiceSelectionStep({
  activeCategory,
  setActiveCategory,
  selectedServices,
  toggleService,
  onNext,
  onBack, 
}) {
  return (
    <div className="flex flex-col gap-6 mt-4">
      {/* Back button */}
      {onBack && (
        <button
          onClick={onBack}
          className="self-start flex items-center gap-1 text-xs uppercase font-bold text-gray-400 hover:text-black"
        >
          <ChevronLeft size={16} /> Back to Calendar
        </button>
      )}

      {/* Rest of the component remains the same */}
      <button
        className="self-start mb-3 px-6 py-2 bg-[#9E8B7A] rounded-lg font-serif text-sm tracking-widest text-white uppercase shadow-md"
        disabled
      >
        Select a service
      </button>

      <div className="flex gap-6">
        <ServiceCategories
          categories={Object.keys(SPA_SERVICES)}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
        />

        <ServicesList
          services={SPA_SERVICES[activeCategory]}
          selectedServices={selectedServices}
          onToggleService={toggleService}
        />
      </div>

      <ServicesSummary
        selectedServices={selectedServices}
        onRemoveService={toggleService}
        onNext={onNext}
      />
    </div>
  );
}

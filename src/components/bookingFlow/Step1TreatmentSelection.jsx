import React, { useState } from "react";
import { Plus, X } from "lucide-react";
import { SPA_SERVICES } from "@/constants/services";

export default function Step1TreatmentSelection({
  selectedServices,
  onAddService,
  onRemoveService,
  onNext,
}) {
  const [selectedCategory, setSelectedCategory] = useState("Waxing");

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-serif mb-4">Book Your Spa Experience</h2>
        <p className="text-gray-600">
          No treatments selected yet. Please select treatments from the options
          below.
        </p>
      </div>

      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <h3 className="text-lg font-serif mb-4">Select a treatment</h3>

        <div className="flex gap-6">
          {/* Left: Categories */}
          <div className="w-1/3">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Treatment Category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg"
              >
                {Object.keys(SPA_SERVICES).map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* <button
              onClick={() => {
                const firstService = SPA_SERVICES[selectedCategory][0];

                onAddService({
                  ...firstService,
                  category: selectedCategory,
                });
              }}
              className="flex items-center gap-2 px-4 py-2 bg-[#D4AF37] text-white rounded-lg hover:bg-[#B8941F] transition-colors"
            >
              <Plus size={16} />
              Add Treatment
            </button> */}
          </div>

          {/* Right: Services List */}
          <div className="w-2/3">
            <div className="border border-gray-200 rounded-lg p-4 max-h-80 overflow-y-auto">
              {SPA_SERVICES[selectedCategory].map((service) => (
                <div
                  key={service.id}
                  className="flex justify-between items-center p-3 mb-2 border-b border-gray-100 hover:bg-gray-50"
                >
                  <div>
                    <p className="font-medium">{service.name}</p>
                    <p className="text-sm text-gray-600">{service.price}</p>
                  </div>

                  <button
                    onClick={() =>
                      onAddService({
                        ...service,
                        category: selectedCategory,
                      })
                    }
                    className="px-3 py-1 text-sm bg-gray-100 hover:bg-[#D4AF37] rounded"
                  >
                    Select
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Selected Treatments Preview */}
      {selectedServices.length > 0 && (
        <div className="bg-[#F8F1E4] rounded-xl p-6 border border-[#9E8B7A]">
          <h4 className="text-lg font-serif mb-4">Selected Treatments</h4>

          <div className="space-y-3">
            {selectedServices.map((service) => (
              <div
                key={service.id}
                className="flex justify-between items-center p-3 bg-white rounded-lg border"
              >
                <div>
                  <p className="font-medium">{service.name}</p>
                  <p className="text-sm text-gray-600">{service.price}</p>
                </div>

                <button
                  onClick={() => onRemoveService(service)}
                  className="text-red-500 hover:text-red-700"
                >
                  <X size={18} />
                </button>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t border-gray-300">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-600">Total Price:</p>
                <p className="text-xl font-serif">
                  Ksh{" "}
                  {selectedServices
                    .reduce((sum, s) => {
                      const price =
                        parseInt(s.price.replace(/[^0-9]/g, "")) || 0;
                      return sum + price;
                    }, 0)
                    .toLocaleString()}
                </p>
              </div>

              <button
                onClick={onNext}
                disabled={selectedServices.length === 0}
                className="px-6 py-3 bg-[#D4AF37] text-white rounded-lg hover:bg-[#B8941F] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

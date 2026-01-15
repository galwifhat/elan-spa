// TimeSlotDialog.jsx (updated)
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { timeSlots } from "@/constants/timeslots";
import { Clock, ChevronLeft } from "lucide-react";
import AppointmentButton from "../buttons/AppointmentButton";

export default function TimeSlotDialog({
  open,
  onOpenChange,
  selectedDate,
  onTimeSelect,
  onBack,
}) {
  const formatDateForTitle = (date) => {
    if (!date) return "";
    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  const handleBack = () => {
    if (onBack) {
      onBack(); // Call the parent's back function
    } else {
      onOpenChange(false);
      if (onTimeSelect) {
        onTimeSelect(null);
      }
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl bg-white border-2 border-[#D4AF37]/20 rounded-xl shadow-2xl">
        <DialogHeader>
          <button
            onClick={handleBack}
            className="self-start flex items-center gap-1 text-xs uppercase font-bold text-gray-400 hover:text-black mb-2"
          >
            <ChevronLeft size={16} /> Back to Calendar
          </button>
          <DialogTitle className="text-center font-serif text-lg tracking-wide">
            Available on {formatDateForTitle(selectedDate)}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4 mt-4">
          {timeSlots.map((time, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-[#F8F1E4] border border-[#9E8B7A] rounded-lg px-4 py-3 hover:shadow-md transition-shadow"
            >
              {/* Left */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 flex items-center justify-center bg-black rounded-full text-white">
                  <Clock size={16} />
                </div>
                <div>
                  <p className="text-sm font-semibold">{time}</p>
                  <p className="text-[10px] uppercase tracking-widest text-gray-600">
                    1 Space Available
                  </p>
                </div>
              </div>

              {/* Right */}
              <AppointmentButton
                onClick={() => {
                  if (onTimeSelect) {
                    onTimeSelect(time);
                  }
                  onOpenChange(false);
                }}
              >
                Select Time
              </AppointmentButton>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}

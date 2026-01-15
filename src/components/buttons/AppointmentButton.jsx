import { Button } from "@/components/ui/button";

export default function AppointmentButton({ onClick, children }) {
  return (
    <Button
      onClick={onClick}
      className="bg-[#D4AF37] hover:bg-[#B8941F] text-xs uppercase tracking-widest font-semibold text-white shadow-md hover:shadow-lg transition-all"
    >
      {children}
    </Button>
  );
}

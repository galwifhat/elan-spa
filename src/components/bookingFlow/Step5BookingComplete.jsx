import React from "react";
import { CheckCircle, MessageCircle, Phone } from "lucide-react";

export default function Step5BookingComplete({ bookingReference }) {
  return (
    <div className="text-center space-y-8">
      <div className="flex justify-center">
        <CheckCircle size={80} className="text-green-500" />
      </div>

      <div>
        <h2 className="text-3xl font-serif mb-4">Booking Complete!</h2>

        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Thank you for booking with Elan Spa! Your appointment request has been
          received successfully.
        </p>

        {bookingReference && (
          <div className="bg-gray-50 rounded-lg p-4 inline-block">
            <p className="text-sm text-gray-600">Booking Reference</p>
            <p className="font-mono text-lg font-bold">{bookingReference}</p>
          </div>
        )}
      </div>

      <div className="bg-[#F8F1E4] rounded-xl p-8 border border-[#9E8B7A] max-w-2xl mx-auto">
        <h3 className="text-xl font-serif mb-6">What's Next?</h3>

        <div className="space-y-4 text-left mb-8">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-[#D4AF37] flex items-center justify-center text-white text-sm mt-1">
              1
            </div>
            <div>
              <p className="font-medium">Confirmation Call</p>
              <p className="text-gray-600 text-sm">
                Our front office will contact you within 24 hours to confirm
                your appointment details.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-[#D4AF37] flex items-center justify-center text-white text-sm mt-1">
              2
            </div>
            <div>
              <p className="font-medium">Prepare for Your Visit</p>
              <p className="text-gray-600 text-sm">
                Arrive 15 minutes before your appointment time. Bring
                comfortable clothing for spa treatments.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-[#D4AF37] flex items-center justify-center text-white text-sm mt-1">
              3
            </div>
            <div>
              <p className="font-medium">Enjoy Your Experience</p>
              <p className="text-gray-600 text-sm">
                Relax and enjoy our premium spa services. Our team is dedicated
                to making your experience exceptional.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-gray-300">
          <h4 className="text-lg font-serif mb-4">Need Assistance?</h4>

          <p className="text-gray-600 mb-6">
            Feel free to contact us anytime! Our team is here to help you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+254722947807"
              className="flex items-center gap-2 px-6 py-3 bg-[#D4AF37] text-white rounded-lg hover:bg-[#B8941F]"
            >
              <Phone size={18} />
              Call Us: +254 722 947 807
            </a>

            <a
              href="https://wa.me/254722947807"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 border border-[#D4AF37] text-[#D4AF37] rounded-lg hover:bg-[#F8F1E4]"
            >
              <MessageCircle size={18} />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="pt-8">
        <a
          href="/"
          className="inline-block px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
}

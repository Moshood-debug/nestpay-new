import { Quote } from "lucide-react";
import React from "react";

export default function TestimonialCard() {
  return (
    <div className="flex items-center justify-center container mx-auto px-4 py-10 md:px-8 md:py-16 lg:p-32">
      <div className="flex flex-col md:flex-row max-w-6xl w-full rounded-3xl overflow-hidden shadow-2xl bg-[#131f37]">
        {/* Image — fixed height on mobile, fills height on md+ */}
        <div className="w-full h-56 md:h-auto md:w-2/5 relative flex-shrink-0">
          <img
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
            alt="Team collaborating in office"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </div>

        {/* Content */}
        <div className="w-full md:w-3/5 p-6 md:p-9 md:px-12 lg:py-9 lg:px-18 flex flex-col justify-center">
          <div className="mb-4 md:mb-6 text-[#b2d1fc]">
            <Quote className="w-8 h-8 md:w-11 md:h-11" />
          </div>

          <p className="text-base md:text-xl lg:text-3xl font-bold leading-relaxed mb-6 md:mb-8">
            We pay suppliers across China, Dubai and the UK every week. NestPay
            gives us honest FX, settlement in minutes, and escrow that protects
            every order — it replaced four providers with one.
          </p>

          <div className="flex items-center gap-3 md:gap-4">
            <img
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200"
              alt="Amara Okeke"
              className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover flex-shrink-0"
            />
            <div>
              <h4 className="font-semibold text-sm md:text-base">Amara Okeke</h4>
              <p className="text-[#8da2cb] text-xs md:text-sm">Founder, Lagos Trade Co.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

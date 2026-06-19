import { Quote } from "lucide-react";
import React from "react";

export default function TestimonialCard() {
  return (
    <div className="flex  items-center justify-center container mx-auto p-32">
      {/* Main Card Container */}
      <div className="flex flex-col md:flex-row max-w-6xl w-full rounded-3xl overflow-hidden shadow-2xl bg-[#131f37]">
        {/* Left Side: Imagery */}
        <div className="w-full md:w-2/5 relative  md:min-h-full">
          <img
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
            alt="Team collaborating in office"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </div>

        {/* Right Side: Testimonial Content */}
        <div className="w-full md:w-3/5 p-8 md:py-9 md:px-18 flex flex-col justify-center ">
          {/* Quote Icon */}
          <div className="mb-6 text-[#b2d1fc]">
            <Quote className="w-11 h-11" />
          </div>

          {/* Testimonial Quote */}
          <p className=" text-lg md:text-3xl font-bold leading-relaxed mb-8">
            We pay suppliers across China, Dubai and the UK every week. NestPay
            gives us honest FX, settlement in minutes, and escrow that protects
            every order — it replaced four providers with one.
          </p>

          {/* Author Profile */}
          <div className="flex items-center gap-4">
            <img
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200"
              alt="Amara Okeke"
              className="w-12 h-12 rounded-full object-cover "
            />
            <div>
              <h4 className=" font-semibold text-base">Amara Okeke</h4>
              <p className="text-[#8da2cb] text-sm">Founder, Lagos Trade Co.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { ArrowRight, MoveRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { BiLogoPlayStore } from "react-icons/bi";
import { FaApple } from "react-icons/fa";

export default function TradeCTA() {
  return (
    <section className="container mx-auto py-16 md:py-24 px-6 flex flex-col items-center justify-center text-center relative overflow-hidden">
      <div className="flex flex-col items-center relative z-10">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#f8fafc] tracking-tight mb-4 md:mb-6">
          Trade without borders
        </h2>

        <p className="text-[#94a3b8] text-base md:text-lg max-w-xl leading-relaxed mb-10">
          Open your multi-currency account and make your first cross-border
          payment today.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full md:w-auto">
          <div className="flex flex-row justify-center gap-3 w-full md:w-auto">
            <Link
              href="#"
              className="flex flex-1 md:flex-none items-center justify-center gap-2 rounded-xl border border-slate-700 px-4 py-3 text-white transition hover:border-slate-500 lg:px-6 lg:py-4 lg:gap-3"
            >
              <FaApple size={18} className="lg:hidden" />
              <FaApple size={22} className="hidden lg:block" />
              <span className="font-medium text-sm lg:text-base">Get on Apple</span>
            </Link>

            <Link
              href="#"
              className="flex flex-1 md:flex-none items-center justify-center gap-2 rounded-xl border border-slate-700 px-4 py-3 text-white transition hover:border-slate-500 lg:px-6 lg:py-4 lg:gap-3"
            >
              <BiLogoPlayStore size={18} className="lg:hidden" />
              <BiLogoPlayStore size={22} className="hidden lg:block" />
              <span className="font-medium text-sm lg:text-base">Get on Android</span>
            </Link>
          </div>

          <Link
            href="#create"
            className="flex items-center justify-center gap-2 bg-[#0b248a] hover:bg-blue-800 rounded-xl px-6 py-3 lg:py-4 text-[#f1f5f9] font-medium transition-colors shadow-lg shadow-[#0c3eb3]/15 w-full md:w-auto min-w-[200px]"
          >
            <span className="text-sm lg:text-base tracking-wide">Create free account</span>
            <ArrowRight className="size-4 lg:size-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

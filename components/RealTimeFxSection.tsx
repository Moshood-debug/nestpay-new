import React from "react";
import { Check, Lock, TrendingUp } from "lucide-react";

const RealTimeFxSection = () => {
  const features = [
    "Live mid-market pricing",
    "Flat 0.9% — no hidden markup",
    "Lock a rate before you send",
  ];

  // Represents the approximate heights of the bar chart items
  const chartBars = [25, 40, 35, 45, 40, 50, 45, 55, 50, 85];

  return (
    <section className="    font-sans flex flex-col justify-center ">
      <div className=" container mx-auto px-6 py-20 lg:py-15">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Content - Chart Card */}
          <div className="bg-[#131f37] border border-slate-800 rounded-2xl shadow-2xl p-4 md:p-6 w-full  mx-auto lg:mx-0">
            {/* Top Row: Info & Pill */}
            <div className="flex justify-between items-start mb-6">
              <div>
                <p className="text-slate-400 text-[13px] font-medium mb-1">
                  GBP → NGN • mid-market
                </p>
                <h3 className="text-3xl md:text-[32px] font-bold tracking-tight text-slate-50">
                  ₦1,950.40
                </h3>
              </div>
            </div>

            {/* Bar Chart Visualization */}
            <div className="flex items-end justify-between gap-1.5 md:gap-2 h-28 mt-8 mb-6 relative">
              {chartBars.map((height, index) => {
                const isLast = index === chartBars.length - 1;
                return (
                  <div
                    key={index}
                    className={`w-full rounded-sm md:rounded-md transition-all ${
                      isLast ? "bg-[#041c73]" : "bg-[#1e2a45]"
                    }`}
                    style={{ height: `${height}%` }}
                  ></div>
                );
              })}

              <div className="flex items-center gap-1 bg-liveGreen/20 text-liveGreen px-2.5 py-1 rounded-full text-xs font-semibold border border-liveGreen/30 absolute bottom-30 -right-2">
                <TrendingUp size={14} strokeWidth={2.5} />
                +1.2%
              </div>
            </div>

            {/* Divider */}
            <div className="h-[1px] w-full bg-slate-800/80 mb-5"></div>

            {/* Footer */}
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Lock size={14} className="text-blue-500" />
                <span className="text-[13px] font-semibold text-slate-200">
                  Rate locked for 30s
                </span>
              </div>
              <span className="text-[13px] font-medium text-slate-400">
                Fee 0.9% flat
              </span>
            </div>
          </div>

          {/* Right Content - Text & List */}
          <div>
            <span className="text-blue-500 text-xs font-bold tracking-widest uppercase block mb-6">
              Real-time FX
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
              Convert at rates that protect your margin
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-lg">
              Swap currencies at live mid-market rates with a single flat fee.
              What you see is exactly what your supplier receives.
            </p>

            <ul className="space-y-5">
              {features.map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-4 text-slate-200 font-medium text-[15px]"
                >
                  <div className="w-[22px] h-[22px] rounded-full bg-[#172b6b] flex items-center justify-center shrink-0">
                    <Check
                      size={12}
                      strokeWidth={4}
                      className="text-blue-500"
                    />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealTimeFxSection;

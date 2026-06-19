import React from "react";
import { Wallet, RefreshCcw, Send, LineChart } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      id: "01",
      title: "Hold",
      description: "Open GBP, USD, EUR and local-currency wallets in minutes.",
      icon: Wallet,
    },
    {
      id: "02",
      title: "Convert",
      description: "Swap at live mid-market rates with one flat, visible fee.",
      icon: RefreshCcw,
    },
    {
      id: "03",
      title: "Send",
      description: "Pay suppliers and partners across 30+ corridors instantly.",
      icon: Send,
    },
    {
      id: "04",
      title: "Track",
      description: "Watch every payment land in real time, end to end.",
      icon: LineChart,
    },
  ];

  return (
    <section className=" bg-[#0c1527] py-20   font-sans flex flex-col justify-center mt-18">
      <div className=" container mx-auto px-6 py-20 lg:py-15">
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-[1px] bg-blue-600"></div>
            <span className="text-blue-500 text-xs font-bold tracking-widest uppercase">
              How it works
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold  tracking-tight mb-6">
            Money in motion, start to finish
          </h2>

          <p className="text-slate-400 text-base md:text-lg max-w-2xl leading-relaxed">
            From a supplier invoice to settlement confirmation — NestPay handles
            the whole journey on one platform.
          </p>
        </div>

        <div className="flex flex-col md:flex-row w-full gap-10 md:gap-0">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.id} className="flex-1 relative md:pr-8">
                <div className="flex items-center mb-6 relative">
                  <div className="w-15 h-15 rounded-full bg-[#041c73] flex items-center justify-center relative z-10 shrink-0 shadow-lg">
                    <Icon size={20} className="text-slate-50" strokeWidth={2} />
                  </div>

                  <span className="text-xs font-bold text-slate-400 ml-4 relative z-10 bg-[#0b1221] pr-2 shrink-0">
                    {step.id}
                  </span>

                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute left-[4.5rem] right-[-1rem] top-1/2 -translate-y-1/2 border-t-4 border-dashed border-slate-700 z-0"></div>
                  )}
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-slate-50 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[15px] text-slate-400 leading-relaxed max-w-[220px]">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

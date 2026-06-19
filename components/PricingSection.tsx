import { MoveDownLeft, RefreshCcw, Wallet } from "lucide-react";
import React from "react";

export default function PricingSection() {
  const cards = [
    {
      id: 1,
      amount: "£0",
      label: "to open & hold",
      description: "Foreign-currency wallets, free to keep open.",
      // Wallet Icon
      icon: <Wallet className="text-blue-500" strokeWidth={1.5} size={24} />,
    },
    {
      id: 2,
      amount: "£0",
      label: "to receive",
      description: "Get paid into local account details at no cost.",
      // Down-Left Arrow Icon
      icon: (
        <MoveDownLeft className="text-blue-500" strokeWidth={1.5} size={24} />
      ),
    },
    {
      id: 3,
      amount: "0.9%",
      label: "to convert & send",
      description: "One flat fee at the live mid-market rate.",
      // Sync / Convert Icon
      icon: (
        <RefreshCcw className="text-blue-500" strokeWidth={1.5} size={24} />
      ),
    },
  ];

  return (
    <section className=" bg-[#0c1526] p-17  font-sans flex flex-col justify-center mt-18">
      <div className=" container mx-auto px-6 py-20 lg:py-15">
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-[1px] bg-blue-600"></div>
            <span className="text-blue-500 text-xs font-bold tracking-widest uppercase">
              Pricing
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold  tracking-tight mb-6">
            No surprises. Just honest fees.
          </h2>

          <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-md">
            The price you see is the price your supplier gets. No spreads, no
            monthly minimums, no hidden charges.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-[#111c35] border border-[#1e2d4a] rounded-2xl p-8 flex flex-col items-start justify-between min-h-[220px] "
            >
              {/* Icon Container */}
              <div className="p-3 bg-[#182647] rounded-xl mb-6 flex items-center justify-center">
                {card.icon}
              </div>

              {/* Pricing Context */}
              <div className="w-full mt-auto">
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-3xl md:text-4xl font-bold text-[#f0f4f8]">
                    {card.amount}
                  </span>
                  <span className="text-sm font-semibold text-[#edf2f7]">
                    {card.label}
                  </span>
                </div>

                <p className="text-[#8da2cb] text-sm md:text-base leading-snug">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from "react";
import { Check, ShieldCheck, ArrowDownLeft } from "lucide-react";

const PaymentsEscrowSection = () => {
  const features = [
    "Settlement in minutes, not days",
    "Escrow released on delivery",
    "Track every payment end to end",
  ];

  const transactions = [
    {
      id: 1,
      name: "Shenzhen Electronics Co.",
      status: "Escrow • released on delivery",
      amount: "-$8,400.00",
      amountColor: "text-slate-50",
      icon: <ShieldCheck size={18} className="text-blue-500" />,
      iconBg: "bg-blue-900/30",
    },
    {
      id: 2,
      name: "Lagos Packaging Ltd",
      status: "Paid • today 14:02",
      amount: "-₦2,310,000",
      amountColor: "text-slate-50",
      icon: <Check size={18} className="text-blue-500" />,
      iconBg: "bg-blue-900/30",
    },
    {
      id: 3,
      name: "Urban Foods Ltd",
      status: "Collection • received",
      amount: "+₦6,120,000",
      amountColor: "text-emerald-500",
      icon: <ArrowDownLeft size={18} className="text-liveGreen" />,
      iconBg: "bg-liveGreen/20",
    },
  ];

  return (
    <section className="flex flex-col justify-center mb-16 md:mb-35">
      <div className="container mx-auto px-6 py-12 md:py-20 lg:py-15">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Content - Text & List */}
          <div>
            <span className="text-blue-500 text-xs font-bold tracking-widest uppercase block mb-6">
              Payments & Escrow
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
              Pay suppliers and protect every deal
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-lg">
              Send to 30+ corridors in minutes, and hold funds in escrow until
              goods arrive — security for both sides of the trade.
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

          {/* Right Content - Transaction Card */}
          <div className="bg-[#131f37]  rounded-3xl shadow-2xl p-1 lg:p-2 w-full">
            <div className="p-4">
              {/* Card Header */}
              <div className="flex justify-between items-center mb-8">
                <h4 className="font-semibold text-[15px] ">
                  Supplier payments
                </h4>
                <div className="bg-liveGreen/30 text-liveGreen px-4 py-1.5 rounded-full text-xs font-semibold border border-liveGreen/40 tracking-wide">
                  Escrow on
                </div>
              </div>

              {/* Transaction List */}
              <div className="flex flex-col">
                {transactions.map((tx, index) => (
                  <div
                    key={tx.id}
                    className={`flex items-center justify-between py-5 ${
                      index !== transactions.length - 1
                        ? "border-b border-slate-800/80"
                        : ""
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      {/* Icon Circle */}
                      <div
                        className={`w-10 h-10 rounded-full ${tx.iconBg} flex items-center justify-center`}
                      >
                        {tx.icon}
                      </div>
                      <div>
                        <p className="font-bold  text-sm mb-0.5">{tx.name}</p>
                        <p className="text-[12px] text-slate-400 font-medium">
                          {tx.status}
                        </p>
                      </div>
                    </div>
                    <div
                      className={`font-bold text-[15px] tracking-tight ${tx.amountColor}`}
                    >
                      {tx.amount}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentsEscrowSection;

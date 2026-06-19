import React from "react";
import { Check, Plus } from "lucide-react";

const FeatureSection = () => {
  const features = [
    "GBP, USD, EUR and local currencies",
    "Local account details to get paid",
    "One balance, every market",
  ];

  const wallets = [
    {
      code: "GBP",
      name: "British Pound",
      balance: "£12,400.00",
      placeholderColor: "bg-red-900",
    },
    {
      code: "USD",
      name: "US Dollar",
      balance: "$26,180.50",
      placeholderColor: "bg-blue-900",
    },
    {
      code: "NGN",
      name: "Nigerian Naira",
      balance: "₦14,205,900",
      placeholderColor: "bg-green-800",
    },
  ];

  return (
    <section className="  pt-17  pb-5  font-sans flex flex-col justify-center mt-18">
      <div className=" container mx-auto px-6 py-20 lg:py-15">
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-[1px] bg-blue-600"></div>
            <span className="text-blue-500 text-xs font-bold tracking-widest uppercase">
              What you get
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold  tracking-tight mb-6">
            Everything you need to <br /> trade across borders
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Content - Details & List */}
          <div>
            <span className="text-blue-500 text-xs font-bold tracking-widest uppercase block mb-6">
              Multi-currency wallets
            </span>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
              Hold every currency you trade in
            </h3>
            <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-md">
              Open foreign-currency accounts in minutes and keep your money
              where your business needs it — no foreign bank, no waiting.
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

          {/* Right Content - Wallet UI Card */}
          <div className="bg-[#131f37] border border-slate-800 rounded-3xl shadow-2xl p-1 lg:p-2">
            <div className="p-4">
              {/* Card Header */}
              <div className="flex justify-between items-center mb-8">
                <h4 className="font-semibold text-lg ">Your wallets</h4>
                <button className="flex items-center gap-1.5 bg-blue-500/30 text-blue-500 hover:bg-blue-900/50 transition-colors px-4 py-2 rounded-full text-xs font-semibold tracking-wide">
                  <Plus size={14} strokeWidth={2.5} />
                  Add currency
                </button>
              </div>

              {/* Wallet Rows */}
              <div className="flex flex-col gap-3">
                {wallets.map((wallet, index) => (
                  <div
                    key={wallet.code}
                    className={`flex items-center justify-between p-4 border border-slate-600/80 rounded-2xl `}
                  >
                    <div className="flex items-center gap-5">
                      {/* Flag Placeholder */}
                      <div
                        className={`w-9 h-9 rounded-full ${wallet.placeholderColor} border border-slate-700/50`}
                      ></div>
                      <div>
                        <p className="font-bold text-sm mb-0.5">
                          {wallet.code}
                        </p>
                        <p className="text-[12px] text-slate-400 font-medium">
                          {wallet.name}
                        </p>
                      </div>
                    </div>
                    <p className="font-bold text-[15px]  tracking-tight">
                      {wallet.balance}
                    </p>
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

export default FeatureSection;

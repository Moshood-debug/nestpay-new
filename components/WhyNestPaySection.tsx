import React from "react";
import { BadgePercent, ShieldCheck, Zap, Globe, User } from "lucide-react";

const WhyNestPaySection = () => {
  return (
    <section className=" bg-[#0c1526] py-28  px-6 md:px-16 lg:px-24  flex flex-col justify-center">
      <div className="container mx-auto w-full">
        {/* Header Section */}
        <div className="mb-14">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-[1px] bg-blue-600"></div>
            <span className="text-blue-500 text-xs font-bold tracking-widest uppercase">
              Why NestPay
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-5">
            Built for how MSMEs really trade
          </h2>

          <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
            Honest pricing, real protection, and coverage across the markets you
            actually buy and sell in.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-5">
          <div className="col-span-1 md:col-span-3 bg-[#0d2244] p-6 md:p-7 rounded-3xl shadow-lg">
            <div className="w-12 h-12 rounded-xl bg-[#1e3465] flex items-center justify-center mb-8">
              <BadgePercent size={24} className="" strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="text-3xl md:text-5xl font-bold  mb-3 tracking-tight">
                0.9% flat
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                One transparent fee on every conversion. No spread games, no
                hidden FX markup, no monthly minimums.
              </p>
            </div>
          </div>

          <div className="col-span-1 md:col-span-3 bg-[#0d2c37] p-6 md:p-7 rounded-3xl shadow-lg ">
            <div className="w-12 h-12 rounded-xl bg-[#1e3f4b] flex items-center justify-center mb-8">
              <ShieldCheck size={24} className="" strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-bold  mb-3 tracking-tight">
                Escrow-protected trade
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                Hold a supplier's payment until goods are verified and delivered
                — protection that used to be reserved for the biggest importers.
              </p>
            </div>
          </div>

          {/* Card 3: Minutes */}
          <div className="col-span-1 md:col-span-2 bg-[#272722] p-6 md:p-7 rounded-3xl shadow-lg  flex flex-col justify-between">
            <div className="w-12 h-12 rounded-xl bg-[#3f3c25] flex items-center justify-center mb-8">
              <Zap size={24} className="text-yellow-100" strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="text-3xl md:text-5xl font-bold  mb-3 tracking-tight">
                Minutes
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                Typical settlement time
              </p>
            </div>
          </div>

          {/* Card 4: 30+ Corridors */}
          <div className="col-span-1 md:col-span-2 bg-[#202148] p-6 md:p-7 rounded-3xl shadow-lg  flex flex-col justify-between">
            <div className="w-12 h-12 rounded-xl bg-[#353658] flex items-center justify-center mb-8">
              <Globe size={24} className="text-purple-100" strokeWidth={1.5} />
            </div>

            <div>
              {/* Flag Overlaps Placeholder */}
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 rounded-full bg-green-700 border-2 border-[#1c1836] relative z-40"></div>
                <div className="w-8 h-8 rounded-full bg-yellow-600 border-2 border-[#1c1836] -ml-3 relative z-30"></div>
                <div className="w-8 h-8 rounded-full bg-blue-800 border-2 border-[#1c1836] -ml-3 relative z-20"></div>
                <div className="w-8 h-8 rounded-full bg-red-800 border-2 border-[#1c1836] -ml-3 relative z-10"></div>
              </div>
              <h3 className="text-LG font-bold  mb-2 tracking-tight">
                30+ corridors
              </h3>
              <p className="text-slate-400 text-[14px]">
                Across Africa, Europe, the US and Asia.
              </p>
            </div>
          </div>

          {/* Card 5: KYC built for MSMEs */}
          <div className="col-span-1 md:col-span-2 bg-[#2a1a22] p-6 md:p-7 rounded-3xl shadow-lg  flex flex-col justify-between">
            <div className="w-12 h-12 rounded-xl bg-[#47303c] flex items-center justify-center mb-8">
              <User size={24} className="text-red-100" strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="text-LG font-bold  mb-2 tracking-tight">
                KYC built for MSMEs
              </h3>
              <p className="text-slate-400 text-[14px] leading-relaxed">
                Get verified and trading in minutes, with onboarding sized for
                small businesses.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyNestPaySection;

import Link from "next/link";
import {
  Apple,
  Play,
  Bell,
  ChevronDown,
  ArrowDown,
  Zap,
  ArrowRight,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden ">
      <div className="container mx-auto px-6 py-20 lg:py-15">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <div className="mb-8 flex items-center gap-3">
              <div className="h-px w-10 bg-blue-600" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-500">
                The cross-border money app for African business
              </span>
            </div>

            <h1 className="max-w-xl text-5xl font-bold leading-none md:text-7xl">
              Trade without borders
            </h1>

            <p className="mt-8 max-w-lg text-lg leading-relaxed text-slate-400">
              Hold every currency you trade in, convert at honest rates, and pay
              suppliers worldwide in minutes — all from one app in your pocket.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="#"
                className="flex items-center gap-3 rounded-xl border border-slate-700 px-6 py-4 text-white transition hover:border-slate-500"
              >
                <Apple size={22} />
                <span className="font-medium">Get on Apple</span>
              </Link>

              <Link
                href="#"
                className="flex items-center gap-3 rounded-xl border border-slate-700 px-6 py-4 text-white transition hover:border-slate-500"
              >
                <Play size={20} />
                <span className="font-medium">Get on Android</span>
              </Link>
            </div>

            <div className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-5">
                {[1, 2, 3, 4, 5].map((item) => (
                  <div
                    key={item}
                    className="h-12 w-12 rounded-full border-2 border-[#020d2b] bg-slate-300"
                  />
                ))}
              </div>

              <p className="max-w-xs text-sm text-slate-400">
                Trusted by 4,000+ businesses moving money across 30+ corridors.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center p-4 font-sans relative">
            <div className="relative w-full max-w-96 h-190 bg-[#0c1527] rounded-[3rem] shadow-2xl border-6 border-gray-950 overflow-hidden">
              <div className="flex justify-center pt-5">
                <div className="bg-gray-950 rounded-full w-30 h-8 "></div>
              </div>
              <div className="p-6 pt-8">
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center gap-3">
                    {/* Avatar Placeholder */}
                    <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700"></div>
                    <div>
                      <p className="text-xs text-slate-400">Welcome back</p>
                      <p className="font-semibold text-slate-50">Amara Okeke</p>
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center">
                    <Bell size={18} className="text-slate-300" />
                  </div>
                </div>

                <div className=" border border-slate-700 rounded-2xl p-4 bg-[#131f37]">
                  <div className="flex  justify-between">
                    <p className="text-slate-400 text-sm mb-1">
                      Account Balance
                    </p>{" "}
                    <button className="flex items-center gap-2  px-3 py-2 rounded-full border border-slate-700 hover:bg-slate-700 transition-colors">
                      {/* Flag Placeholder */}
                      <div className="w-5 h-5 rounded-full bg-green-700"></div>
                      <span className="text-slate-50 font-medium text-sm">
                        NGN
                      </span>
                      <ChevronDown size={16} className="text-slate-400" />
                    </button>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-3xl font-bold text-slate-50">
                      ₦1500000
                    </span>
                  </div>
                </div>

                <div className="flex flex-col items-end gap-5 mt-5">
                  <p className="text-sm text-blue-500">50,000</p>
                  <p className="text-sm text-white">50,000</p>
                  <p className="text-sm text-liveGreen">50,000</p>
                  <p className="text-sm text-liveGreen">50,0.00</p>
                </div>
              </div>
            </div>

            <div className="absolute  top-50 right-54 max-w-95  bg-[#131f37] rounded-3xl p-6 shadow-xl border border-slate-700">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-bold ">Send money</h2>
                <div className="flex items-center gap-2 bg-liveGreen/30 px-3 py-1 rounded-full">
                  <div className="w-2 h-2 rounded-full bg-liveGreen"></div>
                  <span className="text-liveGreen text-xs font-medium">
                    Live rate
                  </span>
                </div>
              </div>

              <div className=" border border-slate-700 rounded-2xl p-4">
                <p className="text-slate-400 text-sm mb-1">You send</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-slate-50">
                    ₦1500000
                  </span>
                  <button className="flex items-center gap-2  px-3 py-2 rounded-full border border-slate-700 hover:bg-slate-700 transition-colors">
                    <div className="w-4 h-4 rounded-full bg-green-700"></div>
                    <span className="text-slate-50 font-medium text-sm">
                      NGN
                    </span>
                    <ChevronDown size={16} className="text-slate-400" />
                  </button>
                </div>
              </div>

              <div className="relative flex items-center justify-between py-4">
                <div className="absolute left-[1.25rem] right-0 top-1/2 -translate-y-1/2 h-[1px] bg-slate-800"></div>

                <div className="w-10 h-10 rounded-full bg-blue-900/40 flex items-center justify-center z-10 relative">
                  <ArrowDown size={20} className="text-blue-500" />
                </div>

                <div className="bg-slate-800 text-slate-50 text-sm font-medium px-4 py-1.5 rounded-full z-10 relative border border-slate-700">
                  $1 = ₦1,631
                </div>
              </div>

              <div className="border border-slate-700 rounded-2xl p-4 mb-6">
                <p className="text-slate-400 text-sm mb-1">Recipient gets</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-slate-50">$911</span>
                  <button className="flex items-center gap-2  px-3 py-2 rounded-full border border-slate-700 hover:bg-slate-700 transition-colors">
                    <div className="w-4 h-4 rounded-full bg-blue-800"></div>
                    <span className="text-slate-50 font-medium text-sm">
                      USD
                    </span>
                    <ChevronDown size={16} className="text-slate-400" />
                  </button>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mb-8">
                <button className="bg-blue-800/30 border border-blue-800 text-slate-50 px-4 py-2 rounded-full text-xs font-medium">
                  NGN → USD
                </button>
                <button className="bg-transparent border border-slate-700 text-slate-400 px-4 py-2 rounded-full text-xs font-medium hover:bg-slate-800 transition-colors">
                  GBP → NGN
                </button>
                <button className="bg-transparent border border-slate-700 text-slate-400 px-4 py-2 rounded-full text-xs font-medium hover:bg-slate-800 transition-colors">
                  USD → NGN
                </button>
                <button className="bg-transparent border border-slate-700 text-slate-400 px-4 py-2 rounded-full text-xs font-medium hover:bg-slate-800 transition-colors">
                  GBP → KES
                </button>
                <button className="bg-transparent border border-slate-700 text-slate-400 px-4 py-2 rounded-full text-xs font-medium hover:bg-slate-800 transition-colors">
                  EUR → GHS
                </button>
              </div>

              <div className="flex justify-between items-center mb-4 px-1">
                <p className="text-xs text-slate-400">
                  Flat fee{" "}
                  <span className="text-slate-50 font-semibold">₦13,500</span> •
                  0.9%
                </p>
                <p className="text-xs text-emerald-500 flex items-center gap-1 font-medium">
                  <Zap size={14} className="text-emerald-500" />
                  Arrives in minutes
                </p>
              </div>

              {/* Primary Action Button */}
              <button className="w-full bg-[#0b248a] hover:bg-blue-800 text-slate-50 text-lg font-semibold py-4 rounded-xl flex items-center justify-center gap-2 transition-colors">
                Send ₦1,500,000
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

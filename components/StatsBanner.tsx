import React from "react";

const StatsBanner = () => {
  const stats = [
    {
      id: 1,
      value: "$2.4B+",
      label: "Settled across borders",
    },
    {
      id: 2,
      value: "30.0+",
      label: "Currency corridors",
    },
    {
      id: 3,
      value: "4,000+",
      label: "Businesses trading",
    },
    {
      id: 4,
      value: "2.0 min",
      label: "Average settlement",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-12 lg:py-15 mt-8 lg:mt-18">
      <div className="bg-[#0c1527] border border-slate-800 rounded-2xl shadow-xl px-6 py-10 md:px-10 md:py-12 lg:p-15">
        <div className="grid grid-cols-2 gap-8 md:flex md:flex-row md:justify-between md:items-center md:gap-4">
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              className={`flex flex-col items-center text-center md:items-start md:text-left w-full md:w-auto `}
            >
              <h3 className="text-3xl font-bold text-slate-50 tracking-tight mb-1 md:text-4xl lg:text-5xl lg:mb-2">
                {stat.value}
              </h3>
              <p className="text-xs font-medium text-slate-400 md:text-sm lg:text-[15px] lg:text-slate-300">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBanner;

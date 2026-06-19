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
    <section className=" container mx-auto px-6 py-20 lg:py-15  mt-18">
      <div className="  p-15 bg-[#0c1527] border border-slate-800 rounded-2xl  flex flex-col md:flex-row justify-between items-center gap-10 md:gap-4 shadow-xl">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="flex flex-col items-start w-full md:w-auto text-left"
          >
            <h3 className="text-5xl font-bold text-slate-50 tracking-tight mb-2">
              {stat.value}
            </h3>
            <p className="text-[15px] font-medium ">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsBanner;

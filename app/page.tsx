import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import StatsBanner from "@/components/StatsBanner";

import Image from "next/image";

export default function Home() {
  return (
    <section className="pb-15">
      <Hero />
      <StatsBanner />
      <HowItWorks />
    </section>
  );
}

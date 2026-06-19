import FeatureSection from "@/components/FeatureSection";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import PaymentsEscrowSection from "@/components/PaymentsEscrowSection";
import RealTimeFxSection from "@/components/RealTimeFxSection";
import StatsBanner from "@/components/StatsBanner";
import TestimonialCard from "@/components/TestimonialCard";
import WhyNestPaySection from "@/components/WhyNestPaySection";

import Image from "next/image";

export default function Home() {
  return (
    <section className="pb-15">
      <Hero />
      <StatsBanner />
      <HowItWorks />
      <FeatureSection />
      <RealTimeFxSection />
      <PaymentsEscrowSection />
      <WhyNestPaySection />
      <TestimonialCard />
    </section>
  );
}

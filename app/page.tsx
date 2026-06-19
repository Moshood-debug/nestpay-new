import FeatureSection from "@/components/FeatureSection";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import PaymentsEscrowSection from "@/components/PaymentsEscrowSection";
import PricingSection from "@/components/PricingSection";
import RealTimeFxSection from "@/components/RealTimeFxSection";
import StatsBanner from "@/components/StatsBanner";
import TestimonialCard from "@/components/TestimonialCard";
import TradeCTA from "@/components/TradeCTA";
import WhyNestPaySection from "@/components/WhyNestPaySection";

import Image from "next/image";

export default function Home() {
  return (
    <section className="">
      <Hero />
      <StatsBanner />
      <HowItWorks />
      <FeatureSection />
      <RealTimeFxSection />
      <PaymentsEscrowSection />
      <WhyNestPaySection />
      <TestimonialCard />
      <PricingSection />
      <TradeCTA />
    </section>
  );
}

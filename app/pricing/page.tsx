import FAQ from "@/components/faq";
import ComparePricing from "@/components/pricingpage/comparePricing";
import { Pricing } from "@/components/pricingpage/pricingCards";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "The Fetcher - Pricing",
  description: "Connect any API to monday, without code",
};
export default function page() {
  return (
    <div className="">
      <ComparePricing />

      <Pricing />
      <FAQ />
    </div>
  );
}

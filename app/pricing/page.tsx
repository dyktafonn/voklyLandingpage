import FAQ from "@/components/faq";
import { Pricing } from "@/components/pricingpage/pricingCards";
import { Metadata } from "next";
import React from "react";

type Props = {};
export const metadata: Metadata = {
  title: "The Fetcher - Pricing",
  description: "Connect any API to Monday, without code",
};
export default function page({}: Props) {
  return (
    <div className="">
      <Pricing />
      <FAQ />
    </div>
  );
}

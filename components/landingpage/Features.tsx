import React from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import FeaturesCards from "./FeaturesCards";
import Image from "next/image";
import Integrations from "@/public/integrations.svg";
import CTAButton from "../cta-button";
type Props = {};

export default function Features({}: Props) {
  return (
    <div className="w-full bg-primary/15">
      <div className="h-full mx-auto w-11/12 max-w-screen-xl flex ">
        <div className="lg:grid lg:grid-cols-2 flex flex-col items-center gap-8 py-12">
          <div className="flex flex-col gap-4">
            <Image alt="integration" src={Integrations} />

            <div className="flex flex-col gap-4 flex-1">
              <h2 className="text-5xl font-bold lg:text-left text-center">
                Simplify your Monday <br />
                <span className="text-primary">data management</span>
              </h2>
              <p className="text-xl lg:text-left text-center">
                The Fetcher bridges the gap between Monday and your external
                data.
              </p>
              <p className="text-xl lg:text-left text-center">
                Add a new level to your Monday boards with reliable data imports
                and flexible data transformations.
              </p>
              <CTAButton className="lg:w-fit">
                Try for free <ArrowRight />
              </CTAButton>
            </div>
          </div>
          <FeaturesCards />
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import Values from "./Values";
import CTAButton from "../cta-button";

export default function ValueSection() {
  return (
    <div className="w-full bg-primary/15">
      <div className="h-full mx-auto w-11/12 max-w-screen-xl flex">
        <div className="lg:grid lg:grid-cols-2 flex flex-col items-center gap-8 py-12">
          <div className="flex flex-col gap-4 flex-1">
            <h2 className="text-5xl font-bold lg:text-left text-center">
              Use Monday as your <br />
              <span className="text-primary">centralized database</span>
            </h2>
            <p className="text-xl lg:text-left text-center">
              Convert Monday boards to the central hub for all your business
              data.
            </p>
            <p className="text-xl lg:text-left text-center">
              Combine and streamline data from the tools you use every day into
              a clean, organized location.
            </p>
            <CTAButton className="lg:w-fit">
              Try The Fetcher for free <ArrowRight />
            </CTAButton>
          </div>
          <Values></Values>
        </div>
      </div>
    </div>
  );
}

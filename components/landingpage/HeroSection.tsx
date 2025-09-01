import React from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import HeroFeatures from "./heroFeatures";
import CTAButton from "../cta-button";
import VideoPlayer from "../video-player";

export default function HeroSection() {
  return (
    <div className="w-full">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-40 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-lilac-bush-500 opacity-50 blur-[100px]"></div>
      </div>
      <div className="z-10 h-full mx-auto w-11/12 max-w-screen-xl flex flex-col lg:flex-row ">
        <div className="lg:grid lg:grid-cols-2 lg:items-center gap-8 py-12 flex flex-col">
          <div className="flex flex-col gap-4 flex-1">
            <h1 className="text-5xl font-bold max-md:text-center">
              Connect <span className="text-primary">any API</span> to Monday,
              without code
            </h1>
            <p className="text-xl max-md:text-center">
              The Fetcher is the{" "}
              <span className="text-primary">no-code solution </span> for
              importing API data into Monday. Connect to any REST API with a
              simple interface, right inside Monday.
            </p>
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              <CTAButton className="w-fit">
                Try for free <ArrowRight />
              </CTAButton>
              <HeroFeatures></HeroFeatures>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <VideoPlayer />
          </div>
        </div>
      </div>
    </div>
  );
}

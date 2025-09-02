import React from "react";
import Integrations from "@/public/integrations.svg";
import Image from "next/image";
import CTAButton from "@/components/cta-button";
import { ArrowRight } from "lucide-react";
import { Metadata } from "next";
import VideoPlayer from "@/components/video-player";
export const metadata: Metadata = {
  title: "The Fetcher - Rest API",
  description: "Connect any API to Monday, without code",
};
export default function page() {
  return (
    <div className="flex flex-col mx-auto max-w-screen-xl min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 px-4 lg:p-0">
        <div className="flex flex-col gap-4 items-center justify-center">
          <h1 className="text-6xl font-semibold text-center lg:text-left">
            Monday & <span className="text-primary">REST API</span> integration
          </h1>
          <p className="text-center lg:text-left">
            Import data from any REST API using a simple no-code API
            integration. Connect Monday to any REST API and thousands of other
            apps with The Fetcher.
          </p>
          <CTAButton className="lg:self-start w-full lg:w-fit">
            Get your discount <ArrowRight />
          </CTAButton>
        </div>
        <Image src={Integrations} alt="integration"></Image>
      </div>
      <VideoPlayer />
    </div>
  );
}

import React from "react";
import Integrations from "@/public/integrations.svg";
import Image from "next/image";
import CTAButton from "@/components/cta-button";
import { ArrowRight } from "lucide-react";
import { Metadata } from "next";
import VideoPlayer from "@/components/video-player";
import { Badge } from "@/components/ui/badge";
import Step1 from "@/public/rest-api/step1.png";
import Step2 from "@/public/rest-api/step2.png";
import Step3 from "@/public/rest-api/step3.png";

export const metadata: Metadata = {
  title: "The Fetcher - Rest API",
  description: "Connect any API to monday, without code",
};
export default function page() {
  return (
    <div className="flex flex-col mx-auto max-w-screen-xl min-h-screen gap-8 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 px-4 lg:p-0">
        <div className="flex flex-col gap-4 items-center justify-center">
          <h1 className="text-6xl font-semibold text-center lg:text-left">
            monday & <span className="text-primary">REST API</span> integration
          </h1>
          <p className="text-center lg:text-left">
            Import data from any REST API using a simple no-code API
            integration. Connect monday to any REST API and thousands of other
            apps with The Fetcher.
          </p>
          <CTAButton className="lg:self-start w-full lg:w-fit">
            Get your discount <ArrowRight />
          </CTAButton>
        </div>
        <Image src={Integrations} alt="integration"></Image>
      </div>
      <VideoPlayer />
      <div className="flex flex-col items-center justify-center gap-4">
        <h2 className="text-6xl font-semibold text-center  ">
          The no-code solution for connecting{" "}
          <span className="text-primary"> any REST API</span> to monday.com
        </h2>
        <p className="text-center text-xl">
          It takes just 3 simple steps to get up and running with The Fetcher’s
          no-code imports into monday
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full self-start items-center gap-4">
          <div className="flex flex-col gap-2">
            <Badge className="bg-lilac-bush-200 text-primary text-md font-semibold">
              Step 1
            </Badge>
            <h3 className="text-2xl font-semibold">
              Connect monday to any REST API
            </h3>
            <p className="text-lg ">
              Create a custom request to connect monday to any REST API or
              remote file. Enter the request details like URL, method, and body
              to get the data you need. Set up authentication if needed.
            </p>
          </div>
          <div className="w-full rounded-2xl overflow-hidden shadow-xs h-full">
            <Image src={Step1} alt="" quality={100}></Image>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full self-start items-center gap-4">
          <div className="flex flex-col gap-2">
            <Badge className="bg-lilac-bush-200 text-primary text-md font-semibold">
              Step 2
            </Badge>
            <h3 className="text-2xl font-semibold">Map the fields</h3>
            <p className="text-lg ">
              Select which REST API data fields you want to import and map them
              to your existing monday fields. Choose how new data should merge
              with existing records in your board.
            </p>
          </div>
          <div className="w-full rounded-2xl overflow-hidden shadow-xs h-full">
            <Image src={Step2} alt="" quality={100}></Image>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full self-start items-center gap-4">
          <div className="flex flex-col gap-2">
            <Badge className="bg-lilac-bush-200 text-primary text-md font-semibold">
              Step 3
            </Badge>
            <h3 className="text-2xl font-semibold">
              Automate your monday REST API sync
            </h3>
            <p className="text-lg ">
              Keep your monday data fresh by scheduling automatic updates at any
              interval.
            </p>
          </div>
          <div className="w-full rounded-2xl overflow-hidden shadow-xs h-full">
            <Image src={Step3} alt="" quality={100}></Image>
          </div>
        </div>
      </div>
    </div>
  );
}

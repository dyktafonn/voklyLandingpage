import { buttonVariants } from "@/components/ui/button";
import VideoPlayer from "@/components/video-player";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="z-10  mx-auto w-11/12 max-w-screen-xl min-h-screen flex flex-col py-24 gap-8">
      <div className="flex flex-col lg:flex-row items-center gap-4">
        <div className="space-y-4">
          <p className="text-4xl font-semibold max-lg:text-center">
            The Fetcher Help Center
          </p>
          <p className="text-xl max-lg:text-center">
            Welcome to The Fetcher help center! We&apos;re here to answer your
            questions. Can&apos;t find what you&apos;re looking for? Send our
            support team a note at{" "}
            <Link
              className={cn(
                buttonVariants({ variant: "link" }),
                "p-0 h-fit text-xl"
              )}
              href={"mailto:help@vokly.pl"}
            >
              help@vokly.pl
            </Link>
          </p>
        </div>
        <VideoPlayer />
      </div>
      <div className="flex flex-col items-center gap-4">
        <p className="uppercase text-4xl font-black text-center">
          How to use The Fetcher
        </p>
        <p className="text-xl ">
          You can read our docs{" "}
          <Link
            className={cn(
              buttonVariants({ variant: "link" }),
              "p-0 h-fit text-xl"
            )}
            target="_blank"
            href={"https://help.vokly.pl"}
          >
            here
          </Link>
        </p>
      </div>
    </div>
  );
}

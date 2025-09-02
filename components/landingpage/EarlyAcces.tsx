import React from "react";
import CTAButton from "../cta-button";

export default function EarlyAccess() {
  return (
    <div className="w-full h-[50vh] my-5">
      <div className="h-full mx-auto w-11/12 max-w-screen-xl flex flex-col gap-4 items-center justify-center">
        <h1 className="text-5xl font-bold text-center">
          Get Early Access to <span className="text-primary">The Fetcher</span>
        </h1>
        <p className="text-xl max-md:text-center">
          Join our waitlist today and be the first to connect any API to
          Monday.com. Early adopters get 15% off for life and priority
          onboarding.
        </p>
        <CTAButton>Join the waitlist now</CTAButton>
      </div>
    </div>
  );
}

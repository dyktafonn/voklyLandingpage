import { BadgeCheck, CircleArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import mondayLogo from "@/public/Monday_logo.svg";

import Logo from "@/public/logo.svg";

const compare: { monday: string; theFetcher: string }[] = [
  {
    monday: "Limited to built-in integrations and CSV imports",
    theFetcher: "Connect to any REST or GraphQL API in minutes",
  },
  {
    monday: "Manual updates required",
    theFetcher:
      "Automated scheduling every 5 minutes, hourly, daily, or custom",
  },
  {
    monday: "Dependent on costly 3rd-party tools (Zapier, Integromat, etc.)",
    theFetcher: "Direct API integration, no middlemen — faster & cheaper",
  },
];

export default function CompareTable() {
  return (
    <div className="bg-primary/10 p-8 w-full rounded-xl flex flex-col shadow-xs">
      <div className="lg:grid-cols-2 grid-cols-1 grid text-2xl font-semibold p-4">
        <div className="w-full items-center justify-center lg:flex hidden">
          <Image src={mondayLogo} alt="monday_logo" className="max-w-1/2" />
        </div>
        <div className="w-full flex items-center justify-center gap-2">
          <Image src={mondayLogo} alt="monday_logo" className="max-w-1/2" />
          <p>+</p>
          <Image alt="logo" src={Logo} className="max-w-1/3" />
        </div>
      </div>
      {compare.map((compareValue, indx) => (
        <div
          className="grid border-primary/50 border-b lg:grid-cols-2 grid-cols-1 p-4 text-center "
          key={indx}
        >
          <div className="lg:flex gap-2 w-full items-center hidden">
            <CircleArrowRight className="text-blue-500" />
            <p className="font-semibold">{compareValue.monday}</p>
          </div>
          <div className="flex gap-2 w-full items-center">
            <BadgeCheck className="text-primary" />
            <p className="font-semibold">{compareValue.theFetcher}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

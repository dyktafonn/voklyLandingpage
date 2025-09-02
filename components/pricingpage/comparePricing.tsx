"use client";
import React from "react";
import { Slider } from "../ui/slider";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ComparePricing() {
  const max = 6;
  const skipInterval = 1;
  const ticks = [1000, 10000, 100000, 300000, 1000000, 4000000, 8000000];
  const [value, setValue] = React.useState<number>(0);

  const costs = React.useMemo((): {
    theFetcher: number;
    make: number | string;
    zapier: number | string;
    cheapIcon: string;
    expensiveIcon: string;
  } => {
    if (value == 0) {
      return {
        theFetcher: 0,
        make: 0,
        zapier: 58,
        cheapIcon: "😊",
        expensiveIcon: "😟",
      };
    }
    if (value == 1) {
      return {
        theFetcher: 0,
        make: 10,
        zapier: 129,
        cheapIcon: "😊",
        expensiveIcon: "😟",
      };
    }
    if (value === 2) {
      return {
        theFetcher: 29,
        make: 116,
        zapier: 733,
        cheapIcon: "😂",
        expensiveIcon: "😢",
      };
    }
    if (value === 3) {
      return {
        theFetcher: 29,
        make: 214,
        zapier: 1599,
        cheapIcon: "🤣",
        expensiveIcon: "😰",
      };
    }
    if (value === 4) {
      return {
        theFetcher: 59,
        make: 631,
        zapier: 3299,
        cheapIcon: "🥳",
        expensiveIcon: "😱",
      };
    }
    if (value === 5) {
      return {
        theFetcher: 99,
        make: 1162,
        zapier: 5099,
        cheapIcon: "🥳",
        expensiveIcon: "😱",
      };
    }
    if (value === 6) {
      return {
        cheapIcon: "🥳",
        expensiveIcon: "😱",
        theFetcher: 149,
        make: "Enterprise plan",
        zapier: "Enterprise plan",
      };
    }

    return {
      theFetcher: 0,
      make: 0,
      zapier: 0,
      cheapIcon: "😊",
      expensiveIcon: "😊",
    };
  }, [value]);

  return (
    <div className="flex flex-col items-center justify-center gap-4 py-8">
      <p className="text-3xl font-semibold text-center ">
        The Fetcher vs Make vs Zapier pricing
      </p>
      <p className="text-xl text-center">
        Your expected number of response fields per month?
      </p>
      <Select
        value={value.toString()}
        onValueChange={(val) => setValue(Number(val))}
      >
        <SelectTrigger className="w-1/3 lg:hidden">
          <SelectValue placeholder="Select fields" />
        </SelectTrigger>
        <SelectContent>
          {ticks.map((val, i) => (
            <SelectItem value={i.toString()} key={val}>
              {val.toLocaleString("en-US")}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <div className="lg:w-1/3 max-lg:hidden ">
        <Slider
          defaultValue={[5]}
          max={max}
          value={[value]}
          aria-label="Slider with ticks"
          onValueChange={(val) => setValue(val[0])}
        />
        <span
          className="text-muted-foreground mt-3 flex w-full items-center justify-between gap-1 px-2.5 text-xs font-medium"
          aria-hidden="true"
        >
          {ticks.map((val, i) => (
            <span
              key={i}
              className="flex w-0 flex-col items-center justify-center gap-2"
            >
              <span
                className={cn(
                  "bg-muted-foreground/70 h-1 w-px",
                  i % skipInterval !== 0 && "h-0.5"
                )}
              />
              <span className={cn(i % skipInterval !== 0 && "opacity-0")}>
                {val.toLocaleString("en-US")}
              </span>
            </span>
          ))}
        </span>
      </div>
      <p className="text-xl">
        {ticks[value].toLocaleString("en-US")} response fields
      </p>

      <div className="flex gap-4 lg:flex-row flex-col">
        <div className="text-center flex flex-col gap-4">
          <p className="text-3xl">The Fetcher</p>
          <p className="text-2xl">
            ${costs.theFetcher} {costs.cheapIcon}
          </p>
        </div>
        <div className="text-center flex flex-col gap-4">
          <p className="text-3xl">Make</p>
          <p className="text-2xl">
            {`${
              typeof costs.make === "string"
                ? `${costs.make}`
                : `$${costs.make}`
            }`}{" "}
            {value <= 1 ? costs.cheapIcon : costs.expensiveIcon}
          </p>
        </div>
        <div className="text-center flex flex-col gap-4">
          <p className="text-3xl">Zapier</p>
          <p className="text-2xl">
            {`${
              typeof costs.zapier === "string"
                ? `${costs.zapier}`
                : `$${costs.zapier}`
            }`}{" "}
            {costs.expensiveIcon}
          </p>
        </div>
      </div>
    </div>
  );
}

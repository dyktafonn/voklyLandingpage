import React from "react";
import CompareTable from "./CompareTable";

type Props = {};

export default function CompareSection({}: Props) {
  return (
    <div className="mx-auto max-w-screen-xl">
      <div className="flex w-full flex-col gap-8 items-center justify-center py-12">
        <div className="space-y-4">
          <h2 className="text-5xl text-center font-semibold">
            Love Monday, <br />{" "}
            <span className="text-primary">hate data wrangling</span>
          </h2>
          <p className="text-center text-lg">
            Monday is a great no-code database, but it has limitations when
            working with dynamic, external data. The Fetcher&apos;s
            user-friendly API connector fixes that.
          </p>
        </div>
        <CompareTable />
      </div>
    </div>
  );
}

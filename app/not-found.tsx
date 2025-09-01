import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

import React from "react";

type Props = {};

export default function NotFound({}: Props) {
  return (
    <div className="flex w-full h-full  flex-col flex-1 ">
      <div className="flex-1 flex items-center w-full h-full justify-center flex-col">
        <p className="text-8xl font-bold">404</p>
        <p className="text-9xl font-semibold">Page not found</p>
        <Link href="/" className={buttonVariants()}>
          Back to home
        </Link>
      </div>
    </div>
  );
}

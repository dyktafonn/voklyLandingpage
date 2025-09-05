import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ChevronUp, Mail } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "The Fetcher - Contact",
  description: "Connect any API to monday, without code",
};
export default function page() {
  return (
    <div className="flex flex-col mx-auto max-lg:px-8 max-w-screen-xl gap-4">
      <p className="w-full text-center text-6xl font-bold">Contact</p>
      <Card className="w-full">
        <CardContent>
          <div className="flex gap-2 items-center">
            <ChevronUp className="size-12 text-primary" />
            <p className="text-2xl font-semibold">Feedback</p>
          </div>
          <p className="text-lg">
            Pleas report any error&apos;:{" "}
            <Link
              href={"https://insigh.to/b/the-fetcher-feedback"}
              className={cn(
                buttonVariants({
                  variant: "link",
                }),
                "p-0 text-lg h-fit"
              )}
            >
              here
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

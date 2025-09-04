import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Mail } from "lucide-react";
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
            <Mail className="size-12 text-primary" />
            <p className="text-2xl font-semibold">Email support</p>
          </div>
          <p className="text-lg">
            The best way to get in touch with us is our email:{" "}
            <Link
              href={"mailto:help@vokly.pl"}
              className={cn(
                buttonVariants({
                  variant: "link",
                }),
                "p-0 text-lg h-fit"
              )}
            >
              help@vokly.pl
            </Link>
          </p>
        </CardContent>
      </Card>
      <iframe src="https://help.vokly.pl/index"></iframe>
    </div>
  );
}

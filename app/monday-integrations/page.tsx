import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import RestApi from "@/public/rest-api-icon.svg";
import Link from "next/link";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { Metadata } from "next";
const integrations: {
  name: string;
  href: string;
  description: string;
  logo: StaticImport;
  category?: string;
}[] = [
  {
    name: "Rest API",
    href: "/integration/rest-api",
    description: "Connect to any REST API using HTTP(S) requests",
    logo: RestApi,
  },
];
export const metadata: Metadata = {
  title: "The Fetcher - Integrations",
  description: "Connect any API to Monday, without code",
};
export default function page() {
  return (
    <div className="flex flex-col mx-auto max-w-screen-xl min-h-screen">
      <div className="flex flex-col gap-2 h-full">
        <h1 className="w-full text-center text-5xl font-semibold">
          Monday Integrations
        </h1>
        <p className="w-full text-center text-lg font-semibold text-muted-foreground">
          Connect Monday to any application or API with The Fetcher&apos;s
          Monday integrations
        </p>
        <div className="flex gap-2 h-full px-4 lg:px-0">
          <div className="grid lg:grid-cols-3 grid-cols-1 w-full h-full">
            {integrations.map(({ description, href, logo, name }) => (
              <Link href={href} key={name}>
                <Card className="w-full border-primary/25 hover:border-primary transition-colors ease-in-out duration-200">
                  <CardContent className="flex items-center justify-center flex-col gap-2">
                    <div className="flex gap-2 items-center">
                      <Image
                        alt={`logo-${name}`}
                        src={logo}
                        className="size-16 rounded-full"
                      />
                      <p className="text-2xl font-semibold">{name}</p>
                    </div>

                    <p>{description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
